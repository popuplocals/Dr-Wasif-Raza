/**
 * SAMPLE TEXT ONLY — shows length and tone. These are not real patients and must be replaced with genuine,
 * consented reviews (or removed in favour of the Google Reviews widget) before launch. Each item is flagged
 * `sample: true` and the UI renders a visible "Sample" badge until it is changed.
 */
export type Story = {
  tag: string;
  quote: string;
  who: string;
  lang?: "hi";
  sample: boolean;
};

export const STORIES: Story[] = [
  { tag: "Rectal cancer — laparoscopic surgery, no permanent stoma", quote: "My father was diagnosed with rectal cancer. Dr. Raza studied the MRI and explained that sphincter-saving surgery was possible. Chemoradiation first, then laparoscopic surgery. He was walking the next morning and home in six days.", who: "Name, City (daughter of patient)", sample: true },
  { tag: "Colon cancer — second opinion", quote: "Dr. Raza reviewed my CT and explained that keyhole surgery was an option for me. Four small cuts, home in five days. His honesty about what to expect was the biggest relief.", who: "Name, City", sample: true },
  { tag: "Bilateral inguinal hernia — both sides in one surgery", quote: "I had hernias on both sides. Dr. Raza repaired both laparoscopically in one sitting. Discharged the same evening, back at my desk within the week.", who: "Name, City", sample: true },
  { tag: "Gallstones — दूरबीन से ऑपरेशन", quote: "पित्त की पथरी का दर्द बार-बार हो रहा था। डॉ. रज़ा ने दूरबीन से ऑपरेशन किया — अगले दिन घर, एक हफ़्ते में काम पर।", who: "Name, City", lang: "hi", sample: true },
  { tag: "Complex anal fistula — healed after recurrence", quote: "My fistula had come back more than once. Dr. Raza arranged an MRI first, then did LIFT surgery. Six months on, it has healed and I have had no problems with control.", who: "Name, City", sample: true },
  { tag: "Piles — laser treatment", quote: "बवासीर का laser treatment हुआ — same day घर, दो दिन में सब normal।", who: "Name, City", lang: "hi", sample: true },
  { tag: "Colonoscopy — the fear was worse than the test", quote: "I was terrified of colonoscopy. Dr. Raza explained every step. It took about 20 minutes, and a small polyp was removed on the spot.", who: "Name, City", sample: true },
];
