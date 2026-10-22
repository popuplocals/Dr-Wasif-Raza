import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CtaBand from "@/components/CtaBand";
import { STORIES } from "@/content/stories";
import { breadcrumbLd, MAPS_LINK } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Stories & Reviews | Dr. Wasif Raza, Colorectal Surgeon Lucknow",
  description: "Real patient experiences with Dr. Wasif Raza — colon cancer, rectal cancer, hernia, gallbladder, piles and fistula surgery at Apollo Medics Lucknow.",
  alternates: { canonical: "/patient-stories" },
};

export default function StoriesPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Stories" }]} eyebrow="Patient stories" heading="In their words." subtitle="Experiences shared with written consent. No story names or criticises another doctor or hospital. Individual results vary." compact />
      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {STORIES.map((s, i) => (
            <Reveal key={s.tag} index={i % 3} y={24} className="break-inside-avoid rounded-3xl border border-line bg-surface p-7 shadow-card transition-transform duration-500 ease-spring hover:-translate-y-1" lang={s.lang}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-amber-dark">{s.tag}</p>
              <p className={`mt-4 font-heading text-[19px] leading-[1.55] text-teal-deep ${s.lang === "hi" ? "font-hindi" : ""}`}>&ldquo;{s.quote}&rdquo;</p>
              <footer className="mt-5 flex flex-wrap items-center gap-2 text-[14px] text-ink-2">
                — {s.who}
                {s.sample && <span className="rounded-full border border-amber/60 bg-amber-pale px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-amber-dark">Sample</span>}
              </footer>
            </Reveal>
          ))}
        </div>
        <Reveal y={20} className="mt-12 flex flex-col items-start gap-4 rounded-3xl bg-teal-deep p-8 text-bg md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-[26px] text-white">Treated by Dr. Raza?</h2>
            <p className="mt-2 text-bg/80">A short Google review helps the next patient find a specialist sooner.</p>
          </div>
          <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-amber">
            Review on Google
          </a>
        </Reveal>
      </section>
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd([{ name: "Home", href: "/" }, { name: "Patient Stories", href: "/patient-stories" }])) }} />
    </>
  );
}
