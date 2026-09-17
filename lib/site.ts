import type { Metadata } from "next";

/** Canonical origin. The apex (teninlanimi.xyz) 308-redirects to www, so www is canonical. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.teninlanimi.xyz").replace(/\/$/, "");
export const SITE_NAME = "Teninlanimi Taiwo";
/** Site name Google is asked to show above the URL (og:site_name + WebSite schema). */
export const SITE_BRAND = "Teni Taiwo";

export const CONTACT_EMAIL = "teninlanimitaiwo@gmail.com";
export const LINKEDIN_URL = "https://www.linkedin.com/in/teninlanimi-taiwo/";
/** Profiles listed in structured data (sameAs) so Google links them to one person. */
export const GITHUB_URL = "https://github.com/taiwoteni";
export const INSTAGRAM_URL = "https://www.instagram.com/theteninlanimitaiwo";

export const FAVICON: Metadata["icons"] = {
  icon: [
    // .ico first: Google's favicon crawler probes /favicon.ico by default.
    { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    { url: "/assets/logo-mark.svg", type: "image/svg+xml" },
    { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
    { url: "/icons/icon-96.png", sizes: "96x96", type: "image/png" },
    { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
  ],
  apple: [{ url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" }],
};

/** Metadata shared by every root layout (each route group has its own). */
export const BASE_METADATA: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  icons: FAVICON,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

/** Topics offered by the contact form — the API only accepts these. */
export const CONTACT_TOPICS = [
  "Founding engineer role",
  "Architecture / consulting",
  "Product collaboration",
  "Speaking or mentorship",
  "Something else",
] as const;
export type ContactTopic = (typeof CONTACT_TOPICS)[number];
