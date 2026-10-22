# Dr. Wasif Raza — website (Next.js)

Colorectal & laparoscopic surgeon, Apollo Medics, Lucknow. Next.js 16 (App Router, Turbopack) + React 19 + Tailwind 4 + Framer Motion + Lenis. Static export-style build (every route prerendered). Dev: `npm run dev -- -p 3141` (or the `wasif-dev` launch config).

## Where things live
- `src/content/services.ts` — the 14 service pages (copy from the v4 FINAL content PDF, 22 Oct 2026). Each has blocks (`Blocks.tsx` renders them), FAQs, related links, hero image.
- `src/content/articles.json` — 12 launch articles (HTML bodies + FAQs), extracted from the earlier static site; 2 are Hindi (`lang: "hi"`). Order and Sources live in `src/lib/articles.ts`.
- `src/content/faqs.ts`, `gallery.ts`, `stories.ts` — FAQ page, gallery items, patient stories.
- `src/lib/site.ts` — NAP, phone, WhatsApp, OPD, NMC/GMC numbers, nav groups, JSON-LD helpers. `SITE_URL` reads `NEXT_PUBLIC_SITE_URL` (set it on Vercel once the domain is final).
- `public/photos/*.webp` — real photos supplied by the doctor (WhatsApp, 21 Oct 2026), all under 150 KB.

## Design system
Deep teal `#0F4C5C` / `#0A3540`, amber `#E6A23C` (CTAs only), off-white `#FAFAF7`, charcoal text, sage panels. Fraunces headings, Source Sans 3 body, Noto Sans Devanagari for Hindi. Signature: arch photo frames (`.arch`), dashed "suture" rules, one CTA colour. Tokens in `globals.css` `@theme`.

## Motion
Lenis smooth scroll (`SmoothScroll.tsx`), `Reveal` for scroll-triggered entrances, word-by-word hero reveals (`PageHero`, `home/Hero`), parallax via `useScroll`, scroll-driven horizontal credentials wall (`home/Credentials`), sticky-photo journey (`about/Journey`), count-ups, animated accordions, filterable masonry gallery with lightbox. Everything honours `prefers-reduced-motion`.

## Brief rules to keep
No stock photos. No Montserrat/Poppins. No "best / painless / permanent / guaranteed / only surgeon" claims. Keep "Individual results vary." Sticky Call | WhatsApp | Book bar on mobile. Piles/fissure/fistula stay secondary; colorectal cancer and laparoscopic & robotic lead.

## Before launch
1. Patient stories are SAMPLE text (flagged `sample: true`, visible badge). Replace with consented reviews or remove.
2. Article bylines show "[date — added after documented sign-off]" — fill after Dr. Raza signs off each article.
3. Contact form opens WhatsApp with a prefilled message; wire a backend/form service if a stored callback request is needed.
4. Set `NEXT_PUBLIC_SITE_URL` to the final domain; add the Google Business Profile link; verify NAP matches GBP character for character.
5. Hindi text was retyped from the PDF — have a Hindi reader proof it.

## Supplied media audit (22 Oct 2026)
38 WhatsApp photos → 36 used (all on the gallery; #20 "Welcoming" poster graphic and #25 printed programme page were skipped as non-photos). 4 OT videos → 2 used as click-to-play clips in Gallery › In the OT (`public/videos`); the other two show an open surgical field with visible blood and were left out — ask Dr. Raza before publishing those.
