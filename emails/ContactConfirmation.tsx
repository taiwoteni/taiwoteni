import { Heading, Hr, Link, Section, Text } from "@react-email/components";
import Shell, { styles, tokens } from "./components/Shell";
import { firstName } from "./ContactNotification";
import { LINKEDIN_URL, SITE_URL } from "../lib/site";

export type ContactConfirmationProps = {
  name: string;
  topic: string;
  message: string;
};

/** Auto-reply sent to the visitor after a successful contact-form submission. */
export default function ContactConfirmation({ name, topic, message }: ContactConfirmationProps) {
  const first = firstName(name);

  const links: [string, string][] = [
    ["Selected work", `${SITE_URL}/#work`],
    ["Résumé", `${SITE_URL}/resume`],
    ["LinkedIn", LINKEDIN_URL],
  ];

  return (
    <Shell variant="personal" preview={`Thanks, ${first}. Your message reached me. I'll be in touch soon.`}>
      <Text style={styles.label}>Message received</Text>
      <Heading as="h1" style={styles.heading}>
        Thanks, {first}. <span style={{ fontStyle: "italic", color: tokens.red }}>Message received.</span>
      </Heading>
      <Text style={styles.body}>
        This is a quick note to confirm your message landed safely. I read every one personally, and I usually reply
        within two or three days, sooner if it&apos;s time-sensitive.
      </Text>
      <Text style={{ ...styles.body, margin: "14px 0 0" }}>
        If you need to add anything in the meantime, just reply to this email and it will come straight to me.
      </Text>

      <Section style={{ ...styles.panel, marginTop: "28px" }}>
        <Text style={styles.fieldLabel}>What you sent</Text>
        <Text style={{ ...styles.fieldValue, margin: "8px 0 14px", fontFamily: tokens.serif, fontSize: "19px" }}>
          {topic}
        </Text>
        <Text style={{ ...styles.quote, color: tokens.dim }}>{message}</Text>
      </Section>

      <Text style={{ ...styles.body, margin: "30px 0 0", color: tokens.ink }}>
        Speak soon,
        <br />
        <span style={{ fontFamily: tokens.serif, fontSize: "22px", lineHeight: "32px" }}>Teni Taiwo</span>
      </Text>

      <Hr style={{ borderColor: tokens.line, margin: "30px 0 18px" }} />
      <Text style={{ ...styles.fieldLabel, margin: "0 0 10px" }}>While you wait</Text>
      <Text style={{ margin: 0, fontFamily: tokens.sans, fontSize: "14px", lineHeight: "22px" }}>
        {links.map(([label, href], i) => (
          <span key={label}>
            {i > 0 ? <span style={{ color: tokens.faint }}>{"  ·  "}</span> : null}
            <Link href={href} style={{ color: tokens.redDeep, textDecoration: "none" }}>
              {label} →
            </Link>
          </span>
        ))}
      </Text>
    </Shell>
  );
}

export function contactConfirmationText({ name, topic, message }: ContactConfirmationProps) {
  return [
    `Thanks, ${firstName(name)}. Message received.`,
    "",
    "This is a quick note to confirm your message landed safely. I read every one personally, and I usually reply within two or three days, sooner if it's time-sensitive.",
    "",
    "If you need to add anything in the meantime, just reply to this email and it will come straight to me.",
    "",
    `What you sent: ${topic}`,
    "-------",
    message,
    "",
    "Speak soon,",
    "Teni Taiwo",
    "",
    `Selected work: ${SITE_URL}/#work`,
    `Résumé:        ${SITE_URL}/resume`,
    `LinkedIn:      ${LINKEDIN_URL}`,
    "",
    "— Teni Taiwo · teninlanimi.xyz",
  ].join("\n");
}

ContactConfirmation.PreviewProps = {
  name: "Jane Doe",
  topic: "Founding engineer role",
  message:
    "Hi Teni — we're a seed-stage fintech in Lagos building escrow rails for B2B trade.\n\nWe'd love to talk about a founding engineer role. Free for a call next week?",
} satisfies ContactConfirmationProps;
