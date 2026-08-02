/**
 * Centralised SEO configuration and helpers.
 *
 * Every route builds its <head> tags (title, description, canonical,
 * Open Graph, Twitter Card, robots, JSON-LD) by calling `seo({ ... })`
 * from this file instead of hand-writing meta arrays. That keeps every
 * page consistent and means the site-wide constants below (domain,
 * business name, default share image) only need to be correct in one
 * place.
 *
 * This intentionally uses TanStack Start's native `head()` API
 * (meta/links/scripts, rendered via <HeadContent /> + <Scripts />)
 * rather than a client-side library like react-helmet-async. The app
 * is server-rendered by TanStack Start already, so `head()` produces
 * correct tags in the initial HTML response with no extra dependency
 * and no client-side "flash" of default meta before JS hydrates.
 */

export const SITE_URL = "https://maar-navy.vercel.app";
export const SITE_NAME = "MAAR";
export const BUSINESS_LEGAL_NAME = "MAAR";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const DEFAULT_LOCALE = "en_GB";
export const CONTACT_EMAIL = "rajonadil@gmail.com";
export const CONTACT_PHONE = "+447440445929";
export const STARTING_PRICE_GBP = 30;

export const DEFAULT_DESCRIPTION =
  "MAAR designs premium promotional websites for small businesses, local services and community organisations from just £30 — Purpose, Quality, Longevity.";

type JsonLdValue = Record<string, unknown>;

type SeoInput = {
  /** Full <title> text for this page, e.g. "Privacy Policy — MAAR". */
  title: string;
  /** Meta description, ideally 120–160 characters. */
  description: string;
  /** Route path starting with "/", e.g. "/" or "/privacy". */
  path: string;
  /** Absolute URL to a 1200x630 share image. Defaults to the site OG image. */
  image?: string;
  /** Set true for pages that should not be indexed (e.g. /thank-you). */
  noindex?: boolean;
  /** Open Graph type. Defaults to "website". */
  type?: "website" | "article";
  /** One or more JSON-LD structured data objects to embed on this page. */
  jsonLd?: JsonLdValue | JsonLdValue[];
};

/**
 * Builds a `head()` return value (meta + canonical link + JSON-LD
 * scripts) for a single route. Call this from every route's
 * `createFileRoute(...)({ head: () => seo({ ... }) })`.
 */
export function seo({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = "website",
  jsonLd,
}: SeoInput) {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  const meta = [
    { title },
    { name: "description", content: description },
    {
      name: "robots",
      content: noindex ? "noindex, follow" : "index, follow, max-image-preview:large",
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: DEFAULT_LOCALE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },
  ];

  const links = [{ rel: "canonical", href: url }];

  const schemas = jsonLd === undefined ? [] : Array.isArray(jsonLd) ? jsonLd : [jsonLd];
  const scripts = schemas.map((schema) => ({
    type: "application/ld+json",
    children: JSON.stringify(schema),
  }));

  return { meta, links, scripts };
}

/** Sitewide Organization schema — who MAAR is. Rendered once, in the root route. */
export function organizationSchema(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_LEGAL_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon-512.png`,
    image: DEFAULT_OG_IMAGE,
    description: DEFAULT_DESCRIPTION,
    email: `mailto:${CONTACT_EMAIL}`,
    telephone: CONTACT_PHONE,
    slogan: "Purpose. Quality. Longevity.",
    priceRange: "££",
    areaServed: "GB",
    sameAs: [
      "https://maar-journey-gamma.vercel.app",
      "https://20rajonadil.github.io/MAAR-LIFE",
      "https://20rajonadil.github.io/MAAR.Quran",
      "https://20rajonadil.github.io/MAARnofap/",
      "https://20rajonadil.github.io/MAAR-QR/",
    ],
  };
}

/** Sitewide WebSite schema — enables sitelinks search box eligibility & site identity. */
export function websiteSchema(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

/**
 * ProfessionalService / LocalBusiness schema — MAAR as a website-development
 * business, its services and starting price. Rendered on the homepage.
 */
export function professionalServiceSchema(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS_LEGAL_NAME,
    url: SITE_URL,
    image: DEFAULT_OG_IMAGE,
    logo: `${SITE_URL}/icon-512.png`,
    description: DEFAULT_DESCRIPTION,
    email: `mailto:${CONTACT_EMAIL}`,
    telephone: CONTACT_PHONE,
    priceRange: "££",
    areaServed: { "@type": "Country", name: "United Kingdom" },
    address: { "@type": "PostalAddress", addressCountry: "GB" },
    knowsAbout: [
      "Website Development",
      "Business Websites",
      "Landing Pages",
      "Portfolio Websites",
      "Responsive Websites",
      "Website Redesign",
      "UI/UX Design",
      "Affordable Websites",
    ],
    makesOffer: [
      {
        "@type": "Offer",
        name: "Small Business Website",
        price: String(STARTING_PRICE_GBP),
        priceCurrency: "GBP",
        url: `${SITE_URL}/#pricing`,
        description:
          "A modern, responsive small business website delivered in around seven days — contact form, service showcase, Google Maps integration and SEO-ready structure included.",
        itemOffered: {
          "@type": "Service",
          name: "Small Business Website",
          serviceType: "Website Development",
        },
      },
      {
        "@type": "Offer",
        name: "Business Promotion Website",
        priceCurrency: "GBP",
        price: String(STARTING_PRICE_GBP),
        url: `${SITE_URL}/#pricing`,
        description:
          "A promotional website tailored to your industry — restaurants, barbers, tutors, trades, community organisations and more.",
        itemOffered: {
          "@type": "Service",
          name: "Business Promotion Website",
          serviceType: "Website Development",
        },
      },
      {
        "@type": "Offer",
        name: "Custom Digital Project",
        priceCurrency: "GBP",
        price: "100",
        url: `${SITE_URL}/#pricing`,
        description:
          "Bespoke, multi-page digital projects with custom features, a design system foundation and long-term maintainability.",
        itemOffered: {
          "@type": "Service",
          name: "Custom Digital Project",
          serviceType: "Website Development",
        },
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MAAR Website Services",
      itemListElement: [
        "Website Development",
        "Business Websites",
        "Landing Pages",
        "Portfolio Websites",
        "Responsive Websites",
        "Website Redesign",
        "UI/UX Design",
        "Affordable Websites",
      ].map((serviceName) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: serviceName },
      })),
    },
  };
}

/** BreadcrumbList schema for a secondary page (legal/certificate pages). */
export function breadcrumbSchema(pageTitle: string, path: string): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: pageTitle, item: `${SITE_URL}${path}` },
    ],
  };
}
