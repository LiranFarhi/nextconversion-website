import type { ReactElement } from "react";
import Image from "next/image";
import { Flame, ShoppingCart, Search, Home, Grid2x2, User, Star } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   DEAL DATA
═══════════════════════════════════════════════════════ */

interface Deal {
  title: string;
  sale: string;
  original: string;
  discount: string;
  pct: number;
  rating: string;
  reviews: string;
  stock: number;
  stockMax: number;
  tileBg: string;
  badgeBg: string;
  photo: string;
  photoAlt: string;
}

const DEALS: Deal[] = [
  {
    title: "Wireless Earbuds",
    sale: "$14.99",
    original: "$49.99",
    discount: "-70%",
    pct: 70,
    rating: "4.8",
    reviews: "2.1k",
    stock: 18,
    stockMax: 120,
    tileBg: "#ede9fe",
    badgeBg: "#dc2626",
    photo: "/products/budget/earbuds.jpg",
    photoAlt: "Wireless earbuds",
  },
  {
    title: "Oversized Hoodie",
    sale: "$19.99",
    original: "$44.99",
    discount: "-55%",
    pct: 55,
    rating: "4.7",
    reviews: "1.4k",
    stock: 34,
    stockMax: 150,
    tileBg: "#fce7f3",
    badgeBg: "#ea580c",
    photo: "/products/budget/hoodie.jpg",
    photoAlt: "Oversized hoodie",
  },
  {
    title: "LED Strip Lights",
    sale: "$8.49",
    original: "$21.00",
    discount: "-60%",
    pct: 60,
    rating: "4.9",
    reviews: "3.8k",
    stock: 10,
    stockMax: 200,
    tileBg: "#dcfce7",
    badgeBg: "#dc2626",
    photo: "/products/budget/led.jpg",
    photoAlt: "LED strip lights",
  },
  {
    title: "Phone Stand",
    sale: "$5.99",
    original: "$11.99",
    discount: "-50%",
    pct: 50,
    rating: "4.6",
    reviews: "876",
    stock: 46,
    stockMax: 100,
    tileBg: "#f1f5f9",
    badgeBg: "#ea580c",
    photo: "/products/budget/stand.jpg",
    photoAlt: "Phone stand holder",
  },
  {
    title: "Canvas Tote Bag",
    sale: "$7.99",
    original: "$14.99",
    discount: "-45%",
    pct: 45,
    rating: "4.7",
    reviews: "1.2k",
    stock: 63,
    stockMax: 180,
    tileBg: "#fef9c3",
    badgeBg: "#ca8a04",
    photo: "/products/budget/tote.jpg",
    photoAlt: "Canvas tote bag",
  },
  {
    title: "Mini Blender",
    sale: "$16.99",
    original: "$27.99",
    discount: "-40%",
    pct: 40,
    rating: "4.8",
    reviews: "994",
    stock: 24,
    stockMax: 80,
    tileBg: "#e0f2fe",
    badgeBg: "#dc2626",
    photo: "/products/budget/blender.jpg",
    photoAlt: "Mini blender",
  },
];

const CATEGORIES = ["All", "Tech", "Fashion", "Home", "Under $10"];

/* ═══════════════════════════════════════════════════════
   STARS (inline, module scope)
═══════════════════════════════════════════════════════ */
function StarRating({ rating }: { rating: string }): ReactElement {
  const val = parseFloat(rating);
  const full = Math.floor(val);
  const half = val - full >= 0.5;
  return (
    <span style={{ display: "inline-flex", gap: "1px", alignItems: "center" }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ fontSize: "8px", lineHeight: 1, color: i <= full ? "#facc15" : (i === full + 1 && half) ? "#facc15" : "#3f3f46" }}>
          {i <= full ? "★" : (i === full + 1 && half) ? "½" : "☆"}
        </span>
      ))}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════
   DEAL CARD
═══════════════════════════════════════════════════════ */
interface DealCardProps { deal: Deal }

function DealCard({ deal }: DealCardProps): ReactElement {
  const soldPct = Math.round(((deal.stockMax - deal.stock) / deal.stockMax) * 100);
  const almostGone = deal.stock < 25;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.13), 0 1px 3px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* ── Product photo area ── */}
      <div style={{ position: "relative", backgroundColor: deal.tileBg, padding: "6px 6px 4px" }}>
        {/* Discount badge — top-left */}
        <div style={{
          position: "absolute", top: 0, left: 0, zIndex: 10,
          backgroundColor: deal.badgeBg,
          color: "#fff",
          fontSize: "9px",
          fontWeight: 900,
          padding: "3px 6px",
          borderRadius: "0 0 8px 0",
          letterSpacing: "0.03em",
          boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        }}>
          {deal.discount}
        </div>
        {/* Heart wishlist — top-right */}
        <div style={{ position: "absolute", top: "4px", right: "5px", zIndex: 10, fontSize: "11px", lineHeight: 1 }}>
          ♡
        </div>
        {/* Photo tile */}
        <div style={{ position: "relative", width: "100%", height: "90px", overflow: "hidden", borderRadius: "6px" }}>
          <Image
            src={deal.photo}
            alt={deal.photoAlt}
            fill
            sizes="140px"
            className="object-cover"
          />
        </div>
      </div>

      {/* ── Card info ── */}
      <div style={{ padding: "6px 7px 7px", display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
        {/* Title */}
        <p style={{ fontSize: "10px", fontWeight: 700, color: "#18181b", lineHeight: 1.2, margin: 0, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {deal.title}
        </p>

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
          <span style={{ fontSize: "14px", fontWeight: 900, color: "#dc2626", lineHeight: 1 }}>
            {deal.sale}
          </span>
          <span style={{ fontSize: "9px", fontWeight: 500, color: "#a1a1aa", textDecoration: "line-through", lineHeight: 1 }}>
            {deal.original}
          </span>
        </div>

        {/* Rating row */}
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <StarRating rating={deal.rating} />
          <span style={{ fontSize: "8.5px", fontWeight: 700, color: "#78716c" }}>
            {deal.rating}
          </span>
          <span style={{ fontSize: "8px", color: "#a1a1aa" }}>
            ({deal.reviews})
          </span>
        </div>

        {/* Stock urgency */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{
              fontSize: "7.5px",
              fontWeight: 700,
              color: almostGone ? "#dc2626" : "#ea580c",
            }}>
              {almostGone ? "🔥 Almost gone!" : "Selling fast"}
            </span>
            <span style={{ fontSize: "7px", color: "#a1a1aa" }}>
              {deal.stock} left
            </span>
          </div>
          {/* Progress bar */}
          <div style={{ height: "4px", borderRadius: "2px", backgroundColor: "#f4f4f5", overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${soldPct}%`,
              borderRadius: "2px",
              background: almostGone
                ? "linear-gradient(90deg,#f97316,#dc2626)"
                : "linear-gradient(90deg,#fb923c,#f97316)",
            }}/>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          type="button"
          style={{
            marginTop: "2px",
            width: "100%",
            padding: "6px 4px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(90deg,#f97316 0%,#dc2626 100%)",
            color: "#fff",
            fontSize: "8.5px",
            fontWeight: 900,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            boxShadow: "0 2px 8px rgba(220,38,38,0.35)",
          }}
        >
          <ShoppingCart size={9} strokeWidth={2.5} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
export default function BudgetDeals(): ReactElement {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{ backgroundColor: "#f5f5f5", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
    >

      {/* ══ TOP APP BAR ══ */}
      <header style={{
        flexShrink: 0,
        background: "linear-gradient(135deg,#dc2626 0%,#ea580c 60%,#ca8a04 100%)",
        paddingBottom: "0",
      }}>
        {/* Status bar stub */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 12px 2px" }}>
          <span style={{ fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>9:41</span>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.85)" }}>●●●●</span>
            <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.85)" }}>WiFi</span>
            <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.85)" }}>🔋</span>
          </div>
        </div>

        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2px 12px 6px" }}>
          {/* Wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Flame size={18} strokeWidth={2.5} color="#fef08a" fill="#fef08a" />
            <span style={{ fontSize: "21px", fontWeight: 900, color: "#fff", letterSpacing: "-1px", textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>
              DealDrop
            </span>
            <span style={{
              fontSize: "6.5px",
              fontWeight: 900,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.25)",
              borderRadius: "100px",
              padding: "2px 5px",
              letterSpacing: "0.08em",
              marginTop: "2px",
            }}>FLASH</span>
          </div>

          {/* Cart icon w/ badge */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "32px", height: "32px",
              backgroundColor: "rgba(0,0,0,0.22)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <ShoppingCart size={16} strokeWidth={2.5} color="white" />
            </div>
            <span style={{
              position: "absolute",
              top: "-2px", right: "-3px",
              width: "14px", height: "14px",
              backgroundColor: "#fef08a",
              color: "#dc2626",
              fontSize: "7px",
              fontWeight: 900,
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1.5px solid #dc2626",
            }}>3</span>
          </div>
        </div>

        {/* Search pill */}
        <div style={{ padding: "0 12px 10px" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            backgroundColor: "rgba(255,255,255,0.95)",
            borderRadius: "100px",
            padding: "7px 12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}>
            <Search size={11} strokeWidth={2.5} color="#9ca3af" />
            <span style={{ flex: 1, fontSize: "10px", color: "#9ca3af" }}>Search flash deals&hellip;</span>
            <span style={{
              fontSize: "7px",
              fontWeight: 900,
              color: "#fff",
              backgroundColor: "#ea580c",
              borderRadius: "100px",
              padding: "2px 6px",
              letterSpacing: "0.06em",
            }}>HOT</span>
          </div>
        </div>
      </header>

      {/* ══ FLASH SALE COUNTDOWN BANNER ══ */}
      <div style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "7px 12px",
        background: "linear-gradient(90deg,#18181b 0%,#1c1917 100%)",
        borderBottom: "1px solid #27272a",
      }}>
        {/* Left label */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "16px", lineHeight: 1 }}>⚡</span>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Flash Sale
            </p>
            <p style={{ fontSize: "7.5px", fontWeight: 600, color: "#f97316", margin: 0 }}>
              Ends soon &#x2022; Limited stock
            </p>
          </div>
        </div>

        {/* Countdown blocks */}
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {["02", "14", "09"].map((seg, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <span style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "26px", height: "24px",
                backgroundColor: "#27272a",
                border: "1px solid #3f3f46",
                borderRadius: "5px",
                fontSize: "13px",
                fontWeight: 900,
                color: "#fde047",
                fontVariantNumeric: "tabular-nums",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}>
                {seg}
              </span>
              {i < 2 && <span style={{ fontSize: "13px", fontWeight: 900, color: "#f97316", lineHeight: 1 }}>:</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ══ PROMO TICKER ══ */}
      <div style={{ flexShrink: 0, backgroundColor: "#fef08a", overflow: "hidden", padding: "3px 0" }}>
        <span style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: "7.5px",
          fontWeight: 700,
          color: "#1c1917",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          animation: "ddTick 18s linear infinite",
        }}>
          🚀 Free shipping over $25&nbsp;&nbsp;·&nbsp;&nbsp;
          Code <strong>DROP10</strong> = extra 10% off&nbsp;&nbsp;·&nbsp;&nbsp;
          🔥 New deals every hour&nbsp;&nbsp;·&nbsp;&nbsp;
          ⭐ 4.9 stars · 2M+ orders&nbsp;&nbsp;·&nbsp;&nbsp;
          🚀 Free shipping over $25&nbsp;&nbsp;·&nbsp;&nbsp;
          Code <strong>DROP10</strong> = extra 10% off&nbsp;&nbsp;·&nbsp;&nbsp;
          🔥 New deals every hour&nbsp;&nbsp;
        </span>
      </div>

      {/* ══ CATEGORY CHIPS ══ */}
      <div style={{
        flexShrink: 0,
        display: "flex",
        gap: "6px",
        overflowX: "auto",
        padding: "8px 12px 0",
        scrollbarWidth: "none",
        backgroundColor: "#fff",
      }}>
        {CATEGORIES.map((cat, i) => (
          <span key={cat} style={{
            flexShrink: 0,
            fontSize: "9px",
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "4px 11px",
            borderRadius: "100px",
            backgroundColor: i === 0 ? "#dc2626" : "#f4f4f5",
            color: i === 0 ? "#fff" : "#52525b",
            border: i === 0 ? "none" : "1px solid #e4e4e7",
            boxShadow: i === 0 ? "0 2px 8px rgba(220,38,38,0.35)" : "none",
          }}>
            {cat}
          </span>
        ))}
      </div>

      {/* ══ SECTION HEADER ══ */}
      <div style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 12px 4px",
        backgroundColor: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Star size={10} strokeWidth={0} fill="#facc15" color="#facc15" />
          <span style={{ fontSize: "10px", fontWeight: 900, color: "#18181b", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Today&apos;s Deals
          </span>
          <span style={{
            fontSize: "7px", fontWeight: 900, color: "#fff",
            backgroundColor: "#dc2626",
            borderRadius: "100px", padding: "1.5px 5px",
          }}>6</span>
        </div>
        <span style={{ fontSize: "8px", fontWeight: 600, color: "#ea580c", cursor: "pointer" }}>
          See all &rsaquo;
        </span>
      </div>

      {/* ══ DEAL GRID ══ */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: "6px 10px 10px",
        backgroundColor: "#f5f5f5",
        scrollbarWidth: "none",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {DEALS.map(deal => (
            <DealCard key={deal.title} deal={deal} />
          ))}
        </div>

        {/* Members promo banner */}
        <div style={{
          marginTop: "10px",
          borderRadius: "12px",
          padding: "10px 14px",
          background: "linear-gradient(110deg,#dc2626 0%,#ea580c 100%)",
          boxShadow: "0 4px 16px rgba(220,38,38,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div>
            <p style={{ fontSize: "7px", fontWeight: 900, color: "#fde047", margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Members Only 👑
            </p>
            <p style={{ fontSize: "10.5px", fontWeight: 900, color: "#fff", margin: "2px 0 0", lineHeight: 1.2 }}>
              Extra 10% off every drop
            </p>
          </div>
          <button type="button" style={{
            fontSize: "7.5px",
            fontWeight: 900,
            color: "#dc2626",
            backgroundColor: "#fef08a",
            border: "none",
            borderRadius: "100px",
            padding: "6px 12px",
            cursor: "pointer",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
          }}>
            Join Free
          </button>
        </div>
      </div>

      {/* ══ BOTTOM NAV ══ */}
      <nav style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        borderTop: "1px solid #e4e4e7",
        padding: "6px 0 8px",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.07)",
      }}>
        {[
          { icon: <Home size={18} strokeWidth={2} />, label: "Home", active: true },
          { icon: <Grid2x2 size={18} strokeWidth={2} />, label: "Categories", active: false },
          { icon: <ShoppingCart size={18} strokeWidth={2} />, label: "Cart", active: false, badge: 3 },
          { icon: <User size={18} strokeWidth={2} />, label: "Me", active: false },
        ].map(({ icon, label, active, badge }) => (
          <button
            key={label}
            type="button"
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
              color: active ? "#dc2626" : "#a1a1aa",
              background: "none", border: "none", cursor: "pointer",
              minWidth: "48px", position: "relative",
            }}
          >
            {badge && (
              <span style={{
                position: "absolute", top: "-2px", right: "8px",
                width: "13px", height: "13px",
                backgroundColor: "#dc2626", color: "#fff",
                fontSize: "6.5px", fontWeight: 900,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1.5px solid #fff",
              }}>{badge}</span>
            )}
            {icon}
            <span style={{ fontSize: "7.5px", fontWeight: active ? 800 : 600 }}>{label}</span>
            {active && <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#dc2626", marginTop: "-1px" }}/>}
          </button>
        ))}
      </nav>

      {/* ══ KEYFRAME ══ */}
      <style>{`
        @keyframes ddTick {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
