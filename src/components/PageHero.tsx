"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { EASE } from "@/lib/motion";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  breadcrumbs?: Crumb[];
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  image?: { src: string; alt: string; position?: string };
  children?: React.ReactNode;
  lang?: string;
  compact?: boolean;
};

/**
 * Inner-page hero on a deep-teal field. The heading reveals word by word with a soft rise + rotation,
 * the subtitle follows, and an optional arch-framed photo parallaxes gently as the page scrolls.
 */
export default function PageHero({ breadcrumbs, eyebrow, heading, subtitle, image, children, lang, compact }: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 30, mass: 0.6 });
  const imgY = useTransform(smooth, [0, 1], [0, reduce ? 0 : 90]);
  const textY = useTransform(smooth, [0, 1], [0, reduce ? 0 : -50]);
  const words = heading.split(" ");

  return (
    <section ref={ref} className={`relative isolate overflow-hidden bg-teal-deep text-bg ${compact ? "pb-14 pt-10 md:pb-16 md:pt-14" : "pb-16 pt-10 md:pb-24 md:pt-16"}`} lang={lang}>
      <div aria-hidden="true" className="absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-teal/70 blur-[110px]" />
      <div aria-hidden="true" className="absolute -bottom-40 right-[20%] h-[360px] w-[360px] rounded-full bg-amber/10 blur-[100px]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 md:px-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
        <motion.div style={{ y: textY }}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-[12.5px] tracking-[0.04em] text-bg/60">
              {breadcrumbs.map((c, i) => (
                <span key={`${c.label}-${i}`} className="flex items-center gap-2">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-amber">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-bg/90">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span className="text-amber">/</span>}
                </span>
              ))}
            </nav>
          )}
          {eyebrow && (
            <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: EASE }} className="mb-5 flex items-center gap-3">
              <motion.span initial={{ width: 0 }} animate={{ width: 28 }} transition={{ duration: 0.6, ease: EASE, delay: 0.1 }} className="h-px bg-amber" />
              <span className="text-[12.5px] font-semibold uppercase tracking-[0.22em] text-amber">{eyebrow}</span>
            </motion.div>
          )}
          <h1 className="max-w-[16ch] text-[clamp(34px,5vw,60px)] font-semibold leading-[1.08] text-white">
            {words.map((w, i) => (
              <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 pr-[0.28em] align-top">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", rotate: 3, opacity: 0 }}
                  animate={{ y: 0, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.08 + i * 0.06 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 + words.length * 0.06 }}
              className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-bg/85 md:text-[18px]"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
          )}
          {children && (
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.3 + words.length * 0.06 }} className="mt-8">
              {children}
            </motion.div>
          )}
        </motion.div>

        {image && (
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
            className="relative mx-auto hidden w-full max-w-[380px] lg:block"
          >
            <div className="arch relative aspect-[4/5] w-full shadow-lift ring-1 ring-white/15">
              <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 380px, 0px" className="object-cover" style={{ objectPosition: image.position ?? "center top" }} priority />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-teal-deep/40 via-transparent to-transparent" />
            </div>
            <span aria-hidden="true" className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-[999px_999px_24px_24px] border border-amber/40" />
          </motion.div>
        )}
      </div>
    </section>
  );
}
