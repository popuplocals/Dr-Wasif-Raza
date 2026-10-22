export type GalleryCategory = "In the OT" | "UK Training" | "Conferences & Awards" | "Media" | "Apollo Medics & Team";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  w: number;
  h: number;
  /** Optional short clip (mp4, muted, click-to-play). `src` is then the poster frame. */
  video?: string;
};

export const GALLERY_CATEGORIES: ("All" | GalleryCategory)[] = ["All", "In the OT", "UK Training", "Conferences & Awards", "Media", "Apollo Medics & Team"];

export const GALLERY: GalleryItem[] = [
  { src: "/photos/ot-video-1.webp", video: "/videos/ot-laparoscopic-1.mp4", alt: "Dr Wasif Raza performing laparoscopic surgery with the team, Apollo Medics Lucknow operating theatre", caption: "Laparoscopic surgery in progress — Apollo Medics OT (20 s clip)", category: "In the OT", w: 406, h: 720 },
  { src: "/photos/ot-video-2.webp", video: "/videos/ot-laparoscopic-2.mp4", alt: "Dr Wasif Raza operating the laparoscope during keyhole surgery, Apollo Medics Lucknow", caption: "Keyhole surgery: the same operation through 5 mm ports (10 s clip)", category: "In the OT", w: 406, h: 720 },
  { src: "/photos/scrubs-ot.webp", alt: "Dr Wasif Raza in scrubs outside the operating theatre, Apollo Medics Lucknow colorectal surgeon", caption: "Every surgery starts with a checklist", category: "In the OT", w: 1400, h: 1866 },
  { src: "/photos/ot-team.webp", alt: "Dr Wasif Raza with the operating theatre team, Apollo Medics Lucknow colorectal surgeon", caption: "The OT nursing and anaesthesia team", category: "In the OT", w: 1600, h: 1201 },
  { src: "/photos/nhs-clatterbridge.webp", alt: "Dr Wasif Raza at The Clatterbridge Cancer Centre NHS, Wirral, UK — NHS-era photo", caption: "NHS years — The Clatterbridge Cancer Centre, Wirral", category: "UK Training", w: 1088, h: 816 },
  { src: "/photos/convocation-stage.webp", alt: "Dr Wasif Raza in fellowship convocation robes on stage", caption: "Fellowship convocation", category: "UK Training", w: 1012, h: 1934 },
  { src: "/photos/convocation-award.webp", alt: "Dr Wasif Raza receiving his fellowship certificate at convocation", caption: "Receiving the fellowship certificate", category: "UK Training", w: 1600, h: 2074 },
  { src: "/photos/convocation-hall.webp", alt: "Dr Wasif Raza in convocation robes in the college hall", caption: "Convocation day", category: "UK Training", w: 1400, h: 1866 },
  { src: "/photos/convocation-group.webp", alt: "Dr Wasif Raza with fellow surgeons at convocation", caption: "With fellow surgeons at convocation", category: "UK Training", w: 1400, h: 1866 },
  { src: "/photos/apollo-colorectal-symposium.webp", alt: "Dr Wasif Raza with faculty at the 6th Apollo International Colorectal Symposium 2026", caption: "6th Apollo International Colorectal Symposium, 2026", category: "Conferences & Awards", w: 1400, h: 843 },
  { src: "/photos/summit-panel-mic.webp", alt: "Dr Wasif Raza speaking on a panel at the Health Care 360 Summit, Lucknow", caption: "Healthcare 360 Summit, Lucknow — panel on smart healthcare delivery", category: "Conferences & Awards", w: 1600, h: 1067 },
  { src: "/photos/summit-stage.webp", alt: "Dr Wasif Raza on stage at the 18th Health Care 360 Summit, Lucknow", caption: "18th Health Care 360 Summit, Sapphire Suites, Lucknow", category: "Conferences & Awards", w: 1400, h: 934 },
  { src: "/photos/summit-group.webp", alt: "Dr Wasif Raza with fellow speakers at the Health Care 360 Summit", caption: "With fellow speakers, Health Care 360 Summit", category: "Conferences & Awards", w: 1400, h: 934 },
  { src: "/photos/cme-podium.webp", alt: "Dr Wasif Raza presenting at a CME on colorectal surgery, Lucknow", caption: "CME — presenting on laparoscopic colorectal surgery", category: "Conferences & Awards", w: 1600, h: 901 },
  { src: "/photos/cme-presenting.webp", alt: "Dr Wasif Raza at the podium during a CME session", caption: "CME session, Lucknow", category: "Conferences & Awards", w: 1600, h: 901 },
  { src: "/photos/award-stage.webp", alt: "Dr Wasif Raza receiving an award on stage", caption: "Felicitation on stage", category: "Conferences & Awards", w: 1600, h: 1067 },
  { src: "/photos/podium-speech.webp", alt: "Dr Wasif Raza delivering a speech at a podium", caption: "Guest of honour address", category: "Conferences & Awards", w: 1600, h: 1067 },
  { src: "/photos/award-certificate.webp", alt: "Dr Wasif Raza receiving a certificate of appreciation", caption: "Certificate of appreciation", category: "Conferences & Awards", w: 1190, h: 1586 },
  { src: "/photos/award-college.webp", alt: "Dr Wasif Raza felicitated at a college function, Lucknow", caption: "Felicitation at a college annual function", category: "Conferences & Awards", w: 1280, h: 851 },
  { src: "/photos/school-talk.webp", alt: "Dr Wasif Raza speaking at a school event", caption: "Guest of honour — school founders' day", category: "Conferences & Awards", w: 860, h: 1714 },
  { src: "/photos/conference-table.webp", alt: "Dr Wasif Raza at a conference round-table", caption: "Conference round-table", category: "Conferences & Awards", w: 1190, h: 1586 },
  { src: "/photos/panel-discussion.webp", alt: "Dr Wasif Raza on a panel discussion", caption: "Panel discussion", category: "Conferences & Awards", w: 1600, h: 1067 },
  { src: "/photos/radio-city-mic.webp", alt: "Dr Wasif Raza at the Radio City 91.1 FM studio, Lucknow", caption: "Radio City 91.1 FM — talking bowel health", category: "Media", w: 1190, h: 1586 },
  { src: "/photos/radio-city-studio.webp", alt: "Dr Wasif Raza being interviewed at Radio City studio", caption: "On air at Radio City", category: "Media", w: 1400, h: 1050 },
  { src: "/photos/tv-sehat-aapki.webp", alt: "Dr Wasif Raza on the TV programme Sehat Aapki", caption: "TV — Sehat Aapki", category: "Media", w: 1400, h: 987 },
  { src: "/photos/portrait-news.webp", alt: "Dr Wasif Raza at the DD News studio", caption: "At the DD News studio", category: "Media", w: 1400, h: 1866 },
  { src: "/photos/consultation-suite.webp", alt: "Consultation suite nameplate — Dr Wasif Raza, Colorectal and General Surgery", caption: "Consultation suite", category: "Apollo Medics & Team", w: 1400, h: 1866 },
  { src: "/photos/at-desk.webp", alt: "Dr Wasif Raza at his desk in the OPD", caption: "In the OPD", category: "Apollo Medics & Team", w: 1600, h: 2133 },
  { src: "/photos/world-heart-day.webp", alt: "Dr Wasif Raza with a colleague at a World Heart Day event", caption: "World Heart Day with the team", category: "Apollo Medics & Team", w: 860, h: 1146 },
  { src: "/photos/walking-colleagues.webp", alt: "Dr Wasif Raza walking with colleagues outside the hospital", caption: "With colleagues", category: "Apollo Medics & Team", w: 1400, h: 934 },
  { src: "/photos/with-officials.webp", alt: "Dr Wasif Raza with district officials, Lucknow", caption: "Community health outreach with district officials", category: "Apollo Medics & Team", w: 1400, h: 1050 },
  { src: "/photos/summit-speaker-card.webp", alt: "Dr Wasif Raza speaker card, 18th Health Care 360 Summit, Lucknow", caption: "Speaker — 18th Health Care 360 Summit, Lucknow", category: "Conferences & Awards", w: 1280, h: 1258 },
  { src: "/photos/panel-seated.webp", alt: "Dr Wasif Raza seated on a conference panel, Lucknow", caption: "Panel session", category: "Conferences & Awards", w: 1600, h: 1067 },
  { src: "/photos/panel-group.webp", alt: "Dr Wasif Raza with fellow panellists at a conference", caption: "With fellow panellists", category: "Conferences & Awards", w: 1600, h: 1067 },
  { src: "/photos/gala-colleague.webp", alt: "Dr Wasif Raza with a colleague at a medical gala dinner", caption: "Gala evening with a colleague", category: "Apollo Medics & Team", w: 1190, h: 1586 },
  { src: "/photos/colleague-suits.webp", alt: "Dr Wasif Raza with a colleague at a hospital event", caption: "With a colleague", category: "Apollo Medics & Team", w: 860, h: 1146 },
  { src: "/photos/conference-room.webp", alt: "Dr Wasif Raza addressing a hospital meeting", caption: "Department meeting", category: "Apollo Medics & Team", w: 1600, h: 1067 },
];
