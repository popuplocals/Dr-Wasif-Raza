import type { FaqItem } from "@/components/Faq";

export const HOME_FAQS: FaqItem[] = [
  { q: "What is Dr. Wasif Raza's specialisation?", a: "Colon and rectal cancer surgery, laparoscopic surgery, and general surgery — with an MCh in Colon &amp; Rectal Surgery (University of East Anglia, UK), FRCS (Glasgow) and FACS (USA), at Apollo Medics Lucknow." },
  { q: "Is laparoscopic surgery safe for colon cancer?", a: "Yes. It has equivalent cancer outcomes to open surgery, with less pain and faster recovery." },
  { q: "Does Dr. Raza perform robotic surgery?", a: "Yes. Dr. Raza performs robotic surgery on the da Vinci Xi system at Apollo Medics Lucknow for colorectal cancer, rectal cancer and complex hernia cases." },
  { q: "Can I get a second opinion for colon cancer?", a: "Yes. Bring your reports, scans and biopsy results. <a href=\"/second-opinion-colon-rectal-cancer-lucknow\">How a second opinion works</a>." },
  { q: "Is online consultation available?", a: "Yes — through Apollo 24|7." },
  { q: "How do I book an appointment?", a: "Call <a href=\"tel:+919278072150\">+91 92780 72150</a>, WhatsApp, or visit Apollo Medics Lucknow." },
];

export const FAQ_GROUPS: { title: string; items: FaqItem[] }[] = [
  {
    title: "About Dr. Raza",
    items: [
      { q: "What is Dr. Wasif Raza's specialisation?", a: "Colon and rectal cancer surgery, laparoscopic and robotic (da Vinci Xi) surgery, and general surgery — with an MCh in Colon &amp; Rectal Surgery from the UK." },
      { q: "What do FRCS and FACS mean?", a: "FRCS is Fellowship of the Royal College of Physicians &amp; Surgeons of Glasgow (UK); FACS is Fellowship of the American College of Surgeons (USA). Both are recognised international surgical credentials." },
      { q: "Where does he practise?", a: "Apollo Medics Superspeciality Hospitals, Sector B, LDA Colony, Lucknow–Kanpur Road, Lucknow — 226012." },
      { q: "Does he consult online?", a: "Yes — via Apollo 24|7." },
    ],
  },
  {
    title: "Colon & rectal cancer",
    items: [
      { q: "Is colorectal cancer curable?", a: "Stage 1–2: usually cured by surgery alone. Stage 3: surgery plus chemotherapy, good outcomes. Stage 4: treatable, sometimes curable depending on spread. Individual results vary." },
      { q: "Can cancer surgery be done laparoscopically?", a: "Yes — same cancer clearance as open surgery and faster recovery." },
      { q: "Will I need a colostomy bag?", a: "Rarely for colon cancer. For rectal cancer, most patients avoid a permanent bag with sphincter-saving surgery; some need a temporary one for a few months." },
      { q: "What is Watch & Wait?", a: "For rectal cancers that disappear completely after chemoradiotherapy, surgery may be deferred under close surveillance." },
      { q: "At what age should I have a screening colonoscopy?", a: "From 45–50 depending on the guideline followed. With a family history, from 40 — or 10 years before the youngest affected relative." },
    ],
  },
  {
    title: "Laparoscopic & robotic surgery",
    items: [
      { q: "Difference between laparoscopic and robotic?", a: "Both are keyhole. Robotic adds 3D vision and wristed instruments controlled from a console — most useful in the deep pelvis." },
      { q: "Is keyhole surgery more expensive?", a: "The procedure may cost more, but shorter stay and faster return to work usually balance it." },
      { q: "Can everyone have keyhole surgery?", a: "Most people. Extensive previous surgery or emergencies may need open surgery." },
    ],
  },
  {
    title: "Hernia",
    items: [
      { q: "Does a hernia always need surgery?", a: "Most symptomatic hernias should be repaired. For a small, symptom-free inguinal hernia, watchful waiting under a surgeon's review is an accepted option." },
      { q: "Can both sides be done together?", a: "Yes — laparoscopically in one sitting." },
      { q: "Is mesh safe?", a: "Yes; mesh repair is the global standard." },
      { q: "When can I lift weights?", a: "3–4 weeks after laparoscopic repair." },
    ],
  },
  {
    title: "Gallbladder",
    items: [
      { q: "Can I live without a gallbladder?", a: "Yes, completely normally." },
      { q: "Do silent gallstones need surgery?", a: "Not always — Dr. Raza will advise." },
      { q: "How long is the stay?", a: "Usually one night." },
    ],
  },
  {
    title: "Appendix",
    items: [
      { q: "Can appendicitis be treated with antibiotics?", a: "Sometimes, but 30–40% recur. Surgery is definitive." },
      { q: "How soon can my child go back to school?", a: "About one week." },
    ],
  },
  {
    title: "Piles, fissure & fistula",
    items: [
      { q: "How do I know if it's piles, fissure or fistula?", a: "Piles: bleeding and a lump. Fissure: sharp pain during stool with a streak of blood. Fistula: recurring boil with discharge. Only examination confirms." },
      { q: "Is bleeding always piles?", a: "No — it must be checked to rule out cancer." },
      { q: "Can fistula be cured without surgery?", a: "No." },
      { q: "Is piles surgery painful?", a: "Laser and stapled methods — minimal. Conventional surgery — some discomfort for a week." },
      { q: "Will fissure or fistula surgery affect bowel control?", a: "There is a small risk, mainly of minor and temporary leakage of wind. Technique is chosen to keep this risk as low as possible." },
    ],
  },
  {
    title: "Appointments & costs",
    items: [
      { q: "How do I book?", a: "Call or WhatsApp <a href=\"tel:+919278072150\">+91 92780 72150</a>, or book on Apollo 24|7." },
      { q: "What should I bring?", a: "All reports, scans, medication list." },
      { q: "What does surgery cost?", a: "Depends on procedure and approach — an estimate is given at consultation. For insurance and TPA, check with the Apollo Medics billing desk." },
    ],
  },
];
