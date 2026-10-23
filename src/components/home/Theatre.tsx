"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { EASE } from "@/lib/motion";

type Clip = { src: string; poster: string; title: string; text: string; sensitive?: boolean };

const CLIPS: Clip[] = [
  { src: "/videos/ot-laparoscopic-1.mp4", poster: "/photos/ot-video-1.webp", title: "The team before the first incision", text: "Every operation starts with a checklist: patient, procedure, side, anaesthesia, instruments." },
  { src: "/videos/ot-laparoscopic-2.mp4", poster: "/photos/ot-video-2.webp", title: "Keyhole surgery through 5 mm ports", text: "A camera and fine instruments through small cuts. Same operation, far less trauma." },
  { src: "/videos/ot-laparoscopic-3.mp4", poster: "/photos/ot-video-3.webp", title: "Precision at the operating table", text: "Open steps are done with the same care when a tumour or anatomy needs it.", sensitive: true },
  { src: "/videos/ot-laparoscopic-4.mp4", poster: "/photos/ot-video-4.webp", title: "Working as one team", text: "Surgeon, assistant, anaesthetist and scrub nurse, each with a role at every moment.", sensitive: true },
];

/**
 * "In the operating theatre": a pinned stage that scrubs with scroll. As the visitor scrolls through the
 * section, the four clips take turns: each one scales in, plays while it is current, and hands over to the
 * next. Captions and progress bars are driven by the same scroll value, so scrolling back reverses it.
 * Phones get a swipe rail where each clip plays when in view.
 */
export default function Theatre() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(CLIPS.length - 1, Math.floor(v * CLIPS.length))));

  return (
    <section ref={ref} className="relative bg-teal-deep text-bg" aria-label="In the operating theatre">
      {/* Desktop: pinned stage */}
      <div className={`hidden lg:block ${reduce ? "" : "h-[380vh]"}`}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-[0.9fr_1.1fr] items-center gap-16 px-10">
            <div>
              <p className="flex items-center gap-3 text-[12.5px] font-mono font-medium uppercase tracking-[0.12em] text-amber">
                <span className="h-px w-7 bg-amber" /> In the operating theatre
              </p>
              <h2 className="mt-4 text-[clamp(30px,3.6vw,46px)] text-white">Real footage from Apollo Medics. No patient is identifiable.</h2>
              <ol className="mt-10 flex flex-col gap-2">
                {CLIPS.map((c, i) => (
                  <Caption key={c.src} clip={c} i={i} progress={smooth} active={active === i} />
                ))}
              </ol>
              <p className="mt-8 text-[13px] text-bg/55">Keep scrolling to move between clips. Muted; no sound is recorded in theatre.</p>
            </div>
            <div className="relative h-[78vh]">
              {CLIPS.map((c, i) => (
                <Stage key={c.src} clip={c} i={i} progress={smooth} active={active === i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Phones and tablets: swipe rail */}
      <div className="px-5 py-16 lg:hidden">
        <p className="flex items-center gap-3 text-[12.5px] font-mono font-medium uppercase tracking-[0.12em] text-amber">
          <span className="h-px w-7 bg-amber" /> In the operating theatre
        </p>
        <h2 className="mt-4 text-[clamp(26px,6vw,34px)] text-white">Real footage from Apollo Medics.</h2>
        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2" data-lenis-prevent>
          {CLIPS.map((c, i) => (
            <div key={c.src} className="w-[72vw] shrink-0 snap-center sm:w-[320px]">
              <RailClip clip={c} i={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Caption({ clip, i, progress, active }: { clip: Clip; i: number; progress: MotionValue<number>; active: boolean }) {
  const n = CLIPS.length;
  const width = useTransform(progress, [i / n, (i + 1) / n], ["0%", "100%"]);
  return (
    <li className={`rounded-2xl border px-4 py-3 transition-colors duration-500 ${active ? "border-amber/50 bg-white/5" : "border-white/10"}`}>
      <div className="flex items-baseline gap-3">
        <span className="font-heading text-[13px] tracking-[0.16em] text-amber">0{i + 1}</span>
        <span className={`font-heading text-[19px] transition-colors duration-500 ${active ? "text-white" : "text-bg/60"}`}>{clip.title}</span>
      </div>
      <p className={`mt-1 text-[14.5px] leading-relaxed transition-colors duration-500 ${active ? "text-bg/85" : "text-bg/45"}`}>{clip.text}</p>
      <div className="mt-2 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
        <motion.span style={{ width }} className="block h-full bg-amber" />
      </div>
    </li>
  );
}

function Stage({ clip, i, progress, active }: { clip: Clip; i: number; progress: MotionValue<number>; active: boolean }) {
  const n = CLIPS.length;
  const start = i / n;
  const end = (i + 1) / n;
  const w = 1 / n;
  // Enter from the right and slightly small, sit centred while current, then drift up-left and fade.
  const x = useTransform(progress, [start - w * 0.5, start, end, end + w * 0.5], ["60%", "0%", "0%", "-30%"]);
  const scale = useTransform(progress, [start - w * 0.5, start, end, end + w * 0.5], [0.8, 1, 1, 0.9]);
  const opacity = useTransform(progress, [start - w * 0.5, start - w * 0.1, end + w * 0.1, end + w * 0.5], [0, 1, 1, 0]);
  const rotate = useTransform(progress, [start - w * 0.5, start, end, end + w * 0.5], [6, 0, 0, -4]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [revealed, setRevealed] = useState(!clip.sensitive);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (active && revealed) v.play().catch(() => {});
    else v.pause();
  }, [active, revealed]);

  return (
    <motion.figure style={{ x, scale, opacity, rotate }} className="absolute inset-0 mx-auto aspect-[9/16] h-full max-h-full overflow-hidden rounded-[28px] bg-black shadow-lift ring-1 ring-white/15" aria-hidden={!active}>
      <video ref={videoRef} src={clip.src} poster={clip.poster} muted loop playsInline preload="metadata" className={`h-full w-full object-cover transition-[filter] duration-500 ${revealed ? "" : "blur-xl"}`} aria-label={clip.title} />
      {!revealed && <SensitiveCover onReveal={() => setRevealed(true)} />}
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-[13px] text-white/85">
        {clip.title} · Apollo Medics Lucknow
      </figcaption>
    </motion.figure>
  );
}

function RailClip({ clip, i }: { clip: Clip; i: number }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [revealed, setRevealed] = useState(!clip.sensitive);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && revealed) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.6 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [revealed]);
  return (
    <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }} className="relative aspect-[9/16] overflow-hidden rounded-3xl bg-black ring-1 ring-white/15">
      <video ref={ref} src={clip.src} poster={clip.poster} muted loop playsInline preload="none" className={`h-full w-full object-cover ${revealed ? "" : "blur-xl"}`} aria-label={clip.title} />
      {!revealed && <SensitiveCover onReveal={() => setRevealed(true)} />}
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
        <p className="font-heading text-[16px] text-white">{clip.title}</p>
        <p className="mt-0.5 text-[12.5px] text-white/75">{clip.text}</p>
      </figcaption>
    </motion.figure>
  );
}

function SensitiveCover({ onReveal }: { onReveal: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-deep/40 p-6 text-center">
      <p className="font-heading text-[18px] text-white">Contains surgical footage</p>
      <p className="mt-1 text-[13px] text-white/80">Some viewers may find this uncomfortable.</p>
      <button type="button" onClick={onReveal} className="btn btn-amber mt-4 px-5 py-2.5 text-[14px]">
        Tap to view
      </button>
    </div>
  );
}
