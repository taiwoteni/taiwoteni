import { createElement } from "react";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactConfirmation, { contactConfirmationText } from "@/emails/ContactConfirmation";
import ContactNotification, { contactNotificationText, firstName } from "@/emails/ContactNotification";
import { ALERTS_FROM, CONTACT_TO, PERSONAL_FROM } from "@/lib/email/config";
import { CONTACT_TOPICS, type ContactTopic } from "@/lib/site";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* Best-effort, per-instance rate limit: 5 submissions per IP per 10 minutes. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_HITS;
}

type Fields = { name: string; email: string; topic: ContactTopic; message: string };

function validate(body: unknown): { fields?: Fields; errors?: Record<string, string>; spam?: boolean } {
  const b = (body ?? {}) as Record<string, unknown>;
  const str = (v: unknown) => (typeof v === "string" ? v.trim() : "");
  if (str(b.company)) return { spam: true };

  const name = str(b.name);
  const email = str(b.email);
  const topic = str(b.topic);
  const message = str(b.message);

  const errors: Record<string, string> = {};
  if (!name || name.length > 100) errors.name = "Enter your name (up to 100 characters).";
  if (!EMAIL_RE.test(email) || email.length > 200) errors.email = "Enter a valid email address.";
  if (!(CONTACT_TOPICS as readonly string[]).includes(topic)) errors.topic = "Choose a topic.";
  if (!message || message.length > 5000) errors.message = "Enter a message (up to 5,000 characters).";

  if (Object.keys(errors).length) return { errors };
  return { fields: { name, email, topic: topic as ContactTopic, message } };
}

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.headers.get("x-real-ip") || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const { fields, errors, spam } = validate(body);
  if (spam) return NextResponse.json({ ok: true });
  if (!fields) return NextResponse.json({ ok: false, errors }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "Email is not configured" }, { status: 500 });
  }
  const resend = new Resend(apiKey);

  const receivedAt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Kigali",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());

  const notificationProps = { ...fields, receivedAt: `${receivedAt} (Kigali)` };
  const { error: notifyError } = await resend.emails.send({
    from: ALERTS_FROM,
    to: CONTACT_TO,
    replyTo: fields.email,
    subject: `[${fields.topic}] New enquiry from ${fields.name}`,
    react: createElement(ContactNotification, notificationProps),
    text: contactNotificationText(notificationProps),
    tags: [{ name: "type", value: "contact-notification" }],
  });
  if (notifyError) {
    console.error("[contact] notification failed", notifyError);
    return NextResponse.json({ ok: false, error: "Could not send message" }, { status: 502 });
  }

  const { error: confirmError } = await resend.emails.send({
    from: PERSONAL_FROM,
    to: fields.email,
    replyTo: CONTACT_TO,
    subject: `Thanks, ${firstName(fields.name)}. Your message reached me`,
    react: createElement(ContactConfirmation, fields),
    text: contactConfirmationText(fields),
    tags: [{ name: "type", value: "contact-confirmation" }],
  });
  if (confirmError) console.error("[contact] confirmation failed", confirmError);

  return NextResponse.json({ ok: true });
}
