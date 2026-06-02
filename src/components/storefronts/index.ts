// The real storefront layouts from the Figma "Layouts" page. Each visitor's
// segment maps to the storefront the agents build for them — the layout,
// theme and merchandising adapt per visitor (rendered straight from Figma).

export type StorefrontId =
  | "sportswear"
  | "activewear"
  | "luxury"
  | "streetwear"
  | "swimwear";

export const STOREFRONTS: Record<StorefrontId, { src: string; label: string; alt: string }> = {
  sportswear: {
    src: "/storefronts/sportswear.jpg",
    label: "Move with Intention",
    alt: "Athletic sportswear storefront — Move with Intention",
  },
  activewear: {
    src: "/storefronts/activewear.jpg",
    label: "Performance Activewear",
    alt: "Performance activewear storefront — Shop All New",
  },
  luxury: {
    src: "/storefronts/luxury.jpg",
    label: "Timeless Luxury",
    alt: "Luxury outerwear storefront — Timeless Luxury coats",
  },
  streetwear: {
    src: "/storefronts/streetwear.jpg",
    label: "New Drops",
    alt: "Streetwear storefront — New Drops, No Limits",
  },
  swimwear: {
    src: "/storefronts/swimwear.jpg",
    label: "Sunlit Swim Edit",
    alt: "Swimwear storefront — crafted for sunlit elegance",
  },
};
