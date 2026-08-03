import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { SectionHead } from "./SectionHead";
import { useNavigate } from "@tanstack/react-router";

export function Contact() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (k: string) => (data.get(k)?.toString() || "").trim();
    const name = get("name");
    const message = [
      `New project brief — MAAR website`,
      "",
      `Name: ${name}`,
      `Email: ${get("email")}`,
      `Phone: ${get("phone")}`,
      `Business: ${get("business")}`,
      `Project type: ${get("type")}`,
      `Budget: ${get("budget")}`,
      `Timeline: ${get("timeline")}`,
      `Website: ${get("website")}`,
      "",
      "Project description:",
      get("description"),
    ].join("\n");
    // Opens WhatsApp (app on mobile, WhatsApp Web on desktop) addressed to the
    // business number with the full brief pre-filled. The client taps send —
    // there's no way for a website to submit a WhatsApp message silently
    // without a paid WhatsApp Business API integration.
    const whatsappUrl = `https://wa.me/447440445929?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
    await new Promise((r) => setTimeout(r, 600));
    navigate({ to: "/thank-you" });
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHead
              eyebrow="Start your project"
              title={<>Let's make your <span className="italic gold-gradient-text">first handshake</span> a strong one.</>}
              intro="Tell us a little about your business and what you're trying to achieve online. We reply personally, usually the same day."
            />

            <div className="mt-10 space-y-4">
              <a href="tel:+447440445929" className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-gold/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold"><Phone size={18} /></span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Call</div>
                  <div className="font-display text-xl">+44 7440 445929</div>
                </div>
              </a>
              <a href="mailto:rajonadil@gmail.com" className="flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-5 transition-colors hover:border-gold/40">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold"><Mail size={18} /></span>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Email</div>
                  <div className="font-display text-xl">www.rajonadil@gmail.com</div>
                </div>
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-gradient-to-b from-surface to-background p-6 md:p-10 ring-hair">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Your name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Business name" name="business" />
              <Select label="Project type" name="type" options={["Small Business Website (£30)", "Business Promotion Website", "Custom Digital Project", "Not sure yet"]} />
              <Select label="Budget range" name="budget" options={["£30 – £100", "£100 – £300", "£300 – £1,000", "£1,000+"]} />
              <Select label="Preferred timeline" name="timeline" options={["ASAP", "Within 2 weeks", "Within a month", "Flexible"]} />
              <Field label="Website (if any)" name="website" placeholder="https://" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Tell us about your project</label>
              <textarea name="description" rows={5} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold/60" placeholder="A few sentences on what you do, who your customers are, and what you'd like your website to achieve." />
            </div>
            <button type="submit" disabled={submitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.01] disabled:opacity-70">
              {submitting ? "Sending…" : "Send project brief"}
              <Send size={15} />
            </button>
            <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">We reply personally · no spam, ever</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label} {required && <span className="text-gold">*</span>}</label>
      <input type={type} name={name} required={required} placeholder={placeholder} maxLength={200} className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold/60" />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <select name={name} defaultValue="" className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition-colors focus:border-gold/60">
        <option value="" disabled>Select an option</option>
        {options.map((o) => (<option key={o} value={o} className="bg-background">{o}</option>))}
      </select>
    </div>
  );
}