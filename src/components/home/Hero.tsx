"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { EASE } from "@/lib/motion";
import { CREDENTIALS, PHONE_DISPLAY, PHONE_TEL, ROLE, WHATSAPP } from "@/lib/site";
import { PhoneIcon, WaIcon } from "@/components/Navbar";

const H1 = "Colon & Rectal Cancer, Laparoscopic & Robotic Surgery, and General Surgery Specialist in Lucknow";

/**
 * Home hero: deep-teal field, headline reveals word by word, the arch-framed portrait rises in and
 * parallaxes on scroll while the copy eases up and fades as the section leaves the viewport.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.6 });
  const imgY = useTransform(smooth, [0, 1], [0, reduce ? 0 : 120]);
  const imgScale = useTransform(smooth, [0, 1], [1, reduce ? 1 : 1.06]);
  const copyY = useTransform(smooth, [0, 1], [0, reduce ? 0 : -70]);
  const copyOpacity = useTransform(smooth, [0, 0.7], [1, reduce ? 1 : 0]);
  const words = H1.split(" ");

  return (
    <section ref={ref} className="relative isolate overflow-hidden bg-teal-deep text-bg">
      <div aria-hidden="true" className="absolute -left-48 -top-32 h-[640px] w-[640px] rounded-full bg-teal blur-[120px]" />
      <div aria-hidden="true" className="absolute -bottom-40 right-[8%] h-[420px] w-[420px] rounded-full bg-amber/12 blur-[110px]" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 pb-20 pt-8 md:px-10 md:pt-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-28">
        <motion.div style={{ y: copyY, opacity: copyOpacity }}>
          <motion.p initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: EASE }} className="flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.22em] text-amber">
            <motion.span initial={{ width: 0 }} animate={{ width: 28 }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }} className="h-px bg-amber" />
            Dr. Wasif Raza
          </motion.p>
          <h1 className="mt-5 max-w-[18ch] text-[clamp(34px,5.2vw,64px)] font-semibold leading-[1.06] text-white">
            {words.map((w, i) => (
              <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 pr-[0.26em] align-top">
                <motion.span
                  className={`inline-block ${/Lucknow/.test(w) ? "text-amber" : ""}`}
                  initial={{ y: "110%", rotate: 3, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.75, ease: EASE, delay: 0.1 + i * 0.045 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.75 }} className="mt-6 font-heading text-[16px] text-bg/90 md:text-[17px]">
            {CREDENTIALS}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.85 }} className="mt-1.5 text-[15px] text-bg/70">
            {ROLE}, Apollo Medics Superspeciality Hospitals
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.95 }} className="mt-6 max-w-[50ch] text-[18px] leading-[1.6] text-bg/90 md:text-[20px]">
            UK-trained. NHS-experienced. Robotic surgery on the da Vinci Xi at Apollo Medics Lucknow.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 1.05 }} className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/contact" className="btn btn-amber">
              Book Appointment
            </Link>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
              <WaIcon size={16} /> WhatsApp
            </a>
            <a href={PHONE_TEL} className="flex items-center gap-2 py-2 font-heading text-[22px] font-semibold text-white transition-colors hover:text-amber">
              <PhoneIcon size={18} /> {PHONE_DISPLAY}
            </a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: imgY, scale: imgScale }} className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]">
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1.1, ease: EASE, delay: 0.3 }} className="relative">
            <div className="arch relative aspect-[4/5] w-full shadow-lift ring-1 ring-white/15">
              <Image src="/photos/portrait-seated.webp" alt="Dr Wasif Raza colon and rectal cancer surgeon Lucknow Apollo Medics" fill priority sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" style={{ objectPosition: "center 20%" }} />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-teal-deep/50 via-transparent to-transparent" />
            </div>
            <span aria-hidden="true" className="absolute -bottom-5 -left-5 -z-10 h-full w-full rounded-[999px_999px_24px_24px] border border-amber/40" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 1.1 }}
              className="absolute -right-3 bottom-8 rounded-2xl border border-white/15 bg-surface/95 p-4 text-ink shadow-lift backdrop-blur md:-right-10"
            >
              <p className="font-heading text-[30px] font-semibold leading-none text-teal">15+</p>
              <p className="mt-1 text-[12.5px] font-medium uppercase tracking-[0.12em] text-ink-2">Years in surgery</p>
              <div className="suture-amber my-2.5" />
              <p className="font-heading text-[30px] font-semibold leading-none text-teal">8</p>
              <p className="mt-1 text-[12.5px] font-medium uppercase tracking-[0.12em] text-ink-2">Years in the NHS, UK</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
