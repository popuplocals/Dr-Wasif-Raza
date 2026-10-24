"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SERVICES, illustrationAlt } from "@/content/services";
import { EASE } from "@/lib/motion";

const ORDER = [
  "colon-cancer-surgeon-lucknow",
  "rectal-cancer-surgeon-lucknow",
  "laparoscopic-robotic-surgeon-lucknow",
  "hernia-surgery-lucknow",
  "gallbladder-surgery-lucknow",
  "appendix-surgery-lucknow",
  "gi-surgeon-lucknow",
  "piles-treatment-lucknow",
];

/**
 * Services as a ruled index. On desktop a sticky preview on the right follows whichever row is under the pointer
 * or, while scrolling, the row crossing the middle of the screen, so the picture and the list stay in step.
 * On phones each row carries its own thumbnail.
 */
export default function Expertise() {
  const items = ORDER.map((s) => SERVICES.find((x) => x.slug === s)!).filter(Boolean);
  const [active, setActive] = useState(0);
  const rows = useRef<(HTMLLIElement | null)[]>([]);
  const hovering = useRef(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (hovering.current) return;
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = rows.current.indexOf(e.target as HTMLLIElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    rows.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  const cur = items[active];
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32" id="expertise">
      <div className="border-b border-teal-deep/70 pb-6">
        <h2 className="text-[clamp(28px,3.4vw,46px)] leading-[1.06] tracking-[-0.025em]">Surgical Expertise</h2>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
        <ul onMouseEnter={() => (hovering.current = true)} onMouseLeave={() => (hovering.current = false)}>
          {items.map((s, i) => (
            <li
              key={s.slug}
              ref={(el) => {
                rows.current[i] = el;
              }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <Link href={`/${s.slug}`} className="group grid grid-cols-[44px_1fr_auto] items-start gap-x-4 border-b border-line py-6 transition-[padding,background-color] duration-500 ease-spring hover:bg-sage/30 md:grid-cols-[64px_1fr_auto] md:py-8 lg:hover:pl-3">
                <span className={`pt-2 font-mono text-[13px] transition-colors duration-300 ${active === i ? "text-amber-dark" : "text-ink-2"}`}>0{i + 1}</span>
                <span>
                  <span className={`block font-heading text-[clamp(20px,2.2vw,30px)] leading-[1.08] tracking-[-0.02em] transition-colors duration-300 ${active === i ? "text-teal-deep" : "text-teal-deep/70"}`}>
                    {s.slug === "piles-treatment-lucknow" ? "Piles, Fissure & Fistula Surgery" : s.name}
                  </span>
                  <span className="mt-2 block max-w-[52ch] text-[15.5px] leading-relaxed text-ink-2">{s.card}</span>
                  <span className="relative mt-4 block aspect-[16/9] w-full max-w-[420px] overflow-hidden bg-sage lg:hidden">
                    <Image src={s.illustration ?? s.image} alt={illustrationAlt(s)} fill sizes="(min-width: 640px) 420px, 92vw" className="object-cover" />
                  </span>
                </span>
                <span aria-hidden="true" className="pt-1 font-heading text-[26px] text-teal-deep transition-transform duration-500 ease-spring group-hover:translate-x-1.5">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="relative hidden lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/3] overflow-hidden bg-sage">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div key={cur.slug} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }} className="absolute inset-0">
                  <Image src={cur.illustration ?? cur.image} alt={illustrationAlt(cur)} fill sizes="440px" className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-2">
              <span>
                0{active + 1} / 0{items.length}
              </span>
              <span>Illustration, not a patient image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
