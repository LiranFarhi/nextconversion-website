import type { ReactElement } from "react";

const SITE_URL = "https://nextconversion.ai";

/**
 * Site-wide structured data (JSON-LD) for rich results and AI/LLM search
 * engines (Google AI Overviews, ChatGPT, Perplexity). Uses an @graph so the
 * Organization and WebSite nodes can reference each other.
 *
 * Server component — renders a plain <script> in the initial HTML, so crawlers
 * see it without executing any JavaScript.
 */
export default function JsonLd(): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "NextConversion",
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${SITE_URL}/brand/nc-logo-512.png`,
          width: 512,
          height: 512,
        },
        description:
          "NextConversion is an agent-first engine that turns static websites into endless, self-adaptive storefronts — personalized per visitor, optimized 24/7.",
        sameAs: ["https://www.linkedin.com/company/nextconversion"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "NextConversion",
        description:
          "Turn static storefronts into endless, self-adaptive experiences with an autonomous AI agent workforce.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: "NextConversion",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: SITE_URL,
        description:
          "An autonomous AI agent workforce that personalizes e-commerce storefronts in real time to lift conversion rate.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here (no user input); this is the
      // documented Next.js pattern for injecting JSON-LD.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
