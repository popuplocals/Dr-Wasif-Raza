"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { EASE } from "@/lib/motion";

type Stat = { label: string; open: string; keyhole: string; openPct: number; keyholePct: number };

const STATS: Stat[] = [
  { label: "Incision", open: "One 10–20 cm cut", keyhole: "3–5 cuts of 5–12 mm", openPct: 100, keyholePct: 18 },
  { label: "Hospital stay", open: "5–10 days", keyhole: "1–5 days", openPct: 100, keyholePct: 45 },
  { label: "Return to work", open: "4–8 weeks", keyhole: "1–4 weeks", openPct: 100, keyholePct: 40 },
  { label: "Pain", open: "Moderate – high", keyhole: "Low", openPct: 90, keyholePct: 30 },
];

/**
 * Drag the handle to compare open surgery with keyhole surgery on the same torso. The bars underneath
 * tween between the two as the handle moves.
 */
export default function CompareSlider() {
  const ref = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(50);
  const x = useMotionValue(50);
  const clip = useTransform(x, (v) => `inset(0 ${100 - v}% 0 0)`);
  const mix = pct / 100; // 0 = all open, 1 = all keyhole

  const setFromEvent = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const v = Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100));
    x.set(v);
    setPct(v);
  };

  return (
    <div className="not-prose rounded-3xl border border-line bg-surface p-5 shadow-card md:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="!mt-0 text-[22px]">Open vs keyhole — drag to compare</h3>
        <span className="text-[13px] text-ink-2">Illustrative only; your surgeon decides the approach.</span>
      </div>

      <div
        ref={ref}
        className="relative mt-5 aspect-[16/9] cursor-ew-resize touch-none select-none overflow-hidden rounded-2xl bg-sage/40"
        onPointerDown={(e) => {
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          setFromEvent(e.clientX);
        }}
        onPointerMove={(e) => e.buttons === 1 && setFromEvent(e.clientX)}
        role="slider"
        aria-label="Compare open and keyhole surgery"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            x.set(Math.max(4, pct - 5));
            setPct(Math.max(4, pct - 5));
          }
          if (e.key === "ArrowRight") {
            x.set(Math.min(96, pct + 5));
            setPct(Math.min(96, pct + 5));
          }
        }}
      >
        {/* Keyhole side (base layer) */}
        <Torso label="Keyhole / robotic" variant="keyhole" />
        {/* Open side (clipped on top) */}
        <motion.div style={{ clipPath: clip }} className="absolute inset-0">
          <Torso label="Open surgery" variant="open" />
        </motion.div>
        {/* Handle */}
        <motion.div style={{ left: useTransform(x, (v) => `${v}%`) }} className="absolute inset-y-0 w-0">
          <span className="absolute inset-y-0 -left-px w-[2px] bg-teal-deep/70" />
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-teal text-white shadow-lift">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </motion.div>
      </div>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {STATS.map((s) => {
          const width = s.openPct + (s.keyholePct - s.openPct) * mix;
          return (
            <li key={s.label}>
              <div className="flex items-baseline justify-between text-[13.5px]">
                <span className="font-mono font-medium uppercase tracking-[0.12em] text-teal-deep">{s.label}</span>
                <span className="text-ink-2">{mix < 0.5 ? s.open : s.keyhole}</span>
              </div>
              <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-sage/70">
                <motion.div animate={{ width: `${width}%` }} transition={{ duration: 0.35, ease: EASE }} className="h-full rounded-full" style={{ background: mix < 0.5 ? "#C9871F" : "#0F4C5C" }} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Torso({ label, variant }: { label: string; variant: "open" | "keyhole" }) {
  const open = variant === "open";
  return (
    <div className={`absolute inset-0 ${open ? "bg-amber-pale/60" : "bg-teal-soft"}`}>
      <svg viewBox="0 0 640 360" className="h-full w-full" aria-hidden="true">
        {/* torso silhouette */}
        <path d="M200 40 C 240 20, 400 20, 440 40 C 470 120, 470 240, 440 330 C 400 350, 240 350, 200 330 C 170 240, 170 120, 200 40 Z" fill="#FAFAF7" stroke="#C5D6CE" strokeWidth="2" />
        <circle cx="320" cy="190" r="6" fill="#DDE8E3" />
        {open ? (
          <g>
            <path d="M320 90 L320 300" stroke="#C9871F" strokeWidth="5" strokeLinecap="round" />
            {Array.from({ length: 9 }).map((_, i) => (
              <path key={i} d={`M308 ${105 + i * 23} L332 ${105 + i * 23}`} stroke="#C9871F" strokeWidth="2.5" strokeLinecap="round" />
            ))}
          </g>
        ) : (
          <g>
            {[
              [320, 150],
              [260, 215],
              [380, 215],
              [300, 270],
              [350, 120],
            ].map(([cx, cy], i) => (
              <g key={i}>
                <circle cx={cx} cy={cy} r="9" fill="#0F4C5C" opacity="0.15" />
                <circle cx={cx} cy={cy} r="4" fill="#0F4C5C" />
              </g>
            ))}
          </g>
        )}
      </svg>
      <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[12px] font-mono font-medium uppercase tracking-[0.12em] ${open ? "bg-amber-dark text-white" : "bg-teal text-white"}`}>{label}</span>
    </div>
  );
}
