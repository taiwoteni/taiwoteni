/* eslint-disable @next/next/no-page-custom-font */

/**
 * The exact Google Fonts request from the design. The stylesheets reference
 * "Newsreader", "Instrument Sans" and "JetBrains Mono" by name, so these are
 * loaded as-is rather than through next/font (which renames families).
 */
export default function FontLinks() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=Instrument+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
