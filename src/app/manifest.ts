import type { MetadataRoute } from "next";

// Web app manifest — improves how the site appears when bookmarked, added to
// a mobile home screen, or installed as a PWA. Has no effect on the page UI.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NextConversion",
    short_name: "NextConversion",
    description:
      "Turn static storefronts into endless, self-adaptive experiences with an autonomous AI agent workforce.",
    start_url: "/",
    display: "standalone",
    background_color: "#01001e",
    theme_color: "#01001e",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
