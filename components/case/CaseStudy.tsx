import CaseEffects from "./CaseEffects";
import { ArrowExternal, ArrowLeft, ArrowRight, Lock, PlatformGlyph } from "@/components/Svg";
import { nextCase, type Block, type CaseStudy as Case, type Section, type Shot } from "@/lib/cases";

export default function CaseStudy({ data }: { data: Case }) {
  const year = new Date().getFullYear();
  const next = nextCase(data.slug);

  return (
    <>
      <div className="cbar">
        <div className="wrap">
          <a className="back" href="/#work">
            <ArrowLeft />
            <img className="monogram" src="/assets/logo-mark.svg" alt="Teninlanimi Taiwo logo" />
            <span className="crumb">
              Selected Work · <b>{data.name}</b>
            </span>
          </a>
          <a
            className="visit"
            href={data.visit.href}
            {...(data.visit.external ? { target: "_blank", rel: "noopener" } : {})}
          >
            {data.visit.label}
            <ArrowExternal />
          </a>
        </div>
      </div>

      <header className="chero">
        <div className="chero-glow"></div>
        <div className="wrap">
          <div className="kicker">{data.kicker}</div>
          <h1>
            {data.headline[0]}
            <em>{data.headline[1]}</em>
            {data.headline[2]}
          </h1>
          <p className="tagline">{data.tagline}</p>
          <div className="platforms">
            {data.platforms.map((p) => (
              <span className="pf" key={p.label}>
                <PlatformGlyph icon={p.icon} /> {p.label}
              </span>
            ))}
          </div>
          <div className="chero-shot">
            {data.hero.ph ? <span className="ph">{data.hero.ph}</span> : null}
            <img src={data.hero.src} alt={data.hero.alt} />
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

      {data.sections.map((s) => (
        <CaseSection key={s.label} section={s} />
      ))}

      <section className="cnext">
        <div className="wrap cnext-inner">
          <div>
            <div className="lab">Next case</div>
            <a className="title" href={`/work/${next.slug}`}>
              {next.name}
              <ArrowRight strokeWidth="1.6" />
            </a>
          </div>
          <a className="cta" href="/#contact">
            Work with me
            <ArrowRight />
          </a>
        </div>
      </section>

      <footer className="cfoot">
        <div className="wrap">
          <span className="mono">
            © <span id="year">{year}</span> Teninlanimi Taiwo — Kigali / Lagos
          </span>
          <a href="/#work">← All work</a>
        </div>
      </footer>

      <CaseEffects />
    </>
  );
}

const H2_MB = { marginBottom: "34px" };

function CaseSection({ section: s }: { section: Section }) {
  if (s.kind === "lead") {
    return (
      <section className="csec">
        <div className="wrap lead-grid reveal">
          <div>
            <div className="csec-label">{s.label}</div>
            <h2>{s.h2}</h2>
          </div>
          <div className="prose">
            {s.prose.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="csec">
      <div className="wrap reveal">
        <div className="csec-label">{s.label}</div>
        {s.kind === "kpis" ? (
          <div className="kpis">
            {s.items.map((k, i) => (
              <div className="kpi" key={i}>
                <div className="v">{k.v}</div>
                <div className="l">
                  {k.l}
                  {k.sample ? <span className="sample">{k.sample}</span> : null}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {s.kind === "resp" ? (
          <>
            <h2 style={H2_MB}>{s.h2}</h2>
            <div className="resp">
              {s.items.map((r) => (
                <div className="r" key={r.n}>
                  <span className="n">{r.n}</span>
                  <div>
                    <b>{r.b}</b>
                    <span>{r.span}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : null}

        {s.kind === "stack" ? (
          <>
            <h2 style={H2_MB}>{s.h2}</h2>
            <div className="stack-grid">
              {s.cols.map((col) => (
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
        ) : null}

        {s.kind === "sat" ? (
          <div className="sat">
            <span className="sat-sample">sample — swap for real quote</span>
            <p className="sat-quote">{s.quote}</p>
            <div className="sat-by">
              <div className="sat-avatar">{s.avatar}</div>
              <div className="sat-meta">
                <b>{s.by}</b>
                <span>{s.role}</span>
              </div>
            </div>
          </div>
        ) : null}

        {s.kind === "screens" ? (
          <>
            <h2 style={{ marginBottom: `${s.h2Mb ?? 34}px` }}>{s.h2}</h2>
            {s.intro ? (
              <p
                style={{
                  color: "var(--ink-dim)",
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  maxWidth: "58ch",
                  marginBottom: "44px",
                }}
              >
                {s.intro}
              </p>
            ) : null}
            {s.blocks.map((b, i) => (
              <ScreenBlock key={i} block={b} />
            ))}
          </>
        ) : null}
      </div>
    </section>
  );
}

function ShotBox({ shot }: { shot: Shot }) {
  const cls = ["shot", shot.wide && "wide", shot.fit && "fit"].filter(Boolean).join(" ");
  return (
    <div className={cls}>
      {shot.ph ? <span className="ph">{shot.ph}</span> : null}
      {shot.src ? <img src={shot.src} alt={shot.alt ?? ""} /> : null}
    </div>
  );
}

function ScreenBlock({ block: b }: { block: Block }) {
  switch (b.kind) {
    case "phones":
      return (
        <>
          {b.label ? <div className="sub-label">{b.label}</div> : null}
          <div className="phones">
            {b.items.map((p) => (
              <div className="phone" key={p.src}>
                <div className="phone-screen">
                  <img src={p.src} alt={p.alt} />
                </div>
                <div className="phone-cap">{p.cap}</div>
              </div>
            ))}
          </div>
        </>
      );
    case "gallery":
      return (
        <>
          {b.label ? <div className="sub-label">{b.label}</div> : null}
          <div className="gallery">
            {b.shots.map((shot, i) => (
              <ShotBox key={i} shot={shot} />
            ))}
          </div>
        </>
      );
    case "redacted":
      return (
        <div className="redacted" style={b.mt ? { marginTop: `${b.mt}px` } : undefined}>
          <Lock />
          <div>
            <b>{b.b}</b>
            <span>{b.span}</span>
          </div>
        </div>
      );
    case "figs":
      return (
        <div className="figs">
          {b.figs.map((f) => (
            <div className="fig" key={f.src}>
              <ShotBox shot={{ src: f.src, alt: f.alt, wide: true, fit: true }} />
              <div className="cap-body">
                <div className="n">{f.n}</div>
                <h4>{f.h4}</h4>
                {f.ps.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <p className="reads">{f.reads}</p>
              </div>
            </div>
          ))}
        </div>
      );
  }
}
