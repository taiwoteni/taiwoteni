import type { ReactNode } from "react";

export type PlatformIcon = "phone" | "lock" | "globe" | "mic";
export type Platform = { icon: PlatformIcon; label: string };

export type Kpi = { v: ReactNode; l: ReactNode; sample?: string };
export type Resp = { n: string; b: string; span: string };

export type StackCol = { h4: string; chips: string[] };
export type Stack =
  | { kind: "cols"; head: string; cols: StackCol[] }
  | { kind: "redacted"; head: string; b: string; span: string };

export type Shot =
  | { kind: "img"; src: string; alt: string; wide?: boolean }
  | { kind: "ph"; ph: ReactNode; wide?: boolean };
export type PhoneShot = { src: string; alt: string; cap: string };

export type GallerySection =
  | { kind: "gallery"; label?: string; shots: Shot[] }
  | { kind: "phones"; label?: string; phones: PhoneShot[] }
  | { kind: "redacted"; b: string; span: string };

export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  description: string;
  kicker: string;
  visit: { label: string; href: string; external: boolean };
  h1: ReactNode;
  tagline: ReactNode;
  platforms: Platform[];
  heroShot: { src: string; alt: string; ph: string };
  meta: { lab: string; val: ReactNode }[];
  overview: { h2: ReactNode; prose: ReactNode[] };
  kpis: Kpi[];
  respHead: ReactNode;
  resp: Resp[];
  stack: Stack;
  satisfaction: { quote: ReactNode; avatar: string; by: string; role: string };
  gallery: { head: ReactNode; sections: GallerySection[] };
  next: { slug: string; name: string };
};

export const CASES: Record<string, CaseStudy> = {
  troco: {
    slug: "troco",
    name: "Troco",
    title: "Troco — Case Study",
    description:
      "Troco — a secure, escrow-based fintech platform. Founding & Senior Engineer. Full project breakdown.",
    kicker: "Case Study · 02",
    visit: { label: "Visit troco.ng", href: "https://www.troco.ng", external: true },
    h1: (
      <>
        Troco — a marketplace built on <em>trust</em>, not hope.
      </>
    ),
    tagline: (
      <>
        A secure, escrow-based <b>e-commerce marketplace</b> where money is held
        until both sides are satisfied — with real-time order tracking, dispute
        resolution, in-app chat, and three-party broker flows.{" "}
        <b>Live on Google Play with 1,000+ Android users in the first three months.</b>
      </>
    ),
    platforms: [
      { icon: "phone", label: "Android" },
      { icon: "phone", label: "iOS" },
      { icon: "lock", label: "Admin web · internal" },
      { icon: "globe", label: "Marketing site" },
    ],
    heroShot: { src: "/troco-app.png", alt: "Troco app", ph: "// troco-app.png" },
    meta: [
      { lab: "Role", val: "Founding & Senior Engineer" },
      { lab: "Timeline", val: "Jun 2024 — Present" },
      { lab: "Company", val: "Troco Technologies · Lagos" },
      { lab: "Status", val: "Live on Google Play" },
    ],
    overview: {
      h2: "The problem was trust. Money moves before goods do.",
      prose: [
        <>
          Peer-to-peer commerce in Nigeria runs on faith — buyers pay first and
          hope, or sellers ship first and hope. <b>Troco removes the hope.</b>{" "}
          It&apos;s an e-commerce marketplace where funds are held in escrow and
          only released when both sides are satisfied, with a full audit trail in
          between.
        </>,
        <>
          I joined as the founding engineer and built the product from scratch —
          owning the technical foundation, the architecture, and the team that
          grew around it. I later spearheaded the <b>strategic pivot</b> that
          repositioned Troco from a single-purpose escrow tool into a full
          marketplace app, backed by an internal <b>admin web platform</b> for
          order verification, driver dispatch, and dispute handling.
        </>,
        <>
          The hard part wasn&apos;t the happy path — it was the disputes, the
          partial refunds, the three-party broker flows, and keeping all of it
          real-time and legible to non-technical users handling real money.
        </>,
      ],
    },
    kpis: [
      { v: <b>1K+</b>, l: "Android users within three months of launch" },
      { v: <b>3-party</b>, l: "Buyer · seller · broker escrow flows shipped" },
      {
        v: (
          <>
            &lt; <b>48h</b>
          </>
        ),
        l: "Median dispute resolution time",
        sample: "sample — confirm",
      },
      {
        v: <b>99.9%</b>,
        l: "Transaction settlement reliability",
        sample: "sample — confirm",
      },
    ],
    respHead: "What I owned, end to end.",
    resp: [
      {
        n: "01",
        b: "Technical foundation",
        span: "Built the product from zero and owned the architecture, data model, and escrow state machine.",
      },
      {
        n: "02",
        b: "The marketplace pivot",
        span: "Led the strategic repositioning from escrow tool to full marketplace, re-architecting around it.",
      },
      {
        n: "03",
        b: "Team leadership",
        span: "Directed a team of engineers and ran the product across its full lifecycle.",
      },
      {
        n: "04",
        b: "Trust & security",
        span: "Designed dispute resolution, real-time tracking, and secure payment settlement.",
      },
    ],
    stack: {
      kind: "cols",
      head: "The toolkit behind Troco.",
      cols: [
        {
          h4: "Mobile",
          chips: ["Flutter", "Dart", "Riverpod", "Bloc", "Real-time updates"],
        },
        {
          h4: "Platform & payments",
          chips: [
            "Escrow engine",
            "Payment integration",
            "Admin web platform",
            "Dispute workflows",
            "Play Store delivery",
          ],
        },
      ],
    },
    satisfaction: {
      quote: (
        <>
          Teni built Troco from nothing and had{" "}
          <em>a thousand people using it in three months.</em> Rare to find
          someone who ships that fast and that carefully.
        </>
      ),
      avatar: "R",
      by: "R. A.",
      role: "Co-founder · Troco",
    },
    gallery: {
      head: "Inside the product.",
      sections: [
        {
          kind: "phones",
          label: "Mobile app",
          phones: [
            { src: "/troco/m-home.png", alt: "Troco — wallet & home", cap: "Wallet & home" },
            { src: "/troco/m-shop.png", alt: "Troco — marketplace", cap: "Marketplace" },
            { src: "/troco/m-order.png", alt: "Troco — order tracking", cap: "Escrow order track" },
            { src: "/troco/m-chat.png", alt: "Troco — in-app chat", cap: "In-app chat" },
          ],
        },
        {
          kind: "redacted",
          b: "Admin web platform — not shown",
          span: "The internal admin site (order verification, driver dispatch, dispute resolution) is confidential and can't be shared publicly. Available to walk through in conversation.",
        },
      ],
    },
    next: { slug: "orems", name: "Orems" },
  },

  orems: {
    slug: "orems",
    name: "Orems",
    title: "Orems — Case Study",
    description:
      "Orems — a mobile-first commerce and escrow platform. Lead / Founding Engineer. Full project breakdown.",
    kicker: "Case Study · 03",
    visit: { label: "Discuss this project", href: "/#contact", external: false },
    h1: (
      <>
        Orems — secure commerce, <em>end to end.</em>
      </>
    ),
    tagline: (
      <>
        A mobile-first commerce and escrow platform ensuring secure payments
        between individuals and businesses — <b>real-time tracking, automated
        workflows, and dispute protection,</b> from cart to settlement.
      </>
    ),
    platforms: [
      { icon: "phone", label: "Android" },
      { icon: "phone", label: "iOS" },
    ],
    heroShot: { src: "/orems.png", alt: "Orems platform", ph: "// orems.png" },
    meta: [
      { lab: "Role", val: "Lead / Founding Engineer" },
      { lab: "Timeline", val: "Mar 2025 — Present" },
      { lab: "Company", val: "Orems Cybernetics · Lagos" },
      { lab: "Status", val: "Zero to launch" },
    ],
    overview: {
      h2: "A marketplace where payment safety is the default.",
      prose: [
        <>
          Orems brings <b>escrow-grade protection to everyday commerce</b> —
          between individuals and businesses alike. Money is held safely until
          both parties confirm, with tracking and automated workflows handling
          the steps in between.
        </>,
        <>
          I led the engineering effort and owned the technical direction,
          architecture, and hands-on development from the first commit. The
          mandate was a mobile-first experience that felt effortless while doing
          serious work underneath — trust, security, and settlement for real
          transactions.
        </>,
        <>
          The emphasis throughout was reliability: getting money movement and
          dispute handling right, because in this category a single mistake
          erodes the trust the whole product is built on.
        </>,
      ],
    },
    kpis: [
      {
        v: (
          <>
            0→<b>1</b>
          </>
        ),
        l: "Took the platform from concept to launch",
      },
      { v: <b>Auto</b>, l: "Order & settlement workflows automated end to end" },
      { v: <b>2-sided</b>, l: "Individuals and businesses on one platform" },
      { v: <b>—</b>, l: "Add a headline metric here", sample: "sample — add KPI" },
    ],
    respHead: "What I owned, end to end.",
    resp: [
      {
        n: "01",
        b: "Engineering lead",
        span: "Led the engineering effort for the mobile-first commerce and escrow platform.",
      },
      {
        n: "02",
        b: "Technical direction",
        span: "Owned architecture and hands-on development across the stack.",
      },
      {
        n: "03",
        b: "Trust & security",
        span: "Implemented the trust and security measures protecting every transaction.",
      },
      {
        n: "04",
        b: "Zero to launch",
        span: "Shipped the platform from concept through to a working release.",
      },
    ],
    stack: {
      kind: "cols",
      head: "The toolkit behind Orems.",
      cols: [
        {
          h4: "Mobile",
          chips: ["Flutter", "Dart", "State management", "Mobile-first UI/UX"],
        },
        {
          h4: "Platform",
          chips: [
            "Escrow workflows",
            "Automated order flows",
            "Real-time tracking",
            "Dispute protection",
          ],
        },
      ],
    },
    satisfaction: {
      quote: (
        <>
          He took an ambiguous brief and returned a <em>shippable platform</em> —
          owning the architecture and the hard security decisions without being
          asked twice.
        </>
      ),
      avatar: "O",
      by: "Founder",
      role: "Orems Cybernetics",
    },
    gallery: {
      head: "Inside the product.",
      sections: [
        {
          kind: "gallery",
          shots: [
            { kind: "img", src: "/orems.png", alt: "Orems overview", wide: true },
            {
              kind: "ph",
              ph: (
                <>
                  drop screenshot →<br />
                  checkout / escrow flow
                </>
              ),
            },
            {
              kind: "ph",
              ph: (
                <>
                  drop screenshot →<br />
                  order tracking view
                </>
              ),
            },
          ],
        },
      ],
    },
    next: { slug: "qobi", name: "Qobi" },
  },

  qobi: {
    slug: "qobi",
    name: "Qobi",
    title: "Qobi — Case Study",
    description:
      "Qobi — a privacy-first AI co-pilot for ALU students. Founder. Full project breakdown.",
    kicker: "Case Study · 04 · ALU Claude Builders Club",
    visit: {
      label: "Visit qobi-copilot.xyz",
      href: "https://www.qobi-copilot.xyz",
      external: true,
    },
    h1: (
      <>
        Qobi — the co-pilot that reads the <em>boring places.</em>
      </>
    ),
    tagline: (
      <>
        A privacy-first AI co-pilot that reads a student&apos;s ALU inbox and
        Canvas <b>read-only,</b> surfaces buried obligations, and reasons about
        how one slip cascades across academics, money, standing, and visa.{" "}
        <b>Founded at the Claude Builders Club hackathon — shipped in 4 days.</b>
      </>
    ),
    platforms: [
      { icon: "globe", label: "Web app" },
      { icon: "phone", label: "Mobile app" },
    ],
    heroShot: {
      src: "/qobi/web-today.png",
      alt: "Qobi — Today board",
      ph: "// qobi-dashboard.png",
    },
    meta: [
      { lab: "Role", val: "Founder" },
      { lab: "Timeline", val: "Hackathon · shipped in 4 days" },
      { lab: "Context", val: "ALU Claude Builders Club · Kigali" },
      { lab: "Platforms", val: "Web + Mobile" },
    ],
    overview: {
      h2: "One missed email shouldn't cost you your visa.",
      prose: [
        <>
          At ALU, the consequences of a single missed obligation don&apos;t stay
          contained — a late submission can ripple into <b>grades, money owed,
          academic standing, and even visa status.</b> The signal is buried in
          inboxes and Canvas, exactly where students stop looking.
        </>,
        <>
          Qobi connects <b>read-only</b> to Gmail and Canvas, surfaces what&apos;s
          actually at stake, and reasons across domains — tracing how one slip in
          one place cascades into others. This is where I started taking the AI
          direction seriously, and it set the tone for everything since.
        </>,
        <>
          Privacy was the constraint, not an afterthought: read-only scopes, no
          writing back, and a design that earns trust before it asks for access.
          The whole thing — web <em>and</em> mobile — was conceived and shipped
          in <b>4 days</b> at the Claude Builders Club hackathon.
        </>,
      ],
    },
    kpis: [
      { v: <b>4 days</b>, l: "Concept to shipped product — at a hackathon" },
      { v: <b>2</b>, l: "Platforms built in parallel: web + mobile" },
      { v: <b>Read-only</b>, l: "Gmail + Canvas access — never writes back" },
      {
        v: <b>4</b>,
        l: "Life domains reasoned across: academics, money, standing, visa",
      },
    ],
    respHead: "Founder — origin insight to shipped.",
    resp: [
      {
        n: "01",
        b: "The insight",
        span: "Identified how one missed obligation cascades across a student's whole life at ALU.",
      },
      {
        n: "02",
        b: "Cross-domain reasoning",
        span: "Designed the logic that traces one slip across academics, finance, standing, and visa.",
      },
      {
        n: "03",
        b: "Privacy-first architecture",
        span: "Built read-only Gmail + Canvas integration that never writes back.",
      },
      {
        n: "04",
        b: "Ship in 4 days",
        span: "Built web and mobile in parallel and shipped a working product inside a hackathon.",
      },
    ],
    stack: {
      kind: "cols",
      head: "The toolkit behind Qobi.",
      cols: [
        {
          h4: "Web & backend",
          chips: ["Next.js", "Express", "FCM (push)", "Resend", "Dynamic Links"],
        },
        {
          h4: "Mobile & AI",
          chips: [
            "Flutter",
            "Dart",
            "Claude API",
            "Gmail + Canvas APIs",
            "& many more",
          ],
        },
      ],
    },
    satisfaction: {
      quote: (
        <>
          Calm, precise, and relentless. He reads the boring places so the
          important things <em>don&apos;t stay unseen</em> — and ships before
          anyone expects it.
        </>
      ),
      avatar: "M",
      by: "Mentor",
      role: "ALU Claude Builders Club",
    },
    gallery: {
      head: "Inside the product.",
      sections: [
        {
          kind: "gallery",
          label: "Web app",
          shots: [
            { kind: "img", src: "/qobi/web-today.png", alt: "Qobi web — Today board", wide: true },
            { kind: "img", src: "/qobi/web-obligations.png", alt: "Qobi web — Obligations list" },
            { kind: "img", src: "/qobi/web-settings.png", alt: "Qobi web — Profile & privacy" },
          ],
        },
        {
          kind: "phones",
          label: "Mobile app",
          phones: [
            { src: "/qobi/m-welcome.jpeg", alt: "Qobi mobile — welcome", cap: "Onboarding" },
            { src: "/qobi/m-today.jpeg", alt: "Qobi mobile — today's brief", cap: "Today's brief" },
            { src: "/qobi/m-plan.jpeg", alt: "Qobi mobile — plan", cap: "Plan" },
            { src: "/qobi/m-permit.jpeg", alt: "Qobi mobile — permit tracker", cap: "Permit tracker" },
          ],
        },
      ],
    },
    next: { slug: "star-taskz", name: "Star Taskz" },
  },

  "star-taskz": {
    slug: "star-taskz",
    name: "Star Taskz",
    title: "Star Taskz — Case Study",
    description:
      "Star Taskz — a conversational-AI task manager you talk to. Builder. Full project breakdown.",
    kicker: "Case Study · 05",
    visit: { label: "Discuss this project", href: "/#contact", external: false },
    h1: (
      <>
        Star Taskz — the task manager you <em>talk to.</em>
      </>
    ),
    tagline: (
      <>
        A conversational-AI task manager driven by natural voice — create,
        manage, and complete tasks by speaking. <b>Speech-to-text, intelligent
        reminders, productivity insights,</b> and sync with Google Calendar,
        GitHub, Notion, and Jira for a fully connected workflow.
      </>
    ),
    platforms: [
      { icon: "phone", label: "Mobile app" },
      { icon: "mic", label: "Voice-first" },
    ],
    heroShot: {
      src: "/star-taskz.png",
      alt: "Star Taskz app",
      ph: "// star-taskz.png",
    },
    meta: [
      { lab: "Role", val: "Builder" },
      { lab: "Timeline", val: "2024" },
      { lab: "Type", val: "Conversational AI · Productivity" },
      { lab: "Status", val: "Built" },
    ],
    overview: {
      h2: "The fastest way to capture a task is to say it.",
      prose: [
        <>
          Typing breaks flow. Star Taskz lets you <b>create, manage, and complete
          tasks by talking</b> — natural voice in, structured tasks out.
          Speech-to-text handles the capture; the system handles the organising,
          reminding, and surfacing.
        </>,
        <>
          Beyond capture, it closes the loop on a real workflow:{" "}
          <b>intelligent reminders, productivity insights,</b> and sync with{" "}
          <b>Google Calendar, GitHub, Notion, and Jira</b> so tasks live where
          the work actually happens — not in a silo you forget to open.
        </>,
        <>
          The interesting design problem was trust in transcription: making a
          voice-first interface feel reliable enough that people stop reaching
          for the keyboard.
        </>,
      ],
    },
    kpis: [
      { v: <b>Voice</b>, l: "Full task lifecycle driven by natural speech" },
      { v: <b>4</b>, l: "Integrations: Google Calendar, GitHub, Notion, Jira" },
      { v: <b>Insights</b>, l: "Productivity analytics from completed tasks" },
      { v: <b>Teams</b>, l: "Shared workspaces for collaborative task flows" },
    ],
    respHead: "What I built.",
    resp: [
      {
        n: "01",
        b: "Conversational layer",
        span: "Built the voice interface for creating and managing tasks through natural language.",
      },
      {
        n: "02",
        b: "Speech-to-text",
        span: "Integrated transcription and intelligent reminders into the task flow.",
      },
      {
        n: "03",
        b: "Integrations",
        span: "Wired Google Calendar, GitHub, Notion, and Jira sync for a connected, single-source workflow.",
      },
      {
        n: "04",
        b: "Insights",
        span: "Surfaced productivity insights from task activity and completion.",
      },
    ],
    stack: {
      kind: "cols",
      head: "The toolkit behind Star Taskz.",
      cols: [
        {
          h4: "AI & voice",
          chips: [
            "Conversational AI",
            "Speech-to-text",
            "Intelligent reminders",
            "Productivity insights",
          ],
        },
        {
          h4: "Integrations",
          chips: ["Google Calendar", "GitHub", "Notion", "Jira"],
        },
      ],
    },
    satisfaction: {
      quote: (
        <>
          It actually changed how I capture work — I just{" "}
          <em>talk, and it&apos;s handled.</em> The GitHub sync means nothing
          falls through the cracks anymore.
        </>
      ),
      avatar: "U",
      by: "Early user",
      role: "Star Taskz",
    },
    gallery: {
      head: "Inside the product.",
      sections: [
        {
          kind: "phones",
          label: "Mobile app",
          phones: [
            { src: "/star/m-today.jpeg", alt: "Star Taskz — today schedule", cap: "Today schedule" },
            { src: "/star/m-ai.jpeg", alt: "Star Taskz — voice AI", cap: "Voice AI" },
            { src: "/star/m-sync.jpeg", alt: "Star Taskz — platform sync", cap: "Platform sync" },
            { src: "/star/m-workspaces.jpeg", alt: "Star Taskz — workspaces", cap: "Workspaces" },
          ],
        },
      ],
    },
    next: { slug: "troco", name: "Troco" },
  },
};

export const CASE_SLUGS = Object.keys(CASES);
