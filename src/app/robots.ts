import type { MetadataRoute } from "next";

const SITE_URL = "https://nextconversion.ai";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // The lead-capture endpoint isn't a page and shouldn't be crawled.
      disallow: ["/api/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
