"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { EASE } from "@/lib/motion";

const BADGES = [
  { abbr: "FRCS", line: "Royal College of Physicians & Surgeons of Glasgow", note: "UK" },
  { abbr: "FACS", line: "American College of Surgeons", note: "USA · 2023" },
  { abbr: "MCh", line: "Colon & Rectal Surgery, University of East Anglia", note: "UK" },
  { abbr: "FMAS", line: "Association of Minimal Access Surgeons of India", note: "India" },
  { abbr: "MS", line: "General Surgery, Dr. RML Avadh University", note: "India" },
];

/** Seal-style badges: the ring draws in, then the abbreviation settles. */
export default function CredentialBadges() {
  const R = 52;
  const C = 2 * Math.PI * R;
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
      <SectionHeading eyebrow="Credentials" title="Earned in three countries." />
      <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        {BADGES.map((b, i) => (
          <Reveal key={b.abbr} index={i} y={20} className="flex flex-col items-center text-center">
            <motion.svg viewBox="0 0 120 120" className="h-[118px] w-[118px]" aria-hidden="true">
              <circle cx="60" cy="60" r="56" fill="#E7F0EE" />
              <motion.circle cx="60" cy="60" r={R} fill="none" stroke="#E6A23C" strokeWidth="2.5" strokeDasharray={C} initial={{ strokeDashoffset: C }} whileInView={{ strokeDashoffset: 0 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: EASE, delay: i * 0.1 }} transform="rotate(-90 60 60)" />
              <circle cx="60" cy="60" r="44" fill="none" stroke="#0F4C5C" strokeOpacity="0.25" strokeDasharray="2 5" />
              <motion.text x="60" y="68" textAnchor="middle" fontFamily="var(--font-newsreader), Georgia, serif" fontSize={b.abbr.length > 3 ? 24 : 28} fontWeight="600" fill="#0A3540" initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}>
                {b.abbr}
              </motion.text>
            </motion.svg>
            <p className="mt-3 text-[11.5px] font-mono font-medium uppercase tracking-[0.12em] text-amber-dark">{b.note}</p>
            <p className="mt-1 max-w-[22ch] text-[14.5px] leading-snug text-ink-2">{b.line}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
