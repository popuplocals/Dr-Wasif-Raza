"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_MSG } from "@/lib/site";

const CONCERNS = ["Colon / Rectal Cancer", "Hernia", "Gallbladder", "Appendix", "Piles / Fissure / Fistula", "Rectal Bleeding", "Other"];
const WHEN = [
  { id: "emergency", label: "It's an emergency", sub: "Severe pain, vomiting, a hard lump that won't go back" },
  { id: "week", label: "This week", sub: "Symptoms are bothering me now" },
  { id: "planning", label: "I'm planning ahead", sub: "Screening, second opinion or a planned operation" },
];
const WAYS = ["WhatsApp me", "Call me", "Online via Apollo 24|7", "I'll visit the hospital"];

/**
 * Three-step request flow. No backend is wired: the final step opens WhatsApp with the details prefilled,
 * so nothing is lost. Swap `send` for a server action when a form service is added.
 */
export default function BookingForm() {
  const [step, setStep] = useState(0);
  const [concern, setConcern] = useState("");
  const [when, setWhen] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [way, setWay] = useState(WAYS[0]);
  const [note, setNote] = useState("");
  const [sent, setSent] = useState(false);

  const field = "w-full rounded-xl border border-line bg-surface px-4 py-3 text-[16px] text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-ink-2/60 focus:border-teal focus:shadow-[0_0_0_4px_rgba(15,76,92,0.12)]";
  const canNext = step === 0 ? !!concern : step === 1 ? !!when : name.trim().length > 1 && phone.trim().length > 5;

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const w = WHEN.find((x) => x.id === when)?.label ?? when;
    const text = `Appointment request\nConcern: ${concern}\nTiming: ${w}\nName: ${name}\nPhone: ${phone}\nPreferred: ${way}${note ? `\nMessage: ${note}` : ""}`;
    window.open(WHATSAPP_MSG(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <form onSubmit={send} className="rounded-3xl border border-line bg-surface p-6 shadow-card md:p-8">
      <div className="flex items-center justify-between">
        <h3 className="text-[24px]">Request an appointment</h3>
        <span className="font-heading text-[13px] tracking-[0.14em] text-ink-2">0{step + 1} / 03</span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sage/70" aria-hidden="true">
        <motion.div animate={{ width: `${((step + 1) / 3) * 100}%` }} transition={{ duration: 0.5, ease: EASE }} className="h-full rounded-full bg-gradient-to-r from-teal to-amber" />
      </div>

      <div className="mt-6 min-h-[260px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3, ease: EASE }}>
            {step === 0 && (
              <fieldset>
                <legend className="text-[15px] font-semibold text-teal-deep">What brings you in?</legend>
                <div className="mt-4 flex flex-wrap gap-2">
                  {CONCERNS.map((c) => (
                    <button key={c} type="button" onClick={() => setConcern(c)} aria-pressed={concern === c} className={`rounded-full border px-4 py-2.5 text-[15px] font-medium transition-[background-color,color,border-color] duration-300 ${concern === c ? "border-teal bg-teal text-white" : "border-teal/15 bg-surface text-teal-deep hover:border-teal/40 hover:bg-teal-soft"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}
            {step === 1 && (
              <fieldset>
                <legend className="text-[15px] font-semibold text-teal-deep">How soon do you need to be seen?</legend>
                <div className="mt-4 grid gap-3">
                  {WHEN.map((w) => (
                    <button key={w.id} type="button" onClick={() => setWhen(w.id)} aria-pressed={when === w.id} className={`rounded-2xl border p-4 text-left transition-[background-color,border-color] duration-300 ${when === w.id ? "border-teal bg-teal-soft" : "border-line bg-surface hover:border-teal/40"}`}>
                      <span className="block font-semibold text-teal-deep">{w.label}</span>
                      <span className="block text-[14px] text-ink-2">{w.sub}</span>
                    </button>
                  ))}
                </div>
                {when === "emergency" && (
                  <p className="mt-4 rounded-2xl border-l-4 border-amber bg-amber-pale/60 p-4 text-[15px] text-teal-deep">
                    Please call now: <a href={PHONE_TEL} className="font-bold underline">{PHONE_DISPLAY}</a>, or go to the Apollo Medics emergency department. Do not wait for a reply here.
                  </p>
                )}
              </fieldset>
            )}
            {step === 2 && (
              <div className="grid gap-4">
                <label className="grid gap-1.5 text-[14px] font-semibold text-teal-deep">
                  Name
                  <input required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Your full name" autoComplete="name" />
                </label>
                <label className="grid gap-1.5 text-[14px] font-semibold text-teal-deep">
                  Phone
                  <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} placeholder="+91" autoComplete="tel" inputMode="tel" />
                </label>
                <label className="grid gap-1.5 text-[14px] font-semibold text-teal-deep">
                  How should we reach you?
                  <select value={way} onChange={(e) => setWay(e.target.value)} className={field}>
                    {WAYS.map((w) => (
                      <option key={w}>{w}</option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-1.5 text-[14px] font-semibold text-teal-deep">
                  Anything else? <span className="font-normal text-ink-2">(optional)</span>
                  <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={2} className={field} placeholder="Briefly describe your symptoms or diagnosis" />
                </label>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center gap-3">
        {step > 0 && (
          <button type="button" onClick={() => setStep(step - 1)} className="btn btn-ghost">
            Back
          </button>
        )}
        {step < 2 ? (
          <button type="button" disabled={!canNext} onClick={() => setStep(step + 1)} className="btn btn-teal ml-auto disabled:cursor-not-allowed disabled:opacity-40">
            Continue <span aria-hidden="true">→</span>
          </button>
        ) : (
          <button type="submit" disabled={!canNext} className="btn btn-amber ml-auto disabled:cursor-not-allowed disabled:opacity-40">
            {sent ? "Opened in WhatsApp — press send" : "Send via WhatsApp"}
          </button>
        )}
      </div>
      <p className="mt-4 text-center text-[12.5px] text-ink-2">By sending you agree to be contacted about your appointment. No medical advice is given over this form.</p>
    </form>
  );
}
