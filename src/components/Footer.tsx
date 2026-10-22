import Link from "next/link";
import Image from "next/image";
import { ADDRESS_LINES, CREDENTIALS, GMC, HOSPITAL, NAV_GROUPS, NMC, OPD, PHONE_DISPLAY, PHONE_TEL, ROLE, WHATSAPP } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-teal-deep text-bg/80">
      <div aria-hidden="true" className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-teal/60 blur-[90px]" />
      <div className="relative mx-auto max-w-[1400px] px-5 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative block h-11 w-11 overflow-hidden rounded-full border-2 border-amber/80 bg-teal" aria-hidden="true">
                <Image src="/photos/avatar.webp" alt="" fill sizes="44px" className="object-cover" />
              </span>
              <span className="font-heading text-[22px] font-semibold text-white">Dr. Wasif Raza</span>
            </Link>
            <p className="mt-4 text-[14.5px] leading-relaxed">
              {ROLE}
              <br />
              {HOSPITAL}
              <br />
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </p>
            <a href={PHONE_TEL} className="mt-4 inline-block font-heading text-[24px] font-semibold text-amber transition-colors hover:text-amber-pale">
              {PHONE_DISPLAY}
            </a>
            <p className="mt-1 text-[13.5px]">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline decoration-bg/30 underline-offset-4 hover:text-white">
                WhatsApp
              </a>{" "}
              · {OPD}
            </p>
          </div>
          {NAV_GROUPS.slice(0, 3).map((g) => (
            <div key={g.label}>
              <h4 className="font-heading text-[16px] font-semibold text-white">{g.label}</h4>
              <ul className="mt-4 flex flex-col gap-2.5 text-[14.5px]">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="inline-block transition-[color,transform] duration-300 ease-spring hover:translate-x-1 hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="suture-amber my-10 opacity-60" />

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px]">
          <Link href="/about-dr-wasif-raza" className="hover:text-white">About</Link>
          {NAV_GROUPS[3].links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
        <p className="mt-6 max-w-4xl text-[12.5px] leading-relaxed text-bg/60">
          Dr. Wasif Raza — Colon &amp; Rectal Cancer, Laparoscopic &amp; Robotic Surgery, and General Surgery Specialist in Lucknow · {CREDENTIALS} · Reg. No.: NMC (India) {NMC} · GMC (UK) {GMC}
          · Information on this site is for general education and is not a substitute for a consultation; individual results vary.
        </p>
        <p className="mt-3 text-[12.5px] text-bg/50">
          © {year} Dr. Wasif Raza · Website by{" "}
          <a href="https://popuplocal.in" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            Pop Up Local
          </a>
        </p>
      </div>
    </footer>
  );
}
