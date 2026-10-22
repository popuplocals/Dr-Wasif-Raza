import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { breadcrumbLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery | Dr. Wasif Raza — Surgery, Training, Awards | Apollo Medics Lucknow",
  description: "Inside Dr. Wasif Raza's colorectal and laparoscopic surgery practice at Apollo Medics Lucknow — operating theatre, UK training, conferences and awards.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]} eyebrow="Gallery" heading="A look inside the practice." subtitle="Operating theatre, UK training, conferences, media and the Apollo Medics team. No patient is identifiable in any image." compact />
      <GalleryGrid />
      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd([{ name: "Home", href: "/" }, { name: "Gallery", href: "/gallery" }])) }} />
    </>
  );
}
