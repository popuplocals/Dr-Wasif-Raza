import Link from "next/link";
import Reveal from "@/components/Reveal";
import { readingTime, type Article } from "@/lib/articles";

/** Articles as a ruled reading list instead of a card grid. */
export default function ArticleIndex({ items }: { items: Article[] }) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal y={14}>
            <p className="font-mono text-[12px] font-medium uppercase tracking-[0.12em] text-teal">Know your health</p>
          </Reveal>
          <Reveal y={22} delay={0.05}>
            <h2 className="mt-3 text-[clamp(30px,3.6vw,48px)] leading-[1.05] tracking-[-0.025em]">Plain-language reading, reviewed by Dr. Raza.</h2>
          </Reveal>
          <Reveal y={12} delay={0.12} className="mt-8">
            <Link href="/articles" className="font-mono text-[13px] font-medium uppercase tracking-[0.1em] text-teal-deep underline decoration-amber decoration-2 underline-offset-[8px]">
              All 12 articles →
            </Link>
          </Reveal>
        </div>
        <ol className="border-t border-teal-deep/70 lg:col-span-8">
          {items.map((a, i) => (
            <Reveal key={a.slug} y={12} duration={0.5} index={i}>
              <Link href={`/articles/${a.slug}`} lang={a.lang} className="group grid grid-cols-[40px_1fr_auto] items-baseline gap-x-4 border-b border-line py-6 transition-colors duration-300 hover:bg-sage/30 md:grid-cols-[56px_1fr_auto]">
                <span className="font-mono text-[13px] text-ink-2">0{i + 1}</span>
                <span>
                  <span className="block font-mono text-[11.5px] uppercase tracking-[0.1em] text-amber-dark">{a.category}</span>
                  <span className={`mt-1 block font-heading text-[clamp(21px,2.2vw,28px)] leading-[1.15] tracking-[-0.015em] text-teal-deep ${a.lang === "hi" ? "font-hindi" : ""}`}>{a.title}</span>
                </span>
                <span className="flex items-baseline gap-4 font-mono text-[12px] text-ink-2">
                  {readingTime(a.html)} min
                  <span aria-hidden="true" className="font-heading text-[22px] text-teal-deep transition-transform duration-500 ease-spring group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
