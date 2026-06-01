import { Flame, ShoppingCart, Zap } from "lucide-react";

const deals = [
  {
    title: "Wireless Earbuds",
    sale: "$14.99",
    original: "$49.99",
    discount: "-70%",
    rating: "4.8",
    reviews: "2.1k",
    stock: 18,
    gradient: "from-violet-300 via-indigo-200 to-blue-300",
    badgeColor: "bg-red-500",
    accentColor: "bg-orange-400",
  },
  {
    title: "Oversized Hoodie",
    sale: "$19.99",
    original: "$44.99",
    discount: "-55%",
    rating: "4.7",
    reviews: "1.4k",
    stock: 32,
    gradient: "from-rose-200 via-pink-200 to-fuchsia-200",
    badgeColor: "bg-orange-500",
    accentColor: "bg-yellow-400",
  },
  {
    title: "LED Strip Lights",
    sale: "$8.49",
    original: "$21.99",
    discount: "-60%",
    rating: "4.9",
    reviews: "3.8k",
    stock: 9,
    gradient: "from-emerald-200 via-teal-200 to-cyan-200",
    badgeColor: "bg-red-500",
    accentColor: "bg-red-400",
  },
  {
    title: "Phone Stand",
    sale: "$5.99",
    original: "$11.99",
    discount: "-50%",
    rating: "4.6",
    reviews: "876",
    stock: 44,
    gradient: "from-amber-200 via-yellow-100 to-orange-200",
    badgeColor: "bg-orange-500",
    accentColor: "bg-orange-400",
  },
  {
    title: "Canvas Tote Bag",
    sale: "$7.99",
    original: "$14.99",
    discount: "-45%",
    rating: "4.7",
    reviews: "1.2k",
    stock: 61,
    gradient: "from-sky-200 via-blue-100 to-indigo-200",
    badgeColor: "bg-yellow-500",
    accentColor: "bg-yellow-400",
  },
  {
    title: "Cozy Throw Blanket",
    sale: "$12.99",
    original: "$27.99",
    discount: "-54%",
    rating: "4.8",
    reviews: "994",
    stock: 23,
    gradient: "from-lime-200 via-green-100 to-emerald-200",
    badgeColor: "bg-red-500",
    accentColor: "bg-green-400",
  },
];

const categories = ["All", "Tech", "Home", "Fashion", "Under $10"];

export default function BudgetDeals() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-gray-950 font-sans">

      {/* ── Top Bar ── */}
      <header className="flex items-center justify-between bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 px-3 py-2 shrink-0">
        {/* Wordmark + badge */}
        <div className="flex items-center gap-1.5">
          <span className="text-[15px] font-black tracking-tight text-white drop-shadow">
            DealDrop
          </span>
          <span className="flex items-center gap-0.5 rounded-full bg-white/20 px-1.5 py-0.5 text-[8px] font-black uppercase tracking-wide text-white shadow-inner">
            <Flame size={8} strokeWidth={2.5} />
            MEGA DEALS
          </span>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-1">
          <span className="text-[7px] font-semibold uppercase tracking-wide text-white/80">
            Ends in
          </span>
          {["02", "14", "09"].map((seg, i) => (
            <span key={i} className="flex items-center gap-0.5">
              <span className="flex h-5 min-w-[18px] items-center justify-center rounded bg-gray-900/70 px-0.5 text-[10px] font-black tabular-nums text-yellow-300">
                {seg}
              </span>
              {i < 2 && (
                <span className="text-[10px] font-black leading-none text-white/70">
                  :
                </span>
              )}
            </span>
          ))}
        </div>
      </header>

      {/* ── Ribbon Banner ── */}
      <div className="shrink-0 overflow-hidden bg-yellow-400 py-1">
        <div className="flex whitespace-nowrap">
          <span className="animate-[marquee_12s_linear_infinite] text-[8px] font-bold uppercase tracking-widest text-gray-900 pr-8">
            🚀 FREE shipping over $25 &nbsp;·&nbsp; Extra 10% with code{" "}
            <span className="rounded bg-gray-900 px-1 py-0.5 text-yellow-300">
              SAVE10
            </span>
            &nbsp;·&nbsp; 🔥 Flash deals updated every hour &nbsp;·&nbsp; FREE shipping over $25
            &nbsp;·&nbsp; Extra 10% with code{" "}
            <span className="rounded bg-gray-900 px-1 py-0.5 text-yellow-300">
              SAVE10
            </span>
            &nbsp;·&nbsp; 🚀 Flash deals updated every hour &nbsp;&nbsp;
          </span>
        </div>
      </div>

      {/* ── Category Chips ── */}
      <div className="flex shrink-0 gap-1.5 overflow-x-auto px-3 pb-2 pt-2 scrollbar-none">
        {categories.map((cat, i) => (
          <span
            key={cat}
            className={`shrink-0 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide ${
              i === 0
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/40"
                : "bg-gray-800 text-gray-300"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      {/* ── Section header ── */}
      <div className="flex shrink-0 items-center justify-between px-3 pb-1.5">
        <div className="flex items-center gap-1">
          <Zap size={10} strokeWidth={2.5} className="text-yellow-400" />
          <span className="text-[10px] font-black uppercase tracking-wider text-white">
            Flash Deals
          </span>
        </div>
        <span className="text-[8px] font-semibold text-orange-400">
          View all ›
        </span>
      </div>

      {/* ── Deal Grid ── */}
      <div className="flex-1 overflow-y-auto px-3 pb-3">
        <div className="grid grid-cols-2 gap-2">
          {deals.map((deal) => (
            <div
              key={deal.title}
              className="relative flex flex-col overflow-hidden rounded-xl bg-gray-900 shadow-lg"
            >
              {/* Product image block */}
              <div
                className={`relative w-full bg-gradient-to-br ${deal.gradient} flex items-center justify-center`}
                style={{ aspectRatio: "1/1" }}
              >
                {/* Discount badge */}
                <span
                  className={`absolute left-0 top-0 rounded-br-xl ${deal.badgeColor} px-1.5 py-0.5 text-[9px] font-black text-white shadow`}
                >
                  {deal.discount}
                </span>

                {/* Abstract product shape */}
                <div className="flex flex-col items-center gap-0.5 opacity-25">
                  <div className="h-6 w-8 rounded-lg border-2 border-gray-600" />
                  <div className="h-4 w-10 rounded border-2 border-gray-600" />
                </div>

                {/* Accent dot */}
                <div
                  className={`absolute bottom-1.5 right-1.5 h-2.5 w-2.5 rounded-full ${deal.accentColor} opacity-80`}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-1 px-2 pb-2 pt-1.5">
                {/* Title */}
                <span className="truncate text-[9px] font-semibold leading-tight text-gray-100">
                  {deal.title}
                </span>

                {/* Prices */}
                <div className="flex items-baseline gap-1">
                  <span className="text-[12px] font-black text-orange-400">
                    {deal.sale}
                  </span>
                  <span className="text-[8px] font-medium text-gray-500 line-through">
                    {deal.original}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-0.5">
                  <span className="text-[8px] font-bold text-yellow-400">
                    {deal.rating} ★
                  </span>
                  <span className="text-[7px] text-gray-500">
                    ({deal.reviews})
                  </span>
                </div>

                {/* Stock bar */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[7px] font-semibold text-red-400">
                      Almost gone
                    </span>
                    <span className="text-[7px] text-gray-600">
                      {deal.stock} left
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-gray-700">
                    <div
                      className={`h-full rounded-full ${deal.stock < 20 ? "bg-red-500" : "bg-orange-400"}`}
                      style={{ width: `${Math.min(deal.stock, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Add button */}
                <button className="mt-0.5 flex w-full items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 py-1.5 text-[9px] font-black uppercase tracking-wide text-white shadow-md shadow-orange-500/30">
                  <ShoppingCart size={9} strokeWidth={2.5} />
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom promo strip ── */}
        <div className="mt-3 flex items-center justify-between rounded-xl bg-gradient-to-r from-red-600 to-orange-500 px-4 py-3 shadow-lg shadow-orange-500/20">
          <div>
            <p className="text-[8px] font-black uppercase tracking-widest text-yellow-300">
              Members Only
            </p>
            <p className="mt-0.5 text-[10px] font-black leading-tight text-white">
              Extra 10% every drop 🔥
            </p>
          </div>
          <button className="rounded-full bg-yellow-400 px-3 py-1.5 text-[8px] font-black uppercase tracking-wider text-gray-900 shadow">
            Join Free
          </button>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
