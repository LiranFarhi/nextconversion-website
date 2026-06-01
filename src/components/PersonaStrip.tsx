const PERSONAS = [
  { tag: "34 • F", label: "Sophisticated Sportwear" },
  { tag: "24 • M", label: "Sustainable Hiking Gear" },
  { tag: "52 • F", label: "Luxury coats" },
  { tag: "19 • M", label: "Streetwear" },
  { tag: "41 • F", label: "Organic Skincare" },
  { tag: "30 • M", label: "Vintage Accesories" },
  { tag: "61 • F", label: "Handcrafted Jewelry" },
  { tag: "28 • F", label: "Budget-Friendly" },
];

function Chip({ tag, label }: { tag: string; label: string }) {
  return (
    <div className="mx-2 flex shrink-0 items-center gap-3 rounded-full border border-border bg-white/[0.03] py-2 pl-2 pr-5">
      <span className="grid h-8 min-w-8 place-items-center rounded-full bg-gradient-to-br from-primary-2 to-magenta px-2 font-inter text-[11px] font-semibold text-white">
        {tag}
      </span>
      <span className="whitespace-nowrap font-inter text-sm text-white/85">{label}</span>
    </div>
  );
}

export default function PersonaStrip() {
  return (
    <section className="marquee relative overflow-hidden py-6">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
      />
      <div className="marquee-track">
        {[...PERSONAS, ...PERSONAS].map((p, i) => (
          <Chip key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
