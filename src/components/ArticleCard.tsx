import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { articleSummary, readingTime, type Article } from "@/lib/articles";

const ART: Record<string, string> = {
  "Colorectal Cancer": "/illustrations/colon-v2.webp",
  "Laparoscopic Surgery": "/illustrations/robotic-v2.webp",
  Hernia: "/illustrations/hernia-v2.webp",
  Gallbladder: "/illustrations/gallbladder-v2.webp",
  "Piles, Fissure & Fistula": "/illustrations/anorectal-v2.webp",
};

const ICONS: Record<string, React.ReactNode> = {
  "Colorectal Cancer": <ColonIcon />,
  "Laparoscopic Surgery": <ScopeIcon />,
  Hernia: <HerniaIcon />,
  Gallbladder: <GallIcon />,
  "Piles, Fissure & Fistula": <ColonIcon />,
};

export default function ArticleCard({ a, index = 0, number }: { a: Article; index?: number; number?: number }) {
  return (
    <Reveal index={index % 3} y={28} className="h-full">
      <Link href={`/articles/${a.slug}`} lang={a.lang} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-[transform,box-shadow,border-color] duration-500 ease-spring hover:-translate-y-2 hover:border-teal/30 hover:shadow-lift">
        <div className="relative aspect-[16/8] overflow-hidden bg-teal-soft">
          <Image src={ART[a.category] ?? "/illustrations/colon-v2.webp"} alt={`Illustration for ${a.category.toLowerCase()} — Dr Wasif Raza colorectal surgeon Apollo Medics Lucknow`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-[1100ms] ease-spring group-hover:scale-[1.06]" />
        </div>
        <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-soft text-teal transition-transform duration-500 ease-spring group-hover:rotate-6 group-hover:scale-110">{ICONS[a.category] ?? <ColonIcon />}</span>
          {number !== undefined && <span className="font-heading text-[13px] tracking-[0.16em] text-ink-2">{String(number).padStart(2, "0")}</span>}
        </div>
        <p className="mt-5 text-[11.5px] font-semibold uppercase tracking-[0.2em] text-amber-dark">
          {a.category}
          {a.lang === "hi" && " · हिन्दी"}
        </p>
        <h3 className={`mt-2 text-[21px] leading-snug transition-colors duration-300 group-hover:text-teal ${a.lang === "hi" ? "font-hindi" : ""}`}>{a.title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-2">{articleSummary(a)}</p>
        <div className="mt-5 flex items-center justify-between text-[13.5px] text-ink-2">
          <span>{readingTime(a.html)} min read</span>
          <span className="inline-flex items-center gap-1.5 font-semibold text-teal">
            Read <span aria-hidden="true" className="transition-transform duration-300 ease-spring group-hover:translate-x-1">→</span>
          </span>
        </div>
        </div>
      </Link>
    </Reveal>
  );
}

function ColonIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4v9a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H9" />
      <path d="M9 20v-4M15 20v-4" />
    </svg>
  );
}
function ScopeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20 14 10" />
      <circle cx="16.5" cy="7.5" r="3.5" />
      <path d="M4 20h3M4 20v-3" />
    </svg>
  );
}
function HerniaIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 14c3 0 3-3 6-3s3 3 6 3 3-3 6-3" />
      <path d="M9 11a3 3 0 0 1 6 0" strokeDasharray="2 2" />
    </svg>
  );
}
function GallIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c-1 3-1 5 0 7 2 3 5 4 5 8a5 5 0 0 1-10 0c0-4 3-5 5-8" />
    </svg>
  );
}
