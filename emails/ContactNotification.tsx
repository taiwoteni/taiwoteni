import { Button, Heading, Hr, Link, Section, Text } from "@react-email/components";
import Shell, { styles, tokens } from "./components/Shell";

export type ContactNotificationProps = {
  name: string;
  email: string;
  topic: string;
  message: string;
  receivedAt: string;
};

export const firstName = (name: string) => name.trim().split(/\s+/)[0] || name;

/** Delivered to Teni when someone submits the contact form. */
export default function ContactNotification({ name, email, topic, message, receivedAt }: ContactNotificationProps) {
  const first = firstName(name);
  const replyHref = `mailto:${email}?subject=${encodeURIComponent(`Re: ${topic}`)}`;

  const rows: [string, React.ReactNode][] = [
    ["Name", name],
    [
      "Email",
      <Link key="email" href={`mailto:${email}`} style={styles.link}>
        {email}
      </Link>,
    ],
    ["Topic", topic],
    ["Received", receivedAt],
  ];

  return (
    <Shell variant="alerts" preview={`${name} · ${topic} — ${message.slice(0, 90)}`}>
      <Text style={styles.label}>New enquiry</Text>
      <Heading as="h1" style={styles.heading}>
        {name} wants to talk about <span style={{ fontStyle: "italic", color: tokens.red }}>{topic.toLowerCase()}.</span>
      </Heading>
      <Text style={styles.body}>A new message just came in through the contact form on your portfolio.</Text>

      <Section style={{ ...styles.panel, marginTop: "26px" }}>
        {rows.map(([label, value], i) => (
          <div key={label}>
            {i > 0 ? <Hr style={{ borderColor: tokens.line, margin: "14px 0" }} /> : null}
            <Text style={styles.fieldLabel}>{label}</Text>
            <Text style={styles.fieldValue}>{value}</Text>
          </div>
        ))}
      </Section>

      <Text style={{ ...styles.fieldLabel, margin: "28px 0 12px" }}>Message</Text>
      <Text style={styles.quote}>{message}</Text>

      <Section style={{ marginTop: "32px" }}>
        <Button href={replyHref} style={styles.button}>
          Reply to {first} →
        </Button>
      </Section>
      <Text style={{ ...styles.body, margin: "16px 0 0", fontSize: "13px", lineHeight: "20px", color: tokens.muted }}>
        Or just hit reply — this email&apos;s reply-to is set to {email}.
      </Text>
    </Shell>
  );
}

export function contactNotificationText({ name, email, topic, message, receivedAt }: ContactNotificationProps) {
  return [
    `NEW ENQUIRY — ${name} wants to talk about ${topic.toLowerCase()}.`,
    "",
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Topic:    ${topic}`,
    `Received: ${receivedAt}`,
    "",
    "Message",
    "-------",
    message,
    "",
    `Reply to ${firstName(name)}: just hit reply — reply-to is set to ${email}.`,
    "",
    "— Sent by Portfolio Alerts · teninlanimi.xyz",
  ].join("\n");
}

ContactNotification.PreviewProps = {
  name: "Jane Doe",
  email: "jane@company.com",
  topic: "Founding engineer role",
  message:
    "Hi Teni — we're a seed-stage fintech in Lagos building escrow rails for B2B trade.\n\nWe'd love to talk about a founding engineer role. Free for a call next week?",
  receivedAt: "Tue 15 Sep 2026, 18:42 (Kigali)",
} satisfies ContactNotificationProps;
