import Image from "next/image";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const STATS = [
  { num: "15+", label: "Years in surgery" },
  { num: "8", label: "Years in NHS, UK" },
  { num: "2", label: "Global fellowships" },
  { num: "7", label: "Published research papers" },
];

export default function Numbers() {
  return (
    <section className="relative isolate overflow-hidden bg-teal-deep py-16 text-bg md:py-20">
      <Image src="/photos/ot-team.webp" alt="" aria-hidden="true" fill sizes="100vw" className="object-cover opacity-[0.15] blur-[2px]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-teal-deep via-teal-deep/80 to-teal-deep/60" />
      <div className="relative mx-auto grid max-w-[1400px] grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-10">
        {STATS.map((s, i) => (
          <Reveal key={s.label} index={i} y={20} className="border-l border-amber/40 pl-5">
            <CountUp value={s.num} className="block font-heading text-[clamp(44px,6vw,76px)] font-semibold leading-none text-white" />
            <span className="mt-2 block text-[13px] font-medium uppercase tracking-[0.16em] text-bg/70">{s.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
