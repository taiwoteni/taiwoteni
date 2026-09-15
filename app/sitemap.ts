import type { MetadataRoute } from "next";
import { CASE_ORDER } from "@/lib/cases";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    ...CASE_ORDER.map((slug) => ({
      url: `${SITE_URL}/work/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/resume`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
