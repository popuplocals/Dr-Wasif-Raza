"use client";

import { useEffect, useState } from "react";

const HOLD_MS = 1500;
const FADE_MS = 800;

/** Short brand intro shown once per session: monogram ring draws in, then the overlay wipes upward. */
export default function Preloader() {
  const [phase, setPhase] = useState<"shown" | "leaving" | "hidden">("shown");

  useEffect(() => {
    if (!document.documentElement.classList.contains("wr-splash")) {
      setPhase("hidden");
      return;
    }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hold = reduced ? 500 : HOLD_MS;
    const leave = setTimeout(() => {
      setPhase("leaving");
      document.documentElement.classList.remove("wr-splash");
    }, hold);
    const gone = setTimeout(() => setPhase("hidden"), hold + FADE_MS);
    return () => {
      clearTimeout(leave);
      clearTimeout(gone);
    };
  }, []);

  if (phase === "hidden") return null;
  const leaving = phase === "leaving";
  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-teal-deep transition-[clip-path,opacity] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        leaving ? "pointer-events-none opacity-0 [clip-path:inset(0_0_100%_0)]" : "opacity-100 [clip-path:inset(0_0_0_0)]"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        <svg width="84" height="84" viewBox="0 0 84 84" fill="none" aria-hidden="true">
          <circle
            cx="42"
            cy="42"
            r="39"
            stroke="#E6A23C"
            strokeWidth="1.5"
            strokeDasharray="245"
            strokeDashoffset="245"
            style={{ animation: "wr-draw 1.1s cubic-bezier(0.16,1,0.3,1) forwards" }}
          />
          <text
            x="42"
            y="52"
            textAnchor="middle"
            fill="#FAFAF7"
            fontFamily="var(--font-fraunces), Georgia, serif"
            fontSize="30"
            fontWeight="600"
            style={{ opacity: 0, animation: "wr-fade 0.6s 0.45s forwards" }}
          >
            WR
          </text>
        </svg>
        <p className="font-heading text-[15px] tracking-[0.18em] text-bg/80" style={{ opacity: 0, animation: "wr-fade 0.6s 0.7s forwards" }}>
          DR. WASIF RAZA
        </p>
      </div>
      <style>{`@keyframes wr-draw{to{stroke-dashoffset:0}}@keyframes wr-fade{to{opacity:1}}`}</style>
    </div>
  );
}
