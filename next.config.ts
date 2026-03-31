import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Cloudflare Images (AI-generated product photos)
      { protocol: "https", hostname: "imagedelivery.net" },
      // Cloudflare R2 public buckets (AI-generated videos + assets)
      { protocol: "https", hostname: "*.r2.dev" },
      // Shopify CDN (original product photos)
      { protocol: "https", hostname: "cdn.shopify.com" },
      // Unsplash (demo product images)
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async headers() {
    return [
      {
        // Cache static assets (images, fonts, SVGs) for 1 year
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|gif|ico|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cache JS/CSS bundles for 1 year (they have content hashes)
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
