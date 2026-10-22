"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { STORIES, type Story } from "@/content/stories";
import { EASE } from "@/lib/motion";
import { GBP_REVIEW_LINK, GOOGLE_RATING } from "@/lib/site";

/** Home testimonial carousel. Autoplays gently, pauses on hover, swipe-able. Sample items carry a visible badge. */
export default function Stories() {
  const [live, setLive] = useState<Story[]>([]);
  useEffect(() => {
    let off = false;
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((j) => {
        if (off || !Array.isArray(j.reviews) || !j.reviews.length) return;
        setLive(j.reviews.map((v: { quote: string; who: string }) => ({ tag: "Google review", quote: v.quote, who: v.who, sample: false })));
      })
      .catch(() => {});
    return () => {
      off = true;
    };
  }, []);
  const items = live.length ? live : STORIES.slice(0, 4);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5200);
    return () => clearInterval(t);
  }, [paused, items.length]);

  const s = items[i] ?? items[0];
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading eyebrow="Patient stories" title="What patients say after their first visit." text="Shared with written consent. Individual results vary." />
          <Reveal y={12} delay={0.15} className="mt-6">
            <a href={GBP_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-2xl border border-line bg-surface px-4 py-3 shadow-card transition-transform duration-500 ease-spring hover:-translate-y-1">
              <span className="font-heading text-[34px] font-semibold leading-none text-teal">{GOOGLE_RATING.score}</span>
              <span className="text-[13.5px] leading-tight text-ink-2"><span className="block text-amber-dark" aria-hidden="true">★★★★★</span>{GOOGLE_RATING.count} Google reviews</span>
            </a>
          </Reveal>
          <Reveal y={12} delay={0.2} className="mt-6 flex flex-wrap gap-3">
            <Link href="/patient-stories" className="btn btn-ghost">
              Read more stories
            </Link>
          </Reveal>
        </div>
        <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative">
          <Reveal y={24} className="relative min-h-[260px] overflow-hidden rounded-3xl border border-line bg-surface p-7 shadow-card md:p-10">
            <span aria-hidden="true" className="absolute -right-4 -top-8 font-heading text-[160px] leading-none text-sage">
              &rdquo;
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: EASE }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) setI((v) => (v + 1) % items.length);
                  if (info.offset.x > 60) setI((v) => (v - 1 + items.length) % items.length);
                }}
                className="relative cursor-grab active:cursor-grabbing"
                lang={s.lang}
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber-dark">{s.tag}</p>
                <p className={`mt-4 font-heading text-[20px] leading-[1.5] text-teal-deep md:text-[24px] ${s.lang === "hi" ? "font-hindi" : ""}`}>&ldquo;{s.quote}&rdquo;</p>
                <footer className="mt-5 flex flex-wrap items-center gap-3 text-[14px] text-ink-2">
                  — {s.who}
                  {s.sample && <span className="rounded-full border border-amber/60 bg-amber-pale px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-amber-dark">Sample — replace with consented review</span>}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </Reveal>
          <div className="mt-5 flex items-center gap-2" role="tablist" aria-label="Stories">
            {items.map((_, j) => (
              <button key={j} type="button" role="tab" aria-selected={j === i} aria-label={`Story ${j + 1}`} onClick={() => setI(j)} className={`h-2 rounded-full transition-[width,background-color] duration-500 ease-spring ${j === i ? "w-8 bg-amber" : "w-2 bg-teal/20 hover:bg-teal/40"}`} />
            ))}
            <span className="ml-auto font-heading text-[13px] tracking-[0.1em] text-ink-2">
              0{i + 1} / 0{items.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
