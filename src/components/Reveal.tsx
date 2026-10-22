"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE, STAGGER, viewportOnce } from "@/lib/motion";

type RevealProps = HTMLMotionProps<"div"> & {
  index?: number;
  y?: number;
  x?: number;
  scale?: number;
  delay?: number;
  duration?: number;
  blur?: boolean;
  amount?: number;
};

/** Scroll-triggered entrance: fades, rises (or slides) and optionally un-blurs once when it enters the viewport. */
export default function Reveal({ index = 0, y = 28, x = 0, scale = 1, delay = 0, duration = 0.75, blur = false, amount, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={amount ? { once: true, amount } : viewportOnce}
      transition={{ duration, ease: EASE, delay: delay + index * STAGGER }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
