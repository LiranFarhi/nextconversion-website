import { Phone, Info, Heart, ShoppingBag, Paperclip, Send, Check } from "lucide-react";

// ── Inline SVG illustrations ───────────────────────────────────────────────

function HoopsIllustration() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* left hoop */}
      <ellipse cx="26" cy="38" rx="14" ry="15" stroke="#c9a84c" strokeWidth="5" fill="none"/>
      <ellipse cx="26" cy="38" rx="14" ry="15" stroke="#f0d060" strokeWidth="2.5" fill="none" opacity="0.5"/>
      {/* hammered texture marks on left hoop */}
      <circle cx="14" cy="32" r="1.2" fill="#b8842a" opacity="0.7"/>
      <circle cx="17" cy="25" r="1" fill="#b8842a" opacity="0.6"/>
      <circle cx="25" cy="23" r="1.1" fill="#b8842a" opacity="0.5"/>
      <circle cx="37" cy="30" r="1" fill="#b8842a" opacity="0.6"/>
      {/* earring post left */}
      <rect x="24.5" y="21" width="3" height="5" rx="1.5" fill="#c9a84c"/>
      {/* right hoop */}
      <ellipse cx="48" cy="38" rx="14" ry="15" stroke="#c9a84c" strokeWidth="5" fill="none"/>
      <ellipse cx="48" cy="38" rx="14" ry="15" stroke="#f0d060" strokeWidth="2.5" fill="none" opacity="0.5"/>
      {/* hammered texture marks on right hoop */}
      <circle cx="36" cy="32" r="1.2" fill="#b8842a" opacity="0.7"/>
      <circle cx="39" cy="25" r="1" fill="#b8842a" opacity="0.6"/>
      <circle cx="47" cy="23" r="1.1" fill="#b8842a" opacity="0.5"/>
      <circle cx="59" cy="30" r="1" fill="#b8842a" opacity="0.6"/>
      {/* earring post right */}
      <rect x="46.5" y="21" width="3" height="5" rx="1.5" fill="#c9a84c"/>
      {/* shine highlights */}
      <path d="M14 32 Q12 28 16 25" stroke="#f5e070" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M36 32 Q34 28 38 25" stroke="#f5e070" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

function PearlPendantIllustration() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* chain links */}
      <path d="M36 6 L36 22" stroke="#c9a84c" strokeWidth="1.8" strokeDasharray="3 2"/>
      {/* bail / connector */}
      <ellipse cx="36" cy="24" rx="4" ry="3" stroke="#c9a84c" strokeWidth="2" fill="none"/>
      {/* thin drop chain segment */}
      <line x1="36" y1="27" x2="36" y2="36" stroke="#c9a84c" strokeWidth="1.5"/>
      {/* main pearl */}
      <circle cx="36" cy="47" r="12" fill="url(#pearlGrad)" stroke="#d4c9b0" strokeWidth="1"/>
      {/* pearl lustre / highlight */}
      <ellipse cx="32" cy="42" rx="4" ry="3" fill="white" opacity="0.55"/>
      <ellipse cx="31" cy="41" rx="2" ry="1.5" fill="white" opacity="0.75"/>
      {/* soft shadow edge */}
      <circle cx="36" cy="47" r="12" stroke="#b0a090" strokeWidth="0.5" fill="none" opacity="0.4"/>
      {/* small accent pearl */}
      <circle cx="44" cy="55" r="3.5" fill="url(#pearlGrad2)" stroke="#d4c9b0" strokeWidth="0.8"/>
      <ellipse cx="43" cy="54" rx="1.2" ry="0.9" fill="white" opacity="0.65"/>
      <defs>
        <radialGradient id="pearlGrad" cx="38%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="40%" stopColor="#f0ece4"/>
          <stop offset="100%" stopColor="#d8d0c0"/>
        </radialGradient>
        <radialGradient id="pearlGrad2" cx="38%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#d8d0c0"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

function StackingRingsIllustration() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* bottom ring — wider band, rose gold tint */}
      <ellipse cx="36" cy="54" rx="20" ry="6" stroke="#d4956a" strokeWidth="5" fill="none"/>
      <ellipse cx="36" cy="54" rx="20" ry="6" stroke="#f0b07a" strokeWidth="2" fill="none" opacity="0.5"/>
      {/* middle ring — plain gold */}
      <ellipse cx="36" cy="44" rx="18" ry="5.5" stroke="#c9a84c" strokeWidth="5" fill="none"/>
      <ellipse cx="36" cy="44" rx="18" ry="5.5" stroke="#f0d060" strokeWidth="2" fill="none" opacity="0.5"/>
      {/* top ring — thin with gem */}
      <ellipse cx="36" cy="34" rx="16" ry="5" stroke="#c9a84c" strokeWidth="4" fill="none"/>
      <ellipse cx="36" cy="34" rx="16" ry="5" stroke="#f0d060" strokeWidth="1.5" fill="none" opacity="0.5"/>
      {/* gem on top ring */}
      <polygon points="36,26 40,31 36,32 32,31" fill="#a8c8e0" opacity="0.9"/>
      <polygon points="36,26 40,31 36,29" fill="white" opacity="0.5"/>
      <polygon points="36,32 40,31 36,34 32,31" fill="#6898b8" opacity="0.7"/>
      {/* inner band fills to look solid */}
      <ellipse cx="36" cy="54" rx="15" ry="2" fill="#f0e8d8" opacity="0.6"/>
      <ellipse cx="36" cy="44" rx="13" ry="1.8" fill="#f0e8d8" opacity="0.6"/>
      <ellipse cx="36" cy="34" rx="12" ry="1.5" fill="#f0e8d8" opacity="0.6"/>
      {/* shine highlights */}
      <path d="M20 52 Q18 50 22 48" stroke="#f5e070" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6"/>
      <path d="M20 42 Q18 40 22 38" stroke="#f5e070" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

function TwistBangleIllustration() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* outer bangle ellipse */}
      <ellipse cx="36" cy="40" rx="24" ry="11" stroke="#c9a84c" strokeWidth="6" fill="none"/>
      <ellipse cx="36" cy="40" rx="24" ry="11" stroke="#f0d060" strokeWidth="2.5" fill="none" opacity="0.4"/>
      {/* twist grooves — upper arc */}
      <path d="M14 36 Q20 30 36 29 Q52 30 58 36" stroke="#b8842a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.7"/>
      <path d="M14 38 Q20 32 36 31 Q52 32 58 38" stroke="#f5e070" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M14 40 Q20 34 36 33 Q52 34 58 40" stroke="#b8842a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.6"/>
      {/* twist grooves — lower arc */}
      <path d="M14 42 Q20 48 36 49 Q52 48 58 42" stroke="#b8842a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M14 44 Q20 50 36 51 Q52 50 58 44" stroke="#f5e070" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.4"/>
      {/* inner ellipse for 3-D look */}
      <ellipse cx="36" cy="40" rx="18" ry="5" fill="#f5edda" opacity="0.5"/>
      {/* shine highlight on top-left */}
      <path d="M15 37 Q22 30 32 29" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6"/>
      {/* small gold balls at ends of twist (decorative) */}
      <circle cx="12" cy="40" r="3.5" fill="url(#ballGrad)"/>
      <circle cx="60" cy="40" r="3.5" fill="url(#ballGrad)"/>
      <defs>
        <radialGradient id="ballGrad" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#f5e080"/>
          <stop offset="100%" stopColor="#9c6a20"/>
        </radialGradient>
      </defs>
    </svg>
  );
}

// ── Product data ───────────────────────────────────────────────────────────

const products = [
  {
    id: "hoops",
    name: "Hammered Gold Hoops",
    price: "$240",
    sub: "18k gold-plated · hand-finished",
    badge: "Bestseller",
    Illustration: HoopsIllustration,
    bg: "from-[#f7e9c0] to-[#edd690]",
  },
  {
    id: "pearl",
    name: "Pearl Drop Pendant",
    price: "$310",
    sub: "Freshwater pearl · gold chain",
    badge: "New",
    Illustration: PearlPendantIllustration,
    bg: "from-[#f0ece4] to-[#ddd8cc]",
  },
  {
    id: "rings",
    name: "Stacking Ring Set",
    price: "$185",
    sub: "Set of 3 · mixed metals",
    badge: null,
    Illustration: StackingRingsIllustration,
    bg: "from-[#f7e9c0] to-[#e8d08a]",
  },
  {
    id: "bangle",
    name: "Twist Bangle",
    price: "$260",
    sub: "Hand-twisted · solid brass",
    badge: null,
    Illustration: TwistBangleIllustration,
    bg: "from-[#f7e9c0] to-[#edd690]",
  },
] as const;

// ── Component ──────────────────────────────────────────────────────────────

export default function JewelryChat() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#faf7f2]">

      {/* ── Header ── */}
      <div className="flex items-center gap-2.5 bg-white px-3 py-2.5 shadow-sm border-b border-[#e8dfc8] shrink-0">
        <div className="relative shrink-0">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#c9a84c] via-[#e8c96a] to-[#b8965a] flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-semibold select-none">A</span>
          </div>
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-[#3a1f3a] leading-tight truncate">Aurelia Concierge</p>
          <p className="text-[9px] text-green-600 leading-tight">Personal stylist · online</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <Phone className="h-4 w-4 text-[#9c7a3c]" />
          <Info className="h-4 w-4 text-[#9c7a3c]" />
        </div>
      </div>

      {/* ── Message thread ── */}
      <div className="flex flex-1 flex-col gap-2.5 overflow-y-auto px-3 py-3 min-h-0">

        {/* date divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-[#e0d5bf]" />
          <span className="text-[8px] text-[#a0896e] px-1 select-none">Today</span>
          <div className="flex-1 h-px bg-[#e0d5bf]" />
        </div>

        {/* assistant greeting */}
        <div className="flex items-end gap-1.5" style={{ maxWidth: "84%" }}>
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5 select-none">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          <div>
            <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm border border-[#ede4d0]">
              <p className="text-[10px] text-[#3a1f3a] leading-relaxed">
                Welcome to <span className="font-semibold text-[#9c7a3c]">Aurelia</span> ✨ I&apos;m your personal stylist. Treating yourself or looking for a beautiful gift today?
              </p>
            </div>
            <p className="mt-0.5 text-[8px] text-[#a0896e] pl-1">10:14 AM</p>
          </div>
        </div>

        {/* assistant lead-in to recommendations */}
        <div className="flex items-end gap-1.5" style={{ maxWidth: "84%" }}>
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5 select-none">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm border border-[#ede4d0]">
            <p className="text-[10px] text-[#3a1f3a] leading-relaxed">
              Here are our most-loved handcrafted pieces right now — each one made to last and designed to feel effortless every day ✨
            </p>
          </div>
        </div>

        {/* ── Product carousel row ── */}
        <div className="flex items-end gap-1.5 w-full">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5 self-end select-none">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          {/* scrollable row — clips gracefully, no page overflow */}
          <div className="flex gap-2 overflow-x-auto pb-1 min-w-0 flex-1" style={{ scrollbarWidth: "none" }}>
            {products.map(({ id, name, price, sub, badge, Illustration, bg }) => (
              <div
                key={id}
                className="shrink-0 w-[130px] rounded-2xl bg-white overflow-hidden shadow border border-[#ede4d0] flex flex-col"
              >
                {/* illustration tile */}
                <div className={`relative flex items-center justify-center h-[100px] bg-gradient-to-br ${bg}`}>
                  <Illustration />
                  {badge && (
                    <span className="absolute top-1.5 left-1.5 bg-[#3a1f3a] text-[#f0e0a0] text-[7px] font-semibold px-1.5 py-0.5 rounded-full leading-none">
                      {badge}
                    </span>
                  )}
                  <button
                    className="absolute top-1.5 right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white/80 text-[#c9a84c] shadow-sm"
                    aria-label={`Wishlist ${name}`}
                  >
                    <Heart className="h-3 w-3" />
                  </button>
                </div>
                {/* card body */}
                <div className="px-2 pt-1.5 pb-2 flex flex-col gap-1 flex-1">
                  <p className="text-[9.5px] font-semibold text-[#3a1f3a] leading-tight line-clamp-2">{name}</p>
                  <p className="text-[10px] text-[#9c7a3c] font-bold leading-none">{price}</p>
                  <p className="text-[8px] text-[#8a7060] leading-snug">{sub}</p>
                  <button className="mt-auto w-full bg-[#3a1f3a] text-white text-[8px] font-semibold rounded-full py-1 flex items-center justify-center gap-1">
                    <ShoppingBag className="h-2.5 w-2.5" />
                    Add to bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* user reply */}
        <div className="flex justify-end">
          <div style={{ maxWidth: "72%" }}>
            <div className="rounded-2xl rounded-br-sm bg-gradient-to-br from-[#c9a84c] to-[#9c7a3c] px-3 py-2 shadow-sm">
              <p className="text-[10px] text-white leading-relaxed">
                Love the hoops — gift wrapped? 🎁
              </p>
            </div>
            <div className="mt-0.5 flex items-center justify-end gap-1 pr-1">
              <p className="text-[8px] text-[#a0896e]">10:17 AM</p>
              <Check className="h-2.5 w-2.5 text-[#c9a84c]" />
              <Check className="h-2.5 w-2.5 -ml-1.5 text-[#c9a84c]" />
            </div>
          </div>
        </div>

        {/* assistant reply with mini product chip */}
        <div className="flex items-end gap-1.5" style={{ maxWidth: "88%" }}>
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5 select-none">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          <div>
            <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm border border-[#ede4d0]">
              <p className="text-[10px] text-[#3a1f3a] leading-relaxed">
                Absolutely! Every order ships in our signature ivory box with a satin ribbon — gift-ready at no extra charge. I&apos;ve added the Hoops:
              </p>
              {/* mini product chip */}
              <div className="mt-2 flex items-center gap-2 rounded-xl bg-[#faf7f2] border border-[#e8dfc8] px-2 py-1.5">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#f7e9c0] to-[#edd690] flex items-center justify-center shrink-0 overflow-hidden">
                  <HoopsIllustration />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-semibold text-[#3a1f3a] leading-tight truncate">Hammered Gold Hoops</p>
                  <p className="text-[9px] text-[#9c7a3c] font-bold">$240 · Gift wrap ✓</p>
                </div>
                <button className="shrink-0 bg-[#3a1f3a] text-white text-[7px] font-semibold rounded-full px-2 py-0.5">
                  View
                </button>
              </div>
            </div>
            <p className="mt-0.5 text-[8px] text-[#a0896e] pl-1">10:18 AM</p>
          </div>
        </div>

        {/* typing indicator */}
        <div className="flex items-end gap-1.5">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5 select-none">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          <div className="rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 shadow-sm border border-[#ede4d0]">
            <div className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c] animate-bounce" style={{ animationDelay: "0ms" }} />
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c] animate-bounce" style={{ animationDelay: "150ms" }} />
              <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c] animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>

      </div>

      {/* ── Quick-reply chips ── */}
      <div className="flex gap-1.5 overflow-x-auto px-3 py-2 bg-[#faf7f2] border-t border-[#e8dfc8] shrink-0" style={{ scrollbarWidth: "none" }}>
        {["Earrings", "Under $250", "Gift wrap", "Book a call"].map((chip) => (
          <button
            key={chip}
            className="shrink-0 rounded-full border border-[#c9a84c] bg-white px-2.5 py-1 text-[9px] font-medium text-[#9c7a3c] whitespace-nowrap"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* ── Input bar ── */}
      <div className="flex items-center gap-2 bg-white px-3 py-2.5 border-t border-[#e8dfc8] shrink-0">
        <button className="shrink-0 text-[#a0896e]" aria-label="Attach file">
          <Paperclip className="h-4 w-4" />
        </button>
        <div className="flex-1 rounded-full bg-[#faf7f2] border border-[#e0d5bf] px-3 py-1.5">
          <p className="text-[10px] text-[#c4aa88]">Message Aurelia...</p>
        </div>
        <button className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#c9a84c] to-[#9c7a3c] shadow-sm" aria-label="Send message">
          <Send className="h-3.5 w-3.5 text-white" />
        </button>
      </div>

    </div>
  );
}
