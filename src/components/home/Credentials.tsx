"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const WALL = [
  { title: "FRCS", sub: "Royal College of Physicians & Surgeons of Glasgow", country: "United Kingdom", img: "/photos/convocation-award.webp" },
  { title: "FACS", sub: "American College of Surgeons", country: "USA · 2023", img: "/photos/convocation-stage.webp" },
  { title: "MCh — Colon & Rectal Surgery", sub: "University of East Anglia, Norwich", country: "United Kingdom", img: "/photos/convocation-hall.webp" },
  { title: "Colorectal Surgery Residency Programme", sub: "Royal College of Surgeons of England", country: "United Kingdom", img: "/photos/nhs-clatterbridge.webp" },
  { title: "FMAS", sub: "Association of Minimal Access Surgeons of India", country: "India", img: "/photos/apollo-colorectal-symposium.webp" },
  { title: "MS — General Surgery", sub: "Dr. RML Avadh University, UP", country: "India", img: "/photos/consultation-suite.webp" },
];

/**
 * Credentials wall: a horizontal rail that is driven by the vertical scroll on desktop (the section is tall
 * and sticky; as you scroll, the cards slide across) and a swipeable rail on touch devices.
 */
export default function Credentials() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 70, damping: 24, mass: 0.6 });
  const x = useTransform(smooth, [0, 1], ["0%", "-52%"]);

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 pt-20 md:px-10 md:pt-28">
        <SectionHeading eyebrow="Credentials wall" title="Qualifications, exactly as the certificates read." text="No institutional logos — just the credentials, each one earned over years of training in India, the UK and the USA." />
      </div>

      {/* Desktop: scroll-driven horizontal rail */}
      <div ref={ref} className="relative hidden h-[220vh] lg:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6 pl-10">
            {WALL.map((c, i) => (
              <Card key={c.title} c={c} i={i} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Touch / small screens: swipe rail */}
      <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-20 md:px-10 lg:hidden" data-lenis-prevent>
        {WALL.map((c, i) => (
          <div key={c.title} className="w-[78vw] shrink-0 snap-center sm:w-[380px]">
            <Card c={c} i={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Card({ c, i }: { c: (typeof WALL)[number]; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, rotate: i % 2 ? 1.5 : -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 0.6 : -0.6 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: i * 0.05 }}
      className="group relative w-full shrink-0 overflow-hidden rounded-xl border-[10px] border-[#F3EEE4] bg-surface shadow-lift lg:w-[440px]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={c.img} alt={`Dr Wasif Raza ${c.title} certificate ${c.sub}`} fill sizes="(min-width: 1024px) 440px, 80vw" className="object-cover transition-transform duration-[1200ms] ease-spring group-hover:scale-105" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-teal-deep/70 to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-amber-dark">{c.country}</p>
        <h3 className="mt-1 text-[22px]">{c.title}</h3>
        <p className="mt-1 text-[14.5px] text-ink-2">{c.sub}</p>
      </div>
    </motion.article>
  );
}
