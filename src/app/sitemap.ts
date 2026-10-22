import type { MetadataRoute } from "next";
import { SERVICES } from "@/content/services";
import { ARTICLE_ORDER } from "@/lib/articles";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = ["", "/about-dr-wasif-raza", "/patient-stories", "/gallery", "/faqs", "/articles", "/contact"].map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.7,
  }));
  const services = SERVICES.map((s) => ({ url: `${SITE_URL}/${s.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: s.group === "cancer" || s.slug.startsWith("laparoscopic") ? 0.9 : 0.8 }));
  const articles = ARTICLE_ORDER.map((a) => ({ url: `${SITE_URL}/articles/${a}`, lastModified: now, changeFrequency: "yearly" as const, priority: 0.6 }));
  return [...core, ...services, ...articles];
}
