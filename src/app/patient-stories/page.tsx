import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Reviews from "@/components/home/Reviews";
import { breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Stories & Reviews | Dr. Wasif Raza, Colorectal Surgeon Lucknow",
  description: "Real patient experiences with Dr. Wasif Raza — colon cancer, rectal cancer, hernia, gallbladder, piles and fistula surgery at Apollo Medics Lucknow.",
  alternates: { canonical: "/patient-stories" },
};

export default function StoriesPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Patient Stories" }]} eyebrow="Patient stories" heading="Patient Stories" subtitle="Real patient experiences are shown here as live Google reviews. Individual results vary." compact />
      <Reviews showHeading={false} />
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd([{ name: "Home", href: "/" }, { name: "Patient Stories", href: "/patient-stories" }])) }} />
    </>
  );
}
