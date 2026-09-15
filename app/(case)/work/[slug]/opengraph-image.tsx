import { CASES, CASE_ORDER } from "@/lib/cases";
import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og";

/** Cases whose hero is a placeholder get a real screen on the social card. */
const OG_IMAGE: Record<string, string> = { "star-taskz": "/star/m-today.jpeg" };

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Teninlanimi Taiwo — case study";

export function generateStaticParams() {
  return CASE_ORDER.map((slug) => ({ slug }));
}

export default async function Image({ params }: { params: { slug: string } }) {
  const c = CASES[params.slug];
  return renderOg({
    label: c.kicker,
    headline: c.headline,
    sub: c.meta.map((m) => m.val).slice(0, 2).join(" · "),
    image: { src: OG_IMAGE[c.slug] ?? c.hero.src },
  });
}
