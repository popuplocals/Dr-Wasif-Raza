"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

/** Big statement whose words brighten one by one as the visitor scrolls through it. */
export default function ScrollText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className={`flex flex-wrap ${className}`}>
      {words.map((w, i) => (
        <Word key={`${w}-${i}`} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <span className="relative mr-[0.28em] mt-[0.1em] inline-block">
      <motion.span style={{ opacity, y }} className="inline-block">
        {children}
      </motion.span>
    </span>
  );
}
