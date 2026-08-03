import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2 } from "@/components/site/LegalPage";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () =>
    seo({
      title: "Privacy Policy — MAAR",
      description: "How MAAR collects, uses and protects the personal information you share with us.",
      path: "/privacy",
      jsonLd: breadcrumbSchema("Privacy Policy", "/privacy"),
    }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="July 2026">
      <p>This Privacy Policy explains how MAAR ("we", "us") collects, uses and protects the personal information you share when you visit our website, contact us, or work with us on a project.</p>
      <LegalH2>Information we collect</LegalH2>
      <p>When you complete the contact form, we collect the name, email, phone number, business name, project type, budget range, timeline and any description you provide. We also collect basic technical information such as browser type, device and pages viewed.</p>
      <LegalH2>How we use it</LegalH2>
      <p>We use your information solely to respond to your enquiry, deliver the project you've asked for, send invoices, and provide ongoing support. We do not sell or share your information with third parties for marketing.</p>
      <LegalH2>Storage & retention</LegalH2>
      <p>Enquiry and project data is stored securely and retained for as long as we have an active working relationship, plus a reasonable period afterwards for tax and legal purposes.</p>
      <LegalH2>Your rights</LegalH2>
      <p>You can request access to, correction of, or deletion of your personal data at any time by emailing <a className="text-gold underline" href="mailto:rajonadil@gmail.com">www.rajonadil@gmail.com</a>.</p>
    </LegalPage>
  ),
});