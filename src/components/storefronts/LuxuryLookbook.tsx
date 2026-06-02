/* ── Inline SVG coat illustrations (module scope: stable component identities) ── */

/* LOOK 01 — Wool Trench: double-breasted with wide lapels and a tie belt */
const TrenchSVG = () => (
    <svg
      viewBox="0 0 120 200"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {/* Body */}
      <path
        d="M30 30 L20 50 L18 110 L20 180 L100 180 L102 110 L100 50 L90 30 Z"
        fill="#6b6055"
        stroke="#4a3f35"
        strokeWidth="1"
      />
      {/* Left lapel */}
      <path d="M60 30 L30 30 L20 50 L46 62 Z" fill="#5a4f46" stroke="#4a3f35" strokeWidth="0.8" />
      {/* Right lapel */}
      <path d="M60 30 L90 30 L100 50 L74 62 Z" fill="#5a4f46" stroke="#4a3f35" strokeWidth="0.8" />
      {/* Center placket / overlap */}
      <rect x="55" y="62" width="10" height="118" fill="#5a4f46" />
      {/* Left sleeve */}
      <path d="M18 55 L6 58 L4 140 L20 138 L20 55 Z" fill="#6b6055" stroke="#4a3f35" strokeWidth="0.8" />
      {/* Right sleeve */}
      <path d="M102 55 L114 58 L116 140 L100 138 L100 55 Z" fill="#6b6055" stroke="#4a3f35" strokeWidth="0.8" />
      {/* Belt */}
      <rect x="14" y="100" width="92" height="7" rx="2" fill="#4a3f35" />
      {/* Belt buckle */}
      <rect x="56" y="99" width="8" height="9" rx="1" fill="#c4b49a" stroke="#4a3f35" strokeWidth="0.5" />
      {/* Buttons left row */}
      <circle cx="50" cy="75" r="2" fill="#c4b49a" />
      <circle cx="50" cy="88" r="2" fill="#c4b49a" />
      {/* Buttons right row */}
      <circle cx="70" cy="75" r="2" fill="#c4b49a" />
      <circle cx="70" cy="88" r="2" fill="#c4b49a" />
      {/* Shoulder seams */}
      <line x1="20" y1="36" x2="30" y2="30" stroke="#4a3f35" strokeWidth="0.6" />
      <line x1="100" y1="36" x2="90" y2="30" stroke="#4a3f35" strokeWidth="0.6" />
      {/* Collar stand */}
      <path d="M46 30 Q60 22 74 30" fill="none" stroke="#4a3f35" strokeWidth="1.2" />
    </svg>
  );

/* LOOK 02 — Cashmere Wrap: fluid wrap silhouette with waterfall front */
const WrapSVG = () => (
    <svg
      viewBox="0 0 100 175"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {/* Body */}
      <path
        d="M26 24 L16 45 L14 105 L16 168 L84 168 L86 105 L84 45 L74 24 Z"
        fill="#c8bfb0"
        stroke="#a09080"
        strokeWidth="1"
      />
      {/* Wrap left front panel */}
      <path d="M50 24 L26 24 L16 45 L38 80 L52 168 L62 168 Z" fill="#bdb3a4" stroke="#a09080" strokeWidth="0.7" />
      {/* Wrap right front panel — overlaps */}
      <path d="M50 24 L74 24 L84 45 L64 75 L56 168 L46 168 Z" fill="#c8bfb0" stroke="#a09080" strokeWidth="0.7" />
      {/* Left sleeve — wide fluid */}
      <path d="M16 48 L2 55 L2 138 L17 135 L17 48 Z" fill="#c8bfb0" stroke="#a09080" strokeWidth="0.7" />
      {/* Right sleeve */}
      <path d="M84 48 L98 55 L98 138 L83 135 L83 48 Z" fill="#c8bfb0" stroke="#a09080" strokeWidth="0.7" />
      {/* Tie belt */}
      <path d="M20 95 Q50 100 80 95" fill="none" stroke="#a09080" strokeWidth="4" strokeLinecap="round" />
      {/* Tie knot */}
      <ellipse cx="50" cy="96" rx="5" ry="4" fill="#9a8878" />
      {/* Trailing tie ends */}
      <path d="M45 100 Q40 115 36 130" stroke="#9a8878" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M55 100 Q60 115 64 130" stroke="#9a8878" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Shawl collar fold left */}
      <path d="M50 24 L26 24 L22 38 L44 52" fill="none" stroke="#a09080" strokeWidth="1" />
      {/* Shawl collar fold right */}
      <path d="M50 24 L74 24 L78 38 L56 52" fill="none" stroke="#a09080" strokeWidth="1" />
    </svg>
  );

/* LOOK 03 — Belted Camel Coat: structured single-breasted with cinched belt */
const CamelSVG = () => (
    <svg
      viewBox="0 0 100 170"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {/* Body */}
      <path
        d="M28 22 L18 42 L16 100 L18 162 L82 162 L84 100 L82 42 L72 22 Z"
        fill="#c8a87a"
        stroke="#a07840"
        strokeWidth="1"
      />
      {/* Left lapel */}
      <path d="M50 22 L28 22 L18 42 L42 56 Z" fill="#b89468" stroke="#a07840" strokeWidth="0.8" />
      {/* Right lapel */}
      <path d="M50 22 L72 22 L82 42 L58 56 Z" fill="#b89468" stroke="#a07840" strokeWidth="0.8" />
      {/* Left sleeve */}
      <path d="M16 46 L4 50 L4 135 L18 132 L18 46 Z" fill="#c8a87a" stroke="#a07840" strokeWidth="0.7" />
      {/* Right sleeve */}
      <path d="M84 46 L96 50 L96 135 L82 132 L82 46 Z" fill="#c8a87a" stroke="#a07840" strokeWidth="0.7" />
      {/* Belt */}
      <rect x="12" y="92" width="76" height="8" rx="2" fill="#a07840" />
      {/* Buckle */}
      <rect x="46" y="91" width="8" height="10" rx="1.5" fill="#d4b896" stroke="#a07840" strokeWidth="0.5" />
      {/* Buttons */}
      <circle cx="50" cy="68" r="2.2" fill="#d4b896" stroke="#a07840" strokeWidth="0.5" />
      <circle cx="50" cy="80" r="2.2" fill="#d4b896" stroke="#a07840" strokeWidth="0.5" />
      {/* Pocket flaps */}
      <path d="M20 118 Q30 120 40 118 L40 124 Q30 126 20 124 Z" fill="#b89468" stroke="#a07840" strokeWidth="0.5" />
      <path d="M60 118 Q70 120 80 118 L80 124 Q70 126 60 124 Z" fill="#b89468" stroke="#a07840" strokeWidth="0.5" />
      {/* Collar */}
      <path d="M42 22 Q50 15 58 22" fill="none" stroke="#a07840" strokeWidth="1.2" />
    </svg>
  );

/* LOOK 04 — Silk-Lined Overcoat: long lean silhouette, notch collar */
const OvercoatSVG = () => (
    <svg
      viewBox="0 0 90 185"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      {/* Body */}
      <path
        d="M26 20 L18 40 L16 110 L18 178 L72 178 L74 110 L72 40 L64 20 Z"
        fill="#3d3c3a"
        stroke="#1e1e1c"
        strokeWidth="1"
      />
      {/* Left lapel — notch */}
      <path d="M45 20 L26 20 L18 40 L38 52 L44 38 Z" fill="#2e2d2b" stroke="#1e1e1c" strokeWidth="0.8" />
      {/* Right lapel — notch */}
      <path d="M45 20 L64 20 L72 40 L52 52 L46 38 Z" fill="#2e2d2b" stroke="#1e1e1c" strokeWidth="0.8" />
      {/* Notch cut */}
      <path d="M38 52 L44 38 L45 20" fill="none" stroke="#1e1e1c" strokeWidth="0.6" />
      <path d="M52 52 L46 38 L45 20" fill="none" stroke="#1e1e1c" strokeWidth="0.6" />
      {/* Left sleeve — long narrow */}
      <path d="M16 44 L5 48 L5 148 L18 146 L18 44 Z" fill="#3d3c3a" stroke="#1e1e1c" strokeWidth="0.7" />
      {/* Right sleeve */}
      <path d="M74 44 L85 48 L85 148 L72 146 L72 44 Z" fill="#3d3c3a" stroke="#1e1e1c" strokeWidth="0.7" />
      {/* Silk lining peek at hem */}
      <path d="M18 170 L18 178 L72 178 L72 170 Z" fill="#8c7b6e" />
      {/* Silk lining peek at sleeve cuff */}
      <rect x="5" y="141" width="13" height="7" rx="1" fill="#8c7b6e" />
      <rect x="72" y="141" width="13" height="7" rx="1" fill="#8c7b6e" />
      {/* Buttons — single row */}
      <circle cx="45" cy="64" r="2" fill="#6e6b66" stroke="#1e1e1c" strokeWidth="0.4" />
      <circle cx="45" cy="78" r="2" fill="#6e6b66" stroke="#1e1e1c" strokeWidth="0.4" />
      <circle cx="45" cy="92" r="2" fill="#6e6b66" stroke="#1e1e1c" strokeWidth="0.4" />
      {/* Center seam */}
      <line x1="45" y1="52" x2="45" y2="178" stroke="#1e1e1c" strokeWidth="0.5" strokeDasharray="2,3" />
      {/* Collar stand */}
      <path d="M38 20 Q45 12 52 20" fill="none" stroke="#1e1e1c" strokeWidth="1.2" />
    </svg>
  );

const serifStyle = {
  fontFamily: "Georgia, 'Times New Roman', serif",
} as const;

export default function LuxuryLookbook() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f5f3ef]">

      {/* ── Wordmark Header ── */}
      <header className="shrink-0 flex flex-col items-center px-5 pt-3 pb-0">
        <p
          className="text-[11px] font-light tracking-[0.45em] text-[#1a1a1a]"
          style={serifStyle}
        >
          MAISON NOIR
        </p>
        <p
          className="mt-0.5 text-[7px] font-light tracking-[0.28em] text-[#1a1a1a]/45"
          style={serifStyle}
        >
          PARIS &middot; OUTERWEAR
        </p>
        <div className="mt-2 h-px w-full bg-[#1a1a1a]/18" />
        <nav className="mt-1.5 flex gap-4">
          {["COLLECTION", "ATELIER", "APPOINTMENT"].map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              <span
                className="text-[7.5px] font-light tracking-[0.22em] text-[#1a1a1a]/55"
                style={serifStyle}
              >
                {item}
              </span>
              {i < 2 && (
                <span className="text-[7px] text-[#1a1a1a]/25">&middot;</span>
              )}
            </span>
          ))}
        </nav>
      </header>

      {/* ── Hero: LOOK 01 — The Wool Trench ── */}
      {/* Portrait tile: coat fills most of the frame, caption sits at bottom */}
      <div
        className="relative mx-4 mt-2.5 shrink-0 overflow-hidden rounded-sm"
        style={{
          background: "linear-gradient(160deg, #ede9e3 0%, #d6cfc6 50%, #c0b8ae 100%)",
          aspectRatio: "3/4",
          maxHeight: "42%",
        }}
      >
        {/* Coat illustration — generous vertical space */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ padding: "6% 28% 16% 28%" }}
        >
          <TrenchSVG />
        </div>

        {/* Season tag top-left */}
        <p
          className="absolute top-2.5 left-3 text-[7px] font-light tracking-[0.28em] text-[#3a3530]/55"
          style={serifStyle}
        >
          AW COLLECTION
        </p>

        {/* Bottom caption bar with gradient scrim */}
        <div
          className="absolute bottom-0 left-0 right-0 px-3 pb-2.5 pt-6"
          style={{
            background: "linear-gradient(to top, rgba(28,26,24,0.62) 0%, rgba(28,26,24,0.18) 70%, transparent 100%)",
          }}
        >
          <div className="flex items-end justify-between">
            <div>
              <p
                className="text-[7px] font-light tracking-[0.3em] text-[#f5f3ef]/70"
                style={serifStyle}
              >
                LOOK 01
              </p>
              <p
                className="mt-0.5 text-[9.5px] font-light tracking-[0.18em] text-[#f5f3ef]"
                style={serifStyle}
              >
                The Wool Trench
              </p>
            </div>
            <div className="text-right">
              <p
                className="text-[10px] font-light tracking-[0.14em] text-[#f5f3ef]"
                style={serifStyle}
              >
                EUR 890
              </p>
              <div className="mt-1 flex justify-end items-center gap-1.5">
                <button
                  type="button"
                  className="border-b border-[#f5f3ef]/40 pb-px text-[6.5px] font-light tracking-[0.2em] text-[#f5f3ef]/65"
                  style={serifStyle}
                >
                  ADD TO LOOK
                </button>
                <span className="text-[6px] text-[#f5f3ef]/30">/</span>
                <button
                  type="button"
                  className="border-b border-[#f5f3ef]/40 pb-px text-[6.5px] font-light tracking-[0.2em] text-[#f5f3ef]/65"
                  style={serifStyle}
                >
                  ENQUIRE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section Divider ── */}
      <div className="mx-4 mt-2.5 flex shrink-0 items-center gap-3">
        <div className="h-px flex-1 bg-[#1a1a1a]/14" />
        <p
          className="text-[7px] font-light tracking-[0.32em] text-[#1a1a1a]/40"
          style={serifStyle}
        >
          THE COLLECTION
        </p>
        <div className="h-px flex-1 bg-[#1a1a1a]/14" />
      </div>

      {/* ── 3-Up Coat Tiles ── */}
      <div className="mx-4 mt-2 flex flex-1 gap-2 overflow-hidden pb-3 min-h-0">

        {/* LOOK 02 — Cashmere Wrap */}
        <div className="flex flex-1 flex-col overflow-hidden min-w-0">
          {/* Coat tile — aspect-ratio box that scales with column width */}
          <div
            className="relative w-full shrink-0 overflow-hidden rounded-sm"
            style={{
              background: "linear-gradient(155deg, #e4ddd4 0%, #cec4b8 55%, #b8ad9f 100%)",
              aspectRatio: "2/3",
            }}
          >
            <div
              className="absolute inset-0 flex items-end justify-center"
              style={{ padding: "8% 10% 4% 10%" }}
            >
              <WrapSVG />
            </div>
            <p
              className="absolute top-1.5 left-0 right-0 text-center text-[6px] font-light tracking-[0.28em] text-[#3a3530]/50"
              style={serifStyle}
            >
              LOOK 02
            </p>
          </div>
          {/* Label below tile */}
          <div className="shrink-0 pt-1.5 pb-1">
            <p
              className="text-center text-[6.5px] font-light leading-snug tracking-[0.18em] text-[#1a1a1a]/60"
              style={serifStyle}
            >
              CASHMERE WRAP
            </p>
            <p
              className="mt-0.5 text-center text-[8px] font-light tracking-[0.12em] text-[#1a1a1a]"
              style={serifStyle}
            >
              EUR 1,240
            </p>
            <div className="mt-1 flex justify-center">
              <button
                type="button"
                className="border-b border-[#1a1a1a]/28 pb-px text-[6px] font-light tracking-[0.2em] text-[#1a1a1a]/50"
                style={serifStyle}
              >
                ENQUIRE
              </button>
            </div>
          </div>
        </div>

        {/* LOOK 03 — Belted Camel Coat */}
        <div className="flex flex-1 flex-col overflow-hidden min-w-0">
          <div
            className="relative w-full shrink-0 overflow-hidden rounded-sm"
            style={{
              background: "linear-gradient(155deg, #e8dbc8 0%, #d4c0a0 55%, #b89870 100%)",
              aspectRatio: "2/3",
            }}
          >
            <div
              className="absolute inset-0 flex items-end justify-center"
              style={{ padding: "8% 8% 4% 8%" }}
            >
              <CamelSVG />
            </div>
            <p
              className="absolute top-1.5 left-0 right-0 text-center text-[6px] font-light tracking-[0.28em] text-[#5a3e20]/50"
              style={serifStyle}
            >
              LOOK 03
            </p>
          </div>
          <div className="shrink-0 pt-1.5 pb-1">
            <p
              className="text-center text-[6.5px] font-light leading-snug tracking-[0.18em] text-[#1a1a1a]/60"
              style={serifStyle}
            >
              BELTED CAMEL
            </p>
            <p
              className="mt-0.5 text-center text-[8px] font-light tracking-[0.12em] text-[#1a1a1a]"
              style={serifStyle}
            >
              EUR 1,090
            </p>
            <div className="mt-1 flex justify-center">
              <button
                type="button"
                className="border-b border-[#1a1a1a]/28 pb-px text-[6px] font-light tracking-[0.2em] text-[#1a1a1a]/50"
                style={serifStyle}
              >
                ENQUIRE
              </button>
            </div>
          </div>
        </div>

        {/* LOOK 04 — Silk-Lined Overcoat */}
        <div className="flex flex-1 flex-col overflow-hidden min-w-0">
          <div
            className="relative w-full shrink-0 overflow-hidden rounded-sm"
            style={{
              background: "linear-gradient(155deg, #ccc9c4 0%, #989490 55%, #5a5855 100%)",
              aspectRatio: "2/3",
            }}
          >
            <div
              className="absolute inset-0 flex items-end justify-center"
              style={{ padding: "8% 12% 4% 12%" }}
            >
              <OvercoatSVG />
            </div>
            <p
              className="absolute top-1.5 left-0 right-0 text-center text-[6px] font-light tracking-[0.28em] text-[#f5f3ef]/55"
              style={serifStyle}
            >
              LOOK 04
            </p>
          </div>
          <div className="shrink-0 pt-1.5 pb-1">
            <p
              className="text-center text-[6.5px] font-light leading-snug tracking-[0.18em] text-[#1a1a1a]/60"
              style={serifStyle}
            >
              SILK-LINED COAT
            </p>
            <p
              className="mt-0.5 text-center text-[8px] font-light tracking-[0.12em] text-[#1a1a1a]"
              style={serifStyle}
            >
              EUR 1,460
            </p>
            <div className="mt-1 flex justify-center">
              <button
                type="button"
                className="border-b border-[#1a1a1a]/28 pb-px text-[6px] font-light tracking-[0.2em] text-[#1a1a1a]/50"
                style={serifStyle}
              >
                ENQUIRE
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* ── Footer ── */}
      <footer className="shrink-0 px-4 pt-0 pb-2.5">
        <div className="h-px w-full bg-[#1a1a1a]/14" />
        <p
          className="mt-1.5 text-center text-[7px] font-light tracking-[0.22em] text-[#1a1a1a]/40"
          style={serifStyle}
        >
          Complimentary shipping &amp; returns &mdash; Personal styling
        </p>
      </footer>

    </div>
  );
}
