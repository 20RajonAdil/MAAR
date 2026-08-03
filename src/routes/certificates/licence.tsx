import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { BadgeCheck } from "lucide-react";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/certificates/licence")({
  head: () =>
    seo({
      title: "Client Licence Certificate — MAAR",
      description: "Sample of the Client Licence Certificate provided with every MAAR project.",
      path: "/certificates/licence",
      jsonLd: breadcrumbSchema("Client Licence Certificate", "/certificates/licence"),
    }),
  component: () => (
    <LegalPage eyebrow="Certificate" title="Client Licence Certificate">
      <p>The Client Licence Certificate confirms the client's licence to use every reusable component, template block and design element embedded within their MAAR-built website.</p>
      <div className="mt-8 overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/10 via-surface to-background p-10 ring-hair">
        <BadgeCheck className="text-gold" size={30} />
        <div className="mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-gold-soft">Licence of use</div>
        <div className="mt-3 font-display text-3xl md:text-4xl">This licence grants the named client full rights to use, publish and maintain the MAAR-designed website for their business or organisation.</div>
        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <div><div className="text-gold-soft">Issued by</div><div className="mt-1 text-foreground">MAAR Studio</div></div>
          <div><div className="text-gold-soft">Scope</div><div className="mt-1 text-foreground">Full commercial use</div></div>
        </div>
      </div>
    </LegalPage>
  ),
});