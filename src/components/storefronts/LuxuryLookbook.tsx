/* ─────────────────────────────────────────────────────────────────────────────
   MAISON NOIR · Paris — Outerwear Lookbook
   High-end luxury editorial. Canvas: 1180 × 720 CSS px (fills parent).
   All sub-components at module scope (react-hooks/static-components rule).
───────────────────────────────────────────────────────────────────────────── */
import type { ReactElement, ReactNode, CSSProperties } from "react";

const serif: CSSProperties = {
  fontFamily: "Georgia, 'Times New Roman', serif",
};

/* ══════════════════════════════════════════════════════════════════════════════
   COAT SVGs — rendered with layered gradients, fabric shading, cast shadows
   to evoke studio editorial photography rather than flat illustration
══════════════════════════════════════════════════════════════════════════════ */

/* ── LOOK 01 — The Wool Trench ─────────────────────────────────────────────
   Double-breasted, wide notch lapels, tie belt, epaulettes
   Colour: warm greige wool — photographed under soft studio key light       */
function TrenchSVG(): ReactElement {
  return (
    <svg
      viewBox="0 0 200 340"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        {/* Studio backdrop — seamless warm grey gradient */}
        <radialGradient id="t-bg" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#e8e4dd" />
          <stop offset="100%" stopColor="#c8c2b8" />
        </radialGradient>
        {/* Body fabric — lit from upper-left */}
        <linearGradient id="t-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a8e82" />
          <stop offset="30%" stopColor="#7e7268" />
          <stop offset="70%" stopColor="#6c6158" />
          <stop offset="100%" stopColor="#574d45" />
        </linearGradient>
        {/* Left sleeve — lit */}
        <linearGradient id="t-slv-l" x1="100%" y1="0%" x2="0%" y2="60%">
          <stop offset="0%" stopColor="#8a7e72" />
          <stop offset="100%" stopColor="#4e4540" />
        </linearGradient>
        {/* Right sleeve — shadow side */}
        <linearGradient id="t-slv-r" x1="0%" y1="0%" x2="100%" y2="60%">
          <stop offset="0%" stopColor="#6a5f56" />
          <stop offset="100%" stopColor="#3e3530" />
        </linearGradient>
        {/* Lapel highlight */}
        <linearGradient id="t-lapel-l" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8c8076" />
          <stop offset="100%" stopColor="#5c524a" />
        </linearGradient>
        <linearGradient id="t-lapel-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6e6460" />
          <stop offset="100%" stopColor="#4a4038" />
        </linearGradient>
        {/* Belt gradient */}
        <linearGradient id="t-belt" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a3028" />
          <stop offset="50%" stopColor="#2c2420" />
          <stop offset="100%" stopColor="#3a3028" />
        </linearGradient>
        {/* Cast shadow beneath coat */}
        <radialGradient id="t-shadow" cx="50%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#5a5048" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#5a5048" stopOpacity="0" />
        </radialGradient>
        {/* Subtle fabric grain overlay */}
        <filter id="t-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
          <feBlend in="SourceGraphic" in2="gray" mode="multiply" result="blend" />
          <feComponentTransfer in="blend">
            <feFuncA type="linear" slope="1" />
          </feComponentTransfer>
        </filter>
        <filter id="t-soft">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      {/* Studio backdrop */}
      <rect width="200" height="340" fill="url(#t-bg)" />

      {/* Soft floor/base shadow vignette */}
      <ellipse cx="100" cy="310" rx="72" ry="16" fill="url(#t-shadow)" />

      {/* Cast shadow from coat body */}
      <path
        d="M48 290 Q100 308 152 290 L156 320 Q100 332 44 320 Z"
        fill="#4a4038"
        opacity="0.12"
        filter="url(#t-soft)"
      />

      {/* ── LEFT SLEEVE ── */}
      <path
        d="M48 84 L26 92 L22 240 L46 236 L48 84 Z"
        fill="url(#t-slv-l)"
        stroke="#3a3028"
        strokeWidth="0.8"
      />
      {/* Sleeve shadow crease */}
      <path d="M36 110 Q30 160 28 210" stroke="#3a3028" strokeWidth="0.5" fill="none" opacity="0.4" />
      {/* Cuff */}
      <path d="M23 232 L22 240 L46 236 L46 228 Z" fill="#6a5e54" stroke="#3a3028" strokeWidth="0.6" />

      {/* ── RIGHT SLEEVE ── */}
      <path
        d="M152 84 L174 92 L178 240 L154 236 L152 84 Z"
        fill="url(#t-slv-r)"
        stroke="#3a3028"
        strokeWidth="0.8"
      />
      <path d="M164 110 Q170 160 172 210" stroke="#1c1814" strokeWidth="0.5" fill="none" opacity="0.35" />
      <path d="M177 232 L178 240 L154 236 L154 228 Z" fill="#4e4440" stroke="#3a3028" strokeWidth="0.6" />

      {/* ── BODY ── */}
      <path
        d="M52 64 L36 96 L32 188 L36 300 L164 300 L168 188 L164 96 L148 64 Z"
        fill="url(#t-body)"
        stroke="#3a3028"
        strokeWidth="1"
      />

      {/* Body light catch — upper center chest */}
      <path
        d="M80 64 Q100 60 120 64 L116 110 Q100 106 84 110 Z"
        fill="#a09488"
        opacity="0.28"
      />

      {/* Center front placket shadow */}
      <rect x="94" y="110" width="12" height="190" fill="#3a3028" opacity="0.18" />

      {/* ── LEFT LAPEL ── */}
      <path
        d="M100 64 L52 64 L36 96 L76 116 L84 82 Z"
        fill="url(#t-lapel-l)"
        stroke="#3a3028"
        strokeWidth="0.9"
      />
      {/* Lapel highlight */}
      <path d="M76 64 L60 72 L46 92 L62 104 L72 80 Z" fill="#a09488" opacity="0.2" />

      {/* ── RIGHT LAPEL ── */}
      <path
        d="M100 64 L148 64 L164 96 L124 116 L116 82 Z"
        fill="url(#t-lapel-r)"
        stroke="#3a3028"
        strokeWidth="0.9"
      />

      {/* ── COLLAR ── */}
      <path
        d="M72 64 Q100 50 128 64 L124 76 Q100 64 76 76 Z"
        fill="#7a6e64"
        stroke="#3a3028"
        strokeWidth="1"
      />

      {/* ── EPAULETTES ── */}
      <rect x="28" y="84" width="20" height="6" rx="2" fill="#5a5048" stroke="#3a3028" strokeWidth="0.5" />
      <rect x="152" y="84" width="20" height="6" rx="2" fill="#4e4440" stroke="#3a3028" strokeWidth="0.5" />

      {/* ── BELT ── */}
      <rect x="28" y="184" width="144" height="13" rx="3" fill="url(#t-belt)" />
      {/* Belt highlight */}
      <rect x="28" y="184" width="144" height="3" rx="3" fill="#5a4e46" opacity="0.5" />
      {/* Buckle */}
      <rect x="90" y="182" width="20" height="17" rx="2.5" fill="#c8b89a" stroke="#3a3028" strokeWidth="0.8" />
      <line x1="100" y1="182" x2="100" y2="199" stroke="#3a3028" strokeWidth="0.7" />
      <rect x="93" y="185" width="14" height="9" rx="1" fill="none" stroke="#3a3028" strokeWidth="0.5" />

      {/* ── DOUBLE-BREASTED BUTTONS ── */}
      {[76, 100, 124].map((cy) => (
        <g key={`btn-l-${cy}`}>
          <circle cx="82" cy={cy} r="4" fill="#c8b89a" stroke="#3a3028" strokeWidth="0.6" />
          <circle cx="82" cy={cy} r="2.5" fill="none" stroke="#3a3028" strokeWidth="0.4" />
          <circle cx="82" cy={cy} r="0.8" fill="#3a3028" />
        </g>
      ))}
      {[76, 100, 124].map((cy) => (
        <g key={`btn-r-${cy}`}>
          <circle cx="118" cy={cy} r="4" fill="#c8b89a" stroke="#3a3028" strokeWidth="0.6" />
          <circle cx="118" cy={cy} r="2.5" fill="none" stroke="#3a3028" strokeWidth="0.4" />
          <circle cx="118" cy={cy} r="0.8" fill="#3a3028" />
        </g>
      ))}

      {/* ── POCKET FLAPS ── */}
      <path d="M40 232 Q66 238 92 232 L92 242 Q66 248 40 242 Z" fill="#6a5e54" stroke="#3a3028" strokeWidth="0.7" />
      <path d="M108 232 Q134 238 160 232 L160 242 Q134 248 108 242 Z" fill="#6a5e54" stroke="#3a3028" strokeWidth="0.7" />
      <circle cx="66" cy="237" r="2.2" fill="#c8b89a" stroke="#3a3028" strokeWidth="0.4" />
      <circle cx="134" cy="237" r="2.2" fill="#c8b89a" stroke="#3a3028" strokeWidth="0.4" />

      {/* ── HEM ── */}
      <path d="M36 296 Q100 302 164 296 L164 300 Q100 306 36 300 Z" fill="#5a5048" opacity="0.3" />
    </svg>
  );
}

/* ── LOOK 02 — Cashmere Wrap ─────────────────────────────────────────────────
   Fluid shawl collar, draped panels, self-tie sash — ivory cashmere
   Lit softly from upper-right; fabric pools and drapes captured             */
function WrapSVG(): ReactElement {
  return (
    <svg
      viewBox="0 0 180 300"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <radialGradient id="w-bg" cx="52%" cy="35%" r="58%">
          <stop offset="0%" stopColor="#f0ece4" />
          <stop offset="100%" stopColor="#d8d2c8" />
        </radialGradient>
        <linearGradient id="w-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ddd7cc" />
          <stop offset="40%" stopColor="#cec6b8" />
          <stop offset="100%" stopColor="#b4aca0" />
        </linearGradient>
        <linearGradient id="w-panel-r" x1="100%" y1="0%" x2="20%" y2="100%">
          <stop offset="0%" stopColor="#e2dcd2" />
          <stop offset="60%" stopColor="#cac3b6" />
          <stop offset="100%" stopColor="#b0a89c" />
        </linearGradient>
        <linearGradient id="w-panel-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c8c1b4" />
          <stop offset="100%" stopColor="#a8a098" />
        </linearGradient>
        <linearGradient id="w-slv-l" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d4cec4" />
          <stop offset="100%" stopColor="#a4a098" />
        </linearGradient>
        <linearGradient id="w-slv-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#bab4aa" />
          <stop offset="100%" stopColor="#8e8a84" />
        </linearGradient>
        <radialGradient id="w-shadow" cx="50%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#6a6460" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#6a6460" stopOpacity="0" />
        </radialGradient>
        <filter id="w-soft"><feGaussianBlur stdDeviation="0.5" /></filter>
      </defs>

      {/* Backdrop */}
      <rect width="180" height="300" fill="url(#w-bg)" />

      {/* Ground shadow */}
      <ellipse cx="90" cy="278" rx="64" ry="13" fill="url(#w-shadow)" />
      <path
        d="M44 266 Q90 278 136 266 L140 288 Q90 298 40 288 Z"
        fill="#6a6460"
        opacity="0.09"
        filter="url(#w-soft)"
      />

      {/* ── LEFT SLEEVE ── */}
      <path
        d="M44 72 L18 82 L16 210 L42 206 L44 72 Z"
        fill="url(#w-slv-l)"
        stroke="#9a9488"
        strokeWidth="0.7"
      />
      {/* Drape fold lines */}
      <path d="M28 100 Q22 150 20 200" stroke="#a8a49c" strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M36 95 Q30 148 28 198" stroke="#b0aca4" strokeWidth="0.4" fill="none" opacity="0.35" />
      <path d="M17 202 L16 210 L42 206 L42 198 Z" fill="#aaa49c" stroke="#9a9488" strokeWidth="0.5" />

      {/* ── RIGHT SLEEVE ── */}
      <path
        d="M136 72 L162 82 L164 210 L138 206 L136 72 Z"
        fill="url(#w-slv-r)"
        stroke="#9a9488"
        strokeWidth="0.7"
      />
      <path d="M152 100 Q158 152 160 202" stroke="#8a8880" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M163 202 L164 210 L138 206 L138 198 Z" fill="#9a9690" stroke="#9a9488" strokeWidth="0.5" />

      {/* ── BACK PANEL ── */}
      <path
        d="M46 50 L30 76 L28 166 L30 268 L150 268 L152 166 L150 76 L134 50 Z"
        fill="url(#w-body)"
        stroke="#9a9488"
        strokeWidth="0.8"
      />

      {/* ── RIGHT WRAP PANEL (foreground) ── */}
      <path
        d="M90 50 L134 50 L152 76 L128 120 L112 268 L78 268 Z"
        fill="url(#w-panel-r)"
        stroke="#9a9488"
        strokeWidth="0.7"
      />
      {/* Waterfall drape folds */}
      <path d="M128 120 Q122 170 118 230 Q114 260 112 268" stroke="#b4aaa0" strokeWidth="0.6" fill="none" opacity="0.5" />
      <path d="M138 90 Q130 140 124 200" stroke="#c0b8ae" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* ── LEFT WRAP PANEL (back) ── */}
      <path
        d="M90 50 L46 50 L30 76 L56 114 L68 268 L102 268 Z"
        fill="url(#w-panel-l)"
        stroke="#9a9488"
        strokeWidth="0.7"
      />
      <path d="M56 114 Q62 164 66 224 Q68 252 68 268" stroke="#9a9288" strokeWidth="0.5" fill="none" opacity="0.45" />

      {/* ── SHAWL COLLAR — LEFT ── */}
      <path
        d="M90 50 L46 50 L34 70 L62 90 L76 66 Z"
        fill="#d4cec4"
        stroke="#9a9488"
        strokeWidth="0.9"
      />
      <path d="M60 52 L44 62 L38 72 L54 80" stroke="#c0bab0" strokeWidth="0.5" fill="none" opacity="0.5" />

      {/* ── SHAWL COLLAR — RIGHT ── */}
      <path
        d="M90 50 L134 50 L146 70 L118 90 L104 66 Z"
        fill="#dcdad0"
        stroke="#9a9488"
        strokeWidth="0.9"
      />
      <path d="M120 52 L136 62 L142 72 L126 82" stroke="#c8c4ba" strokeWidth="0.5" fill="none" opacity="0.4" />

      {/* ── SASH BELT ── */}
      <path
        d="M32 152 Q90 160 148 152"
        fill="none"
        stroke="#9a9288"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Sash highlight */}
      <path
        d="M32 150 Q90 158 148 150"
        fill="none"
        stroke="#c0bcb4"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {/* Knot */}
      <ellipse cx="90" cy="156" rx="10" ry="8" fill="#8a8680" />
      <ellipse cx="90" cy="154" rx="8" ry="4" fill="#9e9a94" opacity="0.6" />
      {/* Sash tails */}
      <path d="M82 162 Q74 190 68 224 Q64 246 62 268" stroke="#8a8680" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M98 162 Q106 188 112 222 Q116 248 118 268" stroke="#7a7874" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Tail highlights */}
      <path d="M84 165 Q76 192 70 226" stroke="#a8a4a0" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* Chest catch-light */}
      <path d="M90 50 Q112 54 128 68 L118 88 Q102 76 90 72 Z" fill="#e8e4dc" opacity="0.2" />
    </svg>
  );
}

/* ── LOOK 03 — Belted Camel Coat ─────────────────────────────────────────────
   Single-breasted, structured shoulder, cinched leather belt, patch pockets
   Warm camel wool; lit from upper-left; rich shadow on right                */
function CamelSVG(): ReactElement {
  return (
    <svg
      viewBox="0 0 180 295"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <radialGradient id="c-bg" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#f0e8d8" />
          <stop offset="100%" stopColor="#d8cdb8" />
        </radialGradient>
        <linearGradient id="c-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a96a" />
          <stop offset="35%" stopColor="#c49458" />
          <stop offset="70%" stopColor="#a87a40" />
          <stop offset="100%" stopColor="#8c6428" />
        </linearGradient>
        <linearGradient id="c-slv-l" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c89e60" />
          <stop offset="100%" stopColor="#7a5c2a" />
        </linearGradient>
        <linearGradient id="c-slv-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b08a48" />
          <stop offset="100%" stopColor="#5e4418" />
        </linearGradient>
        <linearGradient id="c-lapel-l" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c49a60" />
          <stop offset="100%" stopColor="#8e6c38" />
        </linearGradient>
        <linearGradient id="c-lapel-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9a7840" />
          <stop offset="100%" stopColor="#6a4c20" />
        </linearGradient>
        <linearGradient id="c-belt" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5c3c18" />
          <stop offset="50%" stopColor="#3c2810" />
          <stop offset="100%" stopColor="#5c3c18" />
        </linearGradient>
        <linearGradient id="c-pocket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b88c4c" />
          <stop offset="100%" stopColor="#7a5c28" />
        </linearGradient>
        <radialGradient id="c-shadow" cx="50%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#6e5030" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#6e5030" stopOpacity="0" />
        </radialGradient>
        <filter id="c-soft"><feGaussianBlur stdDeviation="0.5" /></filter>
      </defs>

      {/* Backdrop */}
      <rect width="180" height="295" fill="url(#c-bg)" />

      {/* Ground shadow */}
      <ellipse cx="90" cy="272" rx="66" ry="14" fill="url(#c-shadow)" />
      <path d="M42 260 Q90 274 138 260 L142 282 Q90 292 38 282 Z" fill="#6e5030" opacity="0.1" filter="url(#c-soft)" />

      {/* ── LEFT SLEEVE ── */}
      <path
        d="M46 78 L22 86 L20 220 L46 216 L46 78 Z"
        fill="url(#c-slv-l)"
        stroke="#7a5c28"
        strokeWidth="0.8"
      />
      <path d="M30 110 Q24 160 22 210" stroke="#7a5c28" strokeWidth="0.6" fill="none" opacity="0.4" />
      <path d="M21 214 L20 220 L46 216 L46 210 Z" fill="#a07a40" stroke="#7a5c28" strokeWidth="0.6" />
      <circle cx="30" cy="215" r="2.5" fill="#e0c890" stroke="#7a5c28" strokeWidth="0.5" />
      <circle cx="38" cy="216" r="2.5" fill="#e0c890" stroke="#7a5c28" strokeWidth="0.5" />

      {/* ── RIGHT SLEEVE ── */}
      <path
        d="M134 78 L158 86 L160 220 L134 216 L134 78 Z"
        fill="url(#c-slv-r)"
        stroke="#7a5c28"
        strokeWidth="0.8"
      />
      <path d="M150 110 Q156 162 158 212" stroke="#5e4418" strokeWidth="0.6" fill="none" opacity="0.35" />
      <path d="M159 214 L160 220 L134 216 L134 210 Z" fill="#8a6432" stroke="#7a5c28" strokeWidth="0.6" />
      <circle cx="150" cy="215" r="2.5" fill="#e0c890" stroke="#7a5c28" strokeWidth="0.5" />
      <circle cx="142" cy="216" r="2.5" fill="#e0c890" stroke="#7a5c28" strokeWidth="0.5" />

      {/* ── BODY ── */}
      <path
        d="M48 52 L34 82 L32 168 L34 272 L146 272 L148 168 L146 82 L132 52 Z"
        fill="url(#c-body)"
        stroke="#7a5c28"
        strokeWidth="1"
      />

      {/* Chest light catch */}
      <path d="M84 52 Q90 48 106 54 L102 104 Q90 98 82 102 Z" fill="#d8b070" opacity="0.25" />

      {/* ── LEFT LAPEL ── */}
      <path
        d="M90 52 L48 52 L34 82 L72 100 L80 68 Z"
        fill="url(#c-lapel-l)"
        stroke="#7a5c28"
        strokeWidth="0.9"
      />
      <path d="M74 56 L54 68 L42 84 L62 96 L72 74 Z" fill="#d4a860" opacity="0.22" />

      {/* ── RIGHT LAPEL ── */}
      <path
        d="M90 52 L132 52 L146 82 L108 100 L100 68 Z"
        fill="url(#c-lapel-r)"
        stroke="#7a5c28"
        strokeWidth="0.9"
      />

      {/* ── COLLAR ── */}
      <path
        d="M70 52 Q90 40 110 52 L106 64 Q90 54 74 64 Z"
        fill="#b89050"
        stroke="#7a5c28"
        strokeWidth="1"
      />

      {/* ── BELT ── */}
      <rect x="28" y="160" width="124" height="14" rx="3.5" fill="url(#c-belt)" />
      <rect x="28" y="160" width="124" height="4" rx="3.5" fill="#7c5a30" opacity="0.4" />
      {/* Buckle */}
      <rect x="80" y="158" width="20" height="18" rx="3" fill="#d4b060" stroke="#7a5c28" strokeWidth="0.8" />
      <line x1="90" y1="158" x2="90" y2="176" stroke="#7a5c28" strokeWidth="0.8" />
      <rect x="83" y="161" width="14" height="12" rx="1.5" fill="none" stroke="#7a5c28" strokeWidth="0.6" />
      <circle cx="90" cy="167" r="2" fill="#7a5c28" opacity="0.5" />

      {/* ── BUTTONS ── */}
      {[114, 138].map((cy) => (
        <g key={`c-btn-${cy}`}>
          <circle cx="90" cy={cy} r="4.5" fill="#d4b060" stroke="#7a5c28" strokeWidth="0.7" />
          <circle cx="90" cy={cy} r="2.8" fill="none" stroke="#7a5c28" strokeWidth="0.5" />
          <circle cx="90" cy={cy} r="1" fill="#7a5c28" />
        </g>
      ))}

      {/* ── PATCH POCKETS ── */}
      <rect x="34" y="192" width="40" height="52" rx="2" fill="url(#c-pocket)" stroke="#7a5c28" strokeWidth="0.8" />
      <rect x="106" y="192" width="40" height="52" rx="2" fill="url(#c-pocket)" stroke="#7a5c28" strokeWidth="0.8" />
      {/* Pocket flap */}
      <path d="M34 202 Q54 208 74 202 L74 210 Q54 216 34 210 Z" fill="#a07838" stroke="#7a5c28" strokeWidth="0.6" />
      <path d="M106 202 Q126 208 146 202 L146 210 Q126 216 106 210 Z" fill="#a07838" stroke="#7a5c28" strokeWidth="0.6" />
      <circle cx="54" cy="206" r="2.5" fill="#d4b060" stroke="#7a5c28" strokeWidth="0.4" />
      <circle cx="126" cy="206" r="2.5" fill="#d4b060" stroke="#7a5c28" strokeWidth="0.4" />

      {/* ── HEM CREASE ── */}
      <path d="M34 268 Q90 274 146 268 L146 272 Q90 278 34 272 Z" fill="#7a5c28" opacity="0.25" />
    </svg>
  );
}

/* ── LOOK 04 — Silk-Lined Overcoat ──────────────────────────────────────────
   Long lean charcoal silhouette, peaked lapels, silk lining visible at hem
   Very dark fabric; light only grazes shoulders + lapel edge               */
function OvercoatSVG(): ReactElement {
  return (
    <svg
      viewBox="0 0 168 310"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <radialGradient id="o-bg" cx="50%" cy="32%" r="58%">
          <stop offset="0%" stopColor="#dddbd6" />
          <stop offset="100%" stopColor="#b8b5b0" />
        </radialGradient>
        <linearGradient id="o-body" x1="0%" y1="0%" x2="100%" y2="120%">
          <stop offset="0%" stopColor="#4a4844" />
          <stop offset="30%" stopColor="#38363280" />
          <stop offset="70%" stopColor="#282624" />
          <stop offset="100%" stopColor="#181614" />
        </linearGradient>
        <linearGradient id="o-slv-l" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#46443e" />
          <stop offset="100%" stopColor="#1a1816" />
        </linearGradient>
        <linearGradient id="o-slv-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#30302c" />
          <stop offset="100%" stopColor="#141210" />
        </linearGradient>
        <linearGradient id="o-lapel-l" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#58544e" />
          <stop offset="100%" stopColor="#28261e" />
        </linearGradient>
        <linearGradient id="o-lapel-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38362e" />
          <stop offset="100%" stopColor="#181614" />
        </linearGradient>
        {/* Silk lining — dusty rose/burgundy satin */}
        <linearGradient id="o-silk" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#b09080" />
          <stop offset="40%" stopColor="#a07868" />
          <stop offset="100%" stopColor="#806050" />
        </linearGradient>
        <linearGradient id="o-silk-cuff" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b09080" />
          <stop offset="100%" stopColor="#907060" />
        </linearGradient>
        <radialGradient id="o-shadow" cx="50%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#1a1816" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#1a1816" stopOpacity="0" />
        </radialGradient>
        <filter id="o-soft"><feGaussianBlur stdDeviation="0.5" /></filter>
      </defs>

      {/* Backdrop */}
      <rect width="168" height="310" fill="url(#o-bg)" />

      {/* Deep cast shadow */}
      <ellipse cx="84" cy="286" rx="60" ry="14" fill="url(#o-shadow)" />
      <path d="M38 274 Q84 288 130 274 L134 296 Q84 306 34 296 Z" fill="#1a1816" opacity="0.14" filter="url(#o-soft)" />

      {/* ── LEFT SLEEVE — long, narrow ── */}
      <path
        d="M44 72 L20 80 L18 240 L44 236 L44 72 Z"
        fill="url(#o-slv-l)"
        stroke="#141210"
        strokeWidth="0.7"
      />
      {/* Shoulder catch-light */}
      <path d="M38 72 L24 78 L22 100 L38 94 Z" fill="#7a7870" opacity="0.3" />
      <path d="M27 110 Q21 162 19 230" stroke="#141210" strokeWidth="0.5" fill="none" opacity="0.4" />
      {/* Silk cuff */}
      <path d="M19 232 L18 240 L44 236 L44 228 Z" fill="url(#o-silk-cuff)" />
      <path d="M19 234 L18 240 L44 236 L44 234 Z" fill="#c0a088" opacity="0.4" />

      {/* ── RIGHT SLEEVE ── */}
      <path
        d="M124 72 L148 80 L150 240 L124 236 L124 72 Z"
        fill="url(#o-slv-r)"
        stroke="#141210"
        strokeWidth="0.7"
      />
      <path d="M141 112 Q147 164 149 232" stroke="#0e0c0a" strokeWidth="0.5" fill="none" opacity="0.35" />
      <path d="M149 232 L150 240 L124 236 L124 228 Z" fill="url(#o-silk-cuff)" />

      {/* ── BODY ── */}
      <path
        d="M46 44 L32 72 L30 176 L32 284 L136 284 L138 176 L136 72 L122 44 Z"
        fill="url(#o-body)"
        stroke="#141210"
        strokeWidth="0.9"
      />

      {/* Shoulder/chest light graze */}
      <path d="M72 44 Q84 38 102 46 L96 80 Q84 74 74 78 Z" fill="#6a6860" opacity="0.25" />

      {/* Center seam — very subtle */}
      <line x1="84" y1="88" x2="84" y2="284" stroke="#141210" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.5" />

      {/* ── LEFT PEAKED LAPEL ── */}
      <path
        d="M84 44 L46 44 L32 72 L68 90 L76 58 L82 44 Z"
        fill="url(#o-lapel-l)"
        stroke="#141210"
        strokeWidth="0.9"
      />
      {/* Peak notch highlight */}
      <path d="M68 90 L76 58" stroke="#6a6660" strokeWidth="0.8" opacity="0.5" />
      <path d="M64 52 L48 64 L36 76 L56 86 L68 66 Z" fill="#6a6860" opacity="0.22" />

      {/* ── RIGHT PEAKED LAPEL ── */}
      <path
        d="M84 44 L122 44 L136 72 L100 90 L92 58 L86 44 Z"
        fill="url(#o-lapel-r)"
        stroke="#141210"
        strokeWidth="0.9"
      />
      <path d="M100 90 L92 58" stroke="#2e2c28" strokeWidth="0.8" opacity="0.5" />

      {/* ── COLLAR ── */}
      <path
        d="M66 44 Q84 32 102 44 L98 56 Q84 46 70 56 Z"
        fill="#404038"
        stroke="#141210"
        strokeWidth="1.1"
      />

      {/* ── THREE BUTTONS ── */}
      {[104, 126, 148].map((cy) => (
        <g key={`o-btn-${cy}`}>
          <circle cx="84" cy={cy} r="4" fill="#4a4844" stroke="#141210" strokeWidth="0.6" />
          <circle cx="84" cy={cy} r="2.4" fill="none" stroke="#282624" strokeWidth="0.4" />
          <circle cx="84" cy={cy} r="0.9" fill="#141210" />
        </g>
      ))}

      {/* ── WELT POCKETS ── */}
      <path d="M34 188 Q56 194 78 188 L78 196 Q56 202 34 196 Z" fill="#28261e" stroke="#141210" strokeWidth="0.5" />
      <path d="M90 188 Q112 194 134 188 L134 196 Q112 202 90 196 Z" fill="#28261e" stroke="#141210" strokeWidth="0.5" />

      {/* ── SILK LINING PEEK — hem ── */}
      <path
        d="M32 270 L32 284 L136 284 L136 270 Z"
        fill="url(#o-silk)"
      />
      {/* Silk sheen highlights */}
      <path d="M32 270 Q60 274 84 272 Q108 270 136 272 L136 276 Q108 274 84 276 Q60 278 32 274 Z" fill="#c0a090" opacity="0.3" />
      <path d="M50 270 L50 284" stroke="#b09080" strokeWidth="0.4" opacity="0.4" />
      <path d="M84 270 L84 284" stroke="#c0a090" strokeWidth="0.4" opacity="0.4" />
      <path d="M118 270 L118 284" stroke="#b09080" strokeWidth="0.4" opacity="0.4" />
    </svg>
  );
}

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
  bg,
  labelColor,
  children,
}: {
  lookNum: string;
  title: string;
  material: string;
  price: string;
  bg: string;
  labelColor: string;
  children: ReactNode;
}): ReactElement {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      {/* Tall portrait image tile */}
      <div
        className="relative min-h-0 flex-1 overflow-hidden"
        style={{ background: bg }}
      >
        {/* Look number */}
        <span
          className="absolute left-3.5 top-3 z-10 select-none text-[6.5px] font-light tracking-[0.36em]"
          style={{ ...serif, color: labelColor, opacity: 0.7 }}
        >
          {lookNum}
        </span>

        {/* Coat SVG — tall editorial proportions */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ padding: "10% 12% 8% 12%" }}
        >
          {children}
        </div>

        {/* Very subtle inner-shadow vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            boxShadow: "inset 0 0 32px rgba(20,18,16,0.10)",
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
          className="relative shrink-0 overflow-hidden"
          style={{
            width: "37%",
            background: "linear-gradient(162deg, #e6e0d8 0%, #d0c9c0 38%, #bab3aa 72%, #a09890 100%)",
          }}
        >
          {/* Subtle inner vignette */}
          <div
            className="pointer-events-none absolute inset-0 z-10"
            style={{ boxShadow: "inset 0 0 60px rgba(20,18,14,0.12)" }}
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
              className="text-[6px] font-light tracking-[0.48em] text-[#2e2a26]/38"
              style={serif}
            >
              AW&nbsp;&nbsp;MMXXVI
            </span>
          </div>

          {/* Coat — tall, breathing generous space */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ padding: "8% 20% 18% 20%" }}
          >
            <TrenchSVG />
          </div>

          {/* Bottom caption scrim */}
          <div
            className="absolute bottom-0 left-0 right-0 z-20 px-7 pb-7 pt-20"
            style={{
              background:
                "linear-gradient(to top, rgba(14,12,10,0.72) 0%, rgba(14,12,10,0.28) 55%, transparent 100%)",
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
              bg="linear-gradient(152deg, #ede9e2 0%, #d8d2c8 48%, #beb8ae 100%)"
              labelColor="rgba(40,36,32,1)"
            >
              <WrapSVG />
            </SmallLookCard>

            <HairlineRule vertical className="mx-4" />

            <SmallLookCard
              lookNum="LOOK 03"
              title="Belted Camel Coat"
              material="Virgin wool · camel"
              price="EUR 1,090"
              bg="linear-gradient(152deg, #f0e0c2 0%, #d8be92 48%, #b89860 100%)"
              labelColor="rgba(60,40,14,1)"
            >
              <CamelSVG />
            </SmallLookCard>

            <HairlineRule vertical className="mx-4" />

            <SmallLookCard
              lookNum="LOOK 04"
              title="Silk-Lined Overcoat"
              material="Pressed wool · charcoal"
              price="EUR 1,460"
              bg="linear-gradient(152deg, #d4d2ce 0%, #9e9c98 48%, #5a5854 100%)"
              labelColor="rgba(240,238,234,1)"
            >
              <OvercoatSVG />
            </SmallLookCard>

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
