/** Slowly drifting, blurred brand-colour orbs that add depth behind the page. */
export default function AmbientOrbs() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <span className="ambient-orb animate-drift-1 absolute left-[-10%] top-[8%] h-[44vw] w-[44vw] max-h-[560px] max-w-[560px] rounded-full bg-primary/20" />
      <span className="ambient-orb animate-drift-2 absolute right-[-12%] top-[38%] h-[40vw] w-[40vw] max-h-[520px] max-w-[520px] rounded-full bg-magenta/14" />
      <span className="ambient-orb animate-drift-3 absolute bottom-[2%] left-[20%] h-[38vw] w-[38vw] max-h-[480px] max-w-[480px] rounded-full bg-cyan/12" />
    </div>
  );
}
