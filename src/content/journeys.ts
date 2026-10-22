import type { ServiceGroup } from "@/content/services";

export type JourneyStep = { title: string; text: string; when: string };

/** Plain-language "what happens next" paths, per service group. Times are typical, not promises. */
export const JOURNEYS: Record<ServiceGroup, { heading: string; steps: JourneyStep[] }> = {
  cancer: {
    heading: "Your treatment journey, step by step",
    steps: [
      { when: "Day 1", title: "First consultation", text: "Dr. Raza reviews your reports, examines you and explains what he sees in plain language. Bring a family member." },
      { when: "Week 1", title: "Staging tests", text: "Colonoscopy and biopsy are confirmed, with CT, and a pelvic MRI for rectal cancer. Your case can be reviewed by the multidisciplinary team." },
      { when: "Week 1–3", title: "Plan agreed", text: "You decide together: surgery first, or chemoradiotherapy first for some rectal cancers. Keyhole or robotic options are discussed honestly." },
      { when: "Surgery day", title: "The operation", text: "Laparoscopic or robotic where suitable. Most patients stand and walk the next day." },
      { when: "Days 1–6", title: "Hospital recovery", text: "Pain control, early walking and eating. Typical stay after keyhole colon surgery is 4–6 days." },
      { when: "About 1–2 weeks", title: "Pathology results", text: "The removed tissue is examined to confirm the stage. If chemotherapy is advised, Dr. Raza coordinates with the oncology team." },
      { when: "Ongoing", title: "Follow-up", text: "Regular check-ups, blood tests and scheduled colonoscopy for years afterwards." },
    ],
  },
  lap: {
    heading: "From first visit to back on your feet",
    steps: [
      { when: "Day 1", title: "Consultation", text: "Examination, review of scans and a clear explanation of whether surgery is needed and which approach is best." },
      { when: "Before surgery", title: "Pre-operative checks", text: "Routine blood tests, ECG and anaesthesia assessment. You are told when to stop eating and which medicines to hold." },
      { when: "Surgery day", title: "Keyhole or robotic surgery", text: "Small incisions, a camera and fine instruments. Many procedures are done as daycare or with a single night's stay." },
      { when: "Same day / next day", title: "Walking early", text: "Getting up and moving early lowers complications and speeds recovery." },
      { when: "First week", title: "Home and wound care", text: "Simple wound care, light meals and gentle walks. You have a number to call for any concern." },
      { when: "Weeks 1–4", title: "Back to routine", text: "Light work first, then heavier activity as advised for your procedure." },
    ],
  },
  general: {
    heading: "What to expect, step by step",
    steps: [
      { when: "Day 1", title: "Examination", text: "A private, unhurried examination and a conversation about your symptoms and worries." },
      { when: "Same visit / days", title: "Simple tests", text: "Proctoscopy in the clinic, or colonoscopy and scans where needed. Many answers come the same day." },
      { when: "Decision", title: "Your options", text: "Medicines and diet first where that is enough; a procedure when it is the right answer. You choose with the facts in front of you." },
      { when: "Procedure day", title: "Treatment", text: "Banding, laser, stapled or surgical treatment, usually as a day-care case." },
      { when: "Days to weeks", title: "Recovery", text: "Comfort medicines, sitz baths and diet advice. Most people return to desk work within days." },
      { when: "After", title: "Review", text: "A check-up to confirm healing, with advice to keep problems from coming back." },
    ],
  },
};
