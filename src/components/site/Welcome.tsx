import { Store, Users, Building2, GraduationCap, Wrench, Sparkles } from "lucide-react";
import { SectionHead } from "./SectionHead";

const biz = [
  { icon: Store, label: "Restaurants & Takeaways" },
  { icon: Users, label: "Barbers & Salons" },
  { icon: Building2, label: "Mosques & Community" },
  { icon: GraduationCap, label: "Tutors & Coaches" },
  { icon: Wrench, label: "Trades & Construction" },
  { icon: Sparkles, label: "Cleaning & Local" },
];

export function Welcome() {
  return (
    <section id="welcome" className="relative border-t border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <SectionHead
          eyebrow="Welcome to MAAR"
          title={
            <>
              First impressions <span className="italic gold-gradient-text">aren't optional</span> anymore.
            </>
          }
          intro="Before a customer calls, messages, or walks in — they've already looked you up. Your website is the first handshake with every customer you haven't met yet. MAAR exists to make that handshake a strong one, no matter your size or budget."
        />

        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-mono">
            Built for real businesses
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {biz.map((b) => (
              <div
                key={b.label}
                className="group relative overflow-hidden rounded-xl border border-border bg-background/60 p-4 transition-all hover:border-gold/40 hover:-translate-y-0.5"
              >
                <b.icon size={20} className="text-gold" />
                <div className="mt-6 text-sm text-foreground">{b.label}</div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>

          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-2xl italic leading-snug text-foreground/90">
            "A website is not a nice-to-have. It's the first handshake with every customer you haven't met yet."
          </blockquote>
        </div>
      </div>
    </section>
  );
}