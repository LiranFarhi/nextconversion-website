/* ─────────────────────────────────────────────────────────────────────────────
   MAISON NOIR · Paris — Outerwear
   Ultra-minimal luxury lookbook. Canvas: 1180 × 720 CSS px (fills parent).
   All sub-components at module scope (react-hooks/static-components rule).
───────────────────────────────────────────────────────────────────────────── */

const serif: React.CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
};

/* ── LOOK 01 — The Wool Trench ─────────────────────────────────────────────
   Double-breasted, wide notch lapels, tie belt, epaulettes               */
const TrenchSVG = () => (
  <svg
    viewBox="0 0 140 240"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: "100%", height: "100%", display: "block" }}
  >
    {/* ── Body ── */}
    <path
      d="M35 34 L22 62 L20 140 L22 224 L118 224 L120 140 L118 62 L105 34 Z"
      fill="#7a6e63"
      stroke="#4e433a"
      strokeWidth="1.2"
    />
    {/* ── Left lapel ── */}
    <path
      d="M70 34 L35 34 L22 62 L52 78 L58 52 Z"
      fill="#6a5f56"
      stroke="#4e433a"
      strokeWidth="1"
    />
    {/* ── Right lapel ── */}
    <path
      d="M70 34 L105 34 L118 62 L88 78 L82 52 Z"
      fill="#6a5f56"
      stroke="#4e433a"
      strokeWidth="1"
    />
    {/* ── Collar stand ── */}
    <path
      d="M54 34 Q70 24 86 34"
      fill="none"
      stroke="#4e433a"
      strokeWidth="1.4"
    />
    {/* ── Left sleeve ── */}
    <path
      d="M20 66 L4 70 L3 170 L22 167 L22 66 Z"
      fill="#7a6e63"
      stroke="#4e433a"
      strokeWidth="1"
    />
    {/* ── Right sleeve ── */}
    <path
      d="M120 66 L136 70 L137 170 L118 167 L118 66 Z"
      fill="#7a6e63"
      stroke="#4e433a"
      strokeWidth="1"
    />
    {/* ── Epaulettes ── */}
    <rect x="14" y="60" width="12" height="5" rx="1" fill="#5a4f46" stroke="#4e433a" strokeWidth="0.6" />
    <rect x="114" y="60" width="12" height="5" rx="1" fill="#5a4f46" stroke="#4e433a" strokeWidth="0.6" />
    {/* ── Belt ── */}
    <rect x="16" y="128" width="108" height="9" rx="2.5" fill="#4e433a" />
    {/* ── Buckle ── */}
    <rect x="65" y="127" width="10" height="11" rx="1.5" fill="#c8b89a" stroke="#4e433a" strokeWidth="0.7" />
    <line x1="70" y1="127" x2="70" y2="138" stroke="#4e433a" strokeWidth="0.6" />
    {/* ── Double-breasted buttons left ── */}
    <circle cx="56" cy="96" r="2.8" fill="#c8b89a" stroke="#4e433a" strokeWidth="0.6" />
    <circle cx="56" cy="112" r="2.8" fill="#c8b89a" stroke="#4e433a" strokeWidth="0.6" />
    {/* ── Double-breasted buttons right ── */}
    <circle cx="84" cy="96" r="2.8" fill="#c8b89a" stroke="#4e433a" strokeWidth="0.6" />
    <circle cx="84" cy="112" r="2.8" fill="#c8b89a" stroke="#4e433a" strokeWidth="0.6" />
    {/* ── Center placket ── */}
    <rect x="66" y="78" width="8" height="146" fill="#5a4f46" opacity="0.6" />
    {/* ── Pocket flaps ── */}
    <path d="M26 158 Q42 161 58 158 L58 165 Q42 168 26 165 Z" fill="#6a5f56" stroke="#4e433a" strokeWidth="0.6" />
    <path d="M82 158 Q98 161 114 158 L114 165 Q98 168 82 165 Z" fill="#6a5f56" stroke="#4e433a" strokeWidth="0.6" />
    {/* ── Cuff detail ── */}
    <rect x="3" y="163" width="19" height="7" rx="1" fill="#6a5f56" stroke="#4e433a" strokeWidth="0.5" />
    <rect x="118" y="163" width="19" height="7" rx="1" fill="#6a5f56" stroke="#4e433a" strokeWidth="0.5" />
  </svg>
);

/* ── LOOK 02 — Cashmere Wrap ────────────────────────────────────────────────
   Fluid shawl collar, waterfall front panels, sash tie belt              */
const WrapSVG = () => (
  <svg
    viewBox="0 0 110 195"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: "100%", height: "100%", display: "block" }}
  >
    {/* ── Body back panel ── */}
    <path
      d="M28 26 L16 50 L14 118 L16 185 L94 185 L96 118 L94 50 L82 26 Z"
      fill="#d0c7b8"
      stroke="#9a9080"
      strokeWidth="1"
    />
    {/* ── Right wrap panel (over) ── */}
    <path
      d="M55 26 L82 26 L96 50 L72 88 L60 185 L46 185 Z"
      fill="#c8bfb0"
      stroke="#9a9080"
      strokeWidth="0.8"
    />
    {/* ── Left wrap panel (under) ── */}
    <path
      d="M55 26 L28 26 L16 50 L40 82 L50 185 L64 185 Z"
      fill="#bdb4a6"
      stroke="#9a9080"
      strokeWidth="0.8"
    />
    {/* ── Shawl collar left ── */}
    <path
      d="M55 26 L28 26 L20 44 L42 58 L52 44 Z"
      fill="#c2b9aa"
      stroke="#9a9080"
      strokeWidth="0.9"
    />
    {/* ── Shawl collar right ── */}
    <path
      d="M55 26 L82 26 L90 44 L68 58 L58 44 Z"
      fill="#c8bfb0"
      stroke="#9a9080"
      strokeWidth="0.9"
    />
    {/* ── Left sleeve ── */}
    <path
      d="M14 54 L0 60 L0 152 L16 148 L16 54 Z"
      fill="#d0c7b8"
      stroke="#9a9080"
      strokeWidth="0.8"
    />
    {/* ── Right sleeve ── */}
    <path
      d="M96 54 L110 60 L110 152 L94 148 L94 54 Z"
      fill="#d0c7b8"
      stroke="#9a9080"
      strokeWidth="0.8"
    />
    {/* ── Sash belt ── */}
    <path
      d="M18 106 Q55 112 92 106"
      fill="none"
      stroke="#9a9080"
      strokeWidth="5"
      strokeLinecap="round"
    />
    {/* ── Sash knot ── */}
    <ellipse cx="55" cy="108" rx="6" ry="5" fill="#887870" />
    {/* ── Sash trailing ends ── */}
    <path
      d="M49 113 Q44 132 40 150"
      stroke="#887870"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M61 113 Q66 132 70 148"
      stroke="#887870"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    />
    {/* ── Cuff detail ── */}
    <rect x="0" y="146" width="16" height="6" rx="1" fill="#bdb4a6" stroke="#9a9080" strokeWidth="0.5" />
    <rect x="94" y="146" width="16" height="6" rx="1" fill="#bdb4a6" stroke="#9a9080" strokeWidth="0.5" />
  </svg>
);

/* ── LOOK 03 — Belted Camel Coat ────────────────────────────────────────────
   Single-breasted, structured shoulder, cinched belt, large patch pockets */
const CamelSVG = () => (
  <svg
    viewBox="0 0 110 188"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: "100%", height: "100%", display: "block" }}
  >
    {/* ── Body ── */}
    <path
      d="M30 24 L18 48 L16 112 L18 178 L92 178 L94 112 L92 48 L80 24 Z"
      fill="#d4a96a"
      stroke="#9a6c30"
      strokeWidth="1.1"
    />
    {/* ── Left lapel ── */}
    <path
      d="M55 24 L30 24 L18 48 L46 64 L52 42 Z"
      fill="#c09858"
      stroke="#9a6c30"
      strokeWidth="0.9"
    />
    {/* ── Right lapel ── */}
    <path
      d="M55 24 L80 24 L92 48 L64 64 L58 42 Z"
      fill="#c09858"
      stroke="#9a6c30"
      strokeWidth="0.9"
    />
    {/* ── Collar ── */}
    <path
      d="M44 24 Q55 16 66 24"
      fill="none"
      stroke="#9a6c30"
      strokeWidth="1.3"
    />
    {/* ── Left sleeve ── */}
    <path
      d="M16 52 L2 56 L2 150 L18 147 L18 52 Z"
      fill="#d4a96a"
      stroke="#9a6c30"
      strokeWidth="0.9"
    />
    {/* ── Right sleeve ── */}
    <path
      d="M94 52 L108 56 L108 150 L92 147 L92 52 Z"
      fill="#d4a96a"
      stroke="#9a6c30"
      strokeWidth="0.9"
    />
    {/* ── Belt ── */}
    <rect x="12" y="104" width="86" height="10" rx="3" fill="#9a6c30" />
    {/* ── Buckle ── */}
    <rect x="50" y="103" width="10" height="12" rx="2" fill="#e0c890" stroke="#9a6c30" strokeWidth="0.6" />
    <line x1="55" y1="103" x2="55" y2="115" stroke="#9a6c30" strokeWidth="0.7" />
    {/* ── Button ── */}
    <circle cx="55" cy="80" r="3" fill="#e0c890" stroke="#9a6c30" strokeWidth="0.6" />
    <circle cx="55" cy="94" r="3" fill="#e0c890" stroke="#9a6c30" strokeWidth="0.6" />
    {/* ── Large patch pockets ── */}
    <rect x="18" y="128" width="28" height="34" rx="1.5" fill="#c09858" stroke="#9a6c30" strokeWidth="0.7" />
    <rect x="64" y="128" width="28" height="34" rx="1.5" fill="#c09858" stroke="#9a6c30" strokeWidth="0.7" />
    {/* ── Pocket flap top ── */}
    <path d="M18 134 Q32 137 46 134" fill="none" stroke="#9a6c30" strokeWidth="0.6" />
    <path d="M64 134 Q78 137 92 134" fill="none" stroke="#9a6c30" strokeWidth="0.6" />
    {/* ── Cuff buttons ── */}
    <circle cx="8" cy="148" r="2" fill="#e0c890" stroke="#9a6c30" strokeWidth="0.5" />
    <circle cx="102" cy="148" r="2" fill="#e0c890" stroke="#9a6c30" strokeWidth="0.5" />
  </svg>
);

/* ── LOOK 04 — Silk-Lined Overcoat ─────────────────────────────────────────
   Long lean silhouette, peaked lapels, three buttons, silk lining peek   */
const OvercoatSVG = () => (
  <svg
    viewBox="0 0 100 205"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ width: "100%", height: "100%", display: "block" }}
  >
    {/* ── Body ── */}
    <path
      d="M28 22 L18 44 L16 124 L18 196 L82 196 L84 124 L82 44 L72 22 Z"
      fill="#3c3b38"
      stroke="#1c1c1a"
      strokeWidth="1.1"
    />
    {/* ── Left peaked lapel ── */}
    <path
      d="M50 22 L28 22 L18 44 L40 58 L48 40 L52 30 Z"
      fill="#2c2b28"
      stroke="#1c1c1a"
      strokeWidth="0.9"
    />
    {/* ── Right peaked lapel ── */}
    <path
      d="M50 22 L72 22 L82 44 L60 58 L52 40 L48 30 Z"
      fill="#2c2b28"
      stroke="#1c1c1a"
      strokeWidth="0.9"
    />
    {/* ── Peak notch cuts ── */}
    <line x1="40" y1="58" x2="48" y2="40" stroke="#1c1c1a" strokeWidth="0.7" />
    <line x1="60" y1="58" x2="52" y2="40" stroke="#1c1c1a" strokeWidth="0.7" />
    {/* ── Collar ── */}
    <path
      d="M40 22 Q50 14 60 22"
      fill="none"
      stroke="#1c1c1a"
      strokeWidth="1.4"
    />
    {/* ── Left sleeve — long, narrow ── */}
    <path
      d="M16 48 L4 52 L4 165 L18 162 L18 48 Z"
      fill="#3c3b38"
      stroke="#1c1c1a"
      strokeWidth="0.8"
    />
    {/* ── Right sleeve ── */}
    <path
      d="M84 48 L96 52 L96 165 L82 162 L82 48 Z"
      fill="#3c3b38"
      stroke="#1c1c1a"
      strokeWidth="0.8"
    />
    {/* ── Silk lining at hem ── */}
    <path
      d="M18 188 L18 196 L82 196 L82 188 Z"
      fill="#8c7b6e"
    />
    {/* ── Silk lining at cuffs ── */}
    <rect x="4" y="158" width="14" height="7" rx="1" fill="#8c7b6e" />
    <rect x="82" y="158" width="14" height="7" rx="1" fill="#8c7b6e" />
    {/* ── Three buttons, single row ── */}
    <circle cx="50" cy="70" r="2.4" fill="#5c5b56" stroke="#1c1c1a" strokeWidth="0.5" />
    <circle cx="50" cy="86" r="2.4" fill="#5c5b56" stroke="#1c1c1a" strokeWidth="0.5" />
    <circle cx="50" cy="102" r="2.4" fill="#5c5b56" stroke="#1c1c1a" strokeWidth="0.5" />
    {/* ── Center seam ── */}
    <line x1="50" y1="58" x2="50" y2="196" stroke="#1c1c1a" strokeWidth="0.5" strokeDasharray="3,4" />
    {/* ── Welt pockets ── */}
    <rect x="20" y="130" width="22" height="3" rx="0.5" fill="#2c2b28" stroke="#1c1c1a" strokeWidth="0.4" />
    <rect x="58" y="130" width="22" height="3" rx="0.5" fill="#2c2b28" stroke="#1c1c1a" strokeWidth="0.4" />
  </svg>
);

/* ── Hairline Rule ───────────────────────────────────────────────────────── */
const HairlineRule = ({ className }: { className?: string }) => (
  <div className={`h-px bg-[#1a1a1a]/12 ${className ?? ""}`} />
);

/* ── Small Look Card (3-up row) ─────────────────────────────────────────── */
const SmallLookCard = ({
  lookNum,
  title,
  price,
  bg,
  labelColor,
  children,
}: {
  lookNum: string;
  title: string;
  price: string;
  bg: string;
  labelColor: string;
  children: React.ReactNode;
}) => (
  <div className="flex min-w-0 flex-1 flex-col">
    {/* Portrait image tile */}
    <div
      className="relative w-full flex-1 overflow-hidden"
      style={{ background: bg, minHeight: 0 }}
    >
      {/* Look number — top-left */}
      <span
        className="absolute left-3 top-2.5 z-10 text-[7px] font-light tracking-[0.32em]"
        style={{ ...serif, color: labelColor }}
      >
        {lookNum}
      </span>
      {/* Coat illustration — centered with generous padding */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ padding: "12% 14% 10% 14%" }}
      >
        {children}
      </div>
    </div>
    {/* Caption below tile */}
    <div className="shrink-0 px-1 pb-3 pt-3">
      <HairlineRule />
      <div className="mt-2.5 flex items-baseline justify-between">
        <p
          className="text-[8px] font-light leading-none tracking-[0.22em] text-[#1a1a1a]/55"
          style={serif}
        >
          {title.toUpperCase()}
        </p>
        <p
          className="text-[9px] font-light tracking-[0.1em] text-[#1a1a1a]/80"
          style={serif}
        >
          {price}
        </p>
      </div>
      <button
        type="button"
        className="mt-2 border-b border-[#1a1a1a]/20 pb-px text-[6.5px] font-light tracking-[0.24em] text-[#1a1a1a]/40 transition-colors hover:text-[#1a1a1a]/70"
        style={serif}
      >
        ENQUIRE
      </button>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════════════ */
export default function LuxuryLookbook() {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{ background: "#f4f2ee", ...serif }}
    >

      {/* ════════════════════════════════════════════════════════════
          HEADER — wordmark + sparse nav
      ════════════════════════════════════════════════════════════ */}
      <header className="shrink-0 px-10 pt-5 pb-0">
        {/* Top micro-line: location tag left, season right */}
        <div className="flex items-center justify-between pb-3">
          <span
            className="text-[7px] font-light tracking-[0.36em] text-[#1a1a1a]/35"
            style={serif}
          >
            PARIS
          </span>
          <span
            className="text-[7px] font-light tracking-[0.36em] text-[#1a1a1a]/35"
            style={serif}
          >
            AW COLLECTION
          </span>
        </div>

        <HairlineRule />

        {/* Main header row: nav left · wordmark center · cta right */}
        <div className="mt-3 flex items-baseline justify-between">
          <nav className="flex items-center gap-7">
            {["Collection", "Atelier", "Appointment"].map((item) => (
              <span
                key={item}
                className="cursor-pointer text-[8px] font-light tracking-[0.26em] text-[#1a1a1a]/50 transition-colors hover:text-[#1a1a1a]"
                style={serif}
              >
                {item.toUpperCase()}
              </span>
            ))}
          </nav>

          {/* Wordmark — absolutely dominant center piece */}
          <div className="flex flex-col items-center" style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}>
            <h1
              className="text-[22px] font-light tracking-[0.55em] text-[#1a1a1a]"
              style={serif}
            >
              MAISON NOIR
            </h1>
            <p
              className="mt-0.5 text-[7.5px] font-light tracking-[0.42em] text-[#1a1a1a]/40"
              style={serif}
            >
              OUTERWEAR &nbsp;&middot;&nbsp; PARIS
            </p>
          </div>

          {/* Right CTA — ghost link */}
          <span
            className="cursor-pointer border-b border-[#1a1a1a]/25 pb-px text-[7.5px] font-light tracking-[0.26em] text-[#1a1a1a]/45"
            style={serif}
          >
            REQUEST LOOK BOOK
          </span>
        </div>
        <div className="mt-3" />
        <HairlineRule />
      </header>

      {/* ════════════════════════════════════════════════════════════
          BODY — editorial asymmetric grid
          Left: tall hero LOOK 01 (3/5 width)
          Right: editorial copy + 3-up look row
      ════════════════════════════════════════════════════════════ */}
      <div className="flex min-h-0 flex-1 gap-0 overflow-hidden">

        {/* ── LEFT: Hero portrait tile ──────────────────────────── */}
        <div
          className="relative shrink-0 overflow-hidden"
          style={{
            width: "38%",
            background: "linear-gradient(168deg, #e8e2da 0%, #d4ccc2 42%, #bdb6ac 78%, #a8a09a 100%)",
          }}
        >
          {/* Coat illustration, tall and breathing */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ padding: "8% 22% 14% 22%" }}
          >
            <TrenchSVG />
          </div>

          {/* Season label — vertical rotated, left edge */}
          <div
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "center center", whiteSpace: "nowrap" }}
          >
            <span
              className="text-[7px] font-light tracking-[0.38em] text-[#3a3530]/40"
              style={serif}
            >
              AUTUMN · WINTER
            </span>
          </div>

          {/* Bottom caption — dark scrim overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-6 pb-6 pt-16"
            style={{
              background:
                "linear-gradient(to top, rgba(20,18,16,0.68) 0%, rgba(20,18,16,0.22) 65%, transparent 100%)",
            }}
          >
            <p
              className="text-[7px] font-light tracking-[0.38em] text-[#f4f2ee]/60"
              style={serif}
            >
              LOOK 01
            </p>
            <p
              className="mt-1 text-[15px] font-light tracking-[0.18em] text-[#f4f2ee]"
              style={serif}
            >
              The Wool Trench
            </p>
            <div
              className="my-3 h-px w-10 bg-[#f4f2ee]/30"
            />
            <div className="flex items-end justify-between">
              <div>
                <p
                  className="text-[12px] font-light tracking-[0.14em] text-[#f4f2ee]/90"
                  style={serif}
                >
                  EUR 890
                </p>
                <p
                  className="mt-0.5 text-[7px] font-light tracking-[0.2em] text-[#f4f2ee]/50"
                  style={serif}
                >
                  Double-faced virgin wool
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <button
                  type="button"
                  className="border-b border-[#f4f2ee]/35 pb-px text-[6.5px] font-light tracking-[0.24em] text-[#f4f2ee]/60"
                  style={serif}
                >
                  ADD TO LOOK
                </button>
                <button
                  type="button"
                  className="border-b border-[#f4f2ee]/35 pb-px text-[6.5px] font-light tracking-[0.24em] text-[#f4f2ee]/60"
                  style={serif}
                >
                  ENQUIRE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Editorial panel ────────────────────────────── */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">

          {/* ── Editorial text block ──────────────────────────── */}
          <div className="shrink-0 px-8 py-5">
            <p
              className="max-w-xs text-[8px] font-light leading-[1.9] tracking-[0.16em] text-[#1a1a1a]/40"
              style={serif}
            >
              A study in restraint. Each piece considered over years, each seam
              resolved through the precision of the atelier. Outerwear as
              architecture — form that carries weight long after the season
              passes.
            </p>
          </div>

          {/* Divider with label */}
          <div className="mx-8 flex shrink-0 items-center gap-4">
            <HairlineRule className="flex-1" />
            <span
              className="shrink-0 text-[6.5px] font-light tracking-[0.36em] text-[#1a1a1a]/30"
              style={serif}
            >
              THE COLLECTION
            </span>
            <HairlineRule className="flex-1" />
          </div>

          {/* ── 3-up look tiles ────────────────────────────────── */}
          <div className="flex min-h-0 flex-1 gap-0 overflow-hidden px-6 pt-4">

            <SmallLookCard
              lookNum="LOOK 02"
              title="Cashmere Wrap"
              price="EUR 1,240"
              bg="linear-gradient(158deg, #e2dcd3 0%, #cec5ba 50%, #b8afa4 100%)"
              labelColor="rgba(50,45,40,0.45)"
            >
              <WrapSVG />
            </SmallLookCard>

            {/* Vertical divider */}
            <div className="mx-3 mt-0 w-px shrink-0 bg-[#1a1a1a]/8" />

            <SmallLookCard
              lookNum="LOOK 03"
              title="Belted Camel Coat"
              price="EUR 1,090"
              bg="linear-gradient(158deg, #eedfc6 0%, #d8be96 50%, #c0a070 100%)"
              labelColor="rgba(70,45,18,0.45)"
            >
              <CamelSVG />
            </SmallLookCard>

            {/* Vertical divider */}
            <div className="mx-3 mt-0 w-px shrink-0 bg-[#1a1a1a]/8" />

            <SmallLookCard
              lookNum="LOOK 04"
              title="Silk-Lined Overcoat"
              price="EUR 1,460"
              bg="linear-gradient(158deg, #d0cdc8 0%, #9a9894 50%, #585653 100%)"
              labelColor="rgba(240,236,230,0.55)"
            >
              <OvercoatSVG />
            </SmallLookCard>

          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          FOOTER — hairline + sparse info line
      ════════════════════════════════════════════════════════════ */}
      <footer className="shrink-0 px-10 pb-4 pt-0">
        <HairlineRule />
        <div className="mt-2.5 flex items-center justify-between">
          <p
            className="text-[6.5px] font-light tracking-[0.28em] text-[#1a1a1a]/30"
            style={serif}
          >
            COMPLIMENTARY SHIPPING &amp; RETURNS
          </p>
          <p
            className="text-[6.5px] font-light tracking-[0.28em] text-[#1a1a1a]/30"
            style={serif}
          >
            PERSONAL STYLING &nbsp;&middot;&nbsp; BY APPOINTMENT
          </p>
          <p
            className="text-[6.5px] font-light tracking-[0.28em] text-[#1a1a1a]/30"
            style={serif}
          >
            &copy; MAISON NOIR PARIS
          </p>
        </div>
      </footer>

    </div>
  );
}
