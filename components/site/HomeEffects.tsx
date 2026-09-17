"use client";

import { useEffect } from "react";
import { observeReveal } from "@/components/observeReveal";
import { useMissingImages } from "@/components/useMissingImages";
import { CONTACT_EMAIL } from "@/lib/site";

/** Marquee logos that fail to load are removed entirely (as in site.js). */
const removeBrokenLogo = (img: HTMLImageElement) => img.closest(".mq-item")?.remove();

const HINT = {
  idle: "// sends straight to my inbox",
  sending: "// sending…",
  sent: "// sent, a confirmation is on its way to your inbox",
  limited: "// too many attempts, try again shortly",
  failed: `// couldn't send, email ${CONTACT_EMAIL} directly`,
};

/** Port of the design's site.js, run against the server-rendered home page. */
export default function HomeEffects() {
  useMissingImages(removeBrokenLogo);

  useEffect(() => {
    const reduce = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const cleanups: (() => void)[] = [];
    const on = (target: EventTarget, type: string, fn: EventListener, opts?: AddEventListenerOptions) => {
      target.addEventListener(type, fn, opts);
      cleanups.push(() => target.removeEventListener(type, fn, opts));
    };
    const later = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      cleanups.push(() => clearTimeout(t));
    };
    const byId = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T | null;

    /* intro curtain */
    const intro = byId("intro");
    if (intro) {
      const lift = () => intro.classList.add("gone");
      if (reduce) lift();
      else later(lift, 1150);
    }

    /* nav + scroll progress */
    const nav = byId("nav");
    const prog = byId("prog");
    const onScroll = () => {
      nav?.classList.toggle("scrolled", scrollY > 20);
      const h = document.documentElement.scrollHeight - innerHeight;
      if (prog) prog.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + "%";
    };
    onScroll();
    on(window, "scroll", onScroll, { passive: true });
    const yr = byId("yr");
    if (yr) yr.textContent = String(new Date().getFullYear());

    /* hero entrance + portrait parallax */
    {
      const hero = document.querySelector<HTMLElement>(".hero");
      const plate = byId("plate");
      const go = () => {
        byId("heroStg")?.classList.add("in");
        byId("h1")?.classList.add("in");
        hero?.classList.add("in");
      };
      later(go, reduce ? 0 : 900);
      if (document.readyState === "complete") later(go, reduce ? 0 : 900);
      else on(window, "load", () => later(go, reduce ? 0 : 900));

      if (hero && plate && !reduce && !matchMedia("(pointer:coarse)").matches) {
        let tx = 0,
          ty = 0,
          cx = 0,
          cy = 0,
          raf = 0;
        const loop = () => {
          cx += (tx - cx) * 0.07;
          cy += (ty - cy) * 0.07;
          plate.style.transform = `translate3d(${cx}px,${cy}px,0) scale(1.03)`;
          raf = Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1 ? requestAnimationFrame(loop) : 0;
        };
        on(hero, "mousemove", ((e: MouseEvent) => {
          const r = hero.getBoundingClientRect();
          tx = ((e.clientX - r.left) / r.width - 0.5) * -22;
          ty = ((e.clientY - r.top) / r.height - 0.5) * -16;
          if (!raf) raf = requestAnimationFrame(loop);
        }) as EventListener);
        on(hero, "mouseleave", () => {
          tx = 0;
          ty = 0;
          if (!raf) raf = requestAnimationFrame(loop);
        });
        cleanups.push(() => cancelAnimationFrame(raf));
      }
    }

    /* reveals */
    const revealTargets = [...document.querySelectorAll(".rv,.stg")].filter((el) => el.id !== "heroStg");
    cleanups.push(observeReveal(revealTargets, 0.12, "0px 0px -6% 0px"));

    /* stat counters */
    {
      const band = byId("statBand");
      if (band) {
        const nums = [...band.querySelectorAll<HTMLElement>("[data-count]")];
        let done = false;
        const run = () => {
          if (done) return;
          done = true;
          nums.forEach((n) => {
            const target = +(n.dataset.count ?? 0),
              suffix = n.dataset.suffix || "",
              dur = 1400,
              t0 = performance.now();
            if (reduce) {
              n.textContent = target.toLocaleString() + suffix;
              return;
            }
            const step = (now: number) => {
              const p = Math.min(1, (now - t0) / dur),
                e = 1 - Math.pow(1 - p, 3);
              n.textContent = Math.round(target * e).toLocaleString() + (p === 1 ? suffix : "");
              if (p < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
          });
        };
        const sio = new IntersectionObserver(
          (es) =>
            es.forEach((e) => {
              if (e.isIntersecting) run();
            }),
          { threshold: 0.4 },
        );
        sio.observe(band);
        cleanups.push(() => sio.disconnect());
      }
    }

    /* project cards → case study */
    document.querySelectorAll<HTMLElement>(".pj[data-case]").forEach((card) => {
      const url = card.dataset.case!;
      on(card, "click", ((e: MouseEvent) => {
        if ((e.target as Element).closest("a")) return;
        location.href = url;
      }) as EventListener);
      on(card, "keydown", ((e: KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          location.href = url;
        }
      }) as EventListener);
    });

    /* scroll-linked walkthroughs */
    {
      const walks = [...document.querySelectorAll("[data-walk]")].map((w) => ({
        steps: [...w.querySelectorAll("[data-step]")],
        imgs: [...w.querySelectorAll(".wv img")],
        cur: -1,
      }));
      if (walks.length) {
        const sync = () => {
          const line = innerHeight * 0.52;
          walks.forEach((w) => {
            let idx = 0;
            w.steps.forEach((s, j) => {
              if (s.getBoundingClientRect().top <= line) idx = j;
            });
            if (idx === w.cur) return;
            w.cur = idx;
            w.steps.forEach((s, j) => s.classList.toggle("on", j === idx));
            w.imgs.forEach((im, j) => im.classList.toggle("on", j === idx));
          });
        };
        let queued = false;
        on(
          window,
          "scroll",
          () => {
            sync();
            if (queued) return;
            queued = true;
            requestAnimationFrame(() => {
              queued = false;
              sync();
            });
          },
          { passive: true },
        );
        on(window, "resize", sync);
        sync();
      }
    }

    /* testimonials */
    {
      const tw = byId("tw");
      if (tw) {
        const slides = [...tw.querySelectorAll<HTMLElement>(".ts")];
        const dots = [...tw.querySelectorAll<HTMLButtonElement>(".tdot")];
        const bar = tw.querySelector<HTMLElement>(".tbar i");
        const DUR = 7000;
        let i = 0,
          paused = false,
          elapsed = 0,
          last = performance.now(),
          raf = 0;
        const render = () => {
          slides.forEach((s, j) => s.classList.toggle("on", j === i));
          dots.forEach((d, j) => {
            d.classList.toggle("on", j === i);
            d.setAttribute("aria-current", j === i ? "true" : "false");
          });
        };
        const go = (n: number) => {
          i = (n + slides.length) % slides.length;
          elapsed = 0;
          last = performance.now();
          if (bar && !reduce) bar.style.width = "0%";
          render();
        };
        const tick = (now: number) => {
          const dt = now - last;
          last = now;
          if (!paused && !reduce) {
            elapsed += dt;
            if (bar) bar.style.width = Math.min(100, (elapsed / DUR) * 100) + "%";
            if (elapsed >= DUR) go(i + 1);
          }
          raf = requestAnimationFrame(tick);
        };
        dots.forEach((d, idx) => on(d, "click", () => go(idx)));
        const prev = byId("tPrev"),
          next = byId("tNext");
        if (prev) on(prev, "click", () => go(i - 1));
        if (next) on(next, "click", () => go(i + 1));
        on(tw, "mouseenter", () => (paused = true));
        on(tw, "mouseleave", () => (paused = false));
        on(tw, "focusin", () => (paused = true));
        on(tw, "focusout", () => (paused = false));
        on(tw, "keydown", ((e: KeyboardEvent) => {
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(i - 1);
          } else if (e.key === "ArrowRight") {
            e.preventDefault();
            go(i + 1);
          }
        }) as EventListener);
        on(document, "visibilitychange", () => (paused = document.hidden));
        render();
        if (reduce && bar) bar.style.width = "100%";
        raf = requestAnimationFrame(tick);
        cleanups.push(() => cancelAnimationFrame(raf));
      }
    }

    /* contact → /api/contact (Resend) */
    {
      const form = byId<HTMLFormElement>("enq");
      const hint = byId("hint");
      if (form && hint) {
        const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        let sending = false;
        on(form, "submit", (async (e: SubmitEvent) => {
          e.preventDefault();
          if (sending) return;
          sending = true;
          if (button) button.disabled = true;
          hint.textContent = HINT.sending;
          const d = new FormData(form);
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                name: d.get("name"),
                email: d.get("email"),
                topic: d.get("topic"),
                message: d.get("message"),
                company: d.get("company"),
              }),
            });
            if (res.ok) {
              hint.textContent = HINT.sent;
              form.reset();
            } else {
              hint.textContent = res.status === 429 ? HINT.limited : HINT.failed;
            }
          } catch {
            hint.textContent = HINT.failed;
          } finally {
            sending = false;
            if (button) button.disabled = false;
          }
        }) as unknown as EventListener);
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
