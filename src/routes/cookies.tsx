import { createFileRoute } from "@tanstack/react-router";
import { LegalPage, LegalH2 } from "@/components/site/LegalPage";
import { seo, breadcrumbSchema } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () =>
    seo({
      title: "Cookie Policy — MAAR",
      description: "How MAAR uses cookies and similar technologies.",
      path: "/cookies",
      jsonLd: breadcrumbSchema("Cookie Policy", "/cookies"),
    }),
  component: () => (
    <LegalPage eyebrow="Legal" title="Cookie Policy" updated="July 2026">
      <p>MAAR uses a minimal number of cookies to keep the website working correctly and to understand, at an aggregated level, how visitors use it.</p>
      <LegalH2>Essential cookies</LegalH2>
      <p>Used to remember preferences and keep the site functioning. These cannot be turned off.</p>
      <LegalH2>Analytics cookies</LegalH2>
      <p>Optional cookies that help us understand which pages are visited most, so we can improve them. No personally identifiable data is collected.</p>
      <LegalH2>Managing cookies</LegalH2>
      <p>Most browsers let you view, block or delete cookies through their settings. Blocking essential cookies may affect how the site works.</p>
    </LegalPage>
  ),
});