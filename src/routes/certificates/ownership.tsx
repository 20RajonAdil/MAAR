import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { Award } from "lucide-react";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/certificates/ownership")({
  head: () =>
    seo({
      title: "Website Ownership Certificate — MAAR",
      description: "Sample of the Website Ownership Certificate issued with every completed MAAR project.",
      path: "/certificates/ownership",
      jsonLd: breadcrumbSchema("Website Ownership Certificate", "/certificates/ownership"),
    }),
  component: () => (
    <LegalPage eyebrow="Certificate" title="Website Ownership Certificate">
      <p>Every completed MAAR project is delivered with a Website Ownership Certificate confirming that the client is the rightful owner of the finished website, its content and structure, once payment has been received in full.</p>
      <div className="mt-8 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-surface to-background p-10 ring-hair">
        <Award className="text-gold" size={30} />
        <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-gold-soft">Certificate of ownership</div>
        <div className="mt-3 font-display text-3xl md:text-4xl">This is to certify that the named client is the sole owner of the website designed and delivered by MAAR.</div>
        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <div><div className="text-gold-soft">Issued by</div><div className="mt-1 text-foreground">MAAR Studio</div></div>
          <div><div className="text-gold-soft">Principle</div><div className="mt-1 text-foreground">Purpose · Quality · Longevity</div></div>
        </div>
      </div>
    </LegalPage>
  ),
});