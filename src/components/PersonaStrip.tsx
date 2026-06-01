import Image from "next/image";

const PERSONAS = [
  { tag: "34 • F", label: "Sophisticated Sportwear", img: 1 },
  { tag: "24 • M", label: "Sustainable Hiking Gear", img: 2 },
  { tag: "52 • F", label: "Luxury coats", img: 3, active: true },
  { tag: "19 • M", label: "Streetwear", img: 4 },
  { tag: "41 • F", label: "Organic Skincare", img: 5 },
  { tag: "30 • M", label: "Vintage Accesories", img: 6 },
  { tag: "61 • F", label: "Handcrafted Jewelry", img: 7 },
  { tag: "28 • F", label: "Budget-Friendly", img: 8 },
];

type Persona = (typeof PERSONAS)[number] & { active?: boolean };

function Chip({ tag, label, img, active }: Persona) {
  return (
    <div
      className={`mx-2 flex h-14 shrink-0 items-center gap-3 rounded-full py-1.5 pl-1.5 pr-5 ${
        active ? "border border-white/70 bg-white/[0.07]" : "border border-border bg-white/[0.03]"
      }`}
    >
      <Image
        src={`/figma/persona-${img}.png`}
        alt=""
        width={128}
        height={128}
        className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/10"
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
