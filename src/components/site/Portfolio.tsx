import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "./SectionHead";

const projects = [
  { name: "MAAR Journey", tag: "Biography · Personal Platform", body: "A story-driven biography documenting the life, discipline, learning and long-term vision of MD Adil Ahmad Rajan.", url: "https://maar-journey-gamma.vercel.app", tint: "from-[oklch(0.4_0.12_65)] to-[oklch(0.25_0.05_260)]" },
  { name: "MAAR Life", tag: "Flagship · Productivity", body: "A platform for productivity, organisation and long-term personal development — helping people build better habits.", url: "https://20rajonadil.github.io/MAAR-LIFE", tint: "from-[oklch(0.5_0.14_190)] to-[oklch(0.22_0.04_260)]" },
  { name: "MAAR Quran", tag: "Education · Community", body: "A modern platform dedicated to making Qur'an learning simple, accessible and engaging.", url: "https://20rajonadil.github.io/MAAR.Quran", tint: "from-[oklch(0.5_0.12_155)] to-[oklch(0.22_0.04_260)]" },
  { name: "MAAR NoFap", tag: "Discipline · Wellbeing", body: "A motivational platform built to help individuals develop discipline, mental clarity and healthier habits.", url: "https://20rajonadil.github.io/MAARnofap/", tint: "from-[oklch(0.45_0.18_20)] to-[oklch(0.22_0.04_260)]" },
  { name: "MAAR QR", tag: "Utility · Digital Tools", body: "A practical QR technology project that simplifies access to digital information for businesses and organisations.", url: "https://20rajonadil.github.io/MAAR-QR/", tint: "from-[oklch(0.55_0.14_290)] to-[oklch(0.22_0.04_260)]" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative border-t border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Featured projects"
          title={<>A growing ecosystem, built <span className="italic gold-gradient-text">one project</span> at a time.</>}
          intro="MAAR isn't a one-off — it's the start of an ecosystem. Here's a look at the projects already live and shaping what comes next."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-6 lg:grid-rows-2">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.url}
              target={p.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className={`group relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl border border-border bg-background/60 p-7 transition-all hover:border-gold/40 hover:-translate-y-1 ${
                i === 0 ? "lg:col-span-3 lg:row-span-2 min-h-[380px]" : "lg:col-span-3"
              }`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.tint} opacity-40 transition-opacity group-hover:opacity-70`} />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent,var(--background)_75%)]" />

              <div className="relative flex items-start justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft">{p.tag}</div>
                <ArrowUpRight size={18} className="text-foreground/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <div className="relative mt-auto">
                <h3 className="font-display text-4xl leading-tight md:text-5xl">{p.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-foreground/80">{p.body}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}