import type { Metadata } from "next";
import { fraunces, hanken, jetbrainsMono } from "./fonts";
import "./globals.css";

const SITE_URL = "https://teninlanimi-taiwo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Teninlanimi Taiwo — Software Engineer, Founding Engineer & Founder",
    template: "%s · Teninlanimi Taiwo",
  },
  description:
    "Teninlanimi Taiwo — software engineer, founding engineer, and founder building secure, intelligent systems across fintech, government, and consumer products. Creator of Qobi.",
  authors: [{ name: "Teninlanimi Taiwo" }],
  openGraph: {
    type: "website",
    title: "Teninlanimi Taiwo — Software Engineer & Founder",
    description:
      "Secure, intelligent systems — from national infrastructure to products people actually use. Creator of Qobi.",
    url: SITE_URL,
    siteName: "Teninlanimi Taiwo",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Teninlanimi Taiwo — Software Engineer & Founder",
    description:
      "Secure, intelligent systems — from national infrastructure to products people actually use.",
    images: ["/og-image.png"],
  },
  icons: { icon: "/assets/teni-logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
