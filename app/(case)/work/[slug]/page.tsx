import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/case/CaseStudy";
import { CASES, CASE_ORDER } from "@/lib/cases";
import { WORK } from "@/lib/home";
import { JsonLd, caseJsonLd } from "@/lib/seo";
import { SITE_BRAND } from "@/lib/site";

type Props = { params: { slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_ORDER.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const data = CASES[params.slug];
  if (!data) return {};
  const path = `/work/${data.slug}`;
  return {
    title: { absolute: data.title },
    description: data.description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      url: path,
      siteName: SITE_BRAND,
      locale: "en_US",
      title: data.title,
      description: data.description,
    },
    twitter: { card: "summary_large_image", title: data.title, description: data.description },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const data = CASES[params.slug];
  if (!data) notFound();
  const keywords = WORK.find((w) => w.slug === data.slug)?.tags ?? [];
  return (
    <>
      <CaseStudy data={data} />
      <JsonLd
        data={caseJsonLd({
          slug: data.slug,
          name: data.name,
          title: data.title,
          description: data.description,
          hero: data.hero.src,
          keywords,
        })}
      />
    </>
  );
}
