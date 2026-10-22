"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import Reveal from "@/components/Reveal";

export type FaqItem = { q: string; a: string };

/** Animated accordion. Answers may contain simple inline HTML. */
export default function Faq({ items, defaultOpen = 0, lang }: { items: FaqItem[]; defaultOpen?: number | null; lang?: string }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="flex flex-col gap-3" lang={lang}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <Reveal key={f.q} index={Math.min(i, 6)} y={18} duration={0.6}>
            <div className={`faq-item overflow-hidden rounded-2xl border bg-surface transition-[border-color,box-shadow] duration-400 ease-spring ${isOpen ? "border-teal/30 shadow-card" : "border-line hover:border-teal/25"}`}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
              >
                <span className={`font-heading text-[17px] font-semibold leading-snug md:text-[18px] ${isOpen ? "text-teal" : "text-teal-deep"}`}>{f.q}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,border-color,color] duration-400 ease-spring ${isOpen ? "rotate-45 border-amber bg-amber text-[#1f1a10]" : "border-teal/25 text-teal"}`} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: EASE }} className="overflow-hidden">
                    <div className="px-5 pb-5 text-[16px] leading-relaxed text-ink md:px-6 [&_a]:text-teal [&_a]:underline" dangerouslySetInnerHTML={{ __html: f.a }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
