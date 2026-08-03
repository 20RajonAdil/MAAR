import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHead } from "./SectionHead";

const faqs = [
  { q: "How much does a website really cost?", a: "The Small Business Website is £30 during the launch offer (usually £100). Custom projects start from £100 depending on scope." },
  { q: "How long does delivery take?", a: "Most small business websites are delivered in around 7 days from the moment we have your content and details." },
  { q: "Do I own my website?", a: "Yes. Once the project is complete and paid for, you own the website and everything in it. You receive a Website Ownership Certificate." },
  { q: "How many revisions do I get?", a: "Every package includes a fair round of revisions during the Review stage. Anything beyond that is scoped separately." },
  { q: "Do you handle hosting and the domain?", a: "We can guide you through both. You keep full control of your domain and hosting account — MAAR simply builds and deploys the site." },
  { q: "Do you offer ongoing support?", a: "Yes. We offer friendly, human support after launch and can arrange affordable maintenance if you'd like ongoing updates." },
  { q: "What if I already have a website?", a: "We can rebuild, restyle or migrate existing sites. Just include a link when you get in touch." },
  { q: "Do you work with community organisations?", a: "Absolutely — mosques, tutors, charities and community projects are core to what MAAR was built for." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative border-t border-border bg-surface/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <SectionHead
          eyebrow="Frequently asked"
          title={<>Answers to the <span className="italic gold-gradient-text">common questions</span>.</>}
          intro="If something isn't here, drop a message — we reply personally, usually the same day."
        />

        <div className="divide-y divide-border rounded-2xl border border-border bg-background/60">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button key={f.q} onClick={() => setOpen(isOpen ? null : i)} className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-start gap-4 p-6 text-left transition-colors hover:bg-surface/50">
                <div className="min-w-0">
                  <div className="font-display text-lg leading-snug md:text-xl">{f.q}</div>
                  <div className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden text-sm leading-relaxed text-muted-foreground">{f.a}</div>
                  </div>
                </div>
                <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-gold">
                  {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}