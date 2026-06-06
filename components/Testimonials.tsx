"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "./icons";

type Slide = {
  initial: string;
  quote: ReactNode;
  by: string;
  role: string;
};

const SLIDES: Slide[] = [
  {
    initial: "A",
    quote: (
      <>
        He operates years beyond his age. We handed him an ambiguous,
        high-stakes brief and he came back with an architecture the{" "}
        <em>entire senior team</em> trusted on day one.
      </>
    ),
    by: "A. O.",
    role: "Engineering Lead · Softcom (NDA)",
  },
  {
    initial: "R",
    quote: (
      <>
        Teni built Troco from nothing and had{" "}
        <em>a thousand people using it in three months.</em> Rare to find
        someone who ships that fast and that carefully.
      </>
    ),
    by: "R. A.",
    role: "Co-founder · Troco",
  },
  {
    initial: "M",
    quote: (
      <>
        Calm, precise, and relentless. He reads the boring places so the
        important things <em>don&apos;t stay unseen</em> — and ships before
        anyone expects it.
      </>
    ),
    by: "Mentor",
    role: "ALU Claude Builders Club",
  },
  {
    initial: "K",
    quote: (
      <>
        The kind of engineer who is fluent with{" "}
        <em>executives and code in the same meeting.</em> He owns the whole
        problem, end to end.
      </>
    ),
    by: "K. T.",
    role: "Product Partner",
  },
];

const DUR = 7000;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const barRef = useRef<HTMLSpanElement>(null);
  const pausedRef = useRef(false);
  const elapsedRef = useRef(0);
  const lastRef = useRef(0);
  const reduceRef = useRef(false);

  const go = useCallback((n: number) => {
    const next = (n + SLIDES.length) % SLIDES.length;
    elapsedRef.current = 0;
    lastRef.current = performance.now();
    if (barRef.current && !reduceRef.current) barRef.current.style.width = "0%";
    setI(next);
  }, []);

  useEffect(() => {
    reduceRef.current = window.matchMedia(
      "(prefers-reduced-motion:reduce)"
    ).matches;
    lastRef.current = performance.now();
    if (reduceRef.current && barRef.current) barRef.current.style.width = "100%";

    let raf = 0;
    const tick = (now: number) => {
      const dt = now - lastRef.current;
      lastRef.current = now;
      if (!pausedRef.current && !reduceRef.current) {
        elapsedRef.current += dt;
        if (barRef.current)
          barRef.current.style.width =
            Math.min(100, (elapsedRef.current / DUR) * 100) + "%";
        if (elapsedRef.current >= DUR) setI((cur) => (cur + 1) % SLIDES.length);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  // Reset the progress timer whenever the active slide changes (covers auto-advance too).
  useEffect(() => {
    elapsedRef.current = 0;
    lastRef.current = performance.now();
    if (barRef.current && !reduceRef.current) barRef.current.style.width = "0%";
  }, [i]);

  const pause = () => (pausedRef.current = true);
  const resume = () => (pausedRef.current = false);

  return (
    <div
      className="t-slider reveal"
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label="Testimonials"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          go(i - 1);
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          go(i + 1);
        }
      }}
    >
      <div className="t-stage">
        {SLIDES.map((s, idx) => (
          <figure
            key={idx}
            className={`t-slide${idx === i ? " active" : ""}`}
            data-initial={s.initial}
          >
            <span className="t-tag">sample</span>
            <p className="t-quote">{s.quote}</p>
            <figcaption className="t-by">
              <div className="t-avatar">{s.initial}</div>
              <div className="t-meta">
                <b>{s.by}</b>
                <span>{s.role}</span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="t-progress">
        <span className="t-bar" ref={barRef} />
      </div>
      <div className="t-controls">
        <div className="t-dots" role="tablist" aria-label="Choose testimonial">
          {SLIDES.map((s, idx) => (
            <button
              key={idx}
              type="button"
              className={`t-dot${idx === i ? " active" : ""}`}
              aria-label={"Show testimonial " + (idx + 1)}
              aria-current={idx === i ? "true" : "false"}
              onClick={() => go(idx)}
            >
              {s.initial}
            </button>
          ))}
        </div>
        <div className="t-arrows">
          <button
            className="t-arrow t-prev"
            type="button"
            aria-label="Previous testimonial"
            onClick={() => go(i - 1)}
          >
            <ArrowLeft />
          </button>
          <button
            className="t-arrow t-next"
            type="button"
            aria-label="Next testimonial"
            onClick={() => go(i + 1)}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}
