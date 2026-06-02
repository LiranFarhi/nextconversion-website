/* ─────────────────────────────────────────────────────────────────────────────
   MAISON NOIR · Paris — Outerwear Lookbook
   High-end luxury editorial. Canvas: 1180 × 720 CSS px (fills parent).
   All sub-components at module scope (react-hooks/static-components rule).
───────────────────────────────────────────────────────────────────────────── */
import type { ReactElement, ReactNode, CSSProperties } from "react";
import Image from "next/image";

const serif: CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
};

/* ══════════════════════════════════════════════════════════════════════════════
   UI PRIMITIVES
══════════════════════════════════════════════════════════════════════════════ */

function HairlineRule({ vertical, className }: { vertical?: boolean; className?: string }): ReactElement {
  if (vertical) {
    return <div className={`w-px self-stretch bg-[#1a1a1a]/10 ${className ?? ""}`} />;
  }
  return <div className={`h-px bg-[#1a1a1a]/10 ${className ?? ""}`} />;
}

/* ── Small Look Card ─────────────────────────────────────────────────────── */
function SmallLookCard({
  lookNum,
  title,
  material,
  price,
  imageSrc,
  imageAlt,
  labelColor,
}: {
  lookNum: string;
  title: string;
  material: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  labelColor: string;
  children?: ReactNode;
}): ReactElement {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      {/* Tall portrait image tile */}
      <div
        className="relative min-h-0 flex-1 overflow-hidden bg-[#e8e4dc]"
      >
        {/* Look number */}
        <span
          className="absolute left-3.5 top-3 z-10 select-none text-[6.5px] font-light tracking-[0.36em]"
          style={{ ...serif, color: labelColor, opacity: 0.85 }}
        >
          {lookNum}
        </span>

        {/* Coat photo — fills tile with object-cover */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 220px, 33vw"
          className="object-cover object-top"
        />

        {/* Very subtle inner-shadow vignette */}
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            boxShadow: "inset 0 0 32px rgba(20,18,16,0.14)",
          }}
        />
      </div>

      {/* Caption area */}
      <div className="shrink-0 pb-3 pt-3">
        <HairlineRule />
        <div className="mt-2.5 flex items-start justify-between gap-2">
          <div>
            <p
              className="text-[8px] font-light leading-none tracking-[0.24em] text-[#1a1a1a]"
              style={serif}
            >
              {title.toUpperCase()}
            </p>
            <p
              className="mt-1 text-[6.5px] font-light tracking-[0.14em] text-[#1a1a1a]/45"
              style={serif}
            >
              {material}
            </p>
          </div>
          <p
            className="shrink-0 text-[9px] font-light tracking-[0.08em] text-[#1a1a1a]/70"
            style={serif}
          >
            {price}
          </p>
        </div>
        <button
          type="button"
          className="mt-2.5 text-[6px] font-light tracking-[0.3em] text-[#1a1a1a]/35 underline underline-offset-2 decoration-[#1a1a1a]/20 transition-colors hover:text-[#1a1a1a]/60"
          style={serif}
        >
          ENQUIRE
        </button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════════════════════════════ */
export default function LuxuryLookbook() {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{ background: "#f5f3ef", ...serif }}
    >

      {/* ══════════════════════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════════════════════ */}
      <header className="shrink-0 px-10 pt-6 pb-0">

        {/* Micro info row */}
        <div className="flex items-center justify-between pb-3.5">
          <span
            className="text-[6.5px] font-light tracking-[0.42em] text-[#1a1a1a]/32"
            style={serif}
          >
            PARIS &nbsp;·&nbsp; EST. MMXII
          </span>
          <span
            className="text-[6.5px] font-light tracking-[0.42em] text-[#1a1a1a]/32"
            style={serif}
          >
            AUTUMN &nbsp;·&nbsp; WINTER COLLECTION
          </span>
        </div>

        <HairlineRule />

        {/* Main nav row */}
        <div className="relative mt-4 flex items-baseline justify-between pb-4">

          {/* Left nav */}
          <nav aria-label="Main" className="flex items-baseline gap-8">
            {["Collection", "Atelier", "Appointment"].map((item) => (
              <button
                type="button"
                key={item}
                className="cursor-pointer bg-transparent text-[7.5px] font-light tracking-[0.3em] text-[#1a1a1a]/45 transition-colors hover:text-[#1a1a1a] border-none p-0"
                style={serif}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </nav>

          {/* Centred wordmark */}
          <div
            className="absolute left-1/2 flex flex-col items-center"
            style={{ transform: "translateX(-50%)", top: 0 }}
          >
            <h1
              className="text-[24px] font-light leading-none tracking-[0.5em] text-[#1a1a1a] pr-[0.5em]"
              style={serif}
            >
              MAISON NOIR
            </h1>
            <p
              className="mt-1.5 text-[7px] font-light tracking-[0.55em] text-[#1a1a1a]/36 pr-[0.55em]"
              style={serif}
            >
              PARIS
            </p>
          </div>

          {/* Right utility row */}
          <div className="flex items-baseline gap-5">
            <button
              type="button"
              className="bg-transparent border-none p-0 text-[7px] font-light tracking-[0.26em] text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 cursor-pointer"
              style={serif}
            >
              ACCOUNT
            </button>
            <button
              type="button"
              className="bg-transparent border-none p-0 text-[7px] font-light tracking-[0.26em] text-[#1a1a1a]/40 hover:text-[#1a1a1a]/70 cursor-pointer"
              style={serif}
            >
              BAG&nbsp;(0)
            </button>
          </div>
        </div>

        <HairlineRule />
      </header>

      {/* ══════════════════════════════════════════════════════════
          BODY — editorial split layout
      ══════════════════════════════════════════════════════════ */}
      <div className="flex min-h-0 flex-1 overflow-hidden">

        {/* ── LEFT: Hero look ────────────────────────────────────── */}
        <div
          className="relative shrink-0 overflow-hidden bg-[#cac4bc]"
          style={{ width: "37%" }}
        >
          {/* Hero photo — trench coat */}
          <Image
            src="/products/luxury/trench.jpg"
            alt="The Wool Trench — double-faced Loro Piana wool, storm flap and epaulettes"
            fill
            sizes="(min-width: 1024px) 37vw, 100vw"
            className="object-cover object-top"
            priority
          />

          {/* Subtle inner vignette */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ boxShadow: "inset 0 0 60px rgba(20,18,14,0.18)" }}
          />

          {/* Rotated season label */}
          <div
            className="absolute left-5 top-1/2 z-20 select-none"
            style={{
              transform: "translateY(-50%) rotate(-90deg)",
              transformOrigin: "center center",
              whiteSpace: "nowrap",
            }}
          >
            <span
              className="text-[6px] font-light tracking-[0.48em] text-[#f5f3ef]/60"
              style={serif}
            >
              AW&nbsp;&nbsp;MMXXVI
            </span>
          </div>

          {/* Bottom caption scrim */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 px-7 pb-7 pt-20"
            style={{
              background:
                "linear-gradient(to top, rgba(14,12,10,0.78) 0%, rgba(14,12,10,0.32) 55%, transparent 100%)",
            }}
          >
            <p
              className="text-[6.5px] font-light tracking-[0.44em] text-[#f5f3ef]/55"
              style={serif}
            >
              LOOK&nbsp;01
            </p>
            <p
              className="mt-1.5 text-[18px] font-light leading-tight tracking-[0.14em] text-[#f5f3ef]"
              style={serif}
            >
              The Wool Trench
            </p>
            <div className="my-3.5 h-px w-8 bg-[#f5f3ef]/28" />
            <p
              className="text-[6.5px] font-light leading-relaxed tracking-[0.18em] text-[#f5f3ef]/50"
              style={serif}
            >
              Double-faced Loro Piana wool.
              <br />
              Storm flap. Epaulettes.
            </p>
            <div className="mt-4 flex items-end justify-between">
              <p
                className="text-[13px] font-light tracking-[0.12em] text-[#f5f3ef]/88"
                style={serif}
              >
                EUR&nbsp;890
              </p>
              <div className="flex flex-col items-end gap-2">
                <button
                  type="button"
                  className="bg-transparent border-none p-0 cursor-pointer text-[6px] font-light tracking-[0.3em] text-[#f5f3ef]/55 underline underline-offset-2 decoration-[#f5f3ef]/28 hover:text-[#f5f3ef]/90"
                  style={serif}
                >
                  ADD TO LOOK
                </button>
                <button
                  type="button"
                  className="bg-transparent border-none p-0 cursor-pointer text-[6px] font-light tracking-[0.3em] text-[#f5f3ef]/55 underline underline-offset-2 decoration-[#f5f3ef]/28 hover:text-[#f5f3ef]/90"
                  style={serif}
                >
                  ENQUIRE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Editorial panel ──────────────────────────────── */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">

          {/* Editorial text */}
          <div className="shrink-0 px-9 py-5">
            <p
              className="mb-1 text-[6.5px] font-light tracking-[0.36em] text-[#1a1a1a]/35"
              style={serif}
            >
              EDITORIAL NOTE
            </p>
            <p
              className="max-w-[340px] text-[8.5px] font-light leading-[2] tracking-[0.12em] text-[#1a1a1a]/46"
              style={serif}
            >
              A study in restraint. Each piece is considered over years; each
              seam resolved through the precision of the atelier. Outerwear as
              architecture — form that endures long after the season passes.
            </p>
          </div>

          {/* Divider with centred label */}
          <div className="mx-9 flex shrink-0 items-center gap-5 pb-4">
            <HairlineRule className="flex-1" />
            <span
              className="shrink-0 text-[6px] font-light tracking-[0.44em] text-[#1a1a1a]/28"
              style={serif}
            >
              THE COLLECTION
            </span>
            <HairlineRule className="flex-1" />
          </div>

          {/* ── 3-up look row ─────────────────────────────────────── */}
          <div className="flex min-h-0 flex-1 gap-0 overflow-hidden px-9">

            <SmallLookCard
              lookNum="LOOK 02"
              title="Cashmere Wrap"
              material="Mongolian cashmere · ivory"
              price="EUR 1,240"
              imageSrc="/products/luxury/wrap.jpg"
              imageAlt="Cashmere wrap coat — fluid silhouette in pale grey, runway editorial"
              labelColor="#f5f3ef"
            />

            <HairlineRule vertical className="mx-4" />

            <SmallLookCard
              lookNum="LOOK 03"
              title="Belted Camel Coat"
              material="Virgin wool · camel"
              price="EUR 1,090"
              imageSrc="/products/luxury/camel.jpg"
              imageAlt="Belted camel cape swing coat in warm camel wool"
              labelColor="#2e2418"
            />

            <HairlineRule vertical className="mx-4" />

            <SmallLookCard
              lookNum="LOOK 04"
              title="Silk-Lined Overcoat"
              material="Pressed wool · charcoal"
              price="EUR 1,460"
              imageSrc="/products/luxury/overcoat.jpg"
              imageAlt="Double-breasted shearling overcoat in charcoal suede with fur collar"
              labelColor="#f5f3ef"
            />

          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════════════ */}
      <footer className="shrink-0 px-10 pb-4 pt-0">
        <HairlineRule />
        <div className="mt-2.5 flex items-center justify-between">
          <p
            className="text-[6px] font-light tracking-[0.3em] text-[#1a1a1a]/28"
            style={serif}
          >
            COMPLIMENTARY SHIPPING &amp; RETURNS
          </p>
          <p
            className="text-[6px] font-light tracking-[0.3em] text-[#1a1a1a]/28"
            style={serif}
          >
            PERSONAL STYLING&nbsp;&nbsp;&middot;&nbsp;&nbsp;BY APPOINTMENT
          </p>
          <p
            className="text-[6px] font-light tracking-[0.3em] text-[#1a1a1a]/28"
            style={serif}
          >
            &copy;&nbsp;MAISON NOIR &nbsp;&middot;&nbsp; PARIS
          </p>
        </div>
      </footer>

    </div>
  );
}
