import { PlusSquare, Menu, Grid3x3, Play, Tag, UserPlus } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   MODULE-SCOPE DATA & SUB-COMPONENTS
   Canvas: 320 × 680 CSS px, no internal scroll, no overflow
───────────────────────────────────────────────────────── */

/* ── Stat column ── */
function StatCol({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-0">
      <span className="text-[13px] font-bold leading-tight text-stone-900">{value}</span>
      <span className="text-[9.5px] leading-tight text-stone-500">{label}</span>
    </div>
  );
}

/* ── Highlight bubble ── */
interface Highlight {
  label: string;
  gradient: string;
  icon: HighlightIconName;
}

type HighlightIconName = "newIn" | "watch" | "belt" | "scarf" | "sale";

const HIGHLIGHTS: Highlight[] = [
  { label: "New In",  gradient: "from-amber-400 via-orange-400 to-rose-500",  icon: "newIn"  },
  { label: "Watches", gradient: "from-yellow-400 via-amber-400 to-orange-500", icon: "watch"  },
  { label: "Belts",   gradient: "from-orange-300 via-amber-400 to-yellow-400", icon: "belt"   },
  { label: "Scarves", gradient: "from-rose-300 via-pink-400 to-amber-300",     icon: "scarf"  },
  { label: "Sale",    gradient: "from-red-500 via-orange-400 to-yellow-400",   icon: "sale"   },
];

function HLIcon({ name }: { name: HighlightIconName }) {
  if (name === "newIn") return (
    <svg viewBox="0 0 24 18" width="20" height="15" aria-hidden="true">
      <rect x="1" y="3" width="9" height="7" rx="3.5" fill="none" stroke="white" strokeWidth="1.8"/>
      <rect x="14" y="3" width="9" height="7" rx="3.5" fill="none" stroke="white" strokeWidth="1.8"/>
      <line x1="10" y1="6.5" x2="14" y2="6.5" stroke="white" strokeWidth="1.7"/>
      <line x1="0"  y1="6.5" x2="1"  y2="6.5" stroke="white" strokeWidth="2"/>
      <line x1="23" y1="6.5" x2="24" y2="6.5" stroke="white" strokeWidth="2"/>
      <ellipse cx="5.5" cy="4.5" rx="2.5" ry="1.5" fill="rgba(255,255,255,0.35)"/>
    </svg>
  );
  if (name === "watch") return (
    <svg viewBox="0 0 14 22" width="11" height="17" aria-hidden="true">
      <rect x="5" y="0"  width="4" height="5" rx="1.5" fill="none" stroke="white" strokeWidth="1.6"/>
      <rect x="5" y="17" width="4" height="5" rx="1.5" fill="none" stroke="white" strokeWidth="1.6"/>
      <circle cx="7" cy="11" r="5.5" fill="none" stroke="white" strokeWidth="1.7"/>
      <line x1="7" y1="7.5" x2="7" y2="11" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="7" y1="11" x2="10" y2="13" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
  if (name === "belt") return (
    <svg viewBox="0 0 26 12" width="20" height="9" aria-hidden="true">
      <rect x="0" y="4" width="26" height="4" rx="2" fill="none" stroke="white" strokeWidth="1.6"/>
      <rect x="11" y="2" width="4" height="8" rx="1.5" fill="none" stroke="white" strokeWidth="1.6"/>
    </svg>
  );
  if (name === "scarf") return (
    <svg viewBox="0 0 26 20" width="20" height="15" aria-hidden="true">
      <path d="M2 5 Q8 1 14 7 Q20 13 24 9" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M2 12 Q8 8 14 14 Q20 20 24 16" fill="none" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
  /* sale — price tag */
  return (
    <svg viewBox="0 0 18 20" width="14" height="16" aria-hidden="true">
      <path d="M2 2 L11 2 L16 10 L11 18 L2 18 Z" fill="none" stroke="white" strokeWidth="1.7" strokeLinejoin="round"/>
      <circle cx="6" cy="6.5" r="1.8" fill="white"/>
    </svg>
  );
}

function HighlightBubble({ h }: { h: Highlight }) {
  return (
    <div className="flex shrink-0 flex-col items-center gap-[3px]">
      <div className={`h-[50px] w-[50px] rounded-full bg-gradient-to-br ${h.gradient} flex items-center justify-center`}>
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full border-2 border-white/80">
          <HLIcon name={h.icon} />
        </div>
      </div>
      <span className="text-[8.5px] font-medium text-stone-500 leading-none">{h.label}</span>
    </div>
  );
}

/* ── Tile types ── */
type ProductName =
  | "sunglasses"
  | "belt"
  | "watch"
  | "scarf"
  | "ring"
  | "satchel"
  | "necklace"
  | "fedora"
  | "roundshades";

interface Tile {
  bg: string;
  product: ProductName;
  price: string | null;
  shoptag: boolean;
  multi: boolean;
}

const TILES: Tile[] = [
  { bg: "#c9975a", product: "sunglasses",  price: null,   shoptag: true,  multi: false },
  { bg: "#7a4f2e", product: "belt",        price: "$45",  shoptag: true,  multi: false },
  { bg: "#b87733", product: "watch",       price: null,   shoptag: true,  multi: true  },
  { bg: "#4e7a72", product: "scarf",       price: null,   shoptag: true,  multi: false },
  { bg: "#8c5c2e", product: "ring",        price: "$120", shoptag: true,  multi: false },
  { bg: "#4a3d2e", product: "satchel",     price: null,   shoptag: true,  multi: false },
  { bg: "#c8a060", product: "necklace",    price: "$80",  shoptag: true,  multi: false },
  { bg: "#5e6e40", product: "fedora",      price: null,   shoptag: true,  multi: false },
  { bg: "#8a4e48", product: "roundshades", price: null,   shoptag: true,  multi: false },
];

/* ─────────────────────────────────────────────────────
   PRODUCT ILLUSTRATIONS — inline SVG, viewBox 0 0 100 100
───────────────────────────────────────────────────── */
function ProductIllustration({ p }: { p: ProductName }) {

  if (p === "sunglasses") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="50" cy="77" rx="28" ry="4.5" fill="rgba(0,0,0,0.16)"/>
      {/* left arm */}
      <line x1="4"  y1="48" x2="17" y2="48" stroke="#1e0e04" strokeWidth="5.5" strokeLinecap="round"/>
      {/* right arm */}
      <line x1="96" y1="48" x2="83" y2="48" stroke="#1e0e04" strokeWidth="5.5" strokeLinecap="round"/>
      {/* bridge */}
      <path d="M40 45 Q50 38 60 45" fill="none" stroke="#1e0e04" strokeWidth="5" strokeLinecap="round"/>
      {/* left frame */}
      <rect x="9"  y="30" rx="11" ry="11" width="32" height="30" fill="#1e0e04"/>
      <rect x="12" y="33" rx="9"  ry="9"  width="26" height="24" fill="#6b3208"/>
      <ellipse cx="20" cy="38" rx="7" ry="4.5" fill="rgba(255,200,130,0.42)"/>
      {/* right frame */}
      <rect x="59" y="30" rx="11" ry="11" width="32" height="30" fill="#1e0e04"/>
      <rect x="62" y="33" rx="9"  ry="9"  width="26" height="24" fill="#6b3208"/>
      <ellipse cx="70" cy="38" rx="7" ry="4.5" fill="rgba(255,200,130,0.42)"/>
    </svg>
  );

  if (p === "roundshades") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="50" cy="77" rx="26" ry="4" fill="rgba(0,0,0,0.16)"/>
      {/* arms */}
      <line x1="4"  y1="50" x2="19" y2="50" stroke="#1a2e1a" strokeWidth="5" strokeLinecap="round"/>
      <line x1="96" y1="50" x2="81" y2="50" stroke="#1a2e1a" strokeWidth="5" strokeLinecap="round"/>
      {/* bridge */}
      <line x1="41" y1="48" x2="59" y2="48" stroke="#1a2e1a" strokeWidth="4.5" strokeLinecap="round"/>
      {/* left lens */}
      <circle cx="30" cy="50" r="17" fill="#1a2e1a"/>
      <circle cx="30" cy="50" r="13" fill="#253e25"/>
      <ellipse cx="23" cy="43" rx="5" ry="3" fill="rgba(180,255,180,0.38)"/>
      {/* right lens */}
      <circle cx="70" cy="50" r="17" fill="#1a2e1a"/>
      <circle cx="70" cy="50" r="13" fill="#253e25"/>
      <ellipse cx="63" cy="43" rx="5" ry="3" fill="rgba(180,255,180,0.38)"/>
    </svg>
  );

  if (p === "belt") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* strap */}
      <rect x="4"  y="38" width="92" height="24" rx="6" fill="#f2e0b0"/>
      <rect x="4"  y="42" width="92" height="16" rx="4" fill="#e0cc90"/>
      {/* top stitch */}
      {[5,13,21,29,37,62,70,78,86].map((x, i) => (
        <line key={`t${i}`} x1={x} y1="43.5" x2={x+7} y2="43.5" stroke="#c8a050" strokeWidth="1.5" strokeLinecap="round"/>
      ))}
      {/* bottom stitch */}
      {[5,13,21,29,37,62,70,78,86].map((x, i) => (
        <line key={`b${i}`} x1={x} y1="56.5" x2={x+7} y2="56.5" stroke="#c8a050" strokeWidth="1.5" strokeLinecap="round"/>
      ))}
      {/* buckle body */}
      <rect x="38" y="30" width="24" height="40" rx="5" fill="#d4a020"/>
      <rect x="40" y="32" width="20" height="36" rx="4" fill="#e8c030"/>
      {/* buckle bar */}
      <rect x="49" y="30" width="4"  height="40" rx="2" fill="#a07810"/>
      {/* prong */}
      <path d="M51 33 L51 49 L46 54" fill="none" stroke="#6a5008" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* punch holes */}
      {[64,72,80,88].map((x, i) => (
        <circle key={i} cx={x} cy="50" r="3" fill="#c8a050"/>
      ))}
      <ellipse cx="50" cy="34" rx="5" ry="2" fill="rgba(255,235,130,0.45)"/>
    </svg>
  );

  if (p === "watch") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* strap top */}
      <rect x="37" y="4"  width="26" height="24" rx="7" fill="#2e1604"/>
      <rect x="39" y="6"  width="22" height="20" rx="6" fill="#4e2810"/>
      {/* strap bottom */}
      <rect x="37" y="72" width="26" height="24" rx="7" fill="#2e1604"/>
      <rect x="39" y="74" width="22" height="20" rx="6" fill="#4e2810"/>
      {/* strap holes */}
      {[78,84,90].map((y, i) => <circle key={i} cx="50" cy={y} r="2.5" fill="#7a5020"/>)}
      {/* strap stitch */}
      {[8,12,16,22].map((y,i) => (
        <line key={i} x1="42" y1={y} x2="58" y2={y} stroke="#7a5020" strokeWidth="1.2" strokeDasharray="3,3"/>
      ))}
      {/* case */}
      <circle cx="50" cy="50" r="27" fill="#b08828"/>
      <circle cx="50" cy="50" r="25" fill="#c8a040"/>
      <circle cx="50" cy="50" r="23" fill="#f8f2e0"/>
      {/* hour ticks */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        const r1 = i % 3 === 0 ? 12 : 16;
        return (
          <line key={deg}
            x1={50 + r1 * Math.sin(r)}  y1={50 - r1 * Math.cos(r)}
            x2={50 + 21 * Math.sin(r)}  y2={50 - 21 * Math.cos(r)}
            stroke="#5a3808" strokeWidth={i % 3 === 0 ? 3 : 1.5}
          />
        );
      })}
      {/* hands */}
      <line x1="50" y1="50" x2="50" y2="31" stroke="#2a1604" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="50" y1="50" x2="63" y2="57" stroke="#2a1604" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="3.2" fill="#2a1604"/>
      {/* crown */}
      <rect x="75" y="46" width="7" height="8" rx="3" fill="#c8a040" stroke="#9a7818" strokeWidth="1.5"/>
      {/* dial glare */}
      <ellipse cx="42" cy="40" rx="5" ry="3" fill="rgba(255,250,220,0.50)"/>
    </svg>
  );

  if (p === "scarf") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* fold 1 */}
      <path d="M6 20 Q28 8 56 22 Q74 32 94 20"
        fill="none" stroke="#f0deb8" strokeWidth="17" strokeLinecap="round"/>
      <path d="M6 20 Q28 8 56 22 Q74 32 94 20"
        fill="none" stroke="#c03030" strokeWidth="3.5" strokeLinecap="round" opacity="0.70"/>
      <path d="M8 18 Q30 6 58 20 Q76 30 96 18"
        fill="none" stroke="#c03030" strokeWidth="1.5" strokeDasharray="5,4" strokeLinecap="round" opacity="0.40"/>
      {/* fold 2 */}
      <path d="M10 42 Q32 30 60 44 Q78 53 92 42"
        fill="none" stroke="#e8d0a0" strokeWidth="14" strokeLinecap="round"/>
      <path d="M10 42 Q32 30 60 44 Q78 53 92 42"
        fill="none" stroke="#c03030" strokeWidth="2.5" strokeLinecap="round" opacity="0.55"/>
      {/* tail */}
      <path d="M57 44 Q64 64 57 83 Q54 91 49 87 Q45 81 49 68 Q54 55 52 44Z" fill="#f0deb8"/>
      <path d="M55 46 Q61 64 55 82" fill="none" stroke="#c03030" strokeWidth="2.2" strokeLinecap="round" opacity="0.60"/>
      {/* fringe */}
      {[47,50,53,56,59,62].map((x, i) => (
        <line key={i} x1={x} y1="86" x2={x-1} y2="95" stroke="#d0a868" strokeWidth="1.8" strokeLinecap="round"/>
      ))}
    </svg>
  );

  if (p === "ring") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* band bottom ellipse */}
      <ellipse cx="50" cy="74" rx="22" ry="8" fill="#9a7010"/>
      {/* band body */}
      <rect x="28" y="44" width="44" height="30" fill="#c8901e"/>
      <rect x="30" y="45" width="40" height="28" fill="#d8a030"/>
      {/* band top ellipse */}
      <ellipse cx="50" cy="44" rx="22" ry="8" fill="#e8b840"/>
      {/* highlight streak */}
      <rect x="44" y="42" width="12" height="32" rx="5" fill="rgba(255,225,100,0.28)"/>
      {/* bezel base */}
      <ellipse cx="50" cy="38" rx="19" ry="11" fill="#9a7010" stroke="#806000" strokeWidth="2"/>
      {/* bezel face */}
      <ellipse cx="50" cy="36" rx="17" ry="9.5" fill="#c8901e"/>
      {/* gem */}
      <ellipse cx="50" cy="35" rx="12" ry="7.5" fill="#1a3e7a"/>
      <ellipse cx="50" cy="35" rx="9.5" ry="6"   fill="#2050a0"/>
      {/* gem facets */}
      <line x1="50" y1="28" x2="50" y2="42" stroke="#0a2050" strokeWidth="1"/>
      <line x1="41" y1="35" x2="59" y2="35" stroke="#0a2050" strokeWidth="1"/>
      {/* gem glare */}
      <ellipse cx="44" cy="30" rx="3.5" ry="2" fill="rgba(180,215,255,0.60)"/>
    </svg>
  );

  if (p === "satchel") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* strap */}
      <path d="M28 18 Q50 5 72 18" fill="none" stroke="#1e0e04" strokeWidth="8" strokeLinecap="round"/>
      <path d="M28 18 Q50 5 72 18" fill="none" stroke="#3a1e0c" strokeWidth="5" strokeLinecap="round"/>
      {/* body */}
      <rect x="13" y="18" width="74" height="66" rx="9" fill="#1e0e04"/>
      <rect x="15" y="20" width="70" height="62" rx="8" fill="#3c1e0c"/>
      {/* flap */}
      <path d="M15 20 Q15 52 50 58 Q85 52 85 20Z" fill="#2e1408"/>
      {/* flap stitch */}
      <path d="M20 22 Q50 50 80 22" fill="none" stroke="#7a5228" strokeWidth="1.5" strokeDasharray="4,3" strokeLinecap="round"/>
      {/* flap gloss curve */}
      <path d="M24 25 Q50 46 76 25" fill="none" stroke="rgba(180,130,60,0.30)" strokeWidth="3" strokeLinecap="round"/>
      {/* clasp */}
      <rect x="37" y="50" width="26" height="15" rx="5" fill="#d4a018" stroke="#a07810" strokeWidth="2"/>
      <rect x="40" y="53" width="20" height="9"  rx="3" fill="#b88010"/>
      <rect x="47" y="50" width="6"  height="6"  rx="2" fill="#c89020"/>
      {/* pocket outline */}
      <rect x="19" y="62" width="62" height="14" rx="3" fill="none" stroke="#7a5228" strokeWidth="1.2" strokeDasharray="3,3"/>
      {/* side shadows */}
      <rect x="13" y="18" width="9"  height="66" rx="5" fill="rgba(0,0,0,0.20)"/>
      <rect x="78" y="18" width="9"  height="66" rx="5" fill="rgba(0,0,0,0.15)"/>
    </svg>
  );

  if (p === "necklace") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* chain arc */}
      <path d="M15 18 Q50 70 85 18" fill="none" stroke="#c8a038" strokeWidth="2.5" strokeLinecap="round"/>
      {/* beads */}
      {([
        [15,18],[21,29],[28,40],[35,50],[42,57],[50,62],[58,57],[65,50],[72,40],[79,29],[85,18]
      ] as [number,number][]).map(([cx,cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={i === 5 ? 7.5 : 5.5}
            fill={i % 4 === 0 ? "#c8a038" : i % 4 === 1 ? "#a02828" : i % 4 === 2 ? "#285878" : "#884818"}
            stroke="rgba(0,0,0,0.22)" strokeWidth="1.2"
          />
          <ellipse cx={cx-1.2} cy={cy-1.5} rx={i === 5 ? 2.8 : 2} ry={i === 5 ? 1.8 : 1.4} fill="rgba(255,255,255,0.42)"/>
        </g>
      ))}
      {/* pendant drop chain */}
      <line x1="50" y1="68" x2="50" y2="75" stroke="#c8a038" strokeWidth="2.5"/>
      {/* jump ring */}
      <ellipse cx="50" cy="72" rx="4" ry="2.5" fill="none" stroke="#c8a038" strokeWidth="2.5"/>
      {/* pendant */}
      <ellipse cx="50" cy="83" rx="12" ry="14" fill="#c8a038" stroke="#9a7820" strokeWidth="2"/>
      <ellipse cx="50" cy="83" rx="9" ry="10.5" fill="#a02828"/>
      <ellipse cx="46" cy="78" rx="3" ry="2.2" fill="rgba(255,200,200,0.52)"/>
    </svg>
  );

  /* fedora */
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* brim shadow */}
      <ellipse cx="50" cy="73" rx="44" ry="7.5" fill="rgba(0,0,0,0.20)"/>
      {/* brim */}
      <ellipse cx="50" cy="67" rx="44" ry="10" fill="#221204"/>
      <ellipse cx="50" cy="65" rx="42" ry="8.5" fill="#3a2010"/>
      {/* crown */}
      <path d="M22 65 Q20 32 50 22 Q80 32 78 65Z" fill="#221204"/>
      <path d="M24 65 Q22 34 50 24 Q78 34 76 65Z" fill="#3a2010"/>
      <path d="M26 65 Q24 36 50 26 Q76 36 74 65Z" fill="#503018"/>
      {/* dent */}
      <ellipse cx="50" cy="27" rx="14" ry="4.5" fill="#2e1808"/>
      <path d="M38 34 Q50 28 62 34 Q60 26 50 24 Q40 26 38 34Z" fill="rgba(0,0,0,0.32)"/>
      {/* hat band */}
      <path d="M22 63 Q50 71 78 63 Q78 55 50 61 Q22 55 22 63Z" fill="#c89020"/>
      <path d="M26 61 Q50 67 74 61" fill="none" stroke="rgba(255,215,80,0.45)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* crown highlight */}
      <path d="M38 44 Q50 38 62 44" fill="none" stroke="rgba(255,195,120,0.28)" strokeWidth="5" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Shopping tag dot ── */
function ShopDot() {
  return (
    <div className="absolute top-[6px] right-[6px] z-10">
      <div className="flex h-[13px] w-[13px] items-center justify-center rounded-full bg-white shadow">
        <div className="h-[7px] w-[7px] rounded-full bg-stone-800" />
      </div>
    </div>
  );
}

/* ── Multi-image indicator ── */
function MultiIcon() {
  return (
    <div className="absolute top-[5px] left-[5px] z-10">
      <svg viewBox="0 0 14 14" width="11" height="11" aria-hidden="true">
        <rect x="1" y="1" width="9" height="9" rx="2" fill="none" stroke="white" strokeWidth="1.6"/>
        <rect x="4" y="4" width="9" height="9" rx="2" fill="none" stroke="white" strokeWidth="1.6"/>
      </svg>
    </div>
  );
}

/* ── Grid tile ── */
function GridTile({ tile }: { tile: Tile }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: tile.bg, aspectRatio: "1 / 1" }}
    >
      {/* subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/28" />
      {/* illustration */}
      <div className="absolute inset-0 flex items-center justify-center p-[10%]">
        <ProductIllustration p={tile.product} />
      </div>
      {tile.shoptag && <ShopDot />}
      {tile.multi && <MultiIcon />}
      {tile.price && (
        <div className="absolute bottom-[5px] left-[5px] z-10 flex items-center gap-[3px] rounded-full bg-white/95 px-[5px] py-[2px] shadow">
          <Tag size={7} strokeWidth={2.2} className="text-stone-700" />
          <span className="text-[7.5px] font-bold leading-none text-stone-900">{tile.price}</span>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
   AVATAR  (inline SVG — person wearing a fedora)
───────────────────────────────────────────────────────── */
function AvatarSVG() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#e8c898"/>
      {/* torso */}
      <ellipse cx="32" cy="58" rx="18" ry="14" fill="#2e1408"/>
      <ellipse cx="32" cy="58" rx="15" ry="11" fill="#4e2818"/>
      <rect x="24" y="49" width="16" height="14" rx="2" fill="#f0e8d0"/>
      {/* head */}
      <circle cx="32" cy="31" r="13" fill="#d4a070"/>
      <ellipse cx="29" cy="28" rx="4.5" ry="3" fill="rgba(255,220,160,0.42)"/>
      {/* brim */}
      <ellipse cx="32" cy="21" rx="17" ry="4" fill="#1e0e04"/>
      <ellipse cx="32" cy="20" rx="15" ry="3" fill="#321808"/>
      {/* crown */}
      <path d="M18 21 Q17 10 32 7 Q47 10 46 21Z" fill="#2e1408"/>
      <path d="M20 21 Q19 11 32 8 Q45 11 44 21Z" fill="#3e2410"/>
      {/* hat band */}
      <rect x="18" y="19" width="28" height="3.5" rx="1.2" fill="#c89020"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   MAIN EXPORT
   Root: relative flex h-full w-full flex-col overflow-hidden
   (fills the 320×680 canvas — no fixed px on root)
───────────────────────────────────────────────────────── */
export default function VintageInstagram() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ══ Top App Bar ══════════════════════════════════════ */}
      <header className="flex shrink-0 items-center justify-between border-b border-stone-100 bg-white px-3" style={{ paddingTop: 8, paddingBottom: 8 }}>
        {/* left spacer */}
        <div style={{ width: 28 }} />
        {/* handle + verified */}
        <div className="flex items-center gap-1">
          <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "-0.3px", color: "#1c1c1c" }}>
            @vintage.atelier
          </span>
          {/* verified badge */}
          <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
            <circle cx="8" cy="8" r="7" fill="#3b82f6"/>
            <polyline points="5,8.3 7.2,10.5 11,6" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        {/* right icons */}
        <div className="flex items-center gap-[10px]" style={{ color: "#1c1c1c" }}>
          <PlusSquare size={17} strokeWidth={1.7} />
          <Menu size={17} strokeWidth={1.7} />
        </div>
      </header>

      {/* ══ Profile Section ══════════════════════════════════ */}
      <section className="shrink-0 px-3" style={{ paddingTop: 10, paddingBottom: 6 }}>

        {/* avatar + stats */}
        <div className="flex items-center gap-3">
          {/* avatar with gradient story ring */}
          <div className="shrink-0">
            <div
              className="rounded-full"
              style={{
                padding: 2.5,
                background: "linear-gradient(135deg, #f59e0b, #f97316, #ef4444)",
              }}
            >
              <div className="rounded-full bg-white" style={{ padding: 2 }}>
                <div className="rounded-full overflow-hidden" style={{ background: "linear-gradient(145deg,#fde68a,#fdba74,#d97706)" }}>
                  <AvatarSVG />
                </div>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="flex flex-1 items-center justify-around">
            <StatCol value="142"   label="posts"     />
            <StatCol value="28.5k" label="followers" />
            <StatCol value="310"   label="following" />
          </div>
        </div>

        {/* bio */}
        <div className="mt-2" style={{ gap: 1, display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#1c1c1c" }}>Vintage Atelier</span>
          <span style={{ fontSize: 10.5, color: "#555", lineHeight: 1.35 }}>Curated 70s&#8211;90s accessories &#10022;</span>
          <span style={{ fontSize: 10.5, color: "#555", lineHeight: 1.35 }}>Ships worldwide &middot; DM to buy</span>
          <span style={{ fontSize: 10.5, fontWeight: 600, color: "#b45309" }}>vintage.atelier/shop</span>
        </div>

        {/* action buttons */}
        <div className="flex items-center gap-2 mt-[9px]">
          <button
            className="flex-1 rounded-lg text-white font-semibold"
            style={{ background: "#1c1c1c", fontSize: 11, paddingTop: 6, paddingBottom: 6 }}
          >
            Follow
          </button>
          <button
            className="flex-1 rounded-lg font-semibold"
            style={{ background: "#f0ece6", color: "#1c1c1c", fontSize: 11, paddingTop: 6, paddingBottom: 6 }}
          >
            Message
          </button>
          <button
            className="flex items-center justify-center rounded-lg"
            style={{ background: "#f0ece6", color: "#1c1c1c", width: 32, height: 27 }}
          >
            <UserPlus size={13} strokeWidth={2} />
          </button>
        </div>
      </section>

      {/* ══ Story Highlights ═════════════════════════════════ */}
      <div
        className="shrink-0 flex gap-[14px] px-3 pb-2 pt-1"
        style={{ overflowX: "auto", scrollbarWidth: "none" }}
      >
        {HIGHLIGHTS.map((h) => (
          <HighlightBubble key={h.label} h={h} />
        ))}
      </div>

      {/* ══ Tab Row ══════════════════════════════════════════ */}
      <div className="shrink-0 flex border-t border-stone-100">
        {/* Grid tab — active */}
        <button
          className="flex flex-1 items-center justify-center py-[7px] border-b-[1.5px] border-stone-900"
        >
          <Grid3x3 size={17} strokeWidth={1.8} style={{ color: "#1c1c1c" }} />
        </button>
        {/* Reels tab */}
        <button className="flex flex-1 items-center justify-center py-[7px] border-b-[1.5px] border-transparent">
          <Play size={17} strokeWidth={1.8} style={{ color: "#aaa" }} />
        </button>
        {/* Tagged tab */}
        <button className="flex flex-1 items-center justify-center py-[7px] border-b-[1.5px] border-transparent">
          <Tag size={17} strokeWidth={1.8} style={{ color: "#aaa" }} />
        </button>
      </div>

      {/* ══ 3-Column Product Grid ════════════════════════════ */}
      {/* flex-1 to fill remaining space; grid with gap-[1.5px] */}
      <div className="flex-1 overflow-hidden bg-stone-200">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5px",
            backgroundColor: "#d6d3d1",
          }}
        >
          {TILES.map((tile, i) => (
            <GridTile key={i} tile={tile} />
          ))}
        </div>
      </div>

      {/* ══ Bottom Nav Bar ═══════════════════════════════════ */}
      <nav
        className="shrink-0 flex items-center justify-around border-t border-stone-100 bg-white"
        style={{ paddingTop: 7, paddingBottom: 7 }}
      >
        {/* Home */}
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5 L12 3 L21 9.5 V20 a1 1 0 0 1-1 1H15v-5h-6v5H4a1 1 0 0 1-1-1Z"/>
        </svg>
        {/* Search */}
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>
        </svg>
        {/* Add */}
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round">
          <rect x="3" y="3" width="18" height="18" rx="4"/>
          <line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        {/* Reels */}
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="#aaa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <polygon points="10,9 16,12 10,15" fill="#aaa" stroke="none"/>
          <circle cx="12" cy="12" r="3" fill="none" stroke="#aaa" strokeWidth="1.5"/>
        </svg>
        {/* Profile dot — active */}
        <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg,#d97706,#ea580c)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#d4a070", border: "2px solid white" }} />
        </div>
      </nav>
    </div>
  );
}
