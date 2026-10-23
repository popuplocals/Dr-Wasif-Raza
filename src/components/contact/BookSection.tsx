import Reveal from "@/components/Reveal";
import BookingForm from "@/components/contact/BookingForm";
import MapPin from "@/components/contact/MapPin";
import { ADDRESS_LINES, APOLLO247, HOSPITAL, MAPS_EMBED, MAPS_LINK, OPD, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";
import { PhoneIcon, WaIcon } from "@/components/Navbar";

/**
 * Contact block with the live map as a full-bleed background and every detail in front of it.
 * The wrapper ignores pointer events so the map can still be dragged in the gaps; the cards re-enable them.
 */
export default function BookSection({ id = "book" }: { id?: string }) {
  return (
    <section id={id} className="relative isolate overflow-hidden">
      {/* Map layer */}
      <iframe title="Apollo Medics Superspeciality Hospitals, Lucknow — map" src={MAPS_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0 -z-20 h-full w-full border-0 [filter:saturate(0.85)_contrast(1.02)]" allowFullScreen />
      {/* Soft wash so text stays readable while the map shows through */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-bg/90 via-bg/55 to-bg/20 md:from-bg/85 md:via-bg/40 md:to-transparent" />

      <div className="pointer-events-none relative mx-auto grid max-w-[1400px] gap-8 px-5 py-16 md:px-10 md:py-24 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        {/* Details */}
        <Reveal y={24} className="pointer-events-auto rounded-3xl border border-white/60 bg-surface/92 p-6 shadow-lift backdrop-blur-md md:p-9">
          <p className="flex items-center gap-3 text-[12.5px] font-mono font-medium uppercase tracking-[0.12em] text-teal">
            <span className="h-px w-7 bg-amber" /> Book your consultation
          </p>
          <h2 className="mt-4 text-[clamp(26px,3.2vw,40px)]">“I wish I had come sooner.”</h2>
          <p className="mt-2 text-[16px] text-ink-2">The most common thing patients say after their first visit.</p>

          <div className="mt-7 flex items-start gap-3">
            <MapPin />
            <div>
              <h3 className="text-[21px]">{HOSPITAL}, Lucknow</h3>
              <p className="mt-1 text-[16px] leading-relaxed text-ink-2">
                {ADDRESS_LINES[0]}
                <br />
                {ADDRESS_LINES[1]}
              </p>
            </div>
          </div>

          <a href={PHONE_TEL} className="mt-6 inline-flex items-center gap-2 font-heading text-[30px] font-semibold text-teal transition-colors hover:text-teal-deep">
            <PhoneIcon size={22} /> {PHONE_DISPLAY}
          </a>

          <ul className="mt-4 grid gap-2.5 text-[15.5px] text-ink">
            <li className="flex items-center gap-2">
              <WaIcon size={16} />
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline decoration-teal/30 underline-offset-4 hover:text-teal">
                WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              Online consultation:{" "}
              <a href={APOLLO247} target="_blank" rel="noopener noreferrer" className="underline decoration-teal/30 underline-offset-4 hover:text-teal">
                Apollo 24|7
              </a>
            </li>
            <li>OPD: {OPD}</li>
          </ul>

          <div className="mt-7 flex flex-wrap gap-3">
            <a href={PHONE_TEL} className="btn btn-teal">
              Call Now
            </a>
            <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Get directions
            </a>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal y={24} delay={0.12} className="pointer-events-auto">
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
