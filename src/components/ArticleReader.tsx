"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Props = { lang: string; counterpart?: { href: string; label: string }; children: React.ReactNode };

const SIZES = [0.92, 1, 1.12, 1.25];

/** Reading tools: text size, listen (browser speech), and a link to the same topic in the other language. */
export default function ArticleReader({ lang, counterpart, children }: Props) {
  const [size, setSize] = useState(1);
  const [speaking, setSpeaking] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const [canSpeak, setCanSpeak] = useState(false);

  useEffect(() => {
    setCanSpeak("speechSynthesis" in window);
    return () => window.speechSynthesis?.cancel();
  }, []);

  const listen = () => {
    if (!canSpeak) return;
    const s = window.speechSynthesis;
    if (speaking) {
      s.cancel();
      setSpeaking(false);
      return;
    }
    const text = box.current?.innerText ?? "";
    const u = new SpeechSynthesisUtterance(text.slice(0, 12000));
    u.lang = lang === "hi" ? "hi-IN" : "en-IN";
    u.rate = 0.95;
    u.onend = () => setSpeaking(false);
    u.onerror = () => setSpeaking(false);
    setSpeaking(true);
    s.speak(u);
  };

  const btn = "flex h-9 min-w-9 items-center justify-center rounded-full border border-teal/20 bg-surface px-3 text-[13.5px] font-semibold text-teal-deep transition-colors hover:border-teal/50 hover:bg-teal-soft aria-pressed:bg-teal aria-pressed:text-white";

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2 rounded-2xl border border-line bg-surface p-2.5 shadow-card" role="toolbar" aria-label="Reading tools">
        <span className="px-2 text-[12px] font-mono font-medium uppercase tracking-[0.12em] text-ink-2">Text</span>
        {SIZES.map((s, i) => (
          <button key={s} type="button" aria-pressed={size === s} onClick={() => setSize(s)} className={btn} aria-label={`Text size ${i + 1}`}>
            <span style={{ fontSize: 11 + i * 2.5 }}>A</span>
          </button>
        ))}
        {canSpeak && (
          <button type="button" onClick={listen} aria-pressed={speaking} className={`${btn} ml-1`}>
            {speaking ? "■ Stop" : "▶ Listen"}
          </button>
        )}
        {counterpart && (
          <Link href={counterpart.href} className={`${btn} ml-auto`}>
            {counterpart.label}
          </Link>
        )}
      </div>
      <div ref={box} style={{ ["--prose-scale" as string]: size }}>
        {children}
      </div>
    </div>
  );
}
