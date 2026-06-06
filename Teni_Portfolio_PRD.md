# Portfolio PRD — Teninlanimi "Teni" Taiwo

**Document type:** Product Requirements Document (content + brand + design spec)
**For:** teninlanimi-taiwo portfolio v2 (handoff to Claude Design / Claude Code)
**Design foundation:** the dark + red HTML build is the *standard*. This doc is the source of truth for everything that goes *into* it.
**Status:** Draft 1 — needs your sign-off on the items in §9 (Decisions Needed).

---

## 0. How to use this document

This PRD does three jobs:

1. **Locks the facts.** Your resumes, LinkedIn, Qobi, and Troco sites disagree on titles, dates, and "years of experience." §2 is the single canonical version. Use it everywhere; retire the rest.
2. **Sets the voice.** §3–§4 define how you sound, plus a library of taglines, headers, and microcopy.
3. **Specs the build.** §5–§8 map sections, finalized copy, the image manifest you'll fill, and the design tokens already proven in the HTML.

Anything marked **[DECIDE]** needs your call (collected in §9). Anything marked **[VERIFY]** is a fact I couldn't confirm.

---

## 1. Positioning & North Star

**Who you are, in one line (primary positioning):**

> Nineteen. Building secure, intelligent systems — from national infrastructure to the products people actually use.

**The longer version (about-page anchor):**

> Teninlanimi Taiwo is a software engineer, founding engineer, and founder working at the intersection of code, product, and strategy. He architects mission-critical systems for government and financial institutions, ships consumer products from zero, and has been writing code since he was twelve.

**North-star impression — what a visitor should feel in 5 seconds:**
Young, but not a novelty. *Serious* range — national-scale enterprise **and** shipped consumer products **and** a founder's instinct. Calm confidence, not loud. "This person is years ahead of their age, and the work proves it."

**The iceberg principle (read this twice):**
Teni is bigger than any single visible project. His most significant work is **confidential (NDA)** — that is the lead of Selected Work (project 01) and the thing that frames everything else as a *sample, not the sum*. **Qobi is a recent sample (project 04), where he started taking the AI direction seriously — NOT the centerpiece.** Never re-center or inflate Qobi. The trajectory ("started at 12, still early") matters more than any one artifact.

**Three pillars the whole site should reinforce:**
| Pillar | Proof on site |
|---|---|
| **Range** — enterprise + consumer + founder | Softcom (gov/fintech, NDA) · Troco (live app) · Qobi (founded) |
| **Depth beyond the visible** — the biggest work is confidential | The "Confidential / NDA" card · "tip of the iceberg" framing |
| **Early & relentless** — started at 12, still early | "Since 12" · three sectors · founding roles |

---

## 2. Canonical Facts — single source of truth

> Use these exact values everywhere. Where your documents disagreed, I picked the most defensible + impressive-and-true version and flagged it.

### 2.1 Identity
| Field | Canonical value | Notes |
|---|---|---|
| Full name | Teninlanimi Taiwo | "Teni Taiwo" for informal/founder contexts |
| Age framing | 19 | Lead with the work; let age be a quiet amplifier, not the headline |
| Title (composite) | Software Engineer · Founding Engineer · Founder | Order by context |
| Based in | Kigali, Rwanda *(currently)* · Lagos, Nigeria *(home base)* | "Kigali / Lagos" |
| Started coding | Age 12 | Your strongest origin fact — use it |
| Primary email | **[DECIDE]** `teninlanimitaiwo@gmail.com` *(recommended, reliable)* vs `teninlanimi@kalaharitech.xyz` | See §9 |
| LinkedIn | linkedin.com/in/teninlanimi-taiwo | |
| GitHub | **[VERIFY]** — need handle | Placeholder in HTML until provided |
| Phone | Off the public site by default | **[DECIDE]** if you want it shown |

### 2.2 The "years of experience" problem — **[DECIDE]**
Your sources say "3 years" / "3+ years," but you're 19, coding since 12, with professional roles from ~June 2024. A "3+ years professional" claim is easy to poke holes in and *undersells* the real story.

**Recommendation:** drop the contested number. Lead with **"Coding since 12 · shipping in production since 2024."** It's true, unusual, and stronger than any year count. If you want a number anywhere, use **"2+ years professional."** Pick one and use it sitewide.

### 2.3 Experience — canonical titles & dates
> **[VERIFY]** all dates — your three documents each list these differently.

| Org | Canonical title | Dates | Location |
|---|---|---|---|
| **Softcom Limited** | Solutions Architect *(+ embedded Product Manager)* | Oct 2025 – Present | Lagos / Kigali |
| **Troco Technologies** | Founding & Senior Software Engineer | Jun 2024 – Present | Lagos, Nigeria |
| **Qobi** | Founder *(co-founded with Ray [VERIFY surname])* | 2026 – Present | Kigali, Rwanda |
| **Orems Cybernetics** | Lead / Founding Engineer | Mar 2025 – Present | Lagos, Nigeria |
| **Bloom** | Founding Engineer & Mobile Developer | 2025 – Present | Lagos, Nigeria |

*Title conflicts resolved:* Troco appeared as both "Lead Software Engineer" and "Founding & Senior Software Engineer" — **Founding & Senior** is stronger and matches the founding narrative. Orems appeared as "Lead Software Engineer," "Lead Front-End Engineer," and "Founding Engineer" — consolidated to **Lead / Founding Engineer**. Confirm these are accurate.

### 2.4 Education — canonical
| Institution | Credential | Dates | Note |
|---|---|---|---|
| African Leadership University (ALU), Kigali | BSc — Software Engineering / AI & Machine Learning **[DECIDE which]** | 2026 – 2029 *(in progress)* | Grant-funded admission |
| National Institute of Information Technology (NIIT), Lagos | Professional Diploma — Full-Stack Software Engineering | 2023 – 2025 | 3.5 GPA · led team to 2nd, nationwide hackathon at 17 |
| ALX | Professional Certificate — Back-End Software Engineering | 2025 | |
| Thames Valley College International, Lagos | High School Diploma — Science | 2020 – 2023 | |

*Conflict:* LinkedIn says ALU degree is "AI & Machine Learning"; your resume bio says you describe yourself as BSE (Qobi byline: "Teni · founder · BSE"). **[DECIDE]** the official program name.

### 2.5 Skills — canonical groupings (full stack, from LinkedIn + resumes + DevOps)
- **Leadership & Product:** Solutions Architecture · System Design · Microservices Architecture · Technology Leadership · Technology Management · Product Management · Engineering Team Leadership · Critical Thinking · Problem Solving
- **Mobile:** Flutter · Dart · React Native · Android · iOS · Mobile App Development
- **Frontend & Web:** Next.js · React · TypeScript · Front-End Development · Website Development
- **Backend:** Spring Boot · Java · Express.js · Node · Backend Development
- **DevOps & Practices:** DevOps · Software Testing · Git · Cloud Infrastructure
- **AI:** Claude API · LLM integration · Conversational AI · Speech-to-text
- **Foundations / Certs:** Full-Stack Software Engineering · Back-End Software Engineering · Blockchain Basics

### 2.6 Metric claims — handle with care
| Claim | Status | Use as |
|---|---|---|
| Troco: 1,000+ Android users within 3 months of launch | From your resume | ✅ Product traction (Android only) |
| Troco: 5K+ monthly visitors | From troco.ng marketing site | ⚠️ *Site visitors, not users* — don't conflate |
| Qobi: 347 obligations surfaced / 62 easily-missed caught | On Qobi landing page | ⚠️ **[VERIFY]** likely illustrative/demo — do **not** present as real traction unless true |
| 200+ souls, healings, etc. | Faith testimony | ❌ Not portfolio content (see §3.4) |

---

## 3. Voice & Tone

### 3.1 Voice attributes
- **Confident, not boastful.** State what you built and what it did. Let scale and specifics carry the weight; never "I'm amazing."
- **Calm and precise.** Short, declarative sentences. Engineer's economy of words.
- **Founder's clarity.** You explain *why* something matters (the problem, the stakes), not just *what* you used.
- **Quietly bold.** One or two sharp lines per section, surrounded by restraint. (This is exactly the register Qobi's own copy nails — borrow it.)

### 3.2 Reference register — your own best writing
Qobi's site is your strongest voice sample. Match it:
> *"Quiet most of the time, calm in tone, and only loud when it has to be."*

That sentence is your whole tone in one line. The portfolio should feel the same.

### 3.3 Do / Don't
| Do | Don't |
|---|---|
| "Built Troco from scratch; 1,000+ users in 3 months." | "Revolutionary, game-changing fintech genius." |
| "National-scale systems for government & financial institutions." | Name confidential clients or projects |
| Let "19" sit quietly in context | Make age the headline ("19-year-old prodigy!") |
| Specific verbs: architected, shipped, led, pivoted | Filler: "passionate, hardworking, detail-oriented" |

### 3.4 The faith / purpose question — **[DECIDE]**
Your LinkedIn summary publicly frames you as purpose- and faith-driven; your conference testimony is private and contains personal details (salary figures, religious specifics). 

**Recommendation:** Keep **one understated line** of purpose in the About section (e.g. *"driven by building things with purpose"* or your own *"not just to build apps — to build impact"*). Keep the testimony itself **off** the site. If you want more, add an optional small **"Beyond the code"** block — values, faith, what drives you — kept tasteful and brief. Three options in §9.

---

## 4. Messaging Library (taglines, punchlines, microcopy)

### 4.1 Primary taglines (pick 1 for hero, keep others for meta/social) — **[DECIDE]**
- **A.** *"I build secure, scalable systems — from national infrastructure to products people actually use."* ← current HTML, recommended
- **B.** *"Engineering at the intersection of code, product, and strategy."*
- **C.** *"Start early. Dream boldly. Execute with precision."* (your own ethos line)
- **D.** *"Not just to build apps — to build impact."* (your own line; great as a secondary)

### 4.2 Punchlines / pull-quotes (sprinkle, don't overuse)
- "Coding since twelve. Still building like there's no parental guidance in destiny." *(faith-flavored — optional)*
- "Range: a national institution's system and an app a thousand people downloaded — same year."
- "I read the boring places so the important things don't stay unseen." *(Qobi ethos, if featuring Qobi prominently)*
- "Quiet most of the time. Loud only when it has to be."

### 4.3 Section eyebrows (mono labels — keep terse)
`01 — Profile` · `02 — Selected Work` · `03 — Experience` · `04 — Stack` · `05 — Education` · `06 — Contact`

### 4.4 Microcopy
- Nav CTA: **"Let's talk →"**
- Hero status pill: **"Currently — Solutions Architect @ Softcom"** (leads with enterprise gravitas; do not lead with Qobi)
- Primary button: **"View selected work →"**
- Secondary button: **"Get in touch"**
- Footer line: *"© 2026 Teninlanimi Taiwo — Kigali / Lagos"*
- 404 (if built): *"Unseen. Like a buried meal form."* *(Qobi in-joke — optional, fun)*

---

## 5. Information Architecture

The Confidential / NDA work leads; Qobi is a recent sample further down.

```
Nav (sticky, blur)  →  monogram · name · About · Work · Experience · Stack · Let's talk
│
├─ 1. Hero            status pill · headline · lede · CTAs · 4-stat strip
├─ 2. Profile/About   2-col: ethos + iceberg/NDA line · portrait + "How I work" card
├─ 3. Selected Work   01 Confidential (NDA) → 02 Troco → 03 Orems → 04 Qobi → 05 Star Taskz
├─ 4. Experience      timeline: Softcom · Qobi · Troco · Orems · Bloom
├─ 5. Stack           6 capability cards (full stack)
├─ 6. Education        4 cards
├─ 7. [optional] Beyond the code   values / purpose (see §3.4)
├─ 8. Contact         big CTA · email · LinkedIn · Qobi · portfolio (GitHub once handle given)
└─ Footer
```

**Current HTML already reflects this:** Confidential/NDA card is project 01, Qobi is project 04 (framed as a recent sample, not flagship), Qobi sits in the experience timeline as "Founder," stats lead with sectors/scale rather than Qobi, and the stack is six groups.

---

## 6. Section-by-section copy

### 6.1 Hero
- **Eyebrow:** `● Currently — Solutions Architect @ Softcom` (resolved: lead with Softcom)
- **H1:** *I build **secure, scalable** systems — from national infrastructure to products people **actually use.***
- **Lede:** *I'm **Teninlanimi Taiwo**, a software engineer, founding engineer, and founder working at the intersection of **code, product, and strategy**. I've shipped fintech, government, and consumer systems — and I've been writing code since I was 12.*
- **CTAs:** View selected work → · Get in touch

### 6.2 Stat strip (4 — breadth over a single project)
| Value | Label |
|---|---|
| Since **12** | Writing code from the age of twelve |
| Nat.**scale** | Government & financial-institution systems |
| **1K+** | Troco users in first three months |
| **3 sectors** | Fintech · government · consumer |

### 6.3 About / Profile
**Header:** *A product thinker with the precision of a senior engineer.*

> As a **Solutions Architect and embedded Product Manager** at Softcom, I lead senior engineering teams on confidential, high-stakes systems for government and financial institutions — access control, revenue digitization, cloud infrastructure, and operational security, at national scale.
>
> **Much of my most significant work is protected under NDA** — built for institutions I can't name. What you can see on this site is a deliberate sample, not the sum. The visible projects are the tip of the iceberg.
>
> I started coding at 12, and I'm still early. I gravitate toward hard things — the systems where getting it wrong actually costs something — and I'm driven by building with purpose. Not just apps, but impact.

**"How I work" card:** Ownership end-to-end · Engineering ↔ strategy · Secure by design · Start early, ship fast.

### 6.4 Selected Work

#### 01 · Confidential Systems — *Softcom · NDA* ⭐ (lead — the iceberg)
- **One-liner:** My most significant work — and you can't see it.
- **Description:** *Built for government and financial institutions and protected under NDA — national-scale access control, revenue digitization, and operational security. The visible projects below are the tip of the iceberg.*
- **Treatment:** restrained "locked" card — lock glyph, no screenshot, muted panel. No outbound link; closes with *"Available to discuss in conversation."*
- **Tags:** Government · Financial · National-scale · Confidential
- **Why it leads:** it reframes every other project as a *sample*, not the ceiling. This is the single strongest element on the site.

#### 02 · Troco — *founding & senior engineer*
- **One-liner:** Secure escrow & logistics — your trusted middleman for high-value deals.
- **Description:** *A secure, escrow-based fintech platform that builds trust into digital transactions — real-time tracking, dispute resolution, three-party broker flows, and seamless payments for buyers and sellers. Live on Google Play; 1,000+ Android users within three months of launch.*
- **Role:** Founding & Senior Engineer — built from scratch, led the pivot toward a full marketplace.
- **Tags:** Flutter · Dart · Escrow · Real-time · Play Store
- **Link:** troco.ng

#### 03 · Orems — *lead / founding engineer*
- **One-liner:** Mobile-first e-commerce + escrow for secure payments.
- **Description:** *A mobile-first commerce and escrow platform ensuring secure payments between individuals and businesses — real-time tracking, automated workflows, and dispute protection, end to end.*
- **Tags:** Flutter · E-commerce · Escrow · Automated workflows

#### 04 · Qobi — *founder* (a recent sample — NOT the flagship)
- **One-liner:** The AI co-pilot for your ALU semester.
- **Description:** *A recent build — and where I started taking the AI direction seriously. Qobi reads a student's ALU Gmail and Canvas (read-only), surfaces buried obligations, and reasons about how one slip cascades across academics, money, standing, and visa. Shipped in under a month at the ALU Claude Builders Club.*
- **Framing rule:** present as a beginning / direction, not a crowning achievement. Badge reads "Recent · ALU Claude Builders Club" — **no ⭐, no "flagship" language.**
- **Role:** Founder · with co-founder Ray **[VERIFY surname/role]**
- **Tags:** Claude API · AI agent · Gmail + Canvas · Privacy-first · Next.js
- **Link:** qobi-copilot.xyz

#### 05 · Star Taskz — *builder*
- **One-liner:** A conversational-AI task manager you talk to.
- **Description:** *Create, manage, and complete tasks through natural voice — speech-to-text, intelligent reminders, productivity insights, and sync with GitHub and calendars for a fully connected workflow.*
- **Tags:** Conversational AI · Speech-to-text · GitHub sync

#### (05 · Bloom — optional, or keep in Experience only)
- Mobile commerce app; founding engineer & mobile developer. **[DECIDE]** feature as project or list under experience only.

### 6.5 Experience timeline
Use canonical titles/dates from §2.3. Each entry: 3 bullets max, action verbs, no confidential client names. Order: **Softcom → Qobi → Troco → Orems → Bloom** (or by date once verified).

### 6.6 Stack, Education, Contact
Use §2.5 and §2.4 verbatim. Contact: email (§2.1) · LinkedIn · portfolio · GitHub (once provided).

---

## 7. Image / Asset Manifest

> You said you'll supply images. Here's exactly what to send, named and sized. Drop them into `/public/` (or send to me) using these filenames so the build wires them in cleanly.

| Slot | Filename | What it is | Spec | Priority |
|---|---|---|---|---|
| **Your headshot** | `teni.jpg` | ✅ **Received** — red-shirt portrait, embedded in the About card (4:5). Send a higher-res or alternate if you want | 4:5 portrait | ✅ Done |
| Hero portrait *(optional)* | `teni-hero.jpg` | Larger editorial shot if you want you *in* the hero | ≥ 1600px wide, dark-friendly | Nice |
| Qobi | `qobi-dashboard.png` | App/dashboard screenshot *(already exists on Qobi site)* | ≥ 1400px wide | ⭐ Must |
| Qobi logo | `qobi-logo.svg` | *(exists)* | SVG | Nice |
| Troco | `troco-app.png` | App screen / Play Store mockup | ≥ 1400px wide | ⭐ Must |
| Orems | `orems.png` | App or web screen | ≥ 1400px wide | Should |
| Star Taskz | `star-taskz.png` | App screen / voice UI | ≥ 1400px wide | Should |
| Bloom *(if featured)* | `bloom.png` | App screen | ≥ 1400px wide | Optional |
| OG / social card | `og-image.png` | Replace the Lovable default | 1200×630 | ⭐ Must |
| Favicon | `favicon` | From your "T" monogram | 512×512 + ICO | Should |

**Image notes:**
- Prefer **device mockups** (phone/laptop frames) over raw screenshots — reads more premium and matches the YC tone. I can generate frames if you send raw screens.
- Dark-friendly images only; anything on a bright-white background will fight the theme.
- Send the **highest-res** you have; we downscale, never upscale.

---

## 8. Design System (locked — from the HTML)

**Theme: dark + red.** The signature accent is derived from Teni's red shirt.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#0a0a0b` | Page background (near-black) |
| `--panel` | `#121214` | Cards |
| `--ink` | `#f3efe7` | Primary text (warm paper-white) |
| `--ink-dim` | `#b6b4ad` | Body / secondary |
| `--muted` | `#7c7b79` | Labels, captions |
| `--red` | `#F5362A` | **Signature accent** (from the shirt) — fills, monogram, primary button, glow, hovers. Use sparingly |
| `--red-deep` | `#FF6152` | Legible accent for small label/role text, icons, "→" bullets |
| `--red-glow` | `rgba(245,54,42,.16)` | Soft glow behind hero, buttons, cards |
| `--line` | `rgba(243,239,231,.09)` | Hairline borders |
| Radius | `18px` | Cards |
| Max width | `1180px` | Container |

**Type:** Fraunces *(display serif)* · Hanken Grotesk *(body)* · JetBrains Mono *(labels/metadata)*.
**Motion:** staggered hero reveal on load · IntersectionObserver scroll reveals · hover lifts on cards · 3px red edge on project hover · grain overlay · red radial glow + masked grid in hero. Respect `prefers-reduced-motion`.

**Rules:** one signature accent (red), used rarely. No purple/green gradients, no Inter, no generic card grids. The serif headlines + **red-on-black** + mono labels *are* the identity — don't dilute them. Red should feel confident and high-stakes, never alarming/error-like: reserve it for accents and CTAs, keep body and surfaces neutral.

---

## 9. Decisions Needed (your sign-off)

1. **Email:** gmail vs `kalaharitech.xyz` as the public contact?
2. **GitHub:** what's the handle?
3. **Phone:** show on site, or leave off?
4. **Years of experience:** adopt "since 12 / since 2024" framing (recommended) or keep a number?
5. **Titles & dates:** confirm the §2.3 table — especially Troco, Orems, and all dates.
6. **ALU degree name:** "Software Engineering (BSE)" or "AI & Machine Learning"?
7. ~~Hero lead~~ — *resolved: Softcom leads; Qobi is a recent sample (project 04), never the centerpiece.*
8. **Faith/purpose:** (a) one quiet line only, (b) add a small "Beyond the code" block, or (c) leave out entirely?
9. **Qobi co-founder:** credit Ray? Full name + role?
10. **Bloom:** feature as a project card, or list under experience only?
11. **Qobi metrics:** are 347 / 62 real, illustrative, or to be replaced?
12. **Tagline A/B/C/D** (§4.1): which leads?

---

## 10. Future / nice-to-haves (post-v2)

- Per-project **case study pages** (`/work/qobi`, `/work/troco`) — problem, role, decisions, outcome. Strongest credibility move for a founder portfolio.
- A short **"Writing / Notes"** section if you start posting (your LinkedIn voice is good — worth a home you own).
- **Resume download** button (single canonical PDF, generated from §2).
- Light/dark toggle is **not** recommended — the dark identity is the brand.

---

*End of PRD v1. Once you answer §9, I'll fold the decisions in, finalize all copy, and update the HTML/handoff so it's build-ready.*
