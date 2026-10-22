"use client";

import { useRef } from "react";

/** Card whose border and surface glow follow the cursor (CSS-variable driven, no re-renders). */
export default function SpotlightCard({ children, className = "", color = "rgba(230,162,60,0.22)" }: { children: React.ReactNode; className?: string; color?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onPointerMove={onMove} className={`group/spot relative ${className}`} style={{ "--mx": "50%", "--my": "50%", "--spot": color } as React.CSSProperties}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/spot:opacity-100" style={{ background: "radial-gradient(420px circle at var(--mx) var(--my), var(--spot), transparent 55%)" }} />
      {children}
    </div>
  );
}
