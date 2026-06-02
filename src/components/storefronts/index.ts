// The real storefront layouts from the Figma file. Each visitor's segment maps
// to the storefront the agents build for them — desktop layouts render in a
// browser frame, mobile-native layouts in a phone frame.

export type StorefrontId =
  | "sportswear"
  | "activewear"
  | "luxury"
  | "streetwear"
  | "swimwear"
  | "dresses"
  | "eco"
  | "yoga";

export type DeviceType = "browser" | "phone";

export const STOREFRONTS: Record<
  StorefrontId,
  { src: string; label: string; alt: string; device: DeviceType }
> = {
  sportswear: {
    src: "/storefronts/sportswear.jpg",
    label: "Move with Intention",
    alt: "Athletic sportswear storefront — Move with Intention",
    device: "browser",
  },
  activewear: {
    src: "/storefronts/activewear.jpg",
    label: "Performance Activewear",
    alt: "Performance activewear storefront — Shop All New",
    device: "browser",
  },
  luxury: {
    src: "/storefronts/luxury.jpg",
    label: "Timeless Luxury",
    alt: "Luxury outerwear storefront — Timeless Luxury coats",
    device: "browser",
  },
  streetwear: {
    src: "/storefronts/streetwear.jpg",
    label: "New Drops",
    alt: "Streetwear storefront — New Drops, No Limits",
    device: "browser",
  },
  swimwear: {
    src: "/storefronts/swimwear.jpg",
    label: "Sunlit Swim Edit",
    alt: "Swimwear storefront — crafted for sunlit elegance",
    device: "browser",
  },
  dresses: {
    src: "/storefronts/dresses.jpg",
    label: "Summer Dresses",
    alt: "Summer dresses storefront — Shop All New",
    device: "browser",
  },
  eco: {
    src: "/storefronts/eco.jpg",
    label: "Eco-Friendly Sportwear",
    alt: "Eco-friendly sportswear mobile storefront — Performance, conscious by design",
    device: "phone",
  },
  yoga: {
    src: "/storefronts/yoga.jpg",
    label: "Yoga Studio Flow",
    alt: "Yoga studio mobile storefront — Grip Technology collection",
    device: "phone",
  },
};
