"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY } from "@/content/gallery";
import { EASE } from "@/lib/motion";

const PICK = ["/photos/scrubs-ot.webp", "/photos/ot-team.webp", "/photos/apollo-colorectal-symposium.webp", "/photos/nhs-clatterbridge.webp", "/photos/convocation-award.webp", "/photos/summit-panel-mic.webp", "/photos/radio-city-mic.webp", "/photos/cme-podium.webp"];

export default function GalleryStrip() {
  const items = PICK.map((p) => GALLERY.find((g) => g.src === p)!).filter(Boolean);
  return (
    <section className="bg-sage/40">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading title="Inside the Practice" />
          <Link href="/gallery" className="btn btn-ghost">
            Full gallery <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="mt-12 columns-2 gap-4 md:columns-4 [&>*]:mb-4">
          {items.map((g, i) => (
            <motion.figure
              key={g.src}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: EASE, delay: (i % 4) * 0.08 }}
              className="group relative break-inside-avoid overflow-hidden rounded-2xl bg-surface shadow-card"
            >
              <Link href="/gallery" className="block">
                <Image src={g.src} alt={g.alt} width={g.w} height={g.h} sizes="(min-width: 768px) 25vw, 50vw" className="h-auto w-full object-cover transition-transform duration-[1100ms] ease-spring group-hover:scale-[1.05]" />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-teal-deep/85 to-transparent p-4 pt-10 text-[13px] text-white opacity-0 transition-[opacity,transform] duration-500 ease-spring group-hover:translate-y-0 group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </Link>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
