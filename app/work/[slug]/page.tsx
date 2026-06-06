import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/CaseStudy";
import { CASES, CASE_SLUGS } from "@/lib/cases";
import "../case.css";

export function generateStaticParams() {
  return CASE_SLUGS.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const data = CASES[params.slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: `${data.title} · Teninlanimi Taiwo`,
      description: data.description,
      images: [{ url: data.heroShot.src }],
    },
  };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const data = CASES[params.slug];
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
