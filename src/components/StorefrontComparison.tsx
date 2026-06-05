"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CarouselArrow from "./CarouselArrow";
import Reveal from "./Reveal";
import PersonaStrip, { PERSONAS } from "./PersonaStrip";
import { STOREFRONTS, type StorefrontId } from "./storefronts";
import { useAutoAdvance } from "./useAutoAdvance";

const STOREFRONT_IDS = Object.keys(STOREFRONTS) as StorefrontId[];

type Card = {
  label: string;
  src: string;
  alt: string;
  highlight?: boolean;
};

const LEGACY: Card = {
  label: "Without NextConversion",
  src: "/figma/legacy-store.jpg",
  alt: "A single generic storefront shown to every visitor",
};
const CURATED: Card = {
  label: "With NextConversion",
  src: "/storefronts/store-1.jpg",
  alt: "A curated storefront, personalized to the active visitor",
  highlight: true,
};

/** A desktop storefront variation, shown frameless and cut off at the bottom
 *  (the page continues below the card), matching the Figma. */
function BrowserScreen({ src, alt, eager }: { src: string; alt: string; eager?: boolean }) {
  return (
    <div className="relative aspect-[1024/860] w-full overflow-hidden rounded-t-lg bg-white">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 40vw, 480px"
        loading={eager ? "eager" : undefined}
        className="object-cover object-top"
      />
    </div>
  );
}

/** The static "one page for everyone" legacy storefront. */
function LegacyShowcase() {
  return <BrowserScreen src={LEGACY.src} alt={LEGACY.alt} />;
}

/**
 * The real Figma storefront variation for the active visitor. All variations
 * are stacked and cross-fade by opacity. Before the page is idle only the
 * active one is mounted (so it doesn't compete with first paint); once idle
 * (`preload`) the rest are mounted and eagerly fetched, so cycling left/right
 * is instant with no flash.
 */
function CuratedShowcase({ id, preload }: { id: StorefrontId; preload: boolean }) {
  return (
    <div className="relative aspect-[1024/860] w-full">
      {STOREFRONT_IDS.map((sid) => {
        const isActive = sid === id;
        if (!preload && !isActive) return null;
        return (
          <div
            key={sid}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity duration-500 ease-out"
            style={{ opacity: isActive ? 1 : 0 }}
          >
            <BrowserScreen
              src={STOREFRONTS[sid].src}
              alt={isActive ? STOREFRONTS[sid].alt : ""}
              eager={preload && !isActive}
            />
          </div>
        );
      })}
    </div>
  );
}

/** The original site's wordmark — the static "before" store (Northline). */
function OriginalLogo() {
  return (
    <span className="font-display text-sm font-bold uppercase leading-none tracking-[0.18em] text-white/85 sm:text-xl">
      Northline
    </span>
  );
}

/** NextConversion brand lockup — responsive so it fits the narrow mobile card. */
function NextConversionLogo() {
  return (
    <span className="inline-flex items-center gap-1.5 font-display font-semibold leading-none tracking-[-0.02em] text-white">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0 sm:h-5 sm:w-5">
        <rect y="13.7143" width="10.2857" height="10.2857" fill="#834FFB" />
        <path d="M24 24H23.9971L16 16.0947V8.28613H8.10059L0 0.27832V0H24V24Z" fill="#834FFB" />
      </svg>
      <span className="text-sm sm:text-lg">NextConversion</span>
    </span>
  );
}

function StoreCard({
  card,
  header,
  sub,
  media,
}: {
  card: Card;
  header: React.ReactNode;
  sub: React.ReactNode;
  media?: React.ReactNode;
}) {
  return (
    <div
      className={`card relative flex h-full flex-col overflow-hidden p-3 text-center sm:p-6 ${
        card.highlight ? "shadow-[0_0_60px_-18px_rgba(131,79,251,0.75)]" : ""
      }`}
      style={
        card.highlight
          ? {
              // Bright gradient outline (matching the connector line above)
              border: "1.5px solid transparent",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02)) padding-box, linear-gradient(155deg, #7b5cff 0%, #b15cff 50%, #e151ff 100%) border-box",
            }
          : undefined
      }
    >
      {card.highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-2/30 blur-[90px]"
        />
      )}
      {/* Fixed-height header — centered so the logos + sub align across cards */}
      <div className="relative flex h-[68px] flex-col items-center justify-center overflow-hidden sm:h-[72px]">
        {header}
        <p className="mt-2 font-inter text-xs leading-snug text-soft sm:text-base">{sub}</p>
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
  const step = (dir: number) => {
    pSelect((pIdx + dir + PERSONAS.length) % PERSONAS.length);
    pPause();
  };

  // Warm every storefront variation, but only AFTER the initial page load and
  // once the browser is idle — so cycling left/right is instant without
  // competing with first paint.
  const [preload, setPreload] = useState(false);
  useEffect(() => {
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const warm = () => {
      if (w.requestIdleCallback) idleId = w.requestIdleCallback(() => setPreload(true), { timeout: 2500 });
      else timer = setTimeout(() => setPreload(true), 200);
    };
    if (document.readyState === "complete") warm();
    else window.addEventListener("load", warm, { once: true });
    return () => {
      window.removeEventListener("load", warm);
      if (idleId) w.cancelIdleCallback?.(idleId);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const legacySub = "One generic page for every visitor";
  const curatedSub = "Endless storefronts, curated per visitor";

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
          <CarouselArrow dir="prev" onClick={() => step(-1)} label="Previous storefront" />
        </div>
        <div ref={personaRef} className="grid min-w-0 flex-1 grid-cols-2 gap-2.5 sm:gap-6">
          <StoreCard card={LEGACY} header={<OriginalLogo />} sub={legacySub} media={<LegacyShowcase />} />
          <StoreCard
            card={CURATED}
            header={<NextConversionLogo />}
            sub={curatedSub}
            media={<CuratedShowcase id={active.storefront} preload={preload} />}
          />
        </div>
        <div className="hidden sm:block">
          <CarouselArrow dir="next" onClick={() => step(1)} label="Next storefront" />
        </div>
      </div>
      {/* Mobile prev/next */}
      <div className="mt-4 flex justify-center gap-5 sm:hidden">
        <CarouselArrow dir="prev" onClick={() => step(-1)} label="Previous storefront" />
        <CarouselArrow dir="next" onClick={() => step(1)} label="Next storefront" />
      </div>
    </section>
  );
}
