"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";

const ITEMS = ["All previous reports, scans (CT / MRI / ultrasound), colonoscopy and biopsy reports", "List of current medications", "Referral letter, if any", "A family member — a second pair of ears helps", "Your questions written down"];
const KEY = "wr-checklist-v1";

/** Tickable preparation list. Progress is remembered on this device only. */
export default function Checklist() {
  const [done, setDone] = useState<boolean[]>(ITEMS.map(() => false));
  useEffect(() => {
    try {
      const v = JSON.parse(localStorage.getItem(KEY) || "null");
      if (Array.isArray(v) && v.length === ITEMS.length) setDone(v);
    } catch {}
  }, []);
  const toggle = (i: number) =>
    setDone((d) => {
      const n = d.map((x, j) => (j === i ? !x : x));
      try {
        localStorage.setItem(KEY, JSON.stringify(n));
      } catch {}
      return n;
    });
  const count = done.filter(Boolean).length;
  const pct = count / ITEMS.length;
  const R = 22;
  const C = 2 * Math.PI * R;

  return (
    <div>
      <div className="flex items-center gap-4">
        <svg width="56" height="56" viewBox="0 0 56 56" aria-hidden="true">
          <circle cx="28" cy="28" r={R} fill="none" stroke="#C5D6CE" strokeWidth="5" />
          <motion.circle cx="28" cy="28" r={R} fill="none" stroke="#E6A23C" strokeWidth="5" strokeLinecap="round" strokeDasharray={C} animate={{ strokeDashoffset: C * (1 - pct) }} transition={{ duration: 0.6, ease: EASE }} transform="rotate(-90 28 28)" />
        </svg>
        <p className="font-heading text-[20px] text-teal-deep">
          {count === ITEMS.length ? "You're ready." : `${count} of ${ITEMS.length} ready`}
        </p>
      </div>
      <ul className="mt-5 grid gap-3">
        {ITEMS.map((t, i) => (
          <li key={t}>
            <button type="button" onClick={() => toggle(i)} aria-pressed={done[i]} className={`flex w-full items-start gap-3 rounded-2xl border p-4 text-left text-[16px] transition-[background-color,border-color] duration-300 ${done[i] ? "border-teal/30 bg-teal-soft text-ink-2" : "border-line bg-surface text-ink hover:border-teal/40"}`}>
              <span className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300 ${done[i] ? "border-teal bg-teal text-white" : "border-line"}`} aria-hidden="true">
                {done[i] && (
                  <motion.svg initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <motion.path d="m5 12 5 5 9-10" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3 }} />
                  </motion.svg>
                )}
              </span>
              <span className={done[i] ? "line-through decoration-teal/40" : ""}>{t}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
