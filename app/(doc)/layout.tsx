import type { Metadata } from "next";
import FontLinks from "@/components/FontLinks";
import { BASE_METADATA } from "@/lib/site";
import "./resume.css";

export const metadata: Metadata = BASE_METADATA;

/** Bare document shell — Resume.html uses no reset; <doc-page> owns the sheet. */
export default function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <FontLinks />
      </head>
      <body>{children}</body>
    </html>
  );
}
