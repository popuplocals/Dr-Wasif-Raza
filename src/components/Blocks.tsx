import Reveal from "@/components/Reveal";
import CompareSlider from "@/components/CompareSlider";

export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; html: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "table"; head: string[]; rows: string[][] }
  | { t: "callout"; html: string; tone?: "teal" | "amber" | "sage" }
  | { t: "steps"; items: { title: string; text: string }[] }
  | { t: "chips"; items: string[] }
  | { t: "compare" };

/** Renders a service page body. Every block is a scroll-triggered reveal so long pages feel paced. */
export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-wr">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "h2":
            return (
              <Reveal key={i} y={14} duration={0.55} amount={0.4}>
                <h2 id={slug(b.text)}>{b.text}</h2>
              </Reveal>
            );
          case "h3":
            return (
              <Reveal key={i} y={12} duration={0.5}>
                <h3>{b.text}</h3>
              </Reveal>
            );
          case "p":
            return <Reveal key={i} y={14} duration={0.55} dangerouslySetInnerHTML={{ __html: `<p>${b.html}</p>` }} />;
          case "ul":
            return (
              <Reveal key={i} y={14} duration={0.55}>
                <ul>
                  {b.items.map((it, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                  ))}
                </ul>
              </Reveal>
            );
          case "ol":
            return (
              <Reveal key={i} y={14} duration={0.55}>
                <ol>
                  {b.items.map((it, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: it }} />
                  ))}
                </ol>
              </Reveal>
            );
          case "table":
            return (
              <Reveal key={i} y={16} duration={0.6}>
                <div className="tablewrap">
                  <table>
                    <thead>
                      <tr>
                        {b.head.map((h, j) => (
                          <th key={j}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.rows.map((r, j) => (
                        <tr key={j}>
                          {r.map((c, k) => (
                            <td key={k} dangerouslySetInnerHTML={{ __html: c }} />
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            );
          case "callout": {
            const tone = b.tone ?? "teal";
            const cls = tone === "amber" ? "border-amber bg-amber-pale/60" : tone === "sage" ? "border-sage-deep bg-sage/50" : "border-teal bg-teal-soft";
            return (
              <Reveal key={i} y={16} duration={0.6}>
                <div className={`rounded-r-2xl border-l-4 px-5 py-4 text-[16.5px] leading-relaxed ${cls}`} dangerouslySetInnerHTML={{ __html: b.html }} />
              </Reveal>
            );
          }
          case "steps":
            return (
              <div key={i} className="grid gap-4 !mt-6 sm:grid-cols-2">
                {b.items.map((s, j) => (
                  <Reveal key={j} index={j} y={18} duration={0.6} className="rounded-2xl border border-line bg-surface p-5 shadow-card transition-transform duration-500 ease-spring hover:-translate-y-1">
                    <span className="font-heading text-[13px] font-semibold tracking-[0.18em] text-amber-dark">0{j + 1}</span>
                    <h3 className="!mt-1 text-[19px]">{s.title}</h3>
                    <p className="mt-2 text-[15.5px] leading-relaxed text-ink-2" dangerouslySetInnerHTML={{ __html: s.text }} />
                  </Reveal>
                ))}
              </div>
            );
          case "compare":
            return (
              <Reveal key={i} y={20} duration={0.6} className="!mt-8">
                <CompareSlider />
              </Reveal>
            );
          case "chips":
            return (
              <Reveal key={i} y={12} duration={0.5} className="flex flex-wrap gap-2">
                {b.items.map((c, j) => (
                  <span key={j} className="rounded-full border border-teal/20 bg-surface px-3.5 py-1.5 text-[14.5px] font-medium text-teal-deep">
                    {c}
                  </span>
                ))}
              </Reveal>
            );
        }
      })}
    </div>
  );
}

function slug(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9ऀ-ॿ]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
