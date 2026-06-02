import { Check, PlusSquare, Menu, Grid3x3, Tag, UserPlus, Bookmark } from "lucide-react";

/* ── Highlight bubbles ── */
const highlights = [
  { label: "New In",  bg: "from-amber-300 via-orange-400 to-rose-400",   icon: "sunglasses" },
  { label: "Watches", bg: "from-yellow-300 via-amber-400 to-orange-500", icon: "watch"      },
  { label: "Belts",   bg: "from-orange-300 via-amber-300 to-yellow-400", icon: "belt"       },
  { label: "Scarves", bg: "from-rose-300 via-pink-300 to-amber-300",     icon: "scarf"      },
  { label: "Sale",    bg: "from-red-400 via-orange-400 to-yellow-400",   icon: "tag"        },
] as const;

/* ── Grid tiles ── */
const tiles = [
  { bg: "#d4a96a", product: "sunglasses",  price: null   },
  { bg: "#7a4f2e", product: "belt",        price: "$45"  },
  { bg: "#c47a3a", product: "watch",       price: null   },
  { bg: "#4e7a72", product: "scarf",       price: null   },
  { bg: "#8c5c2e", product: "ring",        price: "$120" },
  { bg: "#5c4a38", product: "satchel",     price: null   },
  { bg: "#c8a060", product: "necklace",    price: "$80"  },
  { bg: "#5e6e40", product: "hat",         price: null   },
  { bg: "#8a4e48", product: "sunglasses2", price: null   },
] as const;

type Product = (typeof tiles)[number]["product"];

/* ─────────────────────────────────────────────────
   Full-tile SVG product illustrations
   viewBox "0 0 100 100" — width/height "100%"
   Uses opaque fills for maximum visibility on dark tiles
───────────────────────────────────────────────── */
function ProductSVG({ product }: { product: Product }) {

  if (product === "sunglasses") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* shadow */}
      <ellipse cx="50" cy="75" rx="30" ry="5" fill="rgba(0,0,0,0.18)"/>
      {/* left arm */}
      <line x1="2" y1="46" x2="16" y2="46" stroke="#2a1a08" strokeWidth="5" strokeLinecap="round"/>
      {/* right arm */}
      <line x1="98" y1="46" x2="84" y2="46" stroke="#2a1a08" strokeWidth="5" strokeLinecap="round"/>
      {/* bridge */}
      <path d="M41 43 Q50 37 59 43" fill="none" stroke="#2a1a08" strokeWidth="4.5" strokeLinecap="round"/>
      {/* left lens outer */}
      <rect x="10" y="30" rx="12" ry="12" width="31" height="28" fill="#2a1a08"/>
      {/* left lens inner — warm amber tint */}
      <rect x="13" y="33" rx="9" ry="9" width="25" height="22" fill="#7a4510"/>
      {/* left lens glare */}
      <ellipse cx="21" cy="38" rx="6" ry="4" fill="rgba(255,220,160,0.45)"/>
      {/* right lens outer */}
      <rect x="59" y="30" rx="12" ry="12" width="31" height="28" fill="#2a1a08"/>
      {/* right lens inner */}
      <rect x="62" y="33" rx="9" ry="9" width="25" height="22" fill="#7a4510"/>
      {/* right lens glare */}
      <ellipse cx="70" cy="38" rx="6" ry="4" fill="rgba(255,220,160,0.45)"/>
    </svg>
  );

  if (product === "sunglasses2") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* shadow */}
      <ellipse cx="50" cy="76" rx="28" ry="4.5" fill="rgba(0,0,0,0.18)"/>
      {/* left arm */}
      <line x1="2" y1="48" x2="18" y2="48" stroke="#1e2e1e" strokeWidth="5" strokeLinecap="round"/>
      {/* right arm */}
      <line x1="98" y1="48" x2="82" y2="48" stroke="#1e2e1e" strokeWidth="5" strokeLinecap="round"/>
      {/* bridge */}
      <line x1="41" y1="46" x2="59" y2="46" stroke="#1e2e1e" strokeWidth="4" strokeLinecap="round"/>
      {/* left round lens outer */}
      <circle cx="29" cy="48" r="17" fill="#1e2e1e"/>
      {/* left lens inner — green tint */}
      <circle cx="29" cy="48" r="13" fill="#2e4a2e"/>
      {/* left glare */}
      <ellipse cx="22" cy="41" rx="5" ry="3.5" fill="rgba(200,255,200,0.40)"/>
      {/* right round lens outer */}
      <circle cx="71" cy="48" r="17" fill="#1e2e1e"/>
      {/* right lens inner */}
      <circle cx="71" cy="48" r="13" fill="#2e4a2e"/>
      {/* right glare */}
      <ellipse cx="64" cy="41" rx="5" ry="3.5" fill="rgba(200,255,200,0.40)"/>
    </svg>
  );

  if (product === "belt") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* main strap */}
      <rect x="4" y="38" width="92" height="24" rx="6" fill="#f5e6c8"/>
      {/* strap inner shading */}
      <rect x="4" y="42" width="92" height="16" rx="4" fill="#e8d5a8"/>
      {/* top stitch line */}
      {[6,14,22,30,38,60,68,76,84,92].map((x, i) => (
        <line key={i} x1={x} y1="44" x2={Math.min(x+6,96)} y2="44" stroke="#c8a060" strokeWidth="1.5" strokeLinecap="round"/>
      ))}
      {/* bottom stitch line */}
      {[6,14,22,30,38,60,68,76,84,92].map((x, i) => (
        <line key={`b${i}`} x1={x} y1="56" x2={Math.min(x+6,96)} y2="56" stroke="#c8a060" strokeWidth="1.5" strokeLinecap="round"/>
      ))}
      {/* buckle body */}
      <rect x="38" y="32" width="24" height="36" rx="5" fill="#d4a020"/>
      <rect x="40" y="34" width="20" height="32" rx="4" fill="#e8b830"/>
      {/* buckle bar */}
      <rect x="49" y="32" width="4" height="36" rx="2" fill="#b08010"/>
      {/* prong */}
      <path d="M51 34 L51 48 L47 52" fill="none" stroke="#7a5808" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      {/* punch holes */}
      {[66,74,82,90].map((x, i) => (
        <circle key={i} cx={x} cy="50" r="2.8" fill="#c8a060"/>
      ))}
    </svg>
  );

  if (product === "watch") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* strap top */}
      <rect x="38" y="4" width="24" height="24" rx="6" fill="#3a1e08"/>
      <rect x="40" y="6" width="20" height="20" rx="5" fill="#5a2e10"/>
      {/* strap bottom */}
      <rect x="38" y="72" width="24" height="24" rx="6" fill="#3a1e08"/>
      <rect x="40" y="74" width="20" height="20" rx="5" fill="#5a2e10"/>
      {/* strap holes */}
      <circle cx="50" cy="78" r="2.5" fill="#8a5e30"/>
      <circle cx="50" cy="86" r="2.5" fill="#8a5e30"/>
      <circle cx="50" cy="92" r="2.5" fill="#8a5e30"/>
      {/* case outer */}
      <circle cx="50" cy="50" r="26" fill="#c8a040"/>
      <circle cx="50" cy="50" r="24" fill="#d4b050"/>
      {/* case inner bezel */}
      <circle cx="50" cy="50" r="22" fill="#f5f0e0"/>
      {/* hour marks */}
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const r1 = i % 3 === 0 ? 13 : 15;
        const r2 = 20;
        return (
          <line
            key={deg}
            x1={50 + r1 * Math.sin(rad)} y1={50 - r1 * Math.cos(rad)}
            x2={50 + r2 * Math.sin(rad)} y2={50 - r2 * Math.cos(rad)}
            stroke="#5a3810" strokeWidth={i % 3 === 0 ? 2.8 : 1.5}
          />
        );
      })}
      {/* minute hand */}
      <line x1="50" y1="50" x2="50" y2="32" stroke="#3a2008" strokeWidth="3" strokeLinecap="round"/>
      {/* hour hand */}
      <line x1="50" y1="50" x2="62" y2="57" stroke="#3a2008" strokeWidth="2.5" strokeLinecap="round"/>
      {/* center dot */}
      <circle cx="50" cy="50" r="3" fill="#3a2008"/>
      {/* crown */}
      <rect x="74" y="46" width="7" height="8" rx="3" fill="#c8a040" stroke="#a07828" strokeWidth="1.5"/>
    </svg>
  );

  if (product === "scarf") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* main draped fold 1 — cream with pattern */}
      <path d="M8 22 Q30 10 55 24 Q72 34 88 22" fill="none" stroke="#f0e0c0" strokeWidth="16" strokeLinecap="round"/>
      {/* pattern stripes on fold 1 */}
      <path d="M8 22 Q30 10 55 24 Q72 34 88 22" fill="none" stroke="#c84040" strokeWidth="3" strokeLinecap="round" opacity="0.7"/>
      <path d="M10 20 Q32 8 57 22 Q74 32 90 20" fill="none" stroke="#c84040" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" strokeDasharray="6,4"/>

      {/* fold 2 */}
      <path d="M12 42 Q34 30 60 44 Q76 53 90 42" fill="none" stroke="#e8d4a8" strokeWidth="15" strokeLinecap="round"/>
      <path d="M12 42 Q34 30 60 44 Q76 53 90 42" fill="none" stroke="#c84040" strokeWidth="2.5" strokeLinecap="round" opacity="0.55"/>

      {/* hanging tail */}
      <path d="M58 44 Q63 62 56 80 Q53 88 49 84 Q46 78 50 66 Q54 54 52 44Z" fill="#f0e0c0"/>
      <path d="M60 44 Q65 62 58 80 Q55 88 51 84 Q48 78 52 66 Q56 54 54 44Z" fill="#e0ccA0"/>
      {/* stripe on tail */}
      <path d="M54 46 Q58 60 54 76" fill="none" stroke="#c84040" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      {/* fringe */}
      {[47,50,53,56,59].map((x, i) => (
        <line key={i} x1={x} y1="83" x2={x-1} y2="93" stroke="#d4b880" strokeWidth="2" strokeLinecap="round"/>
      ))}
    </svg>
  );

  if (product === "ring") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* ring band - cylindrical shape */}
      {/* bottom ellipse of band */}
      <ellipse cx="50" cy="72" rx="22" ry="8" fill="#b08010"/>
      {/* band body */}
      <rect x="28" y="42" width="44" height="30" fill="#c89020"/>
      <rect x="30" y="43" width="40" height="28" fill="#d4a030"/>
      {/* top ellipse of band */}
      <ellipse cx="50" cy="42" rx="22" ry="8" fill="#e0b040"/>
      {/* band highlight */}
      <rect x="44" y="40" width="12" height="32" rx="4" fill="rgba(255,220,100,0.30)"/>
      {/* bezel base */}
      <ellipse cx="50" cy="35" rx="18" ry="10" fill="#b08010" stroke="#906000" strokeWidth="2"/>
      {/* bezel top */}
      <ellipse cx="50" cy="33" rx="16" ry="8.5" fill="#c89020"/>
      {/* gemstone — deep blue */}
      <ellipse cx="50" cy="32" rx="11" ry="7" fill="#1a4080"/>
      <ellipse cx="50" cy="32" rx="9" ry="5.5" fill="#2050a0"/>
      {/* gem facets */}
      <line x1="50" y1="26" x2="50" y2="38" stroke="#103060" strokeWidth="1"/>
      <line x1="42" y1="32" x2="58" y2="32" stroke="#1030600" strokeWidth="1"/>
      <ellipse cx="45" cy="29" rx="3.5" ry="2" fill="rgba(180,210,255,0.55)"/>
    </svg>
  );

  if (product === "satchel") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* shoulder strap */}
      <path d="M28 18 Q50 6 72 18" fill="none" stroke="#2a1408" strokeWidth="7" strokeLinecap="round"/>
      <path d="M28 18 Q50 6 72 18" fill="none" stroke="#4a2818" strokeWidth="4" strokeLinecap="round"/>
      {/* bag body outer */}
      <rect x="14" y="20" width="72" height="62" rx="8" fill="#2a1408"/>
      {/* bag body inner */}
      <rect x="16" y="22" width="68" height="58" rx="7" fill="#4a2818"/>
      {/* front flap */}
      <path d="M16 22 Q16 50 50 56 Q84 50 84 22Z" fill="#3a1e10"/>
      {/* flap stitching */}
      <path d="M20 24 Q50 48 80 24" fill="none" stroke="#8a5a30" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4,3"/>
      {/* flap highlight curve */}
      <path d="M24 26 Q50 44 76 26" fill="none" stroke="rgba(200,150,80,0.35)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* clasp plate */}
      <rect x="38" y="50" width="24" height="14" rx="4" fill="#d4a020" stroke="#a07818" strokeWidth="2"/>
      {/* clasp inner */}
      <rect x="41" y="53" width="18" height="8" rx="2.5" fill="#b88010"/>
      {/* clasp knob */}
      <rect x="47" y="51" width="6" height="5" rx="2" fill="#c89020"/>
      {/* body pocket line */}
      <rect x="20" y="60" width="60" height="16" rx="3" fill="none" stroke="#8a5a30" strokeWidth="1.2" strokeDasharray="3,3"/>
      {/* left gusset shadow */}
      <rect x="14" y="20" width="8" height="62" rx="4" fill="rgba(0,0,0,0.22)"/>
      {/* right gusset shadow */}
      <rect x="78" y="20" width="8" height="62" rx="4" fill="rgba(0,0,0,0.18)"/>
    </svg>
  );

  if (product === "necklace") return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* chain arc — colored beads strung on chain */}
      <path d="M16 20 Q50 66 84 20" fill="none" stroke="#c8a040" strokeWidth="2.5" strokeLinecap="round"/>
      {/* beads */}
      {[
        [16,20],[22,30],[28,40],[35,49],[42,56],[50,60],[58,56],[65,49],[72,40],[78,30],[84,20]
      ].map(([cx,cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={i === 5 ? 7 : 5.5}
            fill={i % 4 === 0 ? "#c8a040" : i % 4 === 1 ? "#a03030" : i % 4 === 2 ? "#305878" : "#8a4a20"}
            stroke="rgba(0,0,0,0.25)" strokeWidth="1.2"
          />
          <ellipse cx={cx - 1} cy={cy - 1} rx={i === 5 ? 2.5 : 1.8} ry={i === 5 ? 1.8 : 1.3} fill="rgba(255,255,255,0.40)"/>
        </g>
      ))}
      {/* pendant drop */}
      <line x1="50" y1="66" x2="50" y2="74" stroke="#c8a040" strokeWidth="2.5"/>
      {/* pendant oval */}
      <ellipse cx="50" cy="82" rx="12" ry="14" fill="#c8a040" stroke="#a07820" strokeWidth="2"/>
      <ellipse cx="50" cy="82" rx="9" ry="10.5" fill="#a03030"/>
      <ellipse cx="47" cy="78" rx="3" ry="2.2" fill="rgba(255,200,200,0.55)"/>
      {/* jump ring */}
      <ellipse cx="50" cy="69" rx="4" ry="2.5" fill="none" stroke="#c8a040" strokeWidth="2.5"/>
    </svg>
  );

  // hat (fedora)
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* brim shadow */}
      <ellipse cx="50" cy="72" rx="44" ry="8" fill="rgba(0,0,0,0.22)"/>
      {/* brim outer */}
      <ellipse cx="50" cy="66" rx="44" ry="10" fill="#2a1808"/>
      {/* brim top surface */}
      <ellipse cx="50" cy="64" rx="42" ry="8.5" fill="#4a2e10"/>
      {/* crown sides */}
      <path d="M22 64 Q20 32 50 22 Q80 32 78 64Z" fill="#2a1808"/>
      <path d="M24 64 Q22 34 50 24 Q78 34 76 64Z" fill="#3e2410"/>
      {/* crown front face lit */}
      <path d="M26 64 Q24 36 50 26 Q76 36 74 64Z" fill="#5a3818"/>
      {/* crown dent / indent at top */}
      <ellipse cx="50" cy="26" rx="16" ry="5" fill="#3a2210"/>
      <path d="M36 34 Q50 28 64 34 Q62 26 50 24 Q38 26 36 34Z" fill="rgba(0,0,0,0.35)"/>
      {/* hat band */}
      <path d="M22 62 Q50 70 78 62 Q78 54 50 60 Q22 54 22 62Z" fill="#c89020"/>
      {/* band highlight */}
      <path d="M26 60 Q50 66 74 60" fill="none" stroke="rgba(255,210,80,0.45)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* crown highlight */}
      <path d="M38 44 Q50 38 62 44" fill="none" stroke="rgba(255,200,130,0.30)" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

/* ── Story-highlight inner icon (small, white) ── */
function HighlightIcon({ icon }: { icon: string }) {
  if (icon === "sunglasses") return (
    <svg viewBox="0 0 28 14" width="22" height="11">
      <rect x="1" y="1" width="9" height="8" rx="4" fill="none" stroke="white" strokeWidth="1.8"/>
      <rect x="18" y="1" width="9" height="8" rx="4" fill="none" stroke="white" strokeWidth="1.8"/>
      <line x1="10" y1="5" x2="18" y2="5" stroke="white" strokeWidth="1.8"/>
      <line x1="0" y1="5" x2="1" y2="5" stroke="white" strokeWidth="2"/>
      <line x1="27" y1="5" x2="28" y2="5" stroke="white" strokeWidth="2"/>
    </svg>
  );
  if (icon === "watch") return (
    <svg viewBox="0 0 14 20" width="11" height="16">
      <rect x="5" y="0" width="4" height="4" rx="1" fill="none" stroke="white" strokeWidth="1.5"/>
      <rect x="5" y="16" width="4" height="4" rx="1" fill="none" stroke="white" strokeWidth="1.5"/>
      <circle cx="7" cy="10" r="5" fill="none" stroke="white" strokeWidth="1.5"/>
      <line x1="7" y1="7" x2="7" y2="10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="7" y1="10" x2="10" y2="12" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
  if (icon === "belt") return (
    <svg viewBox="0 0 28 10" width="22" height="8">
      <rect x="0" y="3" width="28" height="4" rx="2" fill="none" stroke="white" strokeWidth="1.5"/>
      <rect x="12" y="1" width="4" height="8" rx="1" fill="none" stroke="white" strokeWidth="1.5"/>
    </svg>
  );
  if (icon === "scarf") return (
    <svg viewBox="0 0 28 20" width="22" height="16">
      <path d="M2 4 Q10 1 16 7 Q22 13 26 9" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 10 Q10 7 16 13 Q22 19 26 15" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
  // tag
  return (
    <svg viewBox="0 0 16 18" width="13" height="15">
      <path d="M1 1 L9 1 L15 8 L9 15 L1 15 Z" fill="none" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="5" cy="5" r="1.5" fill="white"/>
    </svg>
  );
}

/* ─────────────────────────────────────────────── */
export default function VintageInstagram() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-white font-sans">

      {/* ── Top App Bar ── */}
      <header className="flex shrink-0 items-center justify-between border-b border-stone-100 bg-white px-3 py-2">
        <div className="w-7" />
        <div className="flex items-center gap-1">
          <span className="text-[11px] font-bold tracking-tight text-stone-900">
            @vintage.atelier
          </span>
          <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full bg-sky-500">
            <Check size={8} strokeWidth={3} className="text-white" />
          </span>
        </div>
        <div className="flex items-center gap-2.5 text-stone-800">
          <PlusSquare size={16} strokeWidth={1.8} />
          <Menu size={16} strokeWidth={1.8} />
        </div>
      </header>

      {/* ── Scrollable body ── */}
      <div className="flex-1 overflow-y-auto">

        {/* ── Profile Header ── */}
        <div className="px-3 pt-3 pb-2">

          {/* Avatar + stats row */}
          <div className="flex items-center gap-3">
            {/* Avatar with gradient story ring */}
            <div className="shrink-0">
              <div className="rounded-full p-[2.5px] bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 shadow">
                <div className="rounded-full p-[2px] bg-white">
                  <div className="h-[60px] w-[60px] rounded-full overflow-hidden bg-gradient-to-br from-amber-100 via-orange-200 to-amber-300 flex items-center justify-center">
                    {/* Stylised fedora avatar */}
                    <svg viewBox="0 0 60 60" width="60" height="60">
                      <circle cx="30" cy="30" r="30" fill="none"/>
                      {/* torso / collar */}
                      <ellipse cx="30" cy="52" rx="16" ry="12" fill="#3a1e08"/>
                      <ellipse cx="30" cy="52" rx="14" ry="10" fill="#5a2e10"/>
                      {/* shirt */}
                      <rect x="22" y="44" width="16" height="10" rx="2" fill="#f0e8d0"/>
                      {/* head */}
                      <circle cx="30" cy="28" r="12" fill="#d4a878"/>
                      {/* face highlight */}
                      <ellipse cx="27" cy="25" rx="4" ry="3" fill="rgba(255,220,170,0.45)"/>
                      {/* hat brim */}
                      <ellipse cx="30" cy="20" rx="16" ry="4" fill="#2a1808"/>
                      {/* hat crown */}
                      <path d="M17 20 Q16 10 30 7 Q44 10 43 20Z" fill="#3e2410"/>
                      {/* hat band */}
                      <rect x="17" y="18" width="26" height="3.5" rx="1" fill="#c89020"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-1 items-center justify-around">
              {[
                { value: "142",   label: "posts"     },
                { value: "28.5k", label: "followers" },
                { value: "310",   label: "following" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center">
                  <span className="text-[13px] font-bold leading-tight text-stone-900">{s.value}</span>
                  <span className="text-[9px] leading-tight text-stone-500">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bio block */}
          <div className="mt-2 space-y-0.5">
            <p className="text-[11px] font-bold text-stone-900">Vintage Atelier</p>
            <p className="text-[10px] leading-snug text-stone-600">Curated 70s&#8211;90s accessories ✦</p>
            <p className="text-[10px] leading-snug text-stone-600">Ships worldwide &middot; DM to buy</p>
            <p className="text-[10px] font-medium text-amber-700">vintage.atelier/shop</p>
          </div>

          {/* Action buttons */}
          <div className="mt-2.5 flex items-center gap-2">
            <button className="flex-1 rounded-lg bg-stone-900 py-1.5 text-[10px] font-semibold text-white">
              Follow
            </button>
            <button className="flex-1 rounded-lg bg-stone-100 py-1.5 text-[10px] font-semibold text-stone-800">
              Message
            </button>
            <button className="flex h-[26px] w-8 items-center justify-center rounded-lg bg-stone-100 text-stone-700">
              <UserPlus size={13} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* ── Story Highlights ── */}
        <div
          className="flex gap-3 overflow-x-auto px-3 pb-3 pt-1"
          style={{ scrollbarWidth: "none" }}
        >
          {highlights.map((h) => (
            <div key={h.label} className="flex shrink-0 flex-col items-center gap-1">
              <div className={`h-[54px] w-[54px] rounded-full bg-gradient-to-br ${h.bg} flex items-center justify-center shadow-sm`}>
                <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[2.5px] border-white/80">
                  <HighlightIcon icon={h.icon} />
                </div>
              </div>
              <span className="text-[9px] font-medium text-stone-600">{h.label}</span>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div className="flex shrink-0 border-t border-stone-100">
          <button className="flex flex-1 items-center justify-center border-b-2 border-stone-900 py-2">
            <Grid3x3 size={16} strokeWidth={1.8} className="text-stone-900" />
          </button>
          <button className="flex flex-1 items-center justify-center border-b-2 border-transparent py-2">
            <Tag size={16} strokeWidth={1.8} className="text-stone-400" />
          </button>
          <button className="flex flex-1 items-center justify-center border-b-2 border-transparent py-2">
            <Bookmark size={16} strokeWidth={1.8} className="text-stone-400" />
          </button>
        </div>

        {/* ── 3×3 Product Grid ── */}
        <div className="grid grid-cols-3 gap-[2px] bg-stone-200">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden"
              style={{ backgroundColor: tile.bg }}
            >
              {/* subtle inner shadow overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/8 via-transparent to-black/25" />

              {/* product illustration fills the tile */}
              <div className="absolute inset-0 flex items-center justify-center p-[10%]">
                <ProductSVG product={tile.product} />
              </div>

              {/* price tag pill */}
              {tile.price && (
                <div className="absolute bottom-1.5 left-1.5 z-10 flex items-center gap-[3px] rounded-full bg-white/95 px-1.5 py-[3px] shadow-sm">
                  <Tag size={7} strokeWidth={2.2} className="text-stone-600" />
                  <span className="text-[8px] font-bold leading-none text-stone-800">{tile.price}</span>
                </div>
              )}

              {/* multi-image indicator on tile 2 */}
              {i === 2 && (
                <div className="absolute top-1.5 right-1.5 z-10">
                  <svg viewBox="0 0 14 14" width="12" height="12">
                    <rect x="1" y="1" width="9" height="9" rx="2" fill="none" stroke="white" strokeWidth="1.6"/>
                    <rect x="4" y="4" width="9" height="9" rx="2" fill="none" stroke="white" strokeWidth="1.6"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Bottom spacer ── */}
        <div className="h-4 bg-white" />
      </div>
    </div>
  );
}
