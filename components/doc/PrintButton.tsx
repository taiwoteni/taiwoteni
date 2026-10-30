"use client";

/**
 * Prints the résumé page, which the browser saves as a PDF. Generated from the
 * live page on every click, so it can never go stale. Hidden in the print
 * output itself (see .print-btn in resume.css).
 */
export default function PrintButton() {
  return (
    <button type="button" className="print-btn" onClick={() => window.print()}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M12 3v11M8 10.5l4 4 4-4M5 19h14" />
      </svg>
      Download PDF
    </button>
  );
}
