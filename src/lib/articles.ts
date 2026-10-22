import raw from "@/content/articles.json";

export type Article = {
  slug: string;
  lang: string;
  title: string;
  meta: string;
  category: string;
  serviceLink: string | null;
  related: string[];
  html: string;
  faqs: { q: string; a: string }[];
};

/** Publishing order per Dr. Raza (22 Oct 2026): cancer & robotic first, anorectal last. */
export const ARTICLE_ORDER = [
  "colon-cancer-vs-rectal-cancer",
  "early-signs-colorectal-cancer",
  "laparoscopic-vs-robotic-surgery",
  "colostomy-bag-rectal-cancer",
  "blood-in-stool-piles-or-serious",
  "what-happens-during-colonoscopy",
  "hernia-go-away-without-surgery",
  "gallstones-always-need-surgery",
  "pitt-ki-pathri-ka-operation",
  "piles-vs-fissure-vs-fistula",
  "is-fistula-surgery-painful",
  "bawaseer-lakshan-karan-ilaj",
];

const data = raw as Record<string, Article>;

export const ARTICLES: Article[] = ARTICLE_ORDER.map((s) => data[s]).filter(Boolean);
export const ARTICLE_BY_SLUG = data;

export const ARTICLE_CATEGORIES = ["All", "Colorectal Cancer", "Laparoscopic Surgery", "Hernia", "Gallbladder", "Piles, Fissure & Fistula", "Hindi"] as const;

/** Reading time from the stripped text, ~200 wpm. */
export function readingTime(html: string) {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 200));
}

export function articleSummary(a: Article) {
  const m = a.html.match(/<p>([\s\S]*?)<\/p>/);
  const text = (m ? m[1] : a.meta).replace(/<[^>]+>/g, "");
  return text.length > 180 ? text.slice(0, 177).trimEnd() + "…" : text;
}

/** Evidence sources per article (from the v4 launch set). Rendered as a "Sources" block for E-E-A-T. */
export const SOURCES: Record<string, string[]> = {
  "colon-cancer-vs-rectal-cancer": [
    "NCCN Clinical Practice Guidelines in Oncology — Colon Cancer and Rectal Cancer (current versions, nccn.org).",
    "Glynne-Jones R et al. Rectal cancer: ESMO Clinical Practice Guidelines for diagnosis, treatment and follow-up. Ann Oncol 2017;28(suppl 4):iv22–iv40.",
    "Heald RJ, Ryall RD. Recurrence and survival after total mesorectal excision for rectal cancer. Lancet 1986;1:1479–1482.",
    "Bonjer HJ et al. (COLOR II). A randomized trial of laparoscopic versus open surgery for rectal cancer. N Engl J Med 2015;372:1324–1332.",
  ],
  "early-signs-colorectal-cancer": [
    "Bray F et al. Global cancer statistics 2022: GLOBOCAN estimates. CA Cancer J Clin 2024;74:229–263.",
    "US Preventive Services Task Force. Screening for Colorectal Cancer: Recommendation Statement. JAMA 2021;325:1965–1977 (screening from age 45).",
    "NICE Guideline NG12 — Suspected cancer: recognition and referral (updated 2023).",
    "Snook J et al. BSG guidelines for the management of iron deficiency anaemia in adults. Gut 2021;70:2030–2051.",
    "SEER Cancer Stat Facts: Colorectal Cancer. National Cancer Institute (seer.cancer.gov) — stage-specific survival.",
  ],
  "laparoscopic-vs-robotic-surgery": [
    "Jayne D et al. (ROLARR). Effect of robotic-assisted vs conventional laparoscopic surgery on risk of conversion to open laparotomy among patients undergoing resection for rectal cancer. JAMA 2017;318:1569–1580.",
    "Bonjer HJ et al. (COLOR II). N Engl J Med 2015;372:1324–1332.",
    "Guillou PJ et al. (MRC CLASICC). Short-term endpoints of conventional versus laparoscopic-assisted surgery in patients with colorectal cancer. Lancet 2005;365:1718–1726.",
    "Clinical Outcomes of Surgical Therapy (COST) Study Group. A comparison of laparoscopically assisted and open colectomy for colon cancer. N Engl J Med 2004;350:2050–2059.",
    "Fleshman J et al. (ACOSOG Z6051). Effect of laparoscopic-assisted resection vs open resection of stage II or III rectal cancer on pathologic outcomes. JAMA 2015;314:1346–1355.",
  ],
  "colostomy-bag-rectal-cancer": [
    "Heald RJ, Ryall RD. Lancet 1986;1:1479–1482 (total mesorectal excision).",
    "Glynne-Jones R et al. ESMO rectal cancer guidelines. Ann Oncol 2017;28(suppl 4):iv22–iv40.",
    "Habr-Gama A et al. Operative versus nonoperative treatment for stage 0 distal rectal cancer following chemoradiation therapy. Ann Surg 2004;240:711–718.",
    "van der Valk MJM et al. (International Watch & Wait Database). Long-term outcomes of clinical complete responders after neoadjuvant treatment for rectal cancer. Lancet 2018;391:2537–2545.",
    "Emmertsen KJ, Laurberg S. Low anterior resection syndrome score. Ann Surg 2012;255:922–928.",
  ],
  "blood-in-stool-piles-or-serious": [
    "NICE Guideline NG12 — Suspected cancer: recognition and referral (2015, updated 2023). Rectal bleeding referral thresholds.",
    "NICE Diagnostics Guidance DG56 — Quantitative faecal immunochemical testing to guide colorectal cancer pathway referral in primary care (2023).",
    "Davis BR et al. ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids. Dis Colon Rectum 2018;61:284–292.",
    "Snook J et al. British Society of Gastroenterology guidelines for the management of iron deficiency anaemia in adults. Gut 2021;70:2030–2051.",
  ],
  "what-happens-during-colonoscopy": [
    "Gupta S et al. (US Multi-Society Task Force). Recommendations for follow-up after colonoscopy and polypectomy. Gastroenterology 2020;158:1131–1153.",
    "Rutter MD et al. BSG/ACPGBI/PHE post-polypectomy and post-colorectal cancer resection surveillance guidelines. Gut 2020;69:201–223.",
    "Rex DK et al. Quality indicators for colonoscopy. Gastrointest Endosc 2015;81:31–53 (withdrawal time ≥ 6 min).",
    "Reumkens A et al. Post-colonoscopy complications: a systematic review, time trends, and meta-analysis of population-based studies. Am J Gastroenterol 2016;111:1092–1101.",
  ],
  "hernia-go-away-without-surgery": [
    "HerniaSurge Group. International guidelines for groin hernia management. Hernia 2018;22:1–165.",
    "Fitzgibbons RJ Jr et al. Watchful waiting vs repair of inguinal hernia in minimally symptomatic men: a randomized clinical trial. JAMA 2006;295:285–292.",
    "Bittner R et al. Guidelines for laparoscopic treatment of ventral and incisional abdominal wall hernias (IEHS). Surg Endosc 2014;28:2–29 and 2019 update.",
  ],
  "gallstones-always-need-surgery": [
    "European Association for the Study of the Liver. EASL Clinical Practice Guidelines on the prevention, diagnosis and treatment of gallstones. J Hepatol 2016;65:146–181.",
    "NICE Clinical Guideline CG188 — Gallstone disease: diagnosis and management (2014).",
    "Gracie WA, Ransohoff DF. The natural history of silent gallstones: the innocent gallstone is not a myth. N Engl J Med 1982;307:798–800.",
    "SAGES. Guidelines for the clinical application of laparoscopic biliary tract surgery (2010).",
  ],
  "pitt-ki-pathri-ka-operation": [
    "EASL Clinical Practice Guidelines on gallstones. J Hepatol 2016;65:146–181.",
    "NICE Clinical Guideline CG188 — Gallstone disease: diagnosis and management (2014).",
    "Pearl JP et al. SAGES guidelines for the use of laparoscopy during pregnancy. Surg Endosc 2017;31:3767–3782.",
  ],
  "piles-vs-fissure-vs-fistula": [
    "Davis BR et al. ASCRS hemorrhoids guideline. Dis Colon Rectum 2018;61:284–292.",
    "Stewart DB Sr et al. ASCRS Clinical Practice Guideline for the Management of Anal Fissures. Dis Colon Rectum 2017;60:7–14.",
    "Gaertner WB et al. ASCRS Clinical Practice Guidelines for the Management of Anorectal Abscess, Fistula-in-Ano, and Rectovaginal Fistula. Dis Colon Rectum 2022;65:964–985.",
  ],
  "is-fistula-surgery-painful": [
    "Gaertner WB et al. ASCRS anorectal abscess and fistula-in-ano guideline. Dis Colon Rectum 2022;65:964–985.",
    "Rojanasakul A et al. Total anal sphincter saving technique for fistula-in-ano: the ligation of intersphincteric fistula tract. J Med Assoc Thai 2007;90:581–586.",
    "Jacob TJ, Perakath B, Keighley MR. Surgical intervention for anorectal fistula. Cochrane Database Syst Rev 2010;(5):CD006319.",
  ],
  "bawaseer-lakshan-karan-ilaj": [
    "Davis BR et al. ASCRS Clinical Practice Guidelines for the Management of Hemorrhoids. Dis Colon Rectum 2018;61:284–292.",
    "Shanmugam V et al. Rubber band ligation versus excisional haemorrhoidectomy for haemorrhoids. Cochrane Database Syst Rev 2005;(3):CD005034.",
    "Gallo G et al. Consensus statement of the Italian Society of Colorectal Surgery (SICCR): management and treatment of hemorrhoidal disease. Tech Coloproctol 2020;24:145–164 (laser and stapled techniques).",
  ],
};
