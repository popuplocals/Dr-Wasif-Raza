"use client";

import { useEffect } from "react";

const SELECTOR = "a, button, summary, [role='button']";

/** Site-wide press feedback: a quick scale-down on pointerdown for every link and button. */
export default function TouchFeedback() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onDown = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest?.(SELECTOR) as HTMLElement | null;
      if (!el) return;
      el.classList.toggle("press-inline", getComputedStyle(el).display === "inline");
      el.classList.add("press");
      requestAnimationFrame(() => el.classList.add("press-down"));
      const end = () => {
        window.setTimeout(() => el.classList.remove("press-down"), 120);
        window.removeEventListener("pointerup", end);
        window.removeEventListener("pointercancel", end);
      };
      window.addEventListener("pointerup", end, { passive: true });
      window.addEventListener("pointercancel", end, { passive: true });
    };
    document.addEventListener("pointerdown", onDown, { passive: true });
    return () => document.removeEventListener("pointerdown", onDown);
  }, []);
  return null;
}
