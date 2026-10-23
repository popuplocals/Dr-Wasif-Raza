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

## Round 2 (22 Oct 2026): new hero, illustrations, interactive components
- Hero is now a light editorial layout (`home/Hero.tsx`): masked line reveals, cursor spotlight, tilting portrait panel (`at-desk.webp`), floating credential chips, magnetic CTAs, Google rating pill.
- `public/illustrations/*.webp` — 9 AI-generated topic illustrations (Canva generate-image, 1600×900). Mapped per service via `illustration` in `services.ts`; used in service heroes (`PageHero figure`), home Expertise cards, SymptomChecker and ArticleCard headers. They are illustrations, not patient images, and the service hero says so.
- Interactive components: `ui/Magnetic`, `ui/TiltCard`, `ui/SpotlightCard`, `ui/ScrollText`, `home/SymptomChecker` (replaces the static table), `home/Statement`, `CompareSlider` (block type `compare`, used on laparoscopic + hernia pages).
- Google Business Profile "Dr Wasif Raza – Colorectal & General Surgeon": 5.0 from 218 reviews on 22 Oct 2026 (`GOOGLE_RATING` in site.ts — update by hand). The listing has no graphic logo; its profile headshot is now `photos/profile.webp` / `photos/avatar.webp` (navbar, footer, article byline, OG image). GBP hours say "Open 24 hours" while the site says Mon–Sat by appointment — align the GBP.

## Round 3 (23 Oct 2026): interactives
- Service pages: `AnatomyViewer` (hotspots in `content/anatomy.ts`, only colon/rectal/gallbladder/appendix), `RecoveryCalculator` (`content/recovery.ts`), `TreatmentJourney` (`content/journeys.ts`, per group). Second-opinion page: `contact/ReportDrop` (files never leave the device; it only lists them in the WhatsApp message).
- Contact: map is now the full-bleed background of `BookSection`; `BookingForm` is a 3-step wizard (sends via WhatsApp); `Checklist` remembers ticks in localStorage; `MapPin` drop.
- Site-wide: page-transition wipe (`template.tsx` + `.page-wipe`), `AskPanel` (FAQ matcher, bottom-left), `ArticleReader` (text size, Listen, EN/HI counterpart link), `about/CredentialBadges`, tilting gallery tiles.
- Live Google reviews: `/api/reviews` uses the Places API. Set GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID on Vercel (Place ID is not known yet; Maps CID is 3084555660444796987). Until then the sample stories show.
- Not built: animated stat bars. Hotspot positions were placed by eye against the generated images; re-check if illustrations are regenerated.

## Round 4 (23 Oct 2026): home-page operating-theatre section
- `home/Theatre.tsx` sits after the Numbers band. Desktop: pinned stage, 380vh tall; the four clips in `public/videos/ot-laparoscopic-1..4.mp4` enter, play and hand over as scroll progress moves, with captions and progress bars driven by the same scroll value (scrubs both ways). Phones: swipe rail, a clip plays when 60% visible.
- Clips 3 and 4 show an open surgical field with blood. They sit behind a blurred "Contains surgical footage / Tap to view" cover (`sensitive: true`). Ask Dr. Raza whether to publish them at all; remove the flag or the clip in `Theatre.tsx` accordingly.

## Round 5 (23 Oct 2026): type system and home-page redesign
- Fonts: Newsreader (headings, optical-size serif) + IBM Plex Sans (body) + IBM Plex Mono (eyebrow labels, captions, numerals) + Noto Sans Devanagari (Hindi). Replaced Fraunces + Source Sans 3. CSS vars: --font-newsreader, --font-plex, --font-plex-mono (mapped in globals.css @theme).
- System: squarer radii (Tailwind radius tokens lowered; `.btn` 3px), softer shadows, no blurred colour blobs or gradient washes, mono eyebrows, ruled (hairline) layouts instead of card grids.
- Home order: Hero (editorial, scroll-linked frame/photo), AboutStrip (editorial intro + career ledger), Theatre (video), Expertise (ruled index with sticky preview that follows hover/scroll), Statement, SymptomChecker, WhyBand, Credentials, Stories, GalleryStrip, ArticleIndex, FAQ, Book. Marquee and Numbers components are no longer used on the home page.
- Still time-triggered rather than scroll-scrubbed: the generic `Reveal` entrances. Scroll-linked: Hero, AboutStrip, Expertise, Theatre, Statement, TreatmentJourney, Credentials.
