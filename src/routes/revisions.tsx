import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2 } from "@/components/site/LegalPage";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/revisions")({
  head: () =>
    seo({
      title: "Revision Policy — MAAR",
      description: "How revisions work during a MAAR project.",
      path: "/revisions",
      jsonLd: breadcrumbSchema("Revision Policy", "/revisions"),
    }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Revision Policy" updated="July 2026">
      <p>Every project includes a fair round of revisions during the Review stage.</p>
      <LegalH2>Included</LegalH2>
      <p>Copy edits, image swaps, small layout tweaks, colour adjustments and content corrections.</p>
      <LegalH2>Additional work</LegalH2>
      <p>New pages, new sections, new features or a full redesign are scoped and quoted separately.</p>
    </LegalPage>
  ),
});