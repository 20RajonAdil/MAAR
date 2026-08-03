import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2 } from "@/components/site/LegalPage";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/delivery")({
  head: () =>
    seo({
      title: "Delivery Policy — MAAR",
      description: "How MAAR delivers finished websites and digital projects.",
      path: "/delivery",
      jsonLd: breadcrumbSchema("Delivery Policy", "/delivery"),
    }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Delivery Policy" updated="July 2026">
      <p>Websites are delivered digitally — there is no physical shipment.</p>
      <LegalH2>Small Business Website</LegalH2>
      <p>Typical delivery is around seven days from the moment your content and details are received.</p>
      <LegalH2>Custom Digital Projects</LegalH2>
      <p>Timelines depend on scope. An estimated delivery date is agreed in writing before work begins.</p>
      <LegalH2>Deployment</LegalH2>
      <p>Once approved, the finished website is deployed either to your hosting or to a hosting solution we recommend, at your choice.</p>
    </LegalPage>
  ),
});