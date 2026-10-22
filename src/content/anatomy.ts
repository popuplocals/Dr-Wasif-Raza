export type Spot = { x: number; y: number; title: string; text: string; key?: boolean };

/** Hotspot positions are percentages of the 16:9 illustration. Text is general education, not a diagnosis. */
export const SPOTS: Record<string, Spot[]> = {
  "colon-cancer-surgeon-lucknow": [
    { x: 66, y: 56, key: true, title: "Tumour site (illustrative)", text: "Colon cancers usually grow from a small polyp over years. Surgery removes the affected segment and joins the bowel back together." },
    { x: 22, y: 60, title: "Right colon", text: "Removed in a right hemicolectomy when a tumour sits here." },
    { x: 50, y: 18, title: "Transverse colon", text: "The middle section that runs across the upper abdomen." },
    { x: 44, y: 84, title: "Sigmoid colon", text: "The S-shaped end before the rectum. A common site for tumours and for diverticular disease." },
  ],
  "rectal-cancer-surgeon-lucknow": [
    { x: 50, y: 70, key: true, title: "Rectal tumour (illustrative)", text: "Pelvic MRI shows how deep the tumour is and whether the sphincter can be saved." },
    { x: 50, y: 28, title: "Sigmoid colon", text: "The bowel above the rectum, which is usually joined back to it after surgery." },
    { x: 43, y: 52, title: "Mesorectum", text: "The fatty envelope around the rectum. Total mesorectal excision removes it as one piece to lower the chance of recurrence." },
    { x: 50, y: 88, title: "Anal sphincter", text: "The aim is complete tumour removal while keeping normal bowel control wherever possible." },
  ],
  "gallbladder-surgery-lucknow": [
    { x: 39, y: 78, key: true, title: "Gallstones (illustrative)", text: "Stones form inside the gallbladder and cause pain after fatty meals. Removing the gallbladder is the lasting cure." },
    { x: 50, y: 24, title: "Liver", text: "The gallbladder sits beneath the liver. You live normally without it." },
    { x: 62, y: 52, title: "Bile duct", text: "Stones that slip into this duct may need ERCP, coordinated with gastroenterology." },
  ],
  "appendix-surgery-lucknow": [
    { x: 44, y: 68, key: true, title: "Appendix (illustrative)", text: "When inflamed it can burst within 48–72 hours. Removal through three small incisions is the definitive treatment." },
    { x: 24, y: 55, title: "Caecum", text: "The start of the large intestine, where the appendix is attached." },
    { x: 56, y: 40, title: "Small intestine", text: "Looked over during laparoscopy when the diagnosis is uncertain." },
  ],
};

export function hasAnatomy(slug: string) {
  return !!SPOTS[slug];
}

