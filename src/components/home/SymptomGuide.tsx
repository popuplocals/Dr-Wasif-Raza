import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

const ROWS = [
  { notice: "Blood in stool or change in bowel habits", wait: "It lasts over 2 weeks, or comes with weight loss", href: "/rectal-bleeding-lucknow" },
  { notice: "Diagnosed with colon or rectal cancer", wait: "You want a specialist colorectal surgeon's opinion", href: "/second-opinion-colon-rectal-cancer-lucknow" },
  { notice: "Bulge in groin or abdomen", wait: "It's growing, painful, or can't be pushed back", href: "/hernia-surgery-lucknow" },
  { notice: "Upper abdominal pain after fatty meals", wait: "It keeps recurring — likely gallstones", href: "/gallbladder-surgery-lucknow" },
  { notice: "Sudden lower-right abdominal pain", wait: "With fever or vomiting — possible appendicitis", href: "/appendix-surgery-lucknow" },
  { notice: "Pain, lump, or discharge near the anus", wait: "It keeps coming back", href: "/piles-treatment-lucknow" },
];

export default function SymptomGuide() {
  return (
    <section className="bg-sage/40">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <Reveal x={-30} y={0} duration={0.9} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          <div className="arch relative aspect-[4/5] shadow-lift">
            <Image src="/photos/consultation-suite.webp" alt="Dr Wasif Raza explaining bowel symptoms Lucknow — consultation suite, Apollo Medics" fill sizes="(min-width: 1024px) 480px, 90vw" className="object-cover" />
          </div>
          <span aria-hidden="true" className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[999px_999px_24px_24px] border-2 border-dashed border-sage-deep" />
        </Reveal>
        <div>
          <SectionHeading eyebrow="Symptom guide" title="When should you see a surgeon?" />
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
            <div className="grid grid-cols-[1fr_1fr_auto] gap-3 bg-teal-soft px-5 py-3 text-[12.5px] font-semibold uppercase tracking-[0.14em] text-teal-deep">
              <span>If you notice…</span>
              <span>Don&apos;t wait if…</span>
              <span className="w-6" />
            </div>
            {ROWS.map((r, i) => (
              <Reveal key={r.notice} index={i} y={12} duration={0.5}>
                <a href={r.href} className="group grid grid-cols-[1fr_1fr_auto] items-center gap-3 border-t border-line px-5 py-4 text-[15px] transition-colors duration-300 hover:bg-amber-pale/40">
                  <span className="font-semibold text-teal-deep">{r.notice}</span>
                  <span className="text-ink-2">{r.wait}</span>
                  <span aria-hidden="true" className="w-6 text-amber-dark opacity-0 transition-[opacity,transform] duration-300 ease-spring group-hover:translate-x-0.5 group-hover:opacity-100">→</span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal y={12} delay={0.2} className="mt-6 text-[16px] text-ink-2">
            Not sure? Call{" "}
            <a href={PHONE_TEL} className="font-semibold text-teal underline decoration-teal/30 underline-offset-4">
              {PHONE_DISPLAY}
            </a>{" "}
            — we&apos;ll guide you.
          </Reveal>
        </div>
      </div>
    </section>
  );
}
