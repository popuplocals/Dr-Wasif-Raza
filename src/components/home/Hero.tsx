"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { EASE } from "@/lib/motion";
import { GBP_REVIEW_LINK, GOOGLE_RATING, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";
import { WaIcon } from "@/components/Navbar";

const LINES = ["Colon & Rectal Cancer,", "Laparoscopic & Robotic Surgery,", "and General Surgery Specialist in"];

const LEDGER = [
  { n: "15+", l: "Years in surgery" },
  { n: "8", l: "Years in the UK NHS" },
  { n: "FRCS · FACS", l: "Glasgow · American College" },
  { n: "MCh", l: "Colon & Rectal Surgery, UEA" },
];

/**
 * Editorial hero. A ruled grid, a large serif headline that reveals line by line, and a portrait whose frame,
 * scale and position are all tied to scroll position: as you scroll the frame closes in slightly while the
 * photo drifts, so the image and the text move at different rates and scrolling back reverses everything.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const p = useSpring(scrollYProgress, { stiffness: 110, damping: 30, mass: 0.4 });

  const clip = useTransform(p, [0, 0.9], ["inset(0% 0% 0% 0%)", reduce ? "inset(0% 0% 0% 0%)" : "inset(7% 5% 0% 5%)"]);
  const imgScale = useTransform(p, [0, 1], [1, reduce ? 1 : 1.16]);
  const frameY = useTransform(p, [0, 1], [0, reduce ? 0 : 70]);
  const textY = useTransform(p, [0, 1], [0, reduce ? 0 : -36]);
  const ruleW = useTransform(p, [0, 0.6], ["18%", "100%"]);

  return (
    <section ref={ref} className="relative bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="relative pt-8 md:pt-12">
          {/* Masthead rule that extends as you scroll */}
          <div className="h-px w-full bg-line">
            <motion.div style={{ width: ruleW }} className="h-px bg-teal-deep" />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[12px] uppercase tracking-[0.1em] text-ink-2">
            <span>Colorectal &amp; General Surgery</span>
            <span>Apollo Medics · Lucknow</span>
          </div>
        </div>

        <div className="grid gap-10 pb-12 pt-10 md:pt-16 lg:min-h-[calc(100vh-190px)] lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-14 lg:pb-16">
          <motion.div style={{ y: textY }} className="relative z-10">
            <h1 className="text-[clamp(36px,5.4vw,84px)] font-medium leading-[1.02] tracking-[-0.025em] text-teal-deep">
              {LINES.map((t, i) => (
                <span key={t} className="block overflow-hidden pb-[0.1em]">
                  <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.95, ease: EASE, delay: 0.1 + i * 0.12 }} className="block">
                    {t}
                    {i === LINES.length - 1 && (
                      <>
                        {" "}
                        <em className="font-normal italic text-amber-dark">Lucknow</em>
                      </>
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.7 }} className="mt-9 grid gap-7 md:grid-cols-[1fr_auto] md:items-end">
              <p className="max-w-[46ch] text-[18px] leading-[1.6] text-ink md:text-[19px]">
                UK-trained, NHS-experienced. Laparoscopic and robotic surgery on the da Vinci Xi at Apollo Medics Lucknow, explained in plain language before any decision.
              </p>
              <a href={GBP_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="font-mono text-[12.5px] uppercase tracking-[0.1em] text-teal-deep underline decoration-line underline-offset-[6px] transition-colors hover:decoration-amber">
                ★ {GOOGLE_RATING.score} · {GOOGLE_RATING.count} Google reviews
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.85 }} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/contact" className="btn btn-amber">
                Book Appointment
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <WaIcon size={16} /> WhatsApp
              </a>
              <a href={PHONE_TEL} className="font-heading text-[22px] text-teal-deep underline decoration-line underline-offset-[6px] transition-colors hover:decoration-amber">
                {PHONE_DISPLAY}
              </a>
            </motion.div>
          </motion.div>

          <motion.figure style={{ y: frameY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative mx-auto w-full max-w-[460px] lg:ml-auto">
            <motion.div style={{ clipPath: clip }} className="relative aspect-[4/5] overflow-hidden bg-sage">
              <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                <Image src="/photos/at-desk.webp" alt="Dr Wasif Raza, colon and rectal cancer surgeon, in his OPD at Apollo Medics Lucknow" fill priority sizes="(min-width: 1024px) 460px, 92vw" className="object-cover" style={{ objectPosition: "center 28%" }} />
              </motion.div>
            </motion.div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 font-mono text-[12px] uppercase tracking-[0.08em] text-ink-2">
              <span>Dr. Wasif Raza</span>
              <span>OPD, Apollo Medics</span>
            </figcaption>
          </motion.figure>
        </div>

        {/* Credentials ledger */}
        <dl className="grid grid-cols-2 border-t border-teal-deep/70 md:grid-cols-4">
          {LEDGER.map((c, i) => (
            <motion.div key={c.l} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 1 + i * 0.08 }} className={`px-1 py-6 md:px-6 ${i > 0 ? "md:border-l md:border-line" : ""} ${i % 2 === 1 ? "border-l border-line md:border-l" : ""} ${i > 1 ? "border-t border-line md:border-t-0" : ""}`}>
              <dt className="font-heading text-[clamp(26px,3vw,40px)] font-medium leading-none text-teal-deep">{c.n}</dt>
              <dd className="mt-2 font-mono text-[11.5px] uppercase tracking-[0.08em] text-ink-2">{c.l}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
