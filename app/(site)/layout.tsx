import type { Metadata } from "next";
import FontLinks from "@/components/FontLinks";
import { HOME_DESCRIPTION } from "@/lib/seo";
import { BASE_METADATA, SITE_NAME } from "@/lib/site";
import "./site.css";

const title = "Teninlanimi (Teni) Taiwo — Solutions Architect, Builder & Founder";
const social = {
  title: "Teninlanimi (Teni) Taiwo — Engineer & Founder",
  description: "Secure, intelligent systems — from national infrastructure to products people actually use.",
};

export const metadata: Metadata = {
  ...BASE_METADATA,
  title,
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: { type: "profile", url: "/", siteName: SITE_NAME, locale: "en_US", firstName: "Teninlanimi", lastName: "Taiwo", ...social },
  twitter: { card: "summary_large_image", ...social },
  // Google Search Console HTML-tag verification (optional if verifying via DNS).
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <FontLinks />
      </head>
      <body>{children}</body>
    </html>
  );
}
