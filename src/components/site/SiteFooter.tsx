import { Link } from "@tanstack/react-router";
import { MaarMark } from "./MaarMark";

const cols = [
  { heading: "MAAR", links: [{ label: "About", href: "/#about" }, { label: "Services", href: "/#services" }, { label: "Pricing", href: "/#pricing" }, { label: "Process", href: "/#process" }, { label: "Contact", href: "/#contact" }] },
  { heading: "Ecosystem", links: [{ label: "MAAR Journey", href: "https://maar-journey-gamma.vercel.app" }, { label: "MAAR Life", href: "https://20rajonadil.github.io/MAAR-LIFE" }, { label: "MAAR Quran", href: "https://20rajonadil.github.io/MAAR.Quran" }, { label: "MAAR NoFap", href: "https://20rajonadil.github.io/MAARnofap/" }, { label: "MAAR QR", href: "https://20rajonadil.github.io/MAAR-QR/" }] },
  { heading: "Legal", links: [{ label: "Privacy Policy", href: "/privacy" }, { label: "Cookie Policy", href: "/cookies" }, { label: "Terms & Conditions", href: "/terms" }, { label: "Delivery Policy", href: "/delivery" }, { label: "Revision Policy", href: "/revisions" }, { label: "Refund Policy", href: "/refunds" }, { label: "Copyright & Licensing", href: "/licensing" }] },
  { heading: "Certificates", links: [{ label: "Website Ownership", href: "/certificates/ownership" }, { label: "Client Licence", href: "/certificates/licence" }] },
];

export function SiteFooter() {
  return (
    <footer className="dark relative overflow-hidden border-t border-border bg-ink pt-24 text-foreground">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-to-b from-gold/10 to-transparent blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.3fr_2fr] lg:gap-20">
          <div>
            <Link to="/" className="flex items-center gap-3">
              <MaarMark className="h-11 w-11" />
              <div>
                <div className="font-display text-2xl">MAAR</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white">Modern. Professional. Affordable.</div>
              </div>
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-white">A growing digital ecosystem built on three principles: Purpose, Quality and Longevity. We design websites for today — and technology for tomorrow.</p>
            <div className="mt-8 space-y-2 text-sm">
              <div><span className="text-white">Call </span><a href="tel:+447440445929" className="text-white hover:text-gold">+44 7440 445929</a></div>
              <div><span className="text-white">Email </span><a href="mailto:rajonadil@gmail.com" className="text-white hover:text-gold">www.rajonadil@gmail.com</a></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {cols.map((c) => (
              <div key={c.heading}>
                <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-gold-soft">{c.heading}</div>
                <ul className="space-y-2.5 text-sm">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("http") ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-white transition-colors hover:text-gold">{l.label}</a>
                      ) : l.href.startsWith("/#") ? (
                        <a href={l.href} className="text-white transition-colors hover:text-gold">{l.label}</a>
                      ) : (
                        <Link to={l.href} className="text-white transition-colors hover:text-gold">{l.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 overflow-hidden">
          <div className="font-display text-[18vw] leading-none tracking-tight gold-gradient-text opacity-[0.16] select-none">MAAR</div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border py-6 text-xs text-white md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} MAAR. All rights reserved.</div>
          <div className="font-mono uppercase tracking-[0.22em]">Purpose · Quality · Longevity</div>
        </div>
      </div>
    </footer>
  );
}