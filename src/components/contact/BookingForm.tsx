"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_MSG } from "@/lib/site";

const CONCERNS = ["Colon / Rectal Cancer", "Second Opinion", "Hernia", "Gallbladder", "Appendix", "Piles / Fissure / Fistula", "Rectal Bleeding", "Colonoscopy", "Other"];

/**
 * Request-a-callback form. No backend is wired yet: on submit it opens WhatsApp with the message prefilled
 * so nothing is lost. Swap `handleSubmit` for a server action / form service when one is set up.
 */
export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [concern, setConcern] = useState(CONCERNS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Appointment request\nName: ${name}\nPhone: ${phone}\nConcern: ${concern}${message ? `\nMessage: ${message}` : ""}`;
    window.open(WHATSAPP_MSG(text), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const field = "w-full rounded-xl border border-line bg-surface px-4 py-3 text-[16px] text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-ink-2/60 focus:border-teal focus:shadow-[0_0_0_4px_rgba(15,76,92,0.12)]";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface p-6 shadow-card md:p-8">
      <h3 className="text-[24px]">Request a callback</h3>
      <p className="mt-1 text-[14.5px] text-ink-2">We reply on WhatsApp or by phone, usually the same working day.</p>
      <div className="mt-6 grid gap-4">
        <label className="grid gap-1.5 text-[14px] font-semibold text-teal-deep">
          Name
          <input required value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Your full name" autoComplete="name" />
        </label>
        <label className="grid gap-1.5 text-[14px] font-semibold text-teal-deep">
          Phone
          <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={field} placeholder="+91" autoComplete="tel" inputMode="tel" />
        </label>
        <label className="grid gap-1.5 text-[14px] font-semibold text-teal-deep">
          Concern
          <select value={concern} onChange={(e) => setConcern(e.target.value)} className={field}>
            {CONCERNS.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1.5 text-[14px] font-semibold text-teal-deep">
          Message <span className="font-normal text-ink-2">(optional)</span>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} className={field} placeholder="Briefly describe your symptoms or diagnosis" />
        </label>
      </div>
      <motion.button whileTap={{ scale: 0.97 }} type="submit" className="btn btn-amber mt-6 w-full">
        {sent ? "Opened in WhatsApp — send to confirm" : "Send request via WhatsApp"}
      </motion.button>
      <p className="mt-3 text-center text-[12.5px] text-ink-2">By submitting you agree to be contacted about your appointment. No medical advice is given over this form.</p>
    </form>
  );
}
