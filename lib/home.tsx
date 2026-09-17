import type { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Selected work cards                                                  */
/* ------------------------------------------------------------------ */

export type WorkCard = {
  slug: string;
  name: string;
  no: string;
  role: string;
  flip: boolean;
  initial: string;
  meta: string;
  image:
    | { kind: "img"; src: string; alt: string; style?: React.CSSProperties }
    | { kind: "picture"; mobile: string; src: string; alt: string };
  badge?: string;
  desc: ReactNode;
  kpis?: { b: string; span: string }[];
  tags: string[];
  live?: { href: string; label: string };
};

export const WORK: WorkCard[] = [
  {
    slug: "troco",
    name: "Troco",
    no: "02",
    role: "Founding & Senior Engineer",
    flip: true,
    initial: "T",
    meta: "troco · android",
    image: { kind: "img", src: "/troco-app.png", alt: "Troco app" },
    desc: (
      <>
        Escrow-based fintech that builds trust into digital transactions: real-time tracking, dispute resolution,
        three-party broker flows, and payments for buyers and sellers. I built the technical foundation from scratch and
        led the pivot into a full marketplace.
      </>
    ),
    kpis: [
      { b: "1,000+", span: "users in 3 months" },
      { b: "Live", span: "on Google Play" },
      { b: "0→1", span: "architecture owned" },
    ],
    tags: ["Flutter", "Dart", "Escrow", "Real-time"],
    live: { href: "https://www.troco.ng", label: "troco.ng" },
  },
  {
    slug: "qobi",
    name: "Qobi",
    no: "03",
    role: "Founder",
    flip: false,
    initial: "Q",
    meta: "qobi · web + mobile",
    image: {
      kind: "img",
      src: "/qobi/web-landing.png",
      alt: "Qobi landing page",
      style: { objectPosition: "top center" },
    },
    badge: "Recent · ALU Claude Builders Club",
    desc: (
      <>
        A privacy-first AI co-pilot that reads a student&apos;s inbox and Canvas <b>read-only</b>, surfaces buried
        obligations, and reasons about how one slip cascades across academics, money, standing, and visa status.
      </>
    ),
    kpis: [
      { b: "4 days", span: "zero to shipped" },
      { b: "2", span: "platforms in parallel" },
      { b: "Read-only", span: "by design" },
    ],
    tags: ["Claude API", "Gmail + Canvas", "Next.js", "Flutter"],
    live: { href: "https://www.qobi-copilot.xyz", label: "qobi-copilot.xyz" },
  },
  {
    slug: "khove",
    name: "Khove",
    no: "04",
    role: "Founder",
    flip: true,
    initial: "K",
    meta: "khove · web platform",
    image: { kind: "picture", mobile: "/khove/card-wide.png", src: "/khove/card-hero.png", alt: "Khove platform" },
    badge: "Live · khove.xyz",
    desc: (
      <>
        An AI-native workspace that puts <b>GitHub, Google Calendar, and Jira behind one conversational interface</b>.
        Ask in plain English and the agent routes the request, pulls context across every tool, and takes the action.
        Beyond chat it ships consolidated KPI dashboards, sprint intelligence, and a <b>delivery forecast</b> that folds
        merges into projected finish dates and flags slippage before it lands.
      </>
    ),
    kpis: [
      { b: "Live", span: "shipped product" },
      { b: "3", span: "tools, one interface" },
      { b: "Forecasts", span: "delivery risk, not just status" },
    ],
    tags: ["Agent tool-calling", "OAuth integrations", "Delivery forecasting", "Persistent memory", "Multi-tenant"],
    live: { href: "https://www.khove.xyz", label: "khove.xyz" },
  },
  {
    slug: "orems",
    name: "Orems",
    no: "05",
    role: "Lead / Founding Engineer",
    flip: false,
    initial: "O",
    meta: "orems · mobile commerce",
    image: { kind: "img", src: "/orems.png", alt: "Orems platform" },
    desc: (
      <>
        A mobile-first commerce and escrow platform securing payments between individuals and businesses: real-time
        tracking, automated workflows, and dispute protection end to end. I owned technical direction and hands-on
        delivery.
      </>
    ),
    tags: ["Flutter", "E-commerce", "Escrow", "Automated workflows"],
  },
  {
    slug: "agrilink",
    name: "AgriLink",
    no: "06",
    role: "Builder",
    flip: true,
    initial: "A",
    meta: "agrilink · agritech prototype",
    image: {
      kind: "picture",
      mobile: "/agrilink/card-wide.png",
      src: "/agrilink/card-problem.png",
      alt: "AgriLink prototype",
    },
    badge: "Afrinovators · ALU think tank",
    desc: (
      <>
        Ikot Ekpene, Nigeria&apos;s &quot;Raffia City&quot;, has fertile land and{" "}
        <b>51% unemployment, the second highest in the country.</b> AgriLink is the link that&apos;s missing: a working
        marketplace-and-training prototype that lets farmers <b>sell produce to verified buyers</b>, gives buyers search
        and listings, and adds local weather plus an agricultural expert in chat. Built under Afrinovators, a student
        agritech think tank at ALU.
      </>
    ),
    kpis: [
      { b: "51%", span: "unemployment, 2nd highest in Nigeria" },
      { b: "1.8M", span: "unemployed of 3.3M active" },
      { b: "1:2,000+", span: "extension officer per farmers" },
    ],
    tags: ["Agritech", "Marketplace", "Credit access", "Field research", "Prototype"],
    live: { href: "https://afrinovators.vercel.app", label: "afrinovators.vercel.app" },
  },
  {
    slug: "star-taskz",
    name: "Star Taskz",
    no: "07",
    role: "Builder",
    flip: false,
    initial: "S",
    meta: "star taskz · voice",
    image: { kind: "img", src: "/star-taskz.png", alt: "Star Taskz app" },
    desc: (
      <>
        A conversational task manager you talk to: speech-to-text capture, intelligent reminders, productivity
        insights, and sync with GitHub, calendars, Notion, and Jira for one connected workflow.
      </>
    ),
    tags: ["Conversational AI", "Speech-to-text", "Integrations"],
  },
  {
    slug: "axel",
    name: "Axel",
    no: "08",
    role: "Sole builder",
    flip: true,
    initial: "A",
    meta: "axel · social platform",
    image: { kind: "picture", mobile: "/axel/card-wide.png", src: "/axel/card-home.png", alt: "Axel social platform" },
    badge: "Where it started",
    desc: (
      <>
        A full social platform: <b>feed, stories, reels, direct messaging, voice notes, and audio and video calling</b>,
        shipped free on Android. I started it at 13 with a design well past my ability, left it for three years rather
        than cut it down, and came back at 16 to finish the thing I&apos;d drawn. Sole developer on all of it.
      </>
    ),
    kpis: [
      { b: "13→16", span: "age at start → ship" },
      { b: "Solo", span: "sole developer" },
      { b: "Android", span: "on Google Play" },
    ],
    tags: ["Social platform", "Real-time messaging", "Voice & video calling", "Reels", "Android"],
  },
];

/* ------------------------------------------------------------------ */
/* Product walkthroughs                                                 */
/* ------------------------------------------------------------------ */

export type Walkthrough = {
  name: string;
  sub: string;
  label: string;
  frame: "desk" | "phone";
  images: { src: string; alt: string }[];
  steps: { h4: string; p: string }[];
};

export const WALKTHROUGHS: Walkthrough[] = [
  {
    name: "Qobi",
    sub: "web · privacy-first AI co-pilot",
    label: "qobi · desktop",
    frame: "desk",
    images: [
      { src: "/qobi/web-landing.png", alt: "Qobi landing page" },
      { src: "/qobi/web-today.png", alt: "Qobi daily brief" },
      { src: "/qobi/web-obligations.png", alt: "Qobi obligations view" },
      { src: "/qobi/web-settings.png", alt: "Qobi permissions and privacy settings" },
    ],
    steps: [
      {
        h4: "The promise, stated plainly",
        p: "University obligations hide in the boring places: an inbox, a Canvas announcement, a finance portal. Qobi's landing page makes one claim: nothing important stays unseen.",
      },
      {
        h4: "A brief, not a feed",
        p: "Today's view answers a single question: what actually matters before midnight. Items are ranked by consequence, not by timestamp.",
      },
      {
        h4: "The cascade view",
        p: "Each obligation is traced downstream: a missed assignment becomes a grade risk, then a fee, then a standing issue, then a visa problem. This reasoning is the product.",
      },
      {
        h4: "Read-only, by design",
        p: "Permissions are explicit and revocable, and Qobi never writes to a student's inbox. The constraint cut scope and bought trust, the right trade for a product handling sensitive academic data.",
      },
    ],
  },
  {
    name: "Khove",
    sub: "web · AI-native engineering workspace",
    label: "khove · desktop",
    frame: "desk",
    images: [
      { src: "/khove/app-dashboard.png", alt: "Khove consolidated dashboard" },
      { src: "/khove/app-chat.png", alt: "Khove agent conversation with tool-call trace" },
      { src: "/khove/app-delivery.png", alt: "Khove delivery forecast" },
      { src: "/khove/app-jira.png", alt: "Khove Jira dashboard with sprint burndown" },
      { src: "/khove/app-planner.png", alt: "Khove planner calendar" },
    ],
    steps: [
      {
        h4: "One dashboard, three systems",
        p: "Merges, throughput, cycle time, review latency and deploys next to calendar deadlines and overdue items: GitHub, Jira and Google Calendar resolved into a single KPI surface with live auto-refresh. The consolidated view is the whole pitch, made literal.",
      },
      {
        h4: "The agent shows its work",
        p: "“How are the state of things” expands into seven traced steps: listed threads, checked sprint status, assessed delivery risk, cross-checked Jira against GitHub, checked for unplanned work. Then it answers. Visible tool calls are a trust decision: an agent with write access to real systems has to be auditable.",
      },
      {
        h4: "Delivery risk, forecast",
        p: "Each initiative carries a target date, a burn-up against it, velocity, projected finish and days late. Khove folds GitHub merges into the forecast and writes the narrative, “projected to finish 46 days late, watch for slippage,” with the linked tickets that explain why.",
      },
      {
        h4: "Sprint intelligence",
        p: "Jira rendered as flow rather than a board: throughput, cycle time, stale in-progress work, and burndown against ideal across active and upcoming sprints. The numbers a lead actually reports on, without opening Jira.",
      },
      {
        h4: "Planning in the same place",
        p: "Two-way Google Calendar sync with standups, sprint ceremonies and reviews in a month view, plus fifteen agent suggestions waiting for review. Planning and shipping stop being separate tabs.",
      },
    ],
  },
  {
    name: "Troco",
    sub: "android · escrow fintech",
    label: "troco · android",
    frame: "phone",
    images: [
      { src: "/troco/m-home.png", alt: "Troco home screen" },
      { src: "/troco/m-shop.png", alt: "Troco shop screen" },
      { src: "/troco/m-order.png", alt: "Troco order and escrow state" },
      { src: "/troco/m-chat.png", alt: "Troco buyer and seller chat" },
    ],
    steps: [
      {
        h4: "Escrow that feels ordinary",
        p: "The home screen hides the machinery. Buyers see balances and orders; the protection is implied, not explained.",
      },
      {
        h4: "A marketplace, after the pivot",
        p: "Troco started as a payments tool. I spearheaded the repositioning into a full marketplace, which meant rebuilding discovery, listings, and seller identity on top of the existing escrow core.",
      },
      {
        h4: "Escrow is a state machine",
        p: "Every order carries a state: funded, in transit, delivered, disputed, released. The UI exposes exactly one next action, because ambiguity in a payment flow is a support ticket.",
      },
      {
        h4: "Disputes where the deal happened",
        p: "Chat lives inside the order, so evidence and conversation share context. Resolution is part of the product rather than an email thread after the fact.",
      },
    ],
  },
  {
    name: "AgriLink",
    sub: "mobile · agritech marketplace prototype",
    label: "agrilink · mobile",
    frame: "phone",
    images: [
      { src: "/agrilink/m-home.png", alt: "AgriLink home" },
      { src: "/agrilink/m-sell.png", alt: "AgriLink sell produce flow" },
      { src: "/agrilink/m-support.png", alt: "AgriLink farming support" },
      { src: "/agrilink/m-messages.png", alt: "AgriLink messages" },
    ],
    steps: [
      {
        h4: "Six things, named plainly",
        p: "The home screen is a grid of verbs a farmer already uses: sell, buy, find buyers, weather, tips, ask an expert. No dashboard, no jargon, and a greeting by name. Designed for low digital literacy, which the research named as a key driver of the problem.",
      },
      {
        h4: "Listing in three steps",
        p: "Details, photos, review. Crop name, quantity, price in naira, and location prefilled to Ikot Ekpene, because the fastest listing is one where the app already knows where you are and what you grow.",
      },
      {
        h4: "The support layer",
        p: "Local weather, pest and disease guidance, daily farming tips, and a route to an expert. This is the substitute for one extension officer per 2,000+ farmers: advice that doesn't depend on someone visiting.",
      },
      {
        h4: "Buyers and specialists, together",
        p: "Verified buyers negotiating a 500kg maize order sit in the same inbox as an agricultural extension specialist. Commerce and expertise in one thread, because for a smallholder they're the same conversation.",
      },
    ],
  },
  {
    name: "Star Taskz",
    sub: "mobile · voice-first tasks",
    label: "star taskz · mobile",
    frame: "phone",
    images: [
      { src: "/star/m-today.jpeg", alt: "Star Taskz today screen" },
      { src: "/star/m-ai.jpeg", alt: "Star Taskz voice assistant" },
      { src: "/star/m-workspaces.jpeg", alt: "Star Taskz workspaces" },
      { src: "/star/m-sync.jpeg", alt: "Star Taskz integrations" },
    ],
    steps: [
      {
        h4: "Today, decided for you",
        p: "The day opens already planned. Tasks arrive grouped by effort and deadline so the first interaction is a decision, not a triage session.",
      },
      {
        h4: "Talk, and the task exists",
        p: 'Speech-to-text capture with intent parsing: "remind me to review the PR before standup" becomes a scheduled, assigned, linked task. A voice interface has no room to think out loud, which made latency the whole design problem.',
      },
      {
        h4: "Workspaces per context",
        p: "Work, study, and personal stay separated, because a productivity tool that mixes contexts gets abandoned in week two.",
      },
      {
        h4: "Sync where work lives",
        p: "GitHub, calendars, Notion, and Jira write back both ways, so the app never becomes a second place to maintain the truth.",
      },
    ],
  },
  {
    name: "Axel",
    sub: "android · social platform, built solo at 13–16",
    label: "axel · android",
    frame: "phone",
    images: [
      { src: "/axel/m-onboarding.png", alt: "Axel onboarding" },
      { src: "/axel/m-feed.png", alt: "Axel home feed" },
      { src: "/axel/m-feed-social.png", alt: "Axel feed with reactions and comments" },
    ],
    steps: [
      {
        h4: "Three screens, then you're in",
        p: "Onboarding makes one promise and gets out of the way. At 13 I over-designed everything; the version that shipped is the one that learned restraint.",
      },
      {
        h4: "The photo, not the chrome",
        p: "Stories across the top, then posts at full width with the interface receding into the dark. The whole thesis was that the app should disappear while your friends look.",
      },
      {
        h4: "Where it gets social",
        p: "Multi-reaction rails, social proof on who engaged, inline comments, unread badges on chats. This is the layer that took three years of skill to build, and the reason I paused instead of shipping something smaller.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                           */
/* ------------------------------------------------------------------ */

export type Job = { when: string; org: string; loc: string; rl: string; tag?: string; points: string[] };

export const EXPERIENCE: Job[] = [
  {
    when: "Oct 2025 — Present",
    org: "Softcom Limited",
    loc: "Lagos / Kigali",
    rl: "Solutions Architect",
    tag: "+ embedded PM",
    points: [
      "Translate complex executive requirements into scalable, secure technical architecture.",
      "Lead cross-functional senior teams designing cloud infrastructure for critical, national-scale systems.",
      "Deliver mission-critical work across access control, revenue digitization, and operational security. Engagements covered by NDA.",
    ],
  },
  {
    when: "2026 — Present",
    org: "Qobi",
    loc: "Kigali, Rwanda",
    rl: "Founder",
    tag: "ALU Claude Builders Club",
    points: [
      "Built a privacy-first AI co-pilot for students, read-only across Gmail and Canvas.",
      "Designed cross-domain reasoning tracing one missed item across academics, finance, standing, and visa.",
      "Shipped web and mobile in parallel: a working product in four days.",
    ],
  },
  {
    when: "2026 — Present",
    org: "Khove",
    loc: "Kigali, Rwanda",
    rl: "Founder",
    tag: "live product",
    points: [
      "Built an AI-native workspace unifying GitHub, Google Calendar, and Jira behind a single conversational interface.",
      "Designed the agent layer that maps plain-English requests onto real, workspace-scoped tool calls, with every call traced and visible.",
      "Built delivery forecasting that folds GitHub merges into projected finish dates and flags slippage, plus cross-system engineering metrics.",
      "Shipped multi-tenant workspaces with encrypted per-workspace OAuth tokens, persistent memory, and a cost-aware model router.",
    ],
  },
  {
    when: "2026 — Present",
    org: "Afrinovators",
    loc: "ALU · Ikot Ekpene, Nigeria",
    rl: "Technical Lead",
    tag: "student think tank",
    points: [
      "Technical lead for a student-built agritech think tank turning fertile ground in Ikot Ekpene into work.",
      "Built Agrilink, a prototype connecting smallholder farmers to buyers and access to credit.",
      "Translated field research from the think tank into a working product rather than a report.",
    ],
  },
  {
    when: "Jun 2024 — Present",
    org: "Troco Technologies",
    loc: "Lagos, Nigeria",
    rl: "Founding & Senior Software Engineer",
    points: [
      "Built the product from scratch and owned the technical foundation and architecture.",
      "Spearheaded the strategic pivot repositioning Troco as a full marketplace.",
      "Directed a team of engineers and shipped core features across the product lifecycle.",
    ],
  },
  {
    when: "Mar 2025 — Present",
    org: "Orems Cybernetics",
    loc: "Lagos, Nigeria",
    rl: "Lead / Founding Engineer",
    points: [
      "Led engineering for a mobile-first e-commerce and escrow platform.",
      "Owned technical direction, architecture, and hands-on development end to end.",
      "Implemented trust and security measures for digital transactions, zero to launch.",
    ],
  },
  {
    when: "2025 — Present",
    org: "Bloom",
    loc: "Lagos, Nigeria",
    rl: "Founding Engineer & Mobile Developer",
    points: [
      "Crafted the core mobile commerce experience across the full development lifecycle.",
      "Translated product requirements into clean, performant features.",
      "Ran regular code reviews and applied market research for competitiveness.",
    ],
  },
  {
    when: "2020 — 2023",
    org: "Axel",
    loc: "Personal project",
    rl: "Sole builder",
    tag: "age 13 → 16",
    points: [
      "Started a social platform at 13: feed, stories, reels, messaging with voice notes, and audio and video calling. Returned three years later to ship it on Google Play.",
      "Sole developer: product, design, brand, and all engineering.",
      "Paused three years rather than scope the design down, then finished it once the skill caught up.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Stack, education, marquee, testimonials                              */
/* ------------------------------------------------------------------ */

export const STACK: { h4: string; chips: string[] }[] = [
  {
    h4: "Architecture & Leadership",
    chips: ["Solutions architecture", "System design", "Microservices", "Technical leadership", "Product management"],
  },
  { h4: "Mobile", chips: ["Flutter", "Dart", "React Native", "Android", "iOS", "Riverpod", "Bloc"] },
  { h4: "Frontend", chips: ["Next.js 14", "React 18", "TypeScript", "Tailwind", "shadcn/ui · Radix"] },
  { h4: "Backend", chips: ["Spring Boot", "Java", "Node.js 20", "Express", "Prisma", "JWT · jose", "Zod"] },
  { h4: "Infrastructure", chips: ["Docker", "Compose", "GitHub Actions", "AWS EC2", "Testing", "Git"] },
  { h4: "AI", chips: ["Claude API", "LLM integration", "Conversational AI", "Speech-to-text", "OCR pipelines"] },
];

export const EDUCATION: { w: string; h4: string; d: string; n?: string }[] = [
  {
    w: "2026 — 2029 · In progress",
    h4: "African Leadership University",
    d: "BSc — Software Engineering / AI & Machine Learning · Kigali",
    n: "Grant-funded admission · came to ALU to do hard things.",
  },
  {
    w: "2023 — 2025",
    h4: "National Institute of Information Technology",
    d: "Professional Diploma — Full-Stack Software Engineering · Lagos",
    n: "3.5 GPA · led the project team to 2nd place in a nationwide innovation hackathon, at 17.",
  },
  { w: "2025", h4: "ALX", d: "Professional Certificate — Back-End Software Engineering" },
  { w: "2020 — 2023", h4: "Thames Valley College International", d: "High School Diploma — Science · Lagos" },
];

/** [slug, name, ext, height] — mirrors the org list in site.js. */
export const ORGS: [string, string, string, number][] = [
  ["softcom", "Softcom", "png", 27],
  ["troco", "Troco", "png", 25],
  ["orems", "Orems Cybernetics", "png", 26],
  ["bloom", "Bloom", "svg", 28],
  ["qobi", "Qobi", "png", 26],
  ["alu", "African Leadership University", "png", 23],
  ["niit", "NIIT", "svg", 22],
  ["alx", "ALX", "svg", 24],
];

export const TESTIMONIALS: { initial: string; quote: ReactNode; by: string; role: string }[] = [
  {
    initial: "A",
    quote: (
      <>
        He operates years beyond his age. We handed him an ambiguous, high-stakes brief and he came back with an
        architecture the <em>entire senior team</em> trusted on day one.
      </>
    ),
    by: "A. O.",
    role: "Engineering Lead · Softcom",
  },
  {
    initial: "R",
    quote: (
      <>
        Teni built Troco from nothing and had <em>a thousand people using it in three months.</em> Rare to find someone
        who ships that fast and that carefully.
      </>
    ),
    by: "R. A.",
    role: "Co-founder · Troco",
  },
  {
    initial: "M",
    quote: (
      <>
        Calm, precise, and relentless. He reads the boring places so the important things <em>don&apos;t stay unseen</em>,
        and ships before anyone expects it.
      </>
    ),
    by: "Mentor",
    role: "ALU Claude Builders Club",
  },
  {
    initial: "K",
    quote: (
      <>
        The kind of engineer who is fluent with <em>executives and code in the same meeting.</em> He owns the whole
        problem, end to end.
      </>
    ),
    by: "K. T.",
    role: "Product Partner",
  },
];
