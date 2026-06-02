import type { ComponentType } from "react";
import SportStore from "./SportStore";
import HikingMagazine from "./HikingMagazine";
import LuxuryLookbook from "./LuxuryLookbook";
import StreetTikTok from "./StreetTikTok";
import SkincarePinterest from "./SkincarePinterest";
import VintageInstagram from "./VintageInstagram";
import JewelryChat from "./JewelryChat";
import BudgetDeals from "./BudgetDeals";

export type StorefrontId =
  | "sport"
  | "hiking"
  | "luxury"
  | "street"
  | "skincare"
  | "vintage"
  | "jewelry"
  | "budget";

export type DeviceType = "phone" | "browser";

// The fixed design canvas each storefront is authored to. The showcase scales
// the whole device to FIT the card (contain), so a screen is never cropped.
export const SCREEN: Record<DeviceType, { w: number; h: number }> = {
  phone: { w: 320, h: 680 },
  browser: { w: 1180, h: 720 },
};

// Each visitor gets a storefront built in a different format — not just
// different products, a different *kind* of experience, on its native device.
export const STOREFRONTS: Record<
  StorefrontId,
  { Component: ComponentType; format: string; device: DeviceType }
> = {
  sport: { Component: SportStore, format: "Modern storefront", device: "browser" },
  hiking: { Component: HikingMagazine, format: "Editorial magazine", device: "browser" },
  luxury: { Component: LuxuryLookbook, format: "Fashion lookbook", device: "browser" },
  street: { Component: StreetTikTok, format: "Short-video feed", device: "phone" },
  skincare: { Component: SkincarePinterest, format: "Discovery board", device: "phone" },
  vintage: { Component: VintageInstagram, format: "Social shop", device: "phone" },
  jewelry: { Component: JewelryChat, format: "Concierge chat", device: "phone" },
  budget: { Component: BudgetDeals, format: "Flash-deals market", device: "phone" },
};
