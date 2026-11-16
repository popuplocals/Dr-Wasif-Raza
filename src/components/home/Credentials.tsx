import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const WALL = [
  { title: "FRCS", sub: "Royal College of Physicians & Surgeons of Glasgow", country: "United Kingdom", img: "/photos/convocation-award.webp" },
  { title: "FACS", sub: "American College of Surgeons", country: "USA · 2023", img: "/photos/convocation-stage.webp" },
  { title: "MCh — Colon & Rectal Surgery", sub: "University of East Anglia, Norwich", country: "United Kingdom", img: "/photos/convocation-hall.webp" },
  { title: "Royal Liverpool Fellowship", sub: "Royal Liverpool University Hospital", country: "United Kingdom", img: "/photos/nhs-clatterbridge.webp" },
];

/** Credentials wall: a straight, evenly aligned grid of four framed cards. */
export default function Credentials() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <SectionHeading title="Credentials wall" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {WALL.map((c, i) => (
            <Reveal key={c.title} index={i % 4} y={24} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-md border-[10px] border-[#F3EEE4] bg-surface shadow-card">
                <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
                  <Image src={c.img} alt={`Dr Wasif Raza ${c.title} — ${c.sub}`} fill sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 92vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.2em] text-amber-dark">{c.country}</p>
                  <h3 className="mt-1 text-[20px] leading-snug">{c.title}</h3>
                  <p className="mt-1 text-[14.5px] text-ink-2">{c.sub}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[13px] text-ink-2">Certificate photographs will replace these once supplied; each will be labelled exactly as the certificate reads.</p>
      </div>
    </section>
  );
}
