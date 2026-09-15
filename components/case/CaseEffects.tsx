"use client";

import { useEffect } from "react";
import { observeReveal } from "@/components/observeReveal";
import { useMissingImages } from "@/components/useMissingImages";

/** Port of the inline script at the bottom of each work/*.html. */
export default function CaseEffects() {
  useMissingImages();

  useEffect(() => {
    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
    return observeReveal(document.querySelectorAll(".reveal"), 0.14);
  }, []);

  return null;
}
