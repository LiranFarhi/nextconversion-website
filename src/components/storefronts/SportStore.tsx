import type { ReactElement } from "react";
import { Search, User, ShoppingCart, Star, Truck, RotateCcw, Leaf, ChevronRight, Plus } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   PHOTOREAL GARMENT RENDERS — layered gradients + specular
═══════════════════════════════════════════════════════════ */

function LeggingsRender(): ReactElement {
  return (
    <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <defs>
        {/* Studio background — seamless warm-grey */}
        <radialGradient id="lg-bg" cx="50%" cy="70%" r="60%">
          <stop offset="0%" stopColor="#e8e4de" />
          <stop offset="100%" stopColor="#d4cfc8" />
        </radialGradient>
        {/* Main fabric — deep midnight */}
        <linearGradient id="lg-leg-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d2a5e" />
          <stop offset="40%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#14123a" />
        </linearGradient>
        <linearGradient id="lg-leg-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d2a5e" />
          <stop offset="40%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#14123a" />
        </linearGradient>
        {/* Specular — left-side light bounce */}
        <linearGradient id="lg-spec" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6b63d0" stopOpacity="0.55" />
          <stop offset="35%" stopColor="#4338ca" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#1e1b4b" stopOpacity="0" />
        </linearGradient>
        {/* Waistband sheen */}
        <linearGradient id="lg-waist" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4338ca" />
          <stop offset="50%" stopColor="#312e81" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        {/* Drop shadow below garment */}
        <radialGradient id="lg-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0a0920" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0a0920" stopOpacity="0" />
        </radialGradient>
        {/* Subtle fabric texture — fine knit */}
        <filter id="lg-tex">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" result="noise" />
          <feColorMatrix type="saturate" values="0" result="grey" />
          <feBlend in="SourceGraphic" in2="grey" mode="overlay" result="blended" />
          <feComposite in="blended" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>

      {/* Studio floor shadow */}
      <ellipse cx="100" cy="248" rx="52" ry="8" fill="url(#lg-shadow)" />

      {/* Background plate */}
      <rect width="200" height="260" fill="url(#lg-bg)" />

      {/* Waistband */}
      <path d="M56 62 Q100 54 144 62 L142 84 Q100 78 58 84 Z" fill="url(#lg-waist)" />
      <path d="M56 62 Q100 56 144 62 Q100 67 56 63 Z" fill="#6d63e0" opacity="0.4" />
      {/* waistband logo tab */}
      <rect x="91" y="58" width="18" height="6" rx="3" fill="#4338ca" />
      <rect x="91" y="58" width="18" height="3" rx="1.5" fill="#6b63d0" opacity="0.5" />

      {/* Left leg */}
      <path d="M58 82 L48 238 Q68 244 80 238 L88 82 Z" fill="url(#lg-leg-l)" />
      {/* Right leg */}
      <path d="M112 82 L120 238 Q132 244 152 238 L142 82 Z" fill="url(#lg-leg-r)" />
      {/* Center gusset */}
      <path d="M88 82 L112 82 L110 148 L100 158 L90 148 Z" fill="#252060" />

      {/* Specular highlight — left leg */}
      <path d="M62 88 Q64 130 62 192" stroke="#8b83e0" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M64 90 L76 86 L80 90 L66 96 Z" fill="url(#lg-spec)" opacity="0.3" />

      {/* Specular highlight — right leg */}
      <path d="M138 88 Q136 130 138 192" stroke="#8b83e0" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.3" />

      {/* Seam lines */}
      <line x1="100" y1="158" x2="100" y2="238" stroke="#4338ca" strokeWidth="1.2" strokeDasharray="4,3" opacity="0.5" />
      <line x1="68" y1="84" x2="56" y2="238" stroke="#312e81" strokeWidth="0.8" opacity="0.3" />
      <line x1="132" y1="84" x2="144" y2="238" stroke="#312e81" strokeWidth="0.8" opacity="0.3" />

      {/* Ankle ribbed cuffs */}
      <path d="M49 231 Q64 240 80 232 L80 242 Q64 250 49 241 Z" fill="#1a1760" />
      <path d="M50 234 Q64 242 79 235" stroke="#4338ca" strokeWidth="0.7" opacity="0.5" />
      <path d="M50 237 Q64 245 79 238" stroke="#4338ca" strokeWidth="0.7" opacity="0.5" />
      <path d="M119 232 Q136 240 151 231 L151 241 Q136 250 119 242 Z" fill="#1a1760" />
      <path d="M120 235 Q136 243 150 234" stroke="#4338ca" strokeWidth="0.7" opacity="0.5" />
      <path d="M120 238 Q136 246 150 237" stroke="#4338ca" strokeWidth="0.7" opacity="0.5" />
    </svg>
  );
}

function BraRender(): ReactElement {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <defs>
        <radialGradient id="br-bg" cx="50%" cy="60%" r="55%">
          <stop offset="0%" stopColor="#f0ece8" />
          <stop offset="100%" stopColor="#e2ddd7" />
        </radialGradient>
        {/* Warm blush fabric */}
        <linearGradient id="br-cup-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8c8d0" />
          <stop offset="55%" stopColor="#e8a0b0" />
          <stop offset="100%" stopColor="#c87890" />
        </linearGradient>
        <linearGradient id="br-cup-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f4b8c8" />
          <stop offset="55%" stopColor="#e09aaa" />
          <stop offset="100%" stopColor="#c07888" />
        </linearGradient>
        <linearGradient id="br-band" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d0889a" />
          <stop offset="100%" stopColor="#b06878" />
        </linearGradient>
        <linearGradient id="br-strap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8a0b0" />
          <stop offset="100%" stopColor="#c87890" />
        </linearGradient>
        <radialGradient id="br-spec-l" cx="35%" cy="32%" r="38%">
          <stop offset="0%" stopColor="#fef0f3" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#f8c8d0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="br-spec-r" cx="65%" cy="32%" r="38%">
          <stop offset="0%" stopColor="#fef0f3" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#f4b8c8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="br-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#200810" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#200810" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="196" rx="46" ry="5" fill="url(#br-shadow)" />
      <rect width="200" height="200" fill="url(#br-bg)" />

      {/* Racerback straps */}
      <path d="M78 70 Q76 50 80 38 Q84 28 90 32 Q96 36 96 50 L96 70" fill="none" stroke="url(#br-strap)" strokeWidth="8" strokeLinecap="round" />
      <path d="M122 70 Q124 50 120 38 Q116 28 110 32 Q104 36 104 50 L104 70" fill="none" stroke="url(#br-strap)" strokeWidth="8" strokeLinecap="round" />
      {/* Strap highlight */}
      <path d="M80 68 Q78 52 82 40" stroke="#fde8ee" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M120 68 Q122 52 118 40" stroke="#fde8ee" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Left cup */}
      <path d="M38 90 Q48 68 100 72 Q68 78 62 110 Q46 114 38 100 Z" fill="url(#br-cup-l)" />
      {/* Right cup */}
      <path d="M162 90 Q152 68 100 72 Q132 78 138 110 Q154 114 162 100 Z" fill="url(#br-cup-r)" />

      {/* Specular orbs on cups */}
      <ellipse cx="66" cy="82" rx="22" ry="16" fill="url(#br-spec-l)" />
      <ellipse cx="134" cy="82" rx="22" ry="16" fill="url(#br-spec-r)" />

      {/* Cup seam detail */}
      <path d="M100 72 Q90 82 80 102" stroke="#d88098" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M100 72 Q110 82 120 102" stroke="#d88098" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Mesh panel band */}
      <path d="M38 100 Q100 126 162 100 L160 126 Q100 148 40 126 Z" fill="url(#br-band)" />
      {/* Mesh dots */}
      {[0,1,2,3,4].map((col) =>
        [0,1,2].map((row) => (
          <circle
            key={`${col}-${row}`}
            cx={52 + col * 20}
            cy={108 + row * 10}
            r="1.8"
            fill="white"
            opacity="0.25"
          />
        ))
      )}
      {/* Band sheen */}
      <path d="M42 108 Q100 128 158 108" stroke="#f0b0c0" strokeWidth="1" fill="none" opacity="0.35" />

      {/* Center gore hardware */}
      <rect x="95" y="119" width="10" height="7" rx="3.5" fill="#b06878" />
      <rect x="95" y="119" width="10" height="3.5" rx="1.75" fill="#d08898" opacity="0.6" />

      {/* Under-band shadow */}
      <path d="M40 126 Q100 148 160 126" stroke="#90485a" strokeWidth="1.5" fill="none" opacity="0.3" />
    </svg>
  );
}

function JacketRender(): ReactElement {
  return (
    <svg viewBox="0 0 200 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <defs>
        <radialGradient id="jk-bg" cx="50%" cy="65%" r="58%">
          <stop offset="0%" stopColor="#dde8e0" />
          <stop offset="100%" stopColor="#ccd8cf" />
        </radialGradient>
        <linearGradient id="jk-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2d5a34" />
          <stop offset="45%" stopColor="#1e3d24" />
          <stop offset="100%" stopColor="#122418" />
        </linearGradient>
        <linearGradient id="jk-sleeve-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#254a2a" />
          <stop offset="100%" stopColor="#0f1e12" />
        </linearGradient>
        <linearGradient id="jk-sleeve-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#254a2a" />
          <stop offset="100%" stopColor="#0f1e12" />
        </linearGradient>
        <linearGradient id="jk-hood" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a7042" />
          <stop offset="100%" stopColor="#254a2a" />
        </linearGradient>
        <radialGradient id="jk-spec" cx="25%" cy="30%" r="45%">
          <stop offset="0%" stopColor="#5da866" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#2d5a34" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="jk-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#050c06" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#050c06" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="100" cy="252" rx="54" ry="7" fill="url(#jk-shadow)" />
      <rect width="200" height="260" fill="url(#jk-bg)" />

      {/* Hood */}
      <path d="M68 52 Q68 20 100 16 Q132 20 132 52 L124 64 Q100 58 76 64 Z" fill="url(#jk-hood)" />
      <path d="M72 50 Q72 26 100 22 Q128 26 128 50" stroke="#4a8a52" strokeWidth="1.5" fill="none" opacity="0.35" />
      {/* Hood lining shadow */}
      <path d="M76 64 Q100 72 124 64" stroke="#1a3a1e" strokeWidth="2" fill="none" opacity="0.5" />

      {/* Left sleeve */}
      <path d="M34 90 L18 96 L14 184 L44 188 L48 100 Z" fill="url(#jk-sleeve-l)" />
      {/* Right sleeve */}
      <path d="M166 90 L182 96 L186 184 L156 188 L152 100 Z" fill="url(#jk-sleeve-r)" />

      {/* Body */}
      <path d="M48 70 L34 90 L34 228 L166 228 L166 90 L152 70 Z" fill="url(#jk-body)" />

      {/* Specular body highlight */}
      <path d="M38 96 Q40 148 38 208" stroke="#4a8a52" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.4" />
      <ellipse cx="72" cy="120" rx="20" ry="30" fill="url(#jk-spec)" />

      {/* Collar */}
      <path d="M68 66 L76 80 Q100 74 124 80 L132 66 L124 64 Q100 68 76 64 Z" fill="#2d5a34" />
      <path d="M76 78 Q100 72 124 78" stroke="#4a8a52" strokeWidth="1" fill="none" opacity="0.4" />

      {/* Center zip */}
      <line x1="100" y1="78" x2="100" y2="228" stroke="#4a8a52" strokeWidth="2" opacity="0.6" />
      <rect x="95" y="92" width="10" height="6" rx="3" fill="#a0c8a8" />
      {/* Zip pull */}
      <rect x="98" y="97" width="4" height="8" rx="2" fill="#80a888" />

      {/* Sleeve cuffs */}
      <path d="M15 178 L45 184 L45 192 L15 186 Z" fill="#1a3a1e" />
      <path d="M155 184 L185 178 L185 186 L155 192 Z" fill="#1a3a1e" />
      <path d="M17 182 L44 188" stroke="#3a7042" strokeWidth="0.8" opacity="0.5" />
      <path d="M156 188 L184 182" stroke="#3a7042" strokeWidth="0.8" opacity="0.5" />

      {/* Left pocket */}
      <path d="M48 150 Q46 140 60 138 L60 162 Q46 164 48 154 Z" fill="#1e3d24" stroke="#2d5a34" strokeWidth="1" />
      <path d="M49 148 Q47 142 60 140" stroke="#4a8a52" strokeWidth="0.8" fill="none" opacity="0.4" />
      {/* Right pocket */}
      <path d="M152 150 Q154 140 140 138 L140 162 Q154 164 152 154 Z" fill="#1e3d24" stroke="#2d5a34" strokeWidth="1" />

      {/* Hem */}
      <path d="M34 220 L34 228 L166 228 L166 220" fill="none" stroke="#1a3a1e" strokeWidth="5" />
      <path d="M36 224 L164 224" stroke="#3a7042" strokeWidth="0.8" opacity="0.4" />

      {/* Chest panel seam lines */}
      <line x1="48" y1="78" x2="48" y2="228" stroke="#3a7042" strokeWidth="0.7" opacity="0.25" />
      <line x1="152" y1="78" x2="152" y2="228" stroke="#3a7042" strokeWidth="0.7" opacity="0.25" />
    </svg>
  );
}

function TeeRender(): ReactElement {
  return (
    <svg viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <defs>
        <radialGradient id="te-bg" cx="50%" cy="65%" r="58%">
          <stop offset="0%" stopColor="#ebebeb" />
          <stop offset="100%" stopColor="#d8d8d8" />
        </radialGradient>
        {/* Chalk / off-white fabric */}
        <linearGradient id="te-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5f4f0" />
          <stop offset="50%" stopColor="#e8e6e0" />
          <stop offset="100%" stopColor="#d4d2ca" />
        </linearGradient>
        <linearGradient id="te-sleeve-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ededea" />
          <stop offset="100%" stopColor="#cccac2" />
        </linearGradient>
        <linearGradient id="te-sleeve-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ededea" />
          <stop offset="100%" stopColor="#cccac2" />
        </linearGradient>
        <radialGradient id="te-spec" cx="28%" cy="28%" r="40%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#f5f4f0" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="te-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a1a16" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#1a1a16" stopOpacity="0" />
        </radialGradient>
        {/* Fine ribbed collar filter */}
        <filter id="te-rib">
          <feTurbulence type="turbulence" baseFrequency="0 0.5" numOctaves="1" result="r" />
          <feDisplacementMap in="SourceGraphic" in2="r" scale="1.5" />
        </filter>
      </defs>

      <ellipse cx="100" cy="234" rx="52" ry="6" fill="url(#te-shadow)" />
      <rect width="200" height="240" fill="url(#te-bg)" />

      {/* Left sleeve */}
      <path d="M52 66 L16 60 L12 110 L50 114 Z" fill="url(#te-sleeve-l)" />
      {/* Right sleeve */}
      <path d="M148 66 L184 60 L188 110 L150 114 Z" fill="url(#te-sleeve-r)" />

      {/* Body */}
      <path d="M52 66 L44 218 L156 218 L148 66 Z" fill="url(#te-body)" />

      {/* Specular highlight */}
      <ellipse cx="82" cy="120" rx="24" ry="42" fill="url(#te-spec)" />
      <path d="M48 76 Q50 130 48 192" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />

      {/* Ribbed crew neckline */}
      <path d="M68 56 Q100 40 132 56 Q120 74 100 76 Q80 74 68 56 Z" fill="#e0ded8" />
      <path d="M70 58 Q100 44 130 58" stroke="#c8c6be" strokeWidth="0.8" fill="none" opacity="0.7" />
      <path d="M72 62 Q100 50 128 62" stroke="#c8c6be" strokeWidth="0.7" fill="none" opacity="0.6" />
      <path d="M74 66 Q100 56 126 66" stroke="#c8c6be" strokeWidth="0.6" fill="none" opacity="0.5" />
      {/* Collar shadow */}
      <path d="M68 56 Q100 74 132 56 Q120 72 100 74 Q80 72 68 56 Z" fill="#c0beb6" opacity="0.15" />

      {/* Shoulder seams */}
      <line x1="52" y1="66" x2="50" y2="114" stroke="#c8c6be" strokeWidth="1.2" opacity="0.5" />
      <line x1="148" y1="66" x2="150" y2="114" stroke="#c8c6be" strokeWidth="1.2" opacity="0.5" />
      {/* Sleeve cuff ribbing */}
      <path d="M13 102 L50 108 L50 114 L12 108 Z" fill="#d4d2ca" />
      <path d="M14 105 L50 111" stroke="#b8b6ae" strokeWidth="0.7" opacity="0.5" />
      <path d="M188 102 L150 108 L150 114 L188 108 Z" fill="#d4d2ca" />
      <path d="M186 105 L150 111" stroke="#b8b6ae" strokeWidth="0.7" opacity="0.5" />

      {/* Side seams */}
      <line x1="52" y1="66" x2="44" y2="218" stroke="#c0beb6" strokeWidth="0.8" opacity="0.35" />
      <line x1="148" y1="66" x2="156" y2="218" stroke="#c0beb6" strokeWidth="0.8" opacity="0.35" />

      {/* Subtle logo emboss — left chest */}
      <circle cx="76" cy="98" r="7" stroke="#d0cec6" strokeWidth="1.2" fill="none" opacity="0.65" />
      <text x="76" y="102" textAnchor="middle" fill="#c8c6be" fontSize="5.5" fontFamily="ui-sans-serif,system-ui" fontWeight="800" letterSpacing="1" opacity="0.8">A</text>

      {/* Hem */}
      <path d="M44 210 Q100 222 156 210 L156 218 L44 218 Z" fill="#c4c2ba" opacity="0.6" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO RIGHT PANEL — photoreal studio gradient composition
═══════════════════════════════════════════════════════════ */
function HeroPanel(): ReactElement {
  return (
    <svg viewBox="0 0 620 310" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        {/* Deep studio background — dark vignette fade */}
        <linearGradient id="hp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0c0a1a" />
          <stop offset="50%" stopColor="#0f0d22" />
          <stop offset="100%" stopColor="#1a1040" />
        </linearGradient>
        {/* Spotlight — elliptical key light */}
        <radialGradient id="hp-spot" cx="52%" cy="40%" r="46%">
          <stop offset="0%" stopColor="#e8d5ff" stopOpacity="0.18" />
          <stop offset="45%" stopColor="#a78bfa" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0c0a1a" stopOpacity="0" />
        </radialGradient>
        {/* Rim light — right edge */}
        <linearGradient id="hp-rim" x1="100%" y1="0%" x2="80%" y2="100%">
          <stop offset="0%" stopColor="#f0c060" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#f0c060" stopOpacity="0" />
        </linearGradient>
        {/* Floor gradient — reflective studio floor */}
        <linearGradient id="hp-floor" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1a42" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0a0818" stopOpacity="0.95" />
        </linearGradient>
        {/* Leggings on model */}
        <linearGradient id="hp-legs" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3730a3" />
          <stop offset="50%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#0f0d2a" />
        </linearGradient>
        {/* Top */}
        <linearGradient id="hp-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="100%" stopColor="#2e1065" />
        </linearGradient>
        {/* Skin */}
        <linearGradient id="hp-skin" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c4a0" />
          <stop offset="100%" stopColor="#d4a882" />
        </linearGradient>
        {/* Ground reflection */}
        <linearGradient id="hp-refl" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3730a3" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0c0a1a" stopOpacity="0" />
        </linearGradient>
        {/* Left blend overlay — blends into page bg */}
        <linearGradient id="hp-fade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f7f6f2" />
          <stop offset="28%" stopColor="#f7f6f2" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Dark studio bg */}
      <rect width="620" height="310" fill="url(#hp-bg)" />
      {/* Spotlight */}
      <ellipse cx="322" cy="124" rx="280" ry="180" fill="url(#hp-spot)" />
      {/* Rim light — warm gold from right */}
      <rect x="0" y="0" width="620" height="310" fill="url(#hp-rim)" />
      {/* Subtle floor */}
      <rect x="0" y="220" width="620" height="90" fill="url(#hp-floor)" />

      {/* ─── Stylized athlete figure ─── */}
      {/* Head */}
      <ellipse cx="340" cy="52" rx="22" ry="26" fill="url(#hp-skin)" />
      {/* Hair — short dark */}
      <path d="M318 42 Q326 22 340 20 Q356 20 362 36 Q360 28 340 26 Q322 28 318 42 Z" fill="#1a100a" />
      {/* Ear */}
      <ellipse cx="318" cy="52" rx="4" ry="6" fill="#d4a882" />
      <ellipse cx="362" cy="52" rx="4" ry="6" fill="#d4a882" />
      {/* Neck */}
      <rect x="332" y="76" width="16" height="20" rx="8" fill="#d4a882" />

      {/* Sports bra / crop — deep violet */}
      <path d="M292 100 Q312 90 340 92 Q368 90 388 100 L390 136 Q368 148 340 146 Q312 148 290 136 Z" fill="url(#hp-top)" />
      <path d="M312 92 L326 78" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round" />
      <path d="M368 92 L354 78" stroke="#6d28d9" strokeWidth="5" strokeLinecap="round" />
      {/* Specular on bra */}
      <path d="M298 100 Q302 92 310 96" stroke="#a78bfa" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* Logo detail */}
      <rect x="332" y="114" width="16" height="4" rx="2" fill="#7c3aed" opacity="0.7" />

      {/* Leggings */}
      <path d="M290 136 L278 136 L264 290 L302 294 L318 210 L322 136 Z" fill="url(#hp-legs)" />
      <path d="M390 136 L402 136 L416 290 L378 294 L362 210 L358 136 Z" fill="url(#hp-legs)" />
      <path d="M322 136 L358 136 L356 210 L340 224 L324 210 Z" fill="#1e1a40" />

      {/* Leggings seam — center */}
      <line x1="340" y1="224" x2="340" y2="292" stroke="#4338ca" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.45" />
      {/* Specular on left leg */}
      <path d="M270 148 Q272 200 270 266" stroke="#6b63d0" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* Waistband */}
      <rect x="278" y="132" width="124" height="12" rx="6" fill="#3730a3" />
      <rect x="278" y="132" width="124" height="5" rx="2.5" fill="#4338ca" opacity="0.4" />

      {/* Left arm — dynamic back reach */}
      <path d="M292 108 Q258 96 228 82 Q218 76 222 68 Q228 60 238 68 Q264 86 296 106" fill="#d4a882" />
      {/* Right arm — forward */}
      <path d="M388 108 Q422 104 450 118 Q460 126 456 134 Q450 142 440 136 Q416 122 392 112" fill="#d4a882" />

      {/* Sneaker left */}
      <ellipse cx="283" cy="296" rx="24" ry="7" fill="#0f0d28" />
      <path d="M259 286 Q266 278 295 280 L302 290 L262 292 Z" fill="#1a1850" />
      <path d="M261 288 Q280 282 298 284" stroke="#4338ca" strokeWidth="1.2" opacity="0.6" />
      {/* Sneaker right */}
      <ellipse cx="397" cy="296" rx="24" ry="7" fill="#0f0d28" />
      <path d="M374 286 Q382 278 412 280 L420 290 L378 292 Z" fill="#1a1850" />
      <path d="M376 288 Q395 282 412 284" stroke="#4338ca" strokeWidth="1.2" opacity="0.6" />

      {/* Ground reflection of figure */}
      <ellipse cx="340" cy="300" rx="68" ry="10" fill="url(#hp-refl)" />

      {/* Floating accent shapes */}
      <circle cx="520" cy="50" r="40" fill="#7c3aed" opacity="0.08" />
      <circle cx="160" cy="70" r="24" fill="#a78bfa" opacity="0.07" />
      <circle cx="540" cy="250" r="30" fill="#f0c060" opacity="0.06" />
      {/* Fine diagonal motion lines */}
      <line x1="180" y1="180" x2="220" y2="140" stroke="#a78bfa" strokeWidth="0.8" opacity="0.15" strokeDasharray="4,4" />
      <line x1="190" y1="200" x2="230" y2="160" stroke="#a78bfa" strokeWidth="0.8" opacity="0.1" strokeDasharray="4,4" />

      {/* Page-bg fade-in from left */}
      <rect width="620" height="310" fill="url(#hp-fade)" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   STAR RATING
═══════════════════════════════════════════════════════════ */
interface StarRatingProps {
  rating: number;
  count: number;
}

function StarRating({ rating, count }: StarRatingProps): ReactElement {
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={9}
            className={i <= Math.round(rating) ? "text-amber-400 fill-amber-400" : "text-stone-300 fill-stone-300"}
          />
        ))}
      </div>
      <span className="text-[10px] text-stone-400 font-medium">({count})</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRODUCT CARD
═══════════════════════════════════════════════════════════ */
interface ProductCardProps {
  name: string;
  price: string;
  compareAt: string | null;
  tag: string | null;
  tagVariant: "new" | "bestseller" | "sale";
  swatches: string[];
  rating: number;
  reviewCount: number;
  render: ReactElement;
}

function ProductCard({
  name,
  price,
  compareAt,
  tag,
  tagVariant,
  swatches,
  rating,
  reviewCount,
  render,
}: ProductCardProps): ReactElement {
  const tagStyle =
    tagVariant === "new"
      ? "bg-indigo-600 text-white"
      : tagVariant === "bestseller"
      ? "bg-amber-400 text-stone-900"
      : "bg-red-500 text-white";

  return (
    <div
      className="flex flex-col overflow-hidden rounded-xl bg-white flex-1"
      style={{
        boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 6px 20px rgba(0,0,0,0.06)",
        border: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* Image tile */}
      <div className="relative overflow-hidden" style={{ height: 168 }}>
        {/* Seamless studio bg for each product */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 60%, #f0eeea 0%, #e4e1db 100%)" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[68%] h-[90%] flex items-center justify-center">{render}</div>
        </div>

        {/* Badge */}
        {tag && (
          <span
            className={`absolute top-2.5 left-2.5 rounded-full px-2.5 py-[3px] text-[9px] font-bold tracking-wider uppercase shadow-sm ${tagStyle}`}
          >
            {tag}
          </span>
        )}

        {/* Quick-add overlay — visible on hover simulation via group */}
        <div className="absolute bottom-0 inset-x-0 flex items-center justify-center py-2 opacity-0 hover:opacity-100 transition-opacity"
          style={{ background: "linear-gradient(to top, rgba(15,13,40,0.82), transparent)" }}>
          <button className="flex items-center gap-1.5 rounded-full bg-white text-stone-900 text-[10px] font-bold tracking-wide px-4 py-1.5 shadow">
            <Plus size={10} strokeWidth={2.5} /> Quick Add
          </button>
        </div>
      </div>

      {/* Info section */}
      <div className="px-3 pt-2.5 pb-3 flex flex-col gap-1.5">
        {/* Rating */}
        <StarRating rating={rating} count={reviewCount} />

        {/* Name */}
        <p className="text-[12.5px] font-semibold text-stone-800 leading-tight">{name}</p>

        {/* Price row */}
        <div className="flex items-center gap-2">
          <span className="text-[12.5px] font-bold text-stone-900">{price}</span>
          {compareAt && (
            <span className="text-[11px] text-stone-400 line-through">{compareAt}</span>
          )}
        </div>

        {/* Swatches + color count */}
        <div className="flex items-center gap-1.5 mt-0.5">
          {swatches.map((c) => (
            <span
              key={c}
              className="h-3.5 w-3.5 rounded-full"
              style={{
                backgroundColor: c,
                boxShadow: "0 0 0 1.5px white, 0 0 0 2.5px rgba(0,0,0,0.12)",
              }}
            />
          ))}
          <span className="text-[10px] text-stone-400 ml-0.5">+{swatches.length} colors</span>
        </div>

        {/* Add to cart */}
        <button
          className="mt-1 w-full rounded-lg py-1.5 text-[11px] font-bold tracking-wide text-white transition-colors hover:bg-indigo-700"
          style={{ background: "#111827" }}
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   STATIC DATA
═══════════════════════════════════════════════════════════ */
const NAV_LINKS = ["Women", "Men", "Collections", "Sale"] as const;

interface ProductDatum {
  name: string;
  price: string;
  compareAt: string | null;
  tag: string | null;
  tagVariant: "new" | "bestseller" | "sale";
  swatches: string[];
  rating: number;
  reviewCount: number;
}

const PRODUCTS: ProductDatum[] = [
  {
    name: "Seamless Leggings",
    price: "$98",
    compareAt: null,
    tag: "Bestseller",
    tagVariant: "bestseller",
    swatches: ["#1e1b4b", "#4a4060", "#6b7280"],
    rating: 5,
    reviewCount: 312,
  },
  {
    name: "Sculpt Bra",
    price: "$64",
    compareAt: "$80",
    tag: "New",
    tagVariant: "new",
    swatches: ["#e8a0b0", "#8a6878", "#f5f0ee"],
    rating: 4,
    reviewCount: 187,
  },
  {
    name: "Featherlight Jacket",
    price: "$145",
    compareAt: null,
    tag: null,
    tagVariant: "new",
    swatches: ["#1e3d24", "#4a7852", "#9aaa8a"],
    rating: 5,
    reviewCount: 94,
  },
  {
    name: "Performance Tee",
    price: "$52",
    compareAt: "$68",
    tag: "Sale",
    tagVariant: "sale",
    swatches: ["#f5f4f0", "#6b7280", "#292524"],
    rating: 4,
    reviewCount: 228,
  },
];

const PRODUCT_RENDERS: ReactElement[] = [
  <LeggingsRender key="leg" />,
  <BraRender key="bra" />,
  <JacketRender key="jkt" />,
  <TeeRender key="tee" />,
];

/* ═══════════════════════════════════════════════════════════
   ROOT COMPONENT
═══════════════════════════════════════════════════════════ */
export default function SportStore(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f7f6f2] font-sans">

      {/* ── TOP NAV ── */}
      <header
        className="flex flex-shrink-0 items-center justify-between bg-white px-8"
        style={{
          height: 52,
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 1px 0 rgba(0,0,0,0.04)",
        }}
      >
        {/* Wordmark */}
        <span
          className="select-none text-[16px] font-black tracking-[0.32em] text-stone-900"
          style={{ letterSpacing: "0.3em" }}
        >
          AERIS
        </span>

        {/* Primary nav */}
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className={`cursor-pointer text-[12.5px] font-medium tracking-wide transition-colors ${
                link === "Sale"
                  ? "font-bold text-red-500 hover:text-red-600"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {link}
              {link !== "Sale" && (
                <span className="ml-0.5 text-stone-300 text-[10px]">›</span>
              )}
            </span>
          ))}
        </nav>

        {/* Utility icons */}
        <div className="flex items-center gap-5 text-stone-500">
          <Search size={15} strokeWidth={1.8} className="cursor-pointer transition-colors hover:text-stone-900" />
          <User size={15} strokeWidth={1.8} className="cursor-pointer transition-colors hover:text-stone-900" />
          <span className="relative cursor-pointer">
            <ShoppingCart size={15} strokeWidth={1.8} className="transition-colors hover:text-stone-900" />
            <span
              className="absolute flex items-center justify-center rounded-full bg-indigo-600 text-white text-[8px] font-bold leading-none"
              style={{ width: 14, height: 14, top: -7, right: -8 }}
            >
              3
            </span>
          </span>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="relative flex flex-shrink-0 overflow-hidden" style={{ height: 286 }}>
        {/* Dark studio panel — right side */}
        <div className="absolute inset-0 left-[44%]">
          <HeroPanel />
        </div>

        {/* Left editorial copy */}
        <div
          className="relative z-10 flex flex-col justify-center pl-10 pr-8"
          style={{ width: 520 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-block h-px w-7 bg-indigo-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-indigo-600">
              Summer &#8217;26 Collection
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-black leading-none tracking-tight text-stone-900 mb-3"
            style={{ fontSize: 48 }}
          >
            Move with
            <br />
            <span style={{ color: "#4338ca" }}>Intention.</span>
          </h1>

          {/* Sub-copy */}
          <p className="mb-5 max-w-[260px] text-[13px] font-normal leading-relaxed text-stone-500">
            Performance activewear engineered for women who refuse to compromise&mdash;studio to street.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <button
              className="rounded-full px-6 py-2.5 text-[12px] font-bold tracking-wide text-white shadow-md transition-colors"
              style={{ background: "#111827" }}
            >
              Shop New In
            </button>
            <button className="flex items-center gap-1 text-[12px] font-semibold text-stone-500 transition-colors hover:text-indigo-600">
              View Lookbook <ChevronRight size={13} />
            </button>
          </div>

          {/* Inline trust micro-row */}
          <div className="flex items-center gap-4 mt-4">
            {[
              { icon: <Truck size={11} strokeWidth={1.8} />, label: "Free over $75" },
              { icon: <RotateCcw size={11} strokeWidth={1.8} />, label: "30-day returns" },
              { icon: <Leaf size={11} strokeWidth={1.8} />, label: "Carbon neutral" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-stone-400">
                <span className="text-indigo-400">{icon}</span>
                <span className="text-[10.5px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div
        className="flex flex-shrink-0 items-center justify-center gap-8 bg-white px-8"
        style={{
          height: 36,
          borderTop: "1px solid rgba(0,0,0,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        {[
          { icon: <Truck size={12} strokeWidth={1.8} />, text: "Free shipping over $75" },
          { icon: <RotateCcw size={12} strokeWidth={1.8} />, text: "Free 30-day returns" },
          { icon: <Leaf size={12} strokeWidth={1.8} />, text: "Carbon neutral shipping" },
        ].map(({ icon, text }, i) => (
          <div key={text} className="flex items-center gap-8">
            {i > 0 && <span className="h-3 w-px bg-stone-200" />}
            <div className="flex items-center gap-2 text-stone-500">
              <span className="text-indigo-500">{icon}</span>
              <span className="text-[11.5px] font-medium">{text}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── SECTION HEADER ── */}
      <div className="flex flex-shrink-0 items-end justify-between px-8 pt-3.5 pb-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-0.5">
            Just Dropped
          </p>
          <h2 className="text-[18px] font-black tracking-tight text-stone-900">New Arrivals</h2>
        </div>
        <button
          className="flex items-center gap-1 rounded-full border px-4 py-1.5 text-[11px] font-semibold text-stone-600 shadow-sm transition-colors hover:border-indigo-400 hover:text-indigo-600"
          style={{ borderColor: "rgba(0,0,0,0.12)" }}
        >
          View all <ChevronRight size={12} />
        </button>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="flex flex-1 min-h-0 gap-3.5 px-8 pb-4">
        {PRODUCTS.map((p, i) => (
          <ProductCard
            key={p.name}
            name={p.name}
            price={p.price}
            compareAt={p.compareAt}
            tag={p.tag}
            tagVariant={p.tagVariant}
            swatches={p.swatches}
            rating={p.rating}
            reviewCount={p.reviewCount}
            render={PRODUCT_RENDERS[i]}
          />
        ))}
      </div>

      {/* ── FOOTER HINT ── */}
      <div
        className="flex flex-shrink-0 items-center justify-between px-8 bg-stone-900"
        style={{ height: 28 }}
      >
        <span className="text-[10px] font-bold tracking-[0.28em] text-white/60 uppercase">Aeris</span>
        <div className="flex items-center gap-6">
          {["About", "Sustainability", "Stockists", "Press"].map((item) => (
            <span key={item} className="text-[10px] text-white/40 hover:text-white/70 cursor-pointer transition-colors">
              {item}
            </span>
          ))}
        </div>
        <span className="text-[9px] text-white/30">&#169; 2026 Aeris. All rights reserved.</span>
      </div>

    </div>
  );
}
