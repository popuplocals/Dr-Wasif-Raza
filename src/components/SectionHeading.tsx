import Reveal from "@/components/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export default function SectionHeading({ eyebrow, title, text, align = "left", light = false, className = "" }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-[700px] text-center" : "max-w-[760px]"} ${className}`}>
      {eyebrow && (
        <Reveal y={10} duration={0.6}>
          <div className={`mb-4 flex items-center gap-3 ${center ? "justify-center" : ""}`}>
            <span className="h-px w-7 bg-amber" />
            <span className={`text-[12.5px] font-semibold uppercase tracking-[0.22em] ${light ? "text-amber" : "text-teal"}`}>{eyebrow}</span>
            {center && <span className="h-px w-7 bg-amber" />}
          </div>
        </Reveal>
      )}
      <Reveal y={22} delay={0.05}>
        <h2 className={`text-[clamp(28px,3.6vw,44px)] ${light ? "text-white" : ""}`}>{title}</h2>
      </Reveal>
      {text && (
        <Reveal y={18} delay={0.12}>
          <p className={`mt-4 text-[17px] leading-[1.7] md:text-[18px] ${light ? "text-bg/80" : "text-ink-2"}`}>{text}</p>
        </Reveal>
      )}
    </div>
  );
}
