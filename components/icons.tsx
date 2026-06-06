import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
} as const;

/** → arrow (also used for "next") */
export function ArrowRight(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** ← arrow (back / previous) */
export function ArrowLeft(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5M11 18l-6-6 6-6" />
    </svg>
  );
}

/** ↗ external link */
export function ArrowExternal(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

/** Large padlock for the confidential card */
export function LockGlyph(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.4} {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
      <circle cx="12" cy="15.3" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Padlock without keyhole (redacted blocks) */
export function LockSolid(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.4} {...props}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2.2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function Phone(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </svg>
  );
}

export function Globe(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  );
}

export function Mic(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M12 3v10M8 7a4 4 0 0 0 8 0V6a4 4 0 0 0-8 0M5 12a7 7 0 0 0 14 0M12 19v2" />
    </svg>
  );
}

export function Mail(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function LinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9z" />
    </svg>
  );
}

/** Qobi mark — orbit */
export function QobiMark(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

export function GitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 1.5A10.5 10.5 0 0 0 8.68 22a.83.83 0 0 0 .27-1.46c-2.93.64-3.55-1.26-3.55-1.26a2.79 2.79 0 0 0-1.17-1.54c-.96-.66.07-.64.07-.64a2.21 2.21 0 0 1 1.61 1.09 2.24 2.24 0 0 0 3.06.87 2.25 2.25 0 0 1 .67-1.41c-2.34-.27-4.8-1.17-4.8-5.2a4.07 4.07 0 0 1 1.08-2.83 3.78 3.78 0 0 1 .1-2.79s.89-.28 2.91 1.08a10 10 0 0 1 5.3 0c2-1.36 2.9-1.08 2.9-1.08a3.78 3.78 0 0 1 .11 2.79 4.06 4.06 0 0 1 1.08 2.83c0 4.04-2.47 4.93-4.82 5.19a2.5 2.5 0 0 1 .72 1.95c0 1.41-.01 2.55-.01 2.9a.83.83 0 0 0 .28 1.45A10.5 10.5 0 0 0 12 1.5z" />
    </svg>
  );
}

export function Resume(props: IconProps) {
  return (
    <svg {...base} strokeWidth={1.8} {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  );
}
