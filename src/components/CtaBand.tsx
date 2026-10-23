import Link from "next/link";
import Reveal from "@/components/Reveal";
import { HOSPITAL, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";
import { PhoneIcon, WaIcon } from "@/components/Navbar";

export default function CtaBand({ title = "Book a consultation", text = "Not sure what you need? Call and we will guide you. Bring your reports, scans and a family member." }: { title?: string; text?: string }) {
  return (
    <section className="relative overflow-hidden bg-teal text-bg">
      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 px-5 py-16 md:flex-row md:items-center md:justify-between md:px-10 md:py-20">
        <Reveal x={-24} y={0}>
          <h2 className="text-[clamp(28px,3.4vw,42px)] text-white">{title}</h2>
          <p className="mt-3 max-w-[56ch] text-[17px] leading-relaxed text-bg/85">{text}</p>
          <p className="mt-3 text-[14px] text-bg/65">{HOSPITAL}, Lucknow</p>
        </Reveal>
        <Reveal x={24} y={0} delay={0.1} className="flex flex-wrap gap-3">
          <Link href="/contact" className="btn btn-amber">
            Book Appointment
          </Link>
          <a href={PHONE_TEL} className="btn btn-ghost-light">
            <PhoneIcon /> {PHONE_DISPLAY}
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-ghost-light">
            <WaIcon /> WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
