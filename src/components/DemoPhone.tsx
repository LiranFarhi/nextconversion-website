import Image from "next/image";
import { ShoppingBag, Search, Check, Plus, Leaf, Recycle, Droplets, Wind, Truck, Sparkles } from "lucide-react";

/* A stylised storefront phone whose screen changes per evolution step.
   Content + imagery are taken from the Figma "Storefront - Step 1..5" frames. */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[11px] font-medium text-white/90">
      <span>9:41</span>
      <span className="flex items-center gap-1">
        <span className="h-2.5 w-2.5 rounded-[3px] border border-white/60" />
        <span className="h-2 w-3 rounded-sm border border-white/60" />
      </span>
    </div>
  );
}

function Photo({ src, className, sizes = "180px" }: { src: string; className?: string; sizes?: string }) {
  return (
    <Image src={src} alt="" fill sizes={sizes} className={`object-cover ${className ?? ""}`} />
  );
}

function Step1() {
  return (
    <div className="relative h-full">
      <Photo src="/figma/sf-hero-1.png" sizes="290px" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/40" />
      <div className="relative flex h-full flex-col">
        <StatusBar />
        <div className="px-5 pt-4">
          <span className="rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white/80">
            Sponsored
          </span>
        </div>
        <div className="mt-auto px-5 pb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-green">Eco-Friendly Sportwear</p>
          <h4 className="mt-2 font-display text-3xl font-semibold leading-tight text-white">
            Performance.
            <br /> For you. For the Planet.
          </h4>
          <p className="mt-3 text-sm text-white/85">Sustainable materials. Built for movement.</p>
          <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#222]">
            Shop now
          </span>
        </div>
      </div>
    </div>
  );
}

function Step2() {
  const cats = [
    { icon: Recycle, label: "Sustainable Materials" },
    { icon: Leaf, label: "Ethical Production" },
    { icon: Droplets, label: "Low Impact Dyes" },
    { icon: Wind, label: "Carbon Conscious" },
  ];
  const best = [
    { src: "/figma/sf-p1.png", price: "$68" },
    { src: "/figma/sf-p2.png", price: "$74" },
  ];
  return (
    <div className="h-full bg-[#0c0d0a]">
      <StatusBar />
      <div className="flex items-center justify-between px-5 py-3">
        <span className="flex items-center gap-1.5 text-sm font-semibold text-white">
          <span className="grid h-5 w-5 place-items-center rounded-md bg-green/20 text-green">
            <Leaf size={12} />
          </span>
          Sustainability for you
        </span>
        <ShoppingBag size={16} className="text-white/80" />
      </div>
      <div className="relative mx-4 h-32 overflow-hidden rounded-2xl">
        <Photo src="/figma/sf-hero-2.png" sizes="260px" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10" />
        <div className="absolute inset-0 flex flex-col justify-center p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-green">Sustainable</p>
          <h4 className="mt-1 font-display text-lg font-semibold leading-tight text-white">
            Eco-Friendly
            <br />Sportwear
          </h4>
          <span className="mt-2 inline-block w-fit rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#222]">
            Shop Collection
          </span>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2 px-4">
        {cats.map((c) => (
          <div key={c.label} className="flex flex-col items-center gap-1.5 text-center">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/[0.06] text-green">
              <c.icon size={16} />
            </span>
            <span className="text-[8px] leading-tight text-white/70">{c.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-between px-5">
        <span className="text-sm font-semibold text-white">Shop Bestsellers</span>
        <span className="text-[11px] text-green">View all</span>
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3 px-4">
        {best.map((p) => (
          <div key={p.src}>
            <div className="relative h-28 overflow-hidden rounded-xl">
              <Photo src={p.src} />
            </div>
            <p className="mt-1 text-[11px] text-white/70">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step3() {
  const tabs = ["All", "Tops", "Bottoms", "Sets"];
  const products = [
    { src: "/figma/sf-p3.png", name: "Grip-Flow Bra", price: "$68", off: true },
    { src: "/figma/sf-p4.png", name: "Grip Legging", price: "$88", off: false },
    { src: "/figma/sf-p5.png", name: "Flow Tank", price: "$52", off: false },
    { src: "/figma/sf-p6.png", name: "Eco Shorts", price: "$48", off: true },
  ];
  return (
    <div className="h-full bg-[#0c0d0a]">
      <StatusBar />
      <div className="px-5 py-3">
        <h4 className="font-display text-lg font-semibold text-white">Yoga Studio Flow</h4>
        <p className="text-xs text-white/70">Performance meets planet-friendly.</p>
      </div>
      <div className="flex gap-2 overflow-hidden px-4">
        {tabs.map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1 text-[11px] ${
              i === 0 ? "bg-green text-[#0c0d0a]" : "bg-white/[0.06] text-white/70"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-3 px-4">
        {products.map((p) => (
          <div key={p.name}>
            <div className="relative h-28 overflow-hidden rounded-xl">
              <Photo src={p.src} />
              {p.off && (
                <span className="absolute left-2 top-2 rounded-md bg-green px-1.5 py-0.5 text-[9px] font-bold text-[#0c0d0a]">
                  -15%
                </span>
              )}
              <span className="absolute bottom-2 right-2 grid h-6 w-6 place-items-center rounded-full bg-white text-[#222]">
                <Plus size={13} />
              </span>
            </div>
            <p className="mt-1.5 text-[11px] font-medium text-white">{p.name}</p>
            <p className="text-[11px] text-white/60">{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CartLine({ src, name, meta, price }: { src: string; name: string; meta: string; price: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white/[0.04] p-2">
      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg">
        <Photo src={src} sizes="48px" />
      </span>
      <div className="flex-1">
        <p className="text-xs font-medium text-white">{name}</p>
        <p className="text-[10px] text-white/60">{meta}</p>
      </div>
      <span className="text-xs font-semibold text-white">{price}</span>
    </div>
  );
}

function Step4() {
  return (
    <div className="flex h-full flex-col bg-[#0c0d0a]">
      <StatusBar />
      <div className="px-5 py-3">
        <h4 className="font-display text-lg font-semibold text-white">Your Cart (2)</h4>
      </div>
      <div className="flex flex-col gap-2 px-4">
        <CartLine src="/figma/sf-p7.png" name="Grip-Flow Bra" meta="Size: M" price="$68.00" />
        <CartLine src="/figma/sf-p8.png" name="Grip Legging" meta="Size: M" price="$88.00" />
      </div>
      <div className="mx-4 mt-3 rounded-xl border border-primary/40 bg-primary/10 p-3">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-magenta to-primary text-[9px] font-bold text-white">
            D
          </span>
          <span className="text-[11px] font-semibold text-white">Donna</span>
          <Sparkles size={11} className="text-primary-3" />
        </div>
        <p className="mt-1.5 text-[11px] leading-snug text-white/80">
          Great choice, Sarah. You&rsquo;re nearly set for your yoga sessions — here are 3 products you&rsquo;ll love.
        </p>
      </div>
      <div className="mx-4 mt-2 flex items-center gap-2 rounded-full border border-white/15 px-3 py-2">
        <Search size={12} className="text-white/50" />
        <span className="text-[11px] text-white/40">Ask anything…</span>
      </div>
      <div className="mt-auto border-t border-white/10 px-5 py-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/60">Total</span>
          <span className="text-base font-semibold text-white">$156.00</span>
        </div>
        <span className="mt-2 flex w-full items-center justify-center rounded-full bg-green py-2.5 text-sm font-semibold text-[#0c0d0a]">
          Checkout
        </span>
      </div>
    </div>
  );
}

function Step5() {
  const thumbs = ["/figma/sf-p7.png", "/figma/sf-p8.png", "/figma/sf-p3.png"];
  return (
    <div className="flex h-full flex-col items-center bg-[#0c0d0a] px-5">
      <StatusBar />
      <span className="mt-10 grid h-16 w-16 place-items-center rounded-full bg-green/15 text-green">
        <Check size={34} strokeWidth={2.5} />
      </span>
      <h4 className="mt-5 text-center font-display text-xl font-semibold text-white">
        Your purchase was successful!
      </h4>
      <p className="mt-2 text-center text-xs text-white/70">Your order is confirmed and on its way.</p>
      <p className="mt-1 text-center text-[11px] text-green">Your choices make a positive impact.</p>
      <div className="mt-5 w-full rounded-xl bg-white/[0.04] p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white">Order #NC-45879</span>
          <span className="text-[10px] text-white/50">May 30, 2026</span>
        </div>
        <div className="mt-3 flex items-center gap-2">
          {thumbs.map((s) => (
            <span key={s} className="relative h-9 w-9 overflow-hidden rounded-lg">
              <Photo src={s} sizes="36px" />
            </span>
          ))}
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 text-[10px] text-white/70">
            +2
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-[11px] text-white/70">
          <Truck size={13} className="text-green" />
          Delivery estimate · Thu, Jun 4
        </div>
      </div>
    </div>
  );
}

const SCREENS = [Step1, Step2, Step3, Step4, Step5];

export default function DemoPhone({ step }: { step: number }) {
  const Screen = SCREENS[step] ?? Step2;
  return (
    <div className="relative mx-auto w-[290px] rounded-[2.6rem] border border-white/15 bg-black p-2.5 shadow-2xl">
      <div className="absolute left-1/2 top-2.5 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black" />
      <div className="relative h-[600px] overflow-hidden rounded-[2.1rem] bg-[#0c0d0a]">
        <Screen />
      </div>
    </div>
  );
}
