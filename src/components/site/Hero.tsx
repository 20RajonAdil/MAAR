import { ArrowRight, Sparkles } from "lucide-react";
import { MaarMark } from "./MaarMark";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.85_0.008_260/0.9),transparent_60%)]" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-gold/10 blur-[100px] animate-float-slow" />
        {/* Grid */}
        <svg className="absolute inset-0 h-full w-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M 56 0 L 0 0 0 56" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center">
          <div className="animate-rise">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1.5 text-xs font-mono uppercase tracking-[0.18em] text-gold-soft">
              <Sparkles size={12} /> Launch offer · save 70%
            </div>

            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-tight sm:text-6xl lg:text-[5.25rem]">
              Build Your Business
              <br />
              <span className="italic gold-gradient-text">Presence</span> Online.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg text-balance">
              MAAR crafts modern, mobile-ready websites for small businesses, personal brands
              and community organisations. Fast to launch. Built to last. From just{" "}
              <span className="font-medium text-foreground">£30</span>.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium transition-colors hover:border-gold/60"
              >
                View my work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
              >
                Start your project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "£30", v: "starting price" },
                { k: "~7 days", v: "typical delivery" },
                { k: "5 stages", v: "idea to launch" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right — orbital / ecosystem visual */}
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            <HeroOrbits />
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-y border-border/60 bg-surface/40">
        <div className="flex overflow-hidden py-4">
          <div className="flex shrink-0 animate-marquee gap-14 pr-14 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap">
            {Array.from({ length: 2 }).flatMap((_, i) =>
              [
                "Purpose",
                "· Quality ·",
                "Longevity",
                "·",
                "Restaurants",
                "Barbers",
                "Mosques",
                "Tutors",
                "Trades",
                "Cleaning",
                "Personal Brands",
                "Community",
              ].map((t) => (
                <span key={`${i}-${t}`} className="flex items-center gap-14">
                  {t}
                </span>
              )),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroOrbits() {
  const nodes = [
    { label: "Journey", angle: 0 },
    { label: "Life", angle: 60 },
    { label: "Quran", angle: 120 },
    { label: "NoFap", angle: 180 },
    { label: "QR", angle: 240 },
    { label: "Studio", angle: 300 },
  ];
  return (
    <div className="relative h-full w-full">
      {/* rings */}
      {[0.55, 0.75, 0.95].map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 m-auto rounded-full border border-gold/15"
          style={{ width: `${s * 100}%`, height: `${s * 100}%` }}
        />
      ))}
      {/* glow center */}
      <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-ink shadow-2xl ring-hair">
        <MaarMark className="h-full w-full" />
        <span className="absolute inset-0 -z-10 rounded-full bg-gold/40 animate-pulse-ring" />
      </div>

      {nodes.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const r = 42; // percent
        const x = 50 + r * Math.cos(rad);
        const y = 50 + r * Math.sin(rad);
        return (
          <div
            key={n.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x.toFixed(3)}%`, top: `${y.toFixed(3)}%`, animation: `float-slow 7s ${i * 0.4}s ease-in-out infinite` }}
          >
            <div className="flex items-center gap-2 rounded-full border border-border bg-surface/90 px-3 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground">
                {n.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* connecting lines */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
        {nodes.map((n) => {
          const rad = (n.angle * Math.PI) / 180;
          const r = 42;
          const x = 50 + r * Math.cos(rad);
          const y = 50 + r * Math.sin(rad);
          return (
            <line
              key={n.label}
              x1="50"
              y1="50"
              x2={Number(x.toFixed(3))}
              y2={Number(y.toFixed(3))}
              stroke="oklch(0.82 0.14 78)"
              strokeOpacity="0.2"
              strokeWidth="0.3"
              strokeDasharray="0.8 1.2"
            />
          );
        })}
      </svg>
    </div>
  );
}