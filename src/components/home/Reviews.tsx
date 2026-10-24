"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { GBP_REVIEW_LINK, GOOGLE_RATING, MAPS_LINK } from "@/lib/site";

type Review = { quote: string; who: string; rating?: number };

/**
 * Google Reviews widget (PDF: live Google Reviews on Home and Patient Stories, with a "Review on Google" button).
 * It shows the listing's rating and, once GOOGLE_PLACES_API_KEY + GOOGLE_PLACE_ID are set on the host, the latest
 * genuine reviews pulled live from Google. Until then it shows only the rating and the links. No placeholder
 * reviews are ever rendered.
 */
export default function Reviews({ showHeading = true }: { showHeading?: boolean }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<{ score: string; count: number }>(GOOGLE_RATING);

  useEffect(() => {
    let off = false;
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((j) => {
        if (off) return;
        if (Array.isArray(j.reviews)) setReviews(j.reviews);
        if (j.rating && j.count) setRating({ score: Number(j.rating).toFixed(1), count: j.count });
      })
      .catch(() => {});
    return () => {
      off = true;
    };
  }, []);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28" aria-label="Patient stories and Google reviews">
      <div className="grid gap-10 lg:grid-cols-12">
        {showHeading && (
          <div className="lg:col-span-4">
            <Reveal y={14}>
              <h2 className="text-[clamp(26px,3.2vw,44px)] leading-[1.06] tracking-[-0.025em]">Patient stories</h2>
            </Reveal>
            <Reveal y={12} delay={0.08}>
              <p className="mt-4 text-[15px] text-ink-2">Individual results vary.</p>
            </Reveal>
          </div>
        )}
        <div className={showHeading ? "lg:col-span-8" : "lg:col-span-12"}>
          <Reveal y={18} className="flex flex-col gap-6 border-y border-teal-deep/70 py-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <span className="font-heading text-[clamp(44px,5vw,64px)] font-extrabold leading-none text-teal">{rating.score}</span>
              <div>
                <p className="text-[18px] tracking-[0.1em] text-amber" aria-hidden="true">
                  ★★★★★
                </p>
                <p className="text-[14px] font-semibold text-ink-2">{rating.count} Google reviews</p>
                <p className="text-[12.5px] text-ink-2">Dr Wasif Raza – Colorectal &amp; General Surgeon</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Read reviews on Google
              </a>
              <a href={GBP_REVIEW_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-amber">
                Review on Google
              </a>
            </div>
          </Reveal>

          {reviews.length > 0 && (
            <ul className="mt-8 grid gap-6 md:grid-cols-2">
              {reviews.map((r, i) => (
                <Reveal key={`${r.who}-${i}`} index={i} y={16}>
                  <li className="h-full list-none border-l-2 border-amber pl-5">
                    <p className="text-[16px] leading-[1.7] text-ink">“{r.quote}”</p>
                    <p className="mt-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-2">{r.who} · Google review</p>
                  </li>
                </Reveal>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
