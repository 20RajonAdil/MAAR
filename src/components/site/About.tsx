import { Target, Gem, Infinity as InfinityIcon } from "lucide-react";
import { SectionHead } from "./SectionHead";

const pillars = [
  { icon: Target, title: "Purpose", body: "Every project has to solve a real problem. If it doesn't, we don't build it.", tag: "01" },
  { icon: Gem, title: "Quality", body: "Every website looks and feels premium — whatever the price tag says.", tag: "02" },
  { icon: InfinityIcon, title: "Longevity", body: "Great design should still look modern years from now, not just this quarter.", tag: "03" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 items-end">
          <SectionHead
            eyebrow="About MAAR"
            title={<>Built to <span className="italic gold-gradient-text">last</span>, not just to launch.</>}
            intro="MAAR is more than a web design service. It's the foundation of a growing ecosystem of projects built around education, personal growth, productivity and community impact — every one carrying the same objective: create something still worth using in five years."
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            Design trends move fast. A website built to chase this year's look is already halfway
            to looking dated — and that's a bill you end up paying twice. MAAR builds the other
            way: for longevity, not expiry.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-border bg-surface/60 p-8 transition-all hover:border-gold/40 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-hair">
                  <p.icon size={22} strokeWidth={1.6} />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.tag} / 03</span>
              </div>
              <h3 className="mt-8 font-display text-3xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-gold/20 bg-gradient-to-br from-surface to-background p-10 text-center md:p-14">
          <p className="font-display text-2xl italic leading-snug text-foreground/90 md:text-4xl">
            "Timeless design always outlasts trends."
          </p>
          <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">— the MAAR principle</p>
        </div>
      </div>
    </section>
  );
}