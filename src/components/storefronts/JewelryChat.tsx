import { Phone, Info, Heart, ShoppingBag, Paperclip, Send, Check } from "lucide-react";

export default function JewelryChat() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#faf7f2]">
      {/* Header */}
      <div className="flex items-center gap-2.5 bg-white px-3 py-2.5 shadow-sm border-b border-[#e8dfc8]">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-[#c9a84c] via-[#e8c96a] to-[#b8965a] flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-semibold">A</span>
          </div>
          <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-white" />
        </div>
        {/* Name */}
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-semibold text-[#3a1f3a] leading-tight truncate">Aurelia Concierge</p>
          <p className="text-[9px] text-green-600 leading-tight">Personal stylist · online</p>
        </div>
        {/* Icons */}
        <div className="flex items-center gap-2 shrink-0">
          <Phone className="h-4 w-4 text-[#9c7a3c]" />
          <Info className="h-4 w-4 text-[#9c7a3c]" />
        </div>
      </div>

      {/* Message thread */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-3 py-3">

        {/* Date divider */}
        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-[#e0d5bf]" />
          <span className="text-[8px] text-[#a0896e] px-1">Today</span>
          <div className="flex-1 h-px bg-[#e0d5bf]" />
        </div>

        {/* Assistant greeting */}
        <div className="flex items-end gap-1.5 max-w-[82%]">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          <div>
            <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm border border-[#ede4d0]">
              <p className="text-[10px] text-[#3a1f3a] leading-relaxed">
                Hello! Welcome to <span className="font-semibold text-[#9c7a3c]">Aurelia</span> ✨ I&apos;m your personal stylist today. Tell me a little about the occasion — are we treating ourselves or finding a beautiful gift?
              </p>
            </div>
            <p className="mt-0.5 text-[8px] text-[#a0896e] pl-1">10:14 AM</p>
          </div>
        </div>

        {/* Assistant suggestion */}
        <div className="flex items-end gap-1.5 max-w-[82%]">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          <div>
            <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm border border-[#ede4d0]">
              <p className="text-[10px] text-[#3a1f3a] leading-relaxed">
                Based on what&apos;s been flying out of our studio this season, I think you&apos;d adore our hand-hammered gold pieces. They&apos;re the kind of earrings that feel effortless with a linen blouse or a special dinner look. Here&apos;s my top pick for you —
              </p>
            </div>
          </div>
        </div>

        {/* Product card bubble */}
        <div className="flex items-end gap-1.5 max-w-[82%]">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          <div className="rounded-2xl rounded-bl-sm bg-white overflow-hidden shadow-sm border border-[#ede4d0] w-44">
            {/* Faked product image */}
            <div className="relative h-24 w-full bg-gradient-to-br from-[#f0e0a0] via-[#d4a832] to-[#b8842a] flex items-center justify-center">
              {/* decorative hoops */}
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="28" r="13" stroke="rgba(255,255,255,0.85)" strokeWidth="4" fill="none"/>
                <circle cx="38" cy="28" r="13" stroke="rgba(255,255,255,0.6)" strokeWidth="4" fill="none"/>
              </svg>
              <span className="absolute top-1.5 left-1.5 bg-[#3a1f3a] text-[#f0e0a0] text-[8px] font-semibold px-1.5 py-0.5 rounded-full">New</span>
            </div>
            <div className="px-2.5 py-2">
              <p className="text-[10px] font-semibold text-[#3a1f3a] leading-tight">Hammered Gold Hoops</p>
              <p className="text-[9px] text-[#9c7a3c] font-bold mt-0.5">$240</p>
              <p className="text-[8px] text-[#8a7060] mt-0.5 leading-snug">18k gold-plated · hand-finished</p>
              <div className="mt-2 flex items-center gap-1.5">
                <button className="flex-1 bg-[#3a1f3a] text-white text-[8px] font-semibold rounded-full py-1 px-2 flex items-center justify-center gap-1">
                  <ShoppingBag className="h-2.5 w-2.5" />
                  Add to bag
                </button>
                <button className="flex h-5 w-5 items-center justify-center rounded-full border border-[#e0d5bf] text-[#c9a84c]">
                  <Heart className="h-3 w-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* User reply */}
        <div className="flex justify-end">
          <div className="max-w-[72%]">
            <div className="rounded-2xl rounded-br-sm bg-gradient-to-br from-[#c9a84c] to-[#9c7a3c] px-3 py-2 shadow-sm">
              <p className="text-[10px] text-white leading-relaxed">
                Love these! Do they come in rose gold? Also wondering about pearl options 🌸
              </p>
            </div>
            <div className="mt-0.5 flex items-center justify-end gap-1 pr-1">
              <p className="text-[8px] text-[#a0896e]">10:17 AM</p>
              <Check className="h-2.5 w-2.5 text-[#c9a84c]" />
              <Check className="h-2.5 w-2.5 -ml-1.5 text-[#c9a84c]" />
            </div>
          </div>
        </div>

        {/* Assistant answer */}
        <div className="flex items-end gap-1.5 max-w-[85%]">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5">
            <span className="text-white text-[9px] font-semibold">A</span>
          </div>
          <div>
            <div className="rounded-2xl rounded-bl-sm bg-white px-3 py-2 shadow-sm border border-[#ede4d0]">
              <p className="text-[10px] text-[#3a1f3a] leading-relaxed">
                What a lovely eye! The Hammered Hoops are only in warm gold for now — but if rose gold is calling you, our artisan can do a custom finish (just 2 extra days). And for pearls, this is one of our most-adored pieces right now:
              </p>
              {/* Mini product chip */}
              <div className="mt-2 flex items-center gap-2 rounded-xl bg-[#faf7f2] border border-[#e8dfc8] px-2 py-1.5">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#f5f0e8] via-[#e8dfc8] to-[#d4c9b0] flex items-center justify-center shrink-0">
                  {/* Pearl drop */}
                  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="9" y1="0" x2="9" y2="8" stroke="#c9a84c" strokeWidth="1.5"/>
                    <circle cx="9" cy="15" r="6" fill="white" stroke="#d4c9b0" strokeWidth="1"/>
                    <circle cx="7" cy="13" r="1.5" fill="rgba(255,255,255,0.8)"/>
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[9px] font-semibold text-[#3a1f3a] leading-tight truncate">Pearl Drop Pendant</p>
                  <p className="text-[9px] text-[#9c7a3c] font-bold">$310</p>
                </div>
                <button className="shrink-0 bg-[#3a1f3a] text-white text-[7px] font-semibold rounded-full px-1.5 py-0.5">
                  View
                </button>
              </div>
            </div>
            <p className="mt-0.5 text-[8px] text-[#a0896e] pl-1">10:18 AM</p>
          </div>
        </div>

        {/* Typing indicator */}
        <div className="flex items-end gap-1.5">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-[#c9a84c] to-[#b8965a] flex items-center justify-center shrink-0 mb-0.5">
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

      {/* Quick reply chips */}
      <div className="flex gap-1.5 overflow-x-auto px-3 py-2 bg-[#faf7f2] border-t border-[#e8dfc8] scrollbar-hide">
        {["Show earrings", "Under $200", "Gift wrap ✨", "Book a call"].map((chip) => (
          <button
            key={chip}
            className="shrink-0 rounded-full border border-[#c9a84c] bg-white px-2.5 py-1 text-[9px] font-medium text-[#9c7a3c] whitespace-nowrap hover:bg-[#f5edda] transition-colors"
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Input bar */}
      <div className="flex items-center gap-2 bg-white px-3 py-2.5 border-t border-[#e8dfc8]">
        <button className="shrink-0 text-[#a0896e]">
          <Paperclip className="h-4 w-4" />
        </button>
        <div className="flex-1 rounded-full bg-[#faf7f2] border border-[#e0d5bf] px-3 py-1.5">
          <p className="text-[10px] text-[#c4aa88]">Message Aurelia...</p>
        </div>
        <button className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#c9a84c] to-[#9c7a3c] shadow-sm">
          <Send className="h-3.5 w-3.5 text-white" />
        </button>
      </div>
    </div>
  );
}
