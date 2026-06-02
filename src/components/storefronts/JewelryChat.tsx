import type { ReactElement } from "react";
import Image from "next/image";
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
    imgSrc: "/products/jewelry/pendant.jpg",
  },
  {
    id: "rings",
    name: "Stacking Ring Set",
    sub: "18k · pavé sapphire · 3-piece",
    price: "$185",
    imgSrc: "/products/jewelry/rings.jpg",
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
              {/* ── Image area: real product photo ── */}
              <div
                className="relative overflow-hidden"
                style={{ height: 108 }}
              >
                <Image
                  src="/products/jewelry/hoops.jpg"
                  alt="Hammered Gold Hoops"
                  fill
                  sizes="210px"
                  className="object-cover"
                />

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
                {MINI_CARDS.map(({ id, name, sub, price, imgSrc }) => (
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
                      className="relative overflow-hidden"
                      style={{ height: 68 }}
                    >
                      <Image
                        src={imgSrc}
                        alt={name}
                        fill
                        sizes="94px"
                        className="object-cover"
                      />
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
