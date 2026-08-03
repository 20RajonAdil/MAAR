import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2 } from "@/components/site/LegalPage";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/refunds")({
  head: () =>
    seo({
      title: "Refund Policy — MAAR",
      description: "MAAR's refund policy for digital website services.",
      path: "/refunds",
      jsonLd: breadcrumbSchema("Refund Policy", "/refunds"),
    }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Refund Policy" updated="July 2026">
      <p>Because our work is bespoke and starts as soon as a project is confirmed, refunds are handled on a case-by-case basis.</p>
      <LegalH2>Before work begins</LegalH2>
      <p>Full refunds are available if requested before we begin design or development work.</p>
      <LegalH2>During a project</LegalH2>
      <p>Partial refunds may be issued depending on the stage of work completed.</p>
      <LegalH2>After delivery</LegalH2>
      <p>Once a project has been delivered and approved, refunds are not available. Support and reasonable fixes remain included.</p>
    </LegalPage>
  ),
});