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

// Each visitor gets a storefront built in a different format — not just
// different products, a different *kind* of experience.
export const STOREFRONTS: Record<StorefrontId, { Component: ComponentType; format: string }> = {
  sport: { Component: SportStore, format: "Modern storefront" },
  hiking: { Component: HikingMagazine, format: "Editorial magazine" },
  luxury: { Component: LuxuryLookbook, format: "Fashion lookbook" },
  street: { Component: StreetTikTok, format: "Short-video feed" },
  skincare: { Component: SkincarePinterest, format: "Discovery board" },
  vintage: { Component: VintageInstagram, format: "Social shop" },
  jewelry: { Component: JewelryChat, format: "Concierge chat" },
  budget: { Component: BudgetDeals, format: "Flash-deals market" },
};
