import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2 } from "@/components/site/LegalPage";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/licensing")({
  head: () =>
    seo({
      title: "Copyright & Licensing — MAAR",
      description: "Ownership and licensing terms for MAAR-built websites.",
      path: "/licensing",
      jsonLd: breadcrumbSchema("Copyright & Licensing", "/licensing"),
    }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Copyright & Licensing" updated="July 2026">
      <p>Ownership of the finished website transfers to the client once the project has been paid in full.</p>
      <LegalH2>Your content</LegalH2>
      <p>You retain full ownership of any text, images and media you provide.</p>
      <LegalH2>MAAR components</LegalH2>
      <p>Reusable components and internal tooling developed by MAAR remain the property of MAAR and are licensed to you as part of your website.</p>
      <LegalH2>Third-party assets</LegalH2>
      <p>Any third-party fonts, icons or libraries are used under their respective licences.</p>
    </LegalPage>
  ),
});