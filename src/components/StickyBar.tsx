"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_TEL, WHATSAPP } from "@/lib/site";
import { PhoneIcon, WaIcon } from "@/components/Navbar";

/** Mobile-only sticky bar: Call | WhatsApp | Book on every page. */
export default function StickyBar() {
  const pathname = usePathname();
  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-3 border-t border-line bg-surface/95 backdrop-blur-lg md:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href={PHONE_TEL} className="flex h-16 items-center justify-center gap-2 text-[14px] font-semibold text-teal active:bg-teal-soft">
        <PhoneIcon size={16} /> Call
      </a>
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex h-16 items-center justify-center gap-2 border-x border-line text-[14px] font-semibold text-[#128C7E] active:bg-teal-soft">
        <WaIcon size={17} /> WhatsApp
      </a>
      <Link href="/contact" className={`flex h-16 items-center justify-center gap-2 bg-amber text-[14px] font-bold text-[#1f1a10] active:bg-amber-dark ${pathname === "/contact" ? "bg-amber-dark" : ""}`}>
        Book
      </Link>
    </div>
  );
}
