// The real storefront variations exported from the Figma "Store Variations"
// frame (node 1453-13978). Each visitor's segment maps to the desktop store the
// agents build for them. Order matches the Figma user-profile order.

export type StorefrontId =
  | "store1"
  | "store2"
  | "store3"
  | "store4"
  | "store5"
  | "store6"
  | "store7"
  | "store8";

export const STOREFRONTS: Record<StorefrontId, { src: string; label: string; alt: string }> = {
  store1: {
    src: "/storefronts/store-1.jpg",
    label: "Sophisticated Sportwear",
    alt: "Sportswear storefront — Sophisticated Strength",
  },
  store2: {
    src: "/storefronts/store-2.jpg",
    label: "Luxury Coats",
    alt: "Luxury outerwear storefront — timeless coats",
  },
  store3: {
    src: "/storefronts/store-3.jpg",
    label: "Streetwear",
    alt: "Streetwear storefront — new drops",
  },
  store4: {
    src: "/storefronts/store-4.jpg",
    label: "Sustainable Hiking Gear",
    alt: "Sustainable activewear storefront — Mind. Body. Balance.",
  },
  store5: {
    src: "/storefronts/store-5.jpg",
    label: "Organic Skincare",
    alt: "Organic skincare storefront",
  },
  store6: {
    src: "/storefronts/store-6.jpg",
    label: "Vintage Accessories",
    alt: "Vintage accessories storefront",
  },
  store7: {
    src: "/storefronts/store-7.jpg",
    label: "Handcrafted Jewelry",
    alt: "Handcrafted jewelry storefront",
  },
  store8: {
    src: "/storefronts/store-8.jpg",
    label: "Budget-Friendly",
    alt: "Budget outerwear storefront — Warm up, spend less",
  },
};
