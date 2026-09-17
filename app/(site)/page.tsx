import { Fragment } from "react";
import HomeEffects from "@/components/site/HomeEffects";
import { ArrowExternal, ArrowRight, LockKeyhole } from "@/components/Svg";
import { EDUCATION, EXPERIENCE, ORGS, STACK, TESTIMONIALS, WALKTHROUGHS, WORK, type WorkCard } from "@/lib/home";
import { JsonLd, homeJsonLd } from "@/lib/seo";
import { CONTACT_EMAIL, CONTACT_TOPICS, LINKEDIN_URL } from "@/lib/site";

type CSSVars = React.CSSProperties & Record<`--${string}`, string>;

export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <>
      <div id="intro">
        <img className="mk" src="/assets/logo-mark.svg" alt="" />
        <div className="nm">Teninlanimi Taiwo</div>
      </div>
      <div id="prog"></div>

      <nav id="nav">
        <div className="nav-in">
          <a className="brand" href="#top">
            <img src="/assets/logo-mark.svg" alt="Teninlanimi Taiwo mark" />
            <span>
              <b>Teninlanimi Taiwo</b>
              <small>Engineer · Architect · Founder</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#walkthrough">Demos</a>
            <a href="#experience">Experience</a>
            <a href="#about">About</a>
            <a href="/resume">Résumé</a>
            <a href="#contact" className="cta">
              Let&apos;s talk →
            </a>
          </div>
        </div>
      </nav>

      <header id="top" className="hero">
        <div className="hero-l">
          <div className="stg" id="heroStg">
            <span className="tagline">
              <i></i>Kigali / Lagos
            </span>
            <h1 className="rise" id="h1">
              <span className="w">
                <i style={{ "--d": ".04s" } as CSSVars}>Teninlanimi</i>
              </span>
              <span className="w">
                <i className="ac" style={{ "--d": ".14s" } as CSSVars}>
                  Taiwo
                </i>
              </span>
            </h1>
            <div className="role-line">
              <b>Solutions Architect</b> <s>/</s> <b>Builder</b> <s>&amp;</s> <b>Founder</b>
            </div>
            <p className="lede">
              I build <b>secure, intelligent systems</b>: national-scale infrastructure for the public sector and
              financial institutions, plus consumer products taken from zero to launch. Writing production code since I
              was 12.
            </p>
            <div className="acts">
              <a className="btn btn-1" href="#work">
                View selected work
                <ArrowRight />
              </a>
              <a className="btn btn-2" href="#contact">
                Get in touch
              </a>
            </div>
            <div className="scroll-cue">
              <span className="bar"></span>Scroll
            </div>
          </div>
        </div>
        <div className="hero-r">
          <div className="plate-fallback">T</div>
          <div className="plate" id="plate">
            <img src="/assets/teni.jpg" alt="Teninlanimi Taiwo" />
          </div>
          <div className="floats">
            <div className="fl fl-1">
              <em>Currently</em>
              <b>Solutions Architect</b>
              <span>Critical, national-scale systems</span>
            </div>
            <div className="fl fl-2">
              <em>Building</em>
              <b>Qobi</b>
              <span>Privacy-first AI co-pilot · shipped in 4 days</span>
            </div>
            <div className="fl fl-3">
              <em>Status</em>
              <b className="dotc">
                <i></i>Always glad to talk
              </b>
              <span>Architecture · 0→1 product · fintech &amp; AI</span>
            </div>
          </div>
        </div>
      </header>

      <div className="band">
        <div className="stats rv" id="statBand">
          <div className="stat">
            <b>
              <em data-count="1000" data-suffix="+">
                0
              </em>
            </b>
            <span>Troco users within three months of launch</span>
          </div>
          <div className="stat">
            <b>
              <em data-count="4">0</em> days
            </b>
            <span>Qobi, zero to a shipped product</span>
          </div>
          <div className="stat">
            <b>
              Since <em data-count="12">0</em>
            </b>
            <span>Writing production code from age twelve</span>
          </div>
          <div className="stat">
            <b>
              <em data-count="8">0</em> ventures
            </b>
            <span>Founder, founding or lead engineer across four sectors</span>
          </div>
        </div>
      </div>

      <div className="mq" aria-label="Organisations I've built for and with">
        <div className="mq-track" id="mqTrack">
          {[...ORGS, ...ORGS].map(([slug, name, ext, h], i) => (
            <div className="mq-item" key={`${slug}-${i}`}>
              <img src={`/assets/logos/${slug}.${ext}`} alt={name} style={{ height: `${h}px` }} />
            </div>
          ))}
        </div>
      </div>

      <section id="work">
        <div className="wrap">
          <div className="lbl rv">01 — Selected Work</div>
          <h2 className="sh rv">
            Products and systems I&apos;ve taken <em>from zero.</em>
          </h2>
          <p className="ssub rv">
            Across fintech, public sector, and consumer. My largest work is protected under NDA; what follows is the
            visible portion. <b>Open any project for the full case study.</b>
          </p>
          <div className="works">
            <article className="pj nda rv">
              <div className="shot locked" data-m="// protected">
                <LockKeyhole className="lk" />
              </div>
              <div className="body">
                <div className="no">01</div>
                <h3>
                  Confidential Systems <span className="role">NDA</span>
                </h3>
                <p>
                  My most significant work is built for <b>the public sector and financial institutions</b> and protected
                  under NDA: national-scale access control, revenue digitization, and operational security. I translate
                  executive requirements into architecture, then lead senior teams through delivery.
                </p>
                <div className="tags">
                  <span>Solutions architecture</span>
                  <span>Cloud infrastructure</span>
                  <span>Access control</span>
                  <span>Revenue digitization</span>
                </div>
              </div>
            </article>

            {WORK.map((card) => (
              <ProjectCard key={card.slug} card={card} />
            ))}
          </div>
        </div>
      </section>

      <section id="walkthrough">
        <div className="wrap">
          <div className="lbl rv">02 — Product Walkthrough</div>
          <h2 className="sh rv">Step through the shipped screens.</h2>
          <p className="ssub rv">Real interfaces, not mockups. Scroll each walkthrough and the screen follows along.</p>

          {WALKTHROUGHS.map((w) => {
            const imgs = w.images.map((im, i) => (
              <img key={im.src} className={i === 0 ? "on" : undefined} src={im.src} alt={im.alt} />
            ));
            return (
              <Fragment key={w.name}>
                <div className="walk-head rv">
                  <h3>{w.name}</h3>
                  <span>{w.sub}</span>
                </div>
                <div className="walk" data-walk="">
                  <div className="wv" data-label={w.label}>
                    {w.frame === "desk" ? (
                      <div className="desk">
                        <div className="bar">
                          <i></i>
                          <i></i>
                          <i></i>
                        </div>
                        <div className="fr">{imgs}</div>
                      </div>
                    ) : (
                      <div className="phone">
                        <div className="scr">{imgs}</div>
                      </div>
                    )}
                  </div>
                  <div className="steps">
                    {w.steps.map((s, i) => (
                      <div className="step" data-step="" key={s.h4}>
                        <div className="n">Step {String(i + 1).padStart(2, "0")}</div>
                        <h4>{s.h4}</h4>
                        <p>{s.p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>

      <section id="experience">
        <div className="wrap">
          <div className="lbl rv">03 — Experience</div>
          <h2 className="sh rv">
            Eight ventures, four sectors, one pattern: <em>own the whole problem.</em>
          </h2>
          <div className="tl">
            {EXPERIENCE.map((job) => (
              <div className="job rv" key={job.org}>
                <div>
                  <div className="when">{job.when}</div>
                  <div className="org">{job.org}</div>
                  <div className="loc">{job.loc}</div>
                </div>
                <div>
                  <div className="rl">
                    {job.rl}
                    {job.tag ? (
                      <>
                        {" "}
                        <i>{job.tag}</i>
                      </>
                    ) : null}
                  </div>
                  <ul>
                    {job.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="wrap">
          <div className="lbl rv">04 — About</div>
          <div className="ab">
            <div className="rv">
              <div className="pf">
                <img src="/assets/teni.jpg" alt="Teninlanimi Taiwo" />
                <div className="cap">Kigali · Lagos</div>
              </div>
            </div>
            <div className="ab-body rv">
              <h2 className="sh">A product thinker with the precision of a senior engineer.</h2>
              <p>
                As a <b>Solutions Architect and embedded Product Manager</b>, I lead senior engineering teams on
                confidential, high-stakes systems: access control, revenue digitization, cloud infrastructure, and
                operational security, at national scale.
              </p>
              <p>
                <b>Much of my most significant work is protected under NDA.</b> What you see on this site is a
                deliberate sample, not the sum.
              </p>
              <p>
                I started coding at 12, and I&apos;m still early. I gravitate toward hard things: systems where getting
                it wrong actually costs something. I&apos;m driven by building with purpose. Not just apps, but impact.
              </p>
              <div className="pull">&quot;Start early, dream boldly, execute with precision.&quot;</div>
              <div className="traits">
                <div className="tr">
                  <span className="dot"></span>
                  <b>Ownership, end to end</b>
                  <span>Architecture decisions through shipped features</span>
                </div>
                <div className="tr">
                  <span className="dot"></span>
                  <b>Engineering ↔ strategy</b>
                  <span>Fluent with executives and code alike</span>
                </div>
                <div className="tr">
                  <span className="dot"></span>
                  <b>Secure by design</b>
                  <span>Built for mission-critical, regulated contexts</span>
                </div>
                <div className="tr">
                  <span className="dot"></span>
                  <b>Start early, ship fast</b>
                  <span>Bias toward execution and momentum</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="stack">
        <div className="wrap">
          <div className="lbl rv">05 — Stack</div>
          <h2 className="sh rv">The toolkit behind the work.</h2>
          <div className="stack stg">
            {STACK.map((c) => (
              <div className="card" key={c.h4}>
                <h4>{c.h4}</h4>
                <div className="chips">
                  {c.chips.map((chip) => (
                    <span className="chip" key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="wrap">
          <div className="lbl rv">06 — Education</div>
          <h2 className="sh rv">Building the foundation, deliberately.</h2>
          <div className="edu stg">
            {EDUCATION.map((e) => (
              <div className="ed" key={e.h4}>
                <div className="w">{e.w}</div>
                <h4>{e.h4}</h4>
                <div className="d">{e.d}</div>
                {e.n ? <div className="n">{e.n}</div> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="wrap">
          <div className="lbl rv">07 — Testimonials</div>
          <h2 className="sh rv">Words from the people I&apos;ve built alongside.</h2>
          <p className="ssub rv">
            Placeholders below, marked as samples. <b>Send me the real quotes and I&apos;ll swap them in</b>; the slider
            scales to as many as you add.
          </p>
          <div
            className="tw rv"
            id="tw"
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Testimonials"
          >
            <div className="tstage">
              {TESTIMONIALS.map((t, i) => (
                <figure className={i === 0 ? "ts on" : "ts"} data-initial={t.initial} key={t.initial}>
                  <span className="tag">sample</span>
                  <q>{t.quote}</q>
                  <figcaption className="by">
                    <div className="av">{t.initial}</div>
                    <div>
                      <b>{t.by}</b>
                      <span>{t.role}</span>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="tbar">
              <i></i>
            </div>
            <div className="tctl">
              <div className="tdots" role="tablist" aria-label="Choose testimonial">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    className={i === 0 ? "tdot on" : "tdot"}
                    type="button"
                    aria-label={`Show testimonial ${i + 1}`}
                    aria-current={i === 0 ? "true" : "false"}
                    key={t.initial}
                  >
                    {t.initial}
                  </button>
                ))}
              </div>
              <div className="tarr">
                <button className="ta" id="tPrev" type="button" aria-label="Previous testimonial">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M11 18l-6-6 6-6" />
                  </svg>
                </button>
                <button className="ta" id="tNext" type="button" aria-label="Next testimonial">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="rb rv">
            <div>
              <h3>The full résumé, in detail.</h3>
              <p>
                Experience, architecture work, products, and education, in a clean document you can read on screen or
                save as PDF.
              </p>
            </div>
            <div className="acts">
              <a className="btn btn-1" href="/resume">
                Open résumé
                <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <div className="lbl rv">08 — Contact</div>
          <div className="cg">
            <div className="rv">
              <h2>
                Let&apos;s build something <em>worth remembering.</em>
              </h2>
              <p className="bl">
                Open to founding-engineer roles, architecture work, and collaborations with real stakes. Email is
                fastest; the form sends it straight to me.
              </p>
              <div className="clist">
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL}
                  <span>Email</span>
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener">
                  teninlanimi-taiwo<span>LinkedIn ↗</span>
                </a>
                <a href="https://www.qobi-copilot.xyz" target="_blank" rel="noopener">
                  qobi-copilot.xyz<span>Product ↗</span>
                </a>
                <a href="/resume">
                  Full résumé<span>Document</span>
                </a>
              </div>
            </div>
            <form className="rv" id="enq">
              <div className="row2">
                <div className="fld">
                  <label htmlFor="f-name">Your name</label>
                  <input id="f-name" name="name" required maxLength={100} placeholder="Jane Doe" />
                </div>
                <div className="fld">
                  <label htmlFor="f-email">Email</label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    required
                    maxLength={200}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div className="fld">
                <label htmlFor="f-topic">What&apos;s this about</label>
                <select id="f-topic" name="topic">
                  {CONTACT_TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="fld">
                <label htmlFor="f-msg">Message</label>
                <textarea
                  id="f-msg"
                  name="message"
                  required
                  maxLength={5000}
                  placeholder="A sentence or two on what you're building and where I'd fit."
                ></textarea>
              </div>
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-10000px", width: "1px", height: "1px", opacity: 0 }}
              />
              <button className="btn btn-1" type="submit" style={{ alignSelf: "flex-start" }}>
                Send message
                <ArrowRight />
              </button>
              <span className="hint" id="hint" aria-live="polite">
                {"// sends straight to my inbox"}
              </span>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap fin">
          <span className="mono">
            © <span id="yr">{year}</span> Teninlanimi Taiwo — Kigali / Lagos
          </span>
          <div className="r">
            <a href="#work">Work</a>
            <a href="/resume">Résumé</a>
            <a href="#top">Back to top ↑</a>
          </div>
        </div>
      </footer>

      <HomeEffects />
      <JsonLd data={homeJsonLd()} />
    </>
  );
}

function ProjectCard({ card }: { card: WorkCard }) {
  return (
    <article
      className={card.flip ? "pj flip rv" : "pj rv"}
      data-case={`/work/${card.slug}`}
      role="link"
      tabIndex={0}
      aria-label={`Read the ${card.name === "AgriLink" ? "Agrilink" : card.name} case study`}
    >
      <div className="shot" data-i={card.initial} data-m={card.meta}>
        {card.image.kind === "img" ? (
          <img src={card.image.src} alt={card.image.alt} style={card.image.style} />
        ) : (
          <picture>
            <source media="(max-width:860px)" srcSet={card.image.mobile} />
            <img src={card.image.src} alt={card.image.alt} />
          </picture>
        )}
      </div>
      <div className="body">
        {card.badge ? <div className="badge">{card.badge}</div> : null}
        <div className="no">{card.no}</div>
        <h3>
          {card.name} <span className="role">{card.role}</span>
        </h3>
        <p>{card.desc}</p>
        {card.kpis ? (
          <div className="kpi">
            {card.kpis.map((k) => (
              <div key={k.b}>
                <b>{k.b}</b>
                <span>{k.span}</span>
              </div>
            ))}
          </div>
        ) : null}
        <div className="tags">
          {card.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <div className="foot">
          {/* A real link (styled identically to the design's span) so crawlers can follow it. */}
          <a className="cs" href={`/work/${card.slug}`} tabIndex={-1}>
            Read case study
            <ArrowRight />
          </a>
          {card.live ? (
            <a className="live" href={card.live.href} target="_blank" rel="noopener">
              {card.live.label}
              <ArrowExternal />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
