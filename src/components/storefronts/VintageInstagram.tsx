import type { ReactElement } from "react";

/* ─────────────────────────────────────────────────────────
   VintageInstagram — 320 × 680 phone canvas
   Pure stateless, no hooks, no props, no "use client"
   All sub-components at MODULE scope
───────────────────────────────────────────────────────── */

/* ═══════════════════════════════════════════════════════
   AVATAR — warm-lit portrait silhouette (reads like a
   real profile photo crop, not an icon)
═══════════════════════════════════════════════════════ */
function AvatarPortrait(): ReactElement {
  return (
    <svg viewBox="0 0 72 72" width="72" height="72" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="av-bg" cx="48%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#f5d9a8"/>
          <stop offset="60%" stopColor="#e8b87a"/>
          <stop offset="100%" stopColor="#c4884a"/>
        </radialGradient>
        <radialGradient id="av-skin" cx="42%" cy="36%" r="58%">
          <stop offset="0%" stopColor="#f0c88a"/>
          <stop offset="70%" stopColor="#d4934e"/>
          <stop offset="100%" stopColor="#b87030"/>
        </radialGradient>
        <radialGradient id="av-torso" cx="50%" cy="20%" r="70%">
          <stop offset="0%" stopColor="#5c3820"/>
          <stop offset="100%" stopColor="#2a1408"/>
        </radialGradient>
        <clipPath id="av-clip">
          <circle cx="36" cy="36" r="36"/>
        </clipPath>
      </defs>
      {/* background warm wash */}
      <circle cx="36" cy="36" r="36" fill="url(#av-bg)"/>
      {/* bokeh-style warm blob behind subject */}
      <ellipse cx="36" cy="60" rx="28" ry="18" fill="#c07838" opacity="0.35"/>
      {/* torso / shirt */}
      <ellipse cx="36" cy="74" rx="22" ry="16" fill="url(#av-torso)" clipPath="url(#av-clip)"/>
      {/* collar detail */}
      <path d="M28 64 Q36 70 44 64 L44 72 Q36 77 28 72Z" fill="#3e2010" clipPath="url(#av-clip)"/>
      <path d="M36 65 L36 74" stroke="#e0c080" strokeWidth="1.5" strokeLinecap="round" clipPath="url(#av-clip)"/>
      {/* neck */}
      <rect x="31" y="52" width="10" height="12" rx="5" fill="url(#av-skin)" clipPath="url(#av-clip)"/>
      {/* head */}
      <ellipse cx="36" cy="38" rx="14" ry="16" fill="url(#av-skin)"/>
      {/* facial highlight — natural skin sheen */}
      <ellipse cx="33" cy="33" rx="6" ry="4" fill="rgba(255,230,180,0.40)"/>
      {/* shadow under cheeks */}
      <ellipse cx="36" cy="46" rx="10" ry="4" fill="rgba(160,80,20,0.20)"/>
      {/* eyes */}
      <ellipse cx="30" cy="37" rx="2.8" ry="2" fill="#2a1a0a"/>
      <ellipse cx="42" cy="37" rx="2.8" ry="2" fill="#2a1a0a"/>
      <ellipse cx="29.4" cy="36.4" rx="1" ry="0.8" fill="rgba(255,255,255,0.70)"/>
      <ellipse cx="41.4" cy="36.4" rx="1" ry="0.8" fill="rgba(255,255,255,0.70)"/>
      {/* eyebrows */}
      <path d="M27 34 Q30 32.5 33 33.5" fill="none" stroke="#3a2010" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M39 33.5 Q42 32.5 45 34" fill="none" stroke="#3a2010" strokeWidth="1.4" strokeLinecap="round"/>
      {/* nose */}
      <path d="M36 38 Q34 42 35 44 Q36 45 37 44 Q38 42 36 38" fill="rgba(160,80,20,0.30)"/>
      {/* lips */}
      <path d="M32 47 Q36 49.5 40 47" fill="none" stroke="#c07040" strokeWidth="1.8" strokeLinecap="round"/>
      {/* hair — vintage curls */}
      <path d="M22 35 Q20 22 28 18 Q36 14 44 18 Q52 22 50 35" fill="#1e0e04"/>
      <path d="M22 35 Q21 25 28 20 Q36 16 44 20 Q51 25 50 35" fill="#2e1608"/>
      {/* hair texture streaks */}
      <path d="M26 24 Q30 18 36 17" fill="none" stroke="#4a2810" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M46 24 Q42 18 36 17" fill="none" stroke="#4a2810" strokeWidth="1.8" strokeLinecap="round"/>
      {/* warm rim light on hair */}
      <path d="M24 30 Q22 22 30 17" fill="none" stroke="rgba(220,150,60,0.28)" strokeWidth="3" strokeLinecap="round"/>
      {/* ear */}
      <ellipse cx="22" cy="39" rx="3" ry="4.5" fill="#d4934e"/>
      <ellipse cx="50" cy="39" rx="3" ry="4.5" fill="#d4934e"/>
      {/* earring */}
      <circle cx="22" cy="42" r="1.8" fill="#c8a028"/>
      <circle cx="50" cy="42" r="1.8" fill="#c8a028"/>
      {/* vignette edge */}
      <circle cx="36" cy="36" r="36" fill="none" stroke="rgba(100,40,0,0.12)" strokeWidth="8"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   STAT COLUMN
═══════════════════════════════════════════════════════ */
function StatCol({ value, label }: { value: string; label: string }): ReactElement {
  return (
    <div className="flex flex-col items-center" style={{ gap: 1 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: "#111", letterSpacing: "-0.3px", lineHeight: 1 }}>{value}</span>
      <span style={{ fontSize: 10, color: "#737373", lineHeight: 1 }}>{label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   STORY HIGHLIGHTS
═══════════════════════════════════════════════════════ */
interface Highlight { label: string; bg1: string; bg2: string; bg3: string; iconEl: ReactElement }

const HIGHLIGHTS: Highlight[] = [
  {
    label: "New In", bg1: "#f59e0b", bg2: "#f97316", bg3: "#ef4444",
    iconEl: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 5v14M5 12h14"/>
      </svg>
    ),
  },
  {
    label: "Watches", bg1: "#d97706", bg2: "#b45309", bg3: "#78350f",
    iconEl: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="6"/>
        <path d="M9 3h6M9 21h6"/>
        <path d="M12 8v4l2.5 2.5"/>
      </svg>
    ),
  },
  {
    label: "Belts", bg1: "#c2410c", bg2: "#9a3412", bg3: "#7c2d12",
    iconEl: (
      <svg viewBox="0 0 28 12" width="26" height="11" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
        <rect x="0.9" y="3.5" width="26" height="5" rx="2.5"/>
        <rect x="12" y="1.5" width="4" height="9" rx="1.8"/>
      </svg>
    ),
  },
  {
    label: "Scarves", bg1: "#db2777", bg2: "#be185d", bg3: "#9d174d",
    iconEl: (
      <svg viewBox="0 0 26 22" width="24" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M2 5 Q8 1 14 8 Q20 15 24 10"/>
        <path d="M4 13 Q10 9 16 16 Q22 23 26 18"/>
      </svg>
    ),
  },
  {
    label: "Sale", bg1: "#dc2626", bg2: "#b91c1c", bg3: "#991b1b",
    iconEl: (
      <svg viewBox="0 0 20 22" width="18" height="20" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 2h10l6 9-6 9H2z"/>
        <circle cx="7" cy="7" r="1.8" fill="white" stroke="none"/>
        <line x1="6" y1="14" x2="12" y2="8"/>
      </svg>
    ),
  },
];

function HighlightBubble({ h }: { h: Highlight }): ReactElement {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flexShrink: 0 }}>
      {/* gradient ring */}
      <div style={{
        width: 58, height: 58, borderRadius: "50%",
        background: `linear-gradient(135deg, ${h.bg1}, ${h.bg2}, ${h.bg3})`,
        padding: 2.5, boxSizing: "border-box",
      }}>
        <div style={{
          width: "100%", height: "100%", borderRadius: "50%",
          background: "white", padding: 2, boxSizing: "border-box",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: `linear-gradient(145deg, ${h.bg1}cc, ${h.bg3}cc)`,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {h.iconEl}
          </div>
        </div>
      </div>
      <span style={{ fontSize: 9, color: "#262626", fontWeight: 400, lineHeight: 1 }}>{h.label}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   PRODUCT TILES — each drawn as layered gradients +
   inline SVG for a photographic feel
═══════════════════════════════════════════════════════ */

/* SUNGLASSES — tortoiseshell aviators on warm linen */
function TileSunglasses(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="sg-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#f5e8c8"/>
          <stop offset="100%" stopColor="#d4b878"/>
        </radialGradient>
        <linearGradient id="sg-lens-l" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7a3a08" stopOpacity="0.9"/>
          <stop offset="50%" stopColor="#a05a18"/>
          <stop offset="100%" stopColor="#5a2808" stopOpacity="0.95"/>
        </linearGradient>
        <radialGradient id="sg-sheen" cx="30%" cy="25%" r="55%">
          <stop offset="0%" stopColor="rgba(255,210,140,0.55)"/>
          <stop offset="100%" stopColor="rgba(255,200,120,0)"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#sg-bg)"/>
      {/* subtle fabric texture lines */}
      {[10,18,26,34,42,50,58,66,74,82,90].map((y,i) => (
        <line key={i} x1="0" y1={y} x2="100" y2={y} stroke="rgba(180,140,70,0.08)" strokeWidth="1.5"/>
      ))}
      {/* drop shadow */}
      <ellipse cx="50" cy="76" rx="30" ry="4" fill="rgba(80,40,0,0.18)"/>
      {/* left arm */}
      <path d="M4 49 L19 49" stroke="#2a1204" strokeWidth="5.5" strokeLinecap="round"/>
      {/* right arm */}
      <path d="M96 49 L81 49" stroke="#2a1204" strokeWidth="5.5" strokeLinecap="round"/>
      {/* bridge */}
      <path d="M38 47 Q50 40 62 47" fill="none" stroke="#2a1204" strokeWidth="4.5" strokeLinecap="round"/>
      {/* left frame outer */}
      <rect x="8" y="31" width="32" height="27" rx="10" fill="#2a1204"/>
      {/* left lens */}
      <rect x="11" y="34" width="26" height="21" rx="8" fill="url(#sg-lens-l)"/>
      {/* left lens sheen */}
      <ellipse cx="21" cy="40" rx="8" ry="5" fill="url(#sg-sheen)"/>
      {/* tortoiseshell flecks left */}
      <circle cx="28" cy="41" r="2.5" fill="rgba(200,100,20,0.35)"/>
      <circle cx="32" cy="46" r="1.8" fill="rgba(180,80,10,0.28)"/>
      <circle cx="15" cy="45" r="1.5" fill="rgba(200,120,30,0.30)"/>
      {/* right frame outer */}
      <rect x="60" y="31" width="32" height="27" rx="10" fill="#2a1204"/>
      {/* right lens */}
      <rect x="63" y="34" width="26" height="21" rx="8" fill="url(#sg-lens-l)"/>
      {/* right lens sheen */}
      <ellipse cx="71" cy="40" rx="8" ry="5" fill="url(#sg-sheen)"/>
      {/* tortoiseshell flecks right */}
      <circle cx="78" cy="41" r="2.5" fill="rgba(200,100,20,0.35)"/>
      <circle cx="82" cy="46" r="1.8" fill="rgba(180,80,10,0.28)"/>
      <circle cx="65" cy="45" r="1.5" fill="rgba(200,120,30,0.30)"/>
      {/* nose pads */}
      <ellipse cx="39" cy="50" rx="2.5" ry="2" fill="#4a2008" opacity="0.8"/>
      <ellipse cx="61" cy="50" rx="2.5" ry="2" fill="#4a2008" opacity="0.8"/>
    </svg>
  );
}

/* LEATHER BELT — rich cognac leather, gold buckle */
function TileBelt(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="belt-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#e8d5b0"/>
          <stop offset="100%" stopColor="#c4a870"/>
        </radialGradient>
        <linearGradient id="belt-strap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#c8955a"/>
          <stop offset="20%" stopColor="#b07840"/>
          <stop offset="50%" stopColor="#9a6230"/>
          <stop offset="80%" stopColor="#b07840"/>
          <stop offset="100%" stopColor="#8a5220"/>
        </linearGradient>
        <linearGradient id="belt-buckle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d060"/>
          <stop offset="40%" stopColor="#d4a020"/>
          <stop offset="100%" stopColor="#9a7010"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#belt-bg)"/>
      {/* surface texture */}
      {[20,30,40,50,60,70,80].map((y,i) => (
        <line key={i} x1="0" y1={y} x2="100" y2={y} stroke="rgba(160,110,50,0.06)" strokeWidth="1"/>
      ))}
      {/* shadow */}
      <ellipse cx="50" cy="72" rx="38" ry="5" fill="rgba(60,30,0,0.20)"/>
      {/* strap */}
      <rect x="3" y="38" width="94" height="24" rx="5" fill="#2a1208"/>
      <rect x="4" y="39" width="92" height="22" rx="4.5" fill="url(#belt-strap)"/>
      {/* strap edge highlights */}
      <rect x="4" y="39.5" width="92" height="2.5" rx="2" fill="rgba(220,170,100,0.40)"/>
      <rect x="4" y="58" width="92" height="2.5" rx="2" fill="rgba(60,30,0,0.25)"/>
      {/* top stitch line */}
      {[5,11,17,23,29,63,69,75,81,87].map((x,i) => (
        <line key={`t${i}`} x1={x} y1="43" x2={x+5} y2="43" stroke="rgba(220,170,80,0.65)" strokeWidth="1.3" strokeLinecap="round"/>
      ))}
      {/* bottom stitch line */}
      {[5,11,17,23,29,63,69,75,81,87].map((x,i) => (
        <line key={`b${i}`} x1={x} y1="57" x2={x+5} y2="57" stroke="rgba(220,170,80,0.65)" strokeWidth="1.3" strokeLinecap="round"/>
      ))}
      {/* buckle outer body */}
      <rect x="35" y="28" width="30" height="44" rx="5" fill="#3a2008"/>
      <rect x="36.5" y="29.5" width="27" height="41" rx="4" fill="url(#belt-buckle)"/>
      {/* buckle top bar */}
      <rect x="36.5" y="29.5" width="27" height="5" rx="2.5" fill="#f5e080"/>
      {/* buckle centre bar */}
      <rect x="49" y="28" width="4.5" height="44" rx="2.2" fill="#2a1208"/>
      {/* prong */}
      <path d="M51.2 32 L51.2 52 L45 58" fill="none" stroke="#1a0a02" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      {/* buckle face glare */}
      <ellipse cx="47" cy="34" rx="6" ry="3" fill="rgba(255,245,160,0.45)"/>
      {/* punch holes */}
      {[66,73,80,87].map((x,i) => (
        <ellipse key={i} cx={x} cy="50" rx="3.2" ry="3.2" fill="#7a4818"/>
      ))}
    </svg>
  );
}

/* VINTAGE WATCH — cream dial, gold case, dark strap */
function TileWatch(): ReactElement {
  const ticks = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const inner = i % 3 === 0 ? 12 : 16;
    return {
      x1: 50 + inner * Math.sin(angle),
      y1: 50 - inner * Math.cos(angle),
      x2: 50 + 21 * Math.sin(angle),
      y2: 50 - 21 * Math.cos(angle),
      thick: i % 3 === 0,
    };
  });
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="watch-bg" cx="50%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#ece0c8"/>
          <stop offset="100%" stopColor="#c8a870"/>
        </radialGradient>
        <linearGradient id="watch-strap" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1a0a02"/>
          <stop offset="10%" stopColor="#3a1c08"/>
          <stop offset="50%" stopColor="#2e1408"/>
          <stop offset="90%" stopColor="#3a1c08"/>
          <stop offset="100%" stopColor="#1a0a02"/>
        </linearGradient>
        <radialGradient id="watch-case" cx="38%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#f0d870"/>
          <stop offset="50%" stopColor="#c8a030"/>
          <stop offset="100%" stopColor="#9a7010"/>
        </radialGradient>
        <radialGradient id="watch-dial" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#faf6ea"/>
          <stop offset="70%" stopColor="#f0e8cc"/>
          <stop offset="100%" stopColor="#e0d0a8"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#watch-bg)"/>
      {/* shadow */}
      <ellipse cx="50" cy="80" rx="22" ry="4.5" fill="rgba(60,30,0,0.22)"/>
      {/* strap top */}
      <rect x="37" y="3" width="26" height="24" rx="6" fill="url(#watch-strap)"/>
      {/* strap top stitch */}
      {[6,10,14,18,22].map((y,i) => (
        <line key={i} x1="40" y1={y} x2="60" y2={y} stroke="rgba(120,80,30,0.50)" strokeWidth="0.9" strokeDasharray="3,3"/>
      ))}
      {/* strap bottom */}
      <rect x="37" y="73" width="26" height="24" rx="6" fill="url(#watch-strap)"/>
      {/* strap holes */}
      {[77,82,87,92].map((y,i) => (
        <ellipse key={i} cx="50" cy={y} rx="2.8" ry="2.2" fill="#5a3010"/>
      ))}
      {/* strap bottom stitch */}
      {[76,80,84,88,92].map((y,i) => (
        <line key={i} x1="40" y1={y} x2="60" y2={y} stroke="rgba(120,80,30,0.50)" strokeWidth="0.9" strokeDasharray="3,3"/>
      ))}
      {/* case outer */}
      <circle cx="50" cy="50" r="27" fill="#8a6010"/>
      {/* case mid ring */}
      <circle cx="50" cy="50" r="25.5" fill="url(#watch-case)"/>
      {/* dial bezel */}
      <circle cx="50" cy="50" r="23" fill="#2a1808"/>
      {/* dial face */}
      <circle cx="50" cy="50" r="21" fill="url(#watch-dial)"/>
      {/* hour ticks */}
      {ticks.map((t, i) => (
        <line key={i}
          x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2}
          stroke="#4a3010"
          strokeWidth={t.thick ? 2.5 : 1.2}
          strokeLinecap="round"
        />
      ))}
      {/* subdial at 6 */}
      <circle cx="50" cy="64" r="4.5" fill="none" stroke="#8a7040" strokeWidth="0.8"/>
      <line x1="50" y1="62" x2="50" y2="65.5" stroke="#4a3010" strokeWidth="0.9" strokeLinecap="round"/>
      {/* hour hand */}
      <line x1="50" y1="50" x2="50" y2="33" stroke="#1a0c02" strokeWidth="3" strokeLinecap="round"/>
      {/* minute hand */}
      <line x1="50" y1="50" x2="62" y2="56" stroke="#1a0c02" strokeWidth="2" strokeLinecap="round"/>
      {/* seconds hand */}
      <line x1="50" y1="50" x2="43" y2="63" stroke="#c03020" strokeWidth="1" strokeLinecap="round"/>
      {/* centre jewel */}
      <circle cx="50" cy="50" r="3" fill="#1a0c02"/>
      <circle cx="50" cy="50" r="1.5" fill="#e0b030"/>
      {/* crown */}
      <rect x="74" y="46.5" width="7" height="7" rx="3" fill="url(#watch-case)" stroke="#8a6010" strokeWidth="1.2"/>
      {/* dial glare */}
      <ellipse cx="41" cy="40" rx="6" ry="3.5" fill="rgba(255,248,220,0.55)"/>
    </svg>
  );
}

/* SILK SCARF — draped ivory/red paisley on dusty blue */
function TileScarf(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="scarf-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8898b0"/>
          <stop offset="100%" stopColor="#5c6e88"/>
        </linearGradient>
        <linearGradient id="scarf-fold1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8f0dc"/>
          <stop offset="40%" stopColor="#f0e4c4"/>
          <stop offset="100%" stopColor="#d8c8a0"/>
        </linearGradient>
        <linearGradient id="scarf-fold2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f0e4c4"/>
          <stop offset="100%" stopColor="#c8b888"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#scarf-bg)"/>
      {/* surface noise dots */}
      {[15,30,45,60,75,90].map((x,xi) =>
        [20,40,60,80].map((y,yi) => (
          <circle key={`${xi}-${yi}`} cx={x+xi*0.5} cy={y+yi*0.5} r="0.5" fill="rgba(255,255,255,0.07)"/>
        ))
      )}
      {/* shadow on surface */}
      <ellipse cx="50" cy="80" rx="35" ry="5" fill="rgba(30,20,10,0.25)"/>
      {/* fold 1 — main drape */}
      <path d="M5 22 Q25 8 55 24 Q75 36 95 18" fill="none" stroke="#2a1808" strokeWidth="22" strokeLinecap="round"/>
      <path d="M5 22 Q25 8 55 24 Q75 36 95 18" fill="none" stroke="url(#scarf-fold1)" strokeWidth="20" strokeLinecap="round"/>
      {/* paisley motifs on fold 1 */}
      <ellipse cx="30" cy="21" rx="6" ry="3.5" fill="rgba(180,40,20,0.45)" transform="rotate(-15,30,21)"/>
      <ellipse cx="52" cy="25" rx="5" ry="3" fill="rgba(180,40,20,0.40)" transform="rotate(10,52,25)"/>
      <ellipse cx="72" cy="24" rx="5.5" ry="3" fill="rgba(180,40,20,0.38)" transform="rotate(-8,72,24)"/>
      {/* fold 1 sheen */}
      <path d="M8 20 Q28 7 58 22" fill="none" stroke="rgba(255,250,230,0.38)" strokeWidth="4" strokeLinecap="round"/>
      {/* fold 2 */}
      <path d="M8 44 Q30 30 62 46 Q80 56 94 44" fill="none" stroke="#1e1006" strokeWidth="18" strokeLinecap="round"/>
      <path d="M8 44 Q30 30 62 46 Q80 56 94 44" fill="none" stroke="url(#scarf-fold2)" strokeWidth="16" strokeLinecap="round"/>
      {/* stripe on fold 2 */}
      <path d="M10 43 Q32 30 64 45 Q82 55 96 43" fill="none" stroke="rgba(180,40,20,0.50)" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 47 Q32 34 64 49 Q82 59 96 47" fill="none" stroke="rgba(180,40,20,0.30)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* tail */}
      <path d="M60 47 Q68 68 60 86 Q56 93 50 90 Q44 85 48 70 Q55 56 53 47Z" fill="#f0e4c4"/>
      <path d="M57 49 Q63 68 57 84" fill="none" stroke="rgba(180,40,20,0.55)" strokeWidth="2" strokeLinecap="round"/>
      {/* tail sheen */}
      <path d="M56 50 Q60 65 56 82" fill="none" stroke="rgba(255,248,220,0.35)" strokeWidth="3" strokeLinecap="round"/>
      {/* fringe */}
      {[45,48,51,54,57,60,63].map((x,i) => (
        <line key={i} x1={x} y1="89" x2={x-1} y2="98" stroke="#c8a870" strokeWidth="1.6" strokeLinecap="round"/>
      ))}
    </svg>
  );
}

/* SIGNET RING — gold band, lapis stone */
function TileRing(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="ring-bg" cx="50%" cy="60%" r="70%">
          <stop offset="0%" stopColor="#f8eedc"/>
          <stop offset="100%" stopColor="#e0cca0"/>
        </radialGradient>
        <linearGradient id="ring-band" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8a6008"/>
          <stop offset="15%" stopColor="#d4a020"/>
          <stop offset="40%" stopColor="#f0c840"/>
          <stop offset="60%" stopColor="#e8b830"/>
          <stop offset="85%" stopColor="#c89018"/>
          <stop offset="100%" stopColor="#9a7010"/>
        </linearGradient>
        <linearGradient id="ring-bezel" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e8b828"/>
          <stop offset="50%" stopColor="#c89018"/>
          <stop offset="100%" stopColor="#9a7008"/>
        </linearGradient>
        <radialGradient id="ring-stone" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#4060b8"/>
          <stop offset="60%" stopColor="#1a3890"/>
          <stop offset="100%" stopColor="#0e2068"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#ring-bg)"/>
      {/* subtle linen lines */}
      {[25,35,45,55,65,75].map((y,i) => (
        <line key={i} x1="0" y1={y} x2="100" y2={y} stroke="rgba(180,140,70,0.07)" strokeWidth="1.5"/>
      ))}
      {/* drop shadow */}
      <ellipse cx="50" cy="82" rx="22" ry="4" fill="rgba(60,40,0,0.20)"/>
      {/* band bottom ellipse */}
      <ellipse cx="50" cy="78" rx="23" ry="8.5" fill="#7a5008"/>
      {/* band body */}
      <rect x="27" y="46" width="46" height="32" fill="#8a6008"/>
      <rect x="28" y="47" width="44" height="30" fill="url(#ring-band)"/>
      {/* band top ellipse */}
      <ellipse cx="50" cy="46" rx="23" ry="8.5" fill="#e0c030"/>
      {/* band edge highlight */}
      <ellipse cx="50" cy="44" rx="22" ry="7.5" fill="rgba(255,240,140,0.35)"/>
      {/* band vertical sheen */}
      <rect x="45" y="46" width="10" height="32" fill="rgba(255,230,100,0.18)" rx="5"/>
      {/* side inner shadow */}
      <rect x="27" y="47" width="6" height="29" fill="rgba(0,0,0,0.22)" rx="3"/>
      <rect x="67" y="47" width="6" height="29" fill="rgba(0,0,0,0.16)" rx="3"/>
      {/* bezel base */}
      <ellipse cx="50" cy="40" rx="21" ry="12.5" fill="#7a5008"/>
      {/* bezel face */}
      <ellipse cx="50" cy="38.5" rx="19.5" ry="11" fill="url(#ring-bezel)"/>
      {/* stone setting */}
      <rect x="34" y="28" width="32" height="21" rx="3" fill="#1a3890"/>
      <rect x="35.5" y="29" width="29" height="19" rx="2.5" fill="url(#ring-stone)"/>
      {/* stone milky veins (lapis look) */}
      <path d="M37 32 Q45 36 55 30 Q60 28 64 33" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="2" strokeLinecap="round"/>
      <path d="M40 42 Q50 38 60 43" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* gold pyrite flecks in stone */}
      <circle cx="42" cy="33" r="1" fill="rgba(220,180,60,0.55)"/>
      <circle cx="57" cy="38" r="0.8" fill="rgba(220,180,60,0.50)"/>
      <circle cx="48" cy="41" r="0.9" fill="rgba(220,180,60,0.45)"/>
      {/* stone glare */}
      <ellipse cx="42" cy="31" rx="5" ry="3" fill="rgba(180,210,255,0.42)"/>
      {/* bezel glare */}
      <ellipse cx="44" cy="36" rx="7" ry="2.5" fill="rgba(255,245,160,0.38)"/>
    </svg>
  );
}

/* LEATHER SATCHEL — dark cognac, brass clasp */
function TileSatchel(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="satch-bg" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="#d4bfa0"/>
          <stop offset="100%" stopColor="#b09870"/>
        </radialGradient>
        <linearGradient id="satch-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5c2e10"/>
          <stop offset="40%" stopColor="#3e1c08"/>
          <stop offset="100%" stopColor="#2a1204"/>
        </linearGradient>
        <linearGradient id="satch-flap" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a2210"/>
          <stop offset="100%" stopColor="#2e1408"/>
        </linearGradient>
        <linearGradient id="satch-clasp" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d060"/>
          <stop offset="60%" stopColor="#c8a020"/>
          <stop offset="100%" stopColor="#9a7810"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#satch-bg)"/>
      {/* shadow */}
      <ellipse cx="50" cy="90" rx="38" ry="5.5" fill="rgba(40,20,0,0.28)"/>
      {/* shoulder strap */}
      <path d="M28 16 Q50 3 72 16" fill="none" stroke="#1a0c02" strokeWidth="9" strokeLinecap="round"/>
      <path d="M28 16 Q50 3 72 16" fill="none" stroke="#3a1c08" strokeWidth="6.5" strokeLinecap="round"/>
      <path d="M28 16 Q50 3 72 16" fill="none" stroke="rgba(100,60,20,0.35)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* bag body */}
      <rect x="12" y="16" width="76" height="70" rx="8" fill="#1a0c02"/>
      <rect x="13.5" y="17.5" width="73" height="67" rx="7" fill="url(#satch-body)"/>
      {/* body surface grain lines */}
      {[25,35,45,55,65,75].map((y,i) => (
        <line key={i} x1="14" y1={y} x2="86" y2={y} stroke="rgba(80,40,10,0.12)" strokeWidth="0.8"/>
      ))}
      {/* flap */}
      <path d="M13.5 17.5 Q13 52 50 60 Q87 52 86.5 17.5Z" fill="#1a0c02"/>
      <path d="M15 18.5 Q14.5 51 50 58.5 Q85.5 51 85 18.5Z" fill="url(#satch-flap)"/>
      {/* flap sheen */}
      <path d="M22 28 Q50 50 78 28" fill="none" stroke="rgba(120,70,20,0.30)" strokeWidth="5" strokeLinecap="round"/>
      <path d="M26 36 Q50 53 74 36" fill="none" stroke="rgba(160,90,30,0.18)" strokeWidth="3" strokeLinecap="round"/>
      {/* flap stitch */}
      <path d="M19 20 Q50 55 81 20" fill="none" stroke="rgba(160,100,40,0.40)" strokeWidth="1.2" strokeDasharray="4,3" strokeLinecap="round"/>
      {/* clasp tab */}
      <rect x="38" y="50" width="24" height="18" rx="6" fill="#c89018" stroke="#8a6008" strokeWidth="2"/>
      <rect x="40" y="52" width="20" height="14" rx="4" fill="url(#satch-clasp)"/>
      <rect x="46.5" y="48" width="7" height="9" rx="2.5" fill="#d4a020" stroke="#8a6008" strokeWidth="1.5"/>
      {/* clasp glare */}
      <ellipse cx="47" cy="55" rx="6" ry="2.5" fill="rgba(255,245,150,0.45)"/>
      {/* pocket outline */}
      <rect x="16" y="65" width="68" height="12" rx="3" fill="none" stroke="rgba(130,80,30,0.30)" strokeWidth="1" strokeDasharray="3,3"/>
      {/* side shadow panels */}
      <rect x="13.5" y="17.5" width="8" height="67" rx="4" fill="rgba(0,0,0,0.22)"/>
      <rect x="78.5" y="17.5" width="8" height="67" rx="4" fill="rgba(0,0,0,0.16)"/>
    </svg>
  );
}

/* BEADED NECKLACE — multi-bead arc, ornate pendant */
function TileNecklace(): ReactElement {
  const beads: [number, number][] = [
    [15,20],[21,31],[28,42],[36,51],[44,58],[50,62],[56,58],[64,51],[72,42],[79,31],[85,20]
  ];
  const colours = ["#c8a030", "#a02828", "#285878", "#885020", "#c8a030"];
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="neck-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#e8dcc8"/>
          <stop offset="100%" stopColor="#c8b898"/>
        </radialGradient>
        <radialGradient id="neck-pendant" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#b83030"/>
          <stop offset="70%" stopColor="#8a1818"/>
          <stop offset="100%" stopColor="#5c0808"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#neck-bg)"/>
      {/* fabric texture */}
      {[15,25,35,45,55,65,75,85].map((y,i) => (
        <line key={i} x1="0" y1={y} x2="100" y2={y} stroke="rgba(160,120,60,0.07)" strokeWidth="1.5"/>
      ))}
      {/* shadow */}
      <ellipse cx="50" cy="94" rx="18" ry="3" fill="rgba(60,40,10,0.20)"/>
      {/* chain thread */}
      <path d="M15 20 Q50 72 85 20" fill="none" stroke="#b09028" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2,2"/>
      {/* beads */}
      {beads.map(([cx, cy], i) => {
        const isCenter = i === 5;
        const r = isCenter ? 8 : 5.5;
        const col = colours[i % colours.length];
        return (
          <g key={i}>
            {/* bead shadow */}
            <ellipse cx={cx+1} cy={cy+1.5} rx={r} ry={r*0.6} fill="rgba(0,0,0,0.15)"/>
            {/* bead body */}
            <circle cx={cx} cy={cy} r={r} fill={col} stroke="rgba(0,0,0,0.25)" strokeWidth="1"/>
            {/* bead sheen */}
            <ellipse cx={cx-r*0.3} cy={cy-r*0.35} rx={r*0.35} ry={r*0.22} fill="rgba(255,255,255,0.50)"/>
            {/* bead equatorial line */}
            <ellipse cx={cx} cy={cy} rx={r} ry={r*0.25} fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="0.7"/>
          </g>
        );
      })}
      {/* pendant bail */}
      <ellipse cx="50" cy="69" rx="4.5" ry="3" fill="none" stroke="#c8a028" strokeWidth="2.2"/>
      <line x1="50" y1="69" x2="50" y2="74" stroke="#c8a028" strokeWidth="2"/>
      {/* pendant drop */}
      <ellipse cx="50" cy="84" rx="12" ry="15" fill="#b09020" stroke="#8a7010" strokeWidth="2"/>
      <ellipse cx="50" cy="84" rx="9.5" ry="12" fill="url(#neck-pendant)"/>
      {/* pendant veins */}
      <path d="M44 76 Q50 80 56 76" fill="none" stroke="rgba(255,150,150,0.22)" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M44 88 Q50 92 56 88" fill="none" stroke="rgba(255,150,150,0.18)" strokeWidth="1" strokeLinecap="round"/>
      {/* pendant glare */}
      <ellipse cx="44" cy="78" rx="4" ry="2.5" fill="rgba(255,200,200,0.45)"/>
    </svg>
  );
}

/* FEDORA — dark felt, gold band, side dent */
function TileFedora(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="fed-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#d8c8a8"/>
          <stop offset="100%" stopColor="#b0986c"/>
        </radialGradient>
        <radialGradient id="fed-crown" cx="45%" cy="25%" r="65%">
          <stop offset="0%" stopColor="#5a3820"/>
          <stop offset="60%" stopColor="#3a2010"/>
          <stop offset="100%" stopColor="#1e0e04"/>
        </radialGradient>
        <linearGradient id="fed-brim" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a2a12"/>
          <stop offset="50%" stopColor="#2e1808"/>
          <stop offset="100%" stopColor="#1a0c02"/>
        </linearGradient>
      </defs>
      <rect width="100" height="100" fill="url(#fed-bg)"/>
      {/* surface */}
      {[20,30,40,50,60,70].map((y,i) => (
        <line key={i} x1="0" y1={y} x2="100" y2={y} stroke="rgba(160,120,60,0.07)" strokeWidth="1.5"/>
      ))}
      {/* drop shadow under brim */}
      <ellipse cx="50" cy="78" rx="46" ry="7" fill="rgba(30,15,0,0.30)"/>
      {/* brim shadow underside */}
      <ellipse cx="50" cy="70" rx="44" ry="9" fill="#0e0702"/>
      {/* brim */}
      <ellipse cx="50" cy="68" rx="44" ry="9" fill="url(#fed-brim)"/>
      <ellipse cx="50" cy="66" rx="42" ry="7.5" fill="#3a2010"/>
      {/* brim top highlight */}
      <ellipse cx="50" cy="65" rx="40" ry="6.5" fill="none" stroke="rgba(120,70,20,0.20)" strokeWidth="1.5"/>
      {/* crown */}
      <path d="M22 66 Q19 30 50 20 Q81 30 78 66Z" fill="#1e0e04"/>
      <path d="M24 66 Q21 32 50 22 Q79 32 76 66Z" fill="url(#fed-crown)"/>
      <path d="M26 66 Q23 34 50 24 Q77 34 74 66Z" fill="#4a2810" opacity="0.5"/>
      {/* pinch dents at crown */}
      <path d="M37 30 Q50 24 63 30 Q60 22 50 20 Q40 22 37 30Z" fill="rgba(0,0,0,0.35)"/>
      <ellipse cx="50" cy="26" rx="14" ry="4.5" fill="#2a1408"/>
      {/* crown centre indent line */}
      <line x1="50" y1="22" x2="50" y2="55" stroke="rgba(0,0,0,0.28)" strokeWidth="3" strokeLinecap="round"/>
      {/* hat band */}
      <path d="M24 63 Q50 71 76 63 Q76 56 50 62 Q24 56 24 63Z" fill="#c89018"/>
      <path d="M26 61 Q50 68 74 61" fill="none" stroke="rgba(255,215,80,0.48)" strokeWidth="2" strokeLinecap="round"/>
      {/* band buckle dot */}
      <rect x="46" y="57.5" width="8" height="5" rx="1.5" fill="#d4a820" stroke="#9a7810" strokeWidth="1"/>
      {/* crown highlight — light catching felt */}
      <path d="M36 44 Q50 37 64 44" fill="none" stroke="rgba(200,150,80,0.28)" strokeWidth="7" strokeLinecap="round"/>
      <path d="M40 34 Q50 29 60 34" fill="none" stroke="rgba(200,140,70,0.20)" strokeWidth="5" strokeLinecap="round"/>
      {/* left side ambient shadow */}
      <path d="M24 66 Q21 48 30 32 Q28 40 28 66Z" fill="rgba(0,0,0,0.22)"/>
    </svg>
  );
}

/* ROUND SHADES — green tinted, wire frame */
function TileRoundShades(): ReactElement {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="rs-bg" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#e8e0c8"/>
          <stop offset="100%" stopColor="#c4b890"/>
        </radialGradient>
        <radialGradient id="rs-lens" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#5a8050" stopOpacity="0.85"/>
          <stop offset="60%" stopColor="#3a6030" stopOpacity="0.90"/>
          <stop offset="100%" stopColor="#204010" stopOpacity="0.95"/>
        </radialGradient>
        <radialGradient id="rs-sheen" cx="30%" cy="25%" r="55%">
          <stop offset="0%" stopColor="rgba(180,240,160,0.50)"/>
          <stop offset="100%" stopColor="rgba(120,200,100,0)"/>
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#rs-bg)"/>
      {/* grain */}
      {[18,28,38,48,58,68,78].map((y,i) => (
        <line key={i} x1="0" y1={y} x2="100" y2={y} stroke="rgba(160,130,60,0.07)" strokeWidth="1.5"/>
      ))}
      {/* shadow */}
      <ellipse cx="50" cy="78" rx="30" ry="4" fill="rgba(60,40,0,0.20)"/>
      {/* left temple arm */}
      <line x1="3" y1="50" x2="19" y2="50" stroke="#7a5818" strokeWidth="2.8" strokeLinecap="round"/>
      {/* right temple arm */}
      <line x1="97" y1="50" x2="81" y2="50" stroke="#7a5818" strokeWidth="2.8" strokeLinecap="round"/>
      {/* bridge */}
      <path d="M42 49 L58 49" stroke="#7a5818" strokeWidth="2.5" strokeLinecap="round"/>
      {/* nose pad connectors */}
      <path d="M41 49 Q39 53 39 55" stroke="#7a5818" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M59 49 Q61 53 61 55" stroke="#7a5818" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      {/* left lens frame */}
      <circle cx="30" cy="50" r="18" fill="#5a3a10" strokeWidth="0"/>
      <circle cx="30" cy="50" r="16.5" fill="url(#rs-lens)"/>
      {/* left lens sheen */}
      <ellipse cx="23" cy="43" rx="7" ry="4.5" fill="url(#rs-sheen)"/>
      {/* reflection streak */}
      <path d="M18 40 Q22 36 28 40" fill="none" stroke="rgba(200,255,180,0.38)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* right lens frame */}
      <circle cx="70" cy="50" r="18" fill="#5a3a10" strokeWidth="0"/>
      <circle cx="70" cy="50" r="16.5" fill="url(#rs-lens)"/>
      {/* right lens sheen */}
      <ellipse cx="63" cy="43" rx="7" ry="4.5" fill="url(#rs-sheen)"/>
      {/* reflection streak */}
      <path d="M58 40 Q62 36 68 40" fill="none" stroke="rgba(200,255,180,0.38)" strokeWidth="2.5" strokeLinecap="round"/>
      {/* wire hinge dots */}
      <circle cx="19" cy="50" r="2" fill="#c8a040"/>
      <circle cx="81" cy="50" r="2" fill="#c8a040"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   TILE DATA
═══════════════════════════════════════════════════════ */
interface TileData {
  /** warm seamless background for the photo "surface" */
  bg: string;
  /** subtle secondary colour for light gradient */
  bg2: string;
  content: ReactElement;
  price: string | null;
  shoptag: boolean;
  multi: boolean;
}

const TILES: TileData[] = [
  {
    bg: "#c49a6a", bg2: "#a07840",
    content: <TileSunglasses/>,
    price: null, shoptag: true, multi: false,
  },
  {
    bg: "#8c5a2a", bg2: "#6a3e18",
    content: <TileBelt/>,
    price: "$45", shoptag: true, multi: false,
  },
  {
    bg: "#b08038", bg2: "#8a6020",
    content: <TileWatch/>,
    price: null, shoptag: true, multi: true,
  },
  {
    bg: "#6878a0", bg2: "#4a5878",
    content: <TileScarf/>,
    price: null, shoptag: true, multi: false,
  },
  {
    bg: "#c8b890", bg2: "#a89060",
    content: <TileRing/>,
    price: "$120", shoptag: true, multi: false,
  },
  {
    bg: "#a08060", bg2: "#7a5c38",
    content: <TileSatchel/>,
    price: null, shoptag: true, multi: false,
  },
  {
    bg: "#d0b888", bg2: "#b09060",
    content: <TileNecklace/>,
    price: "$80", shoptag: true, multi: false,
  },
  {
    bg: "#707858", bg2: "#505838",
    content: <TileFedora/>,
    price: null, shoptag: true, multi: false,
  },
  {
    bg: "#c8b898", bg2: "#a89070",
    content: <TileRoundShades/>,
    price: null, shoptag: true, multi: false,
  },
];

/* ── Shopping-tag dot ── */
function ShopDot(): ReactElement {
  return (
    <div style={{ position: "absolute", top: 5, right: 5, zIndex: 10 }}>
      <div style={{
        width: 14, height: 14, borderRadius: "50%",
        background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.30)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#1c1c1c" }}/>
      </div>
    </div>
  );
}

/* ── Multi-image indicator ── */
function MultiIcon(): ReactElement {
  return (
    <div style={{ position: "absolute", top: 5, left: 5, zIndex: 10 }}>
      <svg viewBox="0 0 14 14" width="12" height="12" aria-hidden="true">
        <rect x="1" y="1" width="8.5" height="8.5" rx="2" fill="none" stroke="white" strokeWidth="1.8"/>
        <rect x="4.5" y="4.5" width="8.5" height="8.5" rx="2" fill="none" stroke="white" strokeWidth="1.8"/>
      </svg>
    </div>
  );
}

/* ── Price pill ── */
function PricePill({ price }: { price: string }): ReactElement {
  return (
    <div style={{
      position: "absolute", bottom: 5, left: 5, zIndex: 10,
      display: "flex", alignItems: "center", gap: 3,
      borderRadius: 20, background: "rgba(255,255,255,0.95)",
      paddingLeft: 5, paddingRight: 6, paddingTop: 2.5, paddingBottom: 2.5,
      boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
    }}>
      {/* tag icon */}
      <svg viewBox="0 0 10 10" width="8" height="8" fill="none" stroke="#444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M1 1h4l4 4.5L5 10 1 5.5z"/>
        <circle cx="3" cy="3.5" r="0.9" fill="#444" stroke="none"/>
      </svg>
      <span style={{ fontSize: 7.5, fontWeight: 700, color: "#111", lineHeight: 1 }}>{price}</span>
    </div>
  );
}

/* ── Grid Tile ── */
function GridTile({ tile }: { tile: TileData }): ReactElement {
  return (
    <div style={{
      position: "relative",
      aspectRatio: "1 / 1",
      overflow: "hidden",
      background: `linear-gradient(145deg, ${tile.bg}, ${tile.bg2})`,
    }}>
      {/* photo vignette overlay — makes it feel "shot" */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at 60% 30%, rgba(255,255,255,0.08) 0%, transparent 60%), linear-gradient(180deg, rgba(0,0,0,0.08) 0%, transparent 40%, rgba(0,0,0,0.22) 100%)",
        zIndex: 5,
      }}/>
      {/* product illustration */}
      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "8%" }}>
        {tile.content}
      </div>
      {tile.shoptag && <ShopDot/>}
      {tile.multi && <MultiIcon/>}
      {tile.price && <PricePill price={tile.price}/>}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   TOP APP BAR ICONS
═══════════════════════════════════════════════════════ */
function IconPlusSquare(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1c1c1c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <line x1="12" y1="8" x2="12" y2="16"/>
      <line x1="8" y1="12" x2="16" y2="12"/>
    </svg>
  );
}
function IconMenu(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#1c1c1c" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="7" x2="21" y2="7"/>
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="17" x2="21" y2="17"/>
    </svg>
  );
}

/* ── Verified badge ── */
function VerifiedBadge(): ReactElement {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <circle cx="8" cy="8" r="7.5" fill="#3b82f6"/>
      <polyline points="5,8.3 7.2,10.6 11.2,6" fill="none" stroke="white" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ── UserPlus icon ── */
function IconUserPlus(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <line x1="19" y1="8" x2="19" y2="14"/>
      <line x1="16" y1="11" x2="22" y2="11"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   TAB ROW ICONS
═══════════════════════════════════════════════════════ */
function IconGrid(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1"/>
      <rect x="14" y="3" width="7" height="7" rx="1"/>
      <rect x="3" y="14" width="7" height="7" rx="1"/>
      <rect x="14" y="14" width="7" height="7" rx="1"/>
    </svg>
  );
}
function IconReels(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4"/>
      <path d="M7 2v20M17 2v20M2 12h20M2 7h5M17 7h5M2 17h5M17 17h5"/>
    </svg>
  );
}
function IconTag(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
      <line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   BOTTOM NAV BAR ICONS
═══════════════════════════════════════════════════════ */
function IconHome(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#1c1c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-5h-6v5H4a1 1 0 0 1-1-1Z"/>
    </svg>
  );
}
function IconSearch(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7"/>
      <line x1="16.5" y1="16.5" x2="21" y2="21"/>
    </svg>
  );
}
function IconReel(): ReactElement {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9"/>
      <polygon points="10,9 17,12 10,15" fill="#a0a0a0" stroke="none"/>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN EXPORT
═══════════════════════════════════════════════════════ */
export default function VintageInstagram(): ReactElement {
  return (
    <div
      className="relative flex h-full w-full flex-col overflow-hidden bg-white"
      style={{ fontFamily: "-apple-system, 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif" }}
    >

      {/* ══ STATUS BAR (fake) ══════════════════════════════════ */}
      <div style={{
        background: "white", display: "flex", justifyContent: "space-between",
        alignItems: "center", paddingLeft: 14, paddingRight: 14,
        paddingTop: 8, paddingBottom: 4, flexShrink: 0,
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>9:41</span>
        <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
          {/* signal */}
          <svg viewBox="0 0 18 12" width="16" height="10" aria-hidden="true">
            <rect x="0"  y="8" width="3" height="4" rx="0.8" fill="#111"/>
            <rect x="5"  y="5" width="3" height="7" rx="0.8" fill="#111"/>
            <rect x="10" y="2" width="3" height="10" rx="0.8" fill="#111"/>
            <rect x="15" y="0" width="3" height="12" rx="0.8" fill="#111"/>
          </svg>
          {/* wifi */}
          <svg viewBox="0 0 18 12" width="16" height="10" fill="none" stroke="#111" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
            <path d="M1 4.5 Q9 -1 17 4.5"/>
            <path d="M3.5 7 Q9 3.5 14.5 7"/>
            <path d="M6.5 9.5 Q9 8 11.5 9.5"/>
            <circle cx="9" cy="11.5" r="0.8" fill="#111" stroke="none"/>
          </svg>
          {/* battery */}
          <svg viewBox="0 0 22 12" width="20" height="10" aria-hidden="true">
            <rect x="0.5" y="0.5" width="18" height="11" rx="2.5" fill="none" stroke="#111" strokeWidth="1.2"/>
            <rect x="2" y="2" width="14" height="8" rx="1.5" fill="#111"/>
            <path d="M19.5 4 Q21.5 4 21.5 6 Q21.5 8 19.5 8" stroke="#111" strokeWidth="1.2" fill="none"/>
          </svg>
        </div>
      </div>

      {/* ══ TOP APP BAR ════════════════════════════════════════ */}
      <header style={{
        background: "white", display: "flex", alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 12, paddingRight: 12,
        paddingTop: 4, paddingBottom: 8,
        borderBottom: "1px solid #efefef", flexShrink: 0,
      }}>
        {/* left — blank spacer matching right icons width */}
        <div style={{ width: 52 }}/>
        {/* centre — handle + verified */}
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <span style={{ fontSize: 14, fontWeight: 700, letterSpacing: "-0.4px", color: "#111" }}>
            vintage.atelier
          </span>
          <VerifiedBadge/>
          {/* dropdown caret */}
          <svg viewBox="0 0 10 6" width="9" height="6" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="1,1 5,5 9,1"/>
          </svg>
        </div>
        {/* right icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <IconPlusSquare/>
          <IconMenu/>
        </div>
      </header>

      {/* ══ PROFILE HEADER ═════════════════════════════════════ */}
      <section style={{
        flexShrink: 0,
        paddingLeft: 14, paddingRight: 14,
        paddingTop: 12, paddingBottom: 4,
      }}>
        {/* row: avatar + stats */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>

          {/* avatar with IG story gradient ring */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              padding: 2.5, borderRadius: "50%",
              background: "linear-gradient(135deg,#f59e0b,#f97316,#ef4444,#a855f7)",
              boxSizing: "border-box",
            }}>
              <div style={{
                padding: 2.5, borderRadius: "50%",
                background: "white", boxSizing: "border-box",
              }}>
                <div style={{ borderRadius: "50%", overflow: "hidden", display: "block", lineHeight: 0 }}>
                  <AvatarPortrait/>
                </div>
              </div>
            </div>
          </div>

          {/* stats */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-around" }}>
            <StatCol value="142"   label="posts"     />
            <StatCol value="28.5k" label="followers" />
            <StatCol value="310"   label="following" />
          </div>
        </div>

        {/* bio block */}
        <div style={{ marginTop: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#111", lineHeight: 1.3 }}>Vintage Atelier</div>
          <div style={{ fontSize: 11, color: "#262626", lineHeight: 1.4, marginTop: 2 }}>
            Curated 70s&#8211;90s accessories &#x2728;
          </div>
          <div style={{ fontSize: 11, color: "#262626", lineHeight: 1.4 }}>
            Ships worldwide &middot; DM to buy
          </div>
          <div style={{ fontSize: 11, color: "#00376b", fontWeight: 600, lineHeight: 1.4 }}>
            vintage.atelier/shop
          </div>
        </div>

        {/* action buttons */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
          <button style={{
            flex: 1, borderRadius: 8, border: "none",
            background: "#1c1c1c", color: "white",
            fontSize: 12.5, fontWeight: 600, paddingTop: 7, paddingBottom: 7,
            cursor: "pointer",
          }}>
            Follow
          </button>
          <button style={{
            flex: 1, borderRadius: 8, border: "1.5px solid #dbdbdb",
            background: "white", color: "#1c1c1c",
            fontSize: 12.5, fontWeight: 600, paddingTop: 7, paddingBottom: 7,
            cursor: "pointer",
          }}>
            Message
          </button>
          <button style={{
            width: 36, height: 34, borderRadius: 8,
            border: "1.5px solid #dbdbdb", background: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}>
            <IconUserPlus/>
          </button>
        </div>
      </section>

      {/* ══ STORY HIGHLIGHTS ═══════════════════════════════════ */}
      <div style={{
        flexShrink: 0,
        display: "flex", gap: 16,
        overflowX: "auto", scrollbarWidth: "none",
        paddingLeft: 14, paddingRight: 14,
        paddingTop: 12, paddingBottom: 10,
      }}>
        {HIGHLIGHTS.map((h) => (
          <HighlightBubble key={h.label} h={h}/>
        ))}
      </div>

      {/* ══ TAB ROW ════════════════════════════════════════════ */}
      <div style={{
        flexShrink: 0,
        display: "flex",
        borderTop: "1px solid #efefef",
        borderBottom: "none",
      }}>
        {/* Grid — active */}
        <button style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: 9, paddingBottom: 9,
          borderBottom: "1.5px solid #1c1c1c",
          background: "none", border: "none",
          borderBottomWidth: 1.5, borderBottomStyle: "solid", borderBottomColor: "#1c1c1c",
          cursor: "pointer", color: "#1c1c1c",
        }}>
          <IconGrid/>
        </button>
        {/* Reels */}
        <button style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: 9, paddingBottom: 9,
          background: "none", border: "none",
          borderBottomWidth: 1.5, borderBottomStyle: "solid", borderBottomColor: "transparent",
          cursor: "pointer", color: "#a0a0a0",
        }}>
          <IconReels/>
        </button>
        {/* Tagged */}
        <button style={{
          flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
          paddingTop: 9, paddingBottom: 9,
          background: "none", border: "none",
          borderBottomWidth: 1.5, borderBottomStyle: "solid", borderBottomColor: "transparent",
          cursor: "pointer", color: "#a0a0a0",
        }}>
          <IconTag/>
        </button>
      </div>

      {/* ══ 3-COLUMN PRODUCT GRID ══════════════════════════════ */}
      <div style={{ flex: 1, overflow: "hidden", background: "#e0d8cc" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1.5px",
          background: "#c8c0b0",
        }}>
          {TILES.map((tile, i) => (
            <GridTile key={i} tile={tile}/>
          ))}
        </div>
      </div>

      {/* ══ BOTTOM NAV BAR ═════════════════════════════════════ */}
      <nav style={{
        flexShrink: 0,
        display: "flex", alignItems: "center", justifyContent: "space-around",
        background: "white",
        borderTop: "1px solid #efefef",
        paddingTop: 8, paddingBottom: 10,
      }}>
        <IconHome/>
        <IconSearch/>
        {/* create post */}
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#a0a0a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="4"/>
          <line x1="12" y1="8" x2="12" y2="16"/>
          <line x1="8" y1="12" x2="16" y2="12"/>
        </svg>
        <IconReel/>
        {/* profile tab — small avatar thumbnail */}
        <div style={{
          width: 26, height: 26, borderRadius: "50%",
          padding: 2,
          background: "linear-gradient(135deg,#f59e0b,#ef4444)",
          boxSizing: "border-box",
        }}>
          <div style={{
            width: "100%", height: "100%", borderRadius: "50%",
            background: "linear-gradient(135deg,#d4934e,#b07030)",
            border: "1.5px solid white",
            boxSizing: "border-box",
          }}/>
        </div>
      </nav>

    </div>
  );
}
