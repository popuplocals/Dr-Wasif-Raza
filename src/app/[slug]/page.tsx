import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Blocks from "@/components/Blocks";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import ArticleCard from "@/components/ArticleCard";
import { GROUP_LABEL, SERVICES, SERVICE_BY_SLUG } from "@/content/services";
import { ARTICLE_BY_SLUG } from "@/lib/articles";
import { breadcrumbLd, faqLd, HOSPITAL, PHONE_DISPLAY, PHONE_TEL, SITE_URL, WHATSAPP } from "@/lib/site";
import { PhoneIcon, WaIcon } from "@/components/Navbar";
import Image from "next/image";
import TreatmentJourney from "@/components/TreatmentJourney";
import RecoveryCalculator from "@/components/RecoveryCalculator";
import AnatomyViewer from "@/components/AnatomyViewer";
import { hasAnatomy } from "@/content/anatomy";
import ReportDrop from "@/components/contact/ReportDrop";
import { RECOVERY } from "@/content/recovery";

type Params = { slug: string };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICE_BY_SLUG[slug];
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url: `${SITE_URL}/${s.slug}`, images: [{ url: s.image }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const s = SERVICE_BY_SLUG[slug];
  if (!s) notFound();

  const related = s.related.map((r) => SERVICE_BY_SLUG[r]).filter(Boolean);
  const articles = s.articles.map((a) => ARTICLE_BY_SLUG[a]).filter(Boolean);
  const ld = [
    breadcrumbLd([
      { name: "Home", href: "/" },
      { name: GROUP_LABEL[s.group], href: `/${s.slug}` },
      { name: s.name, href: `/${s.slug}` },
    ]),
    faqLd(s.faqs),
    { "@context": "https://schema.org", "@type": "MedicalWebPage", name: s.h1, about: s.name, url: `${SITE_URL}/${s.slug}`, reviewedBy: { "@type": "Physician", name: "Dr. Wasif Raza" }, provider: { "@type": "Hospital", name: HOSPITAL } },
  ];

  return (
    <>
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: GROUP_LABEL[s.group] }, { label: s.name }]} eyebrow={s.eyebrow} heading={s.h1} subtitle={s.intro} image={{ src: s.image, alt: s.imageAlt }} figure={s.illustration ? { src: s.illustration, alt: s.imageAlt, caption: "Illustration — not a patient image" } : undefined}>
        <div className="flex flex-wrap gap-2">
          {s.highlights.map((h) => (
            <span key={h} className="rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[13.5px] text-bg backdrop-blur">
              {h}
            </span>
          ))}
        </div>
      </PageHero>

      {s.glance && (
        <div className="relative z-10 mx-auto -mt-8 max-w-[1400px] px-5 md:px-10">
          <Reveal y={20} className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-lift sm:grid-cols-2 lg:grid-cols-4">
            {s.glance.map((g) => (
              <div key={g.label} className="bg-surface px-5 py-4">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.16em] text-amber-dark">{g.label}</p>
                <p className="mt-1 font-heading text-[18px] font-semibold text-teal-deep">{g.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      )}

      <section className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(0,1fr)_340px]">
        <article>
          {s.illustration && hasAnatomy(s.slug) && <AnatomyViewer slug={s.slug} src={s.illustration} alt={s.imageAlt} />}
          {s.illustration && !hasAnatomy(s.slug) && (
            <Reveal y={16} className="relative mb-10 aspect-[16/9] overflow-hidden rounded-3xl shadow-card lg:hidden">
              <Image src={s.illustration} alt={s.imageAlt} fill sizes="100vw" className="object-cover" />
            </Reveal>
          )}
          <Blocks blocks={s.blocks} />
          {s.slug === "second-opinion-colon-rectal-cancer-lucknow" && <ReportDrop />}
          {RECOVERY[s.slug] && <RecoveryCalculator slug={s.slug} />}
          <TreatmentJourney group={s.group} />
          {s.hindi && (
            <Reveal y={14} className="mt-10 rounded-2xl border border-sage-deep bg-sage/50 p-5 text-[16.5px] leading-relaxed text-teal-deep">
              <span className="hi">{s.hindi}</span>
            </Reveal>
          )}

          <div className="mt-16">
            <Reveal y={14}>
              <h2 className="text-[clamp(26px,3vw,34px)]">Questions patients ask</h2>
            </Reveal>
            <div className="mt-6">
              <Faq items={s.faqs} />
            </div>
          </div>

          <Reveal y={12} className="mt-10 rounded-2xl border border-line bg-surface p-5 text-[14px] leading-relaxed text-ink-2">
            This page is for information only and is not a substitute for a consultation. Individual results vary. Reviewed by Dr. Wasif Raza, {HOSPITAL}, Lucknow.
          </Reveal>
        </article>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <Reveal y={20} className="rounded-3xl bg-teal-deep p-6 text-bg shadow-lift">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-amber">Book a consultation</p>
            <p className="mt-3 text-[15px] text-bg/80">{HOSPITAL}, Lucknow</p>
            <a href={PHONE_TEL} className="mt-2 block font-heading text-[28px] font-semibold text-white transition-colors hover:text-amber">
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
            <p className="mt-4 text-[12.5px] text-bg/60">Individual results vary.</p>
          </Reveal>

          {related.length > 0 && (
            <Reveal y={20} delay={0.1} className="mt-6 rounded-3xl border border-line bg-surface p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-teal">Related care</p>
              <ul className="mt-3 flex flex-col">
                {related.map((r) => (
                  <li key={r.slug} className="border-t border-line first:border-t-0">
                    <Link href={`/${r.slug}`} className="group flex items-center justify-between py-3 text-[15.5px] font-medium text-teal-deep transition-colors hover:text-teal">
                      {r.name}
                      <span aria-hidden="true" className="text-amber transition-transform duration-300 ease-spring group-hover:translate-x-1">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </aside>
      </section>

      {articles.length > 0 && (
        <section className="bg-sage/40">
          <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
            <Reveal y={14}>
              <p className="text-[12.5px] font-semibold uppercase tracking-[0.22em] text-teal">Read more</p>
              <h2 className="mt-3 text-[clamp(26px,3vw,36px)]">Know your health</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {articles.map((a, i) => (
                <ArticleCard key={a.slug} a={a} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}
