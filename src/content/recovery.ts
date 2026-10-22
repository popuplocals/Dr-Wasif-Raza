/** Typical recovery windows, in days after the operation. Taken from the service-page copy; "individual results vary". */
export type Milestone = { label: string; from: number; to: number };

export const RECOVERY: Record<string, { name: string; milestones: Milestone[] }> = {
  "colon-cancer-surgeon-lucknow": {
    name: "Laparoscopic colon cancer surgery",
    milestones: [
      { label: "Walking", from: 1, to: 1 },
      { label: "Eating normally", from: 2, to: 3 },
      { label: "Going home", from: 4, to: 6 },
      { label: "Light work", from: 21, to: 28 },
    ],
  },
  "rectal-cancer-surgeon-lucknow": {
    name: "Rectal cancer surgery",
    milestones: [
      { label: "Going home", from: 5, to: 7 },
      { label: "Normal activity", from: 28, to: 42 },
    ],
  },
  "hernia-surgery-lucknow": {
    name: "Laparoscopic hernia repair",
    milestones: [
      { label: "Going home", from: 0, to: 1 },
      { label: "Light work", from: 5, to: 7 },
      { label: "Heavy lifting", from: 21, to: 28 },
    ],
  },
  "gallbladder-surgery-lucknow": {
    name: "Laparoscopic gallbladder removal",
    milestones: [
      { label: "Going home", from: 0, to: 1 },
      { label: "Light work", from: 5, to: 7 },
      { label: "Normal activity", from: 14, to: 14 },
    ],
  },
  "appendix-surgery-lucknow": {
    name: "Laparoscopic appendicectomy",
    milestones: [
      { label: "Going home", from: 1, to: 2 },
      { label: "Normal diet", from: 2, to: 3 },
      { label: "School / desk work", from: 7, to: 7 },
      { label: "Sports", from: 14, to: 21 },
    ],
  },
  "piles-treatment-lucknow": {
    name: "Piles treatment (laser / banding / surgery)",
    milestones: [
      { label: "Back to work after banding", from: 0, to: 0 },
      { label: "Back to work after laser", from: 2, to: 3 },
      { label: "Back to work after haemorrhoidectomy", from: 14, to: 21 },
    ],
  },
  "anal-fissure-treatment-lucknow": {
    name: "Fissure surgery (sphincterotomy)",
    milestones: [{ label: "Back to work", from: 2, to: 3 }],
  },
  "anal-fistula-surgery-lucknow": {
    name: "Anal fistula surgery",
    milestones: [
      { label: "Desk work", from: 3, to: 7 },
      { label: "Complete healing", from: 28, to: 56 },
    ],
  },
};
