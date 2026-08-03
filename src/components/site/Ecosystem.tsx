import { SectionHead } from "./SectionHead";
import { MaarMark } from "./MaarMark";

const orbits = [
  { name: "Studio", desc: "Websites", href: "/#services" },
  { name: "Life", desc: "Productivity", href: "https://20rajonadil.github.io/MAAR-LIFE" },
  { name: "Quran", desc: "Education", href: "https://20rajonadil.github.io/MAAR.Quran" },
  { name: "Journey", desc: "Biography", href: "https://maar-journey-gamma.vercel.app" },
  { name: "NoFap", desc: "Discipline", href: "https://20rajonadil.github.io/MAARnofap/" },
  { name: "QR", desc: "Utility", href: "https://20rajonadil.github.io/MAAR-QR/" },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          align="center"
          eyebrow="The MAAR ecosystem"
          title={<>One brand. <span className="italic gold-gradient-text">Many futures.</span></>}
          intro="Every MAAR project is connected under one long-term vision — a network of tools, platforms and ideas built with the same care."
        />

        <div className="relative mx-auto mt-20 aspect-square w-full max-w-[720px]">
          {[0.4, 0.65, 0.9].map((s, i) => (
            <div key={i} className="absolute inset-0 m-auto rounded-full border border-gold/15" style={{ width: `${s * 100}%`, height: `${s * 100}%` }} />
          ))}

          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <MaarMark className="h-32 w-32 shadow-2xl" />
          </div>

          {orbits.map((o, i) => {
            const angle = (i / orbits.length) * 360;
            const rad = (angle * Math.PI) / 180;
            const r = 42;
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <div key={o.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x.toFixed(3)}%`, top: `${y.toFixed(3)}%`, animation: `float-slow 8s ${i * 0.5}s ease-in-out infinite` }}>
                <a
                  href={o.href}
                  target={o.href.startsWith("http") ? "_blank" : undefined}
                  rel={o.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex flex-col items-center gap-1"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-gold/40 bg-surface backdrop-blur ring-hair transition-transform group-hover:scale-110">
                    <span className="font-display text-lg">M·{o.name[0]}</span>
                  </div>
                  <div className="mt-1 text-center">
                    <div className="font-display text-base transition-colors group-hover:text-gold">MAAR {o.name}</div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{o.desc}</div>
                  </div>
                </a>
              </div>
            );
          })}

          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" fill="none">
            {orbits.map((_, i) => {
              const angle = (i / orbits.length) * 360;
              const rad = (angle * Math.PI) / 180;
              const r = 42;
              const x = 50 + r * Math.cos(rad);
              const y = 50 + r * Math.sin(rad);
              return (<line key={i} x1="50" y1="50" x2={Number(x.toFixed(3))} y2={Number(y.toFixed(3))} stroke="oklch(0.82 0.14 78)" strokeOpacity="0.25" strokeWidth="0.25" strokeDasharray="0.6 1" />);
            })}
          </svg>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center font-display text-2xl italic leading-snug text-foreground/85 md:text-3xl">
          MAAR creates digital experiences today while building the technology of tomorrow.
        </p>
      </div>
    </section>
  );
}