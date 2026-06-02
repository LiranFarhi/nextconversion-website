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
      <p className="relative font-display text-sm font-medium leading-tight text-white sm:text-2xl">{card.label}</p>
      <p className="relative mb-3 mt-1.5 font-inter text-xs leading-snug text-soft transition-colors sm:mb-6 sm:min-h-[24px] sm:text-base">{sub}</p>
      <div className="relative mt-auto">{media}</div>
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
  const curatedSub = (
    <span className="inline-flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1">
      <span>
        Personalized for <span className="text-white">{active.label}</span>
      </span>
      {/* format chip — desktop only, to keep the mobile card uncluttered */}
      <span className="hidden items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary-3 sm:inline-flex">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        {STOREFRONTS[active.storefront].label}
      </span>
    </span>
  );

  return (
    <section id="why" className="relative mx-auto max-w-[1200px] px-5 py-12 sm:px-8 sm:py-16">
      {/* Segments */}
      <Reveal>
        <p className="mb-3 text-center font-inter text-sm text-muted">
          Every click is a different person
        </p>
        <PersonaStrip
          activeLabel={active.label}
          onSelect={(label) => pSelect(PERSONAS.findIndex((p) => p.label === label))}
          onInteract={pPause}
        />
      </Reveal>

      {/* Legacy vs curated — side by side at every size */}
      <div ref={personaRef} className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-6">
        <StoreCard card={LEGACY} sub={legacySub} media={<LegacyShowcase />} />
        <StoreCard card={CURATED} sub={curatedSub} media={<CuratedShowcase id={active.storefront} />} />
      </div>
    </section>
  );
}
