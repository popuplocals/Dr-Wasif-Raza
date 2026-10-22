"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { WHATSAPP_MSG } from "@/lib/site";
import { WaIcon } from "@/components/Navbar";

const HREF = WHATSAPP_MSG("Hello Dr. Raza's office, I would like to book a consultation.");

/** Floating WhatsApp button (desktop/tablet): slides in after the visitor scrolls. Mobile uses the sticky bar instead. */
export default function WhatsAppButton() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShown(window.scrollY > 300);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {shown && (
        <motion.a
          key="wa"
          href={HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          whileHover={{ scale: 1.08, y: -3 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="group fixed bottom-7 right-6 z-[55] hidden h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_34px_-10px_rgba(37,211,102,0.65)] md:flex"
        >
          <span aria-hidden="true" className="absolute inset-0 -z-10 rounded-full bg-[#25D366]/45 animate-wa-pulse" />
          <WaIcon size={28} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-teal-deep px-3 py-1.5 text-xs text-bg opacity-0 shadow-lift transition-[opacity,transform] duration-300 ease-spring translate-x-1 group-hover:translate-x-0 group-hover:opacity-100">
            WhatsApp your reports
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
