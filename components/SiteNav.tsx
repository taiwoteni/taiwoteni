"use client";

import { useEffect, useState } from "react";

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : undefined}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="monogram"
            src="/assets/teni-logo.png"
            alt="Teninlanimi Taiwo logo"
          />
          <span>
            Teninlanimi Taiwo
            <br />
            <small>Innovator · Founding Engineer · Engineer</small>
          </span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#capabilities">Stack</a>
          <a href="#contact" className="nav-cta">
            Let&apos;s talk →
          </a>
        </div>
      </div>
    </nav>
  );
}
