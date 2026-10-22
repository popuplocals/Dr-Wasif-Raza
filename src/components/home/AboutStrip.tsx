"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { EASE } from "@/lib/motion";

const TIMELINE = [
  { place: "Lucknow", what: "MS — General Surgery" },
  { place: "Liverpool", what: "Specialist Registrar, Royal Liverpool" },
  { place: "Norwich", what: "MCh Colon & Rectal Surgery, UEA" },
  { place: "Lucknow", what: "Associate Director, Apollo Medics" },
];

export default function AboutStrip() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <div>
          <SectionHeading eyebrow="The surgeon behind the credentials" title="A specialist surgeon for colon & rectal cancer in Lucknow" />
          <Reveal y={20} delay={0.15} className="mt-6 space-y-4 text-[17px] leading-[1.75] text-ink md:text-[18px]">
            <p>When a diagnosis of colon or rectal cancer arrives, the surgeon you choose shapes everything that follows — the surgery, the recovery, and the outcome.</p>
            <p>
              Dr. Wasif Raza is a colon and rectal cancer surgeon, laparoscopic and robotic surgery specialist, and general surgeon with <b>15 years of experience</b> — including <b>8 years in the UK&apos;s National Health Service</b> at the Royal Liverpool University Hospital, a major NHS tertiary colorectal unit. He holds an <b>MCh in Colon &amp; Rectal Surgery</b> from the University of East Anglia, and holds fellowships of both the Royal College of Physicians &amp; Surgeons of Glasgow (FRCS) and the American College of Surgeons (FACS).
            </p>
            <p>
              Today, as Associate Director of Colorectal &amp; General Surgery at Apollo Medics Lucknow, he performs laparoscopic and robotic (da Vinci Xi) surgery for colorectal cancer, hernia, gallbladder and GI conditions — with one promise: <b>clear answers, honest advice, and the least invasive treatment that works.</b>
            </p>
          </Reveal>
          <Reveal y={16} delay={0.25} className="mt-8">
            <Link href="/about-dr-wasif-raza" className="btn btn-teal">
              About Dr. Raza <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          {/* Mini timeline */}
          <div className="relative mt-12">
            <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 1.2, ease: EASE }} className="absolute left-5 right-5 top-5 hidden h-0 origin-left border-t-2 border-dashed border-sage-deep sm:block" />
            <ol className="grid gap-5 sm:grid-cols-4 sm:gap-3">
              {TIMELINE.map((t, i) => (
                <Reveal key={`${t.place}-${i}`} index={i} y={14} className="relative flex items-start gap-3 sm:block">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-amber bg-bg font-heading text-[13px] font-semibold text-teal">{i + 1}</span>
                  <div className="sm:mt-3">
                    <p className="font-heading text-[16px] font-semibold text-teal-deep">{t.place}</p>
                    <p className="text-[13.5px] leading-snug text-ink-2">{t.what}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <Reveal x={30} y={0} scale={0.97} duration={0.9} className="relative mx-auto w-full max-w-[460px]">
          <div className="arch relative aspect-[4/5] shadow-lift">
            <Image src="/photos/at-desk.webp" alt="Dr Wasif Raza explaining colorectal cancer treatment to a patient in Lucknow" fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover transition-transform duration-[1200ms] ease-spring hover:scale-[1.04]" />
          </div>
          <span aria-hidden="true" className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-[999px_999px_24px_24px] bg-sage" />
          <figcaption className="mt-4 text-center text-[13px] text-ink-2">In the OPD, Apollo Medics Lucknow</figcaption>
        </Reveal>
      </div>
    </section>
  );
}
