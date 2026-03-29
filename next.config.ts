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
    ],
  },
};

export default nextConfig;
