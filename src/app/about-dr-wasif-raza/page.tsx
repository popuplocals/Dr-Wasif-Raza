import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import Journey from "@/components/about/Journey";
import { breadcrumbLd, GMC, NMC } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dr. Wasif Raza — UK-Trained Colorectal & General Surgeon in Lucknow | FRCS · FACS · MCh",
  description: "Dr. Wasif Raza — 15+ years in colorectal and general surgery, 8 years in UK NHS. MCh Colon & Rectal Surgery, FRCS (UK), FACS (USA). Associate Director, Apollo Medics Lucknow.",
  alternates: { canonical: "/about-dr-wasif-raza" },
};

const EDUCATION = [
  ["MBBS", "Garhwal University", "India"],
  ["MS — General Surgery", "Dr. RML Avadh University, UP", "India"],
  ["FMAS — Fellowship in Minimal Access Surgery", "AMASI (Association of Minimal Access Surgeons of India)", "India"],
  ["Colorectal Surgery Residency Programme — certificate", "Royal College of Surgeons of England", "UK"],
  ["MCh — Colon & Rectal Surgery (Principles of Coloproctology)", "University of East Anglia, Norwich", "UK"],
  ["FRCS — General Surgery", "Royal College of Physicians & Surgeons of Glasgow", "UK"],
  ["FACS (2023)", "American College of Surgeons", "USA"],
];

const EXPERTISE = [
  { title: "Colorectal & cancer surgery", items: ["Colon cancer surgery", "Rectal cancer surgery — TME, sphincter-preserving", "Watch & Wait for rectal cancer", "Laparoscopic & robotic colorectal resection", "IBD surgery — Crohn's, ulcerative colitis"] },
  { title: "Anorectal (proctology)", items: ["Piles — banding, laser, stapled, haemorrhoidectomy", "Anal fissure", "Anal fistula — LIFT, seton, VAAFT", "Pilonidal sinus", "Rectal prolapse"] },
  { title: "General, laparoscopic & robotic surgery", items: ["Robotic surgery — da Vinci Xi, Apollo Medics", "Laparoscopic & robotic hernia repair", "Laparoscopic cholecystectomy", "Laparoscopic appendicectomy", "Intestinal obstruction, diverticulitis"] },
  { title: "Endoscopy", items: ["Colonoscopy", "Upper GI endoscopy", "Colorectal cancer screening"] },
];

const RESEARCH = [
  "Cecal Bascule: A Rare Cause of Intestinal Obstruction",
  "Transanal Resection of Rectal Cancer: A Review",
  "The Most Influential COVID-19 Articles: A Systematic Review",
  "Congenital Infantile Hydrocele in an Adult Patient — A Rare Presentation",
  "Accessory Cystic Duct Identified in Laparoscopic Cholecystectomy — A Rare Case",
  "Abdominal Wall Closure After Midline Laparotomy — Comparative Study",
  "Postoperative Pain Assessment — Cross-Sectional Study, North Wales, UK",
];

const MEMBERSHIPS = ["FRCS — RCPS Glasgow", "FACS — American College of Surgeons", "European Society of Coloproctology", "European Society of Surgical Oncology", "AMASI"];

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About"
        heading="Who is Dr. Wasif Raza?"
        subtitle="An internationally trained Colorectal &amp; General Surgeon, bringing over 15 years of surgical experience — including 8 years of specialist practice in the United Kingdom's NHS. He serves as Associate Director of Colorectal &amp; General Surgery at Apollo Medics Superspeciality Hospitals, Lucknow."
        image={{ src: "/photos/portrait-news.webp", alt: "Dr Wasif Raza, UK-trained colorectal and general surgeon in Lucknow", position: "center 15%" }}
      />

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <Reveal y={24} className="text-[17.5px] leading-[1.75] text-ink">
            <p>
              He holds an <b>MCh in Colon &amp; Rectal Surgery</b> from the University of East Anglia, UK, alongside fellowships from both the Royal College of Physicians &amp; Surgeons of Glasgow (<b>FRCS</b>) and the American College of Surgeons (<b>FACS</b>).
            </p>
            <p className="mt-4">
              Residency training at Lok Nayak Hospital (New Delhi), PGIMER &amp; Dr. RML Hospital (New Delhi), and Era Hospital (Lucknow). Specialist modules at the University of East Anglia in Clinical Leadership &amp; Management, Integrated Research, and Colorectal Emergencies.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["15+", "Years in surgery"],
                ["8", "Years in NHS, UK"],
                ["2", "Global fellowships"],
                ["7", "Research papers"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl border border-line bg-surface p-4 shadow-card">
                  <p className="font-heading text-[32px] font-semibold leading-none text-teal">{n}</p>
                  <p className="mt-1.5 text-[12.5px] uppercase tracking-[0.12em] text-ink-2">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal x={30} y={0} scale={0.97} duration={0.9} className="relative mx-auto w-full max-w-[460px]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-lift">
              <Image src="/photos/nhs-clatterbridge.webp" alt="Dr Wasif Raza at The Clatterbridge Cancer Centre NHS, Wirral — NHS years" fill sizes="(min-width: 1024px) 460px, 90vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 text-center text-[13px] text-ink-2">The Clatterbridge Cancer Centre NHS Foundation Trust, Wirral — NHS years</figcaption>
          </Reveal>
        </div>
      </section>

      <Journey />

      <section className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionHeading eyebrow="Education & training" title="Qualifications" />
        <Reveal y={24} className="mt-10 overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-[15.5px]">
              <thead>
                <tr className="bg-teal-soft text-left text-[12.5px] uppercase tracking-[0.12em] text-teal-deep">
                  <th className="px-5 py-3 font-semibold">Qualification</th>
                  <th className="px-5 py-3 font-semibold">Institution</th>
                  <th className="px-5 py-3 font-semibold">Country</th>
                </tr>
              </thead>
              <tbody>
                {EDUCATION.map((r) => (
                  <tr key={r[0]} className="border-t border-line transition-colors hover:bg-amber-pale/30">
                    <td className="px-5 py-3.5 font-semibold text-teal-deep">{r[0]}</td>
                    <td className="px-5 py-3.5 text-ink">{r[1]}</td>
                    <td className="px-5 py-3.5 text-ink-2">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="bg-sage/40">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
          <SectionHeading eyebrow="Clinical expertise" title="What Dr. Raza treats" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {EXPERTISE.map((e, i) => (
              <Reveal key={e.title} index={i} y={24} className="rounded-2xl border border-line bg-surface p-6 shadow-card transition-transform duration-500 ease-spring hover:-translate-y-1">
                <h3 className="text-[19px]">{e.title}</h3>
                <ul className="mt-4 grid gap-2 text-[15px] text-ink">
                  {e.items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span aria-hidden="true" className="mt-[11px] h-[2px] w-2.5 shrink-0 bg-amber" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)] gap-12 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading eyebrow="Research & academics" title="Published work" text="Former Assistant Professor of Surgery, Era's Lucknow Medical College. Has presented at AMASICON and UP Chapter ASI conferences." />
          <ol className="mt-8 flex flex-col">
            {RESEARCH.map((r, i) => (
              <Reveal key={r} index={Math.min(i, 5)} y={12} duration={0.5} className="flex gap-4 border-t border-line py-3.5 text-[16px] text-ink first:border-t-0">
                <span className="font-heading text-[13px] font-semibold tracking-[0.12em] text-amber-dark">{String(i + 1).padStart(2, "0")}</span>
                {r}
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="flex flex-col gap-6">
          <Reveal y={20} className="rounded-3xl bg-teal-deep p-7 text-bg shadow-lift">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-amber">Registrations</p>
            <p className="mt-3 font-heading text-[20px] text-white">National Medical Commission (India) — {NMC}</p>
            <p className="mt-1 font-heading text-[20px] text-white">General Medical Council (UK) — {GMC}</p>
          </Reveal>
          <Reveal y={20} delay={0.1} className="rounded-3xl border border-line bg-surface p-7 shadow-card">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-teal">Memberships</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {MEMBERSHIPS.map((m) => (
                <span key={m} className="rounded-full border border-teal/20 bg-teal-soft px-3.5 py-1.5 text-[14px] font-medium text-teal-deep">
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal y={20} delay={0.15} className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-card">
            <Image src="/photos/apollo-colorectal-symposium.webp" alt="Dr Wasif Raza with faculty at the 6th Apollo International Colorectal Symposium 2026" fill sizes="(min-width: 1024px) 520px, 90vw" className="object-cover" />
          </Reveal>
        </div>
      </section>

      <CtaBand title="Book a consultation" text="Apollo Medics Superspeciality Hospitals, Lucknow · Online via Apollo 24|7 · Monday – Saturday, by appointment." />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd([{ name: "Home", href: "/" }, { name: "About Dr. Wasif Raza", href: "/about-dr-wasif-raza" }])) }} />
    </>
  );
}
