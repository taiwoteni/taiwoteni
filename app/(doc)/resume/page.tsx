import type { Metadata } from "next";
import Script from "next/script";
import { JsonLd, resumeJsonLd } from "@/lib/seo";
import { CONTACT_EMAIL, LINKEDIN_URL, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Teninlanimi Taiwo — Résumé";
const description =
  "Résumé of Teninlanimi Taiwo — Solutions Architect, builder and founder. Experience, products, capabilities and education.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/resume" },
  openGraph: { type: "profile", url: "/resume", siteName: SITE_NAME, locale: "en_US", title, description },
  twitter: { card: "summary_large_image", title, description },
};

type Entry = { org: string; when: string; role: string; sub: string; ctx?: string; points: React.ReactNode[] };

const EXPERIENCE: Entry[] = [
  {
    org: "Softcom Limited",
    when: "Oct 2025 — Present",
    role: "Solutions Architect",
    sub: "· embedded Product Manager · Lagos / Kigali",
    ctx: "Enterprise technology firm delivering mission-critical systems to public-sector and financial institutions. Specific programmes are protected under NDA.",
    points: [
      <>
        Translate complex executive requirements into <b>scalable, secure technical architecture</b>, acting as the
        bridge between institutional stakeholders and engineering teams.
      </>,
      <>
        Lead cross-functional senior teams designing <b>cloud infrastructure at national scale</b>, including capacity,
        resilience, and security posture.
      </>,
      <>
        Deliver across <b>access control, revenue digitization, and operational security</b> — domains where correctness
        and auditability are non-negotiable.
      </>,
      <>
        Operate as embedded product manager on assigned programmes: scope definition, sequencing, and trade-off
        decisions alongside architecture ownership.
      </>,
    ],
  },
  {
    org: "Khove",
    when: "2026 — Present",
    role: "Founder",
    sub: "· Kigali, Rwanda · khove.xyz",
    ctx: "AI-native workspace unifying GitHub, Google Calendar and Jira behind a single conversational interface. Live product.",
    points: [
      <>
        Designed and built the <b>agent layer</b> that maps plain-English requests onto real, permissioned tool calls
        across three integrated systems — with every tool call traced and visible in the conversation.
      </>,
      <>
        Built <b>multi-tenant workspace architecture</b> with per-workspace OAuth and encrypted token storage, so teams
        adopt without sharing credentials.
      </>,
      <>
        Shipped a <b>delivery-forecasting engine</b> that folds GitHub merges into burn-up charts, projects finish dates
        against initiative targets, computes days late, and narrates the risk.
      </>,
      <>
        Derived cross-system engineering metrics — throughput, cycle time, review latency, deploys, stale in-progress
        work, sprint burndown — into consolidated dashboards.
      </>,
      <>
        Implemented a <b>cost-aware model router</b> and persistent memory carrying context between conversations; own
        product, pricing and go-to-market alongside engineering.
      </>,
    ],
  },
  {
    org: "Troco Technologies",
    when: "Jun 2024 — Present",
    role: "Founding & Senior Software Engineer",
    sub: "· Lagos, Nigeria",
    ctx: "Escrow-based fintech bringing trust to peer-to-peer and marketplace transactions. Live on Google Play.",
    points: [
      <>
        Built the product <b>from scratch</b> and owned the technical foundation: escrow state machine, payment
        integration, real-time order tracking, and dispute resolution.
      </>,
      <>
        Reached <b>1,000+ Android users within three months</b> of launch.
      </>,
      <>
        Spearheaded the strategic pivot repositioning Troco as a <b>full marketplace</b>, rebuilding discovery, listings,
        and seller identity on the existing escrow core.
      </>,
      <>Directed a team of engineers, set review standards, and shipped core features across the product lifecycle.</>,
    ],
  },
  {
    org: "Orems Cybernetics",
    when: "Mar 2025 — Present",
    role: "Lead / Founding Engineer",
    sub: "· Lagos, Nigeria",
    ctx: "Mobile-first commerce and escrow platform for individuals and businesses.",
    points: [
      <>Led the engineering effort end to end, from architecture through launch.</>,
      <>Owned technical direction and hands-on development of real-time tracking and automated transaction workflows.</>,
      <>
        Implemented the <b>trust and security measures</b> underpinning every transaction, including dispute protection.
      </>,
    ],
  },
  {
    org: "Qobi",
    when: "2026 — Present",
    role: "Founder",
    sub: "· ALU Claude Builders Club · Kigali, Rwanda",
    ctx: "Privacy-first AI co-pilot for university students.",
    points: [
      <>
        Designed and built a system that reads a student&apos;s inbox and Canvas <b>read-only</b> and extracts real
        obligations from unstructured sources.
      </>,
      <>
        Built <b>cross-domain reasoning</b> tracing one missed item through academics, finance, institutional standing,
        and visa status.
      </>,
      <>
        Shipped web and mobile <b>in parallel in four days</b> during the Claude Builders Club hackathon; continuing
        development.
      </>,
    ],
  },
  {
    org: "Afrinovators",
    when: "2026 — Present",
    role: "Technical Lead",
    sub: "· ALU student think tank · Ikot Ekpene, Nigeria",
    ctx: "Student-built agritech think tank turning fertile ground in Ikot Ekpene into work.",
    points: [
      <>
        Technical lead — responsible for the think tank producing <b>working software rather than a report</b>.
      </>,
      <>
        Built <b>Agrilink</b>, a prototype connecting smallholder farmers to buyers and to credit.
      </>,
      <>Translated field research into a demonstrable two-sided product stakeholders could use and argue from.</>,
    ],
  },
  {
    org: "Bloom",
    when: "2025 — Present",
    role: "Founding Engineer & Mobile Developer",
    sub: "· Lagos, Nigeria",
    points: [
      <>Built the core mobile commerce experience across the full development lifecycle.</>,
      <>Translated product requirements into clean, performant, user-facing features, and ran regular code reviews.</>,
    ],
  },
  {
    org: "Axel",
    when: "2020 — 2023",
    role: "Sole Builder",
    sub: "· personal project · age 13 → 16",
    ctx: "Social platform shipped free on Google Play — feed, stories, reels, direct messaging with voice notes, and audio and video calling.",
    points: [
      <>
        Sole developer across the entire product: social feed, 24-hour stories, reels,{" "}
        <b>real-time direct messaging with voice notes</b>, and <b>one-to-one audio and video calling</b>.
      </>,
      <>Owned product, design, brand, landing page and Play Store release alongside all engineering.</>,
      <>
        Started at 13 with a design past my ability, <b>paused three years rather than scope it down</b>, and returned
        at 16 to ship it as drawn.
      </>,
    ],
  },
];

const PRODUCTS: { name: string; tag: string; p: string; metrics: string }[] = [
  {
    name: "Khove",
    tag: "AI · dev tooling · live",
    p: "One conversational interface over GitHub, Calendar and Jira — reads across all three, answers with what matters, and offers to act.",
    metrics: "khove.xyz · 3 integrations · multi-tenant",
  },
  {
    name: "Troco",
    tag: "fintech · escrow · live",
    p: "Escrow that feels like ordinary checkout: funds held until delivery, three-party broker flows, disputes resolved inside the order.",
    metrics: "1,000+ users in 3 months · Google Play · Flutter",
  },
  {
    name: "Qobi",
    tag: "AI · education · shipped",
    p: "Obligation engine for university life — read-only Gmail and Canvas scopes, consequence-ranked daily brief, cascade reasoning.",
    metrics: "4 days zero-to-shipped · Claude API · Next.js / Flutter",
  },
  {
    name: "Orems",
    tag: "commerce · escrow",
    p: "Mobile-first commerce platform securing payments between individuals and businesses, with end-to-end dispute protection.",
    metrics: "0→1 launch · Flutter · lead engineer",
  },
  {
    name: "Star Taskz",
    tag: "voice · productivity",
    p: "Conversational task manager driven by speech capture, with an assistant that plans the day and syncs both ways into four tools.",
    metrics: "Voice-first · 4 integrations · latency-constrained",
  },
  {
    name: "Agrilink",
    tag: "agritech · prototype",
    p: "Connects smallholder farmers to buyers and to credit — market access plus working capital, so a harvest isn't sold early.",
    metrics: "Two-sided marketplace · Afrinovators · Ikot Ekpene",
  },
  {
    name: "Axel",
    tag: "social · android · shipped",
    p: "Full social platform — feed, stories, reels, messaging with voice notes, audio and video calling — shipped solo on Google Play.",
    metrics: "Solo build · product, design, brand, engineering",
  },
];

const CAPABILITIES: [string, string][] = [
  [
    "Architecture",
    "Solutions architecture · system design · microservices · cloud infrastructure · secure-by-design delivery · technical documentation",
  ],
  [
    "Leadership",
    "Engineering team leadership · embedded product management · executive stakeholder translation · code review culture",
  ],
  ["Mobile", "Flutter · Dart · React Native · Android · iOS · Riverpod · Bloc · Redux · offline-first patterns"],
  ["Frontend", "Next.js 14 · React 18 · TypeScript · Tailwind CSS · shadcn/ui · Radix · Chart.js"],
  [
    "Backend",
    "Spring Boot · Java · Node.js 20 · Express · Next.js API routes · Prisma · SQLite · JWT / jose · bcrypt · Zod",
  ],
  [
    "Infrastructure",
    "Docker (multi-stage) · Compose · GitHub Actions CI/CD · AWS EC2 · software testing · ESLint · Git",
  ],
  [
    "AI & document intelligence",
    "Claude API · LLM integration · conversational AI · speech-to-text · Tesseract.js OCR · pdf-parse · risk-scoring engines",
  ],
  [
    "Domains",
    "Fintech & escrow · public-sector systems · financial-institution infrastructure · marketplaces · consumer AI",
  ],
];

const EDUCATION: [string, string, string][] = [
  [
    "African Leadership University",
    "BSc — Software Engineering / AI & Machine Learning · Kigali, Rwanda · grant-funded admission",
    "2026 — 2029",
  ],
  [
    "National Institute of Information Technology",
    "Professional Diploma — Full-Stack Software Engineering · Lagos · 3.5 / 4.0 GPA",
    "2023 — 2025",
  ],
  ["ALX", "Professional Certificate — Back-End Software Engineering", "2025"],
  ["Thames Valley College International", "High School Diploma — Science · Lagos", "2020 — 2023"],
];

export default function ResumePage() {
  return (
    <>
      <doc-page margin="0.66in">
        <div className="hdr" slot="header">
          <span>Teninlanimi Taiwo — Résumé</span>
          <span>Kigali / Lagos</span>
        </div>
        <div className="ftr" slot="footer">
          <span>{CONTACT_EMAIL}</span>
          <span>References on request</span>
        </div>

        <div className="rhead">
          <div className="id">
            <img src="/assets/teni.jpg" alt="Teninlanimi Taiwo" />
            <div>
              <h1>Teninlanimi Taiwo</h1>
              <div className="role">Solutions Architect · Builder &amp; Founder</div>
            </div>
          </div>
          <div className="contact">
            <span>Kigali, Rwanda · Lagos, Nigeria</span>
            <span>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </span>
            <span>
              <a href={LINKEDIN_URL}>linkedin.com/in/teninlanimi-taiwo</a>
            </span>
            <span>
              <a href={SITE_URL}>teninlanimi.xyz</a>
            </span>
          </div>
        </div>

        <p className="summary">
          Engineer and architect building <b>secure, intelligent systems</b> — national-scale infrastructure for the
          public sector and financial institutions, and consumer products taken from zero to launch. I work where code,
          product, and strategy meet: translating executive requirements into architecture, leading senior engineering
          teams through delivery, and shipping the result. Writing production code since age 12.
        </p>

        <h2>Experience</h2>

        {EXPERIENCE.map((e) => (
          <div className="entry" key={e.org}>
            <div className="eh">
              <b>{e.org}</b>
              <span className="when">{e.when}</span>
            </div>
            <div className="et">
              {e.role} <span>{e.sub}</span>
            </div>
            {e.ctx ? <p className="ctx">{e.ctx}</p> : null}
            <ul>
              {e.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}

        <h2>Selected Products</h2>
        <div className="grid2">
          {PRODUCTS.map((p) => (
            <div className="prod" key={p.name}>
              <div className="ph">
                <b>{p.name}</b>
                <i>{p.tag}</i>
              </div>
              <p>{p.p}</p>
              <div className="metrics">{p.metrics}</div>
            </div>
          ))}
        </div>

        <h2>Capabilities</h2>
        <div className="grid2">
          {CAPABILITIES.map(([em, p]) => (
            <div className="kv" key={em}>
              <em>{em}</em>
              <p>{p}</p>
            </div>
          ))}
        </div>

        <h2>Education</h2>
        {EDUCATION.map(([school, sub, when]) => (
          <div className="edu-row" key={school}>
            <div>
              <b>{school}</b>
              <span className="sub">{sub}</span>
            </div>
            <span className="when">{when}</span>
          </div>
        ))}

        <h2>Recognition</h2>
        <ul>
          <li>
            <b>2nd place, nationwide innovation hackathon</b> — led the project team, at 17.
          </li>
          <li>
            <b>Grant-funded ALU admission</b> — awarded on a demonstrated record of building.
          </li>
          <li>
            <b>Founder, Qobi</b> — built and shipped at the ALU Claude Builders Club.
          </li>
        </ul>
        <p className="rule-note">
          Confidential public-sector and financial-institution work is intentionally described at a level NDAs permit.
          Architecture walkthroughs available in conversation, within those limits.
        </p>
      </doc-page>
      <Script src="/doc-page.js" strategy="afterInteractive" />
      <JsonLd data={resumeJsonLd()} />
    </>
  );
}
