import { NextResponse } from "next/server";

export const revalidate = 86400; // refresh once a day

type GReview = { rating?: number; text?: { text?: string }; originalText?: { text?: string }; authorAttribution?: { displayName?: string } };

/**
 * Live Google reviews via the Places API (New). Needs two environment variables on Vercel:
 *   GOOGLE_PLACES_API_KEY  — a Places API key
 *   GOOGLE_PLACE_ID        — the place ID of "Dr Wasif Raza – Colorectal & General Surgeon"
 * Without them this returns an empty list and the site shows its placeholder stories instead.
 */
export async function GET() {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const id = process.env.GOOGLE_PLACE_ID;
  if (!key || !id) return NextResponse.json({ reviews: [], configured: false });
  try {
    const r = await fetch(`https://places.googleapis.com/v1/places/${id}`, {
      headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": "rating,userRatingCount,reviews" },
      next: { revalidate: 86400 },
    });
    if (!r.ok) return NextResponse.json({ reviews: [], configured: true });
    const j = (await r.json()) as { rating?: number; userRatingCount?: number; reviews?: GReview[] };
    const reviews = (j.reviews ?? [])
      .filter((v) => (v.rating ?? 0) >= 4 && (v.text?.text || v.originalText?.text))
      .map((v) => ({ quote: (v.text?.text || v.originalText?.text || "").slice(0, 320), who: v.authorAttribution?.displayName ?? "Google reviewer", rating: v.rating ?? 5 }))
      .slice(0, 5);
    return NextResponse.json({ reviews, rating: j.rating, count: j.userRatingCount, configured: true });
  } catch {
    return NextResponse.json({ reviews: [], configured: true });
  }
}
