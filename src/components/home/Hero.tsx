"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { EASE } from "@/lib/motion";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";
import { WaIcon } from "@/components/Navbar";

const LINES = ["Colon & Rectal Cancer,", "Laparoscopic & Robotic Surgery,", "and General Surgery Specialist in"];

/** Text strip beneath the hero (text only, no institutional logos). */
const STRIP = ["FRCS — Royal College of Physicians & Surgeons of Glasgow", "FACS — American College of Surgeons", "MCh — University of East Anglia", "Apollo Medics Superspeciality Hospitals"];

/**
 * Hero (PDF section 3.1). Ruled editorial layout: the H1 reveals line by line; the portrait frame, scale and
 * position are tied to scroll position, so image and text move at different rates and reverse when scrolling back.
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
          <div className="h-px w-full bg-line">
            <motion.div style={{ width: ruleW }} className="h-px bg-teal-deep" />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-2">
            <span>Dr. Wasif Raza</span>
            <span>Apollo Medics · Lucknow</span>
          </div>
        </div>

        <div className="grid gap-10 pb-12 pt-10 md:pt-14 lg:min-h-[calc(100vh-230px)] lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-14 lg:pb-14">
          <motion.div style={{ y: textY }} className="relative z-10">
            <h1 className="text-[clamp(30px,4.2vw,64px)] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink">
              {LINES.map((t, i) => (
                <span key={t} className={`block overflow-hidden pb-[0.1em] ${i === 0 ? "text-teal" : ""}`}>
                  <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.95, ease: EASE, delay: 0.1 + i * 0.12 }} className="block">
                    {t}
                    {i === LINES.length - 1 && (
                      <>
                        {" "}
                        <span className="text-green">Lucknow</span>
                      </>
                    )}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.7 }} className="mt-8">
              <p className="text-[16px] font-semibold text-teal-deep md:text-[17px]">MBBS · MS · MCh (Colon &amp; Rectal Surgery) · FRCS (UK) · FACS (USA)</p>
              <p className="mt-1 text-[15px] text-ink-2 md:text-[16px]">Associate Director — Colorectal &amp; General Surgery, Apollo Medics Superspeciality Hospitals</p>
              <p className="mt-5 max-w-[46ch] text-[18px] leading-[1.6] text-ink md:text-[19px]">UK-trained. NHS-experienced. Robotic surgery on the da Vinci Xi at Apollo Medics Lucknow.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.85 }} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link href="/contact" className="btn btn-amber">
                Book Appointment
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <WaIcon size={16} /> WhatsApp
              </a>
              <a href={PHONE_TEL} className="font-heading text-[20px] font-bold text-teal-deep underline decoration-line underline-offset-[6px] transition-colors hover:decoration-amber">
                {PHONE_DISPLAY}
              </a>
            </motion.div>
          </motion.div>

          <motion.figure style={{ y: frameY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }} className="relative mx-auto w-full max-w-[460px] lg:ml-auto">
            <motion.div style={{ clipPath: clip }} className="relative aspect-[4/5] overflow-hidden bg-sage">
              <motion.div style={{ scale: imgScale }} className="absolute inset-0">
                <Image src="/photos/at-desk.webp" alt="Dr Wasif Raza colon and rectal cancer surgeon Lucknow Apollo Medics" fill priority sizes="(min-width: 1024px) 460px, 92vw" className="object-cover" style={{ objectPosition: "center 28%" }} />
              </motion.div>
            </motion.div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-2">
              <span>Dr. Wasif Raza</span>
              <span>OPD, Apollo Medics</span>
            </figcaption>
          </motion.figure>
        </div>

        {/* Credential strip: text, not logos */}
        <ul className="grid border-t border-teal-deep/70 sm:grid-cols-2 lg:grid-cols-4">
          {STRIP.map((s, i) => (
            <motion.li key={s} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 1 + i * 0.08 }} className={`flex items-center gap-3 px-1 py-5 text-[13.5px] font-semibold leading-snug text-teal-deep md:px-5 ${i > 0 ? "border-t border-line sm:border-t-0 lg:border-l" : ""} ${i === 1 ? "sm:border-l" : ""} ${i === 3 ? "sm:border-l" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""}`}>
              <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-amber" />
              {s}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
