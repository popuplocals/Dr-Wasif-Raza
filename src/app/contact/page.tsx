import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import BookSection from "@/components/contact/BookSection";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { breadcrumbLd, GMC, NMC, ROLE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Dr. Wasif Raza | Book Appointment | Apollo Medics Lucknow",
  description: "Book an appointment with Dr. Wasif Raza, colorectal and laparoscopic surgeon at Apollo Medics Superspeciality Hospitals, Lucknow. Call +91 92780 72150 or WhatsApp.",
  alternates: { canonical: "/contact" },
};

const BRING = ["All previous reports, scans (CT/MRI/ultrasound), colonoscopy and biopsy reports", "List of current medications", "Referral letter, if any", "A family member — a second pair of ears helps"];

export default function ContactPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} eyebrow="Contact" heading="Book an appointment." subtitle={`Dr. Wasif Raza · ${ROLE} · Reg. No.: NMC (India) ${NMC} · GMC (UK) ${GMC}`} compact />
      <BookSection id="form" />
      <section className="bg-sage/40">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <SectionHeading eyebrow="Before you come" title="What to bring to your first consultation" />
            <ul className="mt-6 grid gap-3">
              {BRING.map((b, i) => (
                <Reveal key={b} index={i} y={12} duration={0.5} className="flex gap-3 rounded-2xl border border-line bg-surface p-4 text-[16px] text-ink">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-pale font-heading text-[13px] font-semibold text-amber-dark">{i + 1}</span>
                  {b}
                </Reveal>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Getting here" title="Lucknow–Kanpur Road" />
            <Reveal y={16} delay={0.1} className="mt-6 text-[17px] leading-[1.75] text-ink">
              Apollo Medics is on Lucknow–Kanpur Road, roughly 20–30 minutes from Charbagh railway station and 15–20 minutes from Amausi airport depending on traffic. Parking available.
            </Reveal>
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd([{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }])) }} />
    </>
  );
}
