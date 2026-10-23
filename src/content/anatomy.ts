export type Spot = { x: number; y: number; title: string; text: string; key?: boolean };

/** Hotspot positions are percentages of the 16:9 illustration. Text is general education, not a diagnosis. */
export const SPOTS: Record<string, Spot[]> = {
  "colon-cancer-surgeon-lucknow": [
    { x: 39.5, y: 60.5, key: true, title: "Growth on the bowel wall (illustrative)", text: "Colon cancers usually grow from a small polyp over years. Surgery removes the affected segment and joins the bowel back together." },
    { x: 82, y: 50, title: "Close-up", text: "Under magnification a polyp is a raised growth on the lining. Polyps found at colonoscopy can be removed before they turn cancerous." },
    { x: 7, y: 46, title: "Right colon", text: "Removed in a right hemicolectomy when a tumour sits here." },
    { x: 50, y: 21, title: "Transverse colon", text: "The middle section that runs across the upper abdomen." },
    { x: 33, y: 88, title: "Sigmoid colon", text: "The S-shaped end before the rectum. A common site for tumours and for diverticular disease." },
  ],
  "rectal-cancer-surgeon-lucknow": [
    { x: 36, y: 88, key: true, title: "Lower rectum (illustrative)", text: "Pelvic MRI shows how deep a tumour is and whether the anal sphincter can be saved, so that normal bowel control is kept wherever possible." },
    { x: 72, y: 56, title: "Close-up of the lining", text: "The inner lining of the rectum under magnification. Biopsy of any abnormal area confirms the diagnosis." },
    { x: 36, y: 66, title: "Mesorectum", text: "The fatty envelope around the rectum. Total mesorectal excision removes it as one piece to lower the chance of recurrence." },
    { x: 42, y: 30, title: "Sigmoid colon", text: "The bowel above the rectum, which is usually joined back to it after surgery." },
  ],
  "gallbladder-surgery-lucknow": [
    { x: 36, y: 68, key: true, title: "Gallstones (illustrative)", text: "Stones form inside the gallbladder and cause pain after fatty meals. Removing the gallbladder is the lasting cure." },
    { x: 76, y: 66, title: "Close-up", text: "Stones can be many and small or few and large. Both can block the outflow and cause pain or infection." },
    { x: 33, y: 30, title: "Liver", text: "The gallbladder sits beneath the liver. You live normally without it." },
    { x: 49, y: 78, title: "Bile duct", text: "Stones that slip into this duct may need ERCP, coordinated with gastroenterology." },
  ],
  "appendix-surgery-lucknow": [
    { x: 49, y: 80, key: true, title: "Appendix (illustrative)", text: "When inflamed it can burst within 48–72 hours. Removal through three small incisions is the definitive treatment." },
    { x: 17, y: 59, title: "Close-up", text: "An inflamed appendix is swollen and red. Laparoscopy also lets Dr. Raza look at the rest of the abdomen when the diagnosis is uncertain." },
    { x: 47, y: 62, title: "Caecum", text: "The start of the large intestine, where the appendix is attached." },
    { x: 62, y: 48, title: "Small intestine", text: "Checked during laparoscopy when other causes of pain are possible." },
  ],
};

export function hasAnatomy(slug: string) {
  return !!SPOTS[slug];
}
