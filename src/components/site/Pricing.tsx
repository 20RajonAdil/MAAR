import { Check } from "lucide-react";
import { SectionHead } from "./SectionHead";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          align="center"
          eyebrow="Honest pricing"
          title={<>Good design and a fair price were <span className="italic gold-gradient-text">never opposites</span>.</>}
          intro="Most agencies charge £150–£300 for a website with the same basic bones as ours. MAAR starts at £30. No hidden fees, no bolt-ons, no confusing tiers."
        />

        <div className="mx-auto mt-16 max-w-3xl overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-surface to-background ring-hair">
          <div className="grid gap-0 md:grid-cols-[1.2fr_1fr]">
            <div className="border-b border-border p-10 md:border-b-0 md:border-r">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft">Launch offer · save 70%</div>
              <h3 className="mt-4 font-display text-4xl">The Small Business Website</h3>
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-display text-7xl gold-gradient-text">£30</span>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground line-through">was £100</span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-gold-soft">limited time</span>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                A complete promotional website, ready to send to customers within about 7 days.
                Everything a small business needs to look credible online — nothing you don't.
              </p>
              <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]">
                Claim launch price →
              </a>
            </div>
            <ul className="grid gap-3 p-10 content-center">
              {["Modern responsive design","Mobile-first layout","Contact form","Google Maps integration","Social media links","SEO-ready structure","Fast loading performance","Delivered in ~7 days"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/90">
                  <Check size={14} className="text-gold" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          * Standard price £100. Now £30 for a limited time.
        </p>
      </div>
    </section>
  );
}