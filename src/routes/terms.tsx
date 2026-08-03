import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2 } from "@/components/site/LegalPage";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    seo({
      title: "Terms & Conditions — MAAR",
      description: "The terms that apply when you commission a project with MAAR.",
      path: "/terms",
      jsonLd: breadcrumbSchema("Terms & Conditions", "/terms"),
    }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Terms & Conditions" updated="July 2026">
      <p>By commissioning a project with MAAR you agree to the following terms. They exist to keep expectations clear on both sides.</p>
      <LegalH2>Scope of work</LegalH2>
      <p>Every project begins with a written scope covering pages, features, timeline and price. Anything outside that scope is agreed separately.</p>
      <LegalH2>Payment</LegalH2>
      <p>A small deposit is taken to confirm the project. The remainder is due before the site is transferred or made live.</p>
      <LegalH2>Timelines</LegalH2>
      <p>Delivery estimates assume timely feedback from you. Delays in providing content or responses will extend the timeline accordingly.</p>
      <LegalH2>Liability</LegalH2>
      <p>MAAR's liability is limited to the amount paid for the project. We are not liable for indirect losses.</p>
    </LegalPage>
  ),
});