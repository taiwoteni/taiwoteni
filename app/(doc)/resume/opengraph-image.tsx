import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Teninlanimi Taiwo — Résumé";

export default function Image() {
  return renderOg({
    label: "Résumé",
    headline: ["The full résumé, ", "in detail."],
    sub: "Experience, architecture work, products, and education — Teninlanimi Taiwo, Solutions Architect.",
    image: { src: "/assets/teni.jpg", kind: "portrait" },
  });
}
