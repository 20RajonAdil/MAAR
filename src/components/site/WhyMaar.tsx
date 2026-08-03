import { PoundSterling, Zap, Handshake, ShieldCheck, MessageCircle, Rocket } from "lucide-react";
import { SectionHead } from "./SectionHead";

const reasons = [
  { icon: PoundSterling, title: "Fair pricing", body: "£30 to start. No bloated agency invoices for basic websites." },
  { icon: Zap, title: "Fast performance", body: "Optimised builds that load quickly and rank cleanly." },
  { icon: Handshake, title: "Honest scope", body: "No hidden fees. No confusing add-on packages." },
  { icon: ShieldCheck, title: "Professional layouts", body: "Design decisions grounded in taste, not templates." },
  { icon: MessageCircle, title: "Friendly support", body: "Talk to a builder, not a ticket queue." },
  { icon: Rocket, title: "Built around you", body: "Every website is shaped around your business goals." },
];

export function WhyMaar() {
  return (
    <section className="relative border-y border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Why work with MAAR"
          title={<>We're not trying to build the most <span className="italic gold-gradient-text">expensive</span> website. Just the one that gets your phone ringing.</>}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="group relative overflow-hidden rounded-2xl border border-border bg-background/60 p-7 transition-all hover:border-gold/40 hover:-translate-y-1">
              <div className="flex items-start justify-between">
                <r.icon size={22} className="text-gold" strokeWidth={1.6} />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-xl">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 rounded-2xl border border-border bg-background/60 p-8 md:grid-cols-3 md:p-10">
          {[
            { k: "Traditional agency", v: "£150–£300", note: "same basic bones" },
            { k: "MAAR standard", v: "£100", note: "everything included" },
            { k: "MAAR launch offer", v: "£30", note: "limited time · save 70%", accent: true },
          ].map((c) => (
            <div key={c.k} className={`rounded-xl p-6 ${c.accent ? "bg-gold/10 ring-hair" : "bg-surface"}`}>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{c.k}</div>
              <div className={`mt-3 font-display text-4xl ${c.accent ? "gold-gradient-text" : ""}`}>{c.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}