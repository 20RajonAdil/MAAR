import { Link } from "@tanstack/react-router";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { ArrowLeft } from "lucide-react";

export function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated?: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <SiteNav />
      <main className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold">
            <ArrowLeft size={14} /> Back to MAAR
          </Link>
          <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-gold-soft">{eyebrow}</div>
          <h1 className="mt-3 font-display text-5xl leading-tight tracking-tight md:text-6xl text-balance">{title}</h1>
          {updated && <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Last updated · {updated}</p>}
          <div className="mt-12 space-y-6 text-[15px] leading-relaxed text-foreground/85">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalH2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-10 font-display text-2xl md:text-3xl text-foreground">{children}</h2>;
}