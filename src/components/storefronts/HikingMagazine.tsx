import { Leaf, MapPin, Mountain, Tag } from "lucide-react";

// ─── small helper sub-components (no props that would break eslint) ──────────

function TextLine({ w }: { w: string }) {
  return <span className="block h-[5px] rounded-sm bg-stone-300/70 my-[3px]" style={{ width: w }} />;
}

function GearItem({
  name,
  price,
  gradient,
}: {
  name: string;
  price: string;
  gradient: string;
}) {
  return (
    <div className="flex-1 min-w-0 flex flex-col gap-[3px]">
      {/* faked product image */}
      <div
        className="w-full rounded-[3px] mb-[3px]"
        style={{ aspectRatio: "1/1", background: gradient }}
      />
      <p className="text-[8px] font-semibold text-stone-800 leading-tight truncate">{name}</p>
      <p className="text-[8px] text-pine-600 font-bold leading-none">{price}</p>
      <div className="flex items-center gap-[2px] mt-[2px]">
        <Tag size={7} className="text-pine-600 shrink-0" />
        <span className="text-[7px] font-medium text-pine-600 uppercase tracking-wide">Shop</span>
      </div>
    </div>
  );
}

// ─── main component ──────────────────────────────────────────────────────────

export default function HikingMagazine() {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f5f0e8] text-[#2c2c2c] font-sans">

      {/* ── MASTHEAD ─────────────────────────────────────────────────────── */}
      <header className="flex-shrink-0 px-3 pt-2.5 pb-0">
        <div className="flex items-baseline justify-between">
          <div className="flex items-center gap-1">
            <Mountain size={11} className="text-[#2d5a27] shrink-0" />
            <span
              className="text-[17px] font-black tracking-[0.18em] uppercase text-[#2d5a27] leading-none"
              style={{ fontFamily: "Georgia, serif" }}
            >
              WILDLINE
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Leaf size={8} className="text-[#6b8f5e]" />
            <span className="text-[7.5px] font-medium text-[#6b8f5e] uppercase tracking-widest">
              Leave No Trace
            </span>
          </div>
        </div>

        {/* issue / section line */}
        <div className="flex items-center justify-between mt-[3px]">
          <span className="text-[7.5px] tracking-[0.2em] uppercase text-stone-500 font-medium">
            Issue&#x202F;04 &nbsp;·&nbsp; The Trail Journal &nbsp;·&nbsp; Trails
          </span>
          <span className="text-[7.5px] text-stone-400">Jun 2026</span>
        </div>

        {/* thin rule */}
        <div className="mt-1.5 border-t border-[#2d5a27]/60" />
        <div className="mt-[2px] border-t border-[#2d5a27]/20" />
      </header>

      {/* ── COVER PHOTO BLOCK ────────────────────────────────────────────── */}
      <div className="flex-shrink-0 relative mx-3 mt-2 rounded-[3px] overflow-hidden" style={{ height: "28%" }}>
        {/* layered gradient simulating a forest/mountain photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(175deg, #1a3a1a 0%, #2d5a27 30%, #4a7c40 55%, #7aad60 80%, #a8c890 100%)",
          }}
        />
        {/* sky overlay at top */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(180,210,220,0.55) 0%, transparent 45%)",
          }}
        />
        {/* mountain silhouette via inline SVG */}
        <svg
          viewBox="0 0 200 80"
          preserveAspectRatio="xMidYMax meet"
          className="absolute bottom-0 left-0 right-0 w-full"
          style={{ height: "65%" }}
          aria-hidden="true"
        >
          <polygon points="0,80 30,20 60,55 90,5 130,50 160,25 200,80" fill="#1e4019" opacity="0.85" />
          <polygon points="0,80 25,35 50,65 75,18 110,60 140,32 200,80" fill="#163314" opacity="0.6" />
          {/* tree line suggestion */}
          <rect x="0" y="72" width="200" height="8" fill="#163314" />
        </svg>
        {/* fog band */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: "38%",
            height: "14%",
            background: "rgba(230,240,220,0.18)",
            filter: "blur(3px)",
          }}
        />
        {/* caption strip */}
        <div className="absolute bottom-0 left-0 right-0 px-2 py-[3px] flex items-center justify-between"
          style={{ background: "rgba(18,36,16,0.62)" }}>
          <div className="flex items-center gap-1">
            <MapPin size={7} className="text-[#a8c890]" />
            <span className="text-[6.5px] text-[#c8e0b0] tracking-widest uppercase font-medium">
              Field notes, Cascade Range
            </span>
          </div>
          <span className="text-[6px] text-[#a8c890]/70 italic">&#x25b2; 2,438m</span>
        </div>
      </div>

      {/* ── EDITORIAL HEADLINE ───────────────────────────────────────────── */}
      <div className="flex-shrink-0 px-3 mt-2">
        <p className="text-[7.5px] uppercase tracking-[0.22em] text-[#6b8f5e] font-semibold mb-[3px]">
          Feature &nbsp;/&nbsp; Gear &amp; Terrain
        </p>
        <h1
          className="text-[19px] font-semibold leading-[1.1] tracking-tight text-[#1a2e18]"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Into&nbsp;the Green
        </h1>
        <p className="text-[8.5px] text-stone-600 leading-snug mt-[3px] font-medium">
          How a new generation of recycled materials is reshaping life on the trail — and what to carry.
        </p>
        {/* byline */}
        <p className="text-[7px] text-stone-400 mt-[4px] tracking-wide">
          Words by R. Vance &nbsp;·&nbsp; Photography: Archive
        </p>
        <div className="mt-1.5 border-t border-stone-300/70" />
      </div>

      {/* ── TWO-COLUMN BODY ──────────────────────────────────────────────── */}
      <div className="flex-1 px-3 mt-2 flex gap-2 min-h-0 overflow-hidden">

        {/* col 1 */}
        <div className="flex-1 min-w-0 flex flex-col gap-[3px]">
          {/* drop-cap paragraph */}
          <p className="text-[8px] leading-[1.45] text-stone-700">
            <span
              className="float-left text-[28px] font-black leading-[0.78] mr-[2px] text-[#2d5a27]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              T
            </span>
            he ridge arrives before dawn. Fog clings to the spruce canopy and the air carries the clean, mineral
            edge of snowmelt.
          </p>
          <TextLine w="100%" />
          <TextLine w="92%" />
          <TextLine w="95%" />
          <TextLine w="88%" />
          <TextLine w="94%" />
          {/* pull quote */}
          <div className="border-l-2 border-[#2d5a27] pl-1.5 my-1">
            <p
              className="text-[8px] font-semibold italic leading-snug text-[#2d5a27]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              &ldquo;Recycled doesn&rsquo;t mean compromised — it means considered.&rdquo;
            </p>
          </div>
          <TextLine w="90%" />
          <TextLine w="97%" />
          <TextLine w="85%" />
        </div>

        {/* col 2 */}
        <div className="flex-1 min-w-0 flex flex-col gap-[3px] pt-[2px]">
          <p className="text-[8px] leading-[1.45] text-stone-700">
            Bio-based films and post-consumer fleece now meet alpine-rated seam tape. The numbers are real: 68% lower
            carbon per jacket.
          </p>
          <TextLine w="100%" />
          <TextLine w="91%" />
          <TextLine w="96%" />
          <TextLine w="83%" />
          <TextLine w="89%" />
          <TextLine w="95%" />
          {/* small stat callout */}
          <div className="rounded-[3px] bg-[#2d5a27]/10 border border-[#2d5a27]/20 px-1.5 py-1 my-1">
            <p className="text-[7px] uppercase tracking-widest text-[#6b8f5e] font-bold">Recycled Content</p>
            <p
              className="text-[16px] font-black leading-none text-[#2d5a27]"
              style={{ fontFamily: "Georgia, serif" }}
            >
              86%
            </p>
            <p className="text-[6.5px] text-stone-500 leading-none">avg. across featured kit</p>
          </div>
          <TextLine w="88%" />
          <TextLine w="93%" />
        </div>
      </div>

      {/* ── FEATURED KIT STRIP ───────────────────────────────────────────── */}
      <div className="flex-shrink-0 px-3 mt-2">
        <div className="border-t-2 border-[#2d5a27] mb-1.5" />
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[7.5px] font-bold uppercase tracking-[0.22em] text-[#2d5a27]">
            Featured Kit
          </p>
          <div className="flex items-center gap-1">
            <span className="text-[6.5px] text-stone-400 uppercase tracking-wide">Full kit online</span>
            <span className="text-[6.5px] text-[#2d5a27] font-bold">→</span>
          </div>
        </div>

        {/* 3 gear items */}
        <div className="flex gap-2 pb-1">
          <GearItem
            name="Recycled Shell Jacket"
            price="$210"
            gradient="linear-gradient(135deg, #2d5a27 0%, #4a7c40 50%, #6b8f5e 100%)"
          />
          <GearItem
            name="Merino Base Layer"
            price="$85"
            gradient="linear-gradient(135deg, #8b7355 0%, #b09a7a 50%, #c8b896 100%)"
          />
          <GearItem
            name="Trail Runner GTX"
            price="$160"
            gradient="linear-gradient(135deg, #3a3a2e 0%, #5a5a42 50%, #7a7a5a 100%)"
          />
        </div>
      </div>

      {/* ── FOOTER / PAGE NUMBER ─────────────────────────────────────────── */}
      <footer className="flex-shrink-0 px-3 pb-2 pt-1 flex items-center justify-between border-t border-stone-300/60">
        <div className="flex items-center gap-1">
          <Mountain size={8} className="text-[#2d5a27]" />
          <span className="text-[6.5px] font-black tracking-widest uppercase text-[#2d5a27]">WILDLINE</span>
        </div>
        <span className="text-[6.5px] text-stone-400 tracking-widest uppercase">wildline.co</span>
        <span className="text-[7px] font-semibold text-stone-400">48</span>
      </footer>
    </div>
  );
}
