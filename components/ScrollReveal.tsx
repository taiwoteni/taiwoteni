"use client";

import { useEffect } from "react";

/**
 * Mirrors the prototype's reveal-on-scroll behaviour.
 * - #hero (the staggered hero) is revealed immediately on mount.
 * - every other .reveal / .stagger element is revealed via IntersectionObserver.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (hero) {
      requestAnimationFrame(() => hero.classList.add("in"));
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll<HTMLElement>(".reveal, .stagger").forEach((el) => {
      if (el.id !== "hero") io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
