import type { ReactElement } from "react";
import {
  ChevronLeft,
  Phone,
  MoreVertical,
  ShoppingBag,
  Mic,
  Send,
  Plus,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// JEWELLERY SVGs — layered gradients + specular highlights for photoreal feel
// ─────────────────────────────────────────────────────────────────────────────

function HoopsHero(): ReactElement {
  return (
    <svg
      width="130"
      height="110"
      viewBox="0 0 130 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Studio background radial vignette */}
        <radialGradient id="hh-bg" cx="50%" cy="48%" r="55%">
          <stop offset="0%" stopColor="#fdf3d0" />
          <stop offset="100%" stopColor="#d4a830" stopOpacity="0.35" />
        </radialGradient>
        {/* Main gold body */}
        <linearGradient id="hh-gold-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffe28a" />
          <stop offset="22%" stopColor="#f0c040" />
          <stop offset="50%" stopColor="#b87a10" />
          <stop offset="78%" stopColor="#e8b840" />
          <stop offset="100%" stopColor="#fad060" />
        </linearGradient>
        {/* Specular highlight sweep */}
        <linearGradient id="hh-spec-l" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#ffe08a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c88820" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hh-gold-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffe28a" />
          <stop offset="22%" stopColor="#f0c040" />
          <stop offset="50%" stopColor="#b87a10" />
          <stop offset="78%" stopColor="#e8b840" />
          <stop offset="100%" stopColor="#fad060" />
        </linearGradient>
        <linearGradient id="hh-spec-r" x1="100%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="40%" stopColor="#ffe08a" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#c88820" stopOpacity="0" />
        </linearGradient>
        {/* Shadow drop */}
        <radialGradient id="hh-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7a4800" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#7a4800" stopOpacity="0" />
        </radialGradient>
        <filter id="hh-blur" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx="40" cy="99" rx="22" ry="5" fill="url(#hh-shadow)" filter="url(#hh-blur)" />
      <ellipse cx="90" cy="99" rx="22" ry="5" fill="url(#hh-shadow)" filter="url(#hh-blur)" />

      {/* ── LEFT HOOP ── */}
      {/* outer ring base — dark gold */}
      <ellipse cx="40" cy="58" rx="27" ry="30" stroke="#8a5a08" strokeWidth="13" fill="none" />
      {/* main gold gradient ring */}
      <ellipse cx="40" cy="58" rx="27" ry="30" stroke="url(#hh-gold-l)" strokeWidth="10" fill="none" />
      {/* specular sweep on top-left arc */}
      <ellipse cx="40" cy="58" rx="27" ry="30" stroke="url(#hh-spec-l)" strokeWidth="5" fill="none" opacity="0.85" />
      {/* inner rim shadow */}
      <ellipse cx="40" cy="58" rx="22" ry="24" stroke="#7a4800" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* hammered texture dots */}
      {[
        [16, 42, 1.6], [18, 34, 1.2], [24, 27, 1.4], [33, 24, 1.1],
        [43, 23, 1.3], [52, 27, 1.1], [59, 36, 1.5], [62, 48, 1.2],
        [58, 60, 1.4], [50, 70, 1.1], [40, 74, 1.3], [29, 70, 1.1],
        [20, 62, 1.4], [15, 52, 1.2],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#6a3800" opacity="0.35" />
      ))}
      {/* bright highlight arc top-left */}
      <path d="M17 36 Q14 26 22 20 Q30 15 40 15" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M19 38 Q16 29 24 23" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
      {/* earring post */}
      <rect x="38" y="12" width="4.5" height="9" rx="2.25" fill="url(#hh-gold-l)" />
      <rect x="39.2" y="13" width="1.8" height="5" rx="0.9" fill="white" opacity="0.55" />
      {/* butterfly back (tiny) */}
      <ellipse cx="40" cy="11" rx="4" ry="2.5" fill="#c9900e" opacity="0.7" />
      <ellipse cx="40" cy="11" rx="2" ry="1.2" fill="#f5d060" opacity="0.6" />

      {/* ── RIGHT HOOP ── */}
      <ellipse cx="90" cy="58" rx="27" ry="30" stroke="#8a5a08" strokeWidth="13" fill="none" />
      <ellipse cx="90" cy="58" rx="27" ry="30" stroke="url(#hh-gold-r)" strokeWidth="10" fill="none" />
      <ellipse cx="90" cy="58" rx="27" ry="30" stroke="url(#hh-spec-r)" strokeWidth="5" fill="none" opacity="0.85" />
      <ellipse cx="90" cy="58" rx="22" ry="24" stroke="#7a4800" strokeWidth="1.5" fill="none" opacity="0.3" />
      {[
        [66, 42, 1.6], [68, 34, 1.2], [74, 27, 1.4], [83, 24, 1.1],
        [93, 23, 1.3], [102, 27, 1.1], [109, 36, 1.5], [112, 48, 1.2],
        [108, 60, 1.4], [100, 70, 1.1], [90, 74, 1.3], [79, 70, 1.1],
        [70, 62, 1.4], [65, 52, 1.2],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#6a3800" opacity="0.35" />
      ))}
      <path d="M67 36 Q64 26 72 20 Q80 15 90 15" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M69 38 Q66 29 74 23" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.8" />
      <rect x="88" y="12" width="4.5" height="9" rx="2.25" fill="url(#hh-gold-r)" />
      <rect x="89.2" y="13" width="1.8" height="5" rx="0.9" fill="white" opacity="0.55" />
      <ellipse cx="90" cy="11" rx="4" ry="2.5" fill="#c9900e" opacity="0.7" />
      <ellipse cx="90" cy="11" rx="2" ry="1.2" fill="#f5d060" opacity="0.6" />

      {/* subtle rim light on right edges */}
      <path d="M63 68 Q61 58 65 48" stroke="#f5d060" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4" />
      <path d="M113 68 Q115 58 111 48" stroke="#f5d060" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function PearlPendantThumb(): ReactElement {
  return (
    <svg
      width="52"
      height="60"
      viewBox="0 0 52 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Multi-stop pearl luster: off-white → blush pink → grey-shadow */}
        <radialGradient id="pt-pearl" cx="36%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="18%" stopColor="#f8f4ee" />
          <stop offset="45%" stopColor="#ecdfd0" />
          <stop offset="72%" stopColor="#c8b89e" />
          <stop offset="100%" stopColor="#a89070" />
        </radialGradient>
        {/* pink-blush overtone layer */}
        <radialGradient id="pt-blush" cx="60%" cy="65%" r="50%">
          <stop offset="0%" stopColor="#e8b0a0" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#e8b0a0" stopOpacity="0" />
        </radialGradient>
        {/* small accent pearl */}
        <radialGradient id="pt-pearl2" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#f0e8d8" />
          <stop offset="100%" stopColor="#b09878" />
        </radialGradient>
        {/* gold bail */}
        <linearGradient id="pt-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5d870" />
          <stop offset="50%" stopColor="#c9900e" />
          <stop offset="100%" stopColor="#f0c840" />
        </linearGradient>
        <radialGradient id="pt-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7a5030" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#7a5030" stopOpacity="0" />
        </radialGradient>
        <filter id="pt-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {/* shadow */}
      <ellipse cx="26" cy="57" rx="14" ry="4" fill="url(#pt-shadow)" filter="url(#pt-soft)" />

      {/* fine chain */}
      {[4, 7, 10, 13].map((y) => (
        <line key={y} x1="26" y1={y} x2="26" y2={y + 2} stroke="#c9900e" strokeWidth="1.2" strokeLinecap="round" />
      ))}
      <line x1="26" y1="16" x2="26" y2="19" stroke="#c9900e" strokeWidth="1.4" />

      {/* bail — gold loop */}
      <path d="M23 20 Q26 16 29 20 L29 24 Q26 27 23 24 Z" fill="url(#pt-gold)" />
      <path d="M24.5 21 Q26 18.5 27.5 21" stroke="white" strokeWidth="0.8" fill="none" opacity="0.6" />

      {/* wire drop */}
      <line x1="26" y1="24" x2="26" y2="30" stroke="url(#pt-gold)" strokeWidth="1.3" />

      {/* main pearl body */}
      <circle cx="26" cy="43" r="14" fill="url(#pt-pearl)" />
      {/* blush overtone */}
      <circle cx="26" cy="43" r="14" fill="url(#pt-blush)" />
      {/* nacre sheen — large soft highlight */}
      <ellipse cx="21" cy="37" rx="7" ry="5" fill="white" opacity="0.38" />
      {/* primary specular */}
      <ellipse cx="19.5" cy="36" rx="3.5" ry="2.2" fill="white" opacity="0.72" />
      {/* micro specular */}
      <ellipse cx="18.5" cy="35.5" rx="1.2" ry="0.8" fill="white" opacity="0.9" />
      {/* rim light opposite side */}
      <path d="M36 47 Q38 43 36 39" stroke="white" strokeWidth="1.2" fill="none" opacity="0.25" strokeLinecap="round" />
      {/* pearl outline */}
      <circle cx="26" cy="43" r="14" stroke="#b8a888" strokeWidth="0.6" fill="none" />

      {/* accent pearl (lower-right) */}
      <circle cx="35" cy="51" r="5" fill="url(#pt-pearl2)" />
      <circle cx="35" cy="51" r="5" stroke="#b0988a" strokeWidth="0.5" fill="none" />
      <ellipse cx="33.5" cy="49.8" rx="1.6" ry="1.1" fill="white" opacity="0.65" />
    </svg>
  );
}

function StackingRingsThumb(): ReactElement {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Rose gold */}
        <linearGradient id="sr-rose" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0c0a0" />
          <stop offset="35%" stopColor="#d08060" />
          <stop offset="65%" stopColor="#c07050" />
          <stop offset="100%" stopColor="#e0a080" />
        </linearGradient>
        {/* Yellow gold */}
        <linearGradient id="sr-yell" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8e080" />
          <stop offset="35%" stopColor="#d4a020" />
          <stop offset="65%" stopColor="#b87810" />
          <stop offset="100%" stopColor="#e8c040" />
        </linearGradient>
        {/* Pavé gemstone */}
        <radialGradient id="sr-gem" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#c0e8ff" />
          <stop offset="55%" stopColor="#6ab0e8" />
          <stop offset="100%" stopColor="#2060a0" />
        </radialGradient>
        <radialGradient id="sr-shadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#603020" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#603020" stopOpacity="0" />
        </radialGradient>
        <filter id="sr-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>

      {/* ground shadow */}
      <ellipse cx="28" cy="54" rx="18" ry="4.5" fill="url(#sr-shadow)" filter="url(#sr-blur)" />

      {/* ── BOTTOM RING — rose gold ── */}
      {/* outer dark rim */}
      <ellipse cx="28" cy="46" rx="20" ry="7" stroke="#904030" strokeWidth="9" fill="none" />
      {/* gradient ring */}
      <ellipse cx="28" cy="46" rx="20" ry="7" stroke="url(#sr-rose)" strokeWidth="7" fill="none" />
      {/* specular */}
      <path d="M10 43 Q10 38 18 37" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M10 44 Q10 40 16 39" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.75" />
      {/* rim light */}
      <path d="M44 49 Q47 46 45 43" stroke="#f0c0a0" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* ── MIDDLE RING — yellow gold ── */}
      <ellipse cx="28" cy="35" rx="18" ry="6.5" stroke="#806010" strokeWidth="9" fill="none" />
      <ellipse cx="28" cy="35" rx="18" ry="6.5" stroke="url(#sr-yell)" strokeWidth="7" fill="none" />
      <path d="M12 32 Q12 27 19 26" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M12 33 Q12 29 17 28" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.75" />
      <path d="M42 38 Q45 35 43 32" stroke="#f8e080" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* ── TOP RING — yellow gold + pavé gem ── */}
      <ellipse cx="28" cy="24" rx="16" ry="6" stroke="#806010" strokeWidth="9" fill="none" />
      <ellipse cx="28" cy="24" rx="16" ry="6" stroke="url(#sr-yell)" strokeWidth="7" fill="none" />
      <path d="M14 21 Q14 17 20 16" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M14 22 Q14 18 18 17" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.75" />

      {/* gem setting — a raised faceted sapphire */}
      {/* bezel */}
      <ellipse cx="28" cy="17.5" rx="5.5" ry="4" fill="#806010" />
      {/* stone base */}
      <ellipse cx="28" cy="17.5" rx="4.5" ry="3.2" fill="url(#sr-gem)" />
      {/* facet lines */}
      <line x1="28" y1="14.5" x2="28" y2="20.5" stroke="white" strokeWidth="0.4" opacity="0.5" />
      <line x1="23.8" y1="17.5" x2="32.2" y2="17.5" stroke="white" strokeWidth="0.4" opacity="0.4" />
      <line x1="24.8" y1="15.2" x2="31.2" y2="19.8" stroke="white" strokeWidth="0.3" opacity="0.35" />
      <line x1="31.2" y1="15.2" x2="24.8" y2="19.8" stroke="white" strokeWidth="0.3" opacity="0.35" />
      {/* gem specular */}
      <ellipse cx="26.5" cy="16" rx="1.8" ry="1.2" fill="white" opacity="0.7" />
      <ellipse cx="26" cy="15.5" rx="0.8" ry="0.5" fill="white" opacity="0.9" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// AVATAR
// ─────────────────────────────────────────────────────────────────────────────

function AureliaAvatar({ size }: { size: number }): ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="av-bg" cx="38%" cy="32%" r="68%">
          <stop offset="0%" stopColor="#e8c96a" />
          <stop offset="50%" stopColor="#b87a18" />
          <stop offset="100%" stopColor="#6a3808" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#av-bg)" />
      {/* stylised A lettermark */}
      <path
        d="M20 10 L28 30 M12 30 L28 30 M15 22.5 H25"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.95"
      />
      {/* diamond accent above A */}
      <polygon points="20,5.5 22.2,9 20,11.5 17.8,9" fill="white" opacity="0.7" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// UI ATOMS
// ─────────────────────────────────────────────────────────────────────────────

function SeenTick(): ReactElement {
  return (
    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
      <path d="M1 5 L3.8 7.8 L9 1.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 5 L8.8 7.8 L14 1.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarRow({ rating }: { rating: number }): ReactElement {
  return (
    <svg width="52" height="9" viewBox="0 0 52 9" fill="none" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const x = i * 10.5;
        const filled = i < Math.floor(rating);
        return (
          <polygon
            key={i}
            points={`${x + 4.5},0.5 ${x + 5.8},3.4 ${x + 9},3.6 ${x + 6.5},5.8 ${x + 7.4},9 ${x + 4.5},7.3 ${x + 1.6},9 ${x + 2.5},5.8 ${x + 0},3.6 ${x + 3.2},3.4`}
            fill={filled ? "#c9a84c" : "#dfd0a0"}
          />
        );
      })}
    </svg>
  );
}

// Status-bar icons
function SignalIcon(): ReactElement {
  return (
    <svg width="15" height="10" viewBox="0 0 15 10" fill="none" aria-hidden="true">
      <rect x="0" y="7" width="2.5" height="3" rx="0.6" fill="#d4aa60" />
      <rect x="3.5" y="4.5" width="2.5" height="5.5" rx="0.6" fill="#d4aa60" />
      <rect x="7" y="2" width="2.5" height="8" rx="0.6" fill="#d4aa60" />
      <rect x="10.5" y="0" width="2.5" height="10" rx="0.6" fill="#d4aa60" opacity="0.38" />
    </svg>
  );
}
function WifiIcon(): ReactElement {
  return (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" aria-hidden="true">
      <circle cx="7" cy="10" r="1.2" fill="#d4aa60" />
      <path d="M3.5 7 Q7 4.5 10.5 7" stroke="#d4aa60" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M1 4 Q7 0.5 13 4" stroke="#d4aa60" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}
function BatteryIcon(): ReactElement {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="16" height="9" rx="2.2" stroke="#d4aa60" strokeWidth="1" />
      <rect x="2" y="2" width="11" height="6" rx="1" fill="#d4aa60" />
      <path d="M18 3.5 L18 6.5" stroke="#d4aa60" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────

const CHIPS = ["Show earrings", "Under $250", "Gift wrap"] as const;

const MINI_CARDS = [
  {
    id: "pearl",
    name: "Pearl Drop Pendant",
    sub: "14k gold · freshwater pearl",
    price: "$310",
    Thumb: PearlPendantThumb,
    bg: "linear-gradient(140deg,#fdf8ef 0%,#ede0c0 60%,#d4b870 100%)",
  },
  {
    id: "rings",
    name: "Stacking Ring Set",
    sub: "18k · pavé sapphire · 3-piece",
    price: "$185",
    Thumb: StackingRingsThumb,
    bg: "linear-gradient(140deg,#fdf8ef 0%,#f0e0b0 60%,#d4a840 100%)",
  },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function JewelryChat(): ReactElement {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{
        background: "#f5ede0",
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      }}
    >

      {/* ══════════════════════════════════════════════════════
          STATUS BAR
      ══════════════════════════════════════════════════════ */}
      <div
        className="shrink-0 flex items-center justify-between px-4"
        style={{
          height: 24,
          background: "linear-gradient(135deg,#180c04 0%,#2a1608 100%)",
        }}
      >
        <span style={{ fontSize: 9.5, fontWeight: 700, color: "#d4aa60", letterSpacing: "0.03em" }}>
          9:41
        </span>
        <div className="flex items-center gap-2">
          <SignalIcon />
          <WifiIcon />
          <BatteryIcon />
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          CHAT HEADER
      ══════════════════════════════════════════════════════ */}
      <div
        className="shrink-0 flex items-center gap-2 px-2 border-b"
        style={{
          paddingTop: 7,
          paddingBottom: 7,
          background: "linear-gradient(160deg,#1e1008 0%,#2d1a0c 70%,#3d2210 100%)",
          borderBottomColor: "#0a0502",
        }}
      >
        {/* back chevron */}
        <button
          className="shrink-0"
          style={{ color: "#d4aa60" }}
          aria-label="Back"
        >
          <ChevronLeft style={{ width: 19, height: 19 }} />
        </button>

        {/* avatar + online dot */}
        <div className="relative shrink-0">
          <div
            className="rounded-full overflow-hidden"
            style={{
              width: 36,
              height: 36,
              outline: "2px solid #c9a84c",
              outlineOffset: 1.5,
              boxShadow: "0 2px 8px rgba(0,0,0,0.45)",
            }}
          >
            <AureliaAvatar size={36} />
          </div>
          <span
            className="absolute bottom-0 right-0 block rounded-full"
            style={{
              width: 9,
              height: 9,
              background: "#34d399",
              outline: "1.5px solid #1e1008",
            }}
          />
        </div>

        {/* name + status */}
        <div className="flex-1 min-w-0">
          <p
            className="truncate"
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#f0e0b0",
              letterSpacing: "0.04em",
              lineHeight: 1.25,
            }}
          >
            Aurelia · Personal Jeweller
          </p>
          <p style={{ fontSize: 8.5, color: "#34d399", lineHeight: 1.3, marginTop: 1 }}>
            ● Active now
          </p>
        </div>

        {/* action icons */}
        <div className="flex items-center gap-3 shrink-0">
          <button aria-label="Call" style={{ color: "#c9a84c" }}>
            <Phone style={{ width: 15, height: 15 }} />
          </button>
          <button aria-label="More options" style={{ color: "#c9a84c" }}>
            <MoreVertical style={{ width: 15, height: 15 }} />
          </button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          CHAT THREAD
      ══════════════════════════════════════════════════════ */}
      <div
        className="flex flex-col overflow-hidden flex-1 min-h-0"
        style={{ padding: "10px 10px 6px" }}
      >
        {/* inner column */}
        <div className="flex flex-col shrink-0" style={{ gap: 8 }}>

          {/* date divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1" style={{ height: 1, background: "#d8c8a8" }} />
            <span
              style={{
                fontSize: 7,
                color: "#9a8060",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                userSelect: "none",
              }}
            >
              Today
            </span>
            <div className="flex-1" style={{ height: 1, background: "#d8c8a8" }} />
          </div>

          {/* ── Greeting bubble ── */}
          <div className="flex items-end" style={{ gap: 6, maxWidth: "86%" }}>
            <div
              className="shrink-0 rounded-full overflow-hidden"
              style={{ width: 24, height: 24, marginBottom: 2, flexShrink: 0 }}
            >
              <AureliaAvatar size={24} />
            </div>
            <div>
              <div
                className="rounded-2xl"
                style={{
                  borderBottomLeftRadius: 4,
                  padding: "8px 11px",
                  background: "linear-gradient(150deg,#fffef9 0%,#fff6e4 100%)",
                  border: "1px solid #e4d8bc",
                  boxShadow: "0 1px 4px rgba(100,60,0,0.10)",
                }}
              >
                <p style={{ fontSize: 9.5, color: "#2a1608", lineHeight: 1.55 }}>
                  Hello! I&apos;m{" "}
                  <strong style={{ color: "#8a5a10" }}>Aurelia</strong>, your
                  personal jewellery concierge. Treating yourself or finding a
                  gift? ✨
                </p>
              </div>
              <p style={{ fontSize: 7, color: "#b09880", marginTop: 2, paddingLeft: 4 }}>
                10:14 AM
              </p>
            </div>
          </div>

          {/* ── User reply ── */}
          <div className="flex justify-end">
            <div style={{ maxWidth: "70%" }}>
              <div
                className="rounded-2xl"
                style={{
                  borderBottomRightRadius: 4,
                  padding: "8px 11px",
                  background: "linear-gradient(135deg,#c9a84c 0%,#7a4c0e 100%)",
                  boxShadow: "0 1px 5px rgba(80,40,0,0.22)",
                }}
              >
                <p style={{ fontSize: 9.5, color: "#fff8ea", lineHeight: 1.55 }}>
                  Something elegant for a 30th — earrings maybe? 🎁
                </p>
              </div>
              <div
                className="flex items-center justify-end"
                style={{ gap: 3, marginTop: 2 }}
              >
                <p style={{ fontSize: 7, color: "#b09880" }}>10:15 AM</p>
                <SeenTick />
              </div>
            </div>
          </div>

          {/* ── Lead-in bubble ── */}
          <div className="flex items-end" style={{ gap: 6, maxWidth: "86%" }}>
            <div
              className="shrink-0 rounded-full overflow-hidden"
              style={{ width: 24, height: 24, marginBottom: 2 }}
            >
              <AureliaAvatar size={24} />
            </div>
            <div
              className="rounded-2xl"
              style={{
                borderBottomLeftRadius: 4,
                padding: "8px 11px",
                background: "linear-gradient(150deg,#fffef9 0%,#fff6e4 100%)",
                border: "1px solid #e4d8bc",
                boxShadow: "0 1px 4px rgba(100,60,0,0.10)",
              }}
            >
              <p style={{ fontSize: 9.5, color: "#2a1608", lineHeight: 1.55 }}>
                Perfect! Our{" "}
                <strong style={{ color: "#8a5a10" }}>Hammered Gold Hoops</strong>{" "}
                are a milestone favourite — hand-finished in 18k gold:
              </p>
            </div>
          </div>

          {/* ── FEATURED PRODUCT CARD ── */}
          <div className="flex items-end" style={{ gap: 6 }}>
            <div
              className="shrink-0 rounded-full overflow-hidden"
              style={{ width: 24, height: 24, marginBottom: 2 }}
            >
              <AureliaAvatar size={24} />
            </div>

            {/* card */}
            <div
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                width: 210,
                border: "1px solid #ddd0a8",
                background: "#fffef9",
                boxShadow: "0 3px 14px rgba(100,60,0,0.16)",
              }}
            >
              {/* ── Image area: studio-lit hoops ── */}
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  height: 108,
                  background:
                    "radial-gradient(ellipse 90% 70% at 50% 40%, #fbefc8 0%, #e8cc70 55%, #c09030 100%)",
                }}
              >
                {/* subtle vignette overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 50%, transparent 60%, rgba(80,40,0,0.18) 100%)",
                  }}
                />
                {/* grid-reflection texture */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg,transparent,transparent 11px,rgba(255,255,255,0.35) 12px), repeating-linear-gradient(90deg,transparent,transparent 11px,rgba(255,255,255,0.35) 12px)",
                  }}
                />
                <HoopsHero />

                {/* Bestseller badge */}
                <span
                  className="absolute top-2 left-2 rounded-full"
                  style={{
                    fontSize: 6,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "2px 6px",
                    background: "#180c04",
                    color: "#f0d070",
                  }}
                >
                  Bestseller
                </span>

                {/* Price badge */}
                <span
                  className="absolute top-2 right-2 rounded-full"
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    padding: "2px 8px",
                    background: "rgba(24,12,4,0.82)",
                    color: "#f5d060",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  $240
                </span>

                {/* "In stock" pill bottom */}
                <span
                  className="absolute bottom-2 left-2 rounded-full flex items-center"
                  style={{
                    fontSize: 6.5,
                    fontWeight: 700,
                    padding: "2px 6px",
                    background: "rgba(255,253,245,0.9)",
                    color: "#5a7a30",
                    gap: 3,
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#4caf50",
                    }}
                  />
                  In stock
                </span>
              </div>

              {/* ── Card content ── */}
              <div style={{ padding: "9px 10px 10px", display: "flex", flexDirection: "column", gap: 5 }}>
                {/* name */}
                <p style={{ fontSize: 11, fontWeight: 800, color: "#1a0c04", lineHeight: 1.2 }}>
                  Hammered Gold Hoops
                </p>

                {/* attributes */}
                <p style={{ fontSize: 7.5, color: "#7a6040", lineHeight: 1.3 }}>
                  18k gold-plated · hand-hammered · hypoallergenic posts
                </p>

                {/* attribute chips */}
                <div className="flex flex-wrap" style={{ gap: 4 }}>
                  {["18k Gold", "35 mm", "Free returns"].map((a) => (
                    <span
                      key={a}
                      style={{
                        fontSize: 7,
                        fontWeight: 600,
                        padding: "2px 6px",
                        borderRadius: 4,
                        background: "#f5e8c0",
                        color: "#7a5010",
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>

                {/* ratings */}
                <div className="flex items-center" style={{ gap: 5 }}>
                  <StarRow rating={5} />
                  <span style={{ fontSize: 7.5, color: "#8a7050" }}>4.9 (148)</span>
                </div>

                {/* CTA */}
                <button
                  className="w-full flex items-center justify-center"
                  style={{
                    gap: 5,
                    borderRadius: 99,
                    padding: "6px 0",
                    background: "linear-gradient(135deg,#3d2210 0%,#7a4810 60%,#c9900e 100%)",
                    fontSize: 9.5,
                    fontWeight: 800,
                    color: "#fff8e8",
                    letterSpacing: "0.04em",
                    boxShadow: "0 2px 8px rgba(120,60,0,0.32)",
                  }}
                >
                  <ShoppingBag style={{ width: 11, height: 11 }} />
                  Add to bag
                </button>
              </div>
            </div>
          </div>

          {/* ── "You may also like" mini carousel ── */}
          <div className="flex items-end" style={{ gap: 6 }}>
            <div
              className="shrink-0 rounded-full overflow-hidden"
              style={{ width: 24, height: 24, marginBottom: 2 }}
            >
              <AureliaAvatar size={24} />
            </div>
            <div>
              <p
                style={{
                  fontSize: 7.5,
                  fontWeight: 600,
                  color: "#9a7850",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: 5,
                  paddingLeft: 2,
                }}
              >
                You may also like
              </p>
              <div className="flex" style={{ gap: 7 }}>
                {MINI_CARDS.map(({ id, name, sub, price, Thumb, bg }) => (
                  <div
                    key={id}
                    className="flex flex-col overflow-hidden rounded-xl"
                    style={{
                      width: 94,
                      border: "1px solid #ddd0a8",
                      background: "#fffef9",
                      boxShadow: "0 2px 8px rgba(100,60,0,0.13)",
                    }}
                  >
                    {/* thumb image area */}
                    <div
                      className="relative flex items-center justify-center overflow-hidden"
                      style={{ height: 68, background: bg }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(80,40,0,0.14) 100%)",
                        }}
                      />
                      <Thumb />
                    </div>
                    {/* mini card info */}
                    <div style={{ padding: "6px 7px 7px", display: "flex", flexDirection: "column", gap: 3 }}>
                      <p style={{ fontSize: 7.5, fontWeight: 700, color: "#1a0c04", lineHeight: 1.25 }}>
                        {name}
                      </p>
                      <p style={{ fontSize: 6.5, color: "#8a7050", lineHeight: 1.2 }}>{sub}</p>
                      <p style={{ fontSize: 9, fontWeight: 800, color: "#8a5a10" }}>{price}</p>
                      <button
                        className="w-full"
                        style={{
                          borderRadius: 99,
                          padding: "3px 0",
                          background:
                            "linear-gradient(135deg,#c9a84c 0%,#7a4810 100%)",
                          fontSize: 7,
                          fontWeight: 800,
                          color: "#fff8e8",
                          marginTop: 1,
                        }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Typing indicator ── */}
          <div className="flex items-end" style={{ gap: 6 }}>
            <div
              className="shrink-0 rounded-full overflow-hidden"
              style={{ width: 24, height: 24, marginBottom: 2 }}
            >
              <AureliaAvatar size={24} />
            </div>
            <div
              className="rounded-2xl flex items-center"
              style={{
                borderBottomLeftRadius: 4,
                padding: "9px 14px",
                background: "linear-gradient(150deg,#fffef9 0%,#fff6e4 100%)",
                border: "1px solid #e4d8bc",
                boxShadow: "0 1px 4px rgba(100,60,0,0.10)",
                gap: 5,
              }}
            >
              {[0, 160, 320].map((delay) => (
                <span
                  key={delay}
                  className="block rounded-full animate-bounce"
                  style={{
                    width: 6,
                    height: 6,
                    background: "linear-gradient(135deg,#c9a84c,#8a5a10)",
                    animationDelay: `${delay}ms`,
                    animationDuration: "900ms",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          QUICK-REPLY CHIPS
      ══════════════════════════════════════════════════════ */}
      <div
        className="shrink-0 flex items-center border-t"
        style={{
          gap: 6,
          padding: "7px 10px",
          background: "linear-gradient(180deg,#f0e4cc 0%,#ecdcc0 100%)",
          borderTopColor: "#ddd0b0",
          overflowX: "hidden",
        }}
      >
        {CHIPS.map((chip) => (
          <button
            key={chip}
            className="shrink-0 whitespace-nowrap"
            style={{
              fontSize: 8,
              fontWeight: 700,
              borderRadius: 99,
              padding: "4px 10px",
              border: "1.5px solid #c9a84c",
              color: "#6a3e08",
              background: "linear-gradient(135deg,#fffef8 0%,#fef0c8 100%)",
              boxShadow: "0 1px 3px rgba(100,60,0,0.12)",
            }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════════════════════
          INPUT BAR
      ══════════════════════════════════════════════════════ */}
      <div
        className="shrink-0 flex items-center border-t"
        style={{
          gap: 7,
          padding: "7px 10px 8px",
          background: "#fdfbf5",
          borderTopColor: "#e0d0b0",
        }}
      >
        {/* + attach button */}
        <button
          className="shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 30,
            height: 30,
            background: "linear-gradient(135deg,#f0e4c0 0%,#d8b850 100%)",
            color: "#5a3808",
            boxShadow: "0 1px 4px rgba(100,60,0,0.18)",
          }}
          aria-label="Add attachment"
        >
          <Plus style={{ width: 14, height: 14 }} />
        </button>

        {/* text input field */}
        <div
          className="flex-1 flex items-center"
          style={{
            height: 30,
            borderRadius: 99,
            padding: "0 12px",
            background: "#f5ece0",
            border: "1.5px solid #d4c4a0",
            boxShadow: "inset 0 1px 3px rgba(100,60,0,0.08)",
          }}
        >
          <p style={{ fontSize: 9, color: "#b8a080", userSelect: "none" }}>
            Message Aurelia…
          </p>
        </div>

        {/* mic */}
        <button
          className="shrink-0"
          style={{ color: "#a89070" }}
          aria-label="Voice message"
        >
          <Mic style={{ width: 16, height: 16 }} />
        </button>

        {/* send button */}
        <button
          className="shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 30,
            height: 30,
            background: "linear-gradient(135deg,#c9a84c 0%,#7a4810 100%)",
            boxShadow: "0 2px 7px rgba(100,60,0,0.30)",
          }}
          aria-label="Send message"
        >
          <Send style={{ width: 13, height: 13, color: "#fff8e8" }} />
        </button>
      </div>

    </div>
  );
}
