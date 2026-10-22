"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { WHATSAPP_MSG } from "@/lib/site";

const NEEDED = ["Colonoscopy report", "Biopsy / pathology report", "CT scan (and pelvic MRI for rectal cancer)", "Recent blood tests including CEA", "Any treatment already given", "Your medicine list"];

/**
 * Report checklist for second opinions. Files are NOT uploaded to any server: the drop zone only builds a
 * checklist of what you have so the WhatsApp message lists it, then you attach the files in WhatsApp itself.
 */
export default function ReportDrop() {
  const input = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<string[]>([]);
  const [over, setOver] = useState(false);

  const add = (list: FileList | null) => {
    if (!list) return;
    setFiles((f) => Array.from(new Set([...f, ...Array.from(list).map((x) => x.name)])));
  };
  const msg = `Hello Dr. Raza's office, I would like a second opinion for colon/rectal cancer. I am sending these reports:\n${files.length ? files.map((f) => `- ${f}`).join("\n") : "- (will attach in this chat)"}`;

  return (
    <section className="mt-12 rounded-3xl border border-teal/15 bg-teal-soft p-6 md:p-8" aria-label="Prepare your reports">
      <p className="text-[12.5px] font-semibold uppercase tracking-[0.22em] text-teal">Prepare your reports</p>
      <h2 className="mt-2 text-[clamp(22px,2.6vw,30px)]">Gather these, then send them on WhatsApp</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {NEEDED.map((n) => (
          <li key={n} className="flex items-start gap-2 text-[15px] text-ink">
            <span aria-hidden="true" className="mt-[9px] h-[2px] w-3 shrink-0 bg-amber" />
            {n}
          </li>
        ))}
      </ul>
      <motion.div
        onDragOver={(e) => {
          e.preventDefault();
          setOver(true);
        }}
        onDragLeave={() => setOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setOver(false);
          add(e.dataTransfer.files);
        }}
        animate={{ scale: over ? 1.02 : 1 }}
        className={`mt-6 rounded-2xl border-2 border-dashed p-6 text-center transition-colors duration-300 ${over ? "border-amber bg-amber-pale/60" : "border-teal/30 bg-surface"}`}
      >
        <p className="font-heading text-[18px] text-teal-deep">Drop your report files here</p>
        <p className="mt-1 text-[14px] text-ink-2">They stay on your device. This only lists them in your message.</p>
        <button type="button" onClick={() => input.current?.click()} className="btn btn-ghost mt-4">
          Choose files
        </button>
        <input ref={input} type="file" multiple className="hidden" onChange={(e) => add(e.target.files)} />
      </motion.div>
      {files.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {files.map((f) => (
            <li key={f} className="rounded-full bg-surface px-3 py-1.5 text-[13.5px] text-teal-deep shadow-card">
              {f}
            </li>
          ))}
        </ul>
      )}
      <a href={WHATSAPP_MSG(msg)} target="_blank" rel="noopener noreferrer" className="btn btn-amber mt-6">
        Open WhatsApp and attach files
      </a>
    </section>
  );
}
