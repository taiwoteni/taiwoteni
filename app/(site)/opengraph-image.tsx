import { OG_CONTENT_TYPE, OG_SIZE, renderOg } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Teninlanimi Taiwo — Solutions Architect, Builder & Founder";

export default function Image() {
  return renderOg({
    label: "Kigali / Lagos",
    headline: ["Teninlanimi ", "Taiwo"],
    sub: "Solutions Architect, builder & founder — secure, intelligent systems from national infrastructure to products people use.",
    image: { src: "/assets/teni.jpg", kind: "portrait" },
  });
}
