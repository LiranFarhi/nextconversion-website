import type { ReactElement } from "react";
import { Leaf, MapPin, ShoppingBag, Star } from "lucide-react";

// ─── Photoreal mountain hero ──────────────────────────────────────────────────
// Layered gradients: sky wash → golden hour glow → atmospheric haze bands →
// multiple ridgelines at varying opacity → dense treeline → ground shadow
function MountainHero(): ReactElement {
  return (
    <svg
      viewBox="0 0 1000 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
    >
      <defs>
        {/* Sky: deep cerulean at zenith → warm golden-hour band → pale horizon */}
        <linearGradient id="hm-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a3a5c" />
          <stop offset="22%" stopColor="#2a5878" />
          <stop offset="50%" stopColor="#5a8fa8" />
          <stop offset="72%" stopColor="#a8c4b8" />
          <stop offset="88%" stopColor="#d4c89a" />
          <stop offset="100%" stopColor="#e8d8a0" />
        </linearGradient>
        {/* Golden sun bloom */}
        <radialGradient id="hm-sun" cx="68%" cy="28%" r="30%">
          <stop offset="0%" stopColor="#ffe8a0" stopOpacity="0.92" />
          <stop offset="18%" stopColor="#f0c860" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#e0a840" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#e0a840" stopOpacity="0" />
        </radialGradient>
        {/* Atmospheric scattering haze */}
        <linearGradient id="hm-haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8d8e8" stopOpacity="0" />
          <stop offset="40%" stopColor="#d8e8d0" stopOpacity="0.38" />
          <stop offset="60%" stopColor="#e0ead8" stopOpacity="0.62" />
          <stop offset="100%" stopColor="#e8f0e0" stopOpacity="0" />
        </linearGradient>
        {/* Far ridgeline gradient */}
        <linearGradient id="hm-ridge-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6080a0" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#40607a" stopOpacity="0.7" />
        </linearGradient>
        {/* Mid ridgeline */}
        <linearGradient id="hm-ridge-mid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#385828" />
          <stop offset="100%" stopColor="#203818" />
        </linearGradient>
        {/* Near ridge */}
        <linearGradient id="hm-ridge-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#243c18" />
          <stop offset="100%" stopColor="#0e2008" />
        </linearGradient>
        {/* Snow: bright top → shadowed base */}
        <linearGradient id="hm-snow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0f4f8" />
          <stop offset="60%" stopColor="#d8e4ec" />
          <stop offset="100%" stopColor="#b8c8d8" stopOpacity="0.7" />
        </linearGradient>
        {/* Scrim for text legibility */}
        <linearGradient id="hm-scrim" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="42%" stopColor="#000" stopOpacity="0.08" />
          <stop offset="78%" stopColor="#0a1a0a" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#0a1a0a" stopOpacity="0.88" />
        </linearGradient>
        {/* Vignette edges */}
        <radialGradient id="hm-vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.38" />
        </radialGradient>
        <filter id="hm-blur-far">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
        <filter id="hm-blur-mid">
          <feGaussianBlur stdDeviation="0.9" />
        </filter>
      </defs>

      {/* Base sky wash */}
      <rect width="1000" height="400" fill="url(#hm-sky)" />

      {/* Sun bloom */}
      <rect width="1000" height="400" fill="url(#hm-sun)" />

      {/* Distant ghost mountains — most atmospheric, blurred */}
      <g filter="url(#hm-blur-far)">
        <polygon
          points="0,400 0,230 70,170 150,200 230,145 330,185 430,118 520,162 630,100 730,148 830,108 930,142 1000,125 1000,400"
          fill="url(#hm-ridge-far)"
        />
      </g>

      {/* Atmospheric haze band over distant peaks */}
      <rect x="0" y="160" width="1000" height="90" fill="url(#hm-haze)" />

      {/* Snow caps on distant peaks */}
      <g filter="url(#hm-blur-far)" opacity="0.75">
        <polygon points="430,118 455,138 410,140" fill="url(#hm-snow)" />
        <polygon points="630,100 660,122 605,124" fill="url(#hm-snow)" />
        <polygon points="230,145 252,162 210,164" fill="url(#hm-snow)" />
        <polygon points="830,108 852,128 810,130" fill="url(#hm-snow)" />
      </g>

      {/* Mid-ground mountains — sharper, darker green */}
      <g filter="url(#hm-blur-mid)">
        <polygon
          points="0,400 0,268 55,222 110,248 185,195 275,232 380,172 480,215 575,158 680,200 775,152 875,188 1000,165 1000,400"
          fill="url(#hm-ridge-mid)"
          opacity="0.82"
        />
      </g>

      {/* Mid snow caps */}
      <g filter="url(#hm-blur-mid)" opacity="0.88">
        <polygon points="380,172 402,192 358,194" fill="url(#hm-snow)" />
        <polygon points="575,158 594,178 556,180" fill="url(#hm-snow)" />
      </g>

      {/* Second haze layer between mid and near */}
      <rect x="0" y="230" width="1000" height="55" fill="#c8d8c0" opacity="0.18" />

      {/* Near foreground ridge — darkest, sharpest */}
      <polygon
        points="0,400 0,295 45,260 95,280 160,245 240,272 330,228 440,265 545,218 645,258 740,212 840,248 940,220 1000,238 1000,400"
        fill="url(#hm-ridge-near)"
        opacity="0.96"
      />

      {/* Dense treeline silhouette — randomized conifers */}
      {(
        [
          [8, 292, 28], [28, 288, 32], [52, 295, 26], [76, 284, 30], [98, 290, 28],
          [120, 280, 34], [145, 286, 30], [168, 274, 36], [194, 283, 28], [218, 278, 32],
          [244, 285, 26], [268, 270, 38], [295, 278, 30], [320, 265, 34], [348, 274, 28],
          [374, 260, 36], [402, 270, 30], [428, 255, 38], [455, 265, 32], [482, 252, 36],
          [510, 260, 30], [538, 248, 40], [566, 258, 32], [595, 245, 38], [623, 254, 30],
          [652, 240, 40], [680, 250, 34], [709, 238, 38], [737, 246, 30], [765, 235, 36],
          [793, 244, 28], [820, 232, 38], [848, 240, 32], [875, 228, 40], [903, 236, 30],
          [930, 225, 36], [957, 232, 28], [980, 220, 36], [996, 230, 28],
        ] as [number, number, number][]
      ).map(([x, y, h]) => (
        <g key={`tree-${x}`}>
          {/* trunk */}
          <rect x={x + 5} y={y + h - 6} width={3} height={8} fill="#0a1808" opacity="0.9" />
          {/* layered triangles for volume */}
          <polygon
            points={`${x},${y + h} ${x + 6.5},${y + h * 0.45} ${x + 13},${y + h}`}
            fill="#0e2008"
            opacity="0.95"
          />
          <polygon
            points={`${x + 1},${y + h * 0.7} ${x + 6.5},${y + h * 0.28} ${x + 12},${y + h * 0.7}`}
            fill="#162c10"
            opacity="0.88"
          />
          <polygon
            points={`${x + 2},${y + h * 0.5} ${x + 6.5},${y + h * 0.14} ${x + 11},${y + h * 0.5}`}
            fill="#1e3c16"
            opacity="0.8"
          />
        </g>
      ))}

      {/* Ground shadow band */}
      <rect x="0" y="360" width="1000" height="40" fill="#080e06" opacity="0.85" />

      {/* Scrim for text */}
      <rect width="1000" height="400" fill="url(#hm-scrim)" />

      {/* Edge vignette */}
      <rect width="1000" height="400" fill="url(#hm-vignette)" />

      {/* Subtle film grain texture via small noise rects */}
      {(
        [
          [120, 40], [340, 80], [580, 30], [800, 60], [950, 90],
          [200, 150], [450, 130], [700, 170], [100, 200], [880, 180],
        ] as [number, number][]
      ).map(([gx, gy]) => (
        <rect key={`grain-${gx}-${gy}`} x={gx} y={gy} width="180" height="80"
          fill="white" opacity="0.012" />
      ))}
    </svg>
  );
}

// ─── Product photo renders ────────────────────────────────────────────────────
// Each uses layered gradients + light sourcing + shadows to read like studio lit gear

function JacketRender(): ReactElement {
  return (
    <svg viewBox="0 0 120 130" aria-hidden="true" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="jr-body" x1="0.2" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#4a8040" />
          <stop offset="35%" stopColor="#366030" />
          <stop offset="100%" stopColor="#1e3c18" />
        </linearGradient>
        <linearGradient id="jr-sleeve-l" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#5a9850" />
          <stop offset="100%" stopColor="#2a5022" />
        </linearGradient>
        <linearGradient id="jr-sleeve-r" x1="1" y1="0" x2="0" y2="0.5">
          <stop offset="0%" stopColor="#5a9850" />
          <stop offset="100%" stopColor="#2a5022" />
        </linearGradient>
        <linearGradient id="jr-hood" x1="0.3" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#5aaa48" />
          <stop offset="100%" stopColor="#2a5022" />
        </linearGradient>
        <linearGradient id="jr-zip" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ab878" />
          <stop offset="100%" stopColor="#4a7840" />
        </linearGradient>
        <radialGradient id="jr-highlight" cx="30%" cy="18%" r="45%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="jr-shadow">
          <feDropShadow dx="3" dy="5" stdDeviation="5" floodOpacity="0.35" />
        </filter>
      </defs>
      <g filter="url(#jr-shadow)">
        {/* Left sleeve */}
        <path d="M18 42 L4 32 L2 55 L12 58 L16 72 L30 70 Z"
          fill="url(#jr-sleeve-l)" stroke="#1a3014" strokeWidth="0.8" strokeLinejoin="round" />
        {/* Right sleeve */}
        <path d="M102 42 L116 32 L118 55 L108 58 L104 72 L90 70 Z"
          fill="url(#jr-sleeve-r)" stroke="#1a3014" strokeWidth="0.8" strokeLinejoin="round" />
        {/* Main body */}
        <path d="M18 42 L22 38 C30 22 90 22 98 38 L102 42 L104 100 L16 100 Z"
          fill="url(#jr-body)" stroke="#162810" strokeWidth="1" strokeLinejoin="round" />
        {/* Hood */}
        <path d="M38 38 C40 18 80 18 82 38 L80 46 L60 50 L40 46 Z"
          fill="url(#jr-hood)" stroke="#1a3014" strokeWidth="0.9" />
        {/* Zip line */}
        <line x1="60" y1="50" x2="60" y2="98" stroke="#8ab878" strokeWidth="2" />
        {/* Zip pull */}
        <rect x="56" y="64" width="8" height="6" rx="1" fill="url(#jr-zip)" stroke="#3a6030" strokeWidth="0.7" />
        {/* Pocket left */}
        <path d="M22 72 L22 90 L46 90 L46 72 Q34 70 22 72 Z"
          fill="#2a5022" stroke="#1a3014" strokeWidth="0.7" />
        {/* Pocket right */}
        <path d="M74 72 L74 90 L98 90 L98 72 Q86 70 74 72 Z"
          fill="#2a5022" stroke="#1a3014" strokeWidth="0.7" />
        {/* Chest pocket */}
        <rect x="66" y="54" width="22" height="14" rx="2" fill="#2a5022" stroke="#1a3014" strokeWidth="0.7" />
        {/* Seam taping detail lines */}
        <path d="M22 52 Q60 48 98 52" fill="none" stroke="#5a9050" strokeWidth="0.7" opacity="0.5" />
        {/* Highlight sheen */}
        <path d="M18 42 L22 38 C30 22 90 22 98 38 L102 42 L104 100 L16 100 Z"
          fill="url(#jr-highlight)" />
      </g>
    </svg>
  );
}

function MerinoRender(): ReactElement {
  return (
    <svg viewBox="0 0 120 130" aria-hidden="true" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="mr-body" x1="0.25" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#c8b080" />
          <stop offset="40%" stopColor="#a88c60" />
          <stop offset="100%" stopColor="#786040" />
        </linearGradient>
        <linearGradient id="mr-sleeve-l" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#d4bc90" />
          <stop offset="100%" stopColor="#806848" />
        </linearGradient>
        <linearGradient id="mr-sleeve-r" x1="1" y1="0" x2="0" y2="0.4">
          <stop offset="0%" stopColor="#d4bc90" />
          <stop offset="100%" stopColor="#806848" />
        </linearGradient>
        <radialGradient id="mr-highlight" cx="28%" cy="15%" r="42%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="mr-shadow">
          <feDropShadow dx="3" dy="5" stdDeviation="4.5" floodOpacity="0.3" />
        </filter>
      </defs>
      <g filter="url(#mr-shadow)">
        {/* Left sleeve */}
        <path d="M20 44 L5 34 L3 68 L16 70 L20 80 L32 78 Z"
          fill="url(#mr-sleeve-l)" stroke="#604830" strokeWidth="0.9" strokeLinejoin="round" />
        {/* Right sleeve */}
        <path d="M100 44 L115 34 L117 68 L104 70 L100 80 L88 78 Z"
          fill="url(#mr-sleeve-r)" stroke="#604830" strokeWidth="0.9" strokeLinejoin="round" />
        {/* Body */}
        <path d="M20 44 L24 40 C32 24 88 24 96 40 L100 44 L102 102 L18 102 Z"
          fill="url(#mr-body)" stroke="#504030" strokeWidth="1" strokeLinejoin="round" />
        {/* Crew neck */}
        <path d="M42 40 C46 28 74 28 78 40 L76 48 L44 48 Z"
          fill="#9a7c58" stroke="#604830" strokeWidth="0.9" />
        {/* Rib texture lines on neck */}
        {[32, 36, 40, 44].map((y) => (
          <line key={y} x1="44" y1={y} x2="76" y2={y}
            stroke="#7a6040" strokeWidth="0.5" opacity="0.5" />
        ))}
        {/* Body knit texture */}
        {[55, 65, 75, 85, 95].map((y) => (
          <line key={y} x1="20" y1={y} x2="100" y2={y}
            stroke="#906c48" strokeWidth="0.5" opacity="0.3" />
        ))}
        {/* Bottom rib */}
        <path d="M18 96 L102 96 L102 104 L18 104 Z" fill="#8a6840" opacity="0.5" />
        {[97, 99, 101, 103].map((y) => (
          <line key={y} x1="18" y1={y} x2="102" y2={y}
            stroke="#604830" strokeWidth="0.5" opacity="0.35" />
        ))}
        {/* Label badge */}
        <rect x="44" y="60" width="32" height="10" rx="2" fill="#604830" opacity="0.7" />
        <text x="60" y="68" fontSize="5" fill="#e8d4a8" textAnchor="middle"
          fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="0.08em">MERINO 18.5μ</text>
        {/* Highlight */}
        <path d="M20 44 L24 40 C32 24 88 24 96 40 L100 44 L102 102 L18 102 Z"
          fill="url(#mr-highlight)" />
      </g>
    </svg>
  );
}

function ShoeRender(): ReactElement {
  return (
    <svg viewBox="0 0 130 110" aria-hidden="true" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="sr-sole" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3428" />
          <stop offset="100%" stopColor="#1a140e" />
        </linearGradient>
        <linearGradient id="sr-upper" x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#5a5e50" />
          <stop offset="45%" stopColor="#424638" />
          <stop offset="100%" stopColor="#2a2e20" />
        </linearGradient>
        <linearGradient id="sr-toe" x1="0" y1="0" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#3a3e2e" />
          <stop offset="100%" stopColor="#282c1c" />
        </linearGradient>
        <linearGradient id="sr-accent" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d45020" />
          <stop offset="100%" stopColor="#b83c10" />
        </linearGradient>
        <radialGradient id="sr-highlight" cx="30%" cy="20%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="sr-shadow">
          <feDropShadow dx="4" dy="6" stdDeviation="5" floodOpacity="0.4" />
        </filter>
      </defs>
      <g filter="url(#sr-shadow)">
        {/* Outsole */}
        <path d="M8 88 Q6 98 22 98 L104 98 Q120 98 120 89 Q120 80 108 80 L22 80 Q8 80 8 88 Z"
          fill="url(#sr-sole)" />
        {/* Lug pattern */}
        {[16, 28, 40, 52, 64, 76, 88, 100].map((x) => (
          <rect key={x} x={x} y="90" width="10" height="8" rx="1.5"
            fill="#2a2418" stroke="#1a140e" strokeWidth="0.4" />
        ))}
        {/* Midsole stripe */}
        <path d="M8 80 Q6 88 22 88 L108 88 Q120 88 120 81 L108 78 L22 78 Z"
          fill="#c8c4a8" opacity="0.9" />
        {/* Upper body */}
        <path d="M20 80 Q14 62 18 48 Q24 30 48 26 L82 24 Q100 26 106 44 L112 80 Z"
          fill="url(#sr-upper)" stroke="#282c1c" strokeWidth="1.2" strokeLinejoin="round" />
        {/* Toe box */}
        <path d="M20 80 Q14 62 20 48 Q26 38 44 34 L48 80 Z"
          fill="url(#sr-toe)" stroke="#1e2218" strokeWidth="0.9" />
        {/* Side mesh panel */}
        <path d="M48 80 L46 30 L80 24 L84 26 L85 78 Z"
          fill="#4e5244" stroke="#383c28" strokeWidth="0.7" />
        {/* GTX membrane line */}
        <path d="M48 80 L46 30" stroke="#d45020" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M85 78 L84 26" stroke="#d45020" strokeWidth="1.8" strokeLinecap="round" />
        {/* Accent stripe */}
        <path d="M22 60 Q36 54 50 56 L52 64 Q38 62 24 68 Z"
          fill="url(#sr-accent)" opacity="0.85" />
        {/* Lace eyelets row 1 */}
        {[52, 60, 68, 76].map((y) => (
          <g key={y}>
            <circle cx="50" cy={y} r="2.2" fill="#1a1a10" />
            <circle cx="82" cy={y} r="2.2" fill="#1a1a10" />
          </g>
        ))}
        {/* Laces */}
        {[52, 60, 68, 76].map((y) => (
          <line key={y} x1="50" y1={y} x2="82" y2={y}
            stroke="#e8e4d0" strokeWidth="1.6" />
        ))}
        {/* GTX badge */}
        <rect x="90" y="48" width="20" height="10" rx="2" fill="#d45020" />
        <text x="100" y="56" fontSize="5.5" fill="#fff" textAnchor="middle"
          fontFamily="Georgia, serif" fontWeight="bold">GTX</text>
        {/* Collar pad */}
        <path d="M20 72 Q18 65 22 60 L22 80 Z" fill="#383c28" opacity="0.6" />
        {/* Highlight sheen */}
        <path d="M20 80 Q14 62 18 48 Q24 30 48 26 L82 24 Q100 26 106 44 L112 80 Z"
          fill="url(#sr-highlight)" />
      </g>
    </svg>
  );
}

function PackRender(): ReactElement {
  return (
    <svg viewBox="0 0 110 135" aria-hidden="true" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="pr-body" x1="0.2" y1="0" x2="0.9" y2="1">
          <stop offset="0%" stopColor="#7a6448" />
          <stop offset="40%" stopColor="#5c4c34" />
          <stop offset="100%" stopColor="#3c3020" />
        </linearGradient>
        <linearGradient id="pr-front" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#6a5440" />
          <stop offset="100%" stopColor="#3a2c1c" />
        </linearGradient>
        <linearGradient id="pr-top" x1="0.3" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#8a7458" />
          <stop offset="100%" stopColor="#5a4838" />
        </linearGradient>
        <linearGradient id="pr-strap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4a3c28" />
          <stop offset="100%" stopColor="#2a2010" />
        </linearGradient>
        <radialGradient id="pr-highlight" cx="25%" cy="15%" r="50%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <filter id="pr-shadow">
          <feDropShadow dx="4" dy="6" stdDeviation="5" floodOpacity="0.38" />
        </filter>
      </defs>
      <g filter="url(#pr-shadow)">
        {/* Back panel / straps */}
        <rect x="20" y="30" width="70" height="88" rx="10" fill="#2e2418" opacity="0.5" />
        {/* Left shoulder strap */}
        <path d="M26 30 Q22 55 24 90 L34 90 Q32 55 36 30 Z"
          fill="url(#pr-strap)" stroke="#1a1008" strokeWidth="0.7" />
        {/* Right shoulder strap */}
        <path d="M74 30 Q78 55 76 90 L86 90 Q84 55 80 30 Z"
          fill="url(#pr-strap)" stroke="#1a1008" strokeWidth="0.7" />
        {/* Main body */}
        <rect x="22" y="20" width="66" height="86" rx="9" fill="url(#pr-body)"
          stroke="#2a2010" strokeWidth="1.2" />
        {/* Top lid */}
        <path d="M22 20 Q22 10 30 8 L80 8 Q88 10 88 20 L88 32 L22 32 Z"
          fill="url(#pr-top)" stroke="#2a2010" strokeWidth="1" />
        {/* Top haul loop */}
        <path d="M46 8 Q55 2 64 8" fill="none" stroke="#2a2010" strokeWidth="4"
          strokeLinecap="round" />
        {/* Front pocket */}
        <rect x="30" y="60" width="50" height="40" rx="6" fill="url(#pr-front)"
          stroke="#2a2010" strokeWidth="1" />
        {/* Front pocket zipper */}
        <path d="M34 60 Q55 56 76 60" fill="none" stroke="#9a8460" strokeWidth="1.8" />
        {/* Zipper pull */}
        <circle cx="55" cy="58" r="3" fill="#c8b080" stroke="#8a7040" strokeWidth="0.8" />
        {/* Compression straps */}
        <line x1="22" y1="46" x2="10" y2="52" stroke="#2a2010" strokeWidth="3"
          strokeLinecap="round" />
        <line x1="88" y1="46" x2="100" y2="52" stroke="#2a2010" strokeWidth="3"
          strokeLinecap="round" />
        {/* Side buckle left */}
        <rect x="8" y="38" width="14" height="30" rx="4" fill="#2a2010"
          stroke="#1a1008" strokeWidth="0.8" opacity="0.9" />
        {/* Main zipper */}
        <path d="M26 32 Q55 28 84 32" fill="none" stroke="#9a8460" strokeWidth="1.8" />
        {/* Volume badge */}
        <rect x="34" y="20" width="42" height="10" rx="3" fill="#2d5a27" opacity="0.9" />
        <text x="55" y="28" fontSize="5.5" fill="#a8c890" textAnchor="middle"
          fontFamily="Georgia, serif" fontWeight="bold" letterSpacing="0.06em">40L  BIO</text>
        {/* Mesh side pocket */}
        <path d="M88 50 L102 48 L104 72 L88 74 Z" fill="#3a3020" stroke="#2a2010"
          strokeWidth="0.6" opacity="0.6" />
        {/* Hip belt tab */}
        <rect x="30" y="104" width="16" height="8" rx="3" fill="#4a3828"
          stroke="#2a2010" strokeWidth="0.7" />
        <rect x="64" y="104" width="16" height="8" rx="3" fill="#4a3828"
          stroke="#2a2010" strokeWidth="0.7" />
        {/* Highlight sheen */}
        <rect x="22" y="20" width="66" height="86" rx="9" fill="url(#pr-highlight)" />
      </g>
    </svg>
  );
}

// ─── Star rating ──────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }): ReactElement {
  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          size={8}
          style={{
            color: n <= rating ? "#c8890a" : "#c8b896",
            fill: n <= rating ? "#c8890a" : "none",
          }}
        />
      ))}
    </div>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────
function ProductCard({
  render,
  name,
  price,
  tag,
  bg,
  rating,
  reviews,
}: {
  render: ReactElement;
  name: string;
  price: string;
  tag: string;
  bg: string;
  rating: number;
  reviews: number;
}): ReactElement {
  return (
    <div
      className="flex flex-col rounded-none overflow-hidden"
      style={{
        background: "#faf6ef",
        border: "1px solid #d0c8b0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      {/* Product render area */}
      <div className="relative flex-shrink-0" style={{ background: bg, aspectRatio: "1 / 0.85" }}>
        <div className="absolute inset-0 flex items-center justify-center p-[8%]">
          {render}
        </div>
        {/* Studio floor shadow */}
        <div
          className="absolute bottom-0 left-[10%] right-[10%]"
          style={{
            height: "12px",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 70%)",
          }}
        />
        {/* Eco badge */}
        <div
          className="absolute top-[7px] left-[7px] px-[6px] py-[3px]"
          style={{
            background: "rgba(22,52,16,0.88)",
            backdropFilter: "blur(2px)",
          }}
        >
          <span
            className="font-bold uppercase tracking-[0.14em] leading-none"
            style={{ fontSize: "7.5px", color: "#a8d090", fontFamily: "Georgia, serif" }}
          >
            {tag}
          </span>
        </div>
        {/* Subtle highlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)",
          }}
        />
      </div>
      {/* Info row */}
      <div className="px-[10px] pt-[8px] pb-[9px] flex flex-col gap-[5px]"
        style={{ borderTop: "1px solid #e0d8c0" }}>
        <p
          className="leading-tight font-semibold"
          style={{ fontSize: "10.5px", color: "#1a2a16", fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          {name}
        </p>
        <div className="flex items-center gap-[5px]">
          <StarRating rating={rating} />
          <span style={{ fontSize: "8px", color: "#8a7e65" }}>({reviews})</span>
        </div>
        <div className="flex items-center justify-between mt-[1px]">
          <span
            className="font-black leading-none"
            style={{ fontSize: "15px", color: "#2d5a27", fontFamily: "Georgia, serif" }}
          >
            {price}
          </span>
          <button
            className="font-bold uppercase tracking-[0.15em] leading-none"
            style={{
              fontSize: "8px",
              background: "#2d5a27",
              color: "#c8e8a8",
              padding: "4px 9px",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.12em",
            }}
          >
            Add to Kit
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Hairline rule ────────────────────────────────────────────────────────────
function Rule({ color, thick }: { color?: string; thick?: boolean }): ReactElement {
  return (
    <div
      className="w-full flex-shrink-0"
      style={{ borderTop: thick ? `2px solid ${color ?? "#2d5a27"}` : `0.75px solid ${color ?? "#c0b898"}` }}
    />
  );
}

// ─── Drop-cap paragraph ───────────────────────────────────────────────────────
function DropCapPara({ text, cap }: { text: string; cap: string }): ReactElement {
  return (
    <p className="leading-relaxed" style={{ fontSize: "11.5px", color: "#342e24", lineHeight: 1.7 }}>
      <span
        className="float-left font-black leading-none"
        style={{
          fontSize: "52px",
          color: "#2d5a27",
          fontFamily: "Georgia, 'Times New Roman', serif",
          lineHeight: 0.78,
          paddingRight: "4px",
          paddingTop: "3px",
        }}
      >
        {cap}
      </span>
      {text}
    </p>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function HikingMagazine(): ReactElement {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{
        background: "#f0ead8",
        color: "#1e1e18",
        fontFamily: "'Georgia', 'Times New Roman', serif",
      }}
    >
      {/* ══════════════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════════════ */}
      <header className="flex-shrink-0" style={{ background: "#f0ead8" }}>
        {/* Top accent rule — thick green */}
        <div style={{ height: "3px", background: "#2d5a27" }} />
        {/* Secondary thin rule */}
        <div style={{ height: "1px", background: "#4a7c40", opacity: 0.4, marginTop: "2px" }} />

        <div className="flex items-center justify-between px-7 py-[6px]">
          {/* LEFT: issue meta */}
          <div className="flex items-center gap-[12px]" style={{ minWidth: "160px" }}>
            <span
              className="uppercase font-bold tracking-[0.26em]"
              style={{ fontSize: "8.5px", color: "#5a5040", letterSpacing: "0.24em" }}
            >
              Issue&#x202F;04
            </span>
            <span style={{ color: "#c0b490", fontSize: "10px" }}>·</span>
            <span
              className="uppercase tracking-[0.2em]"
              style={{ fontSize: "8px", color: "#7a7060" }}
            >
              Spring&#x202F;/&#x202F;Summer&#x202F;2026
            </span>
          </div>

          {/* CENTER: wordmark */}
          <div className="flex flex-col items-center" style={{ gap: "1px" }}>
            {/* Top rule pair flanking title */}
            <div className="flex items-center gap-[14px] w-full justify-center">
              <div style={{ width: "38px", height: "0.75px", background: "#2d5a27" }} />
              <span
                className="uppercase tracking-[0.06em] font-bold"
                style={{ fontSize: "8px", color: "#6a8f5a", letterSpacing: "0.22em" }}
              >
                The&#x202F;Trail&#x202F;Journal
              </span>
              <div style={{ width: "38px", height: "0.75px", background: "#2d5a27" }} />
            </div>
            <h1
              className="font-black uppercase leading-none"
              style={{
                fontSize: "36px",
                color: "#142210",
                fontFamily: "Georgia, 'Times New Roman', serif",
                letterSpacing: "0.28em",
                lineHeight: 1,
              }}
            >
              WILDLINE
            </h1>
            <div className="flex items-center gap-[10px]">
              <div style={{ width: "28px", height: "0.75px", background: "#c0b490" }} />
              <span
                className="uppercase tracking-[0.32em]"
                style={{ fontSize: "6.5px", color: "#9a9080" }}
              >
                Gear&#x202F;&amp;&#x202F;Terrain
              </span>
              <div style={{ width: "28px", height: "0.75px", background: "#c0b490" }} />
            </div>
          </div>

          {/* RIGHT: date + eco badge */}
          <div
            className="flex items-center gap-[12px] justify-end"
            style={{ minWidth: "160px" }}
          >
            <span
              className="uppercase tracking-[0.18em]"
              style={{ fontSize: "8px", color: "#7a7060" }}
            >
              Jun&#x202F;2026
            </span>
            <span style={{ color: "#c0b490", fontSize: "10px" }}>·</span>
            <div
              className="flex items-center gap-[4px] px-[7px] py-[3px]"
              style={{ border: "1px solid #4a7c40" }}
            >
              <Leaf size={8} style={{ color: "#4a7c40" }} />
              <span
                className="uppercase font-bold tracking-[0.2em]"
                style={{ fontSize: "7px", color: "#4a7c40" }}
              >
                B&#x202F;Corp
              </span>
            </div>
          </div>
        </div>

        {/* Masthead footer rule: thick + thin */}
        <div style={{ height: "2px", background: "#2d5a27" }} />
        <div style={{ height: "1px", background: "#2d5a27", opacity: 0.3, marginTop: "2px" }} />
      </header>

      {/* ══════════════════════════════════════════════════
          BODY — left editorial + right shop
      ══════════════════════════════════════════════════ */}
      <div className="flex flex-1 min-h-0 overflow-hidden">

        {/* ─────────────────────────────────────────────
            LEFT — hero + editorial body  (58%)
        ───────────────────────────────────────────── */}
        <div
          className="flex flex-col flex-shrink-0 overflow-hidden"
          style={{ width: "58%", borderRight: "0.75px solid #b8b098" }}
        >
          {/* HERO SPREAD */}
          <div
            className="relative flex-shrink-0 overflow-hidden"
            style={{ height: "43%" }}
          >
            <MountainHero />

            {/* Feature kicker badge */}
            <div className="absolute top-[14px] left-[18px] flex items-center gap-[8px]">
              <div
                className="px-[8px] py-[3px]"
                style={{ background: "#2d5a27" }}
              >
                <span
                  className="font-bold uppercase tracking-[0.28em]"
                  style={{ fontSize: "8px", color: "#a8d090", fontFamily: "Georgia, serif" }}
                >
                  Feature
                </span>
              </div>
              <div
                className="px-[7px] py-[3px]"
                style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(3px)" }}
              >
                <span
                  className="uppercase tracking-[0.22em]"
                  style={{ fontSize: "7.5px", color: "#d0e8c0" }}
                >
                  <MapPin
                    size={7}
                    style={{ display: "inline", marginRight: "3px", verticalAlign: "middle" }}
                  />
                  Cascade&#x202F;Range
                </span>
              </div>
            </div>

            {/* Caption top-right */}
            <div className="absolute top-[14px] right-[18px]">
              <span
                className="uppercase tracking-[0.2em]"
                style={{ fontSize: "7px", color: "rgba(200,230,180,0.7)" }}
              >
                Photo&#x202F;essay
              </span>
            </div>

            {/* Headline + standfirst + byline overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-[18px] pb-[14px]">
              <h2
                className="font-black leading-none"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontSize: "54px",
                  color: "#f4f0e6",
                  textShadow: "0 1px 24px rgba(0,0,0,0.6), 0 0 4px rgba(0,0,0,0.3)",
                  letterSpacing: "-0.015em",
                  lineHeight: 0.96,
                }}
              >
                Into<br />the&#x202F;Green
              </h2>
              {/* Hairline rule between headline and standfirst */}
              <div
                style={{
                  width: "48px",
                  height: "2px",
                  background: "#6ab856",
                  margin: "7px 0 6px",
                }}
              />
              <p
                className="leading-snug"
                style={{
                  fontSize: "12.5px",
                  color: "#c0dca8",
                  fontStyle: "italic",
                  maxWidth: "390px",
                  lineHeight: 1.45,
                  textShadow: "0 1px 8px rgba(0,0,0,0.5)",
                }}
              >
                Where bio-based films meet alpine seam tape — and the mountains
                finally get the gear they deserve.
              </p>
              {/* Byline row */}
              <div
                className="flex items-center gap-[8px] mt-[7px]"
                style={{ borderTop: "0.75px solid rgba(168,208,144,0.35)", paddingTop: "6px" }}
              >
                <span
                  className="font-bold uppercase tracking-[0.24em]"
                  style={{ fontSize: "8px", color: "rgba(168,208,144,0.9)", letterSpacing: "0.2em" }}
                >
                  By&#x202F;Maren&#x202F;Solberg
                </span>
                <span style={{ color: "rgba(168,208,144,0.4)", fontSize: "9px" }}>·</span>
                <span
                  className="uppercase tracking-[0.18em]"
                  style={{ fontSize: "7.5px", color: "rgba(168,208,144,0.7)" }}
                >
                  Photography&#x202F;by&#x202F;Elias&#x202F;Brandt
                </span>
                <span style={{ color: "rgba(168,208,144,0.4)", fontSize: "9px" }}>·</span>
                <span
                  className="uppercase tracking-[0.18em]"
                  style={{ fontSize: "7.5px", color: "rgba(168,208,144,0.7)" }}
                >
                  2&#x202F;438&#x202F;m
                </span>
              </div>
            </div>
          </div>

          {/* EDITORIAL BODY — two-column */}
          <div
            className="flex flex-1 min-h-0 overflow-hidden gap-0"
            style={{ background: "#f0ead8" }}
          >
            {/* Column 1 */}
            <div
              className="flex-1 min-w-0 flex flex-col px-[18px] pt-[12px] pb-[10px] gap-[8px]"
              style={{ borderRight: "0.75px solid #c8c0a8" }}
            >
              <Rule />
              <DropCapPara
                cap="T"
                text="he ridge arrives before dawn. The light is still grey-green — the kind that soaks into wool and disappears. Three days deep into the Cascades and the shell still breathes: 86&#x202F;% recycled content, zero compromise on waterproofing. Seam tape rated to 28&#x202F;000&#x202F;mm hydrostatic head. This is what responsible performance looks like."
              />
              <p className="leading-relaxed" style={{ fontSize: "11.5px", color: "#342e24", lineHeight: 1.7 }}>
                Post-consumer fleece lines the collar; face-fabric is spun from reclaimed ocean plastic. At 2&#x202F;400 metres the wind has opinions. The baffle construction holds. You stop noticing the jacket and start noticing the view.
              </p>
            </div>

            {/* Column 2 */}
            <div
              className="flex-1 min-w-0 flex flex-col px-[18px] pt-[12px] pb-[10px] gap-[8px]"
            >
              <Rule />
              {/* Pull-quote */}
              <blockquote
                className="relative"
                style={{
                  borderLeft: "3px solid #2d5a27",
                  paddingLeft: "12px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  marginBottom: "2px",
                }}
              >
                <p
                  className="italic font-semibold leading-snug"
                  style={{ fontSize: "14px", color: "#2d5a27", lineHeight: 1.38 }}
                >
                  &ldquo;You stop noticing the jacket and start noticing the view.&rdquo;
                </p>
                <cite
                  className="not-italic uppercase font-bold tracking-[0.22em] block mt-[5px]"
                  style={{ fontSize: "7.5px", color: "#8a7e65" }}
                >
                  — Maren Solberg, Cascade High Route
                </cite>
              </blockquote>
              <p className="leading-relaxed" style={{ fontSize: "11.5px", color: "#342e24", lineHeight: 1.7 }}>
                Merino wool has regulated temperature on high trails for centuries. The modern iteration — 18.5-micron superfine — pairs natural thermoregulation with a plant-based dye bath. Pack light; move fast; leave nothing but bootprints.
              </p>
              {/* Stat callout */}
              <div
                className="mt-auto flex items-stretch gap-0 overflow-hidden"
                style={{
                  background: "linear-gradient(110deg, #1e3c18 0%, #2d5a27 55%, #3a6b34 100%)",
                  border: "none",
                }}
              >
                <div className="px-[12px] py-[8px]">
                  <p
                    className="font-black leading-none"
                    style={{ fontSize: "26px", color: "#fff", fontFamily: "Georgia, serif" }}
                  >
                    86<span style={{ fontSize: "14px" }}>%</span>
                  </p>
                  <p
                    className="uppercase tracking-[0.2em] leading-none mt-[2px]"
                    style={{ fontSize: "7px", color: "#a8d090" }}
                  >
                    Recycled content
                  </p>
                </div>
                <div style={{ width: "0.75px", background: "#4a7c40" }} />
                <div className="px-[12px] py-[8px] flex items-center">
                  <p
                    className="italic leading-snug"
                    style={{ fontSize: "9.5px", color: "#c0e0a0", lineHeight: 1.45 }}
                  >
                    Highest in category — 2025&#x202F;Bluesign audit across full kit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─────────────────────────────────────────────
            RIGHT — Shop the Kit  (42%)
        ───────────────────────────────────────────── */}
        <div
          className="flex flex-col flex-shrink-0 overflow-hidden"
          style={{ width: "42%", background: "#e8e0cc" }}
        >
          {/* Shop header */}
          <div
            className="flex-shrink-0 px-[16px] pt-[10px] pb-[9px]"
            style={{
              background: "#e0d8c4",
              borderBottom: "2px solid #2d5a27",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[7px]">
                <ShoppingBag size={13} style={{ color: "#2d5a27" }} />
                <h3
                  className="font-black uppercase tracking-[0.24em] leading-none"
                  style={{ fontSize: "12px", color: "#142210", fontFamily: "Georgia, serif" }}
                >
                  Shop&#x202F;the&#x202F;Kit
                </h3>
              </div>
              <div className="flex items-center gap-[7px]">
                <span
                  className="uppercase tracking-[0.16em] font-bold"
                  style={{
                    fontSize: "7.5px",
                    color: "#2d5a27",
                    border: "1px solid #2d5a27",
                    padding: "2px 6px",
                  }}
                >
                  4 pieces
                </span>
                <div
                  className="font-black leading-none"
                  style={{
                    fontSize: "16px",
                    color: "#a8d090",
                    background: "#2d5a27",
                    padding: "3px 9px",
                    fontFamily: "Georgia, serif",
                  }}
                >
                  $645
                </div>
              </div>
            </div>
            <p
              className="italic leading-tight mt-[4px]"
              style={{ fontSize: "9.5px", color: "#5a5040" }}
            >
              As tested on the Cascade High Route — certified sustainable, trail-ready.
            </p>
          </div>

          {/* 2×2 product grid */}
          <div
            className="flex-1 min-h-0 grid grid-cols-2 overflow-hidden"
            style={{ gap: "8px", padding: "10px" }}
          >
            <ProductCard
              render={<JacketRender />}
              name="Recycled Shell Jacket"
              price="$210"
              tag="Eco Shell"
              bg="linear-gradient(135deg, #d4e8c8 0%, #b8d4a8 50%, #9ac090 100%)"
              rating={5}
              reviews={312}
            />
            <ProductCard
              render={<MerinoRender />}
              name="Merino Base Layer"
              price="$85"
              tag="Superfine"
              bg="linear-gradient(135deg, #e8dcc4 0%, #d4c4a0 50%, #c0ae84 100%)"
              rating={4}
              reviews={189}
            />
            <ProductCard
              render={<ShoeRender />}
              name="Trail Runner GTX"
              price="$160"
              tag="Waterproof"
              bg="linear-gradient(135deg, #d8d4c4 0%, #c4c0b0 50%, #b0ac9c 100%)"
              rating={5}
              reviews={447}
            />
            <ProductCard
              render={<PackRender />}
              name="40L Bio-Pack"
              price="$190"
              tag="Biobased"
              bg="linear-gradient(135deg, #e0d0b0 0%, #ccc0a0 50%, #b8a880 100%)"
              rating={4}
              reviews={228}
            />
          </div>

          {/* Kit total strip */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-[16px] py-[9px]"
            style={{
              background: "linear-gradient(100deg, #142210 0%, #2d5a27 50%, #3a6b34 100%)",
              borderTop: "1px solid #0e1a0c",
            }}
          >
            <div className="flex items-center gap-[10px]">
              <Leaf size={14} style={{ color: "#a8d090" }} />
              <div>
                <p
                  className="uppercase tracking-[0.22em] leading-none"
                  style={{ fontSize: "7px", color: "#88b878" }}
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
            <div style={{ width: "0.75px", alignSelf: "stretch", background: "#4a7c40" }} />
            <div className="text-right">
              <p
                className="uppercase tracking-[0.18em] leading-none"
                style={{ fontSize: "7px", color: "#88b878" }}
              >
                Leave No Trace Certified
              </p>
              <p
                className="italic leading-tight mt-[3px]"
                style={{ fontSize: "9px", color: "#c0e0a0" }}
              >
                Ships carbon&#x2011;neutral worldwide
              </p>
            </div>
            <button
              style={{
                background: "#a8d090",
                color: "#142210",
                fontSize: "8.5px",
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "6px 12px",
                border: "none",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
              }}
            >
              Add All
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer
        className="flex-shrink-0 flex items-center justify-between px-7 py-[5px]"
        style={{
          borderTop: "1.5px solid #b8b098",
          background: "#e8e2d0",
        }}
      >
        <div className="flex items-center gap-[8px]">
          <span
            className="font-black uppercase tracking-[0.3em]"
            style={{ fontSize: "9.5px", color: "#2d5a27", fontFamily: "Georgia, serif" }}
          >
            WILDLINE
          </span>
          <span style={{ color: "#b0a888", fontSize: "9px" }}>—</span>
          <span
            className="uppercase tracking-[0.18em]"
            style={{ fontSize: "7.5px", color: "#7a7060" }}
          >
            The Trail Journal
          </span>
        </div>
        <div className="flex items-center gap-[14px]">
          <span className="uppercase tracking-[0.18em]" style={{ fontSize: "7.5px", color: "#7a7060" }}>
            wildline.co/shop
          </span>
          <span style={{ color: "#c0b490" }}>·</span>
          <span className="uppercase tracking-[0.18em]" style={{ fontSize: "7.5px", color: "#7a7060" }}>
            @wildlinemag
          </span>
          <span style={{ color: "#c0b490" }}>·</span>
          <span className="uppercase tracking-[0.18em]" style={{ fontSize: "7.5px", color: "#7a7060" }}>
            ISSN&#x202F;2398&#x2011;4421
          </span>
        </div>
        <span
          className="font-semibold"
          style={{ fontSize: "8.5px", color: "#7a7060" }}
        >
          Pg.&#x202F;48
        </span>
      </footer>
    </div>
  );
}
