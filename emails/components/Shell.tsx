import { Body, Container, Head, Html, Img, Link, Preview, Section, Text } from "@react-email/components";
import type { CSSProperties, ReactNode } from "react";
import { SITE_URL } from "../../lib/site";

/** Brand tokens mirrored from site.css. */
export const tokens = {
  bg: "#0a0a0b",
  panel: "#111114",
  panel2: "#16161a",
  ink: "#f4f1ea",
  dim: "#b8b6af",
  muted: "#87867f",
  faint: "#4e4d4a",
  line: "#242426",
  red: "#F5362A",
  redDeep: "#FF6152",
  serif: "Newsreader, Georgia, 'Times New Roman', serif",
  sans: "'Instrument Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
};

export const styles = {
  label: {
    margin: "0 0 14px",
    fontFamily: tokens.mono,
    fontSize: "11px",
    lineHeight: "16px",
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: tokens.redDeep,
  },
  heading: {
    margin: "0",
    fontFamily: tokens.serif,
    fontWeight: 300,
    fontSize: "32px",
    lineHeight: "36px",
    letterSpacing: "-0.02em",
    color: tokens.ink,
  },
  body: {
    margin: "18px 0 0",
    fontFamily: tokens.sans,
    fontSize: "15px",
    lineHeight: "25px",
    color: tokens.dim,
  },
  panel: {
    backgroundColor: tokens.panel,
    border: `1px solid ${tokens.line}`,
    borderRadius: "14px",
    padding: "22px 24px",
  },
  fieldLabel: {
    margin: "0",
    fontFamily: tokens.mono,
    fontSize: "10px",
    lineHeight: "14px",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: tokens.muted,
  },
  fieldValue: {
    margin: "4px 0 0",
    fontFamily: tokens.sans,
    fontSize: "15px",
    lineHeight: "22px",
    color: tokens.ink,
  },
  quote: {
    margin: "0",
    padding: "2px 0 2px 18px",
    borderLeft: `2px solid ${tokens.red}`,
    fontFamily: tokens.sans,
    fontSize: "15px",
    lineHeight: "25px",
    color: tokens.ink,
    whiteSpace: "pre-wrap",
  },
  button: {
    display: "inline-block",
    backgroundColor: tokens.red,
    color: "#ffffff",
    fontFamily: tokens.sans,
    fontSize: "15px",
    fontWeight: 500,
    lineHeight: "20px",
    textDecoration: "none",
    borderRadius: "999px",
    padding: "14px 26px",
  },
  link: { color: tokens.ink, textDecoration: "underline", textDecorationColor: tokens.faint },
} satisfies Record<string, CSSProperties>;

/** Who the email is from — only the footer sign-off differs; the header is always the brand mark. */
export type ShellVariant = "alerts" | "personal";

const FOOTER: Record<ShellVariant, string> = { alerts: "Sent by Portfolio Alerts", personal: "Teni Taiwo" };

type ShellProps = { preview: string; variant: ShellVariant; children: ReactNode };

/** Shared frame: brand header, 600px content column, footer. */
export default function Shell({ preview, variant, children }: ShellProps) {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="dark light" />
        <meta name="supported-color-schemes" content="dark light" />
      </Head>
      <Preview>{preview}</Preview>
      <Body style={{ margin: 0, padding: "32px 12px", backgroundColor: tokens.bg, fontFamily: tokens.sans }}>
        <Container style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
          <Section style={{ padding: "0 8px 24px" }}>
            <table role="presentation" cellPadding={0} cellSpacing={0} style={{ borderCollapse: "collapse" }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: "middle", paddingRight: "12px" }}>
                    <Img
                      src={`${SITE_URL}/email/logo-mark.png`}
                      width="36"
                      height="36"
                      alt="Teninlanimi Taiwo"
                      style={{ display: "block", borderRadius: "10px" }}
                    />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <Text
                      style={{
                        margin: 0,
                        fontFamily: tokens.serif,
                        fontSize: "19px",
                        lineHeight: "20px",
                        color: tokens.ink,
                      }}
                    >
                      Teninlanimi Taiwo
                    </Text>
                    <Text
                      style={{
                        margin: "3px 0 0",
                        fontFamily: tokens.mono,
                        fontSize: "9px",
                        lineHeight: "12px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: tokens.muted,
                      }}
                    >
                      Engineer · Architect · Founder
                    </Text>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section
            style={{
              backgroundColor: tokens.panel2,
              backgroundImage: "linear-gradient(180deg, #16161a 0%, #0d0d0f 100%)",
              border: `1px solid ${tokens.line}`,
              borderTop: `2px solid ${tokens.red}`,
              borderRadius: "16px",
              padding: "36px 32px",
            }}
          >
            {children}
          </Section>

          <Section style={{ padding: "24px 8px 0" }}>
            <Text
              style={{
                margin: 0,
                fontFamily: tokens.mono,
                fontSize: "11px",
                lineHeight: "18px",
                color: tokens.muted,
              }}
            >
              {FOOTER[variant]} ·{" "}
              <Link href={SITE_URL} style={{ color: tokens.muted, textDecoration: "underline" }}>
                teninlanimi.xyz
              </Link>
            </Text>
            <Text
              style={{
                margin: "4px 0 0",
                fontFamily: tokens.mono,
                fontSize: "11px",
                lineHeight: "18px",
                color: tokens.faint,
              }}
            >
              Kigali / Lagos
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
