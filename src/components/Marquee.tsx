/** Infinite horizontal credential strip (text only — no institutional logos, per the brief). */
export default function Marquee({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className={`group relative overflow-hidden border-y ${dark ? "border-white/10 bg-teal-deep text-bg/85" : "border-line bg-surface text-teal-deep"}`} aria-label={items.join(", ")}>
      <div className="flex w-max animate-marquee [animation-play-state:running] group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-6 whitespace-nowrap px-6 py-4 font-heading text-[15px] md:text-[16px]" aria-hidden={i >= items.length}>
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          </span>
        ))}
      </div>
    </div>
  );
}
