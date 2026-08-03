import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/thank-you")({
  head: () =>
    seo({
      title: "Thank you — MAAR",
      description: "Your project brief has been received. MAAR will get back to you shortly.",
      path: "/thank-you",
      noindex: true,
    }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <SiteNav />
      <main className="relative flex min-h-[80vh] items-center pt-32 pb-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />
        </div>
        <div className="mx-auto max-w-2xl px-5 md:px-8 text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold ring-hair">
            <CheckCircle2 size={26} />
          </div>
          <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft">Brief received</div>
          <h1 className="mt-4 font-display text-5xl leading-tight md:text-6xl">
            Thank you. Your <span className="italic gold-gradient-text">first handshake</span> starts now.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            We've received your project brief and will personally reply within one business day —
            usually much sooner. In the meantime, feel free to explore the MAAR ecosystem.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-gold/50">
              Back to home
            </Link>
            <a href="/#ecosystem" className="group inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink transition-transform hover:scale-[1.03]">
              Explore the ecosystem
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-14 border-t border-border pt-8 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Purpose · Quality · Longevity
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}