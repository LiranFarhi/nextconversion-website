import type { ReactElement } from "react";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────
   VintageInstagram — 320 × 680 phone canvas
   Pure stateless, no hooks, no props, no "use client"
   All sub-components at MODULE scope
───────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════
   STAT COLUMN
═══════════════════════════════════════════════════════ */
function StatCol({ value, label }: { value: string; label: string }): ReactElement {
  return (
    <div className="flex flex-col items-center" style={{ gap: 1 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: "#111", letterSpacing: "-0.3px", lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: 10, color: "#737373", lineHeight: 1 }}>{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   STORY HIGHLIGHTS
═══════════════════════════════════════════════════════ */
interface Highlight { label: string; bg1: string; bg2: string; bg3: string; iconEl: ReactElement }

const HIGHLIGHTS: Highlight[] = [
  {
    label: "New In", bg1: "#f59e0b", bg2: "#f97316", bg3: "#ef4444",
    iconEl: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    ),
  },
  {
    label: "Watches", bg1: "#d97706", bg2: "#b45309", bg3: "#78350f",
    iconEl: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="6"/>
        <path d="M9 3h6M9 21h6"/>
        <path d="M12 8v4l2.5 2.5"/>
      </svg>
    ),
  },
  {
    label: "Belts", bg1: "#c2410c", bg2: "#9a3412", bg3: "#7c2d12",
    iconEl: (
      <svg viewBox="0 0 28 12" width="26" height="11" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <rect x="0.9" y="3.5" width="26" height="5" rx="2.5"/>
        <rect x="12" y="1.5" width="4" height="9" rx="1.8"/>
      </svg>
    ),
  },
  {
    label: "Scarves", bg1: "#db2777", bg2: "#be185d", bg3: "#9d174d",
    iconEl: (
      <svg viewBox="0 0 26 22" width="24" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M2 5 Q8 1 14 8 Q20 15 24 10"/>
        <path d="M4 13 Q10 9 16 16 Q22 23 26 18"/>
      </svg>
    ),
  },
  {
    label: "Sale", bg1: "#dc2626", bg2: "#b91c1c", bg3: "#991b1b",
    iconEl: (
      <svg viewBox="0 0 20 22" width="18" height="20" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 2h10l6 9-6 9H2z"/>
        <circle cx="7" cy="7" r="1.8" fill="white" stroke="none"/>
        <line x1="6" y1="14" x2="12" y2="8"/>
      </svg>
    ),
  },
];

function HighlightBubble({ h }: { h: Highlight }): ReactElement {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
      {/* gradient ring */}
      <div style={{
        width: 58, height: 58, borderRadius: "50%",
        background: `linear-gradient(135deg, ${h.bg1}, ${h.bg2}, ${h.bg3})`,
        padding: 2.5, boxSizing: "border-box",
      }}>
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          background: "white", padding: 2, boxSizing: "border-box",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: `linear-gradient(145deg, ${h.bg1}cc, ${h.bg3}cc)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {h.iconEl}
          </div>
        </div>
      </div>
      <span style={{ fontSize: 9, color: "#262626", fontWeight: 400, lineHeight: 1 }}>{h.label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TILE DATA — real photos via next/image
═══════════════════════════════════════════════════════ */
interface TileData {
  src: string;
  alt: string;
  price: string | null;
  shoptag: boolean;
  multi: boolean;
}

const TILES: TileData[] = [
  { src: "/products/vintage/p1.jpg", alt: "Vintage cat-eye sunglasses on mannequin",    price: null,   shoptag: true, multi: false },
  { src: "/products/vintage/p2.jpg", alt: "Cognac leather belt with punch holes",        price: "$45",  shoptag: true, multi: false },
  { src: "/products/vintage/p3.jpg", alt: "Scuffed vintage wristwatch close-up",         price: null,   shoptag: true, multi: true  },
  { src: "/products/vintage/p4.jpg", alt: "Model wearing a draped silk scarf outdoors",  price: null,   shoptag: true, multi: false },
  { src: "/products/vintage/p5.jpg", alt: "Two gold vintage rings on wooden surface",    price: "$120", shoptag: true, multi: false },
  { src: "/products/vintage/p6.jpg", alt: "Red leather vintage handbag",                 price: null,   shoptag: true, multi: false },
  { src: "/products/vintage/p7.jpg", alt: "Hand-painted leather bead necklace",          price: "$80",  shoptag: true, multi: false },
  { src: "/products/vintage/p8.jpg", alt: "Grey felt fedora hat with grosgrain band",    price: null,   shoptag: true, multi: false },
  { src: "/products/vintage/p9.jpg", alt: "Vintage sunglasses side profile on mannequin", price: null,  shoptag: true, multi: false },
];

/* ── Shopping-tag dot ── */
function ShopDot(): ReactElement {
  return (
    <div style={{ position: "absolute", top: 5, right: 5, zIndex: 10 }}>
      <div style={{
        width: 14, height: 14, borderRadius: "50%",
        background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.30)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#1c1c1c" }}/>
      </div>
    </div>
  );
}

/* ── Multi-image indicator ── */
function MultiIcon(): ReactElement {
  return (
    <div style={{ position: "absolute", top: 5, left: 5, zIndex: 10 }}>
      <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
        <rect x="1" y="1" width="8.5" height="8.5" rx="2" fill="none" stroke="white" strokeWidth="1.8"/>
        <rect x="4.5" y="4.5" width="8.5" height="8.5" rx="2" fill="none" stroke="white" strokeWidth="1.8"/>
      </svg>
    </div>
  );
}

/* ── Price pill ── */
function PricePill({ price }: { price: string }): ReactElement {
  return (
    <div style={{
      position: "absolute", bottom: 5, left: 5, zIndex: 10,
      display: "flex", alignItems: "center", gap: 3,
      borderRadius: 20, background: "rgba(255,255,255,0.95)",
      paddingLeft: 5, paddingRight: 6, paddingTop: 2.5, paddingBottom: 2.5,
      boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
    }}>
      {/* tag icon */}
      <svg viewBox="0 0 10 10" width="8" height="8" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 1h4l4 4.5L5 10 1 5.5z"/>
        <circle cx="3" cy="3.5" r="0.9" fill="#444" stroke="none"/>
      </svg>
      <span style={{ fontSize: 7.5, fontWeight: 700, color: "#111", lineHeight: 1 }}>{price}</span>
    </div>
  );
}

/* ── Grid Tile ── */
function GridTile({ tile }: { tile: TileData }): ReactElement {
  return (
    <div style={{ position: "relative", aspectRatio: "1 / 1", overflow: "hidden" }}>
      {/* real product photo */}
      <Image
        fill
        src={tile.src}
        alt={tile.alt}
        sizes="(max-width: 320px) 107px, 107px"
        className="object-cover"
      />
      {/* vignette overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "linear-gradient(180deg, rgba(0,0,0,0.04) 0%, transparent 35%, rgba(0,0,0,0.18) 100%)",
        zIndex: 5,
      }}/>
      {tile.shoptag && <ShopDot/>}
      {tile.multi && <MultiIcon/>}
      {tile.price && <PricePill price={tile.price}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TOP APP BAR ICONS
═══════════════════════════════════════════════════════ */
function IconPlusSquare(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1c1c1c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  );
}
function IconMenu(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1c1c1c" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="7" x2="21" y2="7"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="17" x2="21" y2="17"/>
    </svg>
  );
}

/* ── Verified badge ── */
function VerifiedBadge(): ReactElement {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" fill="#3b82f6"/>
      <polyline points="5,8.3 7.2,10.6 11.2,6" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── UserPlus icon ── */
function IconUserPlus(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" y1="8" x2="19" y2="14"/>
      <line x1="16" y1="11" x2="22" y2="11"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   TAB ROW ICONS
═══════════════════════════════════════════════════════ */
function IconGrid(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}
function IconReels(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4"/>
      <path d="M7 2v20M17 2v20M2 12h20M2 7h5M17 7h5M2 17h5M17 17h5"/>
    </svg>
  );
}
function IconTag(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   BOTTOM NAV BAR ICONS
═══════════════════════════════════════════════════════ */
function IconHome(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-5h-6v5H4a1 1 0 0 1-1-1Z"/>
    </svg>
  );
}
function IconSearch(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7"/>
      <line x1="16.5" y1="16.5" x2="21" y2="21"/>
    </svg>
  );
}
function IconReel(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <polygon points="10,9 17,12 10,15" fill="#a0a0a0" stroke="none"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════ */
export default function VintageInstagram(): ReactElement {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden bg-white"
      style={{ fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif" }}
    >

      {/* ══ STATUS BAR (fake) ══════════════════════════════════ */}
      <div style={{
        background: "white", display: "flex", justifyContent: "space-between",
        alignItems: "center", paddingLeft: 14, paddingRight: 14,
        paddingTop: 8, paddingBottom: 4, flexShrink: 0,
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>9:41</span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {/* signal */}
          <svg viewBox="0 0 18 12" width="16" height="10" aria-hidden="true">
            <rect x="0"  y="8" width="3" height="4" rx="0.8" fill="#111"/>
            <rect x="5"  y="5" width="3" height="7" rx="0.8" fill="#111"/>
            <rect x="10" y="2" width="3" height="10" rx="0.8" fill="#111"/>
            <rect x="15" y="0" width="3" height="12" rx="0.8" fill="#111"/>
          </svg>
          {/* wifi */}
          <svg viewBox="0 0 18 12" width="16" height="10" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M1 4.5 Q9 -1 17 4.5"/>
            <path d="M3.5 7 Q9 3.5 14.5 7"/>
            <path d="M6.5 9.5 Q9 8 11.5 9.5"/>
            <circle cx="9" cy="11.5" r="0.8" fill="#111" stroke="none"/>
          </svg>
          {/* battery */}
          <svg viewBox="0 0 22 12" width="20" height="10" aria-hidden="true">
            <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" fill="none" stroke="#111" strokeWidth="1.2"/>
            <rect x="2" y="2" width="14" height="8" rx="1.5" fill="#111"/>
            <path d="M19.5 4 Q21.5 4 21.5 6 Q21.5 8 19.5 8" stroke="#111" strokeWidth="1.2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* ══ TOP APP BAR ════════════════════════════════════════ */}
      <header style={{
        background: "white", display: "flex", alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 12, paddingRight: 12,
        paddingTop: 4, paddingBottom: 8,
        borderBottom: "1px solid #efefef", flexShrink: 0,
      }}>
        {/* left — blank spacer matching right icons width */}
        <div style={{ width: 52 }}/>
        {/* centre — handle + verified */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.4px", color: "#111" }}>
            vintage.atelier
          </span>
          <VerifiedBadge/>
          {/* dropdown caret */}
          <svg viewBox="0 0 10 6" width="9" height="6" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="1,1 5,5 9,1"/>
          </svg>
        </div>
        {/* right icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <IconPlusSquare/>
          <IconMenu/>
        </div>
      </header>

      {/* ══ PROFILE HEADER ═════════════════════════════════════ */}
      <section style={{
        flexShrink: 0,
        paddingLeft: 14, paddingRight: 14,
        paddingTop: 12, paddingBottom: 4,
      }}>
        {/* row: avatar + stats */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>

          {/* avatar with IG story gradient ring */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              padding: 2.5, borderRadius: "50%",
              background: "linear-gradient(135deg,#f59e0b,#f97316,#ef4444,#a855f7)",
              boxSizing: "border-box",
            }}>
              <div style={{
                padding: 2.5, borderRadius: "50%",
                background: "white", boxSizing: "border-box",
              }}>
                <div style={{ borderRadius: "50%", overflow: "hidden", width: 72, height: 72, position: "relative" }}>
                  <Image
                    fill
                    src="/products/vintage/avatar.jpg"
                    alt="vintage.atelier shop profile"
                    sizes="72px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* stats */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <StatCol value="142"   label="posts"     />
            <StatCol value="28.5k" label="followers" />
            <StatCol value="310"   label="following" />
          </div>
        </div>

        {/* bio block */}
        <div style={{ marginTop: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.3 }}>Vintage Atelier</div>
          <div style={{ fontSize: 11, color: "#262626", lineHeight: 1.4, marginTop: 2 }}>
            Curated 70s&#8211;90s accessories &#x2728;
          </div>
          <div style={{ fontSize: 11, color: "#262626", lineHeight: 1.4 }}>
            Ships worldwide &middot; DM to buy
          </div>
          <div style={{ fontSize: 11, color: "#00376b", fontWeight: 600, lineHeight: 1.4 }}>
            vintage.atelier/shop
          </div>
        </div>

        {/* action buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
          <button style={{
            flex: 1, borderRadius: 8, border: "none",
            background: "#1c1c1c", color: "white",
            fontSize: 12.5, fontWeight: 600, paddingTop: 7, paddingBottom: 7,
            cursor: "pointer",
          }}>
            Follow
          </button>
          <button style={{
            flex: 1, borderRadius: 8, border: "1.5px solid #dbdbdb",
            background: "white", color: "#1c1c1c",
            fontSize: 12.5, fontWeight: 600, paddingTop: 7, paddingBottom: 7,
            cursor: "pointer",
          }}>
            Message
          </button>
          <button style={{
            width: 36, height: 34, borderRadius: 8,
            border: "1.5px solid #dbdbdb", background: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}>
            <IconUserPlus/>
          </button>
        </div>
      </section>

      {/* ══ STORY HIGHLIGHTS ═══════════════════════════════════ */}
      <div style={{
        flexShrink: 0,
        display: "flex", gap: 16,
        overflowX: "auto", scrollbarWidth: "none",
        paddingLeft: 14, paddingRight: 14,
        paddingTop: 12, paddingBottom: 10,
      }}>
        {HIGHLIGHTS.map((h) => (
          <HighlightBubble key={h.label} h={h}/>
        ))}
      </div>

      {/* ══ TAB ROW ════════════════════════════════════════════ */}
      <div style={{
        flexShrink: 0,
        display: "flex",
        borderTop: "1px solid #efefef",
        borderBottom: "none",
      }}>
        {/* Grid — active */}
        <button style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: 9, paddingBottom: 9,
          borderBottom: "1.5px solid #1c1c1c",
          background: "none", border: "none",
          borderBottomWidth: 1.5, borderBottomStyle: "solid", borderBottomColor: "#1c1c1c",
          cursor: "pointer", color: "#1c1c1c",
        }}>
          <IconGrid/>
        </button>
        {/* Reels */}
        <button style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: 9, paddingBottom: 9,
          background: "none", border: "none",
          borderBottomWidth: 1.5, borderBottomStyle: "solid", borderBottomColor: "transparent",
          cursor: "pointer", color: "#a0a0a0",
        }}>
          <IconReels/>
        </button>
        {/* Tagged */}
        <button style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: 9, paddingBottom: 9,
          background: "none", border: "none",
          borderBottomWidth: 1.5, borderBottomStyle: "solid", borderBottomColor: "transparent",
          cursor: "pointer", color: "#a0a0a0",
        }}>
          <IconTag/>
        </button>
      </div>

      {/* ══ 3-COLUMN PRODUCT GRID ══════════════════════════════ */}
      <div style={{ flex: 1, overflow: "hidden", background: "#e0d8cc" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5px",
          background: "#c8c0b0",
        }}>
          {TILES.map((tile, i) => (
            <GridTile key={i} tile={tile}/>
          ))}
        </div>
      </div>

      {/* ══ BOTTOM NAV BAR ═════════════════════════════════════ */}
      <nav style={{
        flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "space-around",
        background: "white",
        borderTop: "1px solid #efefef",
        paddingTop: 8, paddingBottom: 10,
      }}>
        <IconHome/>
        <IconSearch/>
        {/* create post */}
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        <IconReel/>
        {/* profile tab — small avatar thumbnail */}
        <div style={{
          width: 26, height: 26, borderRadius: "50%",
          padding: 2,
          background: "linear-gradient(135deg,#f59e0b,#ef4444)",
          boxSizing: "border-box",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: "linear-gradient(135deg,#d4934e,#b07030)",
            border: "1.5px solid white",
            boxSizing: "border-box",
          }}/>
        </div>
      </nav>

    </div>
  );
}
