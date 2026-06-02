import type { ReactElement } from "react";
import Image from "next/image";
import { Leaf, MapPin, ShoppingBag, Star } from "lucide-react";

// ─── Star rating ──────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }): ReactElement {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={8}
          style={{
            color: n <= rating ? "#c8890a" : "#c8b896",
            fill: n <= rating ? "#c8890a" : "none",
          }}
        />
      ))}
    </div>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({
  imgSrc,
  imgAlt,
  name,
  price,
  tag,
  rating,
  reviews,
}: {
  imgSrc: string;
  imgAlt: string;
  name: string;
  price: string;
  tag: string;
  rating: number;
  reviews: number;
}): ReactElement {
  return (
    <div
      className="flex flex-col rounded-none overflow-hidden"
      style={{
        background: "#faf6ef",
        border: "1px solid #d0c8b0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      {/* Product photo area */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ aspectRatio: "1 / 0.85", background: "#e8e4dc" }}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          sizes="(max-width: 1280px) 20vw, 250px"
          className="object-cover"
        />
        {/* Studio floor shadow */}
        <div
          className="absolute bottom-0 left-[10%] right-[10%] pointer-events-none"
          style={{
            height: "14px",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.22) 0%, transparent 70%)",
          }}
        />
        {/* Eco badge */}
        <div
          className="absolute top-[7px] left-[7px] px-[6px] py-[3px]"
          style={{
            background: "rgba(22,52,16,0.88)",
            backdropFilter: "blur(2px)",
          }}
        >
          <span
            className="font-bold uppercase tracking-[0.14em] leading-none"
            style={{ fontSize: "7.5px", color: "#a8d090", fontFamily: "Georgia, serif" }}
          >
            {tag}
          </span>
        </div>
        {/* Subtle highlight overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%)",
          }}
        />
      </div>
      {/* Info row */}
      <div
        className="px-[10px] pt-[8px] pb-[9px] flex flex-col gap-[5px]"
        style={{ borderTop: "1px solid #e0d8c0" }}
      >
        <p
          className="leading-tight font-semibold"
          style={{ fontSize: "10.5px", color: "#1a2a16", fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {name}
        </p>
        <div className="flex items-center gap-[5px]">
          <StarRating rating={rating} />
          <span style={{ fontSize: "8px", color: "#8a7e65" }}>({reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-[1px]">
          <span
            className="font-black leading-none"
            style={{ fontSize: "15px", color: "#2d5a27", fontFamily: "Georgia, serif" }}
          >
            {price}
          </span>
          <button
            className="font-bold uppercase tracking-[0.15em] leading-none"
            style={{
              fontSize: "8px",
              background: "#2d5a27",
              color: "#c8e8a8",
              padding: "4px 9px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.12em",
            }}
          >
            Add to Kit
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Hairline rule ────────────────────────────────────────────────────────────
function Rule({ color, thick }: { color?: string; thick?: boolean }): ReactElement {
  return (
    <div
      className="w-full flex-shrink-0"
      style={{ borderTop: thick ? `2px solid ${color ?? "#2d5a27"}` : `0.75px solid ${color ?? "#c0b898"}` }}
    />
  );
}

// ─── Drop-cap paragraph ───────────────────────────────────────────────────────
function DropCapPara({ text, cap }: { text: string; cap: string }): ReactElement {
  return (
    <p className="leading-relaxed" style={{ fontSize: "11.5px", color: "#342e24", lineHeight: 1.7 }}>
      <span
        className="float-left font-black leading-none"
        style={{
          fontSize: "52px",
          color: "#2d5a27",
          fontFamily: "Georgia, 'Times New Roman', serif",
          lineHeight: 0.78,
          paddingRight: "4px",
          paddingTop: "3px",
        }}
      >
        {cap}
      </span>
      {text}
    </p>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function HikingMagazine(): ReactElement {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{
        background: "#f0ead8",
        color: "#1e1e18",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ══════════════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════════════ */}
      <header className="flex-shrink-0" style={{ background: "#f0ead8" }}>
        {/* Top accent rule — thick green */}
        <div style={{ height: "3px", background: "#2d5a27" }} />
        {/* Secondary thin rule */}
        <div style={{ height: "1px", background: "#4a7c40", opacity: 0.4, marginTop: "2px" }} />

        <div className="flex items-center justify-between px-7 py-[6px]">
          {/* LEFT: issue meta */}
          <div className="flex items-center gap-[12px]" style={{ minWidth: "160px" }}>
            <span
              className="uppercase font-bold tracking-[0.26em]"
              style={{ fontSize: "8.5px", color: "#5a5040", letterSpacing: "0.24em" }}
            >
              Issue&#x202F;04
            </span>
            <span style={{ color: "#c0b490", fontSize: "10px" }}>·</span>
            <span
              className="uppercase tracking-[0.2em]"
              style={{ fontSize: "8px", color: "#7a7060" }}
            >
              Spring&#x202F;/&#x202F;Summer&#x202F;2026
            </span>
          </div>

          {/* CENTER: wordmark */}
          <div className="flex flex-col items-center" style={{ gap: "1px" }}>
            {/* Top rule pair flanking title */}
            <div className="flex items-center gap-[14px] w-full justify-center">
              <div style={{ width: "38px", height: "0.75px", background: "#2d5a27" }} />
              <span
                className="uppercase tracking-[0.06em] font-bold"
                style={{ fontSize: "8px", color: "#6a8f5a", letterSpacing: "0.22em" }}
              >
                The&#x202F;Trail&#x202F;Journal
              </span>
              <div style={{ width: "38px", height: "0.75px", background: "#2d5a27" }} />
            </div>
            <h1
              className="font-black uppercase leading-none"
              style={{
                fontSize: "36px",
                color: "#142210",
                fontFamily: "Georgia, 'Times New Roman', serif",
                letterSpacing: "0.28em",
                lineHeight: 1,
              }}
            >
              WILDLINE
            </h1>
            <div className="flex items-center gap-[10px]">
              <div style={{ width: "28px", height: "0.75px", background: "#c0b490" }} />
              <span
                className="uppercase tracking-[0.32em]"
                style={{ fontSize: "6.5px", color: "#9a9080" }}
              >
                Gear&#x202F;&amp;&#x202F;Terrain
              </span>
              <div style={{ width: "28px", height: "0.75px", background: "#c0b490" }} />
            </div>
          </div>

          {/* RIGHT: date + eco badge */}
          <div
            className="flex items-center gap-[12px] justify-end"
            style={{ minWidth: "160px" }}
          >
            <span
              className="uppercase tracking-[0.18em]"
              style={{ fontSize: "8px", color: "#7a7060" }}
            >
              Jun&#x202F;2026
            </span>
            <span style={{ color: "#c0b490", fontSize: "10px" }}>·</span>
            <div
              className="flex items-center gap-[4px] px-[7px] py-[3px]"
              style={{ border: "1px solid #4a7c40" }}
            >
              <Leaf size={8} style={{ color: "#4a7c40" }} />
              <span
                className="uppercase font-bold tracking-[0.2em]"
                style={{ fontSize: "7px", color: "#4a7c40" }}
              >
                B&#x202F;Corp
              </span>
            </div>
          </div>
        </div>

        {/* Masthead footer rule: thick + thin */}
        <div style={{ height: "2px", background: "#2d5a27" }} />
        <div style={{ height: "1px", background: "#2d5a27", opacity: 0.3, marginTop: "2px" }} />
      </header>

      {/* ══════════════════════════════════════════════════
          BODY — left editorial + right shop
      ══════════════════════════════════════════════════ */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* ─────────────────────────────────────────────
            LEFT — hero + editorial body  (58%)
        ───────────────────────────────────────────── */}
        <div
          className="flex flex-col flex-shrink-0 overflow-hidden"
          style={{ width: "58%", borderRight: "0.75px solid #b8b098" }}
        >
          {/* HERO SPREAD — real mountain photo with gradient scrim */}
          <div
            className="relative flex-shrink-0 overflow-hidden"
            style={{ height: "43%" }}
          >
            {/* Real mountain photo */}
            <Image
              src="/products/hiking/hero.jpg"
              alt="Dramatic mountain valley landscape with granite cliffs and dense forest"
              fill
              sizes="(max-width: 1280px) 58vw, 684px"
              className="object-cover"
              priority
            />

            {/* Bottom gradient scrim for text legibility */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.08) 40%, rgba(8,20,8,0.68) 75%, rgba(8,20,8,0.90) 100%)",
              }}
            />
            {/* Edge vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(0,0,0,0.35) 100%)",
              }}
            />

            {/* Feature kicker badge */}
            <div className="absolute top-[14px] left-[18px] flex items-center gap-[8px]">
              <div
                className="px-[8px] py-[3px]"
                style={{ background: "#2d5a27" }}
              >
                <span
                  className="font-bold uppercase tracking-[0.28em]"
                  style={{ fontSize: "8px", color: "#a8d090", fontFamily: "Georgia, serif" }}
                >
                  Feature
                </span>
              </div>
              <div
                className="px-[7px] py-[3px]"
                style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)" }}
              >
                <span
                  className="uppercase tracking-[0.22em]"
                  style={{ fontSize: "7.5px", color: "#d0e8c0" }}
                >
                  <MapPin
                    size={7}
                    style={{ display: "inline", marginRight: "3px", verticalAlign: "middle" }}
                  />
                  Cascade&#x202F;Range
                </span>
              </div>
            </div>

            {/* Caption top-right */}
            <div className="absolute top-[14px] right-[18px]">
              <span
                className="uppercase tracking-[0.2em]"
                style={{ fontSize: "7px", color: "rgba(200,230,180,0.7)" }}
              >
                Photo&#x202F;essay
              </span>
            </div>

            {/* Headline + standfirst + byline overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-[18px] pb-[14px]">
              <h2
                className="font-black leading-none"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "54px",
                  color: "#f4f0e6",
                  textShadow: "0 1px 24px rgba(0,0,0,0.6), 0 0 4px rgba(0,0,0,0.3)",
                  letterSpacing: "-0.015em",
                  lineHeight: 0.96,
                }}
              >
                Into<br />the&#x202F;Green
              </h2>
              {/* Hairline rule between headline and standfirst */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  background: "#6ab856",
                  margin: "7px 0 6px",
                }}
              />
              <p
                className="leading-snug"
                style={{
                  fontSize: "12.5px",
                  color: "#c0dca8",
                  fontStyle: "italic",
                  maxWidth: "390px",
                  lineHeight: 1.45,
                  textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                }}
              >
                Where bio-based films meet alpine seam tape — and the mountains
                finally get the gear they deserve.
              </p>
              {/* Byline row */}
              <div
                className="flex items-center gap-[8px] mt-[7px]"
                style={{ borderTop: "0.75px solid rgba(168,208,144,0.35)", paddingTop: "6px" }}
              >
                <span
                  className="font-bold uppercase tracking-[0.24em]"
                  style={{ fontSize: "8px", color: "rgba(168,208,144,0.9)", letterSpacing: "0.2em" }}
                >
                  By&#x202F;Maren&#x202F;Solberg
                </span>
                <span style={{ color: "rgba(168,208,144,0.4)", fontSize: "9px" }}>·</span>
                <span
                  className="uppercase tracking-[0.18em]"
                  style={{ fontSize: "7.5px", color: "rgba(168,208,144,0.7)" }}
                >
                  Photography&#x202F;by&#x202F;Elias&#x202F;Brandt
                </span>
                <span style={{ color: "rgba(168,208,144,0.4)", fontSize: "9px" }}>·</span>
                <span
                  className="uppercase tracking-[0.18em]"
                  style={{ fontSize: "7.5px", color: "rgba(168,208,144,0.7)" }}
                >
                  2&#x202F;438&#x202F;m
                </span>
              </div>
            </div>
          </div>

          {/* EDITORIAL BODY — two-column */}
          <div
            className="flex flex-1 min-h-0 overflow-hidden gap-0"
            style={{ background: "#f0ead8" }}
          >
            {/* Column 1 */}
            <div
              className="flex-1 min-w-0 flex flex-col px-[18px] pt-[12px] pb-[10px] gap-[8px]"
              style={{ borderRight: "0.75px solid #c8c0a8" }}
            >
              <Rule />
              <DropCapPara
                cap="T"
                text="he ridge arrives before dawn. The light is still grey-green — the kind that soaks into wool and disappears. Three days deep into the Cascades and the shell still breathes: 86&#x202F;% recycled content, zero compromise on waterproofing. Seam tape rated to 28&#x202F;000&#x202F;mm hydrostatic head. This is what responsible performance looks like."
              />
              <p className="leading-relaxed" style={{ fontSize: "11.5px", color: "#342e24", lineHeight: 1.7 }}>
                Post-consumer fleece lines the collar; face-fabric is spun from reclaimed ocean plastic. At 2&#x202F;400 metres the wind has opinions. The baffle construction holds. You stop noticing the jacket and start noticing the view.
              </p>
            </div>

            {/* Column 2 */}
            <div
              className="flex-1 min-w-0 flex flex-col px-[18px] pt-[12px] pb-[10px] gap-[8px]"
            >
              <Rule />
              {/* Pull-quote */}
              <blockquote
                className="relative"
                style={{
                  borderLeft: "3px solid #2d5a27",
                  paddingLeft: "12px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  marginBottom: "2px",
                }}
              >
                <p
                  className="italic font-semibold leading-snug"
                  style={{ fontSize: "14px", color: "#2d5a27", lineHeight: 1.38 }}
                >
                  &ldquo;You stop noticing the jacket and start noticing the view.&rdquo;
                </p>
                <cite
                  className="not-italic uppercase font-bold tracking-[0.22em] block mt-[5px]"
                  style={{ fontSize: "7.5px", color: "#8a7e65" }}
                >
                  — Maren Solberg, Cascade High Route
                </cite>
              </blockquote>
              <p className="leading-relaxed" style={{ fontSize: "11.5px", color: "#342e24", lineHeight: 1.7 }}>
                Merino wool has regulated temperature on high trails for centuries. The modern iteration — 18.5-micron superfine — pairs natural thermoregulation with a plant-based dye bath. Pack light; move fast; leave nothing but bootprints.
              </p>
              {/* Stat callout */}
              <div
                className="mt-auto flex items-stretch gap-0 overflow-hidden"
                style={{
                  background: "linear-gradient(110deg, #1e3c18 0%, #2d5a27 55%, #3a6b34 100%)",
                  border: "none",
                }}
              >
                <div className="px-[12px] py-[8px]">
                  <p
                    className="font-black leading-none"
                    style={{ fontSize: "26px", color: "#fff", fontFamily: "Georgia, serif" }}
                  >
                    86<span style={{ fontSize: "14px" }}>%</span>
                  </p>
                  <p
                    className="uppercase tracking-[0.2em] leading-none mt-[2px]"
                    style={{ fontSize: "7px", color: "#a8d090" }}
                  >
                    Recycled content
                  </p>
                </div>
                <div style={{ width: "0.75px", background: "#4a7c40" }} />
                <div className="px-[12px] py-[8px] flex items-center">
                  <p
                    className="italic leading-snug"
                    style={{ fontSize: "9.5px", color: "#c0e0a0", lineHeight: 1.45 }}
                  >
                    Highest in category — 2025&#x202F;Bluesign audit across full kit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            RIGHT — Shop the Kit  (42%)
        ───────────────────────────────────────────── */}
        <div
          className="flex flex-col flex-shrink-0 overflow-hidden"
          style={{ width: "42%", background: "#e8e0cc" }}
        >
          {/* Shop header */}
          <div
            className="flex-shrink-0 px-[16px] pt-[10px] pb-[9px]"
            style={{
              background: "#e0d8c4",
              borderBottom: "2px solid #2d5a27",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[7px]">
                <ShoppingBag size={13} style={{ color: "#2d5a27" }} />
                <h3
                  className="font-black uppercase tracking-[0.24em] leading-none"
                  style={{ fontSize: "12px", color: "#142210", fontFamily: "Georgia, serif" }}
                >
                  Shop&#x202F;the&#x202F;Kit
                </h3>
              </div>
              <div className="flex items-center gap-[7px]">
                <span
                  className="uppercase tracking-[0.16em] font-bold"
                  style={{
                    fontSize: "7.5px",
                    color: "#2d5a27",
                    border: "1px solid #2d5a27",
                    padding: "2px 6px",
                  }}
                >
                  4 pieces
                </span>
                <div
                  className="font-black leading-none"
                  style={{
                    fontSize: "16px",
                    color: "#a8d090",
                    background: "#2d5a27",
                    padding: "3px 9px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  $645
                </div>
              </div>
            </div>
            <p
              className="italic leading-tight mt-[4px]"
              style={{ fontSize: "9.5px", color: "#5a5040" }}
            >
              As tested on the Cascade High Route — certified sustainable, trail-ready.
            </p>
          </div>

          {/* 2×2 product grid */}
          <div
            className="flex-1 min-h-0 grid grid-cols-2 overflow-hidden"
            style={{ gap: "8px", padding: "10px" }}
          >
            <ProductCard
              imgSrc="/products/hiking/jacket.jpg"
              imgAlt="Hiker wearing green waterproof shell jacket at alpine lake"
              name="Recycled Shell Jacket"
              price="$210"
              tag="Eco Shell"
              rating={5}
              reviews={312}
            />
            <ProductCard
              imgSrc="/products/hiking/baselayer.jpg"
              imgAlt="Hiker in merino base layer shirt on desert trail"
              name="Merino Base Layer"
              price="$85"
              tag="Superfine"
              rating={4}
              reviews={189}
            />
            <ProductCard
              imgSrc="/products/hiking/shoe.jpg"
              imgAlt="Salomon trail running shoe on dirt trail"
              name="Trail Runner GTX"
              price="$160"
              tag="Waterproof"
              rating={5}
              reviews={447}
            />
            <ProductCard
              imgSrc="/products/hiking/pack.jpg"
              imgAlt="Blue and grey hiking backpack resting on trail rocks"
              name="40L Bio-Pack"
              price="$190"
              tag="Biobased"
              rating={4}
              reviews={228}
            />
          </div>

          {/* Kit total strip */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-[16px] py-[9px]"
            style={{
              background: "linear-gradient(100deg, #142210 0%, #2d5a27 50%, #3a6b34 100%)",
              borderTop: "1px solid #0e1a0c",
            }}
          >
            <div className="flex items-center gap-[10px]">
              <Leaf size={14} style={{ color: "#a8d090" }} />
              <div>
                <p
                  className="uppercase tracking-[0.22em] leading-none"
                  style={{ fontSize: "7px", color: "#88b878" }}
                >
                  Full Kit Total
                </p>
                <p
                  className="font-black leading-none mt-[2px]"
                  style={{ fontSize: "22px", color: "#fff", fontFamily: "Georgia, serif" }}
                >
                  $645
                </p>
              </div>
            </div>
            <div style={{ width: "0.75px", alignSelf: "stretch", background: "#4a7c40" }} />
            <div className="text-right">
              <p
                className="uppercase tracking-[0.18em] leading-none"
                style={{ fontSize: "7px", color: "#88b878" }}
              >
                Leave No Trace Certified
              </p>
              <p
                className="italic leading-tight mt-[3px]"
                style={{ fontSize: "9px", color: "#c0e0a0" }}
              >
                Ships carbon&#x2011;neutral worldwide
              </p>
            </div>
            <button
              style={{
                background: "#a8d090",
                color: "#142210",
                fontSize: "8.5px",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "6px 12px",
                border: "none",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
              }}
            >
              Add All
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer
        className="flex-shrink-0 flex items-center justify-between px-7 py-[5px]"
        style={{
          borderTop: "1.5px solid #b8b098",
          background: "#e8e2d0",
        }}
      >
        <div className="flex items-center gap-[8px]">
          <span
            className="font-black uppercase tracking-[0.3em]"
            style={{ fontSize: "9.5px", color: "#2d5a27", fontFamily: "Georgia, serif" }}
          >
            WILDLINE
          </span>
          <span style={{ color: "#b0a888", fontSize: "9px" }}>—</span>
          <span
            className="uppercase tracking-[0.18em]"
            style={{ fontSize: "7.5px", color: "#7a7060" }}
          >
            The Trail Journal
          </span>
        </div>
        <div className="flex items-center gap-[14px]">
          <span className="uppercase tracking-[0.18em]" style={{ fontSize: "7.5px", color: "#7a7060" }}>
            wildline.co/shop
          </span>
          <span style={{ color: "#c0b490" }}>·</span>
          <span className="uppercase tracking-[0.18em]" style={{ fontSize: "7.5px", color: "#7a7060" }}>
            @wildlinemag
          </span>
          <span style={{ color: "#c0b490" }}>·</span>
          <span className="uppercase tracking-[0.18em]" style={{ fontSize: "7.5px", color: "#7a7060" }}>
            ISSN&#x202F;2398&#x2011;4421
          </span>
        </div>
        <span
          className="font-semibold"
          style={{ fontSize: "8.5px", color: "#7a7060" }}
        >
          Pg.&#x202F;48
        </span>
      </footer>
    </div>
  );
}
