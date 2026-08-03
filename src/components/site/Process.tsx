import { MessageSquare, LayoutGrid, Code2, Eye, Rocket } from "lucide-react";
import { SectionHead } from "./SectionHead";

const steps = [
  { n: "01", icon: MessageSquare, title: "Get in touch", body: "Tell us about your business, goals and the kind of website you need." },
  { n: "02", icon: LayoutGrid, title: "Planning", body: "We organise your content, structure and layout before a single line is written." },
  { n: "03", icon: Code2, title: "Design & Development", body: "Your website is designed and built with performance, accessibility and UX in mind." },
  { n: "04", icon: Eye, title: "Review", body: "You review the finished website and request any included revisions." },
  { n: "05", icon: Rocket, title: "Launch", body: "Once you're happy, it goes live and ready for your customers to find you." },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHead
          eyebrow="Our process"
          title={<>Five steps from <span className="italic gold-gradient-text">idea to live</span>.</>}
          intro="No mystery. No back-and-forth chaos. A quiet, ordered process that respects your time."
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-background text-gold ring-hair">
                <s.icon size={20} strokeWidth={1.6} />
              </div>
              <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Step {s.n}</div>
              <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}