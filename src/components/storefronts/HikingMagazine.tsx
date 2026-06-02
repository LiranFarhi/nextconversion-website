import { Leaf, MapPin, Mountain, ShoppingBag } from "lucide-react";

// ─── Inline SVG: Mountain landscape hero ─────────────────────────────────────

function MountainScene() {
  return (
    <svg
      viewBox="0 0 900 340"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    >
      {/* Sky gradient */}
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8d4e8" />
          <stop offset="45%" stopColor="#d0e8d8" />
          <stop offset="100%" stopColor="#8ab870" />
        </linearGradient>
        <linearGradient id="mist" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8f0e0" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#e8f0e0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="ridge1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a6b34" />
          <stop offset="100%" stopColor="#1e4019" />
        </linearGradient>
        <linearGradient id="ridge2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2d5a27" />
          <stop offset="100%" stopColor="#163314" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="900" height="340" fill="url(#sky)" />

      {/* Sun disc */}
      <circle cx="650" cy="72" r="36" fill="#f0e8c0" opacity="0.65" />
      <circle cx="650" cy="72" r="24" fill="#f8f0d0" opacity="0.85" />

      {/* Distant haze mountains */}
      <polygon
        points="0,340 0,210 80,150 160,185 250,120 360,170 440,105 530,155 620,90 720,145 810,100 900,135 900,340"
        fill="#6a9e74"
        opacity="0.32"
      />
      {/* Mist veil */}
      <rect x="0" y="155" width="900" height="60" fill="url(#mist)" />

      {/* Mid mountains — lighter */}
      <polygon
        points="0,340 0,240 90,178 180,215 280,155 390,200 500,138 610,185 710,130 820,168 900,145 900,340"
        fill="url(#ridge1)"
        opacity="0.6"
      />

      {/* Foreground ridge — dark */}
      <polygon
        points="0,340 0,265 60,220 130,248 220,188 320,232 430,172 550,220 660,165 760,205 860,178 900,195 900,340"
        fill="url(#ridge2)"
        opacity="0.88"
      />

      {/* Forest treeline silhouette */}
      {[12, 35, 58, 85, 108, 132, 160, 195, 228, 262, 300, 340, 380, 420, 465, 510, 555, 600, 650, 700, 748, 795, 840, 880].map(
        (x, i) => {
          const h = 22 + ((i * 7 + 13) % 18);
          const y = 265 + ((i * 5 + 3) % 22) - h;
          return (
            <polygon
              key={x}
              points={`${x},${y + h} ${x + 10},${y} ${x + 20},${y + h}`}
              fill="#163314"
              opacity="0.82"
            />
          );
        }
      )}

      {/* Ground band */}
      <rect x="0" y="310" width="900" height="30" fill="#163314" />

      {/* Snow caps */}
      <polygon points="430,172 453,193 407,193" fill="white" opacity="0.55" />
      <polygon points="660,165 676,182 644,182" fill="white" opacity="0.45" />
      <polygon points="220,188 238,208 202,208" fill="white" opacity="0.4" />
    </svg>
  );
}

// ─── Inline SVG product illustrations ────────────────────────────────────────

function JacketSVG() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="w-full h-full">
      <path
        d="M25 38 L12 26 L7 46 L18 49 L18 84 L82 84 L82 49 L93 46 L88 26 L75 38 C70 27 30 27 25 38 Z"
        fill="#3a6b34" stroke="#2d5a27" strokeWidth="1.8" strokeLinejoin="round"
      />
      <path
        d="M36 30 C40 22 60 22 64 30 L66 40 L50 43 L34 40 Z"
        fill="#2d5a27" stroke="#1e4019" strokeWidth="1"
      />
      <path d="M25 38 L7 48 L12 68 L24 65 L27 47 Z" fill="#4a7c40" stroke="#2d5a27" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M75 38 L93 48 L88 68 L76 65 L73 47 Z" fill="#4a7c40" stroke="#2d5a27" strokeWidth="1.2" strokeLinejoin="round" />
      <line x1="50" y1="43" x2="50" y2="80" stroke="#1e4019" strokeWidth="1.8" strokeDasharray="4,3" />
      <circle cx="50" cy="57" r="3.2" fill="#a8c890" />
      <rect x="22" y="62" width="20" height="14" rx="2" fill="#2d5a27" stroke="#1e4019" strokeWidth="0.9" />
      <rect x="58" y="62" width="20" height="14" rx="2" fill="#2d5a27" stroke="#1e4019" strokeWidth="0.9" />
    </svg>
  );
}

function MerinoSVG() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="w-full h-full">
      <path
        d="M26 36 L14 26 L9 43 L22 46 L22 84 L78 84 L78 46 L91 43 L86 26 L74 36 C69 26 31 26 26 36 Z"
        fill="#b09a7a" stroke="#8b7355" strokeWidth="1.8" strokeLinejoin="round"
      />
      <path
        d="M35 32 C38 22 62 22 65 32 L62 40 L38 40 Z"
        fill="#c8b896" stroke="#8b7355" strokeWidth="1"
      />
      <path d="M26 36 L9 46 L14 68 L26 64 L29 46 Z" fill="#c8b896" stroke="#8b7355" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M74 36 L91 46 L86 68 L74 64 L71 46 Z" fill="#c8b896" stroke="#8b7355" strokeWidth="1.2" strokeLinejoin="round" />
      {[46, 54, 62, 70, 78].map((y) => (
        <line key={y} x1="22" y1={y} x2="78" y2={y} stroke="#8b7355" strokeWidth="0.7" opacity="0.4" />
      ))}
      <rect x="38" y="52" width="24" height="7" rx="2" fill="#8b7355" opacity="0.55" />
      <text x="50" y="58" fontSize="5" fill="#f5f0e8" textAnchor="middle" fontWeight="bold">MERINO</text>
    </svg>
  );
}

function ShoesSVG() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="w-full h-full">
      <path
        d="M10 76 Q9 87 24 87 L80 87 Q94 87 94 78 Q94 69 83 69 L20 69 Q10 69 10 76 Z"
        fill="#2a2a1e" stroke="#1a1a12" strokeWidth="1.2"
      />
      {[22, 32, 42, 52, 62, 72].map((x) => (
        <rect key={x} x={x} y="80" width="8" height="7" rx="1.5" fill="#3e3e2e" />
      ))}
      <path
        d="M18 69 Q13 55 18 44 Q25 31 44 29 L68 29 Q82 32 85 46 L88 69 Z"
        fill="#4a5242" stroke="#3a3a2e" strokeWidth="1.8" strokeLinejoin="round"
      />
      <path
        d="M18 69 Q13 55 20 44 Q27 36 42 33 L44 69 Z"
        fill="#383830" stroke="#2a2a1e" strokeWidth="1.2"
      />
      <path d="M44 31 L68 31 Q80 34 83 48 L83 67 L44 67 Z" fill="#5a6254" stroke="#4a5242" strokeWidth="0.9" />
      <path d="M40 39 L66 39 L68 65 L38 65 Z" fill="#6a7264" stroke="#5a6254" strokeWidth="0.9" />
      {[45, 52, 59].map((y) => (
        <line key={y} x1="40" y1={y} x2="64" y2={y} stroke="#e8e0cc" strokeWidth="1.8" />
      ))}
      {[45, 52, 59].map((y) => (
        <g key={y}>
          <circle cx="41" cy={y} r="1.5" fill="#2a2a1e" />
          <circle cx="63" cy={y} r="1.5" fill="#2a2a1e" />
        </g>
      ))}
      <rect x="44" y="27" width="18" height="6" rx="2" fill="#1e4019" />
      <text x="53" y="32" fontSize="4.8" fill="#a8c890" fontWeight="bold" textAnchor="middle">GTX</text>
    </svg>
  );
}

function BackpackSVG() {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className="w-full h-full">
      <rect x="18" y="14" width="64" height="70" rx="11" fill="#5c4a32" stroke="#3d3120" strokeWidth="1.8" />
      <path
        d="M18 24 Q18 12 30 12 L70 12 Q82 12 82 24 L82 32 L18 32 Z"
        fill="#6b5840" stroke="#3d3120" strokeWidth="1.2"
      />
      <rect x="26" y="54" width="48" height="26" rx="6" fill="#4a3828" stroke="#3d3120" strokeWidth="1.2" />
      <path d="M31 54 Q50 50 69 54" fill="none" stroke="#8b7355" strokeWidth="1.8" />
      <circle cx="50" cy="52" r="2.8" fill="#c8b896" />
      <path d="M40 12 Q40 6 50 6 Q60 6 60 12" fill="none" stroke="#3d3120" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M24 32 Q21 64 23 82" fill="none" stroke="#3d3120" strokeWidth="5" strokeLinecap="round" />
      <path d="M76 32 Q79 64 77 82" fill="none" stroke="#3d3120" strokeWidth="5" strokeLinecap="round" />
      <line x1="18" y1="44" x2="10" y2="50" stroke="#3d3120" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="82" y1="44" x2="90" y2="50" stroke="#3d3120" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="9" y="34" width="11" height="27" rx="3.5" fill="#3d3120" stroke="#2a2018" strokeWidth="0.9" opacity="0.9" />
      <rect x="28" y="19" width="44" height="10" rx="3" fill="#2d5a27" />
      <text x="50" y="26" fontSize="5.5" fill="#a8c890" textAnchor="middle" fontWeight="bold">40L  BIO</text>
      <rect x="47" y="68" width="6" height="8" rx="3" fill="#8b7355" />
    </svg>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────

function ProductCard({
  illustration,
  name,
  price,
  tag,
  bg,
}: {
  illustration: React.ReactNode;
  name: string;
  price: string;
  tag: string;
  bg: string;
}) {
  return (
    <div
      className="flex flex-col rounded-sm overflow-hidden"
      style={{ background: "#faf7f2", border: "1px solid #ddd4bc" }}
    >
      {/* illustration tile */}
      <div
        className="relative flex-shrink-0"
        style={{ backgroundColor: bg, paddingBottom: "72%", position: "relative" }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-[10%]">
          {illustration}
        </div>
        {/* eco tag */}
        <div
          className="absolute top-2 left-2 px-[5px] py-[2px] rounded-sm"
          style={{ background: "rgba(30,64,25,0.82)" }}
        >
          <span
            className="text-[9px] font-bold uppercase tracking-[0.12em] leading-none"
            style={{ color: "#a8c890", fontFamily: "Georgia, serif" }}
          >
            {tag}
          </span>
        </div>
      </div>
      {/* label row */}
      <div className="px-3 pt-2 pb-3 flex flex-col gap-[6px]">
        <p
          className="text-[11px] font-semibold leading-tight text-[#1a2e18]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {name}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-[15px] font-black leading-none text-[#2d5a27]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {price}
          </span>
          <button
            className="text-[9px] font-bold uppercase tracking-[0.14em] leading-none px-[9px] py-[4px] rounded-sm"
            style={{ background: "#2d5a27", color: "#a8c890" }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Hairline rule ────────────────────────────────────────────────────────────

function Rule({ thick }: { thick?: boolean }) {
  return (
    <div
      className="w-full"
      style={{
        borderTop: thick ? "2px solid #2d5a27" : "0.75px solid #b8ad96",
      }}
    />
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HikingMagazine() {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{
        background: "#f2ede0",
        color: "#1e1e1a",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ══════════════════════════════════════════════════════════
          MASTHEAD  — full-width horizontal bar
      ══════════════════════════════════════════════════════════ */}
      <header className="flex-shrink-0" style={{ background: "#f2ede0" }}>
        {/* top hairline */}
        <div style={{ borderTop: "3px solid #2d5a27" }} />
        <div className="flex items-center justify-between px-8 py-[8px]">
          {/* left: issue meta */}
          <div className="flex items-center gap-4">
            <span
              className="text-[10px] uppercase tracking-[0.24em] font-bold"
              style={{ color: "#6b5e42", fontFamily: "Georgia, serif" }}
            >
              Issue&#x202F;04
            </span>
            <span style={{ color: "#b8ad96" }}>|</span>
            <span
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{ color: "#8a7e65" }}
            >
              Gear &amp; Terrain
            </span>
          </div>

          {/* centre: wordmark */}
          <div className="flex flex-col items-center gap-0">
            <div className="flex items-center gap-3">
              <Mountain size={16} style={{ color: "#2d5a27" }} />
              <h1
                className="text-[32px] font-black tracking-[0.28em] uppercase leading-none"
                style={{ color: "#1a2e18", fontFamily: "Georgia, serif", letterSpacing: "0.22em" }}
              >
                WILDLINE
              </h1>
              <Mountain size={16} style={{ color: "#2d5a27" }} />
            </div>
            <p
              className="text-[9px] uppercase tracking-[0.38em] leading-none mt-[3px]"
              style={{ color: "#6b8f5e", fontFamily: "Georgia, serif" }}
            >
              The Trail Journal
            </p>
          </div>

          {/* right: date + eco badge */}
          <div className="flex items-center gap-3">
            <span
              className="text-[10px] uppercase tracking-[0.18em]"
              style={{ color: "#8a7e65" }}
            >
              Jun&#x202F;2026
            </span>
            <span style={{ color: "#b8ad96" }}>|</span>
            <div className="flex items-center gap-[5px]">
              <Leaf size={10} style={{ color: "#6b8f5e" }} />
              <span
                className="text-[9px] font-bold uppercase tracking-[0.2em]"
                style={{ color: "#6b8f5e" }}
              >
                B&#x202F;Corp
              </span>
            </div>
          </div>
        </div>
        {/* double rule under masthead */}
        <div style={{ borderTop: "2px solid #2d5a27" }} />
        <div className="mt-[3px]" style={{ borderTop: "0.75px solid #2d5a27", opacity: 0.35 }} />
      </header>

      {/* ══════════════════════════════════════════════════════════
          MAIN BODY  — two major columns
      ══════════════════════════════════════════════════════════ */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* ─────────────────────────────────────────────────────
            LEFT COLUMN  — hero + editorial text  (60 %)
        ───────────────────────────────────────────────────── */}
        <div
          className="flex flex-col flex-shrink-0 overflow-hidden"
          style={{ width: "59%", borderRight: "1px solid #b8ad96" }}
        >
          {/* HERO IMAGE BLOCK */}
          <div className="relative flex-shrink-0 overflow-hidden" style={{ height: "44%" }}>
            <MountainScene />

            {/* gradient overlay — bottom fade */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 40%, rgba(18,36,16,0.72) 100%)",
              }}
            />

            {/* category kicker */}
            <div className="absolute top-5 left-6">
              <span
                className="text-[10px] font-bold uppercase tracking-[0.26em] leading-none px-[8px] py-[4px]"
                style={{
                  background: "#2d5a27",
                  color: "#a8c890",
                  fontFamily: "Georgia, serif",
                }}
              >
                Feature
              </span>
            </div>

            {/* headline overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
              <h2
                className="leading-[1.04] font-black"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "52px",
                  color: "#f8f4ec",
                  textShadow: "0 2px 18px rgba(0,0,0,0.55)",
                  letterSpacing: "-0.01em",
                }}
              >
                Into the&nbsp;Green
              </h2>
              {/* standfirst */}
              <p
                className="mt-[6px] leading-snug max-w-[420px]"
                style={{
                  fontSize: "13.5px",
                  color: "#c8e0b0",
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                }}
              >
                Where bio-based films meet alpine seam tape — and the mountains
                finally get the gear they deserve.
              </p>
              {/* byline */}
              <div className="flex items-center gap-2 mt-[8px]">
                <MapPin size={10} style={{ color: "#a8c890" }} />
                <span
                  className="text-[9.5px] uppercase tracking-[0.22em] font-bold"
                  style={{ color: "#a8c890", fontFamily: "Georgia, serif" }}
                >
                  By&nbsp;Maren Solberg &nbsp;·&nbsp; Cascade Range, 2,438 m
                </span>
              </div>
            </div>
          </div>

          {/* EDITORIAL BODY */}
          <div className="flex flex-1 min-h-0 overflow-hidden px-6 pt-4 pb-4 gap-6">
            {/* column 1 */}
            <div className="flex-1 min-w-0 flex flex-col gap-3">
              <Rule />
              <p
                className="leading-[1.65]"
                style={{ fontSize: "12px", color: "#3a3428" }}
              >
                <span
                  className="float-left mr-[3px] font-black leading-[0.82]"
                  style={{ fontSize: "46px", color: "#2d5a27", fontFamily: "Georgia, serif" }}
                >
                  T
                </span>
                he ridge line arrives before dawn. Light is still grey-green, the
                kind that soaks into wool and disappears. Three days deep into the
                Cascades and the shell still breathes — 86&#x202F;% recycled content,
                zero compromise on waterproofing. This is what responsible
                performance looks like.
              </p>
              <p
                className="leading-[1.65]"
                style={{ fontSize: "12px", color: "#3a3428" }}
              >
                Post-consumer fleece lines the collar; the face-fabric is spun from
                reclaimed ocean plastic. At 2,400 metres the wind has opinions, but
                the baffle construction holds. You stop noticing the jacket and start
                noticing the view.
              </p>
            </div>

            {/* pull-quote + column 2 */}
            <div className="flex-1 min-w-0 flex flex-col gap-3">
              <Rule />
              {/* pull-quote */}
              <blockquote
                className="relative pl-4 py-1"
                style={{ borderLeft: "3px solid #2d5a27" }}
              >
                <p
                  className="italic leading-[1.42] font-semibold"
                  style={{ fontSize: "15px", color: "#2d5a27", fontFamily: "Georgia, serif" }}
                >
                  &ldquo;You stop noticing the jacket and start noticing the view.&rdquo;
                </p>
                <cite
                  className="block mt-[5px] not-italic uppercase tracking-[0.2em]"
                  style={{ fontSize: "8.5px", color: "#8a7e65" }}
                >
                  — Maren Solberg
                </cite>
              </blockquote>
              <p
                className="leading-[1.65]"
                style={{ fontSize: "12px", color: "#3a3428" }}
              >
                Merino wool has been regulating temperature on high trails for
                centuries. The modern iteration — 18.5-micron superfine — pairs
                natural thermoregulation with a plant-based dye bath. Pack light;
                move fast; leave nothing but bootprints.
              </p>
              {/* stat callout */}
              <div
                className="flex items-center gap-3 rounded-sm px-4 py-3 mt-auto"
                style={{ background: "#2d5a27" }}
              >
                <div>
                  <p
                    className="font-black leading-none"
                    style={{ fontSize: "28px", color: "#fff", fontFamily: "Georgia, serif" }}
                  >
                    86<span style={{ fontSize: "16px" }}>%</span>
                  </p>
                  <p
                    className="uppercase tracking-[0.18em] leading-none mt-[2px]"
                    style={{ fontSize: "8px", color: "#a8c890" }}
                  >
                    Recycled content
                  </p>
                </div>
                <div style={{ width: "0.75px", background: "#4a7c40", alignSelf: "stretch" }} />
                <p
                  className="leading-snug"
                  style={{ fontSize: "10px", color: "#c8e0b0", fontStyle: "italic" }}
                >
                  Average across the full kit — highest in category, 2025&#x202F;audit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────
            RIGHT COLUMN  — shop the kit  (41 %)
        ───────────────────────────────────────────────────── */}
        <div
          className="flex flex-col flex-shrink-0 overflow-hidden"
          style={{ width: "41%", background: "#ede8d8" }}
        >
          {/* shop header */}
          <div
            className="flex-shrink-0 px-5 pt-4 pb-3"
            style={{ borderBottom: "2px solid #2d5a27" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={14} style={{ color: "#2d5a27" }} />
                <h3
                  className="font-black uppercase tracking-[0.22em] leading-none"
                  style={{ fontSize: "13px", color: "#1a2e18", fontFamily: "Georgia, serif" }}
                >
                  Shop&nbsp;the&nbsp;Kit
                </h3>
              </div>
              {/* kit total callout */}
              <div className="flex items-center gap-2">
                <span
                  className="text-[9px] uppercase tracking-[0.18em] font-bold px-[7px] py-[3px] rounded-sm"
                  style={{ border: "1px solid #2d5a27", color: "#2d5a27" }}
                >
                  4 pieces
                </span>
                <span
                  className="font-black leading-none px-[9px] py-[4px] rounded-sm"
                  style={{
                    background: "#2d5a27",
                    color: "#a8c890",
                    fontSize: "14px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  $645
                </span>
              </div>
            </div>
            <p
              className="mt-[5px] italic leading-tight"
              style={{ fontSize: "10.5px", color: "#6b5e42" }}
            >
              As tested on the Cascade High Route — certified sustainable, trail-ready.
            </p>
          </div>

          {/* product grid 2×2 */}
          <div className="flex-1 min-h-0 grid grid-cols-2 gap-3 p-4 overflow-hidden">
            <ProductCard
              illustration={<JacketSVG />}
              name="Recycled Shell Jacket"
              price="$210"
              tag="Eco Shell"
              bg="#cce0c0"
            />
            <ProductCard
              illustration={<MerinoSVG />}
              name="Merino Base Layer"
              price="$85"
              tag="Superfine"
              bg="#e0d4b8"
            />
            <ProductCard
              illustration={<ShoesSVG />}
              name="Trail Runner GTX"
              price="$160"
              tag="Waterproof"
              bg="#d4d0bc"
            />
            <ProductCard
              illustration={<BackpackSVG />}
              name="40L Bio-Pack"
              price="$190"
              tag="Biobased"
              bg="#d8c8a8"
            />
          </div>

          {/* kit total strip */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-5 py-3"
            style={{
              background: "linear-gradient(135deg, #1e4019 0%, #2d5a27 60%, #3a6b34 100%)",
              borderTop: "1px solid #163314",
            }}
          >
            <div className="flex items-center gap-3">
              <Leaf size={14} style={{ color: "#a8c890" }} />
              <div>
                <p
                  className="uppercase tracking-[0.2em] leading-none"
                  style={{ fontSize: "8px", color: "#a8c890" }}
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
            <div style={{ width: "0.75px", background: "#4a7c40", alignSelf: "stretch" }} />
            <div className="text-right">
              <p
                className="uppercase tracking-[0.16em] leading-none"
                style={{ fontSize: "8px", color: "#a8c890" }}
              >
                Leave No Trace certified
              </p>
              <p
                className="italic leading-tight mt-[3px]"
                style={{ fontSize: "10px", color: "#c8e0b0" }}
              >
                Ships carbon&#x2011;neutral worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          FOOTER BAR
      ══════════════════════════════════════════════════════════ */}
      <footer
        className="flex-shrink-0 flex items-center justify-between px-8 py-[6px]"
        style={{
          borderTop: "1.5px solid #b8ad96",
          background: "#ebe6d6",
        }}
      >
        <div className="flex items-center gap-2">
          <Mountain size={11} style={{ color: "#2d5a27" }} />
          <span
            className="font-black uppercase tracking-[0.26em]"
            style={{ fontSize: "10px", color: "#2d5a27", fontFamily: "Georgia, serif" }}
          >
            WILDLINE
          </span>
          <span
            className="uppercase tracking-[0.18em]"
            style={{ fontSize: "8.5px", color: "#8a7e65" }}
          >
            — The Trail Journal
          </span>
        </div>
        <span
          className="uppercase tracking-[0.18em]"
          style={{ fontSize: "8.5px", color: "#8a7e65" }}
        >
          wildline.co/shop
        </span>
        <span
          className="font-semibold"
          style={{ fontSize: "9px", color: "#8a7e65" }}
        >
          Pg.&#x202F;48
        </span>
      </footer>
    </div>
  );
}
