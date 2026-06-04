import type { MetadataRoute } from "next";

// Web app manifest — provides the brand name, theme color, and icons for
// bookmarks / "add to home screen". `display: "browser"` keeps the site
// NON-installable on purpose: browsers won't show an install icon or suggest
// installing it as an app. Has no effect on the page UI.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NextConversion",
    short_name: "NextConversion",
    description:
      "Turn static storefronts into endless, self-adaptive experiences with an autonomous AI agent workforce.",
    start_url: "/",
    display: "browser",
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
