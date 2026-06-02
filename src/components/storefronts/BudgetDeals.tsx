import type { ReactElement } from "react";
import { Flame, ShoppingCart, Search, Home, Grid2x2, User, Star } from "lucide-react";

/* ═══════════════════════════════════════════════════════
   PHOTOREAL PRODUCT THUMBNAILS
   Each uses layered gradients + radial highlights + soft
   drop-shadows + inline SVG detail — reads like a real
   marketplace photo, not a flat icon.
═══════════════════════════════════════════════════════ */

function EarbudsThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        {/* Ambient BG gradient */}
        <radialGradient id="eb-bg" cx="50%" cy="55%" r="55%">
          <stop offset="0%" stopColor="#f0ecff"/>
          <stop offset="100%" stopColor="#ddd6fe"/>
        </radialGradient>
        {/* Case body sheen */}
        <linearGradient id="eb-case" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stopColor="#e0d7ff"/>
          <stop offset="40%" stopColor="#c4b5fd"/>
          <stop offset="100%" stopColor="#7c3aed"/>
        </linearGradient>
        {/* Case lid sheen */}
        <linearGradient id="eb-lid" x1="0%" y1="0%" x2="40%" y2="100%">
          <stop offset="0%" stopColor="#a78bfa"/>
          <stop offset="100%" stopColor="#5b21b6"/>
        </linearGradient>
        {/* Earbud deep */}
        <radialGradient id="eb-bud" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#8b5cf6"/>
          <stop offset="50%" stopColor="#5b21b6"/>
          <stop offset="100%" stopColor="#2e1065"/>
        </radialGradient>
        {/* Earbud highlight */}
        <radialGradient id="eb-shine" cx="30%" cy="25%" r="50%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.7)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </radialGradient>
        {/* Surface reflection */}
        <linearGradient id="eb-reflect" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)"/>
          <stop offset="50%" stopColor="rgba(255,255,255,0.05)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.12)"/>
        </linearGradient>
        <filter id="eb-shadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#3b0764" floodOpacity="0.35"/>
        </filter>
        <filter id="eb-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      {/* Seamless tile BG */}
      <rect width="120" height="110" fill="url(#eb-bg)"/>
      {/* Subtle dot pattern */}
      {[15,35,55,75,95,115].flatMap(x => [22,42,62,82,102].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="0.8" fill="#a78bfa" opacity="0.18"/>
      )))}

      {/* Cast shadow on surface */}
      <ellipse cx="60" cy="97" rx="38" ry="6" fill="#2e1065" opacity="0.22"/>

      {/* Case body */}
      <g filter="url(#eb-shadow)">
        <rect x="14" y="42" width="92" height="52" rx="18" fill="url(#eb-case)" stroke="#6d28d9" strokeWidth="1.5"/>
        {/* Lid */}
        <rect x="14" y="42" width="92" height="24" rx="18" fill="url(#eb-lid)" stroke="#5b21b6" strokeWidth="1.5"/>
        {/* Lid seam line */}
        <line x1="14" y1="66" x2="106" y2="66" stroke="#4c1d95" strokeWidth="0.8" opacity="0.6"/>
        {/* Surface reflection on case */}
        <rect x="14" y="42" width="92" height="52" rx="18" fill="url(#eb-reflect)"/>
        {/* Hinge indicator */}
        <rect x="54" y="90" width="12" height="2.5" rx="1.2" fill="#c4b5fd" opacity="0.5"/>
      </g>

      {/* Left earbud */}
      <g filter="url(#eb-shadow)">
        <circle cx="36" cy="76" r="17" fill="url(#eb-bud)" stroke="#4c1d95" strokeWidth="1.2"/>
        <circle cx="36" cy="76" r="8" fill="#6d28d9" stroke="#5b21b6" strokeWidth="1"/>
        <circle cx="36" cy="76" r="3.5" fill="#a78bfa"/>
        {/* Dome highlight */}
        <circle cx="36" cy="76" r="17" fill="url(#eb-shine)"/>
        {/* Specular dot */}
        <circle cx="30" cy="69" r="3" fill="white" opacity="0.55"/>
      </g>

      {/* Right earbud */}
      <g filter="url(#eb-shadow)">
        <circle cx="84" cy="76" r="17" fill="url(#eb-bud)" stroke="#4c1d95" strokeWidth="1.2"/>
        <circle cx="84" cy="76" r="8" fill="#6d28d9" stroke="#5b21b6" strokeWidth="1"/>
        <circle cx="84" cy="76" r="3.5" fill="#a78bfa"/>
        <circle cx="84" cy="76" r="17" fill="url(#eb-shine)"/>
        <circle cx="78" cy="69" r="3" fill="white" opacity="0.55"/>
      </g>

      {/* LED charge indicator */}
      <circle cx="60" cy="87" r="3.5" fill="#4ade80" stroke="#16a34a" strokeWidth="0.8"/>
      <circle cx="60" cy="87" r="5.5" fill="#4ade80" opacity="0.25" filter="url(#eb-glow)"/>

      {/* Top brand mark lines */}
      <rect x="46" y="14" width="28" height="2.5" rx="1.2" fill="#7c3aed" opacity="0.4"/>
      <rect x="50" y="19" width="20" height="2" rx="1" fill="#7c3aed" opacity="0.25"/>
    </svg>
  );
}

function HoodieThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="hd-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#fff0f6"/>
          <stop offset="100%" stopColor="#fce7f3"/>
        </radialGradient>
        <linearGradient id="hd-body" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#fda4c4"/>
          <stop offset="40%" stopColor="#f472b6"/>
          <stop offset="100%" stopColor="#be185d"/>
        </linearGradient>
        <linearGradient id="hd-sleeve-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f9a8d4"/>
          <stop offset="100%" stopColor="#db2777"/>
        </linearGradient>
        <linearGradient id="hd-sleeve-r" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f9a8d4"/>
          <stop offset="100%" stopColor="#db2777"/>
        </linearGradient>
        <linearGradient id="hd-hood" x1="30%" y1="0%" x2="70%" y2="100%">
          <stop offset="0%" stopColor="#fce7f3"/>
          <stop offset="60%" stopColor="#fbcfe8"/>
          <stop offset="100%" stopColor="#f9a8d4"/>
        </linearGradient>
        <radialGradient id="hd-fold" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </radialGradient>
        <filter id="hd-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#9d174d" floodOpacity="0.28"/>
        </filter>
      </defs>
      <rect width="120" height="110" fill="url(#hd-bg)"/>
      {/* subtle grid tile */}
      {[10,30,50,70,90,110].flatMap(x => [10,30,50,70,90,110].map(y => (
        <rect key={`${x}-${y}`} x={x-0.4} y={y-0.4} width="0.8" height="0.8" fill="#ec4899" opacity="0.1"/>
      )))}

      <ellipse cx="60" cy="103" rx="42" ry="5.5" fill="#9d174d" opacity="0.18"/>

      <g filter="url(#hd-shadow)">
        {/* Left sleeve */}
        <path d="M32 52 L8 78 Q7 83 13 84 L28 80 L44 58 Z" fill="url(#hd-sleeve-l)" stroke="#be185d" strokeWidth="1.2"/>
        {/* Right sleeve */}
        <path d="M88 52 L112 78 Q113 83 107 84 L92 80 L76 58 Z" fill="url(#hd-sleeve-r)" stroke="#be185d" strokeWidth="1.2"/>
        {/* Body */}
        <path d="M32 52 L26 100 H94 L88 52 Z" fill="url(#hd-body)" stroke="#be185d" strokeWidth="1.2"/>
        {/* Hood */}
        <path d="M42 52 Q38 18 60 12 Q82 18 78 52 Z" fill="url(#hd-hood)" stroke="#db2777" strokeWidth="1.5"/>
        {/* Hood inner shadow */}
        <path d="M48 52 Q46 24 60 18 Q74 24 72 52 Z" fill="#fbcfe8" stroke="#f9a8d4" strokeWidth="0.8"/>
        {/* Neck rib */}
        <ellipse cx="60" cy="52" rx="14" ry="6" fill="#fce7f3" stroke="#db2777" strokeWidth="1.2"/>
        {/* Fabric fold highlights */}
        <path d="M60 52 L56 100" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M60 52 L64 100" stroke="rgba(0,0,0,0.08)" strokeWidth="2" strokeLinecap="round"/>
        {/* Kangaroo pocket */}
        <rect x="36" y="74" width="48" height="20" rx="7" fill="#fce7f3" stroke="#db2777" strokeWidth="1.2"/>
        <line x1="60" y1="74" x2="60" y2="94" stroke="#db2777" strokeWidth="0.8" strokeDasharray="2.5 2"/>
        {/* Drawstrings */}
        <line x1="52" y1="52" x2="48" y2="66" stroke="#9d174d" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="47.5" cy="67.5" r="2.5" fill="#9d174d"/>
        <line x1="68" y1="52" x2="72" y2="66" stroke="#9d174d" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="72.5" cy="67.5" r="2.5" fill="#9d174d"/>
        {/* Cuffs */}
        <ellipse cx="10.5" cy="82" rx="6" ry="3.5" fill="#fbcfe8" stroke="#db2777" strokeWidth="1"/>
        <ellipse cx="109.5" cy="82" rx="6" ry="3.5" fill="#fbcfe8" stroke="#db2777" strokeWidth="1"/>
        {/* Waistband */}
        <rect x="26" y="97" width="68" height="5" rx="2.5" fill="#fbcfe8" stroke="#db2777" strokeWidth="1"/>
        {/* Top light reflection */}
        <path d="M42 52 Q60 44 78 52" fill="url(#hd-fold)" opacity="0.6"/>
      </g>
    </svg>
  );
}

function LEDThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="led-bg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#ecfdf5"/>
          <stop offset="100%" stopColor="#d1fae5"/>
        </radialGradient>
        <radialGradient id="led-reel" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#6ee7b7"/>
          <stop offset="50%" stopColor="#10b981"/>
          <stop offset="100%" stopColor="#064e3b"/>
        </radialGradient>
        <radialGradient id="led-reel-shine" cx="30%" cy="25%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.5)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </radialGradient>
        <radialGradient id="led-inner" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#a7f3d0"/>
          <stop offset="100%" stopColor="#059669"/>
        </radialGradient>
        <linearGradient id="led-strip" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#111827"/>
          <stop offset="50%" stopColor="#1f2937"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <filter id="led-shadow">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#065f46" floodOpacity="0.3"/>
        </filter>
        <filter id="led-glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <rect width="120" height="110" fill="url(#led-bg)"/>
      {/* tile pattern */}
      {[0,24,48,72,96,120].flatMap(x => [0,22,44,66,88,110].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="1" fill="#34d399" opacity="0.14"/>
      )))}

      <ellipse cx="60" cy="103" rx="40" ry="5" fill="#065f46" opacity="0.2"/>

      <g filter="url(#led-shadow)">
        {/* Main reel */}
        <circle cx="60" cy="52" r="38" fill="url(#led-reel)" stroke="#059669" strokeWidth="1.8"/>
        {/* Reel inner groove */}
        <circle cx="60" cy="52" r="22" fill="url(#led-inner)" stroke="#047857" strokeWidth="1.5"/>
        <circle cx="60" cy="52" r="8" fill="#6ee7b7" stroke="#059669" strokeWidth="1.2"/>
        {/* Hub */}
        <circle cx="60" cy="52" r="4" fill="#d1fae5"/>
        {/* Spokes */}
        {[0,45,90,135,180,225,270,315].map((deg) => (
          <line key={deg}
            x1={60 + 4 * Math.cos(deg * Math.PI / 180)}
            y1={52 + 4 * Math.sin(deg * Math.PI / 180)}
            x2={60 + 21 * Math.cos(deg * Math.PI / 180)}
            y2={52 + 21 * Math.sin(deg * Math.PI / 180)}
            stroke="#047857" strokeWidth="1.2" opacity="0.7"/>
        ))}
        {/* LED strip wound on reel - RGB colors */}
        <path d="M22 52 A38 38 0 0 1 60 14" stroke="#f59e0b" strokeWidth="5.5" strokeLinecap="round" fill="none" opacity="0.9"/>
        <path d="M60 14 A38 38 0 0 1 98 52" stroke="#a78bfa" strokeWidth="5.5" strokeLinecap="round" fill="none" opacity="0.9"/>
        <path d="M98 52 A38 38 0 0 1 60 90" stroke="#f87171" strokeWidth="5.5" strokeLinecap="round" fill="none" opacity="0.9"/>
        {/* Reel shine */}
        <circle cx="60" cy="52" r="38" fill="url(#led-reel-shine)"/>
        {/* Specular highlight */}
        <circle cx="44" cy="37" r="7" fill="white" opacity="0.28"/>
      </g>

      {/* Unrolled strip at bottom */}
      <rect x="6" y="90" width="108" height="12" rx="6" fill="url(#led-strip)" stroke="#10b981" strokeWidth="1.2"/>
      {/* LED bulbs with glow */}
      {[16, 31, 46, 60, 75, 90, 104].map(x => (
        <g key={x} filter="url(#led-glow)">
          <circle cx={x} cy="96" r="5" fill="#fde68a" stroke="#f59e0b" strokeWidth="0.8"/>
          <circle cx={x} cy="96" r="8" fill="#fef3c7" opacity="0.3"/>
          <circle cx={x - 1.5} cy={94} r="1.5" fill="white" opacity="0.65"/>
        </g>
      ))}

      {/* Floating color chips */}
      <circle cx="14" cy="14" r="6" fill="#f87171" stroke="white" strokeWidth="1.2" opacity="0.9"/>
      <circle cx="30" cy="7" r="5" fill="#a78bfa" stroke="white" strokeWidth="1.2" opacity="0.9"/>
      <circle cx="60" cy="5" r="6" fill="#34d399" stroke="white" strokeWidth="1.2" opacity="0.9"/>
      <circle cx="90" cy="7" r="5" fill="#60a5fa" stroke="white" strokeWidth="1.2" opacity="0.9"/>
      <circle cx="106" cy="14" r="6" fill="#fb923c" stroke="white" strokeWidth="1.2" opacity="0.9"/>
    </svg>
  );
}

function PhoneStandThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="ps-bg" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#f8fafc"/>
          <stop offset="100%" stopColor="#e2e8f0"/>
        </radialGradient>
        <linearGradient id="ps-metal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9"/>
          <stop offset="30%" stopColor="#cbd5e1"/>
          <stop offset="70%" stopColor="#94a3b8"/>
          <stop offset="100%" stopColor="#64748b"/>
        </linearGradient>
        <linearGradient id="ps-screen" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#1e40af"/>
          <stop offset="40%" stopColor="#1d4ed8"/>
          <stop offset="100%" stopColor="#1e3a8a"/>
        </linearGradient>
        <linearGradient id="ps-phone-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155"/>
          <stop offset="50%" stopColor="#1e293b"/>
          <stop offset="100%" stopColor="#0f172a"/>
        </linearGradient>
        <radialGradient id="ps-phone-shine" cx="25%" cy="15%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.18)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </radialGradient>
        <linearGradient id="ps-base" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0"/>
          <stop offset="100%" stopColor="#94a3b8"/>
        </linearGradient>
        <filter id="ps-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#1e293b" floodOpacity="0.3"/>
        </filter>
        <filter id="ps-phone-shadow">
          <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.5"/>
        </filter>
      </defs>
      <rect width="120" height="110" fill="url(#ps-bg)"/>
      {[10,30,50,70,90,110].flatMap(x => [10,30,50,70,90,110].map(y => (
        <line key={`h${x}-${y}`} x1={x-3} y1={y} x2={x+3} y2={y} stroke="#cbd5e1" strokeWidth="0.4" opacity="0.4"/>
      )))}

      <ellipse cx="60" cy="105" rx="44" ry="5" fill="#334155" opacity="0.2"/>

      {/* Stand assembly */}
      <g filter="url(#ps-shadow)">
        {/* Base plate */}
        <ellipse cx="60" cy="98" rx="34" ry="7" fill="url(#ps-base)" stroke="#64748b" strokeWidth="1.2"/>
        <ellipse cx="60" cy="97" rx="30" ry="5" fill="#e2e8f0"/>
        {/* Tripod legs */}
        <path d="M60 72 L34 96" stroke="url(#ps-metal)" strokeWidth="5" strokeLinecap="round"/>
        <path d="M60 72 L86 96" stroke="url(#ps-metal)" strokeWidth="5" strokeLinecap="round"/>
        <path d="M60 72 L60 97" stroke="url(#ps-metal)" strokeWidth="4.5" strokeLinecap="round"/>
        {/* Leg highlights */}
        <path d="M60 72 L34 96" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M60 72 L86 96" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
        {/* Arm shaft */}
        <rect x="56.5" y="34" width="7" height="40" rx="3.5" fill="url(#ps-metal)" stroke="#64748b" strokeWidth="0.8"/>
        <rect x="57.5" y="34" width="2" height="40" rx="1" fill="rgba(255,255,255,0.3)"/>
        {/* Joint ball */}
        <circle cx="60" cy="72" r="7.5" fill="url(#ps-metal)" stroke="#64748b" strokeWidth="1.2"/>
        <circle cx="57" cy="69" r="2.5" fill="rgba(255,255,255,0.45)"/>
        {/* Clip top */}
        <circle cx="60" cy="34" r="6" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5"/>
        <circle cx="60" cy="34" r="2.5" fill="#fef3c7"/>
      </g>

      {/* Phone */}
      <g filter="url(#ps-phone-shadow)">
        <rect x="26" y="4" width="48" height="82" rx="8" fill="url(#ps-phone-body)" stroke="#475569" strokeWidth="1.5"/>
        {/* Screen bezel */}
        <rect x="29" y="8" width="42" height="72" rx="6" fill="#0f172a"/>
        {/* Screen */}
        <rect x="31" y="10" width="38" height="67" rx="5" fill="url(#ps-screen)"/>
        {/* Phone shine */}
        <rect x="26" y="4" width="48" height="82" rx="8" fill="url(#ps-phone-shine)"/>
        {/* Notch */}
        <rect x="42" y="6" width="16" height="4.5" rx="2.2" fill="#1e293b"/>
        <circle cx="50" cy="8.2" r="1.4" fill="#334155"/>
        {/* Screen content - app mockup */}
        <rect x="33" y="13" width="34" height="10" rx="2.5" fill="#2563eb"/>
        <rect x="35" y="16" width="18" height="2.5" rx="1.2" fill="#93c5fd" opacity="0.7"/>
        <rect x="33" y="26" width="15" height="15" rx="3" fill="#3b82f6"/>
        <rect x="51" y="26" width="15" height="15" rx="3" fill="#60a5fa"/>
        <rect x="33" y="44" width="33" height="3" rx="1.5" fill="#93c5fd" opacity="0.5"/>
        <rect x="33" y="50" width="25" height="3" rx="1.5" fill="#93c5fd" opacity="0.35"/>
        <rect x="33" y="56" width="28" height="3" rx="1.5" fill="#93c5fd" opacity="0.25"/>
        <rect x="33" y="64" width="20" height="5" rx="2.5" fill="#f97316" opacity="0.85"/>
        {/* Home bar */}
        <rect x="40" y="79" width="20" height="3" rx="1.5" fill="#475569"/>
        {/* Side buttons */}
        <rect x="24" y="28" width="2.5" height="8" rx="1.2" fill="#475569"/>
        <rect x="93.5" y="24" width="2.5" height="12" rx="1.2" fill="#475569"/>
      </g>
    </svg>
  );
}

function ToteThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="tt-bg" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#fffef0"/>
          <stop offset="100%" stopColor="#fef9c3"/>
        </radialGradient>
        <linearGradient id="tt-body" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7"/>
          <stop offset="45%" stopColor="#fde68a"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
        <linearGradient id="tt-band" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fde68a"/>
          <stop offset="100%" stopColor="#b45309"/>
        </linearGradient>
        <radialGradient id="tt-shine" cx="25%" cy="20%" r="55%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.4)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
        </radialGradient>
        <linearGradient id="tt-handle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#92400e"/>
          <stop offset="100%" stopColor="#451a03"/>
        </linearGradient>
        <filter id="tt-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#78350f" floodOpacity="0.3"/>
        </filter>
      </defs>
      <rect width="120" height="110" fill="url(#tt-bg)"/>
      {/* Linen tile texture */}
      {[0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120].flatMap(x => [0,8,16,24,32,40,48,56,64,72,80,88,96,104].map(y => (
        <line key={`${x}-${y}`} x1={x} y1={y} x2={x+8} y2={y+8} stroke="#ca8a04" strokeWidth="0.3" opacity="0.08"/>
      )))}

      <ellipse cx="60" cy="104" rx="44" ry="5.5" fill="#78350f" opacity="0.2"/>

      <g filter="url(#tt-shadow)">
        {/* Handles */}
        <path d="M38 42 Q32 10 50 8 Q60 6 60 42" fill="none" stroke="url(#tt-handle)" strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M60 42 Q60 6 70 8 Q88 10 82 42" fill="none" stroke="url(#tt-handle)" strokeWidth="4.5" strokeLinecap="round"/>
        {/* Handle sheen */}
        <path d="M38 42 Q32 10 50 8 Q60 6 60 42" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M60 42 Q60 6 70 8 Q88 10 82 42" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>

        {/* Top band */}
        <rect x="14" y="38" width="92" height="14" rx="4" fill="url(#tt-band)" stroke="#b45309" strokeWidth="1.5"/>
        {/* Band rivets */}
        <circle cx="24" cy="45" r="3" fill="#fef3c7" stroke="#b45309" strokeWidth="1"/>
        <circle cx="96" cy="45" r="3" fill="#fef3c7" stroke="#b45309" strokeWidth="1"/>

        {/* Bag body */}
        <path d="M18 52 L14 100 H106 L102 52 Z" fill="url(#tt-body)" stroke="#b45309" strokeWidth="1.5"/>
        {/* Body seam stitching */}
        <line x1="60" y1="52" x2="60" y2="99" stroke="#b45309" strokeWidth="0.8" strokeDasharray="3 2.5" opacity="0.6"/>
        <line x1="14" y1="80" x2="106" y2="80" stroke="#b45309" strokeWidth="1" opacity="0.4"/>
        {/* Body shine */}
        <path d="M18 52 L14 100 H106 L102 52 Z" fill="url(#tt-shine)"/>

        {/* Center patch / logo area */}
        <circle cx="60" cy="72" r="18" fill="#fbbf24" stroke="#b45309" strokeWidth="1.8"/>
        <circle cx="60" cy="72" r="14" fill="#fef3c7"/>
        {/* Checkmark / badge */}
        <path d="M51 72 L57 79 L72 62" stroke="#78350f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        {/* Badge shine */}
        <path d="M46 65 A18 18 0 0 1 74 65" stroke="rgba(255,255,255,0.4)" strokeWidth="3" fill="none" strokeLinecap="round"/>

        {/* Corner stitching marks */}
        <line x1="16" y1="53" x2="20" y2="57" stroke="#92400e" strokeWidth="1" opacity="0.5"/>
        <line x1="104" y1="53" x2="100" y2="57" stroke="#92400e" strokeWidth="1" opacity="0.5"/>
      </g>
    </svg>
  );
}

function BlenderThumbnail(): ReactElement {
  return (
    <svg viewBox="0 0 120 110" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <defs>
        <radialGradient id="bl-bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#f0f9ff"/>
          <stop offset="100%" stopColor="#e0f2fe"/>
        </radialGradient>
        <linearGradient id="bl-jar" x1="5%" y1="0%" x2="95%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe"/>
          <stop offset="30%" stopColor="#bae6fd"/>
          <stop offset="70%" stopColor="#7dd3fc"/>
          <stop offset="100%" stopColor="#0284c7"/>
        </linearGradient>
        <linearGradient id="bl-jar-sheen" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.55)"/>
          <stop offset="30%" stopColor="rgba(255,255,255,0.15)"/>
          <stop offset="70%" stopColor="rgba(255,255,255,0.05)"/>
          <stop offset="100%" stopColor="rgba(255,255,255,0.3)"/>
        </linearGradient>
        <linearGradient id="bl-base" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6b7280"/>
          <stop offset="40%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#111827"/>
        </linearGradient>
        <linearGradient id="bl-lid" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8"/>
          <stop offset="100%" stopColor="#0369a1"/>
        </linearGradient>
        <clipPath id="bl-jar-clip">
          <path d="M34 28 L24 82 H96 L86 28 Z"/>
        </clipPath>
        <linearGradient id="bl-smoothie" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4ade80"/>
          <stop offset="50%" stopColor="#22c55e"/>
          <stop offset="100%" stopColor="#16a34a"/>
        </linearGradient>
        <filter id="bl-shadow">
          <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#0c4a6e" floodOpacity="0.3"/>
        </filter>
        <filter id="bl-btn-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <rect width="120" height="110" fill="url(#bl-bg)"/>
      {[15,35,55,75,95,115].flatMap(x => [10,30,50,70,90,110].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" fill="#7dd3fc" opacity="0.15"/>
      )))}

      <ellipse cx="60" cy="104" rx="44" ry="5" fill="#0c4a6e" opacity="0.2"/>

      <g filter="url(#bl-shadow)">
        {/* Motor base */}
        <rect x="24" y="82" width="72" height="22" rx="9" fill="url(#bl-base)" stroke="#111827" strokeWidth="1.5"/>
        {/* Base vents */}
        {[32,38,44].map(x => (
          <line key={x} x1={x} y1="87" x2={x} y2="99" stroke="#4b5563" strokeWidth="1.2" opacity="0.6"/>
        ))}
        {/* Power LED strip */}
        <rect x="26" y="100" width="68" height="2.5" rx="1.2" fill="#111827"/>
        {/* Power button */}
        <circle cx="85" cy="91" r="9" fill="#10b981" stroke="#065f46" strokeWidth="1.5"/>
        <circle cx="85" cy="91" r="5" fill="#34d399"/>
        <path d="M85 87.5 L85 91" stroke="#065f46" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M81.8 88.8 A5 5 0 1 0 88.2 88.8" stroke="#065f46" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <g filter="url(#bl-btn-glow)">
          <circle cx="85" cy="91" r="11" fill="#34d399" opacity="0.2"/>
        </g>
        {/* Speed dial */}
        <circle cx="42" cy="91" r="8" fill="#4b5563" stroke="#374151" strokeWidth="1.2"/>
        <circle cx="42" cy="91" r="4" fill="#6b7280"/>
        <line x1="42" y1="83.5" x2="42" y2="88" stroke="#e5e7eb" strokeWidth="2" strokeLinecap="round"/>
        {/* Pulse lines on base */}
        <rect x="54" y="88" width="18" height="2" rx="1" fill="#374151"/>
        <rect x="54" y="93" width="12" height="2" rx="1" fill="#374151"/>

        {/* Jar body */}
        <path d="M34 28 L24 82 H96 L86 28 Z" fill="url(#bl-jar)" stroke="#0ea5e9" strokeWidth="1.8"/>
        {/* Contents - green smoothie */}
        <g clipPath="url(#bl-jar-clip)">
          <rect x="20" y="55" width="80" height="30" fill="url(#bl-smoothie)" opacity="0.88"/>
          <rect x="20" y="48" width="80" height="12" fill="#86efac" opacity="0.65"/>
          {/* Foam bubbles */}
          <circle cx="38" cy="52" r="5" fill="white" opacity="0.4"/>
          <circle cx="55" cy="48" r="4" fill="white" opacity="0.35"/>
          <circle cx="72" cy="53" r="6" fill="white" opacity="0.32"/>
          <circle cx="84" cy="49" r="3.5" fill="white" opacity="0.38"/>
        </g>
        {/* Jar sheen / glass effect */}
        <path d="M34 28 L24 82 H96 L86 28 Z" fill="url(#bl-jar-sheen)"/>
        {/* Jar measurement markings */}
        <line x1="27" y1="66" x2="32" y2="66" stroke="#0ea5e9" strokeWidth="1" opacity="0.5"/>
        <line x1="27" y1="56" x2="32" y2="56" stroke="#0ea5e9" strokeWidth="1" opacity="0.5"/>
        <line x1="27" y1="46" x2="32" y2="46" stroke="#0ea5e9" strokeWidth="1" opacity="0.5"/>

        {/* Shoulder ring */}
        <path d="M34 28 Q60 22 86 28" fill="#7dd3fc" stroke="#0ea5e9" strokeWidth="1.8"/>

        {/* Lid */}
        <rect x="30" y="14" width="60" height="15" rx="5" fill="url(#bl-lid)" stroke="#0284c7" strokeWidth="1.5"/>
        <rect x="32" y="15" width="56" height="7" rx="3" fill="rgba(255,255,255,0.2)"/>
        {/* Lid knob */}
        <rect x="44" y="4" width="32" height="12" rx="5" fill="#0284c7" stroke="#0369a1" strokeWidth="1.5"/>
        <rect x="46" y="6" width="28" height="5" rx="2.5" fill="rgba(255,255,255,0.2)"/>

        {/* Blade cross */}
        <line x1="36" y1="79" x2="84" y2="79" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>
        <line x1="60" y1="74" x2="60" y2="84" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="60" cy="79" r="3.5" fill="#94a3b8" stroke="#64748b" strokeWidth="1"/>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   DEAL DATA
═══════════════════════════════════════════════════════ */

interface Deal {
  title: string;
  sale: string;
  original: string;
  discount: string;
  pct: number;
  rating: string;
  reviews: string;
  stock: number;
  stockMax: number;
  tileBg: string;
  badgeBg: string;
  Thumb: () => ReactElement;
}

const DEALS: Deal[] = [
  {
    title: "Wireless Earbuds",
    sale: "$14.99",
    original: "$49.99",
    discount: "-70%",
    pct: 70,
    rating: "4.8",
    reviews: "2.1k",
    stock: 18,
    stockMax: 120,
    tileBg: "#ede9fe",
    badgeBg: "#dc2626",
    Thumb: EarbudsThumbnail,
  },
  {
    title: "Oversized Hoodie",
    sale: "$19.99",
    original: "$44.99",
    discount: "-55%",
    pct: 55,
    rating: "4.7",
    reviews: "1.4k",
    stock: 34,
    stockMax: 150,
    tileBg: "#fce7f3",
    badgeBg: "#ea580c",
    Thumb: HoodieThumbnail,
  },
  {
    title: "LED Strip Lights",
    sale: "$8.49",
    original: "$21.00",
    discount: "-60%",
    pct: 60,
    rating: "4.9",
    reviews: "3.8k",
    stock: 10,
    stockMax: 200,
    tileBg: "#dcfce7",
    badgeBg: "#dc2626",
    Thumb: LEDThumbnail,
  },
  {
    title: "Phone Stand",
    sale: "$5.99",
    original: "$11.99",
    discount: "-50%",
    pct: 50,
    rating: "4.6",
    reviews: "876",
    stock: 46,
    stockMax: 100,
    tileBg: "#f1f5f9",
    badgeBg: "#ea580c",
    Thumb: PhoneStandThumbnail,
  },
  {
    title: "Canvas Tote Bag",
    sale: "$7.99",
    original: "$14.99",
    discount: "-45%",
    pct: 45,
    rating: "4.7",
    reviews: "1.2k",
    stock: 63,
    stockMax: 180,
    tileBg: "#fef9c3",
    badgeBg: "#ca8a04",
    Thumb: ToteThumbnail,
  },
  {
    title: "Mini Blender",
    sale: "$16.99",
    original: "$27.99",
    discount: "-40%",
    pct: 40,
    rating: "4.8",
    reviews: "994",
    stock: 24,
    stockMax: 80,
    tileBg: "#e0f2fe",
    badgeBg: "#dc2626",
    Thumb: BlenderThumbnail,
  },
];

const CATEGORIES = ["All", "Tech", "Fashion", "Home", "Under $10"];

/* ═══════════════════════════════════════════════════════
   STARS (inline, module scope)
═══════════════════════════════════════════════════════ */
function StarRating({ rating }: { rating: string }): ReactElement {
  const val = parseFloat(rating);
  const full = Math.floor(val);
  const half = val - full >= 0.5;
  return (
    <span style={{ display: "inline-flex", gap: "1px", alignItems: "center" }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ fontSize: "8px", lineHeight: 1, color: i <= full ? "#facc15" : (i === full + 1 && half) ? "#facc15" : "#3f3f46" }}>
          {i <= full ? "★" : (i === full + 1 && half) ? "½" : "☆"}
        </span>
      ))}
    </span>
  );
}

/* ═══════════════════════════════════════════════════════
   DEAL CARD
═══════════════════════════════════════════════════════ */
interface DealCardProps { deal: Deal }

function DealCard({ deal }: DealCardProps): ReactElement {
  const { Thumb } = deal;
  const soldPct = Math.round(((deal.stockMax - deal.stock) / deal.stockMax) * 100);
  const almostGone = deal.stock < 25;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        overflow: "hidden",
        background: "#ffffff",
        boxShadow: "0 2px 12px rgba(0,0,0,0.13), 0 1px 3px rgba(0,0,0,0.08)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      {/* ── Product photo area ── */}
      <div style={{ position: "relative", backgroundColor: deal.tileBg, padding: "6px 6px 4px" }}>
        {/* Discount badge — top-left */}
        <div style={{
          position: "absolute", top: 0, left: 0, zIndex: 10,
          backgroundColor: deal.badgeBg,
          color: "#fff",
          fontSize: "9px",
          fontWeight: 900,
          padding: "3px 6px",
          borderRadius: "0 0 8px 0",
          letterSpacing: "0.03em",
          boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
        }}>
          {deal.discount}
        </div>
        {/* Heart wishlist — top-right */}
        <div style={{ position: "absolute", top: "4px", right: "5px", zIndex: 10, fontSize: "11px", lineHeight: 1 }}>
          ♡
        </div>
        {/* Thumbnail */}
        <div style={{ width: "100%", height: "90px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "88px", height: "88px" }}>
            <Thumb />
          </div>
        </div>
      </div>

      {/* ── Card info ── */}
      <div style={{ padding: "6px 7px 7px", display: "flex", flexDirection: "column", gap: "4px", flex: 1 }}>
        {/* Title */}
        <p style={{ fontSize: "10px", fontWeight: 700, color: "#18181b", lineHeight: 1.2, margin: 0, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {deal.title}
        </p>

        {/* Price row */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
          <span style={{ fontSize: "14px", fontWeight: 900, color: "#dc2626", lineHeight: 1 }}>
            {deal.sale}
          </span>
          <span style={{ fontSize: "9px", fontWeight: 500, color: "#a1a1aa", textDecoration: "line-through", lineHeight: 1 }}>
            {deal.original}
          </span>
        </div>

        {/* Rating row */}
        <div style={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <StarRating rating={deal.rating} />
          <span style={{ fontSize: "8.5px", fontWeight: 700, color: "#78716c" }}>
            {deal.rating}
          </span>
          <span style={{ fontSize: "8px", color: "#a1a1aa" }}>
            ({deal.reviews})
          </span>
        </div>

        {/* Stock urgency */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{
              fontSize: "7.5px",
              fontWeight: 700,
              color: almostGone ? "#dc2626" : "#ea580c",
            }}>
              {almostGone ? "🔥 Almost gone!" : "Selling fast"}
            </span>
            <span style={{ fontSize: "7px", color: "#a1a1aa" }}>
              {deal.stock} left
            </span>
          </div>
          {/* Progress bar */}
          <div style={{ height: "4px", borderRadius: "2px", backgroundColor: "#f4f4f5", overflow: "hidden" }}>
            <div style={{
              height: "100%",
              width: `${soldPct}%`,
              borderRadius: "2px",
              background: almostGone
                ? "linear-gradient(90deg,#f97316,#dc2626)"
                : "linear-gradient(90deg,#fb923c,#f97316)",
            }}/>
          </div>
        </div>

        {/* Add to cart button */}
        <button
          type="button"
          style={{
            marginTop: "2px",
            width: "100%",
            padding: "6px 4px",
            borderRadius: "8px",
            border: "none",
            background: "linear-gradient(90deg,#f97316 0%,#dc2626 100%)",
            color: "#fff",
            fontSize: "8.5px",
            fontWeight: 900,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            boxShadow: "0 2px 8px rgba(220,38,38,0.35)",
          }}
        >
          <ShoppingCart size={9} strokeWidth={2.5} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
export default function BudgetDeals(): ReactElement {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden"
      style={{ backgroundColor: "#f5f5f5", fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" }}
    >

      {/* ══ TOP APP BAR ══ */}
      <header style={{
        flexShrink: 0,
        background: "linear-gradient(135deg,#dc2626 0%,#ea580c 60%,#ca8a04 100%)",
        paddingBottom: "0",
      }}>
        {/* Status bar stub */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 12px 2px" }}>
          <span style={{ fontSize: "7px", fontWeight: 700, color: "rgba(255,255,255,0.85)" }}>9:41</span>
          <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.85)" }}>●●●●</span>
            <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.85)" }}>WiFi</span>
            <span style={{ fontSize: "7px", color: "rgba(255,255,255,0.85)" }}>🔋</span>
          </div>
        </div>

        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2px 12px 6px" }}>
          {/* Wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Flame size={18} strokeWidth={2.5} color="#fef08a" fill="#fef08a" />
            <span style={{ fontSize: "21px", fontWeight: 900, color: "#fff", letterSpacing: "-1px", textShadow: "0 1px 3px rgba(0,0,0,0.2)" }}>
              DealDrop
            </span>
            <span style={{
              fontSize: "6.5px",
              fontWeight: 900,
              color: "#fff",
              backgroundColor: "rgba(0,0,0,0.25)",
              borderRadius: "100px",
              padding: "2px 5px",
              letterSpacing: "0.08em",
              marginTop: "2px",
            }}>FLASH</span>
          </div>

          {/* Cart icon w/ badge */}
          <div style={{ position: "relative" }}>
            <div style={{
              width: "32px", height: "32px",
              backgroundColor: "rgba(0,0,0,0.22)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.2)",
            }}>
              <ShoppingCart size={16} strokeWidth={2.5} color="white" />
            </div>
            <span style={{
              position: "absolute",
              top: "-2px", right: "-3px",
              width: "14px", height: "14px",
              backgroundColor: "#fef08a",
              color: "#dc2626",
              fontSize: "7px",
              fontWeight: 900,
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1.5px solid #dc2626",
            }}>3</span>
          </div>
        </div>

        {/* Search pill */}
        <div style={{ padding: "0 12px 10px" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            backgroundColor: "rgba(255,255,255,0.95)",
            borderRadius: "100px",
            padding: "7px 12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}>
            <Search size={11} strokeWidth={2.5} color="#9ca3af" />
            <span style={{ flex: 1, fontSize: "10px", color: "#9ca3af" }}>Search flash deals&hellip;</span>
            <span style={{
              fontSize: "7px",
              fontWeight: 900,
              color: "#fff",
              backgroundColor: "#ea580c",
              borderRadius: "100px",
              padding: "2px 6px",
              letterSpacing: "0.06em",
            }}>HOT</span>
          </div>
        </div>
      </header>

      {/* ══ FLASH SALE COUNTDOWN BANNER ══ */}
      <div style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "7px 12px",
        background: "linear-gradient(90deg,#18181b 0%,#1c1917 100%)",
        borderBottom: "1px solid #27272a",
      }}>
        {/* Left label */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ fontSize: "16px", lineHeight: 1 }}>⚡</span>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 900, color: "#fff", margin: 0, letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Flash Sale
            </p>
            <p style={{ fontSize: "7.5px", fontWeight: 600, color: "#f97316", margin: 0 }}>
              Ends soon &#x2022; Limited stock
            </p>
          </div>
        </div>

        {/* Countdown blocks */}
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          {["02", "14", "09"].map((seg, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "2px" }}>
              <span style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "26px", height: "24px",
                backgroundColor: "#27272a",
                border: "1px solid #3f3f46",
                borderRadius: "5px",
                fontSize: "13px",
                fontWeight: 900,
                color: "#fde047",
                fontVariantNumeric: "tabular-nums",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}>
                {seg}
              </span>
              {i < 2 && <span style={{ fontSize: "13px", fontWeight: 900, color: "#f97316", lineHeight: 1 }}>:</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ══ PROMO TICKER ══ */}
      <div style={{ flexShrink: 0, backgroundColor: "#fef08a", overflow: "hidden", padding: "3px 0" }}>
        <span style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          fontSize: "7.5px",
          fontWeight: 700,
          color: "#1c1917",
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          animation: "ddTick 18s linear infinite",
        }}>
          🚀 Free shipping over $25&nbsp;&nbsp;·&nbsp;&nbsp;
          Code <strong>DROP10</strong> = extra 10% off&nbsp;&nbsp;·&nbsp;&nbsp;
          🔥 New deals every hour&nbsp;&nbsp;·&nbsp;&nbsp;
          ⭐ 4.9 stars · 2M+ orders&nbsp;&nbsp;·&nbsp;&nbsp;
          🚀 Free shipping over $25&nbsp;&nbsp;·&nbsp;&nbsp;
          Code <strong>DROP10</strong> = extra 10% off&nbsp;&nbsp;·&nbsp;&nbsp;
          🔥 New deals every hour&nbsp;&nbsp;
        </span>
      </div>

      {/* ══ CATEGORY CHIPS ══ */}
      <div style={{
        flexShrink: 0,
        display: "flex",
        gap: "6px",
        overflowX: "auto",
        padding: "8px 12px 0",
        scrollbarWidth: "none",
        backgroundColor: "#fff",
      }}>
        {CATEGORIES.map((cat, i) => (
          <span key={cat} style={{
            flexShrink: 0,
            fontSize: "9px",
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            padding: "4px 11px",
            borderRadius: "100px",
            backgroundColor: i === 0 ? "#dc2626" : "#f4f4f5",
            color: i === 0 ? "#fff" : "#52525b",
            border: i === 0 ? "none" : "1px solid #e4e4e7",
            boxShadow: i === 0 ? "0 2px 8px rgba(220,38,38,0.35)" : "none",
          }}>
            {cat}
          </span>
        ))}
      </div>

      {/* ══ SECTION HEADER ══ */}
      <div style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "6px 12px 4px",
        backgroundColor: "#fff",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Star size={10} strokeWidth={0} fill="#facc15" color="#facc15" />
          <span style={{ fontSize: "10px", fontWeight: 900, color: "#18181b", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            Today&apos;s Deals
          </span>
          <span style={{
            fontSize: "7px", fontWeight: 900, color: "#fff",
            backgroundColor: "#dc2626",
            borderRadius: "100px", padding: "1.5px 5px",
          }}>6</span>
        </div>
        <span style={{ fontSize: "8px", fontWeight: 600, color: "#ea580c", cursor: "pointer" }}>
          See all &rsaquo;
        </span>
      </div>

      {/* ══ DEAL GRID ══ */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        padding: "6px 10px 10px",
        backgroundColor: "#f5f5f5",
        scrollbarWidth: "none",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {DEALS.map(deal => (
            <DealCard key={deal.title} deal={deal} />
          ))}
        </div>

        {/* Members promo banner */}
        <div style={{
          marginTop: "10px",
          borderRadius: "12px",
          padding: "10px 14px",
          background: "linear-gradient(110deg,#dc2626 0%,#ea580c 100%)",
          boxShadow: "0 4px 16px rgba(220,38,38,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          <div>
            <p style={{ fontSize: "7px", fontWeight: 900, color: "#fde047", margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Members Only 👑
            </p>
            <p style={{ fontSize: "10.5px", fontWeight: 900, color: "#fff", margin: "2px 0 0", lineHeight: 1.2 }}>
              Extra 10% off every drop
            </p>
          </div>
          <button type="button" style={{
            fontSize: "7.5px",
            fontWeight: 900,
            color: "#dc2626",
            backgroundColor: "#fef08a",
            border: "none",
            borderRadius: "100px",
            padding: "6px 12px",
            cursor: "pointer",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
          }}>
            Join Free
          </button>
        </div>
      </div>

      {/* ══ BOTTOM NAV ══ */}
      <nav style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        borderTop: "1px solid #e4e4e7",
        padding: "6px 0 8px",
        boxShadow: "0 -2px 12px rgba(0,0,0,0.07)",
      }}>
        {[
          { icon: <Home size={18} strokeWidth={2} />, label: "Home", active: true },
          { icon: <Grid2x2 size={18} strokeWidth={2} />, label: "Categories", active: false },
          { icon: <ShoppingCart size={18} strokeWidth={2} />, label: "Cart", active: false, badge: 3 },
          { icon: <User size={18} strokeWidth={2} />, label: "Me", active: false },
        ].map(({ icon, label, active, badge }) => (
          <button
            key={label}
            type="button"
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: "2px",
              color: active ? "#dc2626" : "#a1a1aa",
              background: "none", border: "none", cursor: "pointer",
              minWidth: "48px", position: "relative",
            }}
          >
            {badge && (
              <span style={{
                position: "absolute", top: "-2px", right: "8px",
                width: "13px", height: "13px",
                backgroundColor: "#dc2626", color: "#fff",
                fontSize: "6.5px", fontWeight: 900,
                borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1.5px solid #fff",
              }}>{badge}</span>
            )}
            {icon}
            <span style={{ fontSize: "7.5px", fontWeight: active ? 800 : 600 }}>{label}</span>
            {active && <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#dc2626", marginTop: "-1px" }}/>}
          </button>
        ))}
      </nav>

      {/* ══ KEYFRAME ══ */}
      <style>{`
        @keyframes ddTick {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
