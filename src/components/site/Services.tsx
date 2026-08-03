import { Globe, Megaphone, Cpu, Check } from "lucide-react";
import { SectionHead } from "./SectionHead";

const services = [
  {
    icon: Globe,
    tag: "Package 01",
    title: "Small Business Website",
    price: "£30",
    was: "was £100",
    body: "The complete package for a business that needs to look credible online, and fast. Everything included — nothing extra to add on.",
    features: [
      "Modern responsive design",
      "Mobile-friendly layout",
      "Contact form",
      "Business information",
      "Service showcase",
      "Google Maps integration",
      "Social media links",
      "Fast loading performance",
      "SEO-ready structure",
      "Delivered in ~7 days",
    ],
    accent: true,
  },
  {
    icon: Megaphone,
    tag: "Package 02",
    title: "Business Promotion Website",
    price: "From £30",
    was: "tailored per industry",
    body: "The same core service, shaped around how your industry actually works — built specifically to help you promote your business online.",
    features: [
      "Restaurants & Takeaways",
      "Barbers & Salons",
      "Mosques & Community",
      "Tutors & Coaches",
      "Electricians & Trades",
      "Builders & Construction",
      "Cleaning companies",
      "Personal trainers",
      "Local businesses",
      "Start-ups",
    ],
  },
  {
    icon: Cpu,
    tag: "Package 03",
    title: "Custom Digital Projects",
    price: "From £100",
    was: "scoped to your idea",
    body: "For bigger ideas. Projects that need extra planning, custom functionality or more development time — like MAAR Life.",
    features: [
      "Project complexity scoped",
      "Multi-page architecture",
      "Custom features & logic",
      "Timeline agreed upfront",
      "Design system foundation",
      "Long-term maintainability",
      "Performance-focused build",
      "Accessibility baked in",
      "SEO & analytics",
      "Post-launch support",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Our services"
          title={<>Choose the website that <span className="italic gold-gradient-text">fits</span> where you're at.</>}
          intro="Three clear ways to work with MAAR — from your first website to a full custom platform. No add-ons hidden behind another quote."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all hover:-translate-y-1 ${
                s.accent
                  ? "border-gold/40 bg-gradient-to-b from-gold/[0.06] to-surface"
                  : "border-border bg-background/60 hover:border-gold/30"
              }`}
            >
              {s.accent && (
                <span className="absolute right-6 top-6 rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold-soft">
                  Most popular
                </span>
              )}
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-px w-6 bg-gold/60" />
                {s.tag}
              </div>
              <s.icon size={28} strokeWidth={1.5} className="mt-6 text-gold" />
              <h3 className="mt-6 font-display text-3xl leading-tight">{s.title}</h3>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-display text-4xl">{s.price}</span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{s.was}</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>

              <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check size={14} className="mt-0.5 shrink-0 text-gold" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  s.accent ? "bg-gold text-ink" : "border border-border bg-surface hover:border-gold/50"
                }`}
              >
                Enquire about this
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}