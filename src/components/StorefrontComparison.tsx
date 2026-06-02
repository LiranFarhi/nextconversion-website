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
  src: "/figma/legacy-store.png",
  w: 1024,
  h: 1004,
  alt: "A single generic storefront shown to every visitor",
};
const CURATED: Card = {
  label: "Endless curated storefronts",
  src: "/figma/legacy-store.png",
  w: 1024,
  h: 1004,
  alt: "A curated storefront, personalized to the active visitor",
  highlight: true,
};

/**
 * Renders the real Figma storefront the agents built for the active visitor,
 * inside a browser window, and cross-fades to a new layout when the visitor
 * changes. The storefront's layout, theme and merchandising adapt per visitor.
 */
function CuratedShowcase({ id }: { id: StorefrontId }) {
  const reduce = useReducedMotion();
  return (
    <div className="overflow-hidden rounded-2xl bg-[#16161c] ring-1 ring-white/10">
      {/* browser chrome */}
      <div className="flex h-8 items-center gap-2 px-4">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="mx-auto h-4 w-1/2 rounded-full bg-black/25" />
      </div>
      {/* storefront viewport */}
      <div className="relative aspect-[1024/820] w-full overflow-hidden bg-white">
        <AnimatePresence initial={false}>
          <motion.div
            key={id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
          >
            <Image
              src={STOREFRONTS[id].src}
              alt={STOREFRONTS[id].alt}
              fill
              sizes="(max-width: 768px) 88vw, 560px"
              className="object-cover object-top"
            />
          </motion.div>
        </AnimatePresence>
      </div>
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
      <div className="relative mb-2.5 flex justify-center sm:mb-4">{badge}</div>
      <p className="relative font-display text-sm font-medium leading-tight text-white sm:text-2xl">{card.label}</p>
      <p className="relative mb-3 mt-1 font-inter text-[11px] leading-snug text-soft transition-colors sm:mb-6 sm:min-h-[24px] sm:text-base">{sub}</p>
      <div
        className={`relative mt-auto overflow-hidden rounded-2xl ${
          card.highlight ? "ring-1 ring-primary/30" : "border border-border bg-black/30"
        }`}
      >
        {media ?? (
          <Image
            src={card.src}
            alt={card.alt}
            width={card.w}
            height={card.h}
            className="h-auto w-full"
            sizes="(max-width: 768px) 88vw, 560px"
          />
        )}
      </div>
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
      <span className="inline-flex items-center gap-1 rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary-3">
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
        <StoreCard card={LEGACY} sub={legacySub} badge={legacyBadge} />
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
