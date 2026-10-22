"use client";

import { useEffect, useMemo, useState } from "react";
import { useInView } from "@/hooks/useInView";

export default function CountUp({ value, className, duration = 1500 }: { value: string; className?: string; duration?: number }) {
  const [ref, visible] = useInView<HTMLSpanElement>(0.3);
  const parsed = useMemo(() => {
    const m = value.match(/^(\D*)(\d+)(.*)$/);
    return m ? { prefix: m[1], target: parseInt(m[2], 10), suffix: m[3] } : null;
  }, [value]);
  const target = parsed?.target ?? 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible || !parsed) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setN(Math.round(target * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, parsed, target, duration]);

  if (!parsed) return <span className={className}>{value}</span>;
  return (
    <span ref={ref} className={className}>
      {parsed.prefix}
      {n}
      {parsed.suffix}
    </span>
  );
}
