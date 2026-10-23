"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";

type Chapter = { label: string; place: string; title: string; text: string; img: string; alt: string };

const CHAPTERS: Chapter[] = [
  { label: "01 / INDIA", place: "Lucknow · New Delhi", title: "Surgical foundations", text: "MBBS, then MS in General Surgery. Residency training at Lok Nayak Hospital and PGIMER & Dr. RML Hospital in New Delhi, and Era Hospital in Lucknow. Fellowship in Minimal Access Surgery (AMASI). Later Assistant Professor of Surgery at Era's Lucknow Medical College.", img: "/photos/cme-podium.webp", alt: "Dr Wasif Raza presenting at a CME in Lucknow" },
  { label: "02 / UNITED KINGDOM", place: "Liverpool", title: "Specialist Registrar, Royal Liverpool", text: "Specialist Registrar in Colorectal Surgery at the Royal Liverpool & Broadgreen University Hospital NHS Trust — a major tertiary colorectal unit. Colorectal Surgery Residency Programme certificate, Royal College of Surgeons of England.", img: "/photos/nhs-clatterbridge.webp", alt: "Dr Wasif Raza at The Clatterbridge Cancer Centre NHS, Wirral" },
  { label: "03 / UNITED KINGDOM", place: "Norwich · Wales", title: "MCh and Colorectal Specialist", text: "A 3-year MCh in Colon & Rectal Surgery at the University of East Anglia, then Colorectal Specialist at Betsi Cadwaladr University Health Board, Wales. FRCS from the Royal College of Physicians & Surgeons of Glasgow. Eight years in the NHS in all.", img: "/photos/convocation-award.webp", alt: "Dr Wasif Raza receiving his fellowship certificate" },
  { label: "04 / INDIA", place: "Lucknow", title: "Associate Director, Apollo Medics", text: "Back in Lucknow: Senior Consultant Colorectal Surgeon at HealthCity Vistaar, then Associate Director of Colorectal & General Surgery at Apollo Medics Superspeciality Hospitals — performing laparoscopic and robotic (da Vinci Xi) surgery. FACS, American College of Surgeons, 2023.", img: "/photos/scrubs-ot.webp", alt: "Dr Wasif Raza in scrubs at Apollo Medics Lucknow" },
];

/** Journey: a pinned photo on the left swaps as each chapter scrolls past on the right. On phones the photo is inlined. */
export default function Journey() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = refs.current.indexOf(e.target as HTMLDivElement);
            if (i >= 0) setActive(i);
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const c = CHAPTERS[active];
  return (
    <section className="bg-teal-deep text-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="mb-12 max-w-[700px]">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-7 bg-amber" />
            <span className="text-[12.5px] font-mono font-medium uppercase tracking-[0.12em] text-amber">The journey</span>
          </div>
          <h2 className="text-[clamp(28px,3.6vw,44px)] text-white">Lucknow → Liverpool → Norwich → Lucknow.</h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <div className="relative aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[28px] shadow-lift ring-1 ring-white/15">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={active} initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }} className="absolute inset-0">
                  <Image src={c.img} alt={c.alt} fill sizes="460px" className="object-cover" style={{ objectPosition: "center 25%" }} />
                </motion.div>
              </AnimatePresence>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-teal-deep/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[12px] font-mono font-medium uppercase tracking-[0.12em] text-amber">{c.place}</p>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3" aria-hidden="true">
              {CHAPTERS.map((ch, i) => (
                <span key={ch.label} className={`h-[3px] rounded-full transition-[width,background-color] duration-500 ease-spring ${i === active ? "w-8 bg-amber" : "w-3 bg-white/20"}`} />
              ))}
              <span className="ml-2 font-heading text-[12px] tracking-[0.12em] text-bg/60">
                0{active + 1} / 0{CHAPTERS.length}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-12 lg:gap-0">
            {CHAPTERS.map((ch, i) => (
              <div key={ch.label} ref={(el) => { refs.current[i] = el; }} className="lg:flex lg:min-h-[46vh] lg:flex-col lg:justify-center lg:py-6">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: EASE }} className={`border-l-2 pl-6 transition-colors duration-500 ease-spring md:pl-8 ${i === active ? "border-amber" : "border-white/15"}`}>
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl lg:hidden">
                    <Image src={ch.img} alt={ch.alt} fill sizes="90vw" className="object-cover" style={{ objectPosition: "center 25%" }} />
                  </div>
                  <span className="font-heading text-[12px] tracking-[0.18em] text-amber">{ch.label}</span>
                  <h3 className="mt-3 text-[24px] text-white md:text-[28px]">{ch.title}</h3>
                  <p className={`mt-4 max-w-[560px] text-[16px] leading-[1.8] transition-colors duration-500 ${i === active ? "text-bg/90" : "text-bg/55"}`}>{ch.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
