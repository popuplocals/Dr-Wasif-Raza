"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FAQ_GROUPS, HOME_FAQS } from "@/content/faqs";
import { EASE } from "@/lib/motion";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";

type QA = { q: string; a: string };
const STOP = new Set(["the", "a", "an", "is", "are", "do", "does", "i", "my", "me", "can", "will", "how", "what", "to", "of", "and", "or", "in", "it", "for", "on", "be", "need", "you", "with"]);
const words = (s: string) =>
  s
    .toLowerCase()
    .replace(/<[^>]+>/g, " ")
    .split(/[^a-z0-9ऀ-ॿ]+/)
    .filter((w) => w.length > 2 && !STOP.has(w));

const SUGGEST = ["Is colorectal cancer curable?", "Will I need a colostomy bag?", "Does Dr. Raza perform robotic surgery?", "Is piles surgery painful?", "How do I book?", "Can I get a second opinion?"];

/** Small FAQ assistant. Matches your question against the site's own FAQ answers. No data leaves the browser. */
export default function AskPanel() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [thread, setThread] = useState<{ q: string; a: string; miss?: boolean }[]>([]);

  const bank: QA[] = useMemo(() => {
    const all = [...HOME_FAQS, ...FAQ_GROUPS.flatMap((g) => g.items)];
    const seen = new Set<string>();
    return all.filter((x) => (seen.has(x.q) ? false : (seen.add(x.q), true)));
  }, []);

  const ask = (q: string) => {
    const qw = new Set(words(q));
    if (!qw.size) return;
    let best: QA | null = null;
    let bestScore = 0;
    for (const item of bank) {
      const iw = words(item.q + " " + item.a);
      const qa = new Set(words(item.q));
      let s = 0;
      for (const w of qw) {
        if (qa.has(w)) s += 3;
        else if (iw.includes(w)) s += 1;
      }
      if (s > bestScore) {
        bestScore = s;
        best = item;
      }
    }
    setThread((t) => [...t, best && bestScore >= 3 ? { q, a: best.a } : { q, a: "", miss: true }]);
    setText("");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Ask a question"
        className="fixed bottom-[76px] left-4 z-[55] flex h-12 items-center gap-2 rounded-full bg-teal px-4 text-[14px] font-semibold text-white shadow-lift transition-transform duration-300 ease-spring hover:-translate-y-0.5 md:bottom-7 md:left-6"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 12a8 8 0 0 1-11.5 7.2L4 20l1-4.5A8 8 0 1 1 21 12Z" />
        </svg>
        Ask a question
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed bottom-[132px] left-4 z-[56] flex max-h-[70vh] w-[min(380px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-lift md:bottom-[84px] md:left-6"
            role="dialog"
            aria-label="Ask a question"
          >
            <div className="bg-teal-deep px-5 py-4 text-bg">
              <p className="font-heading text-[18px] font-semibold text-white">Quick answers</p>
              <p className="text-[12.5px] text-bg/70">From Dr. Raza&apos;s FAQ. Not a diagnosis.</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4" data-lenis-prevent>
              {thread.length === 0 && (
                <div className="flex flex-wrap gap-2">
                  {SUGGEST.map((s) => (
                    <button key={s} type="button" onClick={() => ask(s)} className="rounded-full border border-teal/20 bg-teal-soft px-3 py-1.5 text-left text-[13.5px] text-teal-deep transition-colors hover:border-teal/50">
                      {s}
                    </button>
                  ))}
                </div>
              )}
              {thread.map((m, i) => (
                <div key={i} className="mb-4">
                  <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-sm bg-teal px-3.5 py-2 text-[14.5px] text-white">{m.q}</p>
                  <div className="mt-2 max-w-[92%] rounded-2xl rounded-bl-sm bg-sage/50 px-3.5 py-2.5 text-[14.5px] leading-relaxed text-ink">
                    {m.miss ? (
                      <>
                        I don&apos;t have a ready answer for that. Please call <a className="font-semibold text-teal underline" href={PHONE_TEL}>{PHONE_DISPLAY}</a> or{" "}
                        <a className="font-semibold text-teal underline" href={WHATSAPP} target="_blank" rel="noopener noreferrer">WhatsApp us</a>.
                      </>
                    ) : (
                      <span dangerouslySetInnerHTML={{ __html: m.a }} />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                ask(text);
              }}
              className="flex gap-2 border-t border-line p-3"
            >
              <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your question" className="min-w-0 flex-1 rounded-full border border-line bg-bg px-4 py-2.5 text-[15px] outline-none focus:border-teal" />
              <button type="submit" className="rounded-full bg-amber px-4 text-[14px] font-bold text-[#1f1a10]">
                Ask
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
