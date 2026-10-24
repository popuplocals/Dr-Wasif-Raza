"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const REASONS = [
  { title: "Trained in the UK NHS", text: "8 years in the NHS — Specialist Registrar in Colorectal Surgery at the Royal Liverpool University Hospital, then Colorectal Specialist at Betsi Cadwaladr University Health Board, Wales." },
  { title: "A dedicated colon & rectal cancer subspecialist", text: "A 3-year MCh in Colon & Rectal Surgery from the University of East Anglia, UK. Colorectal surgery is his core specialisation." },
  { title: "Two international fellowships", text: "FRCS (Royal College of Physicians & Surgeons of Glasgow) and FACS (American College of Surgeons)." },
  { title: "Laparoscopic and robotic first", text: "Dr. Raza performs laparoscopic and robotic surgery on the da Vinci Xi system at Apollo Medics — for colorectal cancer, hernia, gallbladder and selected GI procedures. Smaller incisions, less pain, faster recovery." },
  { title: "He explains. You decide.", text: "Every diagnosis, every option, every risk — in plain language, before any decision." },
];

/** Dark teal band. The photo is pinned and parallaxes; each reason reveals as it enters, with an amber rule that draws in. */
export default function WhyBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 28 });
  const y = useTransform(smooth, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-teal text-bg">
      <div className="relative mx-auto grid max-w-[1400px] gap-14 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <SectionHeading title="Why patients choose Dr. Wasif Raza" light />
          <ol className="mt-10 flex flex-col">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} y={20} amount={0.4} className="group relative border-t border-white/10 py-6 first:border-t-0">
                <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1], delay: 0.1 }} className="absolute left-0 top-0 h-[2px] w-16 origin-left bg-amber" />
                <div className="grid gap-3 sm:grid-cols-[48px_1fr]">
                  <span className="font-heading text-[15px] font-semibold tracking-[0.16em] text-amber">0{i + 1}</span>
                  <div>
                    <h3 className="text-[21px] text-white md:text-[23px]">{r.title}</h3>
                    <p className="mt-2 max-w-[58ch] text-[16px] leading-[1.7] text-bg/80">{r.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="relative lg:sticky lg:top-28 lg:self-start">
          <motion.div style={{ y }} className="relative mx-auto aspect-[3/4] w-full max-w-[460px] overflow-hidden rounded-[32px] shadow-lift ring-1 ring-white/15">
            <Image src="/photos/scrubs-ot.webp" alt="Dr Wasif Raza laparoscopic and robotic surgeon Apollo Medics Lucknow operating theatre" fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover scale-110" style={{ objectPosition: "center 30%" }} />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-teal-deep/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-[13px] text-bg/85">In scrubs — Apollo Medics Lucknow operating theatre complex</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
