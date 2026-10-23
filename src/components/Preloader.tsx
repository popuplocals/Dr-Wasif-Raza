"use client";

import Logo from "@/components/Logo";

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
      <div className="flex flex-col items-center gap-6 px-6 text-center">
        <span style={{ opacity: 0, animation: "wr-fade 0.7s 0.15s forwards" }}>
          <Logo variant="full" light size="xl" />
        </span>
        <span className="block h-px w-40 origin-center bg-amber" style={{ transform: "scaleX(0)", animation: "wr-line 1s 0.5s cubic-bezier(0.16,1,0.3,1) forwards" }} />
      </div>
      <style>{`@keyframes wr-line{to{transform:scaleX(1)}}@keyframes wr-fade{to{opacity:1}}`}</style>
    </div>
  );
}
