"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import PersonaStrip, { PERSONAS } from "./PersonaStrip";
import { STOREFRONTS, type StorefrontId } from "./storefronts";
import { useAutoAdvance } from "./useAutoAdvance";

type Card = {
  label: string;
  src: string;
  alt: string;
  highlight?: boolean;
};

const LEGACY: Card = {
  label: "Legacy website",
  src: "/figma/legacy-store.jpg",
  alt: "A single generic storefront shown to every visitor",
};
const CURATED: Card = {
  label: "Endless curated storefronts",
  src: "/storefronts/store-1.jpg",
  alt: "A curated storefront, personalized to the active visitor",
  highlight: true,
};

/** A desktop storefront variation, shown frameless and cut off at the bottom
 *  (the page continues below the card), matching the Figma. */
function BrowserScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[1024/860] w-full overflow-hidden rounded-xl bg-white sm:rounded-2xl">
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 40vw, 480px" className="object-cover object-top" />
    </div>
  );
}

/** The static "one page for everyone" legacy storefront. */
function LegacyShowcase() {
  return <BrowserScreen src={LEGACY.src} alt={LEGACY.alt} />;
}

/** The real Figma storefront variation the agents built for the active visitor,
 *  cross-fading as the visitor changes. */
function CuratedShowcase({ id }: { id: StorefrontId }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative aspect-[1024/860] w-full">
      <AnimatePresence initial={false}>
        <motion.div
          key={id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
        >
          <BrowserScreen src={STOREFRONTS[id].src} alt={STOREFRONTS[id].alt} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function StoreCard({
  card,
  sub,
  media,
}: {
  card: Card;
  sub: React.ReactNode;
  media?: React.ReactNode;
}) {
  return (
    <div
      className={`card relative flex h-full flex-col overflow-hidden p-3 text-center sm:p-6 ${
        card.highlight ? "border-primary/40 shadow-[0_0_60px_-24px_rgba(131,79,251,0.6)]" : ""
      }`}
    >
      {card.highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-2/30 blur-[90px]"
        />
      )}
      {/* Fixed-height header, bottom-aligned, so the picture sits a consistent
          ~16px below the text and the frame never shifts between the two cards */}
      <div className="relative flex h-[56px] flex-col items-center justify-end overflow-hidden sm:h-[78px]">
        <p className="font-display text-sm font-medium leading-tight text-white sm:text-2xl">{card.label}</p>
        <p className="mt-1.5 font-inter text-xs leading-snug text-soft sm:text-base">{sub}</p>
      </div>
      <div className="relative mt-auto pt-4">{media}</div>
    </div>
  );
}

/** Previous / next control flanking the storefronts to cycle the variation. */
function NavButton({
  dir,
  onClick,
}: {
  dir: "prev" | "next";
  onClick: () => void;
}) {
  const Icon = dir === "prev" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={dir === "prev" ? "Previous storefront" : "Next storefront"}
      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border-strong bg-white/[0.04] text-soft transition-colors hover:border-primary/40 hover:bg-white/[0.1] hover:text-white sm:h-11 sm:w-11"
    >
      <Icon size={18} />
    </button>
  );
}

export default function StorefrontComparison() {
  // shared "active visitor" — connects the segments to the curated storefront
  const { index: pIdx, select: pSelect, pause: pPause, ref: personaRef } = useAutoAdvance(PERSONAS.length, {
    dwell: 3000,
  });
  const active = PERSONAS[pIdx];
  const step = (dir: number) => {
    pSelect((pIdx + dir + PERSONAS.length) % PERSONAS.length);
    pPause();
  };

  const legacySub = "One page for everyone";
  const curatedSub = "Personalized per visitor";

  return (
    <section id="why" className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
      {/* Segments */}
      <Reveal>
        <PersonaStrip
          activeLabel={active.label}
          onSelect={(label) => pSelect(PERSONAS.findIndex((p) => p.label === label))}
          onInteract={pPause}
        />
      </Reveal>

      {/* Connector: the active visitor flows down into the curated storefront */}
      <div aria-hidden className="relative flex flex-col items-center">
        <span className="mt-2 h-6 w-px bg-gradient-to-b from-transparent to-primary/70 sm:h-8" />
        <svg viewBox="0 0 600 40" preserveAspectRatio="none" className="h-8 w-[78%] max-w-[680px] sm:h-10">
          <path d="M300 0 C300 26 150 6 150 40" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <path d="M300 0 C300 26 450 6 450 40" fill="none" stroke="url(#cg)" strokeWidth="2" />
          <defs>
            <linearGradient id="cg" x1="300" y1="0" x2="450" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#714dff" />
              <stop offset="1" stopColor="#e151ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Legacy vs curated — flanked by prev/next controls (below on mobile) */}
      <div className="mt-3 flex items-center gap-3 sm:mt-4">
        <div className="hidden sm:block">
          <NavButton dir="prev" onClick={() => step(-1)} />
        </div>
        <div ref={personaRef} className="grid min-w-0 flex-1 grid-cols-2 gap-2.5 sm:gap-6">
          <StoreCard card={LEGACY} sub={legacySub} media={<LegacyShowcase />} />
          <StoreCard card={CURATED} sub={curatedSub} media={<CuratedShowcase id={active.storefront} />} />
        </div>
        <div className="hidden sm:block">
          <NavButton dir="next" onClick={() => step(1)} />
        </div>
      </div>
      {/* Mobile prev/next */}
      <div className="mt-4 flex justify-center gap-5 sm:hidden">
        <NavButton dir="prev" onClick={() => step(-1)} />
        <NavButton dir="next" onClick={() => step(1)} />
      </div>
    </section>
  );
}
