"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import PersonaStrip, { PERSONAS } from "./PersonaStrip";
import { STOREFRONTS, type StorefrontId } from "./storefronts";
import { useAutoAdvance } from "./useAutoAdvance";

type Card = {
  label: string;
  src: string;
  w: number;
  h: number;
  alt: string;
  highlight?: boolean;
};

const LEGACY: Card = {
  label: "Legacy website",
  src: "/figma/legacy-store.jpg",
  w: 1024,
  h: 1004,
  alt: "A single generic storefront shown to every visitor",
};
const CURATED: Card = {
  label: "Endless curated storefronts",
  src: "/figma/legacy-store.jpg",
  w: 1024,
  h: 1004,
  alt: "A curated storefront, personalized to the active visitor",
  highlight: true,
};

/** A storefront layout, shown frameless (just the rounded layout, like Figma). */
function BrowserScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-white sm:rounded-2xl">
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 44vw, 540px" className="object-cover object-top" />
    </div>
  );
}

/** A mobile-native storefront shown inside a phone, centred on a purple stage. */
function PhoneScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl"
      style={{ background: "radial-gradient(120% 95% at 50% 0%, #221b4d 0%, #0b0a1f 58%, #070617 100%)" }}
    >
      <div
        className="relative h-[96%] overflow-hidden rounded-[1.1rem] bg-black p-1 shadow-[0_18px_45px_-18px_rgba(0,0,0,0.85)] ring-1 ring-white/10 sm:rounded-[1.6rem] sm:p-1.5"
        style={{ aspectRatio: "320 / 690" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[0.85rem] bg-black sm:rounded-[1.3rem]">
          <Image src={src} alt={alt} fill sizes="(max-width: 768px) 28vw, 200px" className="object-cover object-top" />
        </div>
      </div>
    </div>
  );
}

/** The static "one page for everyone" legacy storefront. */
function LegacyShowcase() {
  return (
    <div className="aspect-[1024/800] w-full">
      <BrowserScreen src="/figma/legacy-store.jpg" alt="A single generic storefront shown to every visitor" />
    </div>
  );
}

/**
 * The real Figma storefront the agents built for the active visitor — desktop
 * layouts in a browser, mobile-native layouts in a phone — cross-fading as the
 * visitor changes.
 */
function CuratedShowcase({ id }: { id: StorefrontId }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative aspect-[1024/800] w-full">
      <AnimatePresence initial={false}>
        <motion.div
          key={id}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
        >
          {STOREFRONTS[id].device === "phone" ? (
            <PhoneScreen src={STOREFRONTS[id].src} alt={STOREFRONTS[id].alt} />
          ) : (
            <BrowserScreen src={STOREFRONTS[id].src} alt={STOREFRONTS[id].alt} />
          )}
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
      className={`card relative flex h-full flex-col overflow-hidden p-3 text-center sm:p-7 ${
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

export default function StorefrontComparison() {
  // shared "active visitor" — connects the segments to the curated storefront
  const { index: pIdx, select: pSelect, pause: pPause, ref: personaRef } = useAutoAdvance(PERSONAS.length, {
    dwell: 3000,
  });
  const active = PERSONAS[pIdx];

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

      {/* Legacy vs curated — side by side at every size */}
      <div ref={personaRef} className="mt-3 grid grid-cols-2 gap-2.5 sm:mt-4 sm:gap-6">
        <StoreCard card={LEGACY} sub={legacySub} media={<LegacyShowcase />} />
        <StoreCard card={CURATED} sub={curatedSub} media={<CuratedShowcase id={active.storefront} />} />
      </div>
    </section>
  );
}
