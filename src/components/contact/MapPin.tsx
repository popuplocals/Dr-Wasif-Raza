"use client";

import { motion } from "framer-motion";

/** Pin that drops, bounces and sends out a ripple when it scrolls into view. */
export default function MapPin() {
  return (
    <span className="relative flex h-11 w-11 shrink-0 items-end justify-center" aria-hidden="true">
      <motion.span initial={{ scale: 0, opacity: 0.6 }} whileInView={{ scale: 2.4, opacity: 0 }} viewport={{ once: true }} transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }} className="absolute bottom-0 h-3 w-3 rounded-full bg-amber" />
      <motion.svg
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 300, damping: 12, delay: 0.2 }}
        width="34"
        height="40"
        viewBox="0 0 34 40"
        fill="none"
      >
        <path d="M17 38C17 38 3 24.5 3 15a14 14 0 1 1 28 0c0 9.5-14 23-14 23Z" fill="#0F4C5C" />
        <circle cx="17" cy="15" r="5.5" fill="#E6A23C" />
      </motion.svg>
    </span>
  );
}
