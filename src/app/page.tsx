import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/home/Hero";
import AboutStrip from "@/components/home/AboutStrip";
import Theatre from "@/components/home/Theatre";
import Expertise from "@/components/home/Expertise";
import SymptomChecker from "@/components/home/SymptomChecker";
import Statement from "@/components/home/Statement";
import WhyBand from "@/components/home/WhyBand";
import Credentials from "@/components/home/Credentials";
import Stories from "@/components/home/Stories";
import GalleryStrip from "@/components/home/GalleryStrip";
import ArticleIndex from "@/components/home/ArticleIndex";
import Faq from "@/components/Faq";
import SectionHeading from "@/components/SectionHeading";
import BookSection from "@/components/contact/BookSection";
import Reveal from "@/components/Reveal";
import { HOME_FAQS } from "@/content/faqs";
import { ARTICLE_BY_SLUG } from "@/lib/articles";
import { faqLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dr Wasif Raza | Colorectal & Laparoscopic Surgeon in Lucknow",
  description:
    "Dr. Wasif Raza — colon & rectal cancer surgeon, laparoscopic & robotic (da Vinci Xi) surgery and general surgery specialist in Lucknow. UK-trained, FRCS · FACS, Apollo Medics. Call +91 92780 72150",
  alternates: { canonical: "/" },
};

const KNOW = ["colon-cancer-vs-rectal-cancer", "laparoscopic-vs-robotic-surgery", "early-signs-colorectal-cancer"];

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutStrip />
      <Theatre />
      <Expertise />
      <Statement />
      <SymptomChecker />
      <WhyBand />
      <Credentials />
      <Stories />
      <GalleryStrip />

      <ArticleIndex items={KNOW.map((s) => ARTICLE_BY_SLUG[s])} />

      <section className="bg-sage/40">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-20 md:px-10 md:py-28 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="FAQ" title="Questions patients ask before they call." />
            <Reveal y={12} delay={0.2} className="mt-6">
              <Link href="/faqs" className="btn btn-ghost">
                All FAQs
              </Link>
            </Reveal>
          </div>
          <Faq items={HOME_FAQS} />
        </div>
      </section>

      <BookSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd(HOME_FAQS)) }} />
    </>
  );
}
