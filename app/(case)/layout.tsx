import type { Metadata } from "next";
import FontLinks from "@/components/FontLinks";
import { BASE_METADATA } from "@/lib/site";
import "./case.css";

export const metadata: Metadata = BASE_METADATA;

export default function CaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <FontLinks />
      </head>
      <body>{children}</body>
    </html>
  );
}
