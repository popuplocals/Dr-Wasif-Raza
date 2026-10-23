"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { JOURNEYS } from "@/content/journeys";
import type { ServiceGroup } from "@/content/services";
import { EASE } from "@/lib/motion";

/** Vertical timeline whose dashed spine fills as you scroll and whose steps light up when reached. */
export default function TreatmentJourney({ group }: { group: ServiceGroup }) {
  const ref = useRef<HTMLDivElement>(null);
  const { heading, steps } = JOURNEYS[group];
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const fill = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const height = useTransform(fill, (v) => `${Math.max(0, Math.min(1, v)) * 100}%`);

  return (
    <section className="mt-16 rounded-3xl border border-line bg-surface p-6 shadow-card md:p-10" aria-label="Treatment journey">
      <p className="text-[12.5px] font-semibold uppercase tracking-[0.2em] text-teal">What happens next</p>
      <h2 className="mt-2 text-[clamp(20px,2.4vw,27px)]">{heading}</h2>
      <div ref={ref} className="relative mt-8 pl-10 md:pl-14">
        <span aria-hidden="true" className="absolute bottom-2 left-[15px] top-2 w-0 border-l-2 border-dashed border-sage-deep md:left-[21px]" />
        <motion.span aria-hidden="true" style={{ height }} className="absolute left-[14px] top-2 w-[3px] rounded-full bg-gradient-to-b from-amber to-teal md:left-[20px]" />
        <ol className="grid gap-8">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="relative"
            >
              <motion.span
                initial={{ scale: 0.4 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-amber bg-surface font-heading text-[13px] font-semibold text-teal md:-left-14 md:h-10 md:w-10 md:text-[15px]"
              >
                {i + 1}
              </motion.span>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-amber-dark">{s.when}</p>
              <h3 className="mt-0.5 text-[20px] md:text-[22px]">{s.title}</h3>
              <p className="mt-1.5 max-w-[60ch] text-[15.5px] leading-relaxed text-ink-2">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
      <p className="mt-8 text-[13px] text-ink-2">Timings are typical, not promises. Your own plan is confirmed at consultation. Individual results vary.</p>
    </section>
  );
}
