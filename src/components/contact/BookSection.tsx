import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/contact/BookingForm";
import { ADDRESS_LINES, APOLLO247, HOSPITAL, MAPS_EMBED, MAPS_LINK, OPD, PHONE_DISPLAY, PHONE_TEL, WHATSAPP } from "@/lib/site";
import { PhoneIcon, WaIcon } from "@/components/Navbar";

export default function BookSection({ id = "book" }: { id?: string }) {
  return (
    <section id={id} className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
      <SectionHeading eyebrow="Book your consultation" title="The most common thing patients say after their first visit: “I wish I had come sooner.”" />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <Reveal y={24} className="overflow-hidden rounded-3xl border border-line shadow-card">
            <iframe title="Apollo Medics Superspeciality Hospitals, Lucknow — map" src={MAPS_EMBED} width="100%" height="340" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block w-full border-0" allowFullScreen />
          </Reveal>
          <Reveal y={20} delay={0.1} className="rounded-3xl border border-line bg-surface p-6 shadow-card md:p-8">
            <h3 className="text-[22px]">{HOSPITAL}, Lucknow</h3>
            <p className="mt-2 text-[16px] text-ink-2">
              {ADDRESS_LINES[0]}
              <br />
              {ADDRESS_LINES[1]}
            </p>
            <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-2 font-heading text-[30px] font-semibold text-teal transition-colors hover:text-teal-deep">
              <PhoneIcon size={22} /> {PHONE_DISPLAY}
            </a>
            <ul className="mt-4 grid gap-2 text-[15px] text-ink">
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
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE_TEL} className="btn btn-teal">
                Call Now
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Get directions
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal y={24} delay={0.15}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
