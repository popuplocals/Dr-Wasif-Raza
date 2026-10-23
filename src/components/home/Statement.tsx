import ScrollText from "@/components/ui/ScrollText";

export default function Statement() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="relative mx-auto max-w-[1100px] px-5 py-24 md:px-10 md:py-32">
        <p className="mb-6 flex items-center gap-3 text-[12.5px] font-mono font-medium uppercase tracking-[0.12em] text-teal">
          <span className="h-px w-7 bg-amber" /> One promise
        </p>
        <ScrollText text="Clear answers. Honest advice. And the least invasive treatment that works — explained before any decision is made, so you choose with confidence." className="font-heading text-[clamp(28px,4.4vw,56px)] font-semibold leading-[1.15] text-teal-deep" />
      </div>
    </section>
  );
}
