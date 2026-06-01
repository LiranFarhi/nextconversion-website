const PERSONAS = [
  { tag: "34 • F", label: "Sophisticated Sportwear", from: "#714dff", to: "#e151ff" },
  { tag: "24 • M", label: "Sustainable Hiking Gear", from: "#0fdd98", to: "#14bced" },
  { tag: "52 • F", label: "Luxury coats", from: "#f39091", to: "#e151ff", active: true },
  { tag: "19 • M", label: "Streetwear", from: "#14bced", to: "#714dff" },
  { tag: "41 • F", label: "Organic Skincare", from: "#0fdd98", to: "#9c83ff" },
  { tag: "30 • M", label: "Vintage Accesories", from: "#fff759", to: "#f39091" },
  { tag: "61 • F", label: "Handcrafted Jewelry", from: "#9c83ff", to: "#e151ff" },
  { tag: "28 • F", label: "Budget-Friendly", from: "#714dff", to: "#14bced" },
];

type Persona = (typeof PERSONAS)[number] & { active?: boolean };

function Chip({ tag, label, from, to, active }: Persona) {
  return (
    <div
      className={`mx-2 flex h-14 shrink-0 items-center gap-3 rounded-full py-1.5 pl-1.5 pr-5 ${
        active ? "border border-white/70 bg-white/[0.07]" : "border border-border bg-white/[0.03]"
      }`}
    >
      <span
        className="h-11 w-11 shrink-0 rounded-full ring-1 ring-white/10"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
        aria-hidden
      />
      <span className="flex flex-col leading-tight">
        <span className="font-inter text-[11px] font-medium text-muted">{tag}</span>
        <span className="whitespace-nowrap font-inter text-sm font-medium text-white/90">{label}</span>
      </span>
    </div>
  );
}

export default function PersonaStrip() {
  return (
    <section
      className="marquee relative overflow-hidden py-6"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee-track">
        {[...PERSONAS, ...PERSONAS].map((p, i) => (
          <Chip key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
