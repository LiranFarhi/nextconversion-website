import type { ReactElement } from "react";
import { Search, Home, Plus, Bookmark, Bell, User } from "lucide-react";

// ─── Photographic product renders via layered SVG gradients ──────────────────

function RosehipOilBottle(): ReactElement {
  return (
    <svg viewBox="0 0 90 160" fill="none" className="h-full w-auto drop-shadow-lg" aria-hidden="true">
      <defs>
        {/* Studio background glow */}
        <radialGradient id="rh-bg" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#fff3e8" />
          <stop offset="100%" stopColor="#fde8c8" />
        </radialGradient>
        {/* Amber glass body */}
        <linearGradient id="rh-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b8620a" stopOpacity="0.9" />
          <stop offset="18%" stopColor="#e8891e" stopOpacity="0.85" />
          <stop offset="45%" stopColor="#f5b040" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#d4780e" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#7a3e06" stopOpacity="0.9" />
        </linearGradient>
        {/* Specular highlight streak */}
        <linearGradient id="rh-spec" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.70" />
          <stop offset="60%" stopColor="white" stopOpacity="0.18" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>
        {/* Dropper rubber bulb */}
        <radialGradient id="rh-bulb" cx="35%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#c98040" />
          <stop offset="100%" stopColor="#7a4010" />
        </radialGradient>
        {/* Label area */}
        <linearGradient id="rh-label" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c06010" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#f8c060" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#c06010" stopOpacity="0.12" />
        </linearGradient>
        {/* Soft floor reflection */}
        <linearGradient id="rh-reflect" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8891e" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#e8891e" stopOpacity="0.0" />
        </linearGradient>
        {/* Drop shadow */}
        <filter id="rh-shadow" x="-20%" y="-10%" width="140%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="5" floodColor="#8a4010" floodOpacity="0.28" />
        </filter>
      </defs>
      {/* Dropper rubber bulb */}
      <ellipse cx="45" cy="13" rx="9" ry="12" fill="url(#rh-bulb)" />
      <ellipse cx="41" cy="9" rx="3.5" ry="4.5" fill="white" opacity="0.28" />
      {/* Dropper stem */}
      <rect x="42.5" y="23" width="5" height="26" rx="2.5" fill="#c8780e" />
      <rect x="43.5" y="23" width="2" height="22" rx="1" fill="white" opacity="0.20" />
      {/* Collar / ferrule */}
      <rect x="30" y="46" width="30" height="8" rx="4" fill="#9a5808" />
      <rect x="31" y="46" width="8" height="4" rx="2" fill="white" opacity="0.18" />
      {/* Shoulder */}
      <path d="M30 52 Q28 62 22 68 L22 140 Q22 150 45 150 Q68 150 68 140 L68 68 Q62 62 60 52Z" fill="url(#rh-body)" filter="url(#rh-shadow)" />
      {/* Specular highlight — left edge bright streak */}
      <rect x="24" y="68" width="8" height="68" rx="4" fill="url(#rh-spec)" opacity="0.85" />
      {/* Secondary glint — right */}
      <rect x="60" y="72" width="3" height="48" rx="1.5" fill="white" opacity="0.12" />
      {/* Base rim darkening */}
      <ellipse cx="45" cy="140" rx="23" ry="5" fill="#6a3806" opacity="0.35" />
      {/* Label patch — frosted */}
      <rect x="26" y="82" width="38" height="40" rx="8" fill="url(#rh-label)" />
      <rect x="26" y="82" width="38" height="40" rx="8" stroke="white" strokeWidth="0.5" strokeOpacity="0.30" fill="none" />
      {/* Label: brand line */}
      <rect x="30" y="88" width="30" height="2.5" rx="1.25" fill="white" opacity="0.55" />
      {/* Label: product name lines */}
      <rect x="30" y="94" width="30" height="1.8" rx="0.9" fill="white" opacity="0.80" />
      <rect x="30" y="98" width="22" height="1.6" rx="0.8" fill="white" opacity="0.55" />
      {/* Label: rose petal motif */}
      <path d="M39 106 C36 103 33 107 36 110 C39 113 43 112 43 108 C43 104 39 103 39 106Z" fill="white" opacity="0.35" />
      <path d="M45 104 C43 101 40 104 42 107 C44 110 48 109 48 106 C48 103 45 102 45 104Z" fill="white" opacity="0.28" />
      <circle cx="42" cy="110" r="2" fill="white" opacity="0.22" />
      {/* Floor reflection (soft elongated ellipse below bottle) */}
      <ellipse cx="45" cy="148" rx="18" ry="4" fill="#d47810" opacity="0.12" />
      <ellipse cx="45" cy="152" rx="12" ry="2" fill="#d47810" opacity="0.07" />
    </svg>
  );
}

function BarrierSerumBottle(): ReactElement {
  return (
    <svg viewBox="0 0 80 170" fill="none" className="h-full w-auto drop-shadow-lg" aria-hidden="true">
      <defs>
        <linearGradient id="bs-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c8d4e0" stopOpacity="0.92" />
          <stop offset="15%" stopColor="#e8f0f8" stopOpacity="0.96" />
          <stop offset="45%" stopColor="#f6faff" stopOpacity="1" />
          <stop offset="75%" stopColor="#d0dce8" stopOpacity="0.90" />
          <stop offset="100%" stopColor="#9aaebc" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="bs-spec" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.90" />
          <stop offset="50%" stopColor="white" stopOpacity="0.30" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="bs-pump" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8090a0" />
          <stop offset="50%" stopColor="#b0c0d0" />
          <stop offset="100%" stopColor="#606878" />
        </linearGradient>
        <linearGradient id="bs-cap" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#606878" />
          <stop offset="40%" stopColor="#9aaab8" />
          <stop offset="100%" stopColor="#4a5260" />
        </linearGradient>
        <filter id="bs-shadow" x="-20%" y="-5%" width="140%" height="125%">
          <feDropShadow dx="0" dy="7" stdDeviation="6" floodColor="#607080" floodOpacity="0.24" />
        </filter>
        <radialGradient id="bs-label" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#c8e0f8" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#a0bcd8" stopOpacity="0.08" />
        </radialGradient>
      </defs>
      {/* Pump head */}
      <rect x="28" y="8" width="24" height="12" rx="6" fill="url(#bs-cap)" />
      <rect x="30" y="9" width="8" height="5" rx="2.5" fill="white" opacity="0.22" />
      {/* Pump stem */}
      <rect x="37" y="18" width="6" height="28" rx="3" fill="url(#bs-pump)" />
      <rect x="38" y="18" width="2" height="24" rx="1" fill="white" opacity="0.25" />
      {/* Pump collar */}
      <rect x="24" y="43" width="32" height="10" rx="5" fill="url(#bs-cap)" />
      <rect x="26" y="44" width="10" height="4" rx="2" fill="white" opacity="0.20" />
      {/* Bottle body — tall slim frosted glass */}
      <rect x="18" y="50" width="44" height="108" rx="14" fill="url(#bs-body)" filter="url(#bs-shadow)" />
      {/* Specular highlight */}
      <rect x="21" y="54" width="10" height="96" rx="5" fill="url(#bs-spec)" opacity="0.80" />
      {/* Faint right edge glint */}
      <rect x="57" y="60" width="3" height="80" rx="1.5" fill="white" opacity="0.15" />
      {/* Base darkening */}
      <ellipse cx="40" cy="158" rx="22" ry="5" fill="#607080" opacity="0.22" />
      {/* Label area */}
      <rect x="22" y="78" width="36" height="52" rx="10" fill="url(#bs-label)" />
      <rect x="22" y="78" width="36" height="52" rx="10" stroke="white" strokeWidth="0.6" strokeOpacity="0.35" fill="none" />
      {/* Label lines */}
      <rect x="27" y="86" width="26" height="2.5" rx="1.25" fill="#607080" opacity="0.55" />
      <rect x="27" y="92" width="26" height="1.8" rx="0.9" fill="#607080" opacity="0.70" />
      <rect x="27" y="97" width="18" height="1.5" rx="0.75" fill="#607080" opacity="0.45" />
      {/* Ingredient badge — hexagon motif */}
      <polygon points="40,110 46,113 46,119 40,122 34,119 34,113" fill="none" stroke="#8090a0" strokeWidth="0.8" strokeOpacity="0.50" />
      <rect x="36" y="114" width="8" height="1.4" rx="0.7" fill="#8090a0" opacity="0.40" />
      <rect x="37" y="117" width="6" height="1.2" rx="0.6" fill="#8090a0" opacity="0.30" />
      {/* Floor reflection */}
      <ellipse cx="40" cy="156" rx="16" ry="3.5" fill="#8090a0" opacity="0.10" />
    </svg>
  );
}

function CleanseTubeBottle(): ReactElement {
  return (
    <svg viewBox="0 0 110 150" fill="none" className="h-full w-auto drop-shadow-lg" aria-hidden="true">
      <defs>
        <linearGradient id="ct-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#a8cfc0" stopOpacity="0.85" />
          <stop offset="20%" stopColor="#d4ede2" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#edf8f2" stopOpacity="1" />
          <stop offset="78%" stopColor="#c0e0d0" stopOpacity="0.90" />
          <stop offset="100%" stopColor="#78a898" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="ct-spec" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.85" />
          <stop offset="40%" stopColor="white" stopOpacity="0.30" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="ct-cap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5a9080" />
          <stop offset="50%" stopColor="#88b8a8" />
          <stop offset="100%" stopColor="#3a7060" />
        </linearGradient>
        <filter id="ct-shadow" x="-10%" y="-5%" width="120%" height="130%">
          <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="#406050" floodOpacity="0.22" />
        </filter>
        <radialGradient id="ct-label" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#80c8a8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#40806a" stopOpacity="0.06" />
        </radialGradient>
      </defs>
      {/* Flip cap */}
      <rect x="38" y="6" width="34" height="18" rx="9" fill="url(#ct-cap)" />
      <rect x="40" y="7" width="12" height="8" rx="4" fill="white" opacity="0.22" />
      {/* Cap nozzle */}
      <rect x="52" y="22" width="6" height="10" rx="3" fill="#3a7060" />
      {/* Shoulder */}
      <path d="M20 46 Q20 32 38 28 L72 28 Q90 32 90 46 Z" fill="#b8ddd0" />
      {/* Tube body — wide squeeze tube lying flat, angled */}
      <rect x="16" y="44" width="78" height="88" rx="18" fill="url(#ct-body)" filter="url(#ct-shadow)" />
      {/* Specular sheen left side */}
      <rect x="19" y="48" width="14" height="76" rx="7" fill="url(#ct-spec)" opacity="0.75" />
      {/* Right edge glint */}
      <rect x="89" y="54" width="3" height="60" rx="1.5" fill="white" opacity="0.12" />
      {/* Crimped bottom */}
      <rect x="16" y="122" width="78" height="10" rx="5" fill="#8ab8a8" opacity="0.55" />
      <rect x="20" y="124" width="18" height="3" rx="1.5" fill="white" opacity="0.22" />
      <rect x="44" y="124" width="18" height="3" rx="1.5" fill="white" opacity="0.16" />
      {/* Label area */}
      <rect x="24" y="60" width="62" height="46" rx="10" fill="url(#ct-label)" />
      <rect x="24" y="60" width="62" height="46" rx="10" stroke="white" strokeWidth="0.6" strokeOpacity="0.30" fill="none" />
      {/* Brand text simulation */}
      <rect x="30" y="67" width="50" height="2.8" rx="1.4" fill="#3a7060" opacity="0.65" />
      <rect x="30" y="74" width="50" height="2" rx="1" fill="#3a7060" opacity="0.80" />
      <rect x="30" y="79" width="36" height="1.6" rx="0.8" fill="#3a7060" opacity="0.50" />
      {/* Leaf motif */}
      <path d="M55 88 C49 82 46 92 52 96 C58 100 63 95 60 89 C57 83 55 85 55 88Z" fill="#3a7060" opacity="0.22" />
      <line x1="55" y1="96" x2="55" y2="84" stroke="#3a7060" strokeWidth="0.8" strokeOpacity="0.28" />
      {/* Base reflection */}
      <ellipse cx="55" cy="136" rx="30" ry="4" fill="#60a890" opacity="0.10" />
    </svg>
  );
}

function TonerMistBottle(): ReactElement {
  return (
    <svg viewBox="0 0 80 150" fill="none" className="h-full w-auto drop-shadow-lg" aria-hidden="true">
      <defs>
        <linearGradient id="tm-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#90c8e8" stopOpacity="0.82" />
          <stop offset="18%" stopColor="#c8e8f8" stopOpacity="0.92" />
          <stop offset="48%" stopColor="#e8f6ff" stopOpacity="1" />
          <stop offset="76%" stopColor="#a8d4ee" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#6090b0" stopOpacity="0.85" />
        </linearGradient>
        <linearGradient id="tm-spec" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.85" />
          <stop offset="55%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="tm-pump" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5080a0" />
          <stop offset="50%" stopColor="#80b0d0" />
          <stop offset="100%" stopColor="#3a6080" />
        </linearGradient>
        <filter id="tm-shadow" x="-20%" y="-5%" width="140%" height="125%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#3060a0" floodOpacity="0.22" />
        </filter>
        <radialGradient id="tm-label" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#a0d0f0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#5090c0" stopOpacity="0.06" />
        </radialGradient>
      </defs>
      {/* Pump nozzle head */}
      <rect x="24" y="12" width="32" height="10" rx="5" fill="url(#tm-pump)" />
      <rect x="26" y="13" width="10" height="4" rx="2" fill="white" opacity="0.25" />
      {/* Horizontal sprayer nozzle */}
      <rect x="54" y="14" width="16" height="7" rx="3.5" fill="#4070a0" />
      <rect x="68" y="15.5" width="4" height="4" rx="2" fill="#305880" />
      {/* Mist spray particles */}
      <circle cx="76" cy="13" r="2.5" fill="#a8d8f8" opacity="0.60" />
      <circle cx="80" cy="9" r="1.8" fill="#a8d8f8" opacity="0.45" />
      <circle cx="78" cy="18" r="1.4" fill="#a8d8f8" opacity="0.40" />
      <circle cx="83" cy="13" r="1.0" fill="#a8d8f8" opacity="0.35" />
      <circle cx="75" cy="7" r="0.8" fill="#a8d8f8" opacity="0.30" />
      {/* Pump stem */}
      <rect x="37" y="20" width="6" height="22" rx="3" fill="url(#tm-pump)" />
      <rect x="38" y="20" width="2" height="18" rx="1" fill="white" opacity="0.22" />
      {/* Collar */}
      <rect x="22" y="40" width="36" height="8" rx="4" fill="#4a7898" />
      <rect x="24" y="41" width="10" height="4" rx="2" fill="white" opacity="0.18" />
      {/* Bottle body */}
      <rect x="14" y="46" width="52" height="94" rx="16" fill="url(#tm-body)" filter="url(#tm-shadow)" />
      {/* Specular left streak */}
      <rect x="17" y="50" width="10" height="84" rx="5" fill="url(#tm-spec)" opacity="0.82" />
      {/* Right glint */}
      <rect x="62" y="56" width="2.5" height="66" rx="1.25" fill="white" opacity="0.14" />
      {/* Base */}
      <ellipse cx="40" cy="140" rx="26" ry="5" fill="#3060a0" opacity="0.18" />
      {/* Label */}
      <rect x="18" y="68" width="44" height="48" rx="10" fill="url(#tm-label)" />
      <rect x="18" y="68" width="44" height="48" rx="10" stroke="white" strokeWidth="0.6" strokeOpacity="0.32" fill="none" />
      {/* Label lines */}
      <rect x="23" y="76" width="34" height="2.5" rx="1.25" fill="#1a5080" opacity="0.55" />
      <rect x="23" y="83" width="34" height="2" rx="1" fill="#1a5080" opacity="0.72" />
      <rect x="23" y="89" width="24" height="1.6" rx="0.8" fill="#1a5080" opacity="0.45" />
      {/* Wave motif */}
      <path d="M22 100 Q30 96 38 100 Q46 104 54 100" stroke="#1a5080" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.40" />
      <path d="M22 106 Q30 102 38 106 Q46 110 54 106" stroke="#1a5080" strokeWidth="0.8" strokeLinecap="round" strokeOpacity="0.28" />
      {/* Floor reflection */}
      <ellipse cx="40" cy="138" rx="20" ry="3.5" fill="#60a0d0" opacity="0.10" />
    </svg>
  );
}

function ClayMaskJar(): ReactElement {
  return (
    <svg viewBox="0 0 120 110" fill="none" className="h-full w-auto drop-shadow-lg" aria-hidden="true">
      <defs>
        <linearGradient id="cm-lid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9a7058" stopOpacity="0.92" />
          <stop offset="22%" stopColor="#c8a882" stopOpacity="0.98" />
          <stop offset="50%" stopColor="#e0c090" stopOpacity="1" />
          <stop offset="76%" stopColor="#b89068" stopOpacity="0.94" />
          <stop offset="100%" stopColor="#7a5038" stopOpacity="0.90" />
        </linearGradient>
        <linearGradient id="cm-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b88a68" stopOpacity="0.88" />
          <stop offset="18%" stopColor="#ddb890" stopOpacity="0.95" />
          <stop offset="48%" stopColor="#f0d0a8" stopOpacity="1" />
          <stop offset="76%" stopColor="#c89870" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#8a6040" stopOpacity="0.88" />
        </linearGradient>
        <linearGradient id="cm-spec" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.72" />
          <stop offset="35%" stopColor="white" stopOpacity="0.25" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </linearGradient>
        <filter id="cm-shadow" x="-10%" y="-10%" width="120%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#5a3820" floodOpacity="0.26" />
        </filter>
        <radialGradient id="cm-label" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#e8c088" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#a07040" stopOpacity="0.06" />
        </radialGradient>
        <radialGradient id="cm-lid-top" cx="38%" cy="35%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.35" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </radialGradient>
      </defs>
      {/* Jar body */}
      <rect x="10" y="50" width="100" height="54" rx="16" fill="url(#cm-body)" filter="url(#cm-shadow)" />
      {/* Body specular left */}
      <rect x="13" y="54" width="16" height="44" rx="8" fill="url(#cm-spec)" opacity="0.70" />
      {/* Body right glint */}
      <rect x="105" y="58" width="3" height="36" rx="1.5" fill="white" opacity="0.12" />
      {/* Lid */}
      <rect x="10" y="32" width="100" height="22" rx="12" fill="url(#cm-lid)" />
      {/* Lid top highlight glow */}
      <ellipse cx="42" cy="38" rx="28" ry="8" fill="url(#cm-lid-top)" />
      {/* Lid rim groove */}
      <rect x="10" y="50" width="100" height="5" rx="0" fill="#7a5030" opacity="0.28" />
      {/* Label area on body */}
      <rect x="16" y="60" width="88" height="34" rx="9" fill="url(#cm-label)" />
      <rect x="16" y="60" width="88" height="34" rx="9" stroke="white" strokeWidth="0.6" strokeOpacity="0.28" fill="none" />
      {/* Brand line */}
      <rect x="24" y="67" width="72" height="2.6" rx="1.3" fill="#5a3820" opacity="0.55" />
      {/* Product name */}
      <rect x="24" y="74" width="72" height="2" rx="1" fill="#5a3820" opacity="0.72" />
      <rect x="32" y="79" width="56" height="1.6" rx="0.8" fill="#5a3820" opacity="0.45" />
      {/* Clay swirl motif */}
      <path d="M38 88 Q60 83 82 88 Q60 93 38 88Z" fill="#9a7040" opacity="0.20" />
      {/* Base reflection ellipse */}
      <ellipse cx="60" cy="102" rx="40" ry="5" fill="#806040" opacity="0.12" />
      <ellipse cx="60" cy="106" rx="26" ry="2.5" fill="#806040" opacity="0.07" />
    </svg>
  );
}

// ─── Idea pin rich gradient cards ─────────────────────────────────────────────

function IdeaPinAMPM(): ReactElement {
  return (
    <svg viewBox="0 0 140 170" fill="none" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="ampm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c8e8d8" />
          <stop offset="40%" stopColor="#eef6ee" />
          <stop offset="100%" stopColor="#d8f0e0" />
        </linearGradient>
        <radialGradient id="ampm-glow" cx="50%" cy="30%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </radialGradient>
      </defs>
      {/* Background */}
      <rect width="140" height="170" fill="url(#ampm-bg)" />
      <rect width="140" height="170" fill="url(#ampm-glow)" />
      {/* Botanical: scattered leaves */}
      <path d="M12 30 C8 18 18 10 22 22 C26 34 16 42 12 30Z" fill="#4a8060" opacity="0.18" />
      <path d="M14 22 L12 30" stroke="#4a8060" strokeWidth="0.7" opacity="0.22" />
      <path d="M120 20 C124 8 134 12 130 24 C126 36 116 32 120 20Z" fill="#4a8060" opacity="0.15" />
      <path d="M122 16 L120 24" stroke="#4a8060" strokeWidth="0.7" opacity="0.20" />
      <path d="M8 100 C4 88 14 82 18 94 C22 106 12 112 8 100Z" fill="#6aa080" opacity="0.13" />
      <path d="M128 130 C132 118 142 122 138 134 C134 146 124 142 128 130Z" fill="#4a8060" opacity="0.13" />
      {/* Fern sprigs */}
      <path d="M20 148 Q26 138 34 140" stroke="#4a8060" strokeWidth="1.2" strokeLinecap="round" opacity="0.20" />
      <path d="M18 152 Q25 143 32 146" stroke="#4a8060" strokeWidth="0.9" strokeLinecap="round" opacity="0.16" />
      <path d="M108 152 Q114 142 122 144" stroke="#4a8060" strokeWidth="1.2" strokeLinecap="round" opacity="0.18" />
      {/* AM label pill */}
      <rect x="20" y="28" width="40" height="22" rx="11" fill="#4a8060" opacity="0.85" />
      <text x="40" y="43" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="white" opacity="0.95">AM</text>
      {/* PM label pill */}
      <rect x="80" y="28" width="40" height="22" rx="11" fill="#2a5840" opacity="0.78" />
      <text x="100" y="43" textAnchor="middle" fontFamily="Georgia, serif" fontSize="11" fontWeight="700" fill="white" opacity="0.90">PM</text>
      {/* Divider line */}
      <line x1="20" y1="62" x2="120" y2="62" stroke="#4a8060" strokeWidth="0.6" strokeOpacity="0.30" />
      {/* Steps text simulation */}
      <rect x="20" y="70" width="100" height="3" rx="1.5" fill="#2a5840" opacity="0.55" />
      <rect x="20" y="78" width="80" height="2.5" rx="1.25" fill="#2a5840" opacity="0.42" />
      <rect x="20" y="85" width="90" height="2.5" rx="1.25" fill="#2a5840" opacity="0.38" />
      <rect x="20" y="92" width="70" height="2.5" rx="1.25" fill="#2a5840" opacity="0.32" />
      {/* Circle icons row for steps */}
      <circle cx="30" cy="112" r="10" fill="#4a8060" opacity="0.18" />
      <circle cx="56" cy="112" r="10" fill="#4a8060" opacity="0.15" />
      <circle cx="82" cy="112" r="10" fill="#4a8060" opacity="0.18" />
      <circle cx="108" cy="112" r="10" fill="#4a8060" opacity="0.13" />
      {/* Circle labels */}
      <rect x="24" y="119" width="12" height="1.5" rx="0.75" fill="#2a5840" opacity="0.38" />
      <rect x="50" y="119" width="12" height="1.5" rx="0.75" fill="#2a5840" opacity="0.35" />
      <rect x="76" y="119" width="12" height="1.5" rx="0.75" fill="#2a5840" opacity="0.38" />
      <rect x="102" y="119" width="12" height="1.5" rx="0.75" fill="#2a5840" opacity="0.32" />
      {/* Bottom tag */}
      <rect x="20" y="138" width="100" height="20" rx="10" fill="#4a8060" opacity="0.14" />
      <rect x="24" y="143" width="60" height="2" rx="1" fill="#2a5840" opacity="0.40" />
      <rect x="24" y="149" width="44" height="1.6" rx="0.8" fill="#2a5840" opacity="0.30" />
    </svg>
  );
}

function IdeaPinGlow(): ReactElement {
  return (
    <svg viewBox="0 0 140 180" fill="none" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="gw-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f5dde0" />
          <stop offset="45%" stopColor="#fdf0f0" />
          <stop offset="100%" stopColor="#f0d8dc" />
        </linearGradient>
        <radialGradient id="gw-glow" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.60" />
          <stop offset="100%" stopColor="white" stopOpacity="0.0" />
        </radialGradient>
        <radialGradient id="gw-orb" cx="40%" cy="38%" r="55%">
          <stop offset="0%" stopColor="#f8c0c8" stopOpacity="0.90" />
          <stop offset="100%" stopColor="#e08090" stopOpacity="0.50" />
        </radialGradient>
      </defs>
      {/* Background */}
      <rect width="140" height="180" fill="url(#gw-bg)" />
      <rect width="140" height="180" fill="url(#gw-glow)" />
      {/* Scattered petals / botanicals */}
      <path d="M10 24 C6 14 16 8 18 18 C20 28 12 34 10 24Z" fill="#c06070" opacity="0.14" transform="rotate(-15 10 24)" />
      <path d="M125 18 C129 8 137 14 133 24 C129 34 121 28 125 18Z" fill="#c06070" opacity="0.12" transform="rotate(10 125 18)" />
      <path d="M8 150 C4 140 14 135 16 145 C18 155 10 160 8 150Z" fill="#c06070" opacity="0.11" />
      <path d="M126 160 C130 150 138 156 134 166 C130 176 122 170 126 160Z" fill="#c06070" opacity="0.11" />
      {/* Large glowing orb — hero visual */}
      <circle cx="70" cy="72" r="42" fill="url(#gw-orb)" />
      <circle cx="70" cy="72" r="42" stroke="#d08090" strokeWidth="0.8" strokeOpacity="0.30" />
      {/* Orb inner radial glow */}
      <circle cx="58" cy="60" r="18" fill="white" opacity="0.28" />
      {/* Ingredient initials in orb */}
      <text x="70" y="68" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fontWeight="700" fill="#7a3040" opacity="0.75">Vit C</text>
      <text x="70" y="83" textAnchor="middle" fontFamily="Georgia, serif" fontSize="9" fill="#7a3040" opacity="0.55">+ Niacinamide</text>
      {/* Star sparkles around orb */}
      <path d="M116 50 L117.5 46 L119 50 L115 48 L119 48Z" fill="#e08090" opacity="0.60" />
      <path d="M22 88 L23.5 84 L25 88 L21 86 L25 86Z" fill="#e08090" opacity="0.50" />
      <path d="M110 96 L111 93 L112 96 L109 94.5 L112 94.5Z" fill="#e08090" opacity="0.45" />
      {/* Ingredient tags below orb */}
      <rect x="18" y="124" width="36" height="16" rx="8" fill="#d08090" opacity="0.75" />
      <text x="36" y="135" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="600" fill="white">Rosehip</text>
      <rect x="60" y="124" width="36" height="16" rx="8" fill="#b86878" opacity="0.72" />
      <text x="78" y="135" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="600" fill="white">Retinol</text>
      <rect x="102" y="124" width="22" height="16" rx="8" fill="#c07888" opacity="0.68" />
      <text x="113" y="135" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="7.5" fontWeight="600" fill="white">AHA</text>
      {/* Explanatory text rows */}
      <rect x="18" y="150" width="104" height="2.5" rx="1.25" fill="#7a3040" opacity="0.45" />
      <rect x="18" y="157" width="80" height="2" rx="1" fill="#7a3040" opacity="0.32" />
      <rect x="18" y="163" width="90" height="2" rx="1" fill="#7a3040" opacity="0.28" />
    </svg>
  );
}

// ─── Save button overlay ──────────────────────────────────────────────────────

function SaveBadge(): ReactElement {
  return (
    <button
      aria-label="Save"
      className="absolute right-2 top-2 rounded-full bg-[#e60023] px-3 py-[5px] text-[8.5px] font-bold leading-none tracking-wide text-white"
      style={{ boxShadow: "0 2px 6px rgba(230,0,35,0.35)" }}
    >
      Save
    </button>
  );
}

// ─── Price badge ──────────────────────────────────────────────────────────────

function PriceBadge({ price }: { price: string }): ReactElement {
  return (
    <span
      className="absolute bottom-2 left-2 rounded-full bg-white px-2.5 py-1 text-[8px] font-bold text-stone-700"
      style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.14)" }}
    >
      {price}
    </span>
  );
}

// ─── Idea tag ─────────────────────────────────────────────────────────────────

function IdeaBadge(): ReactElement {
  return (
    <span className="absolute bottom-2 left-2 flex items-center gap-1 rounded-full bg-stone-900/72 px-2.5 py-1">
      <span className="inline-block h-1.5 w-1.5 rounded-full bg-white opacity-80" />
      <span className="text-[7.5px] font-semibold text-white">Idea Pin</span>
    </span>
  );
}

// ─── Product source line ──────────────────────────────────────────────────────

function SourceLine({ source }: { source: string }): ReactElement {
  return (
    <div className="mt-0.5 flex items-center gap-1">
      <span className="h-2 w-2 rounded-full bg-[#4a7048]" />
      <span className="text-[7px] font-medium tracking-[0.10em] text-stone-400 uppercase">{source}</span>
    </div>
  );
}

// ─── Pin data types ───────────────────────────────────────────────────────────

type ProductPin = {
  kind: "product";
  name: string;
  price: string;
  tagline: string;
  source: string;
  bg: string;
  imgH: number;
  Render: () => ReactElement;
};

type IdeaPin = {
  kind: "idea";
  title: string;
  sub: string;
  imgH: number;
  Render: () => ReactElement;
};

type PinData = ProductPin | IdeaPin;

// ─── Single pin card ──────────────────────────────────────────────────────────

function PinCard({ pin }: { pin: PinData }): ReactElement {
  const isProduct = pin.kind === "product";

  return (
    <article
      className="relative flex flex-col overflow-hidden rounded-2xl bg-white"
      style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.09), 0 0 0 0.5px rgba(0,0,0,0.05)" }}
    >
      {/* Image zone */}
      <div
        className={`relative flex w-full items-center justify-center overflow-hidden${isProduct ? " " + (pin as ProductPin).bg : ""}`}
        style={{ height: `${pin.imgH}px` }}
      >
        {/* Studio bg for product: soft radial gradient */}
        {isProduct && (
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.65) 0%, transparent 75%)"
          }} />
        )}
        <div className="relative flex h-full w-full items-center justify-center px-3 py-2">
          <pin.Render />
        </div>
        <SaveBadge />
        {isProduct && <PriceBadge price={(pin as ProductPin).price} />}
        {!isProduct && <IdeaBadge />}
      </div>

      {/* Caption */}
      <div className="px-2.5 pb-2.5 pt-1.5">
        <p className="truncate text-[10px] font-semibold leading-snug text-stone-800">
          {pin.kind === "product" ? pin.name : pin.title}
        </p>
        <p className="mt-0.5 truncate text-[8px] leading-tight text-stone-400">
          {pin.kind === "product" ? pin.tagline : pin.sub}
        </p>
        {isProduct && <SourceLine source={(pin as ProductPin).source} />}
      </div>
    </article>
  );
}

// ─── Column data ──────────────────────────────────────────────────────────────

const colA: PinData[] = [
  {
    kind: "product",
    name: "Rosehip Facial Oil",
    price: "$38",
    tagline: "Regenerating · Vitamin A & C",
    source: "FLORA",
    bg: "bg-[#fef8ef]",
    imgH: 148,
    Render: RosehipOilBottle,
  },
  {
    kind: "idea",
    title: "AM / PM Routine",
    sub: "Your 5-step clean ritual",
    imgH: 120,
    Render: IdeaPinAMPM,
  },
  {
    kind: "product",
    name: "Gentle Cream Cleanser",
    price: "$26",
    tagline: "Sensitive skin · Fragrance-free",
    source: "FLORA",
    bg: "bg-[#edf8f2]",
    imgH: 138,
    Render: CleanseTubeBottle,
  },
];

const colB: PinData[] = [
  {
    kind: "product",
    name: "Barrier Repair Serum",
    price: "$44",
    tagline: "Ceramide · Niacinamide",
    source: "FLORA",
    bg: "bg-[#f0f5fb]",
    imgH: 156,
    Render: BarrierSerumBottle,
  },
  {
    kind: "idea",
    title: "Glow Ingredients",
    sub: "Hero actives for radiance",
    imgH: 128,
    Render: IdeaPinGlow,
  },
  {
    kind: "product",
    name: "Hydrating Toner Mist",
    price: "$32",
    tagline: "AHA · Rose Water · pH 5.5",
    source: "FLORA",
    bg: "bg-[#eef7fd]",
    imgH: 128,
    Render: TonerMistBottle,
  },
  {
    kind: "product",
    name: "Clay Mask",
    price: "$29",
    tagline: "Kaolin · Bentonite · Detox",
    source: "FLORA",
    bg: "bg-[#faf3ec]",
    imgH: 96,
    Render: ClayMaskJar,
  },
];

// ─── Filter tab ───────────────────────────────────────────────────────────────

function FilterTab({ label, active }: { label: string; active: boolean }): ReactElement {
  return (
    <span
      className={`shrink-0 select-none rounded-full px-3 py-[5px] text-[9px] font-semibold leading-none ${
        active
          ? "bg-stone-800 text-white"
          : "bg-stone-100 text-stone-500"
      }`}
    >
      {label}
    </span>
  );
}

// ─── Bottom nav item ──────────────────────────────────────────────────────────

function NavItem({ icon, label, active }: { icon: ReactElement; label: string; active: boolean }): ReactElement {
  return (
    <div className={`flex flex-col items-center gap-0.5 ${active ? "text-[#e60023]" : "text-stone-400"}`}>
      {icon}
      <span className="text-[7px] font-medium leading-none">{label}</span>
    </div>
  );
}

// ─── Root export ──────────────────────────────────────────────────────────────

export default function SkincarePinterest(): ReactElement {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f7f5f2] font-sans">

      {/* ── Status bar simulation ── */}
      <div className="flex shrink-0 items-center justify-between bg-white px-4 pt-2 pb-1">
        <span className="text-[9px] font-semibold text-stone-700">9:41</span>
        <div className="flex items-center gap-1.5">
          {/* Signal bars */}
          <svg viewBox="0 0 18 10" className="h-2 w-4" fill="#555" aria-hidden="true">
            <rect x="0" y="6" width="3" height="4" rx="0.5" />
            <rect x="5" y="4" width="3" height="6" rx="0.5" />
            <rect x="10" y="2" width="3" height="8" rx="0.5" />
            <rect x="15" y="0" width="3" height="10" rx="0.5" />
          </svg>
          {/* WiFi */}
          <svg viewBox="0 0 16 12" className="h-2 w-3.5" fill="none" aria-hidden="true">
            <path d="M8 10 L8 10" stroke="#555" strokeWidth="2" strokeLinecap="round" />
            <path d="M5 7.5 Q8 5.5 11 7.5" stroke="#555" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M2.5 5 Q8 1.5 13.5 5" stroke="#555" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          </svg>
          {/* Battery */}
          <svg viewBox="0 0 22 11" className="h-2 w-5" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="18" height="10" rx="2" stroke="#555" strokeWidth="1" />
            <rect x="19" y="3" width="2.5" height="5" rx="1" fill="#555" opacity="0.5" />
            <rect x="1.5" y="1.5" width="14" height="8" rx="1.5" fill="#555" opacity="0.7" />
          </svg>
        </div>
      </div>

      {/* ── Header (frosted) ── */}
      <header
        className="z-10 shrink-0 bg-white/96 px-3 pb-2.5 pt-1"
        style={{ backdropFilter: "blur(12px)", boxShadow: "0 1px 0 rgba(0,0,0,0.07)" }}
      >
        {/* Brand row */}
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* FLORA logo mark */}
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #5a8858 0%, #3a6636 100%)" }}
            >
              <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M10 3 C7 6 5 10 7 14 C9 18 13 18 15 14 C17 10 15 6 10 3Z" fill="white" opacity="0.90" />
                <path d="M10 3 L10 16" stroke="#3a6636" strokeWidth="1" strokeOpacity="0.40" />
              </svg>
            </div>
            <span
              className="text-[14px] font-bold tracking-[0.20em] text-stone-700"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              FLORA
            </span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[7px] font-semibold tracking-wide text-emerald-700">
              clean beauty
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <Bell size={15} strokeWidth={1.7} className="text-stone-400" />
            <div
              className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full ring-2 ring-rose-200"
              style={{ background: "linear-gradient(135deg, #f5c8c8, #e8a0a0)" }}
            >
              <User size={13} strokeWidth={1.8} className="text-rose-700" />
            </div>
          </div>
        </div>

        {/* Search pill */}
        <div
          className="flex items-center gap-2.5 rounded-full bg-stone-100 px-3.5 py-2.5"
          style={{ boxShadow: "inset 0 1px 2px rgba(0,0,0,0.06)" }}
        >
          <Search size={11} strokeWidth={2.5} className="shrink-0 text-stone-400" />
          <span className="flex-1 text-[10px] text-stone-400">Search clean skincare</span>
          {/* Camera / lens icon */}
          <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 shrink-0 text-stone-400" aria-hidden="true">
            <rect x="1.5" y="5" width="17" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="10" cy="11.5" r="3.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 5 L8.5 2 L11.5 2 L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <circle cx="16" cy="8" r="1" fill="currentColor" />
          </svg>
        </div>

        {/* Filter tabs */}
        <div className="mt-2.5 flex items-center gap-1.5 overflow-x-hidden">
          <FilterTab label="For you" active={true} />
          <FilterTab label="Skincare" active={false} />
          <FilterTab label="Routines" active={false} />
          <FilterTab label="Ingredients" active={false} />
          <FilterTab label="Trending" active={false} />
        </div>
      </header>

      {/* ── Masonry feed ── */}
      <div className="min-h-0 flex-1 overflow-hidden px-2 pt-2.5 pb-1">
        <div className="flex gap-2">
          {/* Column A */}
          <div className="flex flex-1 flex-col gap-2">
            {colA.map((pin) => (
              <PinCard key={pin.kind === "product" ? pin.name : pin.title} pin={pin} />
            ))}
          </div>
          {/* Column B — staggered top */}
          <div className="flex flex-1 flex-col gap-2 pt-8">
            {colB.map((pin) => (
              <PinCard key={pin.kind === "product" ? pin.name : pin.title} pin={pin} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom nav ── */}
      <nav
        className="shrink-0 border-t border-stone-100 bg-white/96 px-3 pb-3 pt-2"
        style={{ backdropFilter: "blur(12px)" }}
      >
        <div className="flex items-center justify-around">
          <NavItem
            icon={<Home size={18} strokeWidth={1.8} />}
            label="Home"
            active={true}
          />
          <NavItem
            icon={<Search size={18} strokeWidth={1.8} />}
            label="Search"
            active={false}
          />
          <NavItem
            icon={
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e60023]"
                style={{ boxShadow: "0 2px 8px rgba(230,0,35,0.35)" }}
              >
                <Plus size={16} strokeWidth={2.8} className="text-white" />
              </span>
            }
            label="Create"
            active={false}
          />
          <NavItem
            icon={<Bookmark size={18} strokeWidth={1.8} />}
            label="Saved"
            active={false}
          />
          <NavItem
            icon={<User size={18} strokeWidth={1.8} />}
            label="Profile"
            active={false}
          />
        </div>
      </nav>

    </div>
  );
}
