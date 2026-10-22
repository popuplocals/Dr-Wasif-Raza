"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/** Article reading progress: a teal line under the header that fills as the visitor reads. */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });
  return <motion.div aria-hidden="true" style={{ scaleX }} className="fixed left-0 right-0 top-[3px] z-[79] h-[2px] origin-left bg-teal" />;
}
