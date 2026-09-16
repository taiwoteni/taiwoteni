import { CONTACT_EMAIL, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/site";

const abs = (path: string) => `${SITE_URL}${path}`;

export const PERSON_ID = abs("/#person");
export const WEBSITE_ID = abs("/#website");

export const HOME_DESCRIPTION =
  "Teninlanimi Taiwo builds secure, intelligent systems — national-scale infrastructure for the public sector and financial institutions, and consumer products taken from zero to launch.";

export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: SITE_NAME,
    alternateName: "Teni Taiwo",
    url: abs("/"),
    image: abs("/assets/teni.jpg"),
    email: `mailto:${CONTACT_EMAIL}`,
    jobTitle: "Solutions Architect",
    description: HOME_DESCRIPTION,
    worksFor: { "@type": "Organization", name: "Softcom Limited" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "African Leadership University" },
      { "@type": "EducationalOrganization", name: "National Institute of Information Technology" },
      { "@type": "EducationalOrganization", name: "ALX" },
    ],
    address: [
      { "@type": "PostalAddress", addressLocality: "Kigali", addressCountry: "RW" },
      { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
    ],
    knowsAbout: [
      "Solutions architecture",
      "System design",
      "Cloud infrastructure",
      "Fintech and escrow",
      "Flutter",
      "Next.js",
      "TypeScript",
      "AI agents",
      "Claude API",
    ],
    sameAs: [LINKEDIN_URL],
  };
}

export function websiteSchema() {
  return { "@type": "WebSite", "@id": WEBSITE_ID, url: abs("/"), name: SITE_NAME, inLanguage: "en", publisher: { "@id": PERSON_ID } };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      websiteSchema(),
      personSchema(),
      {
        "@type": "ProfilePage",
        "@id": abs("/#profile"),
        url: abs("/"),
        name: "Teninlanimi Taiwo — Solutions Architect, Builder & Founder",
        description: HOME_DESCRIPTION,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: "en",
      },
    ],
  };
}

export function caseJsonLd(c: { slug: string; name: string; title: string; description: string; hero: string; keywords: string[] }) {
  const url = abs(`/work/${c.slug}`);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        url,
        name: c.name,
        headline: c.title,
        description: c.description,
        image: abs(c.hero),
        keywords: c.keywords.join(", "),
        author: { "@id": PERSON_ID },
        creator: { "@id": PERSON_ID },
        isPartOf: { "@id": WEBSITE_ID },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE_NAME, item: abs("/") },
          { "@type": "ListItem", position: 2, name: c.name, item: url },
        ],
      },
      personSchema(),
      websiteSchema(),
    ],
  };
}

export function resumeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": abs("/resume#page"),
        url: abs("/resume"),
        name: "Teninlanimi Taiwo — Résumé",
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
        inLanguage: "en",
      },
      personSchema(),
      websiteSchema(),
    ],
  };
}

/** Renders a JSON-LD block. `<` is escaped so content can never close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
