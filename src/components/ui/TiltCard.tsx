"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = { children: React.ReactNode; className?: string; max?: number; glare?: boolean; style?: React.CSSProperties };

/** 3D tilt that follows the pointer, with an optional moving glare. Falls back to static on touch. */
export default function TiltCard({ children, className = "", max = 8, glare = true, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 120, damping: 18, mass: 0.4 });
  const sy = useSpring(py, { stiffness: 120, damping: 18, mass: 0.4 });
  const rotateY = useTransform(sx, [0, 1], [-max, max]);
  const rotateX = useTransform(sy, [0, 1], [max, -max]);
  const gx = useTransform(sx, [0, 1], [0, 100]);
  const gy = useTransform(sy, [0, 1], [0, 100]);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.28), transparent 55%)`;

  const onMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 1200 }} className={className}>
      <motion.div ref={ref} onPointerMove={onMove} onPointerLeave={reset} style={{ rotateX, rotateY, transformStyle: "preserve-3d", ...style }} className="relative h-full w-full">
        {children}
        {glare && <motion.div aria-hidden="true" style={{ background: glareBg }} className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-soft-light" />}
      </motion.div>
    </div>
  );
}
