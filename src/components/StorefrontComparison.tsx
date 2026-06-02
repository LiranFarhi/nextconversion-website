"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import SnapRow from "./SnapRow";
import CarouselDots from "./CarouselDots";
import PersonaStrip, { PERSONAS } from "./PersonaStrip";
import { STOREFRONTS, SCREEN, type StorefrontId, type DeviceType } from "./storefronts";
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

// Outer device dimensions (screen + chrome) used to scale the device to fit.
const PADDING = 0.92; // leave a little breathing room around the device
const OUTER: Record<DeviceType, { w: number; h: number }> = {
  phone: { w: SCREEN.phone.w + 16, h: SCREEN.phone.h + 16 },
  browser: { w: SCREEN.browser.w, h: SCREEN.browser.h + 28 },
};

/** A phone bezel / browser window around the fixed-size storefront screen. */
function DeviceFrame({ type, children }: { type: DeviceType; children: React.ReactNode }) {
  if (type === "phone") {
    return (
      <div className="rounded-[2.3rem] bg-[#0b0b12] p-2 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
        <div
          className="relative overflow-hidden rounded-[1.7rem] bg-white"
          style={{ width: SCREEN.phone.w, height: SCREEN.phone.h }}
        >
          {children}
        </div>
      </div>
    );
  }
  return (
    <div className="overflow-hidden rounded-xl bg-[#23232b] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
      <div className="flex h-7 items-center gap-2 px-3.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <div className="mx-auto h-4 w-1/2 rounded-full bg-black/25" />
      </div>
      <div
        className="relative overflow-hidden bg-white"
        style={{ width: SCREEN.browser.w, height: SCREEN.browser.h }}
      >
        {children}
      </div>
    </div>
  );
}

/**
 * Renders the live storefront the agents built for the active visitor on its
 * native device, scaled to FIT the card (never cropped), and cross-fades to a
 * new one when the visitor changes. Each visitor gets a different *format*.
 */
function CuratedShowcase({ id }: { id: StorefrontId }) {
  const reduce = useReducedMotion();
  const { Component, device } = STOREFRONTS[id];
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const outer = OUTER[device];

  useLayoutEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const fit = () => {
      const { width, height } = el.getBoundingClientRect();
      setScale(Math.min(width / outer.w, height / outer.h) * PADDING);
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, [outer.w, outer.h]);

  return (
    <div
      ref={frameRef}
      className="relative aspect-[1024/1004] w-full overflow-hidden rounded-2xl bg-[radial-gradient(120%_90%_at_50%_-10%,#221b4d_0%,#0b0a1f_55%,#070617_100%)]"
    >
      {/* subtle dotted stage backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <AnimatePresence initial={false}>
        <motion.div
          key={id}
          className="absolute left-1/2 top-1/2"
          style={{ transform: `translate(-50%, -50%) scale(${scale})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: scale > 0 ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.45, ease: "easeOut" }}
        >
          <DeviceFrame type={device}>
            <Component />
          </DeviceFrame>
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
      className={`card relative flex h-full flex-col overflow-hidden p-6 text-center sm:p-7 ${
        card.highlight ? "border-primary/40 shadow-[0_0_60px_-24px_rgba(131,79,251,0.6)]" : ""
      }`}
    >
      {card.highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary-2/30 blur-[90px]"
        />
      )}
      <div className="relative mb-4 flex justify-center">{badge}</div>
      <p className="relative font-display text-xl font-medium text-white sm:text-2xl">{card.label}</p>
      <p className="relative mb-6 mt-1 min-h-[24px] font-inter text-base text-soft transition-colors">{sub}</p>
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
  // mobile card carousel (legacy <-> curated)
  const { index: cIdx, select: cSelect, playing: cPlaying } = useAutoAdvance(2);

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
        {STOREFRONTS[active.storefront].format}
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

      {/* Desktop: legacy vs curated, connected to the active visitor */}
      <div className="hidden gap-6 md:grid md:grid-cols-2">
        <StoreCard card={LEGACY} sub={legacySub} badge={legacyBadge} />
        <StoreCard
          card={CURATED}
          sub={curatedSub}
          badge={curatedBadge}
          media={<CuratedShowcase id={active.storefront} />}
        />
      </div>

      {/* Mobile: swipe carousel */}
      <div className="mt-2 md:hidden">
        <SnapRow active={cIdx} onSelect={cSelect} className="gap-4 px-1 pb-1" itemClassName="basis-[86%] pr-1">
          <StoreCard card={LEGACY} sub={legacySub} badge={legacyBadge} />
          <StoreCard
            card={CURATED}
            sub={curatedSub}
            badge={curatedBadge}
            media={<CuratedShowcase id={active.storefront} />}
          />
        </SnapRow>
        <div className="mt-4 flex justify-center">
          <CarouselDots count={2} active={cIdx} onSelect={cSelect} dwellMs={4200} playing={cPlaying} label="Storefront" />
        </div>
      </div>
    </section>
  );
}
