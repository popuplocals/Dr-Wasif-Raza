"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { HOSPITAL, NAV_GROUPS, OPD, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";

export const NAV_REST_HEIGHT = 112; // top bar (36) + main bar (76)

const Chevron = ({ open }: { open: boolean }) => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`opacity-70 transition-transform duration-300 ease-spring ${open ? "rotate-180" : ""}`}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/**
 * Fixed header. A thin dark-teal top bar carries phone / WhatsApp / hospital / OPD; the main bar holds the
 * name + tagline, four dropdown groups, Contact and the amber Book CTA. On scroll the main bar condenses into
 * a floating glass capsule. Mobile: hamburger opens a full-height panel with the same four groups as accordions.
 */
export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 48);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.classList.toggle("lenis-stopped", open);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const show = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenGroup(label);
  };
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setOpenGroup(null), 140);
  };

  const groupActive = (g: (typeof NAV_GROUPS)[number]) => g.links.some((l) => pathname === l.href || pathname.startsWith(l.href + "/"));
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const topLink = (active: boolean) =>
    `relative whitespace-nowrap text-[14.5px] font-medium transition-[color,transform] duration-300 ease-spring hover:-translate-y-0.5 after:absolute after:-bottom-[7px] after:left-0 after:h-[2px] after:rounded-full after:bg-amber after:transition-[width] after:duration-300 after:ease-spring after:content-[''] ${
      active ? "text-teal after:w-full" : "text-ink after:w-0 hover:text-teal hover:after:w-full"
    }`;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[70]">
        {/* Top bar */}
        <div
          className={`overflow-hidden bg-teal-deep text-[12.5px] text-bg/85 transition-[max-height,opacity] duration-500 ease-spring ${
            scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
          }`}
        >
          <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between gap-4 px-5 md:px-10">
            <div className="flex items-center gap-3">
              <a href={PHONE_TEL} className="flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-amber">
                <PhoneIcon /> {PHONE_DISPLAY}
              </a>
              <span className="hidden text-bg/40 sm:inline">·</span>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-1.5 transition-colors hover:text-amber sm:flex">
                <WaIcon /> WhatsApp
              </a>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <span>{HOSPITAL.replace(" Superspeciality Hospitals", " Medics")}, Lucknow</span>
              <span className="text-bg/40">·</span>
              <span>{OPD}</span>
            </div>
          </div>
        </div>

        {/* Main bar */}
        <div className={`pointer-events-none transition-[padding] duration-[450ms] ease-spring ${scrolled ? "px-3 sm:px-4" : "px-0"}`}>
          <div
            className={`pointer-events-auto relative mx-auto border transition-[height,max-width,margin,border-radius,background-color,box-shadow,border-color] duration-[450ms] ease-spring ${
              scrolled
                ? "mt-3 h-[60px] max-w-[84rem] rounded-md border-teal/10 bg-surface/85 shadow-[0_10px_36px_-8px_rgba(15,76,92,0.25)] backdrop-blur-[18px] backdrop-saturate-[1.3]"
                : "mt-0 h-[76px] max-w-none rounded-none border-transparent border-b-line bg-bg"
            }`}
          >
            <nav className={`mx-auto flex h-full w-full max-w-[1400px] items-center justify-between gap-4 transition-[padding] duration-[450ms] ease-spring ${scrolled ? "px-4 md:px-6" : "px-5 md:px-10"}`} aria-label="Main">
              <Link href="/" className="group flex shrink-0 items-center gap-3">
                <span className={`relative block shrink-0 overflow-hidden rounded-full border-2 border-amber/80 bg-teal transition-[height,width,transform] duration-[450ms] ease-spring group-hover:scale-105 ${scrolled ? "h-9 w-9" : "h-11 w-11"}`} aria-hidden="true">
                  <Image src="/photos/avatar.webp" alt="" fill sizes="44px" className="object-cover" priority />
                </span>
                <span className="flex flex-col leading-[1.1]">
                  <span className="font-heading text-[18px] font-semibold text-teal-deep">Dr. Wasif Raza</span>
                  <span className={`overflow-hidden text-[11.5px] tracking-[0.02em] text-ink-2 transition-[max-height,opacity] duration-[450ms] ease-spring ${scrolled ? "max-h-0 opacity-0" : "max-h-4 opacity-100"}`}>
                    Colorectal &amp; Laparoscopic Surgeon, Lucknow
                  </span>
                </span>
              </Link>

              {/* Desktop menu */}
              <div className="hidden items-center gap-6 xl:flex">
                <Link href="/" className={topLink(isActive("/"))}>
                  Home
                </Link>
                <Link href="/about-dr-wasif-raza" className={topLink(isActive("/about-dr-wasif-raza"))}>
                  About
                </Link>
                {NAV_GROUPS.map((g) => {
                  const isOpen = openGroup === g.label;
                  return (
                    <div
                      key={g.label}
                      className="relative"
                      onMouseEnter={() => show(g.label)}
                      onMouseLeave={hide}
                      onFocus={() => show(g.label)}
                      onBlur={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenGroup(null);
                      }}
                    >
                      <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        onClick={() => setOpenGroup(isOpen ? null : g.label)}
                        className={`${topLink(groupActive(g))} flex cursor-pointer items-center gap-1 bg-transparent`}
                      >
                        {g.label}
                        <Chevron open={isOpen} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.22, ease: EASE }}
                            className="absolute left-1/2 top-full w-[340px] -translate-x-1/2 pt-4"
                          >
                            <div className="overflow-hidden rounded-2xl border border-teal/10 border-t-2 border-t-amber bg-surface p-2 shadow-lift">
                              {g.links.map((l, i) => (
                                <motion.div key={l.href} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.25, ease: EASE, delay: 0.04 + i * 0.04 }}>
                                  <Link
                                    href={l.href}
                                    className={`group/item flex items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-[14.5px] transition-[background-color,color,padding] duration-300 ease-spring hover:bg-teal-soft hover:pl-4 ${
                                      pathname === l.href ? "bg-teal-soft font-semibold text-teal-deep" : "text-ink"
                                    }`}
                                  >
                                    {l.label}
                                    <span aria-hidden="true" className="text-amber opacity-0 transition-[opacity,transform] duration-300 ease-spring group-hover/item:translate-x-0.5 group-hover/item:opacity-100">
                                      →
                                    </span>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
                <Link href="/contact" className={topLink(isActive("/contact"))}>
                  Contact
                </Link>
              </div>

              <div className="flex items-center gap-2 md:gap-3">
                <a href={PHONE_TEL} className="hidden items-center gap-1.5 whitespace-nowrap text-[14px] font-semibold text-teal transition-transform duration-300 ease-spring hover:-translate-y-0.5 lg:flex xl:hidden 2xl:flex">
                  <PhoneIcon /> {PHONE_DISPLAY}
                </a>
                <Link href="/contact" className={`btn btn-amber hidden md:inline-flex ${scrolled ? "px-5 py-2.5 text-[14px]" : ""}`}>
                  Book Appointment
                </Link>
                <button
                  type="button"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-teal-deep transition-transform duration-300 ease-spring active:scale-90 xl:hidden"
                >
                  <span className="relative block h-4 w-6">
                    <span className={`absolute left-0 top-0 h-[2px] w-6 rounded bg-current transition-transform duration-300 ease-spring ${open ? "translate-y-[7px] rotate-45" : ""}`} />
                    <span className={`absolute left-0 top-[7px] h-[2px] w-6 rounded bg-current transition-opacity duration-300 ease-spring ${open ? "opacity-0" : ""}`} />
                    <span className={`absolute left-0 top-[14px] h-[2px] w-6 rounded bg-current transition-transform duration-300 ease-spring ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
                  </span>
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile / tablet full-screen menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="fixed inset-0 z-[-1] bg-bg/98 backdrop-blur-xl xl:hidden"
              data-lenis-prevent
            >
              <div className="h-full overflow-y-auto px-5 pb-28 pt-[100px] md:px-10">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE, delay: 0.05 }}>
                  <Link href="/" className="block border-b border-line py-4 font-heading text-[22px] font-semibold text-teal-deep">
                    Home
                  </Link>
                  <Link href="/about-dr-wasif-raza" className="block border-b border-line py-4 font-heading text-[22px] font-semibold text-teal-deep">
                    About Dr. Raza
                  </Link>
                </motion.div>
                {NAV_GROUPS.map((g, gi) => {
                  const isOpen = mobileGroup === g.label;
                  return (
                    <motion.div key={g.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE, delay: 0.1 + gi * 0.06 }} className="border-b border-line">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setMobileGroup(isOpen ? null : g.label)}
                        className="flex w-full items-center justify-between py-4 text-left font-heading text-[22px] font-semibold text-teal-deep"
                      >
                        {g.label}
                        <span className={`flex h-8 w-8 items-center justify-center rounded-full border border-teal/20 text-teal transition-transform duration-300 ease-spring ${isOpen ? "rotate-45" : ""}`} aria-hidden="true">
                          +
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden">
                            <div className="mb-3 flex flex-col gap-1 border-l-2 border-amber/60 pl-4">
                              {g.links.map((l) => (
                                <Link key={l.href} href={l.href} className={`rounded-lg py-2 text-[16px] transition-transform duration-300 ease-spring active:translate-x-1 ${pathname === l.href ? "font-semibold text-teal" : "text-ink"}`}>
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE, delay: 0.38 }}>
                  <Link href="/contact" className="block border-b border-line py-4 font-heading text-[22px] font-semibold text-teal-deep">
                    Contact
                  </Link>
                  <div className="mt-6 flex flex-col gap-3">
                    <Link href="/contact" className="btn btn-amber w-full">
                      Book Appointment
                    </Link>
                    <a href={PHONE_TEL} className="btn btn-ghost w-full">
                      <PhoneIcon /> {PHONE_DISPLAY}
                    </a>
                  </div>
                  <p className="mt-6 text-[13px] text-ink-2">
                    {HOSPITAL}, Lucknow · {OPD}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div aria-hidden="true" style={{ height: NAV_REST_HEIGHT }} />
    </>
  );
}

export function PhoneIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function WaIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.05 2C6.58 2 2.13 6.45 2.13 11.92c0 1.75.46 3.46 1.33 4.96L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22c5.47 0 9.92-4.45 9.92-9.92S17.52 2 12.05 2Zm0 18.16c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.37c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.24-8.2 8.24Z" />
    </svg>
  );
}
