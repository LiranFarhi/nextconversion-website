import {
  ChevronLeft,
  Phone,
  MoreVertical,
  ShoppingBag,
  Mic,
  Send,
  Plus,
} from "lucide-react";

// ── Jewellery SVG illustrations ────────────────────────────────────────────

function HoopsIllustration() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* left hoop */}
      <ellipse cx="22" cy="40" rx="14" ry="15" stroke="#a07820" strokeWidth="6" fill="none" />
      <ellipse cx="22" cy="40" rx="14" ry="15" stroke="#f5d860" strokeWidth="2.5" fill="none" opacity="0.5" />
      <ellipse cx="22" cy="40" rx="14" ry="15" stroke="white" strokeWidth="1" fill="none" opacity="0.15" />
      {/* hammered dots left */}
      <circle cx="10" cy="34" r="1.2" fill="#7a5a10" opacity="0.7" />
      <circle cx="14" cy="26" r="1" fill="#7a5a10" opacity="0.6" />
      <circle cx="22" cy="24" r="1.1" fill="#7a5a10" opacity="0.55" />
      <circle cx="33" cy="32" r="1" fill="#7a5a10" opacity="0.6" />
      <circle cx="34" cy="42" r="0.9" fill="#7a5a10" opacity="0.5" />
      {/* post left */}
      <rect x="20.5" y="23" width="3" height="6" rx="1.5" fill="#d4a030" />
      <rect x="21.2" y="23" width="1.2" height="3" rx="0.6" fill="white" opacity="0.4" />
      {/* right hoop */}
      <ellipse cx="50" cy="40" rx="14" ry="15" stroke="#a07820" strokeWidth="6" fill="none" />
      <ellipse cx="50" cy="40" rx="14" ry="15" stroke="#f5d860" strokeWidth="2.5" fill="none" opacity="0.5" />
      <ellipse cx="50" cy="40" rx="14" ry="15" stroke="white" strokeWidth="1" fill="none" opacity="0.15" />
      {/* hammered dots right */}
      <circle cx="38" cy="34" r="1.2" fill="#7a5a10" opacity="0.7" />
      <circle cx="42" cy="26" r="1" fill="#7a5a10" opacity="0.6" />
      <circle cx="50" cy="24" r="1.1" fill="#7a5a10" opacity="0.55" />
      <circle cx="61" cy="32" r="1" fill="#7a5a10" opacity="0.6" />
      <circle cx="62" cy="42" r="0.9" fill="#7a5a10" opacity="0.5" />
      {/* post right */}
      <rect x="48.5" y="23" width="3" height="6" rx="1.5" fill="#d4a030" />
      <rect x="49.2" y="23" width="1.2" height="3" rx="0.6" fill="white" opacity="0.4" />
      {/* shine arcs */}
      <path d="M10 34 Q8 28 13 25" stroke="#fce870" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.65" />
      <path d="M38 34 Q36 28 41 25" stroke="#fce870" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

function PearlPendantIllustration() {
  return (
    <svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="pearl-mini-1" cx="38%" cy="33%" r="60%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#f0ece4" />
          <stop offset="100%" stopColor="#c8bfad" />
        </radialGradient>
      </defs>
      {/* chain */}
      <path d="M24 3 L24 16" stroke="#c9a84c" strokeWidth="1.4" strokeDasharray="2 2" />
      {/* bail */}
      <ellipse cx="24" cy="18" rx="3" ry="2" stroke="#c9a84c" strokeWidth="1.6" fill="none" />
      <line x1="24" y1="20" x2="24" y2="27" stroke="#c9a84c" strokeWidth="1.2" />
      {/* pearl */}
      <circle cx="24" cy="38" r="12" fill="url(#pearl-mini-1)" stroke="#c0b8a8" strokeWidth="0.8" />
      <ellipse cx="20" cy="33" rx="4" ry="2.8" fill="white" opacity="0.45" />
      <ellipse cx="19" cy="32" rx="2" ry="1.3" fill="white" opacity="0.7" />
      {/* accent pearl */}
      <circle cx="32" cy="46" r="4" fill="url(#pearl-mini-1)" stroke="#c0b8a8" strokeWidth="0.6" />
      <ellipse cx="31" cy="45" rx="1.3" ry="0.9" fill="white" opacity="0.6" />
    </svg>
  );
}

function StackingRingsIllustration() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* bottom ring — rose gold */}
      <ellipse cx="26" cy="43" rx="17" ry="5" stroke="#c87040" strokeWidth="5" fill="none" />
      <ellipse cx="26" cy="43" rx="17" ry="5" stroke="#f0a870" strokeWidth="2" fill="none" opacity="0.5" />
      {/* middle ring — yellow gold */}
      <ellipse cx="26" cy="33" rx="15" ry="4.5" stroke="#a07820" strokeWidth="5" fill="none" />
      <ellipse cx="26" cy="33" rx="15" ry="4.5" stroke="#f5d860" strokeWidth="2" fill="none" opacity="0.5" />
      {/* top ring — gem */}
      <ellipse cx="26" cy="23" rx="13" ry="4" stroke="#a07820" strokeWidth="4" fill="none" />
      <ellipse cx="26" cy="23" rx="13" ry="4" stroke="#f5d860" strokeWidth="1.5" fill="none" opacity="0.5" />
      {/* gem */}
      <polygon points="26,14 30,20 26,22 22,20" fill="#90c0e0" opacity="0.9" />
      <polygon points="26,14 30,20 26,17" fill="white" opacity="0.5" />
      <polygon points="26,22 30,20 26,24 22,20" fill="#4880b0" opacity="0.7" />
      {/* shine */}
      <path d="M11 41 Q9 39 13 37" stroke="#f5e070" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M11 31 Q9 29 13 27" stroke="#f5e070" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// ── Aurelia avatar SVG ─────────────────────────────────────────────────────

function AureliaAvatar({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="av-gold" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#e8c96a" />
          <stop offset="55%" stopColor="#c49830" />
          <stop offset="100%" stopColor="#7a4c10" />
        </radialGradient>
      </defs>
      <circle cx="20" cy="20" r="20" fill="url(#av-gold)" />
      {/* stylised A */}
      <path d="M20 9 L27.5 30 M12.5 30 L27.5 30 M15.5 22 H24.5" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.92" />
      {/* diamond accent */}
      <polygon points="20,5 22.5,8.5 20,11 17.5,8.5" fill="white" opacity="0.65" />
    </svg>
  );
}

// ── Seen double-tick ───────────────────────────────────────────────────────

function SeenTick() {
  return (
    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" aria-hidden="true">
      <path d="M1 4.5 L3.5 7 L8.5 1" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.5 4.5 L8 7 L13 1" stroke="#c9a84c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Mini star ─────────────────────────────────────────────────────────────

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="8" height="8" viewBox="0 0 10 10" aria-hidden="true">
      <polygon
        points="5,0.5 6.5,3.8 10,4 7.2,6.5 8,10 5,8.2 2,10 2.8,6.5 0,4 3.5,3.8"
        fill={filled ? "#c9a84c" : "#ddd0a0"}
      />
    </svg>
  );
}

// ── Quick-reply chips ─────────────────────────────────────────────────────

const chips = ["Show earrings", "Under $250", "Gift wrap"] as const;

// ── Mini product cards ("You may also like") ──────────────────────────────

const miniCards = [
  { id: "pearl", name: "Pearl Drop Pendant", price: "$310", Illustration: PearlPendantIllustration },
  { id: "rings", name: "Stacking Ring Set", price: "$185", Illustration: StackingRingsIllustration },
] as const;

// ── Component ──────────────────────────────────────────────────────────────

export default function JewelryChat() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden" style={{ background: "#f7f0e6", fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      {/* ── STATUS BAR (decorative) ── */}
      <div
        className="shrink-0 flex items-center justify-between px-4"
        style={{ height: 22, background: "linear-gradient(135deg,#1e1008 0%,#2d1a0e 100%)" }}
      >
        <span className="text-[9px] font-semibold text-[#d4aa60]">9:41</span>
        <div className="flex items-center gap-1.5">
          {/* signal bars */}
          <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
            <rect x="0" y="6" width="2.5" height="3" rx="0.5" fill="#d4aa60" />
            <rect x="3.5" y="4" width="2.5" height="5" rx="0.5" fill="#d4aa60" />
            <rect x="7" y="2" width="2.5" height="7" rx="0.5" fill="#d4aa60" />
            <rect x="10.5" y="0" width="2.5" height="9" rx="0.5" fill="#d4aa60" opacity="0.4" />
          </svg>
          {/* wifi */}
          <svg width="13" height="10" viewBox="0 0 13 10" fill="none" aria-hidden="true">
            <path d="M6.5 8.5 L6.5 8.5" stroke="#d4aa60" strokeWidth="2" strokeLinecap="round" />
            <path d="M3.5 6 Q6.5 4 9.5 6" stroke="#d4aa60" strokeWidth="1.3" fill="none" strokeLinecap="round" />
            <path d="M1 3.5 Q6.5 0.5 12 3.5" stroke="#d4aa60" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.6" />
          </svg>
          {/* battery */}
          <svg width="18" height="9" viewBox="0 0 18 9" fill="none" aria-hidden="true">
            <rect x="0.5" y="0.5" width="15" height="8" rx="2" stroke="#d4aa60" strokeWidth="1" />
            <rect x="2" y="2" width="10" height="5" rx="1" fill="#d4aa60" />
            <path d="M16.5 3 L16.5 6" stroke="#d4aa60" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* ── HEADER ── */}
      <div
        className="shrink-0 flex items-center gap-2 px-2 py-2 border-b border-[#1a0a02]"
        style={{ background: "linear-gradient(135deg,#1e1008 0%,#2d1a0e 80%,#3e2512 100%)" }}
      >
        {/* back */}
        <button className="shrink-0 text-[#d4aa60] active:opacity-70" aria-label="Back">
          <ChevronLeft className="h-[18px] w-[18px]" />
        </button>

        {/* avatar + online ring */}
        <div className="relative shrink-0">
          <div className="rounded-full overflow-hidden shadow-md" style={{ width: 34, height: 34, outline: "2px solid #c9a84c", outlineOffset: 1 }}>
            <AureliaAvatar size={34} />
          </div>
          <span
            className="absolute bottom-0 right-0 block rounded-full bg-emerald-400"
            style={{ width: 8, height: 8, outline: "1.5px solid #1e1008" }}
          />
        </div>

        {/* name + status */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold text-[#f0e0b0] tracking-wide leading-tight truncate">
            Aurelia · Personal Jeweller
          </p>
          <p className="text-[8.5px] text-emerald-400 leading-tight mt-px">
            ● online
          </p>
        </div>

        {/* action icons */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button aria-label="Call" className="text-[#c9a84c]">
            <Phone className="h-[14px] w-[14px]" />
          </button>
          <button aria-label="More" className="text-[#c9a84c]">
            <MoreVertical className="h-[14px] w-[14px]" />
          </button>
        </div>
      </div>

      {/* ── CHAT BODY ── */}
      <div className="flex flex-1 flex-col overflow-hidden px-2.5 pt-2 pb-1 min-h-0">
        {/* inner column — no scroll, just tight layout */}
        <div className="flex flex-col gap-2 shrink-0">

          {/* date divider */}
          <div className="flex items-center gap-2">
            <div className="flex-1 h-px" style={{ background: "#d8ccb0" }} />
            <span className="text-[7.5px] text-[#9a8060] tracking-widest uppercase select-none">Today</span>
            <div className="flex-1 h-px" style={{ background: "#d8ccb0" }} />
          </div>

          {/* ── Aurelia greeting ── */}
          <div className="flex items-end gap-1.5" style={{ maxWidth: "88%" }}>
            <div className="shrink-0 rounded-full overflow-hidden mb-0.5 shadow-sm" style={{ width: 22, height: 22 }}>
              <AureliaAvatar size={22} />
            </div>
            <div>
              <div
                className="rounded-2xl rounded-bl-sm px-3 py-1.5 shadow-sm"
                style={{ background: "linear-gradient(135deg,#fffdf7 0%,#fef6e4 100%)", border: "1px solid #e8dcc8" }}
              >
                <p className="text-[9.5px] text-[#2d1a0e] leading-relaxed">
                  Hello! I&apos;m <span className="font-bold text-[#9a6820]">Aurelia</span>, your personal jewellery concierge. Treating yourself or finding a gift? ✨
                </p>
              </div>
              <p className="mt-px text-[7px] text-[#b0987a] pl-1">10:14 AM</p>
            </div>
          </div>

          {/* ── User reply ── */}
          <div className="flex justify-end">
            <div style={{ maxWidth: "68%" }}>
              <div
                className="rounded-2xl rounded-br-sm px-3 py-1.5 shadow-sm"
                style={{ background: "linear-gradient(135deg,#c9a84c 0%,#7a4e10 100%)" }}
              >
                <p className="text-[9.5px] text-white leading-relaxed">
                  Something elegant for a 30th birthday — earrings maybe? 🎁
                </p>
              </div>
              <div className="mt-px flex items-center justify-end gap-0.5">
                <p className="text-[7px] text-[#b0987a]">10:15 AM</p>
                <SeenTick />
              </div>
            </div>
          </div>

          {/* ── Aurelia lead-in ── */}
          <div className="flex items-end gap-1.5" style={{ maxWidth: "88%" }}>
            <div className="shrink-0 rounded-full overflow-hidden mb-0.5 shadow-sm" style={{ width: 22, height: 22 }}>
              <AureliaAvatar size={22} />
            </div>
            <div
              className="rounded-2xl rounded-bl-sm px-3 py-1.5 shadow-sm"
              style={{ background: "linear-gradient(135deg,#fffdf7 0%,#fef6e4 100%)", border: "1px solid #e8dcc8" }}
            >
              <p className="text-[9.5px] text-[#2d1a0e] leading-relaxed">
                Perfect choice! Our <span className="font-bold text-[#9a6820]">Hammered Gold Hoops</span> are a milestone favourite — hand-finished and endlessly wearable:
              </p>
            </div>
          </div>

          {/* ── FEATURED PRODUCT CARD ── */}
          <div className="flex items-end gap-1.5">
            <div className="shrink-0 rounded-full overflow-hidden mb-0.5 shadow-sm" style={{ width: 22, height: 22 }}>
              <AureliaAvatar size={22} />
            </div>
            <div
              className="rounded-2xl overflow-hidden shadow-md flex-col"
              style={{ width: 214, border: "1px solid #ddd0b0", background: "linear-gradient(160deg,#fffdf7 0%,#fff5e0 100%)" }}
            >
              {/* illustration tile */}
              <div
                className="relative flex items-center justify-center"
                style={{ height: 100, background: "linear-gradient(135deg,#fbefc4 0%,#e8cc78 55%,#b89030 100%)" }}
              >
                {/* decorative rings */}
                <svg width="100" height="100" viewBox="0 0 100 100" className="absolute inset-0" aria-hidden="true">
                  <circle cx="50" cy="50" r="42" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2" />
                  <circle cx="50" cy="50" r="32" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" />
                </svg>
                <HoopsIllustration />
                {/* badges */}
                <span
                  className="absolute top-1.5 left-1.5 text-[6.5px] font-bold tracking-widest uppercase px-1.5 py-0.5 rounded-full"
                  style={{ background: "#1e1008", color: "#f0d488" }}
                >
                  Bestseller
                </span>
                <span
                  className="absolute top-1.5 right-1.5 text-[9px] font-bold px-2 py-0.5 rounded-full shadow"
                  style={{ background: "rgba(30,16,8,0.85)", color: "#f5d860" }}
                >
                  $240
                </span>
              </div>

              {/* card content */}
              <div className="px-2.5 pt-1.5 pb-2 flex flex-col gap-1">
                <p className="text-[10.5px] font-bold text-[#1e1008] leading-tight">Hammered Gold Hoops</p>
                <p className="text-[8px] text-[#7a6040] leading-tight">18k gold-plated · hand-hammered · hypoallergenic</p>

                {/* attribute chips */}
                <div className="flex items-center gap-1 flex-wrap">
                  {["Gold", "35 mm", "Free shipping"].map((attr) => (
                    <span key={attr} className="text-[7px] font-medium px-1.5 py-0.5 rounded" style={{ background: "#f5e9c8", color: "#7a5a18" }}>
                      {attr}
                    </span>
                  ))}
                </div>

                {/* stars */}
                <div className="flex items-center gap-1">
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((n) => <Star key={n} filled={n <= 5} />)}
                  </div>
                  <span className="text-[7.5px] text-[#8a7050]">4.9 · 148 reviews</span>
                </div>

                {/* CTA */}
                <button
                  className="w-full flex items-center justify-center gap-1.5 rounded-full text-[9px] font-bold text-white shadow"
                  style={{ background: "linear-gradient(135deg,#3e2512 0%,#7a4a10 100%)", paddingTop: 5, paddingBottom: 5 }}
                >
                  <ShoppingBag className="h-2.5 w-2.5" />
                  Add to bag
                </button>
              </div>
            </div>
          </div>

          {/* ── "You may also like" mini-carousel ── */}
          <div className="flex items-end gap-1.5">
            <div className="shrink-0 rounded-full overflow-hidden mb-0.5 shadow-sm" style={{ width: 22, height: 22 }}>
              <AureliaAvatar size={22} />
            </div>
            <div>
              <p className="text-[7.5px] text-[#9a7850] mb-1 pl-0.5 font-medium tracking-wide">You may also like</p>
              <div className="flex gap-1.5">
                {miniCards.map(({ id, name, price, Illustration }) => (
                  <div
                    key={id}
                    className="flex flex-col overflow-hidden rounded-xl shadow"
                    style={{ width: 92, border: "1px solid #ddd0b0", background: "linear-gradient(160deg,#fffdf7 0%,#fef3d8 100%)" }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{ height: 64, background: "linear-gradient(135deg,#f8efd5 0%,#e8d490 50%,#d0b060 100%)" }}
                    >
                      <Illustration />
                    </div>
                    <div className="px-1.5 py-1.5 flex flex-col gap-0.5">
                      <p className="text-[7.5px] font-semibold text-[#1e1008] leading-tight">{name}</p>
                      <p className="text-[8px] font-bold text-[#9a6820]">{price}</p>
                      <button
                        className="mt-0.5 w-full text-[6.5px] font-bold rounded-full text-white"
                        style={{ background: "linear-gradient(135deg,#c9a84c 0%,#7a4e10 100%)", paddingTop: 3, paddingBottom: 3 }}
                      >
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── typing indicator ── */}
          <div className="flex items-end gap-1.5">
            <div className="shrink-0 rounded-full overflow-hidden mb-0.5 shadow-sm" style={{ width: 22, height: 22 }}>
              <AureliaAvatar size={22} />
            </div>
            <div
              className="rounded-2xl rounded-bl-sm px-3 py-2.5 shadow-sm flex items-center gap-1"
              style={{ background: "#fffdf7", border: "1px solid #e8dcc8" }}
            >
              {[0, 140, 280].map((delay) => (
                <span
                  key={delay}
                  className="block rounded-full animate-bounce"
                  style={{ width: 5, height: 5, background: "#c9a84c", animationDelay: `${delay}ms` }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── QUICK-REPLY CHIPS ── */}
      <div
        className="shrink-0 flex items-center gap-1.5 px-2.5 py-1.5 border-t border-[#e0d0b0]"
        style={{ background: "#f2e8d8" }}
      >
        {chips.map((chip) => (
          <button
            key={chip}
            className="shrink-0 whitespace-nowrap text-[8px] font-semibold rounded-full px-2.5 py-1"
            style={{ border: "1.5px solid #c9a84c", color: "#7a4e10", background: "linear-gradient(135deg,#fffdf7 0%,#fef0cc 100%)" }}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* ── INPUT BAR ── */}
      <div
        className="shrink-0 flex items-center gap-2 px-2.5 py-2 border-t border-[#e0d0b0]"
        style={{ background: "#fffdf7" }}
      >
        {/* + attach */}
        <button
          className="shrink-0 flex items-center justify-center rounded-full shadow-sm"
          style={{ width: 28, height: 28, background: "linear-gradient(135deg,#f0e4c0 0%,#dfc870 100%)", color: "#6a3e10" }}
          aria-label="Add attachment"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>

        {/* text field */}
        <div
          className="flex-1 flex items-center rounded-full px-3"
          style={{ height: 28, background: "#f5ede0", border: "1.5px solid #d8c8a0" }}
        >
          <p className="text-[9px] text-[#b8a080] select-none">Message Aurelia…</p>
        </div>

        {/* mic */}
        <button className="shrink-0 text-[#b0987a]" aria-label="Voice message">
          <Mic className="h-[15px] w-[15px]" />
        </button>

        {/* send */}
        <button
          className="shrink-0 flex items-center justify-center rounded-full shadow"
          style={{ width: 28, height: 28, background: "linear-gradient(135deg,#c9a84c 0%,#7a4e10 100%)" }}
          aria-label="Send message"
        >
          <Send className="h-3 w-3 text-white" />
        </button>
      </div>

    </div>
  );
}
