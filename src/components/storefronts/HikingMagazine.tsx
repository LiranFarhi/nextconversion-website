import { Leaf, MapPin, Mountain, ShoppingBag } from "lucide-react";

// ─── Inline SVG product illustrations ────────────────────────────────────────

function JacketIllustration() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" width="100%" height="100%">
      {/* body */}
      <path
        d="M20 32 L10 22 L6 38 L14 40 L14 68 L66 68 L66 40 L74 38 L70 22 L60 32 L55 26 C51 18 29 18 25 26 Z"
        fill="#3a6b34" stroke="#2d5a27" strokeWidth="1.5" strokeLinejoin="round"
      />
      {/* collar */}
      <path
        d="M31 26 C34 20 46 20 49 26 L51 33 L40 35 L29 33 Z"
        fill="#2d5a27" stroke="#1e4019" strokeWidth="1"
      />
      {/* left sleeve */}
      <path
        d="M20 32 L6 40 L10 56 L20 54 L22 38 Z"
        fill="#4a7c40" stroke="#2d5a27" strokeWidth="1" strokeLinejoin="round"
      />
      {/* right sleeve */}
      <path
        d="M60 32 L74 40 L70 56 L60 54 L58 38 Z"
        fill="#4a7c40" stroke="#2d5a27" strokeWidth="1" strokeLinejoin="round"
      />
      {/* chest zip */}
      <line x1="40" y1="35" x2="40" y2="64" stroke="#1e4019" strokeWidth="1.5" strokeDasharray="3,2" />
      <circle cx="40" cy="46" r="2.5" fill="#a8c890" />
      {/* pockets */}
      <path d="M18 52 L34 52 L34 62 L18 62 Z" fill="#2d5a27" stroke="#1e4019" strokeWidth="0.8" />
      <path d="M46 52 L62 52 L62 62 L46 62 Z" fill="#2d5a27" stroke="#1e4019" strokeWidth="0.8" />
      {/* hem */}
      <line x1="14" y1="64" x2="66" y2="64" stroke="#1e4019" strokeWidth="1" />
      {/* logo patch */}
      <circle cx="40" cy="57" r="4" fill="#1e4019" opacity="0.5" />
      <path d="M38 58 Q40 54 42 58 Q40 60 38 58 Z" fill="#a8c890" />
    </svg>
  );
}

function BaseLayerIllustration() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" width="100%" height="100%">
      {/* body */}
      <path
        d="M22 30 L12 22 L8 36 L18 38 L18 68 L62 68 L62 38 L72 36 L68 22 L58 30 C54 22 26 22 22 30 Z"
        fill="#b09a7a" stroke="#8b7355" strokeWidth="1.5" strokeLinejoin="round"
      />
      {/* turtle neck */}
      <path
        d="M29 28 C31 18 49 18 51 28 L49 34 L31 34 Z"
        fill="#c8b896" stroke="#8b7355" strokeWidth="1"
      />
      {/* left sleeve */}
      <path
        d="M22 30 L8 38 L12 56 L22 52 L24 38 Z"
        fill="#c8b896" stroke="#8b7355" strokeWidth="1" strokeLinejoin="round"
      />
      {/* right sleeve */}
      <path
        d="M58 30 L72 38 L68 56 L58 52 L56 38 Z"
        fill="#c8b896" stroke="#8b7355" strokeWidth="1" strokeLinejoin="round"
      />
      {/* merino texture */}
      {[38, 44, 50, 56, 62].map((y) => (
        <line key={y} x1="18" y1={y} x2="62" y2={y} stroke="#8b7355" strokeWidth="0.5" opacity="0.45" />
      ))}
      {/* side seams */}
      <line x1="18" y1="38" x2="18" y2="68" stroke="#8b7355" strokeWidth="0.8" opacity="0.5" />
      <line x1="62" y1="38" x2="62" y2="68" stroke="#8b7355" strokeWidth="0.8" opacity="0.5" />
      {/* center seam */}
      <line x1="40" y1="34" x2="40" y2="68" stroke="#8b7355" strokeWidth="0.6" opacity="0.4" />
      {/* brand label */}
      <rect x="33" y="42" width="14" height="5" rx="1.5" fill="#8b7355" opacity="0.5" />
      <text x="40" y="46" fontSize="3.5" fill="#f5f0e8" textAnchor="middle" fontWeight="bold">MERINO</text>
    </svg>
  );
}

function ShoeIllustration() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" width="100%" height="100%">
      {/* thick sole with lugs */}
      <path
        d="M8 62 Q7 70 20 70 L64 70 Q75 70 75 63 Q75 56 66 56 L16 56 Q8 56 8 62 Z"
        fill="#2a2a1e" stroke="#1a1a12" strokeWidth="1"
      />
      {/* lug tread */}
      {[18, 26, 34, 42, 50, 58].map((x) => (
        <rect key={x} x={x} y="65" width="6" height="5" rx="1.2" fill="#3e3e2e" />
      ))}
      {/* upper body */}
      <path
        d="M14 56 Q10 44 14 36 Q20 26 36 24 L54 24 Q65 26 68 36 L70 56 Z"
        fill="#4a5242" stroke="#3a3a2e" strokeWidth="1.5" strokeLinejoin="round"
      />
      {/* toe cap reinforcement */}
      <path
        d="M14 56 Q10 44 16 36 Q22 30 34 28 L36 56 Z"
        fill="#383830" stroke="#2a2a1e" strokeWidth="1"
      />
      {/* GTX waterproof panel */}
      <path
        d="M36 26 L54 26 Q63 28 66 38 L66 54 L36 54 Z"
        fill="#5a6254" stroke="#4a5242" strokeWidth="0.8"
      />
      {/* lace panel */}
      <path d="M32 32 L52 32 L54 52 L30 52 Z" fill="#6a7264" stroke="#5a6254" strokeWidth="0.8" />
      {/* laces */}
      {[36, 41, 46].map((y) => (
        <line key={y} x1="32" y1={y} x2="52" y2={y} stroke="#e8e0cc" strokeWidth="1.4" />
      ))}
      {/* heel pull tab */}
      <rect x="61" y="34" width="7" height="14" rx="3.5" fill="#2d5a27" stroke="#1e4019" strokeWidth="0.8" />
      {/* eyelets */}
      {[36, 41, 46].map((y) => (
        <g key={y}>
          <circle cx="33" cy={y} r="1.2" fill="#2a2a1e" />
          <circle cx="51" cy={y} r="1.2" fill="#2a2a1e" />
        </g>
      ))}
      {/* GTX badge */}
      <rect x="36" y="23" width="14" height="5" rx="1.5" fill="#1e4019" />
      <text x="43" y="27" fontSize="3.8" fill="#a8c890" fontWeight="bold" textAnchor="middle">GTX</text>
    </svg>
  );
}

function BackpackIllustration() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" width="100%" height="100%">
      {/* main body */}
      <rect x="15" y="12" width="50" height="56" rx="9" fill="#5c4a32" stroke="#3d3120" strokeWidth="1.5" />
      {/* lid / top flap */}
      <path
        d="M15 20 Q15 10 24 10 L56 10 Q65 10 65 20 L65 26 L15 26 Z"
        fill="#6b5840" stroke="#3d3120" strokeWidth="1"
      />
      {/* front pocket */}
      <rect x="21" y="44" width="38" height="20" rx="5" fill="#4a3828" stroke="#3d3120" strokeWidth="1" />
      {/* pocket zipper */}
      <path d="M25 44 Q40 41 55 44" fill="none" stroke="#8b7355" strokeWidth="1.5" />
      <circle cx="40" cy="43" r="2.2" fill="#c8b896" />
      {/* top handle */}
      <path d="M33 10 Q33 5 40 5 Q47 5 47 10" fill="none" stroke="#3d3120" strokeWidth="3" strokeLinecap="round" />
      {/* shoulder straps */}
      <path d="M20 26 Q17 52 19 66" fill="none" stroke="#3d3120" strokeWidth="4" strokeLinecap="round" />
      <path d="M60 26 Q63 52 61 66" fill="none" stroke="#3d3120" strokeWidth="4" strokeLinecap="round" />
      {/* compression straps */}
      <line x1="15" y1="36" x2="8" y2="40" stroke="#3d3120" strokeWidth="2" strokeLinecap="round" />
      <line x1="65" y1="36" x2="72" y2="40" stroke="#3d3120" strokeWidth="2" strokeLinecap="round" />
      {/* side mesh pocket */}
      <rect x="8" y="28" width="9" height="22" rx="3" fill="#3d3120" stroke="#2a2018" strokeWidth="0.8" opacity="0.9" />
      {[32, 36, 40].map((y) => (
        <line key={y} x1="10" y1={y} x2="15" y2={y} stroke="#5c4a32" strokeWidth="0.8" opacity="0.6" />
      ))}
      {/* bio badge */}
      <rect x="23" y="16" width="34" height="8" rx="2.5" fill="#2d5a27" />
      <text x="40" y="22" fontSize="4.5" fill="#a8c890" textAnchor="middle" fontWeight="bold">40 L  BIO</text>
      {/* pocket pull tab */}
      <rect x="38" y="56" width="4" height="6" rx="2" fill="#8b7355" />
      {/* volume lines on main body */}
      <line x1="21" y1="36" x2="59" y2="36" stroke="#3d3120" strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

function FlaskIllustration() {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" width="100%" height="100%">
      {/* bottle body */}
      <path
        d="M26 24 L26 20 Q26 14 32 14 L48 14 Q54 14 54 20 L54 24 Q62 28 62 38 L62 66 Q62 72 56 72 L24 72 Q18 72 18 66 L18 38 Q18 28 26 24 Z"
        fill="#2d5a27" stroke="#1e4019" strokeWidth="1.5"
      />
      {/* insulation groove lines */}
      {[42, 52, 62].map((y) => (
        <line key={y} x1="19" y1={y} x2="61" y2={y} stroke="#1e4019" strokeWidth="1.2" opacity="0.5" />
      ))}
      {/* sheen / highlight */}
      <path d="M28 26 Q28 32 30 50 L34 50 L32 26 Z" fill="white" opacity="0.14" />
      {/* cap */}
      <rect x="29" y="7" width="22" height="9" rx="3.5" fill="#4a7c40" stroke="#2d5a27" strokeWidth="1.2" />
      {/* cap loop */}
      <path d="M35 7 Q35 2 40 2 Q45 2 45 7" fill="none" stroke="#2d5a27" strokeWidth="2.2" strokeLinecap="round" />
      {/* carabiner clip hole */}
      <ellipse cx="40" cy="4.5" rx="3" ry="2.5" fill="none" stroke="#3a6b34" strokeWidth="1" />
      {/* brand circle */}
      <circle cx="40" cy="52" r="9" fill="#1e4019" opacity="0.45" />
      {/* leaf mark */}
      <path d="M37 55 Q40 46 43 55 Q40 58 37 55 Z" fill="#a8c890" />
      <line x1="40" y1="55" x2="40" y2="60" stroke="#a8c890" strokeWidth="1" />
      {/* volume marks */}
      <line x1="57" y1="44" x2="62" y2="44" stroke="#a8c890" strokeWidth="1.2" opacity="0.7" />
      <line x1="58" y1="52" x2="62" y2="52" stroke="#a8c890" strokeWidth="1.2" opacity="0.7" />
      <line x1="57" y1="60" x2="62" y2="60" stroke="#a8c890" strokeWidth="1.2" opacity="0.7" />
      <text x="56" y="43" fontSize="3" fill="#a8c890" textAnchor="end" opacity="0.7">500</text>
    </svg>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({
  illustration,
  name,
  price,
  bgColor,
}: {
  illustration: React.ReactNode;
  name: string;
  price: string;
  bgColor: string;
}) {
  return (
    <div className="flex flex-col rounded-[5px] overflow-hidden" style={{ background: "#faf7f2", border: "1px solid #e0d8c8" }}>
      {/* illustration area */}
      <div
        className="relative flex items-center justify-center"
        style={{ backgroundColor: bgColor, paddingBottom: "80%", width: "100%" }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-[8%]">
          {illustration}
        </div>
      </div>
      {/* label */}
      <div className="px-[6px] pt-[5px] pb-[6px] flex flex-col gap-[3px]">
        <p
          className="text-[8.5px] font-semibold leading-tight text-[#1a2e18]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          {name}
        </p>
        <div className="flex items-center justify-between gap-[4px]">
          <span
            className="text-[10px] font-black text-[#2d5a27] leading-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {price}
          </span>
          <span
            className="text-[6px] font-bold uppercase tracking-[0.12em] text-white leading-none px-[5px] py-[2.5px] rounded-[3px]"
            style={{ background: "#2d5a27" }}
          >
            Add
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HikingMagazine() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f5f0e8] text-[#2c2c2c] font-sans">

      {/* ── MASTHEAD ─────────────────────────────────────────────────────── */}
      <header className="flex-shrink-0 px-3 pt-2 pb-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[5px]">
            <Mountain size={12} className="text-[#2d5a27] shrink-0" />
            <span
              className="text-[17px] font-black tracking-[0.2em] uppercase text-[#2d5a27] leading-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              WILDLINE
            </span>
            <span className="text-[7px] text-[#6b8f5e] tracking-widest uppercase font-semibold ml-[3px]">
              The Trail Journal
            </span>
          </div>
          <div className="flex items-center gap-[3px]">
            <Leaf size={8} className="text-[#6b8f5e]" />
            <span className="text-[6px] font-bold text-[#6b8f5e] uppercase tracking-widest">
              Eco
            </span>
          </div>
        </div>
        {/* meta line */}
        <div className="flex items-center justify-between mt-[2px]">
          <span className="text-[6.5px] tracking-[0.16em] uppercase text-stone-500 font-medium">
            Issue&#x202F;04 &middot; Gear &amp; Terrain
          </span>
          <span className="text-[6.5px] text-stone-400">Jun 2026</span>
        </div>
        {/* double rule */}
        <div className="mt-[4px] border-t-2 border-[#2d5a27]" />
        <div className="mt-[2px] border-t border-[#2d5a27]/30" />
      </header>

      {/* ── COMPACT HERO ─────────────────────────────────────────────────── */}
      <div
        className="flex-shrink-0 relative mx-3 mt-[6px] rounded-[5px] overflow-hidden"
        style={{ height: "15%" }}
      >
        {/* mountain gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, #1a3a1a 0%, #2d5a27 30%, #4a7c40 60%, #7aad60 85%, #a8c890 100%)",
          }}
        />
        {/* sky wash */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(160,200,220,0.45) 0%, transparent 45%)" }}
        />
        {/* mountain silhouette */}
        <svg
          viewBox="0 0 200 50"
          preserveAspectRatio="xMidYMax meet"
          className="absolute bottom-0 left-0 right-0 w-full"
          style={{ height: "65%" }}
          aria-hidden="true"
        >
          <polygon points="0,50 28,12 55,34 88,2 128,30 158,14 200,50" fill="#1e4019" opacity="0.88" />
          <polygon points="0,50 20,24 46,44 72,10 108,42 138,22 200,50" fill="#163314" opacity="0.5" />
          <rect x="0" y="45" width="200" height="5" fill="#163314" />
        </svg>
        {/* caption / headline overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-3 pb-[10px]">
          <p className="text-[6px] uppercase tracking-[0.26em] text-[#a8c890] font-bold leading-none mb-[3px]">
            Feature &nbsp;/&nbsp; Sustainable Gear
          </p>
          <h1
            className="text-[14px] font-semibold leading-[1.1] tracking-tight text-white"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Into&nbsp;the Green
          </h1>
        </div>
        {/* caption bar */}
        <div
          className="absolute bottom-0 left-0 right-0 px-2 py-[2px] flex items-center gap-1"
          style={{ background: "rgba(14,30,12,0.6)" }}
        >
          <MapPin size={6} className="text-[#a8c890] shrink-0" />
          <span className="text-[5.5px] text-[#c8e0b0] tracking-widest uppercase font-medium">
            Cascade Range &thinsp;&middot;&thinsp; 2,438 m
          </span>
        </div>
      </div>

      {/* ── EDITORIAL STRIP (drop-cap + stat) ───────────────────────────── */}
      <div className="flex-shrink-0 px-3 mt-[5px] flex gap-2 items-center">
        <p className="flex-1 min-w-0 text-[7px] leading-[1.5] text-stone-600">
          <span
            className="float-left text-[20px] font-black leading-[0.82] mr-[2px] mt-[1px] text-[#2d5a27]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            T
          </span>
          he ridge arrives before dawn. Bio-based films &amp; post-consumer fleece now meet alpine seam tape — gear that gives back.
        </p>
        <div
          className="flex-shrink-0 rounded-[4px] px-[7px] py-[4px] text-center"
          style={{ background: "#2d5a27", minWidth: "44px" }}
        >
          <p className="text-[5.5px] uppercase tracking-widest text-[#a8c890] font-bold leading-none mb-[1px]">
            Recycled
          </p>
          <p
            className="text-[15px] font-black leading-none text-white"
            style={{ fontFamily: "Georgia, serif" }}
          >
            86<span className="text-[9px]">%</span>
          </p>
          <p className="text-[5px] text-[#a8c890]/80 leading-tight mt-[1px]">avg content</p>
        </div>
      </div>

      {/* ── SHOP THE KIT — HEADER ────────────────────────────────────────── */}
      <div className="flex-shrink-0 px-3 mt-[7px]">
        <div className="border-t-2 border-[#2d5a27]" />
        <div className="flex items-center justify-between mt-[4px]">
          <div className="flex items-center gap-[5px]">
            <ShoppingBag size={10} className="text-[#2d5a27]" />
            <p
              className="text-[9px] font-black uppercase tracking-[0.2em] text-[#2d5a27] leading-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Shop&nbsp;the&nbsp;Kit
            </p>
          </div>
          <div className="flex items-center gap-[3px]">
            <span
              className="text-[6px] font-bold uppercase tracking-widest text-[#2d5a27] leading-none px-[5px] py-[2px] rounded-[2px]"
              style={{ border: "1px solid #2d5a27" }}
            >
              5&nbsp;pieces
            </span>
            <span
              className="text-[7px] font-black text-[#2d5a27] leading-none px-[5px] py-[2px] rounded-[2px]"
              style={{ background: "#2d5a27", color: "#a8c890" }}
            >
              $679
            </span>
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID — 5 items in 2 rows ────────────────────────────── */}
      <div className="flex-1 min-h-0 px-3 mt-[6px] pb-[6px] flex flex-col gap-[6px]">
        {/* row 1: 3 items */}
        <div className="flex gap-[6px]" style={{ flex: "3 1 0", minHeight: 0 }}>
          <div className="flex-1 min-w-0">
            <ProductCard
              illustration={<JacketIllustration />}
              name="Recycled Shell Jacket"
              price="$210"
              bgColor="#d4e8cc"
            />
          </div>
          <div className="flex-1 min-w-0">
            <ProductCard
              illustration={<BaseLayerIllustration />}
              name="Merino Base Layer"
              price="$85"
              bgColor="#e8dfc8"
            />
          </div>
          <div className="flex-1 min-w-0">
            <ProductCard
              illustration={<ShoeIllustration />}
              name="Trail Runner GTX"
              price="$160"
              bgColor="#d8d6c8"
            />
          </div>
        </div>
        {/* row 2: 2 items + editorial total block */}
        <div className="flex gap-[6px]" style={{ flex: "3 1 0", minHeight: 0 }}>
          <div className="flex-1 min-w-0">
            <ProductCard
              illustration={<BackpackIllustration />}
              name="40L Bio-Pack"
              price="$190"
              bgColor="#ddd0b8"
            />
          </div>
          <div className="flex-1 min-w-0">
            <ProductCard
              illustration={<FlaskIllustration />}
              name="Insulated Flask"
              price="$34"
              bgColor="#cce0c0"
            />
          </div>
          {/* full kit callout */}
          <div
            className="flex-1 min-w-0 rounded-[5px] flex flex-col justify-between p-[8px]"
            style={{
              background: "linear-gradient(155deg, #1e4019 0%, #2d5a27 55%, #3a6b34 100%)",
              border: "1px solid #1a3316",
            }}
          >
            <div>
              <p className="text-[5.5px] uppercase tracking-[0.18em] text-[#a8c890] font-bold leading-tight">
                Full&nbsp;Kit
              </p>
              <p
                className="text-[16px] font-black leading-none text-white mt-[2px]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                $679
              </p>
              <p className="text-[5.5px] text-[#a8c890] leading-tight mt-[2px]">
                5 pieces
              </p>
            </div>
            <div className="mt-auto pt-[6px]">
              <p className="text-[5px] text-[#a8c890]/80 uppercase tracking-[0.14em] leading-tight">
                Certified sustainable
              </p>
              <div className="flex items-center gap-[3px] mt-[3px]">
                <Leaf size={7} className="text-[#a8c890]" />
                <span className="text-[5px] text-[#a8c890] font-semibold uppercase tracking-wide">
                  Leave No Trace
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        className="flex-shrink-0 px-3 pb-[7px] pt-[4px] flex items-center justify-between"
        style={{ borderTop: "1px solid rgba(180,170,150,0.5)" }}
      >
        <div className="flex items-center gap-[4px]">
          <Mountain size={8} className="text-[#2d5a27]" />
          <span
            className="text-[7px] font-black tracking-[0.22em] uppercase text-[#2d5a27]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            WILDLINE
          </span>
        </div>
        <span className="text-[6px] text-stone-400 tracking-widest uppercase">wildline.co/shop</span>
        <span className="text-[7px] font-semibold text-stone-400">Pg.&thinsp;48</span>
      </footer>
    </div>
  );
}
