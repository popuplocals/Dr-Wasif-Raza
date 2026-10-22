import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import ArticleCard from "@/components/ArticleCard";
import ReadingProgress from "@/components/ReadingProgress";
import ArticleReader from "@/components/ArticleReader";
import { ARTICLE_BY_SLUG, ARTICLE_ORDER, readingTime, SOURCES } from "@/lib/articles";
import { SERVICE_BY_SLUG } from "@/content/services";
import { breadcrumbLd, faqLd, GMC, HOSPITAL, NMC, PHONE_DISPLAY, PHONE_TEL, SITE_URL, WHATSAPP } from "@/lib/site";
import { PhoneIcon, WaIcon } from "@/components/Navbar";

type Params = { slug: string };

const COUNTER: Record<string, { href: string; label: string } | undefined> = {"bawaseer-lakshan-karan-ilaj":{"href":"/articles/piles-vs-fissure-vs-fistula","label":"Read in English"},"piles-vs-fissure-vs-fistula":{"href":"/articles/bawaseer-lakshan-karan-ilaj","label":"हिन्दी में पढ़ें"},"pitt-ki-pathri-ka-operation":{"href":"/articles/gallstones-always-need-surgery","label":"Read in English"},"gallstones-always-need-surgery":{"href":"/articles/pitt-ki-pathri-ka-operation","label":"हिन्दी में पढ़ें"}};

export function generateStaticParams() {
  return ARTICLE_ORDER.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) return {};
  const title = `${a.title} | Dr. Wasif Raza`;
  return { title, description: a.meta, alternates: { canonical: `/articles/${a.slug}` }, openGraph: { title, description: a.meta, type: "article", url: `${SITE_URL}/articles/${a.slug}` } };
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const a = ARTICLE_BY_SLUG[slug];
  if (!a) notFound();
  const hi = a.lang === "hi";
  const related = a.related.map((r) => ARTICLE_BY_SLUG[r]).filter(Boolean).slice(0, 3);
  const service = a.serviceLink ? SERVICE_BY_SLUG[a.serviceLink.replace(/^\//, "")] : undefined;
  const sources = SOURCES[a.slug] ?? [];
  const ld = [
    breadcrumbLd([
      { name: "Home", href: "/" },
      { name: "Articles", href: "/articles" },
      { name: a.title, href: `/articles/${a.slug}` },
    ]),
    faqLd(a.faqs),
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: a.title,
      inLanguage: a.lang,
      url: `${SITE_URL}/articles/${a.slug}`,
      author: { "@type": "Physician", name: "Dr. Wasif Raza" },
      reviewedBy: { "@type": "Physician", name: "Dr. Wasif Raza" },
      publisher: { "@type": "Hospital", name: HOSPITAL },
    },
  ];

  return (
    <div lang={a.lang}>
      <ReadingProgress />
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Articles", href: "/articles" }, { label: a.category }]} eyebrow={`Know your health · ${a.category}${hi ? " · हिन्दी" : ""}`} heading={a.title} compact lang={a.lang}>
        <p className="text-[14px] text-bg/70">
          By Dr. Wasif Raza · {readingTime(a.html)} min read · Reviewed and approved by Dr. Wasif Raza <span className="text-bg/50">[date — added after documented sign-off]</span>
        </p>
      </PageHero>

      <section className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)] gap-12 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article>
          <ArticleReader lang={a.lang} counterpart={COUNTER[a.slug]}>
            <Reveal y={16} className={`prose-wr ${hi ? "font-hindi" : ""}`} dangerouslySetInnerHTML={{ __html: a.html }} />
          </ArticleReader>

          {a.faqs.length > 0 && (
            <div className="mt-14">
              <Reveal y={14}>
                <h2 className="text-[clamp(24px,3vw,32px)]">{hi ? "अक्सर पूछे जाने वाले सवाल" : "Questions"}</h2>
              </Reveal>
              <div className="mt-6">
                <Faq items={a.faqs} lang={a.lang} />
              </div>
            </div>
          )}

          {service && (
            <Reveal y={14} className="mt-10 rounded-2xl border border-teal/20 bg-teal-soft p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-teal">Treatment information</p>
              <Link href={`/${service.slug}`} className="mt-1 inline-flex items-center gap-2 font-heading text-[20px] font-semibold text-teal-deep hover:text-teal">
                {service.name} <span aria-hidden="true">→</span>
              </Link>
            </Reveal>
          )}

          {sources.length > 0 && (
            <Reveal y={14} className="mt-10">
              <h2 className="text-[20px]">{hi ? "स्रोत / Sources" : "Sources"}</h2>
              <ol className="mt-3 grid gap-2 pl-5 text-[14px] leading-relaxed text-ink-2 [&>li]:list-decimal">
                {sources.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </Reveal>
          )}

          <Reveal y={14} className="mt-10 flex gap-5 rounded-3xl border border-line bg-surface p-6 shadow-card">
            <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-amber/80 bg-teal" aria-hidden="true">
              <Image src="/photos/avatar.webp" alt="" fill sizes="56px" className="object-cover" />
            </span>
            <div className="text-[14.5px] leading-relaxed text-ink">
              <p className="font-heading text-[18px] font-semibold text-teal-deep">Dr. Wasif Raza</p>
              <p className="mt-1">MBBS, MS, MCh (Colon &amp; Rectal Surgery, UK), FRCS (UK), FACS (USA). Colon &amp; Rectal Cancer, Laparoscopic &amp; Robotic Surgery, and General Surgery Specialist, {HOSPITAL}, Lucknow. Reg. NMC {NMC} · GMC {GMC}.</p>
              <p className="mt-2 text-ink-2">
                Appointments: <a href={PHONE_TEL} className="font-semibold text-teal">{PHONE_DISPLAY}</a>. <i>This article is for information only and is not a substitute for a consultation. Individual results vary.</i>
              </p>
            </div>
          </Reveal>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal y={20} className="rounded-3xl bg-teal-deep p-6 text-bg shadow-lift">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-amber">Book a consultation</p>
            <p className="mt-3 text-[15px] text-bg/80">{HOSPITAL}, Lucknow</p>
            <a href={PHONE_TEL} className="mt-2 block font-heading text-[26px] font-semibold text-white hover:text-amber">
              {PHONE_DISPLAY}
            </a>
            <div className="mt-5 flex flex-col gap-2.5">
              <Link href="/contact" className="btn btn-amber w-full">
                Book Appointment
              </Link>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light w-full">
                <WaIcon size={16} /> WhatsApp reports
              </a>
              <a href={PHONE_TEL} className="btn btn-ghost-light w-full">
                <PhoneIcon size={16} /> Call now
              </a>
            </div>
          </Reveal>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="bg-sage/40">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <Reveal y={14}>
              <h2 className="text-[clamp(26px,3vw,36px)]">Read next</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((r, i) => (
                <ArticleCard key={r.slug} a={r} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </div>
  );
}
