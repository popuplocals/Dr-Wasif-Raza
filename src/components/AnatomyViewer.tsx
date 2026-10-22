"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { SPOTS } from "@/content/anatomy";

export default function AnatomyViewer({ slug, src, alt }: { slug: string; src: string; alt: string }) {
  const spots = SPOTS[slug] ?? [];
  const [open, setOpen] = useState<number>(0);
  const s = spots[open];
  return (
    <div className="mb-10 overflow-hidden rounded-3xl border border-line bg-surface shadow-card">
      <div className="relative aspect-[16/9] bg-teal-soft">
        <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 760px, 100vw" className="object-cover" />
        {spots.map((p, i) => (
          <button
            key={p.title}
            type="button"
            aria-label={p.title}
            aria-pressed={open === i}
            onClick={() => setOpen(i)}
            className="group/dot absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span className={`absolute inset-0 rounded-full ${p.key ? "bg-amber" : "bg-teal"} opacity-40 animate-wa-pulse`} aria-hidden="true" />
            <span className={`relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white text-[12px] font-bold shadow-lift transition-transform duration-300 ease-spring group-hover/dot:scale-110 ${open === i ? "scale-110 bg-amber text-[#1f1a10]" : "bg-teal text-white"}`}>{i + 1}</span>
          </button>
        ))}
        <span className="absolute bottom-3 left-3 rounded-full bg-teal-deep/80 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">Tap a point</span>
      </div>
      <div className="min-h-[104px] p-5">
        <AnimatePresence mode="wait">
          {s && (
            <motion.div key={s.title} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.28, ease: EASE }}>
              <p className="font-heading text-[19px] font-semibold text-teal-deep">{s.title}</p>
              <p className="mt-1 text-[15px] leading-relaxed text-ink-2">{s.text}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="mt-3 text-[12px] text-ink-2">Illustration for education. Not a patient image or a diagnosis.</p>
      </div>
    </div>
  );
}
