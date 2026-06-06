import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import {
  ArrowLeft,
  ArrowRight,
  ArrowExternal,
  Phone,
  Globe,
  Mic,
  LockSolid,
} from "./icons";
import type { CaseStudy as Case, PlatformIcon } from "@/lib/cases";

function PlatformGlyph({ icon }: { icon: PlatformIcon }) {
  switch (icon) {
    case "phone":
      return <Phone />;
    case "lock":
      return <LockSolid />;
    case "globe":
      return <Globe />;
    case "mic":
      return <Mic />;
  }
}

export default function CaseStudy({ data }: { data: Case }) {
  const year = new Date().getFullYear();

  return (
    <>
      {/* TOP BAR */}
      <div className="cbar">
        <div className="wrap">
          <Link className="back" href="/#work">
            <ArrowLeft />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="monogram"
              src="/assets/teni-logo.png"
              alt="Teninlanimi Taiwo logo"
            />
            <span className="crumb">
              Selected Work · <b>{data.name}</b>
            </span>
          </Link>
          {data.visit.external ? (
            <a
              className="visit"
              href={data.visit.href}
              target="_blank"
              rel="noopener"
            >
              {data.visit.label}
              <ArrowExternal />
            </a>
          ) : (
            <Link className="visit" href={data.visit.href}>
              {data.visit.label}
              <ArrowExternal />
            </Link>
          )}
        </div>
      </div>

      {/* HERO */}
      <header className="chero">
        <div className="chero-glow" />
        <div className="wrap">
          <div className="kicker">{data.kicker}</div>
          <h1>{data.h1}</h1>
          <p className="tagline">{data.tagline}</p>
          <div className="platforms">
            {data.platforms.map((p) => (
              <span className="pf" key={p.label}>
                <PlatformGlyph icon={p.icon} /> {p.label}
              </span>
            ))}
          </div>
          <div className="chero-shot">
            <span className="ph">{data.heroShot.ph}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={data.heroShot.src} alt={data.heroShot.alt} />
          </div>
          <div className="meta">
            {data.meta.map((m) => (
              <div className="m" key={m.lab}>
                <div className="lab">{m.lab}</div>
                <div className="val">{m.val}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* OVERVIEW */}
      <section className="csec">
        <div className="wrap lead-grid reveal">
          <div>
            <div className="csec-label">01 — Overview</div>
            <h2>{data.overview.h2}</h2>
          </div>
          <div className="prose">
            {data.overview.prose.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="csec">
        <div className="wrap reveal">
          <div className="csec-label">02 — Impact</div>
          <div className="kpis">
            {data.kpis.map((k, i) => (
              <div className="kpi" key={i}>
                <div className="v">{k.v}</div>
                <div className="l">
                  {k.l}
                  {k.sample ? <span className="sample">{k.sample}</span> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSIBILITY */}
      <section className="csec">
        <div className="wrap reveal">
          <div className="csec-label">03 — My role &amp; responsibility</div>
          <h2 style={{ marginBottom: 34 }}>{data.respHead}</h2>
          <div className="resp">
            {data.resp.map((r) => (
              <div className="r" key={r.n}>
                <span className="n">{r.n}</span>
                <div>
                  <b>{r.b}</b>
                  <span>{r.span}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="csec">
        <div className="wrap reveal">
          <div className="csec-label">04 — Frameworks &amp; stack</div>
          {data.stack.kind === "cols" ? (
            <>
              <h2 style={{ marginBottom: 34 }}>{data.stack.head}</h2>
              <div className="stack-grid">
                {data.stack.cols.map((col) => (
                  <div className="stack-col" key={col.h4}>
                    <h4>{col.h4}</h4>
                    <div className="chips">
                      {col.chips.map((c) => (
                        <span className="chip" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h2 style={{ marginBottom: 34 }}>{data.stack.head}</h2>
              <div className="redacted">
                <LockSolid />
                <div>
                  <b>{data.stack.b}</b>
                  <span>{data.stack.span}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* SATISFACTION */}
      <section className="csec">
        <div className="wrap reveal">
          <div className="csec-label">05 — Client satisfaction</div>
          <div className="sat">
            <span className="sat-sample">sample — swap for real quote</span>
            <p className="sat-quote">{data.satisfaction.quote}</p>
            <div className="sat-by">
              <div className="sat-avatar">{data.satisfaction.avatar}</div>
              <div className="sat-meta">
                <b>{data.satisfaction.by}</b>
                <span>{data.satisfaction.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="csec">
        <div className="wrap reveal">
          <div className="csec-label">06 — Screens</div>
          <h2 style={{ marginBottom: 34 }}>{data.gallery.head}</h2>
          {data.gallery.sections.map((sec, si) => {
            if (sec.kind === "redacted") {
              return (
                <div className="redacted" style={{ marginTop: 30 }} key={si}>
                  <LockSolid />
                  <div>
                    <b>{sec.b}</b>
                    <span>{sec.span}</span>
                  </div>
                </div>
              );
            }
            if (sec.kind === "phones") {
              return (
                <div key={si}>
                  {sec.label ? <div className="sub-label">{sec.label}</div> : null}
                  <div className="phones">
                    {sec.phones.map((p) => (
                      <div className="phone" key={p.src}>
                        <div className="phone-screen">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.src} alt={p.alt} />
                        </div>
                        <div className="phone-cap">{p.cap}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            // gallery
            return (
              <div key={si}>
                {sec.label ? <div className="sub-label">{sec.label}</div> : null}
                <div className="gallery">
                  {sec.shots.map((shot, idx) => (
                    <div
                      className={`shot${shot.wide ? " wide" : ""}`}
                      key={idx}
                    >
                      {shot.kind === "img" ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img src={shot.src} alt={shot.alt} />
                      ) : (
                        <span className="ph">{shot.ph}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* NEXT */}
      <section className="cnext">
        <div className="wrap cnext-inner">
          <div>
            <div className="lab">Next case</div>
            <Link className="title" href={`/work/${data.next.slug}`}>
              {data.next.name}
              <ArrowRight />
            </Link>
          </div>
          <Link className="cta" href="/#contact">
            Work with me
            <ArrowRight />
          </Link>
        </div>
      </section>

      <footer className="cfoot">
        <div className="wrap">
          <span className="mono">
            © {year} Teninlanimi Taiwo — Kigali / Lagos
          </span>
          <Link href="/#work">← All work</Link>
        </div>
      </footer>

      <ScrollReveal />
    </>
  );
}
