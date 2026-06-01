const PERSONAS = [
  { tag: "34 • F", label: "Sophisticated Sportwear", from: "#714dff", to: "#e151ff" },
  { tag: "24 • M", label: "Sustainable Hiking Gear", from: "#0fdd98", to: "#14bced" },
  { tag: "52 • F", label: "Luxury coats", from: "#f39091", to: "#e151ff" },
  { tag: "19 • M", label: "Streetwear", from: "#14bced", to: "#714dff" },
  { tag: "41 • F", label: "Organic Skincare", from: "#0fdd98", to: "#9c83ff" },
  { tag: "30 • M", label: "Vintage Accesories", from: "#fff759", to: "#f39091" },
  { tag: "61 • F", label: "Handcrafted Jewelry", from: "#9c83ff", to: "#e151ff" },
  { tag: "28 • F", label: "Budget-Friendly", from: "#714dff", to: "#14bced" },
];

function Chip({
  tag,
  label,
  from,
  to,
}: {
  tag: string;
  label: string;
  from: string;
  to: string;
}) {
  return (
    <div className="mx-2 flex h-[44px] shrink-0 items-center gap-3 rounded-full border border-border bg-white/[0.03] py-1.5 pl-1.5 pr-5">
      <span
        className="grid h-8 min-w-8 place-items-center rounded-full px-2 font-inter text-[11px] font-semibold leading-none text-white shadow-inner"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        {tag}
      </span>
      <span className="whitespace-nowrap font-inter text-sm font-medium text-white/85">
        {label}
      </span>
    </div>
  );
}

export default function PersonaStrip() {
  return (
    <section
      className="marquee relative overflow-hidden py-6"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
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
