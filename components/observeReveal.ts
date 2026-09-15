/**
 * Adds `.in` to each element once it is sufficiently on screen, then stops
 * observing it.
 *
 * The design's reveal used a plain `threshold` (fraction of the element
 * visible). An element taller than viewport ÷ threshold can never reach that
 * fraction, so it stayed invisible forever (e.g. Khove's six-figure Screens
 * section on a ~720px-tall window). Here an element reveals at whichever comes
 * first: `threshold` of its own height, or `threshold` of the viewport height.
 * For anything shorter than the viewport that is exactly the original trigger.
 */
export function observeReveal(
  elements: Iterable<Element>,
  threshold: number,
  rootMargin = "0px",
): () => void {
  const steps = Array.from({ length: Math.round(threshold * 100) + 1 }, (_, i) => i / 100);
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const viewportH = e.rootBounds?.height ?? innerHeight;
        if (e.intersectionRatio >= threshold || e.intersectionRect.height >= viewportH * threshold) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: steps, rootMargin },
  );
  for (const el of elements) io.observe(el);
  return () => io.disconnect();
}
