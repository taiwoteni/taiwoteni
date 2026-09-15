import type { ReactNode } from "react";
import type { PlatformIcon } from "@/components/Svg";

/* ------------------------------------------------------------------ */
/* Model — each section maps 1:1 onto a block in the design's work/*.html */
/* ------------------------------------------------------------------ */

export type Kpi = { v: ReactNode; l: ReactNode; sample?: string };
export type Resp = { n: string; b: string; span: string };
export type StackCol = { h4: string; chips: string[] };
export type Phone = { src: string; alt: string; cap: string };
export type Shot = { src?: string; alt?: string; ph?: ReactNode; wide?: boolean; fit?: boolean };
export type Fig = { src: string; alt: string; n: string; h4: string; ps: ReactNode[]; reads: ReactNode };

export type Block =
  | { kind: "phones"; label?: string; items: Phone[] }
  | { kind: "gallery"; label?: string; shots: Shot[] }
  | { kind: "redacted"; b: string; span: string; mt?: number }
  | { kind: "figs"; figs: Fig[] };

export type Section =
  | { kind: "lead"; label: string; h2: ReactNode; prose: ReactNode[] }
  | { kind: "kpis"; label: string; items: Kpi[] }
  | { kind: "resp"; label: string; h2: ReactNode; items: Resp[] }
  | { kind: "stack"; label: string; h2: ReactNode; cols: StackCol[] }
  | { kind: "sat"; label: string; quote: ReactNode; avatar: string; by: string; role: string }
  | { kind: "screens"; label: string; h2: ReactNode; h2Mb?: number; intro?: ReactNode; blocks: Block[] };

export type CaseStudy = {
  slug: string;
  name: string;
  title: string;
  description: string;
  kicker: string;
  visit: { label: string; href: string; external: boolean };
  /** h1 as [before, <em>accent</em>, after] — also used for the social card. */
  headline: [string, string, string?];
  tagline: ReactNode;
  platforms: { icon: PlatformIcon; label: string }[];
  hero: { src: string; alt: string; ph?: string };
  meta: { lab: string; val: string }[];
  sections: Section[];
};

const DISCUSS = { label: "Discuss this project", href: "/#contact", external: false };

/** Home-page order; "Next case" walks this list and wraps around. */
export const CASE_ORDER = ["troco", "qobi", "khove", "orems", "agrilink", "star-taskz", "axel"] as const;

export const CASES: Record<string, CaseStudy> = {
  /* ================================================================ */
  troco: {
    slug: "troco",
    name: "Troco",
    title: "Troco — Case Study · Teninlanimi Taiwo",
    description:
      "Troco — a secure, escrow-based fintech platform. Founding & Senior Engineer. Full project breakdown.",
    kicker: "Case Study · 02",
    visit: { label: "Visit troco.ng", href: "https://www.troco.ng", external: true },
    headline: ["Troco — a marketplace built on ", "trust", ", not hope."],
    tagline: (
      <>
        A secure, escrow-based <b>e-commerce marketplace</b> where money is held until both sides are satisfied — with
        real-time order tracking, dispute resolution, in-app chat, and three-party broker flows.{" "}
        <b>Live on Google Play with 1,000+ Android users in the first three months.</b>
      </>
    ),
    platforms: [
      { icon: "phone", label: "Android" },
      { icon: "phone", label: "iOS" },
      { icon: "lock", label: "Admin web · internal" },
      { icon: "globe", label: "Marketing site" },
    ],
    hero: { src: "/troco-app.png", alt: "Troco app", ph: "// troco-app.png" },
    meta: [
      { lab: "Role", val: "Founding & Senior Engineer" },
      { lab: "Timeline", val: "Jun 2024 — Present" },
      { lab: "Company", val: "Troco Technologies · Lagos" },
      { lab: "Status", val: "Live on Google Play" },
    ],
    sections: [
      {
        kind: "lead",
        label: "01 — Overview",
        h2: "The problem was trust. Money moves before goods do.",
        prose: [
          <>
            Peer-to-peer commerce in Nigeria runs on faith — buyers pay first and hope, or sellers ship first and hope.{" "}
            <b>Troco removes the hope.</b> It&apos;s an e-commerce marketplace where funds are held in escrow and only
            released when both sides are satisfied, with a full audit trail in between.
          </>,
          <>
            I joined as the founding engineer and built the product from scratch — owning the technical foundation, the
            architecture, and the team that grew around it. I later spearheaded the <b>strategic pivot</b> that
            repositioned Troco from a single-purpose escrow tool into a full marketplace app, backed by an internal{" "}
            <b>admin web platform</b> for order verification, driver dispatch, and dispute handling.
          </>,
          <>
            The hard part wasn&apos;t the happy path — it was the disputes, the partial refunds, the three-party broker
            flows, and keeping all of it real-time and legible to non-technical users handling real money.
          </>,
        ],
      },
      {
        kind: "kpis",
        label: "02 — Impact",
        items: [
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
          { v: <b>99.9%</b>, l: "Transaction settlement reliability", sample: "sample — confirm" },
        ],
      },
      {
        kind: "resp",
        label: "03 — My role & responsibility",
        h2: "What I owned, end to end.",
        items: [
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
      },
      {
        kind: "stack",
        label: "04 — Frameworks & stack",
        h2: "The toolkit behind Troco.",
        cols: [
          { h4: "Mobile", chips: ["Flutter", "Dart", "Riverpod", "Bloc", "Real-time updates"] },
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
      {
        kind: "sat",
        label: "05 — Client satisfaction",
        quote: (
          <>
            Teni built Troco from nothing and had <em>a thousand people using it in three months.</em> Rare to find
            someone who ships that fast and that carefully.
          </>
        ),
        avatar: "R",
        by: "R. A.",
        role: "Co-founder · Troco",
      },
      {
        kind: "screens",
        label: "06 — Screens",
        h2: "Inside the product.",
        blocks: [
          {
            kind: "phones",
            label: "Mobile app",
            items: [
              { src: "/troco/m-home.png", alt: "Troco — wallet & home", cap: "Wallet & home" },
              { src: "/troco/m-shop.png", alt: "Troco — marketplace", cap: "Marketplace" },
              { src: "/troco/m-order.png", alt: "Troco — order tracking", cap: "Escrow order track" },
              { src: "/troco/m-chat.png", alt: "Troco — in-app chat", cap: "In-app chat" },
            ],
          },
          {
            kind: "redacted",
            mt: 30,
            b: "Admin web platform — not shown",
            span: "The internal admin site (order verification, driver dispatch, dispute resolution) is confidential and can't be shared publicly. Available to walk through in conversation.",
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  qobi: {
    slug: "qobi",
    name: "Qobi",
    title: "Qobi — Case Study · Teninlanimi Taiwo",
    description: "Qobi — a privacy-first AI co-pilot for ALU students. Founder. Full project breakdown.",
    kicker: "Case Study · 03 · ALU Claude Builders Club",
    visit: { label: "Visit qobi-copilot.xyz", href: "https://www.qobi-copilot.xyz", external: true },
    headline: ["Qobi — the co-pilot that reads the ", "boring places."],
    tagline: (
      <>
        A privacy-first AI co-pilot that reads a student&apos;s ALU inbox and Canvas <b>read-only,</b> surfaces buried
        obligations, and reasons about how one slip cascades across academics, money, standing, and visa.{" "}
        <b>Founded at the Claude Builders Club hackathon — shipped in 4 days.</b>
      </>
    ),
    platforms: [
      { icon: "globe", label: "Web app" },
      { icon: "phone", label: "Mobile app" },
    ],
    hero: { src: "/qobi/web-today.png", alt: "Qobi — Today board", ph: "// qobi-dashboard.png" },
    meta: [
      { lab: "Role", val: "Founder" },
      { lab: "Timeline", val: "Hackathon · shipped in 4 days" },
      { lab: "Context", val: "ALU Claude Builders Club · Kigali" },
      { lab: "Platforms", val: "Web + Mobile" },
    ],
    sections: [
      {
        kind: "lead",
        label: "01 — Overview",
        h2: "One missed email shouldn't cost you your visa.",
        prose: [
          <>
            At ALU, the consequences of a single missed obligation don&apos;t stay contained — a late submission can
            ripple into <b>grades, money owed, academic standing, and even visa status.</b> The signal is buried in
            inboxes and Canvas, exactly where students stop looking.
          </>,
          <>
            Qobi connects <b>read-only</b> to Gmail and Canvas, surfaces what&apos;s actually at stake, and reasons across
            domains — tracing how one slip in one place cascades into others. This is where I started taking the AI
            direction seriously, and it set the tone for everything since.
          </>,
          <>
            Privacy was the constraint, not an afterthought: read-only scopes, no writing back, and a design that earns
            trust before it asks for access. The whole thing — web <em>and</em> mobile — was conceived and shipped in{" "}
            <b>4 days</b> at the Claude Builders Club hackathon.
          </>,
        ],
      },
      {
        kind: "kpis",
        label: "02 — Impact",
        items: [
          { v: <b>4 days</b>, l: "Concept to shipped product — at a hackathon" },
          { v: <b>2</b>, l: "Platforms built in parallel: web + mobile" },
          { v: <b>Read-only</b>, l: "Gmail + Canvas access — never writes back" },
          { v: <b>4</b>, l: "Life domains reasoned across: academics, money, standing, visa" },
        ],
      },
      {
        kind: "resp",
        label: "03 — My role & responsibility",
        h2: "Founder — origin insight to shipped.",
        items: [
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
      },
      {
        kind: "stack",
        label: "04 — Frameworks & stack",
        h2: "The toolkit behind Qobi.",
        cols: [
          { h4: "Web & backend", chips: ["Next.js", "Express", "FCM (push)", "Resend", "Dynamic Links"] },
          { h4: "Mobile & AI", chips: ["Flutter", "Dart", "Claude API", "Gmail + Canvas APIs", "& many more"] },
        ],
      },
      {
        kind: "sat",
        label: "05 — Client satisfaction",
        quote: (
          <>
            Calm, precise, and relentless. He reads the boring places so the important things{" "}
            <em>don&apos;t stay unseen</em> — and ships before anyone expects it.
          </>
        ),
        avatar: "M",
        by: "Mentor",
        role: "ALU Claude Builders Club",
      },
      {
        kind: "screens",
        label: "06 — Screens",
        h2: "Inside the product.",
        blocks: [
          {
            kind: "gallery",
            label: "Web app",
            shots: [
              { src: "/qobi/web-today.png", alt: "Qobi web — Today board", wide: true },
              { src: "/qobi/web-obligations.png", alt: "Qobi web — Obligations list" },
              { src: "/qobi/web-settings.png", alt: "Qobi web — Profile & privacy" },
            ],
          },
          {
            kind: "phones",
            label: "Mobile app",
            items: [
              { src: "/qobi/m-welcome.jpeg", alt: "Qobi mobile — welcome", cap: "Onboarding" },
              { src: "/qobi/m-today.jpeg", alt: "Qobi mobile — today's brief", cap: "Today's brief" },
              { src: "/qobi/m-plan.jpeg", alt: "Qobi mobile — plan", cap: "Plan" },
              { src: "/qobi/m-permit.jpeg", alt: "Qobi mobile — permit tracker", cap: "Permit tracker" },
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  khove: {
    slug: "khove",
    name: "Khove",
    title: "Khove — Case Study · Teninlanimi Taiwo",
    description:
      "Khove — an AI-native workspace unifying GitHub, Google Calendar and Jira behind one conversational interface. Founder. Full project breakdown.",
    kicker: "Case Study · 04",
    visit: { label: "Visit khove.xyz", href: "https://www.khove.xyz", external: true },
    headline: ["Khove — your tools, finally ", "thinking together."],
    tagline: (
      <>
        An AI-native workspace that puts <b>GitHub, Google Calendar and Jira behind a single conversational interface</b>{" "}
        — so you can plan, track and ship without switching tabs. Ask in plain English; Khove routes the request, pulls
        context across every tool, and takes the action.
      </>
    ),
    platforms: [
      { icon: "monitor", label: "Web platform" },
      { icon: "chat", label: "Conversational" },
    ],
    hero: { src: "/khove/web-landing.png", alt: "Khove landing page" },
    meta: [
      { lab: "Role", val: "Founder" },
      { lab: "Timeline", val: "2026 — present" },
      { lab: "Type", val: "AI-native developer tooling" },
      { lab: "Status", val: "Live" },
    ],
    sections: [
      {
        kind: "lead",
        label: "01 — Overview",
        h2: "Context lives in three tabs. Nobody's job is stitching it together.",
        prose: [
          <>
            An engineer&apos;s day is spread across a repo, a calendar and a tracker — and the answer to &quot;what needs
            my attention&quot; exists in none of them alone. It exists in the overlap, which a human has to assemble by
            hand, every morning.
          </>,
          <>
            Khove collapses that. It reads across <b>GitHub, Google Calendar and Jira</b>, answers in one place, and then{" "}
            <b>acts</b> — opening issues, creating tasks, blocking time. The distinction matters: most tools stop at the
            summary. Khove is built so the answer comes with the action attached.
          </>,
          <>
            It&apos;s an <b>agent product, not a chat wrapper.</b> Every request maps to a real, workspace-scoped tool
            call, and the hard engineering sits in permissioning, memory, and knowing which model to spend on.
          </>,
        ],
      },
      {
        kind: "kpis",
        label: "02 — What it does",
        items: [
          { v: <b>One</b>, l: "Conversational interface across every connected tool" },
          { v: <b>Acts</b>, l: "Creates tasks, opens issues, books time — not just answers" },
          { v: <b>Forecasts</b>, l: "Projected finish, velocity and days late per initiative" },
          { v: <b>Memory</b>, l: "Persistent context carried between conversations" },
          { v: <b>Teams</b>, l: "Workspace-scoped integrations, shared memory and standups" },
        ],
      },
      {
        kind: "resp",
        label: "03 — Decisions that mattered",
        h2: "Where the engineering actually went.",
        items: [
          {
            n: "01",
            b: "Workspace-scoped everything",
            span: "Each workspace connects its own accounts with encrypted tokens. No shared credentials, no cross-tenant leakage — the thing that makes team adoption survivable.",
          },
          {
            n: "02",
            b: "Intent → tool call, not intent → text",
            span: "Built the routing layer that maps a plain-English ask onto a concrete, permissioned action across the connected stack.",
          },
          {
            n: "03",
            b: "A cost-aware model router",
            span: "Simple asks go to a fast model, hard ones to a stronger one. Users get speed without paying for frontier inference on every trivial question.",
          },
          {
            n: "04",
            b: "Memory as a product feature",
            span: "Persistent memory learns working preferences and stops re-asking setup questions — the difference between a demo and a daily habit.",
          },
          {
            n: "05",
            b: "Integrations free on every tier",
            span: "Pricing charges for AI actions, not for connecting tools. Removes the adoption barrier that kills most integration products.",
          },
          {
            n: "06",
            b: "Read across, then offer",
            span: "Khove proposes the action and waits for confirmation, and the conversation shows every tool call it made to get there. Agentic, but auditable — essential when it has write access to real systems.",
          },
          {
            n: "07",
            b: "Forecasting, not reporting",
            span: "Initiatives carry target dates; Khove folds GitHub merges into a burn-up, projects a finish date, computes days late, and writes the narrative explaining the risk.",
          },
          {
            n: "08",
            b: "Metrics a lead reports on",
            span: "Throughput, cycle time, review latency, deploys, stale in-progress work and sprint burndown — derived across GitHub and Jira rather than read from either.",
          },
        ],
      },
      {
        kind: "stack",
        label: "04 — Frameworks & stack",
        h2: "The toolkit behind Khove.",
        cols: [
          {
            h4: "AI & agents",
            chips: ["LLM tool-calling", "Model routing", "Persistent memory", "Intent parsing", "Conversational UX"],
          },
          {
            h4: "Platform",
            chips: [
              "Next.js",
              "TypeScript",
              "OAuth 2.0",
              "Encrypted token storage",
              "Multi-tenant workspaces",
              "Webhooks",
            ],
          },
          { h4: "Integrations", chips: ["GitHub", "Google Calendar", "Jira"] },
          {
            h4: "Product surface",
            chips: [
              "Consolidated dashboards",
              "Delivery forecasting",
              "Sprint intelligence",
              "Planner & calendar",
              "Standup automation",
              "Admin dashboard",
            ],
          },
        ],
      },
      {
        kind: "screens",
        label: "05 — Screens",
        h2: "Inside the product, screen by screen.",
        h2Mb: 14,
        intro: (
          <>
            Five surfaces, each solving a different part of the same problem: the answer to “what needs my attention”
            lives in the overlap between three tools, and nobody&apos;s job is assembling it.
          </>
        ),
        blocks: [
          {
            kind: "figs",
            figs: [
              {
                src: "/khove/app-dashboard.png",
                alt: "Khove consolidated dashboard showing GitHub and calendar KPIs",
                n: "Screen 01 · Dashboards",
                h4: "Three systems resolved into one KPI surface",
                ps: [
                  <>
                    A single dashboard — “Consolidated Platform First” — carrying{" "}
                    <b>merges, weekly throughput, cycle time, review latency, open PRs and deploys</b> from GitHub, next
                    to upcoming deadlines, today&apos;s schedule and overdue items from Google Calendar.
                  </>,
                  <>
                    Every tile shows a delta against the previous 28 days, so the dashboard reports{" "}
                    <b>direction, not just state</b>. Auto-refresh is on; dashboards are user-composable, and this one is
                    starred as the default.
                  </>,
                ],
                reads: (
                  <>
                    Why it matters: the overdue column — eight ceremonies and reviews, 61–64 days stale — is exactly the
                    signal that no single tool surfaces on its own.
                  </>
                ),
              },
              {
                src: "/khove/app-chat.png",
                alt: "Khove agent answering with a seven-step tool-call trace",
                n: "Screen 02 · Chat",
                h4: "The agent shows its work before it answers",
                ps: [
                  <>
                    Asked “How are the state of things”, Khove expands <b>seven traced steps</b> — listed threads,
                    checked sprint status, assessed delivery risk, measured delivery flow, cross-checked Jira against
                    GitHub, checked for unplanned work — then writes a Workspace Status summarising six active
                    connectivity threads and sprint state.
                  </>,
                  <>Each step is a real, permissioned tool call, not a rendering of one model response.</>,
                ],
                reads: (
                  <>
                    Why it matters: an agent with write access to production systems has to be <b>auditable</b>.
                    Exposing the call trace is a trust decision, not a UI flourish.
                  </>
                ),
              },
              {
                src: "/khove/app-delivery.png",
                alt: "Khove delivery forecast for an initiative, with burn-up and days late",
                n: "Screen 03 · Delivery",
                h4: "Forecasting, not reporting",
                ps: [
                  <>
                    Threads with a target date become <b>initiatives</b>. Khove folds GitHub merges into a burn-up against
                    that target and derives <b>progress, velocity, projected finish and days late</b> — here, a platform
                    thread projected to land <b>46 days late</b>.
                  </>,
                  <>
                    The “What&apos;s happening” panel writes the narrative in prose and names the evidence: two linked
                    tickets with code work but no pull requests attached, which is why it can&apos;t confirm completion.
                  </>,
                ],
                reads: (
                  <>
                    Why it matters: status tools tell you where you are. This one tells you <b>where you&apos;ll end up</b>
                    , and which missing link makes it uncertain.
                  </>
                ),
              },
              {
                src: "/khove/app-jira.png",
                alt: "Khove Jira dashboard with flow metrics and sprint burndown",
                n: "Screen 04 · Jira",
                h4: "Jira as flow, not as a board",
                ps: [
                  <>
                    The connected project (14 open, 40 total) rendered as the metrics a lead actually reports on:{" "}
                    <b>completed, throughput, cycle time, points done, open bugs and stale in-progress work</b>, with To
                    Do / In Progress / Done counts beneath.
                  </>,
                  <>
                    Sprints appear side by side — an active sprint <b>39 days over</b> at 67% of issues, next to an
                    upcoming one at 0% — each with a burndown of remaining issues against ideal.
                  </>,
                ],
                reads: (
                  <>
                    Why it matters: “stale in-progress: 5” is a derived metric. Jira stores tickets; it doesn&apos;t tell
                    you which ones have quietly stopped moving.
                  </>
                ),
              },
              {
                src: "/khove/app-planner.png",
                alt: "Khove planner month view synced with Google Calendar",
                n: "Screen 05 · Planner",
                h4: "Planning where the shipping happens",
                ps: [
                  <>
                    A month view synced two-way with <b>Google Calendar</b> — daily standups, sprint planning, PR reviews,
                    design reviews, release cutovers and personal events — filterable by meetings versus events and
                    colour-coded by source.
                  </>,
                  <>
                    Top left: <b>fifteen agent suggestions waiting for review.</b> Khove proposes the blocks; the human
                    still approves them.
                  </>,
                ],
                reads: (
                  <>
                    Why it matters: this closes the loop. The agent can read the calendar in chat, forecast against it in
                    Delivery, and write to it here — one permission model across all three.
                  </>
                ),
              },
              {
                src: "/khove/web-landing.png",
                alt: "Khove landing page",
                n: "Screen 06 · Landing page",
                h4: "One claim, stated once",
                ps: [
                  <>
                    “Your tools, finally thinking together.” The hero makes a single promise and shows the integration
                    constellation rather than a feature list — GitHub, Calendar, Jira, Slack, Notion, GitLab, Meet,
                    Teams, Azure orbiting the mark.
                  </>,
                  <>
                    Below it: free-forever plan, no credit card, and <b>every integration free on every tier</b> — pricing
                    charges for AI actions instead.
                  </>,
                ],
                reads: (
                  <>
                    Why it matters: integration products die at the connect step. Charging for actions rather than
                    connections removes that barrier deliberately.
                  </>
                ),
              },
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  orems: {
    slug: "orems",
    name: "Orems",
    title: "Orems — Case Study · Teninlanimi Taiwo",
    description:
      "Orems — a mobile-first commerce and escrow platform. Lead / Founding Engineer. Full project breakdown.",
    kicker: "Case Study · 05",
    visit: DISCUSS,
    headline: ["Orems — secure commerce, ", "end to end."],
    tagline: (
      <>
        A mobile-first commerce and escrow platform ensuring secure payments between individuals and businesses —{" "}
        <b>real-time tracking, automated workflows, and dispute protection,</b> from cart to settlement.
      </>
    ),
    platforms: [
      { icon: "phone", label: "Android" },
      { icon: "phone", label: "iOS" },
    ],
    hero: { src: "/orems.png", alt: "Orems platform", ph: "// orems.png" },
    meta: [
      { lab: "Role", val: "Lead / Founding Engineer" },
      { lab: "Timeline", val: "Mar 2025 — Present" },
      { lab: "Company", val: "Orems Cybernetics · Lagos" },
      { lab: "Status", val: "Zero to launch" },
    ],
    sections: [
      {
        kind: "lead",
        label: "01 — Overview",
        h2: "A marketplace where payment safety is the default.",
        prose: [
          <>
            Orems brings <b>escrow-grade protection to everyday commerce</b> — between individuals and businesses alike.
            Money is held safely until both parties confirm, with tracking and automated workflows handling the steps in
            between.
          </>,
          <>
            I led the engineering effort and owned the technical direction, architecture, and hands-on development from
            the first commit. The mandate was a mobile-first experience that felt effortless while doing serious work
            underneath — trust, security, and settlement for real transactions.
          </>,
          <>
            The emphasis throughout was reliability: getting money movement and dispute handling right, because in this
            category a single mistake erodes the trust the whole product is built on.
          </>,
        ],
      },
      {
        kind: "kpis",
        label: "02 — Impact",
        items: [
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
      },
      {
        kind: "resp",
        label: "03 — My role & responsibility",
        h2: "What I owned, end to end.",
        items: [
          {
            n: "01",
            b: "Engineering lead",
            span: "Led the engineering effort for the mobile-first commerce and escrow platform.",
          },
          { n: "02", b: "Technical direction", span: "Owned architecture and hands-on development across the stack." },
          {
            n: "03",
            b: "Trust & security",
            span: "Implemented the trust and security measures protecting every transaction.",
          },
          { n: "04", b: "Zero to launch", span: "Shipped the platform from concept through to a working release." },
        ],
      },
      {
        kind: "stack",
        label: "04 — Frameworks & stack",
        h2: "The toolkit behind Orems.",
        cols: [
          { h4: "Mobile", chips: ["Flutter", "Dart", "State management", "Mobile-first UI/UX"] },
          {
            h4: "Platform",
            chips: ["Escrow workflows", "Automated order flows", "Real-time tracking", "Dispute protection"],
          },
        ],
      },
      {
        kind: "sat",
        label: "05 — Client satisfaction",
        quote: (
          <>
            He took an ambiguous brief and returned a <em>shippable platform</em> — owning the architecture and the hard
            security decisions without being asked twice.
          </>
        ),
        avatar: "O",
        by: "Founder",
        role: "Orems Cybernetics",
      },
      {
        kind: "screens",
        label: "06 — Screens",
        h2: "Inside the product.",
        blocks: [
          {
            kind: "gallery",
            shots: [
              { src: "/orems.png", alt: "Orems overview", ph: "// orems.png", wide: true },
              {
                ph: (
                  <>
                    drop screenshot →<br />
                    checkout / escrow flow
                  </>
                ),
              },
              {
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
    ],
  },

  /* ================================================================ */
  agrilink: {
    slug: "agrilink",
    name: "AgriLink",
    title: "AgriLink — Case Study · Teninlanimi Taiwo",
    description:
      "Agrilink — connecting smallholder farmers to buyers and credit. Built under Afrinovators, a student agritech think tank at ALU.",
    kicker: "Case Study · 06 · Afrinovators",
    visit: { label: "Visit Afrinovators", href: "https://afrinovators.vercel.app", external: true },
    headline: ["AgriLink — the solution, ", "in your hands."],
    tagline: (
      <>
        A working <b>marketplace-and-training prototype</b> for Ikot Ekpene farmers: sell produce to verified buyers,
        browse a buyers&apos; market with search and listings, check local weather, and ask an agricultural expert in
        chat. Interactive, with sample data and no sign-up — built under <b>Afrinovators</b>, a student agritech think
        tank at ALU.
      </>
    ),
    platforms: [
      { icon: "monitor", label: "Web prototype" },
      { icon: "arrow-up", label: "Agritech" },
    ],
    hero: { src: "/agrilink/web-prototype.png", alt: "AgriLink prototype on the Afrinovators site" },
    meta: [
      { lab: "Role", val: "Builder" },
      { lab: "Context", val: "Afrinovators · ALU think tank" },
      { lab: "Type", val: "Agritech marketplace" },
      { lab: "Status", val: "Prototype" },
    ],
    sections: [
      {
        kind: "lead",
        label: "01 — Overview",
        h2: "Fertile ground is not the constraint. Access is.",
        prose: [
          <>
            Despite the Akwa Ibom Government&apos;s <b>ARISE Agenda (2023)</b> and related youth-empowerment programmes,
            unemployment in Ikot Ekpene sits at <b>51% — the second highest in Nigeria</b> (NBS, 2022). It hits youths,
            graduates, women and low-income households hardest.
          </>,
          <>
            The land produces; the value leaks out before it reaches the people who farmed it. Smallholders sell to
            whatever buyer is physically nearby, at whatever price is offered, with no capital to wait for a better one —
            and with roughly <b>one extension officer per 2,000+ farmers</b>, almost no support in between.
          </>,
          <>
            Agrilink is the product answer: connect <b>farmers to buyers directly</b>, and to <b>credit</b>, so a harvest
            becomes income rather than a distress sale.
          </>,
          <>
            The prototype is deliberately interactive — sample data, no sign-up, tappable on a phone — because
            Afrinovators&apos; real risk was ending as a well-argued report. My role was making sure it ended as something
            you could open and use instead.
          </>,
        ],
      },
      {
        kind: "kpis",
        label: "02 — The problem, in numbers",
        items: [
          { v: <b>51%</b>, l: "Unemployment in Ikot Ekpene — 2nd highest in Nigeria (NBS, 2022)" },
          { v: <b>1.8M</b>, l: "Unemployed, of 3.3M economically active people" },
          { v: <b>1:2,000+</b>, l: "Extension officer per farmers — almost no support layer" },
          { v: <b>2026–30</b>, l: "The window to act before it worsens" },
        ],
      },
      {
        kind: "resp",
        label: "03 — My role & responsibility",
        h2: "What I built.",
        items: [
          {
            n: "01",
            b: "Turned research into product",
            span: "Took the think tank's field findings and translated them into a concrete, demonstrable interface.",
          },
          {
            n: "02",
            b: "The two-sided flow",
            span: "Sell Produce for farmers listing to verified buyers, and a Buy Produce market with search, filters and listings for buyers.",
          },
          {
            n: "03",
            b: "Support, not just transactions",
            span: "Local weather and farming guidance, plus an agricultural expert reachable in chat — the layer that's missing when there's one extension officer per 2,000+ farmers.",
          },
          {
            n: "04",
            b: "Built it to be shown",
            span: "Scoped the prototype so it could be demonstrated to stakeholders and argued from, not just described.",
          },
        ],
      },
      {
        kind: "stack",
        label: "04 — Frameworks & stack",
        h2: "What the prototype covers.",
        cols: [
          {
            h4: "Marketplace",
            chips: ["Produce listings", "3-step sell flow", "Search & filters", "Verified buyers", "Naira pricing"],
          },
          {
            h4: "Support & training",
            chips: ["Local weather", "Pest & disease tips", "Daily farming tips", "Ask an expert"],
          },
          { h4: "Messaging", chips: ["Buyer threads", "Extension specialists", "Unread state", "Notifications"] },
          {
            h4: "Design constraints",
            chips: ["Low digital literacy", "Plain-language labels", "Mobile-first", "Sample data · no sign-up"],
          },
        ],
      },
      {
        kind: "screens",
        label: "05 — Screens",
        h2: "Inside the work.",
        blocks: [
          {
            kind: "phones",
            label: "AgriLink — the mobile prototype",
            items: [
              { src: "/agrilink/m-home.png", alt: "AgriLink home", cap: "Home" },
              { src: "/agrilink/m-sell.png", alt: "AgriLink sell produce", cap: "Sell Produce" },
              { src: "/agrilink/m-support.png", alt: "AgriLink farming support", cap: "Farming Support" },
              { src: "/agrilink/m-messages.png", alt: "AgriLink messages", cap: "Messages" },
            ],
          },
          {
            kind: "gallery",
            label: "AgriLink — on the Afrinovators site",
            shots: [{ src: "/agrilink/web-prototype.png", alt: "AgriLink prototype section", wide: true, fit: true }],
          },
          {
            kind: "gallery",
            label: "Afrinovators — the case for AgriLink",
            shots: [{ src: "/agrilink/web-problem.png", alt: "Afrinovators problem section", wide: true, fit: true }],
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  "star-taskz": {
    slug: "star-taskz",
    name: "Star Taskz",
    title: "Star Taskz — Case Study · Teninlanimi Taiwo",
    description: "Star Taskz — a conversational-AI task manager you talk to. Builder. Full project breakdown.",
    kicker: "Case Study · 07",
    visit: DISCUSS,
    headline: ["Star Taskz — the task manager you ", "talk to."],
    tagline: (
      <>
        A conversational-AI task manager driven by natural voice — create, manage, and complete tasks by speaking.{" "}
        <b>Speech-to-text, intelligent reminders, productivity insights,</b> and sync with Google Calendar, GitHub,
        Notion, and Jira for a fully connected workflow.
      </>
    ),
    platforms: [
      { icon: "phone", label: "Mobile app" },
      { icon: "mic", label: "Voice-first" },
    ],
    hero: { src: "/star-taskz.png", alt: "Star Taskz app", ph: "// star-taskz.png" },
    meta: [
      { lab: "Role", val: "Builder" },
      { lab: "Timeline", val: "2024" },
      { lab: "Type", val: "Conversational AI · Productivity" },
      { lab: "Status", val: "Built" },
    ],
    sections: [
      {
        kind: "lead",
        label: "01 — Overview",
        h2: "The fastest way to capture a task is to say it.",
        prose: [
          <>
            Typing breaks flow. Star Taskz lets you <b>create, manage, and complete tasks by talking</b> — natural voice
            in, structured tasks out. Speech-to-text handles the capture; the system handles the organising, reminding,
            and surfacing.
          </>,
          <>
            Beyond capture, it closes the loop on a real workflow: <b>intelligent reminders, productivity insights,</b>{" "}
            and sync with <b>Google Calendar, GitHub, Notion, and Jira</b> so tasks live where the work actually happens
            — not in a silo you forget to open.
          </>,
          <>
            The interesting design problem was trust in transcription: making a voice-first interface feel reliable
            enough that people stop reaching for the keyboard.
          </>,
        ],
      },
      {
        kind: "kpis",
        label: "02 — Impact",
        items: [
          { v: <b>Voice</b>, l: "Full task lifecycle driven by natural speech" },
          { v: <b>4</b>, l: "Integrations: Google Calendar, GitHub, Notion, Jira" },
          { v: <b>Insights</b>, l: "Productivity analytics from completed tasks" },
          { v: <b>Teams</b>, l: "Shared workspaces for collaborative task flows" },
        ],
      },
      {
        kind: "resp",
        label: "03 — My role & responsibility",
        h2: "What I built.",
        items: [
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
          { n: "04", b: "Insights", span: "Surfaced productivity insights from task activity and completion." },
        ],
      },
      {
        kind: "stack",
        label: "04 — Frameworks & stack",
        h2: "The toolkit behind Star Taskz.",
        cols: [
          {
            h4: "AI & voice",
            chips: ["Conversational AI", "Speech-to-text", "Intelligent reminders", "Productivity insights"],
          },
          { h4: "Integrations", chips: ["Google Calendar", "GitHub", "Notion", "Jira"] },
        ],
      },
      {
        kind: "sat",
        label: "05 — Client satisfaction",
        quote: (
          <>
            It actually changed how I capture work — I just <em>talk, and it&apos;s handled.</em> The GitHub sync means
            nothing falls through the cracks anymore.
          </>
        ),
        avatar: "U",
        by: "Early user",
        role: "Star Taskz",
      },
      {
        kind: "screens",
        label: "06 — Screens",
        h2: "Inside the product.",
        blocks: [
          {
            kind: "phones",
            label: "Mobile app",
            items: [
              { src: "/star/m-today.jpeg", alt: "Star Taskz — today schedule", cap: "Today schedule" },
              { src: "/star/m-ai.jpeg", alt: "Star Taskz — voice AI", cap: "Voice AI" },
              { src: "/star/m-sync.jpeg", alt: "Star Taskz — platform sync", cap: "Platform sync" },
              { src: "/star/m-workspaces.jpeg", alt: "Star Taskz — workspaces", cap: "Workspaces" },
            ],
          },
        ],
      },
    ],
  },

  /* ================================================================ */
  axel: {
    slug: "axel",
    name: "Axel",
    title: "Axel — Case Study · Teninlanimi Taiwo",
    description:
      "Axel — a full social platform with feed, stories, reels, messaging, voice notes and calling. Started at 13, shipped at 16 as sole developer.",
    kicker: "Case Study · 08 · Where it started",
    visit: DISCUSS,
    headline: ["Axel — your people, ", "full screen."],
    tagline: (
      <>
        A social platform with <b>feed, stories, reels, direct messaging, voice notes, and audio and video calling</b> —
        free on Android. My own idea, built alone, started at <b>13</b> and shipped at <b>16</b>: I designed it well past
        what I could then execute, left it for three years rather than cut it down, and came back once the skill had
        caught up.
      </>
    ),
    platforms: [
      { icon: "person", label: "Social platform" },
      { icon: "plus", label: "Solo build" },
    ],
    hero: { src: "/axel/web-home.png", alt: "Axel landing page" },
    meta: [
      { lab: "Role", val: "Sole builder" },
      { lab: "Timeline", val: "2020 — 2023" },
      { lab: "Type", val: "Social platform · Android" },
      { lab: "Status", val: "Shipped" },
    ],
    sections: [
      {
        kind: "lead",
        label: "01 — Overview",
        h2: "I designed something I couldn't build yet, and refused to make it smaller.",
        prose: [
          <>
            The premise was simple and the scope was not: <b>share the picture, not the app around it.</b> Photos, reels
            and voice notes get the whole screen, and the interface recedes while your friends look.
          </>,
          <>
            Delivering that meant building a real social platform, not a feed mock-up —{" "}
            <b>
              stories, a multi-reaction post feed, reels, direct messaging with voice notes, and both audio and video
              calling.
            </b>{" "}
            I was 13 when I designed it, and nowhere near able to build it.
          </>,
          <>
            The obvious move was to cut it down to what I could manage. I didn&apos;t. I <b>left it for three years</b>,
            built other things, got good enough, and came back at 16 to ship the original design — on Google Play, free
            on Android.
          </>,
          <>
            Every escrow state machine and cloud architecture since traces back to this: designing past my current
            ability, then closing the gap. It is also why I learned to own a product end to end before I knew that was a
            job title.
          </>,
        ],
      },
      {
        kind: "kpis",
        label: "02 — Why it's here",
        items: [
          { v: <b>13→16</b>, l: "Started at thirteen, shipped at sixteen" },
          { v: <b>Solo</b>, l: "Sole developer — product, design and engineering" },
          { v: <b>Android</b>, l: "Shipped free on Google Play" },
          { v: <b>3 yrs</b>, l: "Deliberately paused rather than scoped down" },
        ],
      },
      {
        kind: "resp",
        label: "03 — What I did",
        h2: "All of it, alone.",
        items: [
          {
            n: "01",
            b: "Product and design",
            span: "Defined what Axel was and how it looked, with no brief and no client. Including the landing page, the brand and the Play Store presence.",
          },
          {
            n: "02",
            b: "The social core",
            span: "Stories, a multi-reaction post feed with social proof and inline comments, reels, and profiles — the full consumer surface.",
          },
          {
            n: "03",
            b: "Real-time messaging",
            span: "Direct messaging with presence, unread state, media attachments, and recorded voice notes with waveform playback.",
          },
          {
            n: "04",
            b: "Voice and video calling",
            span: "One-to-one audio and video calls with ringing, in-call controls, camera switching and call duration — the hardest thing on the list, and the reason three years of waiting was the right call.",
          },
          {
            n: "05",
            b: "Knew when to stop",
            span: "Recognised at 13 that the design exceeded my skill, and paused rather than compromise it.",
          },
          {
            n: "06",
            b: "Came back and finished",
            span: "Returned at 16 with the ability I'd been missing and shipped what I had originally drawn.",
          },
        ],
      },
      {
        kind: "stack",
        label: "04 — Frameworks & stack",
        h2: "What it took to build.",
        cols: [
          { h4: "Mobile", chips: ["Android", "Mobile UI", "Media capture", "Audio recording"] },
          { h4: "Real-time", chips: ["Direct messaging", "Presence", "Voice & video calling", "Push notifications"] },
          { h4: "Social surface", chips: ["Feed & carousels", "24-hour stories", "Reels", "Reactions & comments"] },
          { h4: "Release", chips: ["Google Play", "Landing page", "Brand & identity"] },
        ],
      },
      {
        kind: "screens",
        label: "05 — Screens",
        h2: "Inside Axel.",
        blocks: [
          {
            kind: "gallery",
            label: "Landing page",
            shots: [{ src: "/axel/web-home.png", alt: "Axel landing page", wide: true, fit: true }],
          },
          {
            kind: "phones",
            label: "Android app",
            items: [
              { src: "/axel/m-onboarding.png", alt: "Axel onboarding", cap: "Onboarding" },
              { src: "/axel/m-feed.png", alt: "Axel home feed", cap: "Home feed" },
              { src: "/axel/m-feed-social.png", alt: "Axel feed with reactions and comments", cap: "Reactions & comments" },
            ],
          },
          {
            kind: "gallery",
            label: "Messaging & calling",
            shots: [
              {
                src: "/axel/voice-notes.png",
                alt: "Axel voice notes — recording and playback in thread",
                wide: true,
                fit: true,
              },
              { src: "/axel/calls.png", alt: "Axel audio call ringing and video call connected", wide: true, fit: true },
            ],
          },
        ],
      },
    ],
  },
};

export const CASE_SLUGS = [...CASE_ORDER];

export function nextCase(slug: string): CaseStudy {
  const i = CASE_ORDER.indexOf(slug as (typeof CASE_ORDER)[number]);
  return CASES[CASE_ORDER[(i + 1) % CASE_ORDER.length]];
}
