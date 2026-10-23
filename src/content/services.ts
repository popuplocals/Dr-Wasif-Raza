import type { Block } from "@/components/Blocks";
import type { FaqItem } from "@/components/Faq";

export type ServiceGroup = "cancer" | "lap" | "general";

export type Service = {
  slug: string;
  name: string; // short name for menus/cards
  h1: string;
  title: string; // <title>
  description: string; // meta description
  group: ServiceGroup;
  eyebrow: string;
  intro: string; // hero paragraph (inline HTML allowed)
  card: string; // one-liner for the home expertise card
  image: string; // /photos/*.webp (doctor photo)
  illustration?: string; // /illustrations/*.webp (generated topic illustration)
  imageAlt: string;
  highlights: string[]; // 3–4 chips under the hero
  glance?: { label: string; value: string }[]; // "At a glance" strip
  blocks: Block[];
  faqs: FaqItem[];
  related: string[]; // service slugs
  articles: string[]; // article slugs
  hindi?: string;
  priority?: boolean; // show on home expertise grid
};

export const GROUP_LABEL: Record<ServiceGroup, string> = {
  cancer: "Colorectal Cancer",
  lap: "Laparoscopic & Robotic",
  general: "General Surgery",
};

const BOOK = "Book a consultation: <a href=\"tel:+919278072150\">+91 92780 72150</a>";

export const SERVICES: Service[] = [
  {
    slug: "colon-cancer-surgeon-lucknow",
    illustration: "/illustrations/colon-v2.webp",
    name: "Colon Cancer Surgery",
    h1: "Colon Cancer Surgeon in Lucknow",
    title: "Colon Cancer Surgeon in Lucknow | Laparoscopic & Robotic Colon Cancer Surgery | Dr. Wasif Raza",
    description:
      "UK-trained colon cancer surgeon in Lucknow. Laparoscopic and robotic colon resection at Apollo Medics. FRCS (UK) · FACS (USA). Second opinions welcome. Call +91 92780 72150",
    group: "cancer",
    eyebrow: "Colorectal Cancer",
    intro:
      "Dr. Wasif Raza is a UK-trained colon cancer surgeon at Apollo Medics Superspeciality Hospitals, Lucknow — specialising in laparoscopic and robotic colon cancer surgery. If you or a family member has been diagnosed with colon cancer, or your colonoscopy has shown a suspicious growth, this page explains what happens next.",
    card: "Laparoscopic and robotic colon resection for early and advanced colon cancer. Second opinions welcome.",
    image: "/photos/ot-team.webp",
    imageAlt: "colon cancer surgery Lucknow laparoscopic — Dr Wasif Raza with the operating theatre team at Apollo Medics",
    highlights: ["MCh Colon & Rectal Surgery (UK)", "Laparoscopic & robotic (da Vinci Xi)", "Apollo Medics MDT review", "Second opinions welcome"],
    glance: [
      { label: "Approach", value: "Keyhole · Robotic · Open" },
      { label: "Hospital stay", value: "4–6 days (keyhole)" },
      { label: "Walking", value: "Next day" },
      { label: "Light work", value: "3–4 weeks" },
    ],
    priority: true,
    blocks: [
      { t: "h2", text: "What is colon cancer?" },
      {
        t: "p",
        html: "Colon cancer begins in the large intestine — usually from a small growth called a polyp that slowly turns cancerous over several years. It is one of the most common cancers in India and rising steadily across North India. When caught early, colon cancer is highly curable with surgery alone.",
      },
      { t: "h2", text: "Symptoms" },
      {
        t: "ul",
        items: [
          "Blood in stool, or dark, tarry stools",
          "Change in bowel habits lasting more than 2 weeks",
          "Persistent abdominal pain, cramping or bloating",
          "Unexplained weight loss",
          "Tiredness from anaemia",
          "A feeling that the bowel does not empty completely",
        ],
      },
      { t: "callout", tone: "amber", html: "Many early colon cancers cause no symptoms — which is why screening colonoscopy from age 45–50 matters." },
      { t: "h2", text: "Diagnosis" },
      {
        t: "ul",
        items: [
          "<b>Colonoscopy and biopsy</b> — the definitive test",
          "<b>CT scan</b> of chest, abdomen and pelvis — staging",
          "<b>CEA blood test</b> — tumour marker",
          "<b>Multidisciplinary review</b> — cases are discussed with oncologists, radiologists and pathologists at Apollo Medics where appropriate",
        ],
      },
      { t: "h2", text: "Colon cancer surgery — what Dr. Raza offers" },
      {
        t: "steps",
        items: [
          { title: "Laparoscopic colon cancer surgery (keyhole)", text: "The standard approach for most colon cancers. Four or five small incisions. Same cancer clearance as open surgery, less pain, 4–6 day stay, faster return to normal life." },
          { title: "Robotic colon surgery (da Vinci Xi)", text: "Dr. Raza performs robotic colon cancer surgery at Apollo Medics for selected cases — 3D magnified vision and wristed instruments give enhanced precision in difficult anatomy." },
          { title: "Open colon resection", text: "For very large tumours, emergency obstruction, or when previous surgery makes keyhole access unsafe." },
          { title: "After surgery", text: "The removed tissue is examined to confirm the stage. If chemotherapy is advised, Dr. Raza coordinates directly with Apollo Medics oncologists." },
        ],
      },
      { t: "h3", text: "Procedures" },
      { t: "chips", items: ["Right hemicolectomy", "Left hemicolectomy", "Sigmoid colectomy", "Extended colectomy", "Total colectomy", "Emergency surgery for obstructing colon cancer"] },
      { t: "h2", text: "Second opinion for colon cancer" },
      {
        t: "p",
        html: "Many patients come to Dr. Raza after a diagnosis elsewhere. A second opinion can confirm whether keyhole surgery is possible, whether surgery should come before or after chemotherapy, and whether the planned operation is the right one. Bring your colonoscopy report, biopsy, CT scan and blood tests. <a href=\"/second-opinion-colon-rectal-cancer-lucknow\">How a second opinion works →</a>",
      },
      { t: "h2", text: "Why choose Dr. Wasif Raza" },
      {
        t: "ul",
        items: [
          "MCh in Colon &amp; Rectal Surgery — University of East Anglia, UK",
          "8 years in the UK NHS, including Royal Liverpool University Hospital",
          "FRCS (UK) · FACS (USA)",
          "Laparoscopic and robotic (da Vinci Xi) colon cancer surgery",
          "Member, European Society of Coloproctology and European Society of Surgical Oncology",
        ],
      },
      { t: "p", html: BOOK + " · Apollo Medics Superspeciality Hospitals, Lucknow" },
    ],
    faqs: [
      { q: "Is colon cancer curable?", a: "Yes — Stage 1 and 2 are cured by surgery alone in most cases. Stage 3 is treated with surgery plus chemotherapy with good long-term outcomes. Individual results vary." },
      { q: "Will I need a colostomy bag?", a: "Rarely for colon cancer. In most cases the bowel is joined back in the same operation." },
      { q: "How long is recovery after laparoscopic colon surgery?", a: "Walk the next day, eat within 2–3 days, home in 4–6 days, light work in 3–4 weeks. Individual results vary." },
      { q: "Can colon cancer surgery be done laparoscopically or robotically in Lucknow?", a: "Yes — Dr. Raza performs laparoscopic and robotic (da Vinci Xi) colon cancer surgery at Apollo Medics Lucknow." },
      { q: "Colon cancer surgery cost in Lucknow", a: "Depends on stage, approach (laparoscopic / robotic / open) and hospital stay. An estimate is given at consultation." },
    ],
    related: ["rectal-cancer-surgeon-lucknow", "second-opinion-colon-rectal-cancer-lucknow", "laparoscopic-robotic-surgeon-lucknow", "colonoscopy-lucknow"],
    articles: ["colon-cancer-vs-rectal-cancer", "early-signs-colorectal-cancer", "laparoscopic-vs-robotic-surgery"],
  },

  {
    slug: "rectal-cancer-surgeon-lucknow",
    illustration: "/illustrations/rectal-v2.webp",
    name: "Rectal Cancer Surgery",
    h1: "Rectal Cancer Surgeon in Lucknow",
    title: "Rectal Cancer Surgeon in Lucknow | Sphincter-Saving & Robotic Rectal Surgery | Dr. Wasif Raza",
    description:
      "UK-trained rectal cancer surgeon in Lucknow. Laparoscopic & robotic rectal cancer surgery, sphincter-preserving TME, Watch & Wait protocol at Apollo Medics. Call +91 92780 72150",
    group: "cancer",
    eyebrow: "Colorectal Cancer",
    intro:
      "Rectal cancer is different from colon cancer. The rectum sits deep in the pelvis, close to the bladder, nerves and the anal sphincter — which is why rectal cancer surgery needs a surgeon trained specifically in it. Dr. Wasif Raza completed his MCh in Colon &amp; Rectal Surgery in the UK and trained in rectal cancer surgery at the Royal Liverpool University Hospital.",
    card: "UK-trained rectal cancer surgeon. Sphincter-preserving techniques and Watch & Wait surveillance for suitable patients.",
    image: "/photos/at-desk.webp",
    imageAlt: "rectal cancer surgeon Lucknow Dr Wasif Raza reviewing scans at his desk, Apollo Medics",
    highlights: ["Sphincter-preserving TME", "Robotic surgery on the da Vinci Xi", "Watch & Wait surveillance", "MRI-guided planning"],
    glance: [
      { label: "Key test", value: "Pelvic MRI" },
      { label: "Hospital stay", value: "5–7 days" },
      { label: "Normal activity", value: "4–6 weeks" },
      { label: "Permanent stoma", value: "Most patients avoid one" },
    ],
    priority: true,
    blocks: [
      { t: "h2", text: "Symptoms" },
      {
        t: "ul",
        items: ["Bright red blood in stool or on toilet paper", "A persistent urge to pass stool even after going", "Narrow or ribbon-like stools", "Pain or discomfort in the rectum", "Mucus discharge", "Change in bowel habit lasting over 2 weeks"],
      },
      { t: "callout", tone: "amber", html: "These are often mistaken for piles. If bleeding persists, a specialist examination and colonoscopy are essential." },
      { t: "h2", text: "Diagnosis and staging" },
      {
        t: "ul",
        items: ["Digital rectal examination", "Colonoscopy and biopsy", "<b>MRI of the pelvis</b> — the key test, showing tumour depth and whether the sphincter can be saved", "CT scan for distant spread", "MDT review at Apollo Medics"],
      },
      { t: "h2", text: "Treatment — a personalised pathway" },
      { t: "p", html: "Depending on stage, treatment may involve chemoradiotherapy before surgery to shrink the tumour, then surgery, and sometimes chemotherapy afterwards." },
      {
        t: "steps",
        items: [
          { title: "Sphincter-preserving surgery (Low Anterior Resection / TME)", text: "The goal in most rectal cancers is complete tumour removal while saving the anal sphincter — so you keep normal bowel control. Total Mesorectal Excision is the gold-standard technique Dr. Raza trained in within the UK." },
          { title: "Laparoscopic and robotic rectal cancer surgery (da Vinci Xi)", text: "Minimally invasive access into the narrow pelvis — the robot's 3D view and wristed instruments are especially valuable here for precise nerve preservation, less blood loss and faster recovery. Dr. Raza performs robotic rectal cancer surgery at Apollo Medics." },
          { title: "Abdominoperineal Resection (APR)", text: "For very low tumours involving the sphincter, where a permanent stoma gives the best cancer outcome. Dr. Raza discusses this openly and helps patients prepare." },
          { title: "Watch & Wait", text: "A small group of patients whose tumour disappears completely after chemoradiotherapy may avoid surgery altogether, under strict surveillance. Dr. Raza offers Watch & Wait surveillance within the Apollo Medics multidisciplinary team for suitable patients." },
          { title: "Transanal surgery", text: "For very early rectal cancers and large polyps — removal through the anus with no abdominal incision." },
        ],
      },
      { t: "h2", text: "Life after rectal cancer surgery" },
      { t: "p", html: "Dr. Raza guides patients through temporary stoma care (if needed), bowel function recovery, and long-term surveillance with colonoscopy and CEA testing." },
      { t: "p", html: BOOK },
    ],
    faqs: [
      { q: "Will I need a permanent colostomy bag?", a: "Most patients do not. A permanent stoma is needed only when the tumour directly involves the anal sphincter." },
      { q: "What is Watch & Wait?", a: "If the tumour shows a complete response to chemoradiotherapy, surgery may be deferred under close monitoring. Suitable only for carefully selected patients." },
      { q: "Is robotic rectal cancer surgery available in Lucknow?", a: "Yes — Dr. Raza performs robotic rectal cancer surgery on the da Vinci Xi at Apollo Medics Lucknow, where it offers an advantage in the deep pelvis." },
      { q: "Rectal cancer surgery cost in Lucknow", a: "Depends on stage, whether chemoradiotherapy is needed first, and the surgical approach. An estimate is given at consultation." },
      { q: "How long does recovery take?", a: "5–7 days in hospital, 4–6 weeks to normal activity. Bowel function improves over several months. Individual results vary." },
    ],
    related: ["colon-cancer-surgeon-lucknow", "second-opinion-colon-rectal-cancer-lucknow", "laparoscopic-robotic-surgeon-lucknow", "rectal-bleeding-lucknow"],
    articles: ["colostomy-bag-rectal-cancer", "colon-cancer-vs-rectal-cancer", "laparoscopic-vs-robotic-surgery"],
  },

  {
    slug: "second-opinion-colon-rectal-cancer-lucknow",
    illustration: "/illustrations/second-opinion-v2.webp",
    name: "Second Opinion — Colon & Rectal Cancer",
    h1: "Second Opinion for Colon & Rectal Cancer",
    title: "Second Opinion for Colon & Rectal Cancer in Lucknow | Dr. Wasif Raza",
    description:
      "Diagnosed with colon or rectal cancer? Get a specialist second opinion from UK-trained colorectal surgeon Dr. Wasif Raza at Apollo Medics Lucknow. Call +91 92780 72150",
    group: "cancer",
    eyebrow: "Colorectal Cancer",
    intro:
      "A cancer diagnosis is one of the biggest decisions of your life — and it is normal to want a second expert view before surgery. Dr. Wasif Raza regularly sees patients diagnosed elsewhere in Lucknow, Kanpur, Varanasi, Gorakhpur, Bareilly and across North India. A second opinion is not about distrust of your first doctor. It is about making sure the plan is right.",
    card: "A clear, written specialist view on stage, surgery choice, stoma risk and sequence of treatment.",
    image: "/photos/consultation-suite.webp",
    imageAlt: "Dr Wasif Raza consultation suite at Apollo Medics Lucknow — second opinion for colon and rectal cancer",
    highlights: ["In person or online via Apollo 24|7", "Cancer cases prioritised", "WhatsApp your reports", "Written opinion you can take anywhere"],
    blocks: [
      { t: "h2", text: "When a second opinion is worth getting" },
      {
        t: "ul",
        items: [
          "You have been told <b>open surgery is the only option</b> — laparoscopic or robotic surgery may be possible",
          "You have been told a <b>permanent colostomy bag is unavoidable</b> — sphincter-saving surgery may be possible",
          "Rectal cancer, and chemoradiotherapy before surgery has not been discussed",
          "You are unsure whether surgery should come before or after chemotherapy",
          "Stage 4 diagnosis and you have been told surgery is not an option",
          "You simply want to understand your options before deciding",
        ],
      },
      { t: "h2", text: "What Dr. Raza reviews" },
      { t: "ul", items: ["Colonoscopy and biopsy report", "CT scan and, for rectal cancer, MRI of the pelvis", "Blood tests including CEA", "Any treatment already given", "Your general health and fitness for surgery"] },
      { t: "p", html: "Where needed, your case is presented at the Apollo Medics multidisciplinary tumour board." },
      { t: "h2", text: "What you receive" },
      {
        t: "callout",
        tone: "teal",
        html: "A clear, written opinion covering: the stage of the cancer, whether the proposed operation is appropriate, whether minimally invasive surgery is possible, the likely need for a stoma, and the sequence of surgery and chemotherapy. You are free to take this back to your original doctor or continue with Dr. Raza.",
      },
      { t: "h2", text: "How to arrange it" },
      {
        t: "steps",
        items: [
          { title: "In person", text: "Apollo Medics Lucknow, Monday to Saturday, by appointment." },
          { title: "Online", text: "Via Apollo 24|7 — upload reports in advance." },
          { title: "WhatsApp your reports", text: "Send scans and reports to <a href=\"https://wa.me/919278072150\">+91 92780 72150</a> before your appointment." },
          { title: "Call", text: "<a href=\"tel:+919278072150\">+91 92780 72150</a> — cancer cases are prioritised for the earliest available slot." },
        ],
      },
    ],
    faqs: [
      { q: "Will my first doctor be offended?", a: "Second opinions are standard practice in cancer care worldwide." },
      { q: "Can I get a second opinion without travelling to Lucknow?", a: "Yes — online consultation with report review is available via Apollo 24|7." },
      { q: "How quickly can I get an appointment?", a: "Cancer cases are prioritised. Call for the earliest available slot." },
    ],
    related: ["colon-cancer-surgeon-lucknow", "rectal-cancer-surgeon-lucknow", "laparoscopic-robotic-surgeon-lucknow"],
    articles: ["colostomy-bag-rectal-cancer", "colon-cancer-vs-rectal-cancer", "laparoscopic-vs-robotic-surgery"],
  },

  {
    slug: "laparoscopic-robotic-surgeon-lucknow",
    illustration: "/illustrations/robotic-v2.webp",
    name: "Laparoscopic & Robotic Surgery",
    h1: "Laparoscopic & Robotic Surgeon in Lucknow",
    title: "Laparoscopic & Robotic Surgeon in Lucknow | da Vinci Xi Surgery | Dr. Wasif Raza",
    description:
      "Advanced laparoscopic and robotic surgeon in Lucknow. da Vinci Xi robotic and keyhole surgery for colon, rectal, hernia, gallbladder and appendix at Apollo Medics. UK-trained. Call +91 92780 72150",
    group: "lap",
    eyebrow: "Laparoscopic & Robotic",
    intro:
      "Minimally invasive surgery — laparoscopic (keyhole) and robotic — has transformed abdominal surgery: smaller incisions, less pain, lower infection risk, shorter stays, faster return to life. Dr. Wasif Raza completed a Fellowship in Minimal Access Surgery and spent 8 years performing laparoscopic colorectal and GI surgery in the UK NHS. At Apollo Medics Lucknow he performs both laparoscopic and robotic surgery on the da Vinci Xi system.",
    card: "Keyhole and da Vinci Xi robotic surgery for colon, rectal, hernia and GI conditions.",
    image: "/photos/scrubs-ot.webp",
    imageAlt: "robotic surgeon Lucknow da Vinci Xi Apollo Medics Dr Wasif Raza in scrubs outside the operating theatre",
    highlights: ["Fellowship in Minimal Access Surgery", "8 years of NHS keyhole surgery", "da Vinci Xi at Apollo Medics", "Honest advice on which approach"],
    glance: [
      { label: "Incisions", value: "3–5 small ports" },
      { label: "Return to work", value: "1–4 weeks" },
      { label: "Infection risk", value: "Lower" },
      { label: "Cancer outcomes", value: "Equal to open" },
    ],
    priority: true,
    blocks: [
      { t: "h2", text: "What is laparoscopic surgery?" },
      { t: "p", html: "Instead of one large cut, the surgeon makes 3–5 small incisions (5–12 mm). A camera and fine instruments are inserted and the operation is performed while viewing a magnified image. The same operation — with far less trauma." },
      { t: "h2", text: "Robotic surgery on the da Vinci Xi at Apollo Medics" },
      {
        t: "p",
        html: "Laparoscopic surgery with an added layer of precision. The surgeon controls robotic arms from a console with 3D HD vision and instruments that rotate beyond the human wrist. Particularly valuable in confined spaces like the pelvis — for rectal cancer and complex hernias. Apollo Medics Lucknow operates the da Vinci Xi, and Dr. Raza performs robotic colorectal, rectal cancer and hernia surgery on it.",
      },
      { t: "h2", text: "Laparoscopic vs open" },
      {
        t: "table",
        head: ["", "Laparoscopic / Robotic", "Open"],
        rows: [
          ["Incision", "3–5 small cuts", "One 10–20 cm cut"],
          ["Pain", "Low", "Moderate–high"],
          ["Hospital stay", "1–5 days", "5–10 days"],
          ["Return to work", "1–4 weeks", "4–8 weeks"],
          ["Scarring", "Minimal", "Visible"],
          ["Infection risk", "Lower", "Higher"],
        ],
      },
      { t: "compare" },
      { t: "h2", text: "Procedures performed laparoscopically and robotically" },
      {
        t: "ul",
        items: [
          "Colon cancer resection",
          "Rectal cancer surgery (TME)",
          "Hernia repair — inguinal, umbilical, incisional, ventral, recurrent",
          "Cholecystectomy",
          "Appendicectomy",
          "Bowel resection for diverticulitis, Crohn's, ulcerative colitis",
          "Adhesiolysis for intestinal obstruction",
          "Rectopexy for rectal prolapse",
        ],
      },
      { t: "h2", text: "Is keyhole surgery right for everyone?" },
      { t: "p", html: "Most patients are suitable. Previous extensive surgery, very large tumours or emergencies may require open surgery. Dr. Raza assesses each patient individually and explains why one approach is recommended." },
      { t: "p", html: BOOK },
    ],
    faqs: [
      { q: "Is laparoscopic surgery safe for cancer?", a: "Yes. International trials confirm equivalent cancer outcomes to open surgery for colon and rectal cancer." },
      { q: "Is robotic better than laparoscopic?", a: "Not always. Robotic surgery offers advantages in the deep pelvis and complex cases; for many routine operations laparoscopic gives equally excellent results." },
      { q: "Laparoscopic and robotic surgery cost in Lucknow", a: "Depends on the procedure; robotic surgery carries a higher equipment cost. Call +91 92780 72150 for a consultation and estimate." },
    ],
    related: ["hernia-surgery-lucknow", "gallbladder-surgery-lucknow", "colon-cancer-surgeon-lucknow", "rectal-cancer-surgeon-lucknow"],
    articles: ["laparoscopic-vs-robotic-surgery", "hernia-go-away-without-surgery", "gallstones-always-need-surgery"],
  },

  {
    slug: "hernia-surgery-lucknow",
    illustration: "/illustrations/hernia-v2.webp",
    name: "Hernia Surgery",
    h1: "Hernia Surgeon in Lucknow",
    title: "Hernia Surgeon in Lucknow | Laparoscopic & Robotic Hernia Surgery | Dr. Wasif Raza",
    description:
      "Hernia surgeon in Lucknow. Laparoscopic & robotic repair for inguinal, umbilical, incisional, ventral, bilateral & recurrent hernia at Apollo Medics. Daycare surgery. Call +91 92780 72150",
    group: "lap",
    eyebrow: "Laparoscopic & Robotic",
    intro:
      "A hernia is a weakness in the abdominal wall through which tissue or bowel pushes out, creating a visible bulge. Hernias never heal on their own and almost always enlarge over time. The real danger is <b>strangulation</b> — when bowel gets trapped and loses its blood supply, a surgical emergency. Dr. Wasif Raza performs laparoscopic and robotic hernia repair at Apollo Medics Lucknow.",
    card: "Laparoscopic and robotic repair for inguinal, umbilical, incisional, ventral, bilateral and recurrent hernias.",
    image: "/photos/portrait-news.webp",
    imageAlt: "laparoscopic hernia surgery Lucknow — Dr Wasif Raza, hernia surgeon at Apollo Medics",
    highlights: ["TEP / TAPP keyhole repair", "Robotic repair for complex hernias", "Both sides in one sitting", "Daycare or one night"],
    glance: [
      { label: "Hospital stay", value: "Daycare or 1 night" },
      { label: "Light work", value: "5–7 days" },
      { label: "Heavy lifting", value: "3–4 weeks" },
      { label: "Recurrence (inguinal)", value: "~1–4% published" },
    ],
    priority: true,
    hindi: "हर्निया का इलाज — लखनऊ में लेप्रोस्कोपिक और रोबोटिक हर्निया सर्जरी। Dr. Wasif Raza, Apollo Medics, लखनऊ: +91 92780 72150",
    blocks: [
      { t: "h2", text: "Types of hernia treated" },
      {
        t: "ul",
        items: [
          "<b>Inguinal</b> — groin; most common; may be bilateral.",
          "<b>Umbilical</b> — at the navel; after pregnancy or weight gain.",
          "<b>Incisional</b> — through a previous surgical scar.",
          "<b>Ventral / epigastric</b> — midline above the navel.",
          "<b>Femoral</b> — below the groin crease; higher strangulation risk.",
          "<b>Recurrent</b> — returned after previous repair; needs an experienced surgeon and usually a laparoscopic approach from a fresh plane.",
        ],
      },
      { t: "h2", text: "Symptoms" },
      {
        t: "ul",
        items: ["A lump that appears on standing, coughing or lifting, and disappears lying down", "Dragging discomfort or dull ache", "Pain worse with exertion"],
      },
      { t: "callout", tone: "amber", html: "<b>Emergency:</b> sudden severe pain, hard tender lump that won't go back, vomiting — go to hospital immediately." },
      { t: "h2", text: "Surgery options" },
      {
        t: "steps",
        items: [
          { title: "Laparoscopic repair — TEP and TAPP", text: "Three small incisions, mesh placed behind the muscle wall. Less pain and faster recovery than open repair; both sides repaired in one sitting for bilateral hernias. TEP is Dr. Raza's preferred approach for inguinal hernias." },
          { title: "Robotic hernia repair (da Vinci Xi)", text: "Dr. Raza performs robotic hernia surgery at Apollo Medics — particularly useful for complex incisional, ventral and recurrent hernias where precise mesh placement and suturing matter most." },
          { title: "Open mesh repair", text: "For some very large hernias or where previous surgery makes keyhole access unsafe." },
        ],
      },
      { t: "h2", text: "Recovery" },
      {
        t: "table",
        head: ["", "Laparoscopic / Robotic", "Open"],
        rows: [
          ["Hospital stay", "Daycare or 1 night", "1–2 nights"],
          ["Light work", "5–7 days", "10–14 days"],
          ["Heavy lifting", "3–4 weeks", "6 weeks"],
        ],
      },
      { t: "compare" },
      { t: "p", html: "Individual results vary. " + BOOK },
    ],
    faqs: [
      { q: "Can a hernia be treated without surgery?", a: "No. A hernia belt only hides the bulge. Surgery is the only cure." },
      { q: "Is mesh safe?", a: "Yes. Mesh repair is the global standard; published recurrence for inguinal hernia is around 1–4%. Incisional hernias carry a higher recurrence risk." },
      { q: "Can hernia come back after surgery?", a: "For inguinal hernia, published recurrence after mesh repair is low (around 1–4%). Incisional and recurrent hernias have a higher risk, which is discussed at consultation." },
      { q: "Hernia operation cost in Lucknow", a: "Depends on hernia type and approach (laparoscopic, robotic or open). Call +91 92780 72150 for an estimate." },
    ],
    related: ["laparoscopic-robotic-surgeon-lucknow", "gallbladder-surgery-lucknow", "appendix-surgery-lucknow", "gi-surgeon-lucknow"],
    articles: ["hernia-go-away-without-surgery", "laparoscopic-vs-robotic-surgery"],
  },

  {
    slug: "gallbladder-surgery-lucknow",
    illustration: "/illustrations/gallbladder-v2.webp",
    name: "Gallbladder Stone Surgery",
    h1: "Gallbladder Stone Surgery in Lucknow",
    title: "Gallbladder Surgeon in Lucknow | Laparoscopic Cholecystectomy | Gallstone Surgery | Dr. Wasif Raza",
    description:
      "Laparoscopic gallbladder stone surgery in Lucknow by UK-trained surgeon Dr. Wasif Raza. Laparoscopic cholecystectomy at Apollo Medics — one-night stay, fast recovery. Call +91 92780 72150",
    group: "lap",
    eyebrow: "Laparoscopic & Robotic",
    intro:
      "Gallstones (<span lang=\"hi\">पित्त की पथरी</span>) are among the most common reasons for abdominal surgery in India. Dr. Wasif Raza performs laparoscopic cholecystectomy — keyhole removal of the gallbladder — at Apollo Medics Lucknow as a safe, routine procedure with a one-night stay.",
    card: "Laparoscopic cholecystectomy. One-night stay.",
    image: "/photos/at-desk.webp",
    imageAlt: "gallbladder stone surgery Lucknow laparoscopic cholecystectomy — Dr Wasif Raza at Apollo Medics",
    highlights: ["3–4 small incisions", "Home in 24 hours", "Normal activity in 2 weeks", "ERCP coordinated when needed"],
    glance: [
      { label: "Operation time", value: "45–60 minutes" },
      { label: "Hospital stay", value: "24 hours, sometimes same day" },
      { label: "Light work", value: "5–7 days" },
      { label: "Normal activity", value: "2 weeks" },
    ],
    priority: true,
    hindi: "पित्त की पथरी का ऑपरेशन — लखनऊ में लेप्रोस्कोपिक (दूरबीन) सर्जरी, एक रात का अस्पताल में रहना। Dr. Wasif Raza, Apollo Medics, लखनऊ: +91 92780 72150",
    blocks: [
      { t: "h2", text: "Symptoms of gallstones" },
      {
        t: "ul",
        items: ["Pain in the upper right abdomen or below the breastbone, often after oily meals", "Pain radiating to the back or right shoulder", "Nausea, vomiting, bloating, indigestion"],
      },
      { t: "callout", tone: "amber", html: "<b>Warning signs:</b> fever, jaundice, severe continuous pain — need urgent care. Silent stones found on routine ultrasound do not always need surgery — Dr. Raza will advise." },
      { t: "h2", text: "Why remove the gallbladder, not just the stones?" },
      { t: "p", html: "The gallbladder that forms stones will keep forming them. Removal is the only lasting cure. You live a completely normal life without it." },
      { t: "h2", text: "Laparoscopic cholecystectomy — what to expect" },
      {
        t: "ul",
        items: ["3–4 small incisions; 45–60 minutes under general anaesthesia", "Walk the same evening, eat the next morning", "Home in 24 hours — sometimes same day", "Light work in 5–7 days; normal activity in 2 weeks"],
      },
      { t: "p", html: "In complicated cases — severe infection, bile-duct stones, previous surgery — Dr. Raza may coordinate ERCP with gastroenterology or, rarely, convert to open surgery for safety." },
      { t: "h3", text: "Conditions treated" },
      { t: "chips", items: ["Gallstones", "Acute cholecystitis", "Gallbladder polyps", "Biliary colic", "Bile duct stones (with ERCP)", "Gallstone pancreatitis"] },
      { t: "p", html: "Individual results vary. " + BOOK },
    ],
    faqs: [
      { q: "Can gallstones be dissolved with medicine?", a: "Rarely, and they return. Surgery is the only reliable cure for symptomatic stones." },
      { q: "Is gallbladder surgery safe?", a: "Laparoscopic cholecystectomy is one of the safest and most common operations worldwide." },
      { q: "Will my digestion change?", a: "Most people notice no difference. A few have loose stools with very fatty food initially, which settles within weeks." },
      { q: "Gallbladder surgery cost in Lucknow", a: "Depends on whether the case is routine or complicated. Call +91 92780 72150 for a consultation and estimate." },
    ],
    related: ["laparoscopic-robotic-surgeon-lucknow", "hernia-surgery-lucknow", "appendix-surgery-lucknow", "gi-surgeon-lucknow"],
    articles: ["gallstones-always-need-surgery", "pitt-ki-pathri-ka-operation"],
  },

  {
    slug: "appendix-surgery-lucknow",
    illustration: "/illustrations/appendix-v2.webp",
    name: "Appendix Surgery",
    h1: "Appendix Surgery in Lucknow",
    title: "Appendix Surgeon in Lucknow | Laparoscopic Appendicectomy | Appendicitis Surgery | Dr. Wasif Raza",
    description: "Laparoscopic appendix surgery in Lucknow at Apollo Medics by Dr. Wasif Raza. Emergency and planned appendicectomy, UK-trained surgeon. Call +91 92780 72150",
    group: "lap",
    eyebrow: "Laparoscopic & Robotic",
    intro:
      "Appendicitis is a surgical emergency. When the appendix becomes inflamed it can burst within 48–72 hours, causing serious infection. Dr. Wasif Raza performs laparoscopic appendicectomy at Apollo Medics Lucknow — emergency and planned.",
    card: "Laparoscopic appendicectomy for acute and recurrent appendicitis.",
    image: "/photos/ot-team.webp",
    imageAlt: "appendix surgery Lucknow laparoscopic appendicectomy — Dr Wasif Raza with the Apollo Medics operating theatre team",
    highlights: ["Emergency and planned", "Three small incisions", "Home in 1–2 days", "Safe in children"],
    glance: [
      { label: "Home", value: "24–48 hours" },
      { label: "Normal diet", value: "2–3 days" },
      { label: "School / desk work", value: "1 week" },
      { label: "Sports", value: "2–3 weeks" },
    ],
    priority: true,
    blocks: [
      { t: "h2", text: "Symptoms" },
      {
        t: "ul",
        items: ["Pain starting around the navel and moving to the lower right abdomen", "Worse with movement, coughing or pressing", "Loss of appetite, nausea, vomiting", "Low-grade fever", "In children and the elderly, symptoms can be unusual — don't wait"],
      },
      { t: "callout", tone: "amber", html: "If you suspect appendicitis, come to Apollo Medics emergency immediately." },
      { t: "h2", text: "Diagnosis" },
      { t: "p", html: "Clinical examination, blood tests, and ultrasound or CT scan when needed." },
      { t: "h2", text: "Laparoscopic appendicectomy" },
      { t: "p", html: "Three small incisions. The appendix is removed and the abdomen washed out if infected. Less pain, lower wound infection, home in 1–2 days. Laparoscopy also lets Dr. Raza inspect the rest of the abdomen when the diagnosis is uncertain." },
      {
        t: "ul",
        items: ["<b>Recurrent or chronic appendicitis</b> — planned laparoscopic removal prevents a future emergency.", "<b>Appendix mass or abscess</b> — antibiotics and drainage first, planned removal after 6–8 weeks."],
      },
      { t: "h2", text: "Recovery" },
      { t: "chips", items: ["Home in 24–48 hours", "Normal diet in 2–3 days", "School or desk work in 1 week", "Sports in 2–3 weeks"] },
      { t: "p", html: "Individual results vary. Emergency &amp; appointments: <a href=\"tel:+919278072150\">+91 92780 72150</a>" },
    ],
    faqs: [
      { q: "Can appendicitis be treated with antibiotics only?", a: "In selected mild cases, yes — but 30–40% recur within a year. Surgery remains definitive." },
      { q: "Is appendix surgery safe for children?", a: "Yes. Laparoscopic appendicectomy is safe and well-tolerated in children." },
      { q: "What happens if the appendix bursts?", a: "Peritonitis — a serious infection needing urgent surgery and a longer stay. This is why early surgery matters." },
      { q: "Appendix operation cost in Lucknow", a: "Depends on whether surgery is planned or emergency and on the hospital stay. An estimate is given at consultation." },
    ],
    related: ["laparoscopic-robotic-surgeon-lucknow", "gallbladder-surgery-lucknow", "hernia-surgery-lucknow", "gi-surgeon-lucknow"],
    articles: ["laparoscopic-vs-robotic-surgery"],
  },

  {
    slug: "gi-surgeon-lucknow",
    illustration: "/illustrations/colon-v2.webp",
    name: "General & GI Surgery",
    h1: "General & GI Surgeon in Lucknow",
    title: "GI Surgeon in Lucknow | Intestinal Obstruction, Diverticulitis & Bowel Surgery | Dr. Wasif Raza",
    description:
      "General and gastrointestinal surgeon in Lucknow. Laparoscopic bowel surgery, intestinal obstruction, diverticulitis, small bowel surgery at Apollo Medics. UK-trained. Call +91 92780 72150",
    group: "general",
    eyebrow: "General Surgery",
    intro: "Beyond colorectal cancer, Dr. Wasif Raza manages the full range of abdominal and gastrointestinal surgical conditions at Apollo Medics Lucknow — most of them laparoscopically.",
    card: "Intestinal obstruction, diverticulitis, small bowel surgery.",
    image: "/photos/scrubs-ot.webp",
    imageAlt: "GI surgeon Lucknow Dr Wasif Raza in scrubs at Apollo Medics",
    highlights: ["Laparoscopic bowel surgery", "Emergency obstruction care", "IBD and diverticular surgery", "Upper & lower GI endoscopy"],
    priority: true,
    blocks: [
      { t: "h2", text: "Intestinal obstruction" },
      { t: "p", html: "A blockage from adhesions, hernias, tumours or twisting (volvulus). Symptoms: cramping pain, vomiting, bloating, inability to pass wind or stool. An emergency. Dr. Raza performs laparoscopic adhesiolysis and bowel resection as needed." },
      { t: "h2", text: "Diverticulitis and diverticular disease" },
      { t: "p", html: "Small pouches in the colon wall, common after 40. When inflamed they cause left-sided abdominal pain, fever and change in bowel habit. Most episodes settle with antibiotics. Recurrent attacks, abscess, perforation or narrowing may need laparoscopic sigmoid colectomy." },
      { t: "h2", text: "Small bowel surgery" },
      { t: "p", html: "Tumours, strictures, Crohn's disease, Meckel's diverticulum, small-bowel bleeding." },
      { t: "h2", text: "Inflammatory bowel disease (IBD)" },
      { t: "p", html: "Surgery for Crohn's disease and ulcerative colitis when medicines are not enough — strictureplasty, resection, colectomy, pouch surgery." },
      { t: "h2", text: "Other conditions" },
      {
        t: "steps",
        items: [
          { title: "Rectal prolapse", text: "Laparoscopic rectopexy." },
          { title: "Colonic polyps", text: "Large polyps not removable by colonoscopy — laparoscopic segmental resection." },
          { title: "Abdominal lumps, lipomas, skin lesions", text: "Day-care removal under local or general anaesthesia." },
          { title: "Upper & lower GI endoscopy", text: "Dr. Raza performs upper GI endoscopy and colonoscopy at Apollo Medics. See the <a href=\"/colonoscopy-lucknow\">Colonoscopy page</a>." },
        ],
      },
      { t: "p", html: BOOK },
    ],
    faqs: [
      { q: "Does diverticulitis always need surgery?", a: "No. Most first episodes are treated with antibiotics. Surgery is for recurrent, complicated or severe cases." },
      { q: "Is intestinal obstruction an emergency?", a: "Yes. Delay risks bowel damage. Seek hospital care immediately." },
      { q: "Can bowel surgery be done laparoscopically?", a: "In most planned cases, yes." },
    ],
    related: ["colonoscopy-lucknow", "laparoscopic-robotic-surgeon-lucknow", "colon-cancer-surgeon-lucknow", "rectal-bleeding-lucknow"],
    articles: ["what-happens-during-colonoscopy", "early-signs-colorectal-cancer"],
  },

  {
    slug: "colonoscopy-lucknow",
    illustration: "/illustrations/colonoscopy-v2.webp",
    name: "Colonoscopy",
    h1: "Colonoscopy in Lucknow",
    title: "Colonoscopy in Lucknow | Colorectal Cancer Screening | Dr. Wasif Raza, Apollo Medics",
    description:
      "Colonoscopy in Lucknow by UK-trained colorectal surgeon Dr. Wasif Raza at Apollo Medics. Cancer screening, polyp removal, rectal bleeding evaluation. Sedation available. Call +91 92780 72150",
    group: "general",
    eyebrow: "General Surgery",
    intro:
      "A colonoscopy is a 20–30 minute examination of the entire large intestine using a thin, flexible camera. It is the gold-standard test for rectal bleeding, change in bowel habit, anaemia, and colorectal cancer screening — and the only test that can prevent colorectal cancer by removing polyps before they turn cancerous. Dr. Wasif Raza performs diagnostic and therapeutic colonoscopy at Apollo Medics Superspeciality Hospitals, Lucknow.",
    card: "Screening, polyp removal and bleeding evaluation — 20 minutes that can prevent cancer.",
    image: "/photos/consultation-suite.webp",
    imageAlt: "colonoscopy Lucknow — Dr Wasif Raza colorectal surgeon, Apollo Medics consultation suite",
    highlights: ["Sedation available", "Polyps removed on the spot", "Piles banded in the same session", "Home the same day"],
    glance: [
      { label: "Duration", value: "20–30 minutes" },
      { label: "Sedation", value: "Yes — most remember little" },
      { label: "Recovery", value: "30–60 minutes" },
      { label: "Results", value: "Explained before you leave" },
    ],
    hindi: "Colonoscopy kaise hoti hai? Ek patli, lachili camera tube se poori badi aant ki jaanch — 20–30 minute, behoshi ki dawa ke saath. Usi din ghar.",
    blocks: [
      { t: "h2", text: "Who needs a colonoscopy?" },
      {
        t: "ul",
        items: [
          "Blood in stool, or anaemia with no other explanation",
          "Change in bowel habit lasting more than a few weeks",
          "Screening — from age 45–50, or from 40 with a family history of colorectal cancer or polyps",
          "Surveillance after previous polyps or colorectal cancer",
          "Ulcerative colitis or Crohn's disease assessment",
          "An abnormal stool test (FIT) or CT scan",
        ],
      },
      { t: "h2", text: "How to prepare" },
      { t: "p", html: "The day before: clear liquids from lunchtime and a laxative solution in the afternoon and evening to clean the bowel. This is the hardest part of the whole process — unpleasant but not painful, and over by bedtime. Detailed written instructions are given at booking, including adjustments for diabetes or blood thinners." },
      { t: "h2", text: "What happens on the day" },
      {
        t: "ol",
        items: [
          "Arrive with an empty stomach; a small cannula is placed in the hand",
          "Sedation is given — most patients are drowsy and remember little",
          "The colonoscope is passed gently through the whole colon; air opens the bowel for viewing",
          "Polyps are removed on the spot with a snare — painless, as the colon lining has no pain nerves",
          "Biopsies are taken if anything looks suspicious; bleeding piles can be banded in the same session",
          "30–60 minutes in recovery, then home with a companion (no driving for 24 hours)",
        ],
      },
      { t: "h2", text: "Results" },
      { t: "p", html: "Dr. Raza explains what was seen before you leave. Biopsy results take about a week. If the examination is normal with no risk factors, the next colonoscopy is typically in 10 years; if polyps were removed, 3–7 years depending on type and number." },
      { t: "h2", text: "Safety" },
      { t: "callout", tone: "sage", html: "Colonoscopy is very safe. Serious complications — bleeding after polyp removal or perforation — occur in roughly 1–3 per 1,000 procedures and are treatable. The risk of not having a colonoscopy when it is indicated is far greater." },
      { t: "p", html: "Book a colonoscopy: <a href=\"tel:+919278072150\">+91 92780 72150</a> · Apollo Medics Superspeciality Hospitals, Lucknow" },
    ],
    faqs: [
      { q: "Is colonoscopy painful?", a: "With sedation, most patients feel nothing or mild pressure. Most say it was far easier than they expected." },
      { q: "Colonoscopy cost in Lucknow", a: "Depends on whether sedation, biopsy or polyp removal are included. Call +91 92780 72150 for an estimate." },
      { q: "Colonoscopy kaise hoti hai?", a: "Ek patli, lachili camera tube se poori badi aant ki jaanch — 20–30 minute, behoshi ki dawa ke saath. Usi din ghar." },
      { q: "Can I have it done if I am diabetic or on blood thinners?", a: "Yes, with medication adjustments beforehand. Tell us at booking." },
    ],
    related: ["rectal-bleeding-lucknow", "colon-cancer-surgeon-lucknow", "gi-surgeon-lucknow", "piles-treatment-lucknow"],
    articles: ["what-happens-during-colonoscopy", "early-signs-colorectal-cancer", "blood-in-stool-piles-or-serious"],
  },

  {
    slug: "rectal-bleeding-lucknow",
    illustration: "/illustrations/colonoscopy-v2.webp",
    name: "Rectal Bleeding",
    h1: "Rectal Bleeding — Blood in Stool",
    title: "Rectal Bleeding Treatment in Lucknow | Blood in Stool Specialist | Dr. Wasif Raza",
    description:
      "Blood in stool? Consult Dr. Wasif Raza, colorectal surgeon in Lucknow, for colonoscopy and treatment of piles, fissure, polyps and colorectal cancer at Apollo Medics. Call +91 92780 72150",
    group: "general",
    eyebrow: "General Surgery",
    intro:
      "Every colorectal surgeon has met a patient who assumed their bleeding was piles — and was later found to have colorectal cancer that could have been caught earlier. Most rectal bleeding is benign. But the only way to know is a specialist examination. Dr. Wasif Raza evaluates rectal bleeding (<span lang=\"hi\">मल में खून</span>) at Apollo Medics Lucknow — and can usually give a clear answer, and often treatment, in a single visit.",
    card: "A clear answer — and often treatment — in a single visit.",
    image: "/photos/at-desk.webp",
    imageAlt: "rectal bleeding blood in stool specialist Lucknow — Dr Wasif Raza, Apollo Medics",
    highlights: ["Answer in one visit", "Proctoscopy in OPD", "Colonoscopy when needed", "Piles banded on the spot"],
    hindi: "Latrine mein khoon aana — kya karein? Agar mal mein khoon do hafte se zyada aa raha hai, ya 50 ki umar ke baad pehli baar aaya hai, to colorectal specialist se jaanch karwayein. Apollo Medics, Lucknow: +91 92780 72150.",
    blocks: [
      { t: "h2", text: "What the blood tells us" },
      {
        t: "ul",
        items: [
          "<b>Bright red on paper or dripping</b> — usually piles or fissure",
          "<b>Mixed in stool</b> — needs colonoscopy; could be polyps, IBD or cancer",
          "<b>Dark or black</b> — bleeding from higher up; needs upper GI endoscopy",
          "<b>With mucus, urgency or change in habit</b> — colitis or rectal tumour until proven otherwise",
        ],
      },
      { t: "h3", text: "Common causes" },
      { t: "chips", items: ["Piles", "Fissure", "Fistula", "Polyps", "Diverticular disease", "Ulcerative colitis / Crohn's", "Colorectal cancer", "Proctitis"] },
      { t: "h2", text: "How Dr. Raza evaluates it" },
      {
        t: "ol",
        items: ["History and examination, including digital rectal examination", "Proctoscopy in OPD", "Flexible sigmoidoscopy or colonoscopy — polyps removed and piles banded in the same session if found", "Blood tests for anaemia"],
      },
      { t: "h2", text: "See a doctor urgently if" },
      {
        t: "ul",
        items: ["Bleeding for more than a few days", "Blood mixed within stool", "Age over 50 with new bleeding (over 45 under some guidelines)", "Family history of colorectal cancer", "Bleeding with weight loss, abdominal pain or change in bowel habit"],
      },
      { t: "p", html: BOOK },
    ],
    faqs: [
      { q: "Is rectal bleeding always serious?", a: "No — most is piles or fissure. But it should always be checked." },
      { q: "Is colonoscopy painful?", a: "Usually well tolerated; sedation available. Most patients say it was easier than expected." },
      { q: "Can bleeding piles be treated during colonoscopy?", a: "Yes — banding can be done in the same session." },
      { q: "Latrine mein khoon aana — kya karein?", a: "Agar mal mein khoon do hafte se zyada aa raha hai, ya 50 ki umar ke baad pehli baar aaya hai, to colorectal specialist se jaanch karwayein. Apollo Medics, Lucknow: +91 92780 72150." },
    ],
    related: ["colonoscopy-lucknow", "piles-treatment-lucknow", "anal-fissure-treatment-lucknow", "colon-cancer-surgeon-lucknow"],
    articles: ["blood-in-stool-piles-or-serious", "early-signs-colorectal-cancer", "piles-vs-fissure-vs-fistula"],
  },

  {
    slug: "piles-treatment-lucknow",
    illustration: "/illustrations/anorectal-v2.webp",
    name: "Piles (Haemorrhoid) Surgery",
    h1: "Piles (Haemorrhoid) Surgeon in Lucknow",
    title: "Piles Surgeon in Lucknow | Haemorrhoid Surgery | Dr. Wasif Raza",
    description: "Piles surgeon in Lucknow. Haemorrhoid surgery and minimally invasive options by UK-trained colorectal surgeon Dr. Wasif Raza at Apollo Medics. Call +91 92780 72150",
    group: "general",
    eyebrow: "General Surgery",
    intro:
      "Piles — <span lang=\"hi\">बवासीर</span> — are swollen blood vessels in and around the anus. Half of all adults experience them. Most suffer silently out of embarrassment or fear of surgery. Modern piles treatment is quick, far less painful than it once was, and usually a day case. Dr. Wasif Raza is a colorectal specialist treating all grades of piles at Apollo Medics Lucknow.",
    card: "Haemorrhoid, fissure and anal fistula surgery by a colorectal specialist.",
    image: "/photos/consultation-suite.webp",
    imageAlt: "piles surgeon Lucknow — Dr Wasif Raza, colorectal specialist, Apollo Medics consultation suite",
    highlights: ["All grades treated", "Banding in OPD", "Laser & stapled options", "Day-care procedures"],
    blocks: [
      { t: "h2", text: "Symptoms" },
      {
        t: "ul",
        items: ["Bright red blood on toilet paper or in the pan", "Itching or irritation", "A lump that comes out during stool and goes back (or needs pushing back)", "Pain — usually only if a clot forms", "Mucus discharge or soiling"],
      },
      { t: "callout", tone: "amber", html: "<b>Important:</b> bleeding is never confirmed as \"just piles\" until a specialist has examined you. Colorectal cancer can cause identical symptoms." },
      { t: "h2", text: "Grades" },
      {
        t: "table",
        head: ["Grade", "What happens", "Usual treatment"],
        rows: [
          ["1", "Bleed, no prolapse", "Diet, medication, banding"],
          ["2", "Come out during stool, go back on their own", "Banding, injection"],
          ["3", "Come out, need pushing back", "Laser, stapled, or surgical removal"],
          ["4", "Permanently out", "Haemorrhoidectomy"],
        ],
      },
      { t: "h2", text: "Treatment options" },
      {
        t: "steps",
        items: [
          { title: "Lifestyle and medication", text: "Fibre, fluids, stool softeners, creams. First step for Grade 1." },
          { title: "Rubber band ligation", text: "OPD procedure, no anaesthesia, back to work same day." },
          { title: "Laser haemorrhoidoplasty", text: "Laser fibre shrinks the pile from inside. Minimal pain, day-care. Ideal for Grade 2–3." },
          { title: "Stapled haemorrhoidopexy", text: "Lifts and fixes prolapsing piles. Less painful than conventional surgery, though recurrence is somewhat higher than surgical removal." },
          { title: "Haemorrhoidectomy", text: "Surgical removal for Grade 4 or very large piles. Most definitive, lowest recurrence." },
        ],
      },
      { t: "p", html: "Individual results vary. " + BOOK },
    ],
    faqs: [
      { q: "Can piles be cured without surgery?", a: "Grade 1–2 often respond to diet, medication and banding. Grade 3–4 usually need a procedure." },
      { q: "Is piles surgery painful?", a: "Laser and stapled techniques — minimal. Conventional haemorrhoidectomy — some discomfort for 7–10 days, well controlled." },
      { q: "Do piles come back?", a: "Recurrence is low after proper treatment with lifestyle changes." },
      { q: "How soon can I return to work?", a: "Banding — same day. Laser — 2–3 days. Haemorrhoidectomy — usually 2–3 weeks." },
    ],
    related: ["anal-fissure-treatment-lucknow", "anal-fistula-surgery-lucknow", "rectal-bleeding-lucknow", "colonoscopy-lucknow"],
    articles: ["piles-vs-fissure-vs-fistula", "bawaseer-lakshan-karan-ilaj", "blood-in-stool-piles-or-serious"],
  },

  {
    slug: "anal-fissure-treatment-lucknow",
    illustration: "/illustrations/anorectal-v2.webp",
    name: "Anal Fissure Surgery",
    h1: "Anal Fissure Treatment in Lucknow",
    title: "Fissure Surgeon in Lucknow | Anal Fissure Surgery | Dr. Wasif Raza",
    description: "Anal fissure treatment in Lucknow by colorectal specialist Dr. Wasif Raza. Medical and minimally invasive surgical options at Apollo Medics. Call +91 92780 72150",
    group: "general",
    eyebrow: "General Surgery",
    intro:
      "An anal fissure is a small tear in the lining of the anus — usually from a hard stool. It causes sharp, burning pain during and after bowel movements, often with a streak of bright red blood. The pain makes people avoid the toilet, which hardens the stool and deepens the tear — a vicious cycle. Dr. Wasif Raza treats acute and chronic fissures at Apollo Medics Lucknow.",
    card: "Medical treatment first; a 10-minute day-care procedure for chronic fissures.",
    image: "/photos/portrait-news.webp",
    imageAlt: "fissure surgeon Lucknow — Dr Wasif Raza, colorectal specialist at Apollo Medics",
    highlights: ["Medical treatment first", "Botulinum toxin option", "Sphincterotomy — over 95% success", "Continence-preserving technique"],
    blocks: [
      { t: "h2", text: "Symptoms" },
      { t: "ul", items: ["Sharp pain during stool, sometimes lasting hours", "Bright red blood on toilet paper", "A visible crack or skin tag at the anal opening", "Spasm of the anal muscle"] },
      { t: "h2", text: "Acute vs chronic" },
      { t: "p", html: "An <b>acute fissure</b> (under 6 weeks) usually heals with medical treatment. A <b>chronic fissure</b> has been present longer, often with a skin tag and exposed muscle fibres — and frequently needs a procedure." },
      { t: "h2", text: "Treatment" },
      {
        t: "steps",
        items: [
          { title: "Medical treatment — first line", text: "Fibre, fluids, stool softeners, warm sitz baths, prescription ointments that relax the anal muscle. Heals most acute fissures in 4–6 weeks." },
          { title: "Botulinum toxin injection", text: "Relaxes the sphincter temporarily. Day case." },
          { title: "Lateral internal sphincterotomy", text: "The most effective treatment for chronic fissure — a tiny cut releases the spasm. Over 95% success. 10-minute day-care procedure, back to work in 2–3 days. Performed with precision to preserve continence." },
          { title: "Fissurectomy / advancement flap", text: "For fissures that fail other treatments." },
        ],
      },
      { t: "p", html: "Individual results vary. " + BOOK },
    ],
    faqs: [
      { q: "Can a fissure heal on its own?", a: "Acute fissures often do, with diet and ointment. Chronic ones rarely do without treatment." },
      { q: "Is fissure surgery painful?", a: "Sphincterotomy relieves the pain almost immediately. Mild soreness for a few days." },
      { q: "Will surgery affect bowel control?", a: "There is a small risk of minor, usually temporary, leakage of wind after sphincterotomy. Significant permanent problems are uncommon with careful technique." },
      { q: "Fissure vs piles vs fistula?", a: "Fissure = a tear (pain + bleeding). Piles = swollen vessels (bleeding + lump). Fistula = an infected tunnel (discharge + recurring boil)." },
    ],
    related: ["piles-treatment-lucknow", "anal-fistula-surgery-lucknow", "rectal-bleeding-lucknow"],
    articles: ["piles-vs-fissure-vs-fistula", "blood-in-stool-piles-or-serious"],
  },

  {
    slug: "anal-fistula-surgery-lucknow",
    illustration: "/illustrations/anorectal-v2.webp",
    name: "Anal Fistula Surgery",
    h1: "Anal Fistula Surgery in Lucknow",
    title: "Fistula Surgeon in Lucknow | Anal Fistula Surgery | Dr. Wasif Raza",
    description: "Anal fistula surgery in Lucknow by UK-trained colorectal surgeon Dr. Wasif Raza. LIFT, fistulotomy, seton, VAAFT at Apollo Medics. Low recurrence. Call +91 92780 72150",
    group: "general",
    eyebrow: "General Surgery",
    intro:
      "An anal fistula is an abnormal tunnel between the inside of the anal canal and the skin near the anus. It almost always starts as an abscess that bursts or is drained — and then keeps coming back. A fistula will not heal with creams, antibiotics or home remedies. Surgery is the only cure — and the surgeon's skill decides whether it heals without recurrence or damage to bowel control.",
    card: "MRI-mapped, sphincter-preserving fistula surgery — LIFT, seton, VAAFT, fistulotomy.",
    image: "/photos/at-desk.webp",
    imageAlt: "fistula surgeon Lucknow — Dr Wasif Raza, colorectal specialist at Apollo Medics",
    highlights: ["MRI fistulogram mapping", "LIFT — sphincter fully preserved", "Seton, flap, VAAFT / laser", "Day-care or one night"],
    glance: [
      { label: "Surgery time", value: "30–60 minutes" },
      { label: "Hospital stay", value: "Day-care or 1 night" },
      { label: "Desk work", value: "3–7 days" },
      { label: "Complete healing", value: "4–8 weeks" },
    ],
    blocks: [
      { t: "h2", text: "Symptoms" },
      { t: "ul", items: ["A recurring boil or swelling near the anus", "Pus or blood-stained discharge", "Pain, especially sitting or during stool", "Skin irritation", "Fever if an abscess forms"] },
      { t: "h2", text: "Why fistula surgery needs a specialist" },
      { t: "p", html: "The tract passes through the anal sphincter muscles. Cutting too much causes incontinence; too little causes recurrence. Dr. Raza uses MRI fistulogram to map complex tracts before surgery and selects the technique that balances cure with safety." },
      { t: "h2", text: "Types" },
      { t: "p", html: "<b>Simple (low)</b> — crosses little muscle; cured by fistulotomy. <b>Complex (high)</b> — crosses significant muscle, has branches, or follows Crohn's; needs sphincter-preserving techniques." },
      { t: "h2", text: "Surgical options" },
      {
        t: "steps",
        items: [
          { title: "Fistulotomy", text: "Tract laid open; over 95% cure for simple fistulas." },
          { title: "Seton", text: "Soft thread for drainage and controlled healing; complex fistulas or first stage." },
          { title: "LIFT", text: "Tract tied off between the sphincter muscles, preserving them fully; Dr. Raza's preferred technique for many complex fistulas." },
          { title: "Advancement flap", text: "Internal opening covered with healthy tissue." },
          { title: "VAAFT / laser (FiLaC)", text: "Minimally invasive closure from inside, no muscle cut." },
          { title: "Plug / glue", text: "Selected cases." },
        ],
      },
      { t: "h2", text: "Recovery" },
      { t: "p", html: "Day-care or one night. Daily wound care and sitz baths. Desk work in 3–7 days. Complete healing 4–8 weeks. Individual results vary." },
      { t: "p", html: BOOK },
    ],
    faqs: [
      { q: "Can fistula be cured without surgery?", a: "No. Fistulas do not close on their own. Kshar sutra has a role in some simple fistulas but is slow and unsuitable for complex ones." },
      { q: "Will I lose bowel control?", a: "With correct technique selection, the risk is very low. This is why colorectal specialist training matters." },
      { q: "Why do fistulas recur?", a: "Usually a missed internal opening or hidden branch. MRI mapping and specialist technique reduce this risk significantly." },
      { q: "How long does surgery take?", a: "30–60 minutes under anaesthesia." },
    ],
    related: ["piles-treatment-lucknow", "anal-fissure-treatment-lucknow", "rectal-bleeding-lucknow"],
    articles: ["is-fistula-surgery-painful", "piles-vs-fissure-vs-fistula"],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(SERVICES.map((s) => [s.slug, s])) as Record<string, Service>;
export const servicesInGroup = (g: ServiceGroup) => SERVICES.filter((s) => s.group === g);
