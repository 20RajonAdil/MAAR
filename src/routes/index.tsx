import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { Hero } from "@/components/site/Hero";
import { Welcome } from "@/components/site/Welcome";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Pricing } from "@/components/site/Pricing";
import { WhyMaar } from "@/components/site/WhyMaar";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Ecosystem } from "@/components/site/Ecosystem";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { seo, professionalServiceSchema } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "MAAR — Websites From £30 · Modern. Professional. Affordable.",
      description:
        "MAAR designs premium promotional websites for small businesses, local services and community organisations from just £30 — while building a wider digital ecosystem.",
      path: "/",
      jsonLd: professionalServiceSchema(),
    }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <SiteNav />
      <main>
        <Hero />
        <Welcome />
        <About />
        <Services />
        <Pricing />
        <WhyMaar />
        <Process />
        <Portfolio />
        <Ecosystem />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
