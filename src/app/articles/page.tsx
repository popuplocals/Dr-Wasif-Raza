import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import ArticlesGrid from "@/components/ArticlesGrid";
import { breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Patient Education Articles | Dr. Wasif Raza, Colorectal Surgeon Lucknow",
  description: "Plain-language articles on colon cancer, rectal cancer, hernia, gallstones, piles, fissure and fistula — reviewed by Dr. Wasif Raza, Apollo Medics Lucknow.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Articles" }]} eyebrow="Know your health" heading="Plain-language articles reviewed by Dr. Wasif Raza." subtitle="Because an informed patient makes better decisions. Twelve launch articles — cancer and robotic surgery first, anorectal conditions last — each with sources and a short FAQ." compact />
      <ArticlesGrid />
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd([{ name: "Home", href: "/" }, { name: "Articles", href: "/articles" }])) }} />
    </>
  );
}
