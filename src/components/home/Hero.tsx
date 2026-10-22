"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { EASE } from "@/lib/motion";
import { GBP_REVIEW_LINK, GOOGLE_RATING, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";
import { PhoneIcon, WaIcon } from "@/components/Navbar";
import Magnetic from "@/components/ui/Magnetic";
import TiltCard from "@/components/ui/TiltCard";

const LINES: { text: string; accent?: string }[] = [
  { text: "Colon & Rectal Cancer," },
  { text: "Laparoscopic & Robotic Surgery," },
  { text: "and General Surgery Specialist in", accent: "Lucknow" },
];

const CHIPS = [
  { label: "da Vinci Xi robotic surgery", pos: "left-[-6%] top-[14%]", delay: 1.2 },
  { label: "FRCS (UK) · FACS (USA)", pos: "right-[-8%] top-[38%]", delay: 1.4 },
  { label: "8 years in the UK NHS", pos: "left-[-4%] bottom-[22%]", delay: 1.6 },
];

/**
 * Home hero, light editorial layout. Headline reveals line by line through masks; the portrait panel
 * wipes in from the bottom, tilts toward the cursor and parallaxes on scroll; credential chips float
 * around it; an amber spotlight follows the pointer across the background; CTAs are magnetic.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Pointer spotlight on the background
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const spotlight = useMotionTemplate`radial-gradient(700px circle at ${sx}px ${sy}px, rgba(230,162,60,0.16), transparent 60%)`;

  // Scroll parallax
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.6 });
  const imgY = useTransform(smooth, [0, 1], [0, reduce ? 0 : 110]);
  const textY = useTransform(smooth, [0, 1], [0, reduce ? 0 : -60]);
  const textOpacity = useTransform(smooth, [0, 0.6], [1, reduce ? 1 : 0]);

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section ref={ref} onPointerMove={onMove} className="relative isolate overflow-hidden bg-bg">
      {/* Ambient background: drifting blobs, pointer spotlight, dot grid */}
      <motion.div aria-hidden="true" animate={reduce ? undefined : { x: [0, 40, 0], y: [0, -30, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-40 top-[-10%] h-[560px] w-[560px] rounded-full bg-sage/80 blur-[110px]" />
      <motion.div aria-hidden="true" animate={reduce ? undefined : { x: [0, -50, 0], y: [0, 40, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[-20%] right-[5%] h-[520px] w-[520px] rounded-full bg-amber-pale/90 blur-[120px]" />
      <motion.div aria-hidden="true" style={{ background: spotlight }} className="absolute inset-0 hidden lg:block" />
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(#0F4C5C22_1px,transparent_1px)] [background-size:26px_26px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-[1400px] items-center gap-12 px-5 pb-20 pt-10 md:px-10 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        {/* Copy */}
        <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE }} className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal/15 bg-surface/80 px-3 py-1.5 text-[12.5px] font-semibold text-teal-deep shadow-card backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
              </span>
              OPD Mon – Sat · Apollo Medics, Lucknow
            </span>
            <a href={GBP_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-amber/40 bg-amber-pale/70 px-3 py-1.5 text-[12.5px] font-semibold text-teal-deep transition-transform duration-300 ease-spring hover:-translate-y-0.5">
              <span className="text-amber-dark" aria-hidden="true">★★★★★</span> {GOOGLE_RATING.score} · {GOOGLE_RATING.count} Google reviews
            </a>
          </motion.div>

          <h1 className="mt-7 text-[clamp(36px,5.6vw,78px)] font-semibold leading-[1.02] tracking-[-0.02em] text-teal-deep">
            {LINES.map((l, i) => (
              <span key={i} className="block overflow-hidden pb-[0.08em]">
                <motion.span initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }} className="block">
                  {l.text}
                  {l.accent && (
                    <>
                      {" "}
                      <em className="relative inline-block font-[500] italic text-amber-dark">
                        {l.accent}
                        <motion.svg aria-hidden="true" viewBox="0 0 200 14" preserveAspectRatio="none" className="absolute -bottom-1 left-0 h-[0.18em] w-full">
                          <motion.path d="M2 10 C 40 2, 120 2, 198 9" fill="none" stroke="#E6A23C" strokeWidth="4" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, ease: EASE, delay: 1 }} />
                        </motion.svg>
                      </em>
                    </>
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.7 }} className="mt-7 max-w-[48ch] text-[18px] leading-[1.6] text-ink md:text-[20px]">
            UK-trained, NHS-experienced. MCh in Colon &amp; Rectal Surgery, FRCS and FACS. Laparoscopic and robotic surgery on the da Vinci Xi at Apollo Medics Lucknow — explained in plain language before any decision.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.85 }} className="mt-9 flex flex-wrap items-center gap-3">
            <Magnetic>
              <Link href="/contact" className="btn btn-amber px-7 py-4 text-[16px]">
                Book Appointment
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-ghost px-6 py-4 text-[16px]">
                <WaIcon size={16} /> WhatsApp
              </a>
            </Magnetic>
            <a href={PHONE_TEL} className="group ml-1 flex items-center gap-2 py-2 font-heading text-[22px] font-semibold text-teal-deep">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-soft text-teal transition-transform duration-500 ease-spring group-hover:rotate-12">
                <PhoneIcon size={16} />
              </span>
              {PHONE_DISPLAY}
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.3 }} className="mt-12 hidden items-center gap-3 text-[12.5px] uppercase tracking-[0.2em] text-ink-2 lg:flex">
            <span className="relative block h-10 w-px overflow-hidden bg-line">
              <motion.span animate={reduce ? undefined : { y: ["-100%", "100%"] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="absolute inset-x-0 top-0 h-1/2 bg-amber" />
            </span>
            Scroll
          </motion.div>
        </motion.div>

        {/* Portrait panel */}
        <motion.div style={{ y: imgY }} className="relative mx-auto w-full max-w-[520px] lg:justify-self-end">
          <motion.div initial={{ clipPath: "inset(100% 0 0 0 round 40px)" }} animate={{ clipPath: "inset(0% 0 0 0 round 40px)" }} transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}>
            <TiltCard max={6} className="rounded-[40px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] shadow-lift ring-1 ring-teal/10">
                <motion.div initial={{ scale: 1.15 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: EASE, delay: 0.35 }} className="absolute inset-0">
                  <Image src="/photos/at-desk.webp" alt="Dr Wasif Raza, colon and rectal cancer surgeon, in his OPD at Apollo Medics Lucknow" fill priority sizes="(min-width: 1024px) 520px, 92vw" className="object-cover" style={{ objectPosition: "center 28%" }} />
                </motion.div>
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-teal-deep/85 via-teal-deep/10 to-transparent" />
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 1.1 }} className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 text-bg">
                  <div>
                    <p className="font-heading text-[24px] font-semibold leading-tight text-white">Dr. Wasif Raza</p>
                    <p className="mt-1 text-[13px] text-bg/80">MBBS · MS · MCh · FRCS · FACS</p>
                    <p className="text-[13px] text-bg/70">Associate Director, Colorectal &amp; General Surgery</p>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-center backdrop-blur">
                    <p className="font-heading text-[26px] font-semibold leading-none text-amber">15+</p>
                    <p className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-bg/80">years</p>
                  </div>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>

          {CHIPS.map((c, i) => (
            <motion.span
              key={c.label}
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: c.delay }}
              className={`absolute hidden rounded-full border border-teal/10 bg-surface/95 px-3.5 py-2 text-[12.5px] font-semibold text-teal-deep shadow-lift backdrop-blur animate-float lg:block ${c.pos}`}
              style={{ animationDelay: `${i * 1.3}s` }}
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-amber align-middle" />
              {c.label}
            </motion.span>
          ))}
          <span aria-hidden="true" className="absolute -right-6 -top-6 -z-10 h-32 w-32 rounded-full border-2 border-dashed border-sage-deep" />
          <span aria-hidden="true" className="absolute -bottom-8 -left-8 -z-10 h-40 w-40 rounded-full bg-teal-soft" />
        </motion.div>
      </div>
    </section>
  );
}
