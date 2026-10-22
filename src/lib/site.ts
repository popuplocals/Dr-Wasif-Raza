export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dr-wasif-raza.vercel.app";
export const SITE_NAME = "Dr. Wasif Raza";
export const TAGLINE = "Colorectal & Laparoscopic Surgeon, Lucknow";
export const PHONE_DISPLAY = "+91 92780 72150";
export const PHONE_TEL = "tel:+919278072150";
export const WHATSAPP = "https://wa.me/919278072150";
export const WHATSAPP_MSG = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;
export const APOLLO247 = "https://www.apollo247.com/";
export const HOSPITAL = "Apollo Medics Superspeciality Hospitals";
export const ADDRESS_LINES = ["Sector B, LDA Colony, Lucknow–Kanpur Road", "Lucknow, Uttar Pradesh — 226012"];
export const ADDRESS = ADDRESS_LINES.join(", ");
export const OPD = "Monday – Saturday, by appointment";
export const NMC = "08-33828";
export const GMC = "7555694";
export const MAPS_LINK = "https://www.google.com/maps/search/?api=1&query=Apollo+Medics+Superspeciality+Hospitals+Lucknow";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Apollo+Medics+Superspeciality+Hospitals,+Sector+B,+LDA+Colony,+Kanpur+Road,+Lucknow&output=embed";
export const CREDENTIALS = "MBBS · MS · MCh (Colon & Rectal Surgery) · FRCS (UK) · FACS (USA)";
export const ROLE = "Associate Director — Colorectal & General Surgery";

export type NavLink = { href: string; label: string };
export type NavGroup = { label: string; links: NavLink[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "Colorectal Cancer",
    links: [
      { href: "/colon-cancer-surgeon-lucknow", label: "Colon Cancer Surgery" },
      { href: "/rectal-cancer-surgeon-lucknow", label: "Rectal Cancer Surgery" },
      { href: "/second-opinion-colon-rectal-cancer-lucknow", label: "Second Opinion for Colon & Rectal Cancer" },
    ],
  },
  {
    label: "Laparoscopic & Robotic",
    links: [
      { href: "/laparoscopic-robotic-surgeon-lucknow", label: "Laparoscopic & Robotic Surgery (da Vinci Xi)" },
      { href: "/hernia-surgery-lucknow", label: "Hernia Surgery" },
      { href: "/gallbladder-surgery-lucknow", label: "Gallbladder Stone Surgery" },
      { href: "/appendix-surgery-lucknow", label: "Appendix Surgery" },
    ],
  },
  {
    label: "General Surgery",
    links: [
      { href: "/gi-surgeon-lucknow", label: "General & GI Surgery" },
      { href: "/colonoscopy-lucknow", label: "Colonoscopy" },
      { href: "/rectal-bleeding-lucknow", label: "Rectal Bleeding" },
      { href: "/piles-treatment-lucknow", label: "Piles (Haemorrhoid) Surgery" },
      { href: "/anal-fissure-treatment-lucknow", label: "Anal Fissure Surgery" },
      { href: "/anal-fistula-surgery-lucknow", label: "Anal Fistula Surgery" },
    ],
  },
  {
    label: "Patient Info",
    links: [
      { href: "/patient-stories", label: "Patient Stories" },
      { href: "/gallery", label: "Gallery" },
      { href: "/articles", label: "Articles / Blog" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
];

export const PHYSICIAN_LD = {
  "@context": "https://schema.org",
  "@type": ["Physician", "MedicalBusiness"],
  "@id": `${SITE_URL}/#physician`,
  name: "Dr. Wasif Raza",
  url: SITE_URL,
  image: `${SITE_URL}/photos/portrait-seated.webp`,
  telephone: "+91 92780 72150",
  medicalSpecialty: ["Colorectal Surgery", "General Surgery", "Laparoscopic Surgery", "Robotic Surgery"],
  jobTitle: "Associate Director — Colorectal & General Surgery",
  worksFor: { "@type": "Hospital", name: HOSPITAL },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sector B, LDA Colony, Lucknow–Kanpur Road",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226012",
    addressCountry: "IN",
  },
  openingHours: "Mo-Sa by appointment",
  sameAs: [WHATSAPP],
};

export function breadcrumbLd(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE_URL}${it.href}` })),
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") },
    })),
  };
}
