import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { FAQ_GROUPS } from "@/content/faqs";
import { breadcrumbLd, faqLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs | Colorectal, Laparoscopic & General Surgery Questions | Dr. Wasif Raza Lucknow",
  description: "Answers to common questions about colon cancer, rectal cancer, hernia, gallbladder, appendix, piles, fissure and fistula surgery — by Dr. Wasif Raza, Apollo Medics Lucknow.",
  alternates: { canonical: "/faqs" },
};

export default function FaqPage() {
  const all = FAQ_GROUPS.flatMap((g) => g.items);
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "FAQs" }]} eyebrow="FAQs" heading="Questions patients ask, answered plainly." subtitle="If your question is not here, call +91 92780 72150 — we will guide you." compact />
      <section className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          <nav aria-label="FAQ sections" className="lg:sticky lg:top-28 lg:self-start">
            <Reveal y={10} className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:px-0">
              {FAQ_GROUPS.map((g) => (
                <a key={g.title} href={`#${slug(g.title)}`} className="shrink-0 rounded-full border border-line bg-surface px-4 py-2 text-[14px] font-medium text-teal-deep transition-[border-color,background-color,transform] duration-300 ease-spring hover:border-teal/40 hover:bg-teal-soft lg:rounded-xl">
                  {g.title}
                </a>
              ))}
            </Reveal>
          </nav>
          <div className="flex flex-col gap-14">
            {FAQ_GROUPS.map((g, gi) => (
              <div key={g.title} id={slug(g.title)} className="scroll-mt-32">
                <Reveal y={14}>
                  <h2 className="text-[clamp(24px,2.6vw,32px)]">{g.title}</h2>
                </Reveal>
                <div className="mt-5">
                  <Faq items={g.items} defaultOpen={gi === 0 ? 0 : null} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([faqLd(all), breadcrumbLd([{ name: "Home", href: "/" }, { name: "FAQs", href: "/faqs" }])]) }} />
    </>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
