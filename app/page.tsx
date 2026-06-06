import SiteNav from "@/components/SiteNav";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import {
  ArrowRight,
  ArrowExternal,
  LockGlyph,
  Mail,
  LinkedIn,
  GitHub,
  QobiMark,
  Resume,
} from "@/components/icons";

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <SiteNav />

      {/* HERO */}
      <header className="hero" id="top">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="wrap stagger" id="hero">
          <span className="eyebrow">
            <span className="pulse" /> Currently — Solutions Architect @ Softcom
          </span>
          <h1 className="hero-title">
            I build <em>secure, intelligent</em> systems — from national
            infrastructure to products people{" "}
            <span className="accent-word">actually use.</span>
          </h1>
          <p className="lede">
            I&apos;m <b>Teninlanimi Taiwo</b> — a software engineer, founding
            engineer, and founder working at the intersection of{" "}
            <b>code, product, and strategy</b>. I architect systems for
            government and financial institutions, ship consumer products from
            zero, and I&apos;ve been writing code since I was 12.
          </p>
          <div className="hero-actions">
            <a
              href="#work"
              className="btn btn-primary"
              style={{ color: "rgb(255, 255, 255)" }}
            >
              View selected work
              <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="stats">
            <div className="stat">
              <div className="v">
                Since <b>12</b>
              </div>
              <div className="l">Writing code from the age of twelve</div>
            </div>
            <div className="stat">
              <div className="v">
                Nat.<b>scale</b>
              </div>
              <div className="l">Government &amp; financial-institution systems</div>
            </div>
            <div className="stat">
              <div className="v">
                <b>1K+</b>
              </div>
              <div className="l">Troco users in first three months</div>
            </div>
            <div className="stat">
              <div className="v">
                <b>3 sectors</b>
              </div>
              <div className="l">Fintech · government · consumer</div>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="wrap">
          <div className="sec-label reveal">01 — Profile</div>
          <div className="about-grid">
            <div className="about-body reveal">
              <h2 className="sec-head">
                A product thinker with the precision of a senior engineer.
              </h2>
              <p>
                As a <b>Solutions Architect and embedded Product Manager</b> at
                Softcom, I lead senior engineering teams on confidential,
                high-stakes systems for government and financial institutions —
                access control, revenue digitization, cloud infrastructure, and
                operational security, at national scale.
              </p>
              <p>
                <b>Much of my most significant work is protected under NDA</b> —
                built for institutions I can&apos;t name. What you can see on
                this site is a deliberate sample, not the sum. The visible
                projects are the tip of the iceberg.
              </p>
              <p>
                I started coding at 12, and I&apos;m still early. I gravitate
                toward hard things — the systems where getting it wrong actually
                costs something — and I&apos;m driven by building with purpose.
                Not just apps, but impact.
              </p>
              <div className="about-pull">
                &quot;Start early, dream boldly, execute with precision.&quot;
              </div>
            </div>
            <div className="about-side reveal">
              <div className="portrait" data-initial="T" data-mono="">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/teni.jpg" alt="Teninlanimi Taiwo" />
              </div>
              <div className="about-card">
                <h4>How I work</h4>
                <div className="traits">
                  <div className="trait">
                    <span className="dot" />
                    <div>
                      <b>Ownership, end-to-end</b>
                      <span>Architecture decisions to shipped features</span>
                    </div>
                  </div>
                  <div className="trait">
                    <span className="dot" />
                    <div>
                      <b>Engineering ↔ strategy</b>
                      <span>Fluent with executives and code alike</span>
                    </div>
                  </div>
                  <div className="trait">
                    <span className="dot" />
                    <div>
                      <b>Secure by design</b>
                      <span>Built for mission-critical, regulated contexts</span>
                    </div>
                  </div>
                  <div className="trait">
                    <span className="dot" />
                    <div>
                      <b>Start early, ship fast</b>
                      <span>Bias toward execution and momentum</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <div className="wrap">
          <div className="sec-label reveal">02 — Selected Work</div>
          <h2 className="sec-head reveal">A sample of what I&apos;ve shipped.</h2>
          <p className="sec-sub reveal">
            Products taken from zero to launch — across fintech, AI, and
            consumer. Much of my largest work is confidential; what follows is
            the visible portion.{" "}
            <b style={{ color: "var(--ink-dim)", fontWeight: 500 }}>
              Open any project for the full breakdown.
            </b>
          </p>
          <div className="work-list">
            {/* CONFIDENTIAL / NDA */}
            <article className="proj confidential reveal">
              <div
                className="proj-shot locked"
                data-initial=""
                data-mono="// protected"
                style={{ textAlign: "center", backgroundPosition: "center center" }}
              >
                <LockGlyph className="lock" />
              </div>
              <div className="proj-body">
                <div className="p-index">01</div>
                <h3>
                  Confidential Systems{" "}
                  <span className="p-role">Softcom · NDA</span>
                </h3>
                <p className="p-desc">
                  My most significant work is built for{" "}
                  <b>government and financial institutions</b> and protected
                  under NDA — national-scale access control, revenue
                  digitization, and operational security. The visible projects
                  below are the tip of the iceberg.
                </p>
                <div className="p-tags">
                  <span>Government</span>
                  <span>Financial</span>
                  <span>National-scale</span>
                  <span>Confidential</span>
                </div>
                <span className="p-link locked-note">
                  Details protected under NDA
                </span>
              </div>
            </article>

            {/* TROCO */}
            <ProjectCard
              href="/work/troco"
              className="proj flip reveal"
              ariaLabel="Read the Troco case study"
            >
              <div className="proj-shot" data-initial="T" data-mono="troco-app.png">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/troco-app.png" alt="Troco app" />
              </div>
              <div className="proj-body">
                <div className="p-index">02</div>
                <h3>
                  Troco{" "}
                  <span className="p-role">Founding &amp; Senior Engineer</span>
                </h3>
                <p className="p-desc">
                  A secure, escrow-based fintech platform that builds trust into
                  digital transactions — real-time tracking, dispute resolution,
                  three-party broker flows, and seamless payments for buyers and
                  sellers. Live on Google Play;{" "}
                  <b>1,000+ Android users within three months of launch.</b>
                </p>
                <div className="p-tags">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Escrow</span>
                  <span>Real-time</span>
                  <span>Play Store</span>
                </div>
                <div className="p-foot">
                  <span className="p-cta">
                    Read case study
                    <ArrowRight />
                  </span>
                  <a
                    className="p-live"
                    href="https://www.troco.ng"
                    target="_blank"
                    rel="noopener"
                  >
                    troco.ng
                    <ArrowExternal />
                  </a>
                </div>
              </div>
            </ProjectCard>

            {/* OREMS */}
            <ProjectCard
              href="/work/orems"
              className="proj reveal"
              ariaLabel="Read the Orems case study"
            >
              <div className="proj-shot" data-initial="O" data-mono="orems.png">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/orems.png" alt="Orems platform" />
              </div>
              <div className="proj-body">
                <div className="p-index">03</div>
                <h3>
                  Orems <span className="p-role">Lead / Founding Engineer</span>
                </h3>
                <p className="p-desc">
                  A mobile-first commerce and escrow platform ensuring secure
                  payments between individuals and businesses — real-time
                  tracking, automated workflows, and dispute protection, end to
                  end.
                </p>
                <div className="p-tags">
                  <span>Flutter</span>
                  <span>E-commerce</span>
                  <span>Escrow</span>
                  <span>Automated workflows</span>
                </div>
                <div className="p-foot">
                  <span className="p-cta">
                    Read case study
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </ProjectCard>

            {/* QOBI */}
            <ProjectCard
              href="/work/qobi"
              className="proj flip reveal"
              ariaLabel="Read the Qobi case study"
            >
              <div
                className="proj-shot"
                data-initial="Q"
                data-mono="qobi landing"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/qobi/web-landing.png"
                  alt="Qobi landing page"
                  style={{ objectPosition: "top center" }}
                />
              </div>
              <div className="proj-body">
                <div className="p-badge">Recent · ALU Claude Builders Club</div>
                <div className="p-index">04</div>
                <h3>
                  Qobi <span className="p-role">Founder</span>
                </h3>
                <p className="p-desc">
                  A recent build — and where I started taking the AI direction
                  seriously. Qobi reads a student&apos;s ALU inbox and Canvas{" "}
                  <b>read-only</b>, surfaces buried obligations, and reasons
                  about how one slip cascades across academics, money, standing,
                  and visa. Shipped in under a month.
                </p>
                <div className="p-tags">
                  <span>Claude API</span>
                  <span>Web + Mobile</span>
                  <span>Gmail + Canvas</span>
                  <span>Privacy-first</span>
                  <span>Shipped in 4 days</span>
                </div>
                <div className="p-foot">
                  <span className="p-cta">
                    Read case study
                    <ArrowRight />
                  </span>
                  <a
                    className="p-live"
                    href="https://www.qobi-copilot.xyz"
                    target="_blank"
                    rel="noopener"
                  >
                    qobi-copilot.xyz
                    <ArrowExternal />
                  </a>
                </div>
              </div>
            </ProjectCard>

            {/* STAR TASKZ */}
            <ProjectCard
              href="/work/star-taskz"
              className="proj reveal"
              ariaLabel="Read the Star Taskz case study"
            >
              <div
                className="proj-shot"
                data-initial="S"
                data-mono="star-taskz.png"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/star-taskz.png" alt="Star Taskz app" />
              </div>
              <div className="proj-body">
                <div className="p-index">05</div>
                <h3>
                  Star Taskz <span className="p-role">Builder</span>
                </h3>
                <p className="p-desc">
                  A conversational-AI task manager you talk to — create, manage,
                  and complete tasks through natural voice. Speech-to-text,
                  intelligent reminders, productivity insights, and sync with
                  GitHub and calendars for a fully connected workflow.
                </p>
                <div className="p-tags">
                  <span>Conversational AI</span>
                  <span>Speech-to-text</span>
                  <span>Calendar · GitHub · Notion · Jira</span>
                  <span>Productivity</span>
                </div>
                <div className="p-foot">
                  <span className="p-cta">
                    Read case study
                    <ArrowRight />
                  </span>
                </div>
              </div>
            </ProjectCard>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <div className="wrap">
          <div className="sec-label reveal">03 — Experience</div>
          <h2 className="sec-head reveal">
            Roles across fintech, government, and consumer markets.
          </h2>
          <div className="timeline">
            {EXPERIENCE.map((job) => (
              <div className="job reveal" key={job.where}>
                <div>
                  <div className="job-when">{job.when}</div>
                  <div className="job-where">{job.where}</div>
                  <div className="job-loc">{job.loc}</div>
                </div>
                <div>
                  <div className="job-title">
                    {job.title}
                    {job.tag ? <span className="tag">{job.tag}</span> : null}
                  </div>
                  <ul className="job-points">
                    {job.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities">
        <div className="wrap">
          <div className="sec-label reveal">04 — Stack &amp; Capabilities</div>
          <h2 className="sec-head reveal">The toolkit behind the work.</h2>
          <div className="cap-grid">
            {CAPABILITIES.map((cap) => (
              <div className="cap reveal" key={cap.title}>
                <h4>{cap.title}</h4>
                <div className="chips">
                  {cap.chips.map((c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education">
        <div className="wrap">
          <div className="sec-label reveal">05 — Education</div>
          <h2 className="sec-head reveal">Building the foundation, deliberately.</h2>
          <div className="edu-grid">
            {EDUCATION.map((edu) => (
              <div className="edu reveal" key={edu.school}>
                <div className="when">{edu.when}</div>
                <h4>{edu.school}</h4>
                <div className="deg">{edu.deg}</div>
                {edu.note ? <div className="note">{edu.note}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <div className="wrap">
          <div className="sec-label reveal">06 — Testimonials</div>
          <h2 className="sec-head reveal">
            Words from the people I&apos;ve built alongside.
          </h2>
          <p className="sec-sub reveal">
            Sample copy below — placeholders in Teni&apos;s voice. Swap in real
            quotes, names, and photos when you have them; the slider scales to as
            many as you add.
          </p>
          <Testimonials />
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="sec-label reveal">07 — Contact</div>
          <h2 className="reveal">
            Let&apos;s build something <em>worth remembering.</em>
          </h2>
          <p className="reveal">
            Open to collaborations and opportunities that align with purpose,
            innovation, and real impact. The fastest way to reach me is email.
          </p>
          <div className="contact-links reveal">
            <a className="clink" href="mailto:teninlanimi@kalaharitech.xyz">
              <Mail />
              Email
            </a>
            <a
              className="clink"
              href="https://www.linkedin.com/in/teninlanimi-taiwo/"
              target="_blank"
              rel="noopener"
            >
              <LinkedIn />
              LinkedIn
            </a>
            <a
              className="clink"
              href="https://github.com/taiwoteni"
              target="_blank"
              rel="noopener"
            >
              <GitHub />
              GitHub
            </a>
            <a
              className="clink"
              href="https://www.qobi-copilot.xyz"
              target="_blank"
              rel="noopener"
            >
              <QobiMark />
              Qobi
            </a>
            <a
              className="clink"
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
            >
              <Resume />
              Résumé
            </a>
          </div>
        </div>
      </section>

      <footer className="site-foot">
        <div className="wrap foot-inner">
          <span className="mono">
            © {year} Teninlanimi Taiwo — Kigali / Lagos
          </span>
          <div className="right">
            <a href="#top">Back to top ↑</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>

      <ScrollReveal />
    </>
  );
}

type Job = {
  when: string;
  where: string;
  loc: string;
  title: string;
  tag?: string;
  points: string[];
};

const EXPERIENCE: Job[] = [
  {
    when: "Oct 2025 — Present",
    where: "Softcom Limited",
    loc: "Lagos / Kigali",
    title: "Solutions Architect",
    tag: "+ embedded PM",
    points: [
      "Translated complex executive requirements into scalable, secure technical solutions.",
      "Led cross-functional teams designing cloud infrastructure for national-scale government & financial institutions.",
      "Delivered mission-critical work across access control, revenue digitization, and operational security.",
    ],
  },
  {
    when: "2026 — Present",
    where: "Qobi",
    loc: "Kigali, Rwanda",
    title: "Founder",
    tag: "ALU Claude Builders Club",
    points: [
      "Built a privacy-first AI co-pilot for ALU students — read-only across Gmail and Canvas.",
      "Designed cross-domain reasoning that traces one missed item across academics, finance, standing, and visa.",
      "Built web and mobile in parallel and shipped a working product in 4 days at the Claude Builders Club hackathon.",
    ],
  },
  {
    when: "Jun 2024 — Present",
    where: "Troco Technologies",
    loc: "Lagos, Nigeria",
    title: "Founding & Senior Software Engineer",
    points: [
      "Built the product from scratch and owned the technical foundation and architecture.",
      "Spearheaded the strategic pivot repositioning Troco as a full marketplace app.",
      "Directed a team of engineers and shipped core features across the product lifecycle.",
    ],
  },
  {
    when: "Mar 2025 — Present",
    where: "Orems Cybernetics",
    loc: "Lagos, Nigeria",
    title: "Lead / Founding Engineer",
    points: [
      "Led the engineering effort for a mobile-first e-commerce and escrow platform.",
      "Owned technical direction, architecture, and hands-on development end-to-end.",
      "Implemented trust and security measures for digital transactions, zero to launch.",
    ],
  },
  {
    when: "2025 — Present",
    where: "Bloom",
    loc: "Lagos, Nigeria",
    title: "Founding Engineer & Mobile Developer",
    points: [
      "Crafted the core mobile commerce experience across the full development lifecycle.",
      "Translated product requirements into clean, performant, user-friendly features.",
      "Ran regular code reviews and applied market research for competitiveness.",
    ],
  },
];

const CAPABILITIES: { title: string; chips: string[] }[] = [
  {
    title: "Leadership & Product",
    chips: [
      "Solutions Architecture",
      "System Design",
      "Microservices Architecture",
      "Technology Leadership",
      "Technology Management",
      "Product Management",
      "Engineering Team Leadership",
      "Critical Thinking",
      "Problem Solving",
    ],
  },
  {
    title: "Mobile",
    chips: [
      "Flutter",
      "Dart",
      "React Native",
      "Android",
      "iOS",
      "State Management",
      "Riverpod",
      "Bloc",
      "Redux",
      "E-commerce",
      "UI/UX",
      "Mobile App Development",
    ],
  },
  {
    title: "Frontend & Web",
    chips: [
      "Next.js 14",
      "React 18",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui · Radix",
      "Chart.js",
      "Front-End Development",
      "Website Development",
    ],
  },
  {
    title: "Backend",
    chips: [
      "Spring Boot",
      "Java",
      "Node.js 20",
      "Express.js",
      "Next.js API Routes",
      "Prisma ORM",
      "SQLite",
      "JWT · jose",
      "bcrypt",
      "Zod",
      "Backend Development",
    ],
  },
  {
    title: "DevOps & Practices",
    chips: [
      "Docker · multi-stage",
      "Docker Compose",
      "GitHub Actions CI/CD",
      "AWS EC2",
      "Software Testing",
      "ESLint",
      "Git",
      "Cloud Infrastructure",
    ],
  },
  {
    title: "AI & Document Intelligence",
    chips: [
      "Claude API",
      "LLM integration",
      "Conversational AI",
      "Speech-to-text",
      "Tesseract.js OCR",
      "pdf-parse · pdf.js",
      "Risk-scoring engine",
      "ML data pipeline",
    ],
  },
];

const EDUCATION: {
  when: string;
  school: string;
  deg: string;
  note?: string;
}[] = [
  {
    when: "2026 — 2029 · In progress",
    school: "African Leadership University",
    deg: "BSc — Software Engineering / AI & Machine Learning · Kigali, Rwanda",
    note: "Grant-funded admission · came to ALU to do hard things.",
  },
  {
    when: "2023 — 2025",
    school: "National Institute of Information Technology",
    deg: "Professional Diploma — Full-Stack Software Engineering · Lagos",
    note: "3.5 GPA · led the project team to 2nd place in a nationwide innovation hackathon — at 17.",
  },
  {
    when: "2025",
    school: "ALX",
    deg: "Professional Certificate — Back-End Software Engineering",
  },
  {
    when: "2020 — 2023",
    school: "Thames Valley College International",
    deg: "High School Diploma — Science · Lagos",
  },
];
