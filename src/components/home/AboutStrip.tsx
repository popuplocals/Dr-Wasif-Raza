"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";

const LEDGER = [
  ["Lucknow", "MS, General Surgery"],
  ["Liverpool", "Specialist Registrar, Royal Liverpool University Hospital"],
  ["Norwich", "MCh, Colon & Rectal Surgery, University of East Anglia"],
  ["Wales", "Colorectal Specialist, Betsi Cadwaladr University Health Board"],
  ["Lucknow", "Associate Director, Apollo Medics Superspeciality Hospitals"],
];

/** Editorial intro: a tall photograph that moves against the text as you scroll, then a ruled career ledger. */
export default function AboutStrip() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 100, damping: 30, mass: 0.4 });
  const imgY = useTransform(p, [0, 1], reduce ? [0, 0] : [-50, 50]);
  const reveal = useTransform(p, [0.1, 0.45], ["inset(0% 0% 100% 0%)", "inset(0% 0% 0% 0%)"]);

  return (
    <section ref={ref} className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <motion.div style={{ clipPath: reduce ? undefined : reveal }} className="relative aspect-[3/4] overflow-hidden bg-sage">
              <motion.div style={{ y: imgY }} className="absolute inset-[-8%]">
                <Image src="/photos/scrubs-ot.webp" alt="Dr Wasif Raza in scrubs outside the operating theatre Apollo Medics Lucknow colorectal surgeon" fill sizes="(min-width: 1024px) 520px, 92vw" className="object-cover" style={{ objectPosition: "center 30%" }} />
              </motion.div>
            </motion.div>
            <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-2">Outside the operating theatre, Apollo Medics Lucknow</p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-4">
          <Reveal y={14}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-teal">The Surgeon Behind the Credentials</p>
          </Reveal>
          <Reveal y={22} delay={0.05}>
            <h2 className="mt-4 max-w-[22ch] text-[clamp(26px,3.2vw,44px)] leading-[1.08] tracking-[-0.025em]">A specialist surgeon for colon &amp; rectal cancer in Lucknow</h2>
          </Reveal>
          <div className="mt-8 space-y-5 text-[16.5px] leading-[1.75] text-ink md:text-[17px]">
            <Reveal y={16} delay={0.1}>
              <p>When a diagnosis of colon or rectal cancer arrives, the surgeon you choose shapes everything that follows — the surgery, the recovery, and the outcome.</p>
            </Reveal>
            <Reveal y={16} delay={0.14}>
              <p>
                Dr. Wasif Raza is a colon and rectal cancer surgeon, laparoscopic and robotic surgery specialist, and general surgeon with <b>15 years of experience</b> — including <b>8 years in the UK&apos;s National Health Service</b> at the Royal Liverpool University Hospital, a major NHS tertiary colorectal unit. He holds an <b>MCh in Colon &amp; Rectal Surgery</b> from the University of East Anglia, and holds fellowships of both the <b>Royal College of Physicians &amp; Surgeons of Glasgow (FRCS)</b> and the <b>American College of Surgeons (FACS)</b>.
              </p>
            </Reveal>
            <Reveal y={16} delay={0.18}>
              <p>
                Today, as Associate Director of Colorectal &amp; General Surgery at Apollo Medics Lucknow, he performs laparoscopic and robotic (da Vinci Xi) surgery for colorectal cancer, hernia, gallbladder and GI conditions — with one promise: <b>clear answers, honest advice, and the least invasive treatment that works.</b>
              </p>
            </Reveal>
          </div>

          <dl className="mt-12 border-t border-teal-deep/70">
            {LEDGER.map(([place, what], i) => (
              <Reveal key={`${place}-${i}`} y={10} duration={0.5} index={Math.min(i, 4)} className="grid grid-cols-[110px_1fr] gap-4 border-b border-line py-4 md:grid-cols-[160px_1fr]">
                <dt className="font-heading text-[22px] text-teal-deep">{place}</dt>
                <dd className="self-center text-[15px] leading-snug text-ink-2">{what}</dd>
              </Reveal>
            ))}
          </dl>

          <Reveal y={12} delay={0.1} className="mt-10">
            <Link href="/about-dr-wasif-raza" className="text-[13px] font-semibold uppercase tracking-[0.2em] text-teal-deep underline decoration-amber decoration-2 underline-offset-[8px] transition-colors hover:text-teal">
              Full profile →
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
