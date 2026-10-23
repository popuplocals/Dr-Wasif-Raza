"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { RECOVERY } from "@/content/recovery";
import { EASE } from "@/lib/motion";

const fmt = (d: Date) => d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
const addDays = (d: Date, n: number) => {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
};
const today = () => new Date().toISOString().slice(0, 10);

/** "When can I…?" planner: pick the surgery date and see the typical windows as real dates. */
export default function RecoveryCalculator({ slug }: { slug: string }) {
  const data = RECOVERY[slug];
  const [date, setDate] = useState(today());
  const start = useMemo(() => new Date(date + "T00:00:00"), [date]);
  if (!data) return null;
  const longest = Math.max(...data.milestones.map((m) => m.to), 1);

  return (
    <section className="mt-12 rounded-3xl border border-teal/15 bg-teal-soft p-6 md:p-8" aria-label="Recovery planner">
      <p className="text-[12.5px] font-mono font-medium uppercase tracking-[0.12em] text-teal">Recovery planner</p>
      <h2 className="mt-2 text-[clamp(22px,2.6vw,30px)]">When can I…? — {data.name}</h2>
      <label className="mt-5 flex flex-wrap items-center gap-3 text-[15px] font-semibold text-teal-deep">
        Planned date of surgery
        <input type="date" value={date} onChange={(e) => e.target.value && setDate(e.target.value)} className="rounded-xl border border-line bg-surface px-3 py-2 text-[16px] font-normal text-ink outline-none focus:border-teal" />
      </label>
      <ul className="mt-6 grid gap-4">
        {data.milestones.map((m, i) => {
          const a = addDays(start, m.from);
          const b = addDays(start, m.to);
          const same = m.from === m.to;
          return (
            <li key={m.label}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-[15px]">
                <span className="font-semibold text-teal-deep">{m.label}</span>
                <span className="text-ink">
                  {m.to === 0 ? "Same day" : same ? fmt(a) : `${fmt(a)} – ${fmt(b)}`}
                  <span className="ml-2 text-[13px] text-ink-2">{m.to === 0 ? "" : same ? `(day ${m.from})` : `(day ${m.from}–${m.to})`}</span>
                </span>
              </div>
              <div className="relative mt-1.5 h-2.5 overflow-hidden rounded-full bg-white/70">
                <motion.span
                  key={`${date}-${i}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.max(4, (m.to / longest) * 100)}%` }}
                  transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
                  className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-teal to-amber"
                />
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-[13px] text-ink-2">Typical ranges from this page&apos;s information, shown as dates for convenience. Dr. Raza will confirm your own plan. Individual results vary.</p>
    </section>
  );
}
