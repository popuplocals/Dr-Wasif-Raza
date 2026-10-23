"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { SERVICE_BY_SLUG } from "@/content/services";
import { EASE } from "@/lib/motion";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type Symptom = { label: string; slug: string; urgent?: string };

const SYMPTOMS: Symptom[] = [
  { label: "Blood in stool", slug: "rectal-bleeding-lucknow", urgent: "Don't wait if it lasts over 2 weeks or comes with weight loss." },
  { label: "Change in bowel habit", slug: "colonoscopy-lucknow", urgent: "Lasting more than 2–3 weeks needs a colonoscopy." },
  { label: "Diagnosed with colon or rectal cancer", slug: "second-opinion-colon-rectal-cancer-lucknow", urgent: "Bring your biopsy, CT/MRI and blood reports." },
  { label: "Bulge in groin or abdomen", slug: "hernia-surgery-lucknow", urgent: "Go to emergency if it is hard, painful and won't go back." },
  { label: "Pain after fatty meals", slug: "gallbladder-surgery-lucknow", urgent: "Fever or jaundice with the pain needs urgent care." },
  { label: "Sudden lower-right abdominal pain", slug: "appendix-surgery-lucknow", urgent: "With fever or vomiting, come to Apollo Medics emergency now." },
  { label: "Pain, lump or discharge near the anus", slug: "piles-treatment-lucknow", urgent: "Bleeding is never 'just piles' until a specialist has examined you." },
  { label: "Recurring boil near the anus", slug: "anal-fistula-surgery-lucknow", urgent: "A fistula will not heal with creams or antibiotics." },
  { label: "Sharp pain during stool", slug: "anal-fissure-treatment-lucknow", urgent: "Acute fissures often heal with medical treatment if started early." },
  { label: "Bloating, cramps, can't pass wind", slug: "gi-surgeon-lucknow", urgent: "Possible obstruction — this is an emergency." },
];

/** Interactive symptom guide: tap a symptom, the matching service slides in with the "don't wait if" rule. */
export default function SymptomChecker() {
  const [active, setActive] = useState<Symptom | null>(null);
  const s = active ? SERVICE_BY_SLUG[active.slug] : null;

  return (
    <section className="relative overflow-hidden bg-sage/40">
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading eyebrow="Symptom guide" title="When should you see a surgeon?" text="Tap what you've noticed. We'll show you the right page and the one rule for when not to wait." />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <Reveal y={16} className="flex flex-wrap gap-2.5">
            {SYMPTOMS.map((sym, i) => {
              const on = active?.label === sym.label;
              return (
                <motion.button
                  key={sym.label}
                  type="button"
                  onClick={() => setActive(on ? null : sym)}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.04 }}
                  aria-pressed={on}
                  className={`rounded-full border px-4 py-2.5 text-[15px] font-medium transition-[background-color,color,border-color,box-shadow] duration-300 ease-spring ${
                    on ? "border-teal bg-teal text-white shadow-card" : "border-teal/15 bg-surface text-teal-deep hover:border-teal/40 hover:bg-teal-soft"
                  }`}
                >
                  {sym.label}
                </motion.button>
              );
            })}
            <p className="mt-4 w-full text-[14.5px] text-ink-2">
              Not sure?{" "}
              <a href={PHONE_TEL} className="font-semibold text-teal underline decoration-teal/30 underline-offset-4">
                Call {PHONE_DISPLAY}
              </a>{" "}
              — we&apos;ll guide you.
            </p>
          </Reveal>

          <div className="relative min-h-[300px]">
            <AnimatePresence mode="wait">
              {s && active ? (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="overflow-hidden rounded-3xl border border-line bg-surface shadow-lift"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-teal-soft">
                    <Image src={s.illustration ?? s.image} alt={s.imageAlt} fill sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="text-[11.5px] font-mono font-medium uppercase tracking-[0.12em] text-amber-dark">{s.eyebrow}</p>
                    <h3 className="mt-1 text-[24px]">{s.name}</h3>
                    <p className="mt-2 text-[15.5px] leading-relaxed text-ink-2">{s.card}</p>
                    {active.urgent && (
                      <p className="mt-4 rounded-2xl border-l-4 border-amber bg-amber-pale/50 px-4 py-3 text-[14.5px] text-teal-deep">
                        <b>Don&apos;t wait if:</b> {active.urgent}
                      </p>
                    )}
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link href={`/${s.slug}`} className="btn btn-teal">
                        Read about {s.name.split(" ")[0]} <span aria-hidden="true">→</span>
                      </Link>
                      <Link href="/contact" className="btn btn-ghost">
                        Book
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-3xl border-2 border-dashed border-sage-deep p-8 text-center">
                  <motion.span animate={{ y: [0, -6, 0] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} className="flex h-14 w-14 items-center justify-center rounded-full bg-surface text-teal shadow-card" aria-hidden="true">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 11.5 11 13.5 15 9.5" />
                      <circle cx="12" cy="12" r="9" />
                    </svg>
                  </motion.span>
                  <p className="mt-4 font-heading text-[20px] text-teal-deep">Pick a symptom to begin</p>
                  <p className="mt-1 max-w-[32ch] text-[14.5px] text-ink-2">This is a guide, not a diagnosis. Only an examination can confirm the cause.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
