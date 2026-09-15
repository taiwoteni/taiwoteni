"use client";

import { useEffect } from "react";

/**
 * Emulates the design's `onerror="this.classList.add('missing')"` on every
 * <img>. Images can fail before hydration, so already-completed images with no
 * intrinsic size are flagged immediately.
 */
export function useMissingImages(onMissing?: (img: HTMLImageElement) => void) {
  useEffect(() => {
    const cleanups: (() => void)[] = [];
    document.querySelectorAll("img").forEach((img) => {
      const mark = () => {
        img.classList.add("missing");
        onMissing?.(img);
      };
      if (img.complete && img.naturalWidth === 0 && img.currentSrc !== "") {
        mark();
        return;
      }
      img.addEventListener("error", mark);
      cleanups.push(() => img.removeEventListener("error", mark));
    });
    return () => cleanups.forEach((fn) => fn());
  }, [onMissing]);
}
