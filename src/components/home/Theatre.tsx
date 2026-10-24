"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { EASE } from "@/lib/motion";

type Clip = { src: string; poster: string; title: string; text: string; sensitive?: boolean };

const CLIPS: Clip[] = [
  { src: "/videos/ot-laparoscopic-1.mp4", poster: "/photos/ot-video-1.webp", title: "Every surgery starts with a checklist", text: "The surgical team at Apollo Medics Lucknow before the operation." },
  { src: "/videos/ot-laparoscopic-2.mp4", poster: "/photos/ot-video-2.webp", title: "Keyhole surgery: the same operation through 5 mm ports", text: "A camera and fine instruments through small cuts." },
  { src: "/videos/ot-laparoscopic-3.mp4", poster: "/photos/ot-video-3.webp", title: "In the operating theatre", text: "Dr. Raza and the surgical team, Apollo Medics Lucknow.", sensitive: true },
  { src: "/videos/ot-laparoscopic-4.mp4", poster: "/photos/ot-video-4.webp", title: "The surgical team", text: "Apollo Medics Lucknow operating theatre.", sensitive: true },
];

/**
 * "In the operating theatre". Desktop: a pinned stage that moves through the four clips as you scroll; captions and
 * progress bars are driven by the same scroll value. Per the PDF's performance rule there is NO autoplay: each clip
 * shows its poster and starts only when the visitor taps play. Phones get a swipe rail with the same behaviour.
 */
export default function Theatre() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(CLIPS.length - 1, Math.max(0, Math.floor(v * CLIPS.length)))));

  return (
    <section ref={ref} className="relative bg-teal-deep text-bg" aria-label="In the operating theatre">
      <div className={`hidden lg:block ${reduce ? "" : "h-[380vh]"}`}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1400px] grid-cols-[0.9fr_1.1fr] items-center gap-16 px-10">
            <div>
              <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
                <span className="h-px w-7 bg-amber" /> In the operating theatre
              </p>
              <h2 className="mt-4 text-[clamp(24px,2.9vw,38px)] text-white">Real footage from Apollo Medics. No patient is identifiable.</h2>
              <ol className="mt-10 flex flex-col gap-2">
                {CLIPS.map((c, i) => (
                  <Caption key={c.src} clip={c} i={i} progress={smooth} active={active === i} />
                ))}
              </ol>
              <p className="mt-8 text-[13px] text-bg/55">Scroll to move between clips. Tap play to watch; clips are muted.</p>
            </div>
            <div className="relative h-[78vh]">
              {CLIPS.map((c, i) => (
                <Stage key={c.src} clip={c} i={i} progress={smooth} active={active === i} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-16 lg:hidden">
        <p className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.2em] text-amber">
          <span className="h-px w-7 bg-amber" /> In the operating theatre
        </p>
        <h2 className="mt-4 text-[clamp(22px,5vw,30px)] text-white">Real footage from Apollo Medics.</h2>
        <div className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2" data-lenis-prevent>
          {CLIPS.map((c, i) => (
            <div key={c.src} className="w-[72vw] shrink-0 snap-center sm:w-[320px]">
              <ClipPlayer clip={c} index={i} caption />
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
    <li className={`rounded-md border px-4 py-3 transition-colors duration-500 ${active ? "border-amber/50 bg-white/5" : "border-white/10"}`}>
      <div className="flex items-baseline gap-3">
        <span className="text-[13px] font-semibold tracking-[0.16em] text-amber">0{i + 1}</span>
        <span className={`font-heading text-[17px] font-bold transition-colors duration-500 ${active ? "text-white" : "text-bg/60"}`}>{clip.title}</span>
      </div>
      <p className={`mt-1 text-[14px] leading-relaxed transition-colors duration-500 ${active ? "text-bg/85" : "text-bg/45"}`}>{clip.text}</p>
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
  const x = useTransform(progress, [start - w * 0.5, start, end, end + w * 0.5], ["60%", "0%", "0%", "-30%"]);
  const scale = useTransform(progress, [start - w * 0.5, start, end, end + w * 0.5], [0.8, 1, 1, 0.9]);
  const opacity = useTransform(progress, [start - w * 0.5, start - w * 0.1, end + w * 0.1, end + w * 0.5], [0, 1, 1, 0]);
  const rotate = useTransform(progress, [start - w * 0.5, start, end, end + w * 0.5], [6, 0, 0, -4]);
  return (
    <motion.div style={{ x, scale, opacity, rotate }} className="absolute inset-0 mx-auto aspect-[9/16] h-full max-h-full" aria-hidden={!active}>
      <ClipPlayer clip={clip} index={i} paused={!active} />
    </motion.div>
  );
}

/** Poster-first player. Never autoplays; `paused` stops and rewinds it when the stage moves to another clip. */
function ClipPlayer({ clip, index, paused = false, caption = false }: { clip: Clip; index: number; paused?: boolean; caption?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [revealed, setRevealed] = useState(!clip.sensitive);

  useEffect(() => {
    const v = ref.current;
    if (v && paused && !v.paused) {
      v.pause();
      v.currentTime = 0;
      setPlaying(false);
    }
  }, [paused]);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play().then(() => setPlaying(true)).catch(() => {});
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <motion.figure initial={caption ? { opacity: 0, y: 20 } : false} whileInView={caption ? { opacity: 1, y: 0 } : undefined} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: EASE, delay: index * 0.05 }} className="relative h-full w-full overflow-hidden rounded-md bg-black shadow-lift ring-1 ring-white/15">
      <video ref={ref} src={clip.src} poster={clip.poster} muted loop playsInline preload="none" onEnded={() => setPlaying(false)} className={`h-full w-full object-cover transition-[filter] duration-500 ${revealed ? "" : "blur-xl"}`} aria-label={clip.title} />
      {revealed && (
        <button type="button" onClick={toggle} aria-label={playing ? `Pause: ${clip.title}` : `Play: ${clip.title}`} className="group absolute inset-0 flex items-center justify-center">
          <span className={`flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-teal shadow-lift transition-[opacity,transform] duration-300 group-hover:scale-110 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
            {playing ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </span>
        </button>
      )}
      {!revealed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-teal-deep/40 p-6 text-center">
          <p className="font-heading text-[18px] font-bold text-white">Contains surgical footage</p>
          <p className="mt-1 text-[13px] text-white/80">Some viewers may find this uncomfortable.</p>
          <button type="button" onClick={() => setRevealed(true)} className="btn btn-amber mt-4 px-5 py-2.5 text-[14px]">
            Show footage
          </button>
        </div>
      )}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
        <p className="font-heading text-[15px] font-bold text-white">{clip.title}</p>
        {caption && <p className="mt-0.5 text-[12.5px] text-white/75">{clip.text}</p>}
      </figcaption>
    </motion.figure>
  );
}
