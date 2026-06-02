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

/** A storefront shown inside a desktop browser window (fills its container). */
function BrowserScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-[#16161c] ring-1 ring-white/10 sm:rounded-2xl">
      <div className="flex h-6 shrink-0 items-center gap-1 px-2 sm:h-8 sm:gap-2 sm:px-4">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57] sm:h-3 sm:w-3" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e] sm:h-3 sm:w-3" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840] sm:h-3 sm:w-3" />
        <div className="mx-auto h-2.5 w-1/2 rounded-full bg-black/25 sm:h-4" />
      </div>
      <div className="relative flex-1 overflow-hidden bg-white">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 44vw, 540px" className="object-cover object-top" />
      </div>
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
  badge,
  media,
}: {
  card: Card;
  sub: React.ReactNode;
  badge: React.ReactNode;
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
      {/* badge row — hidden on the compact mobile cards to reduce density */}
      <div className="relative hidden justify-center sm:mb-4 sm:flex">{badge}</div>
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

  const legacyBadge = (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 font-inter text-xs text-muted">
      <span className="flex -space-x-1.5">
        {PERSONAS.slice(0, 3).map((p) => (
          <Image
            key={p.img}
            src={`/figma/persona-${p.img}.png`}
            alt=""
            width={128}
            height={128}
            className="h-4 w-4 rounded-full border border-background object-cover grayscale"
          />
        ))}
      </span>
      Everyone → same page
    </span>
  );
  const curatedBadge = (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-inter text-xs text-white">
      <Image
        key={active.img}
        src={`/figma/persona-${active.img}.png`}
        alt=""
        width={128}
        height={128}
        className="h-4 w-4 rounded-full object-cover ring-1 ring-primary"
      />
      Tailored for {active.tag}
    </span>
  );

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

      {/* Connector: active visitor flows into the storefronts */}
      <div ref={personaRef} className="relative flex flex-col items-center">
        <span aria-hidden className="h-7 w-px bg-gradient-to-b from-transparent to-primary/70" />
        <div className="flex items-center gap-2 rounded-full border border-primary/40 bg-white/[0.06] py-1.5 pl-1.5 pr-4 shadow-[0_0_24px_-8px_rgba(131,79,251,0.7)] backdrop-blur-sm">
          <Image
            key={active.img}
            src={`/figma/persona-${active.img}.png`}
            alt=""
            width={128}
            height={128}
            className="h-8 w-8 rounded-full object-cover ring-1 ring-primary"
          />
          <span className="font-inter text-[11px] uppercase tracking-[0.14em] text-primary-3">Now serving</span>
          <span className="font-inter text-sm font-medium text-white">{active.label}</span>
        </div>
        <span aria-hidden className="h-7 w-px bg-gradient-to-b from-primary/70 to-transparent" />
        {/* desktop split connector into the two cards */}
        <svg
          aria-hidden
          viewBox="0 0 600 40"
          preserveAspectRatio="none"
          className="hidden h-10 w-2/3 max-w-[640px] md:block"
        >
          <path d="M300 0 C300 24 150 8 150 40" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
          <path d="M300 0 C300 24 450 8 450 40" fill="none" stroke="url(#cg)" strokeWidth="2" />
          <defs>
            <linearGradient id="cg" x1="300" y1="0" x2="450" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="#714dff" />
              <stop offset="1" stopColor="#e151ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Legacy vs curated — side by side at every size */}
      <div className="grid grid-cols-2 gap-2.5 sm:gap-6">
        <StoreCard card={LEGACY} sub={legacySub} badge={legacyBadge} media={<LegacyShowcase />} />
        <StoreCard
          card={CURATED}
          sub={curatedSub}
          badge={curatedBadge}
          media={<CuratedShowcase id={active.storefront} />}
        />
      </div>
    </section>
  );
}
