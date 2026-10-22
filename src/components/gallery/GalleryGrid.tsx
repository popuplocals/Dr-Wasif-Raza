"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GALLERY, GALLERY_CATEGORIES, type GalleryItem } from "@/content/gallery";
import { EASE } from "@/lib/motion";
import TiltCard from "@/components/ui/TiltCard";

export default function GalleryGrid() {
  const [cat, setCat] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = GALLERY.filter((g) => cat === "All" || g.category === cat);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((v) => (v === null ? v : (v + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
      <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0" role="tablist" aria-label="Filter gallery">
        {GALLERY_CATEGORIES.map((c) => (
          <button key={c} type="button" role="tab" aria-selected={cat === c} onClick={() => { setCat(c); setOpen(null); }} className={`shrink-0 rounded-full border px-4 py-2 text-[14px] font-medium transition-[background-color,color,border-color,transform] duration-300 ease-spring active:scale-95 ${cat === c ? "border-teal bg-teal text-white" : "border-line bg-surface text-teal-deep hover:border-teal/40"}`}>
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        <AnimatePresence mode="popLayout">
          {list.map((g, i) => (
            <motion.figure key={g.src} layout initial={{ opacity: 0, y: 24, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.5, ease: EASE, delay: Math.min(i, 8) * 0.04 }} className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-surface shadow-card">
              <TiltCard max={3} glare={false} className="h-full"><button type="button" onClick={() => setOpen(i)} className={`block w-full text-left ${g.video ? "cursor-pointer" : "cursor-zoom-in"}`} aria-label={`${g.video ? "Play" : "Open"}: ${g.caption}`}>
                <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw" className="h-auto w-full object-cover transition-transform duration-[1100ms] ease-spring group-hover:scale-[1.05]" />
                {g.video && (
                  <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-surface/90 text-teal shadow-lift backdrop-blur transition-transform duration-500 ease-spring group-hover:scale-110">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                )}
                {g.video && <span className="absolute left-3 top-3 rounded-full bg-teal-deep/80 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">Video</span>}
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-teal-deep/85 to-transparent p-4 pt-10 text-[13px] text-white opacity-0 transition-[opacity,transform] duration-500 ease-spring group-hover:translate-y-0 group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </button></TiltCard>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>{open !== null && list[open] && <Lightbox item={list[open]} index={open} total={list.length} onClose={close} onStep={step} />}</AnimatePresence>
    </section>
  );
}

function Lightbox({ item, index, total, onClose, onStep }: { item: GalleryItem; index: number; total: number; onClose: () => void; onStep: (d: number) => void }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-[90] flex items-center justify-center bg-teal-deep/95 p-4 backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label={item.caption} data-lenis-prevent>
      <motion.div
        key={item.src}
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.35, ease: EASE }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_, info) => {
          if (info.offset.x < -70) onStep(1);
          if (info.offset.x > 70) onStep(-1);
        }}
        className="relative max-h-[86vh] w-full max-w-[1100px]"
        onClick={(e) => e.stopPropagation()}
      >
        {item.video ? (
          <video src={item.video} poster={item.src} controls autoPlay muted playsInline preload="metadata" className="mx-auto max-h-[78vh] w-auto rounded-2xl bg-black object-contain shadow-lift" aria-label={item.alt} />
        ) : (
          <Image src={item.src} alt={item.alt} width={item.w} height={item.h} sizes="100vw" className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-lift" priority />
        )}
        <p className="mt-3 text-center text-[14px] text-bg/85">
          {item.caption} <span className="text-bg/50">· {index + 1} / {total}</span>
        </p>
      </motion.div>
      <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onStep(-1); }} aria-label="Previous" className="absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:flex">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button type="button" onClick={(e) => { e.stopPropagation(); onStep(1); }} aria-label="Next" className="absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:flex">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </button>
    </motion.div>
  );
}
