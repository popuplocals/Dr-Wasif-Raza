"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES } from "@/content/services";
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

/** 8 photo cards. Each card rises in on scroll (staggered) and lifts with a slow image zoom on hover. */
export default function Expertise() {
  const items = ORDER.map((s) => SERVICES.find((x) => x.slug === s)!).filter(Boolean);
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28" id="expertise">
      <SectionHeading eyebrow="Surgical expertise" title="Colorectal cancer first. Laparoscopic and robotic wherever it helps." text="Eight areas of practice at Apollo Medics Lucknow — every one explained in plain language before any decision." />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 4) * 0.09 }}
          >
            <Link href={`/${s.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-spring hover:-translate-y-2 hover:border-teal/30 hover:shadow-lift">
              <div className="relative aspect-[16/10] overflow-hidden bg-teal-soft">
                <Image src={s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[1100ms] ease-spring group-hover:scale-[1.07]" style={{ objectPosition: "center 25%" }} />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-teal-deep/60 via-transparent to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-full bg-surface/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-teal backdrop-blur">{s.eyebrow}</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[20px] leading-snug transition-colors duration-300 group-hover:text-teal">{s.slug === "piles-treatment-lucknow" ? "Piles, Fissure & Fistula Surgery" : s.name}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-2">{s.card}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-teal">
                  Learn more
                  <span aria-hidden="true" className="transition-transform duration-300 ease-spring group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
