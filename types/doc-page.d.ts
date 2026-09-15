import type { DetailedHTMLProps, HTMLAttributes } from "react";

type DocPageAttributes = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
  margin?: string;
  size?: "letter" | "a4" | "legal";
  orientation?: "portrait" | "landscape";
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      /** Paged-document custom element from public/doc-page.js. */
      "doc-page": DocPageAttributes;
    }
  }
}
