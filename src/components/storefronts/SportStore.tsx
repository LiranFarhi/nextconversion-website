import { Search, User, ShoppingCart, Heart, Truck, RotateCcw, Leaf, Plus } from "lucide-react";

const products = [
  {
    name: "Seamless Leggings",
    price: "$98",
    gradient: "from-slate-300 via-stone-200 to-slate-400",
    accent: "bg-lime-400",
    tag: "Best Seller",
  },
  {
    name: "Sculpt Bra",
    price: "$64",
    gradient: "from-stone-200 via-slate-300 to-zinc-300",
    accent: "bg-violet-300",
    tag: "New",
  },
  {
    name: "Featherlight Jacket",
    price: "$145",
    gradient: "from-zinc-300 via-slate-200 to-stone-300",
    accent: "bg-lime-300",
    tag: "Editor's Pick",
  },
  {
    name: "Performance Tee",
    price: "$52",
    gradient: "from-slate-200 via-zinc-200 to-stone-200",
    accent: "bg-violet-200",
    tag: null,
  },
];

const trustItems = [
  { icon: <Truck size={10} strokeWidth={1.8} />, label: "Free shipping over $75" },
  { icon: <RotateCcw size={10} strokeWidth={1.8} />, label: "30-day returns" },
  { icon: <Leaf size={10} strokeWidth={1.8} />, label: "Carbon neutral" },
];

export default function SportStore() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-stone-50 font-sans">
      {/* ── Top Nav ── */}
      <header className="flex items-center justify-between border-b border-stone-200 bg-white/90 px-3 py-2 backdrop-blur-sm">
        {/* Wordmark */}
        <span className="text-[13px] font-black tracking-[0.18em] text-stone-800">
          AERIS
        </span>

        {/* Nav links */}
        <nav className="flex items-center gap-2.5">
          {["Women", "Collections", "New", "Sale"].map((link) => (
            <span
              key={link}
              className={`text-[9px] font-medium tracking-wide ${
                link === "New"
                  ? "text-lime-600 underline underline-offset-2"
                  : "text-stone-500"
              }`}
            >
              {link}
            </span>
          ))}
        </nav>

        {/* Icon cluster */}
        <div className="flex items-center gap-2 text-stone-600">
          <Search size={12} strokeWidth={1.8} />
          <User size={12} strokeWidth={1.8} />
          {/* Cart with badge */}
          <span className="relative">
            <ShoppingCart size={12} strokeWidth={1.8} />
            <span className="absolute -right-1 -top-1 flex h-3 w-3 items-center justify-center rounded-full bg-lime-500 text-[7px] font-bold leading-none text-white">
              2
            </span>
          </span>
        </div>
      </header>

      {/* ── Hero Band ── */}
      <section className="relative flex overflow-hidden" style={{ minHeight: "28%" }}>
        {/* Faked hero image — gradient block */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-200 via-slate-300 to-zinc-400" />
        {/* Subtle figure silhouette */}
        <div className="absolute bottom-0 right-4 h-full w-1/3 bg-gradient-to-t from-slate-400/60 via-slate-300/30 to-transparent rounded-tl-[40%]" />
        <div className="absolute bottom-0 right-6 h-3/4 w-1/4 bg-gradient-to-t from-slate-500/40 via-slate-400/20 to-transparent rounded-tl-[50%] rounded-tr-[30%]" />

        {/* Overlay copy */}
        <div className="relative z-10 flex flex-col justify-center px-4 py-4">
          {/* Small label */}
          <span className="mb-1 inline-flex w-fit items-center rounded-full bg-lime-400/80 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-widest text-stone-700">
            Summer &#8217;26
          </span>
          <h1 className="text-[18px] font-black leading-tight tracking-tight text-stone-800">
            Move with<br />Intention
          </h1>
          <p className="mt-1 text-[9px] font-medium leading-relaxed text-stone-600">
            Performance wear designed<br />for women who demand more.
          </p>
          <button className="mt-2.5 w-fit rounded-full bg-stone-800 px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white shadow-sm hover:bg-stone-700">
            Shop New In
          </button>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <div className="flex items-center justify-around border-b border-stone-100 bg-stone-100/70 px-2 py-1.5">
        {trustItems.map((item) => (
          <div key={item.label} className="flex items-center gap-1 text-stone-500">
            <span className="text-lime-600">{item.icon}</span>
            <span className="text-[8px] font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* ── Section header ── */}
      <div className="flex items-center justify-between px-3 pb-1 pt-2.5">
        <span className="text-[10px] font-black uppercase tracking-widest text-stone-700">
          New Arrivals
        </span>
        <span className="text-[8px] font-medium text-lime-600">
          View all &rsaquo;
        </span>
      </div>

      {/* ── Product Grid ── */}
      <div className="flex-1 overflow-y-auto px-3 pb-3">
        <div className="grid grid-cols-2 gap-2">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col overflow-hidden rounded-xl border border-stone-100 bg-white shadow-sm"
            >
              {/* Faked product image */}
              <div
                className={`relative aspect-[3/4] w-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}
              >
                {/* Accent dot decoration */}
                <div
                  className={`absolute top-1.5 left-1.5 h-3 w-3 rounded-full opacity-70 ${product.accent}`}
                />
                {/* Abstract garment shape */}
                <div className="flex flex-col items-center gap-0.5 opacity-30">
                  <div className="h-4 w-6 rounded-t-full border-2 border-stone-500/60" />
                  <div className="h-7 w-8 rounded-b-lg border-2 border-stone-500/60" />
                </div>
                {/* Tag */}
                {product.tag && (
                  <span className="absolute bottom-1.5 left-1.5 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-semibold text-stone-700 shadow-sm">
                    {product.tag}
                  </span>
                )}
                {/* Heart */}
                <button className="absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-white/80 text-stone-400 shadow-sm">
                  <Heart size={9} strokeWidth={1.8} />
                </button>
              </div>

              {/* Card body */}
              <div className="flex items-center justify-between px-2 py-1.5">
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="truncate text-[9px] font-semibold text-stone-800">
                    {product.name}
                  </span>
                  <span className="text-[9px] font-bold text-stone-600">
                    {product.price}
                  </span>
                </div>
                <button className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-stone-800 text-white shadow-sm">
                  <Plus size={9} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA strip ── */}
        <div className="mt-3 flex items-center justify-between rounded-2xl bg-gradient-to-r from-stone-800 to-zinc-700 px-4 py-3">
          <div>
            <p className="text-[9px] font-black uppercase tracking-widest text-lime-400">
              Member Exclusive
            </p>
            <p className="mt-0.5 text-[10px] font-bold leading-tight text-white">
              20% off your first order
            </p>
          </div>
          <button className="rounded-full bg-lime-400 px-3 py-1 text-[8px] font-bold uppercase tracking-wider text-stone-800 shadow-sm">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
