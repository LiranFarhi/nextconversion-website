"use client";

import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { flushSync } from "react-dom";
import Image from "next/image";

import type { StorefrontId } from "./storefronts";

export type Persona = { tag: string; label: string; img: number; storefront: StorefrontId };

// Each visitor maps to a distinct Figma storefront layout (8 unique). Order
// matches the Figma user-profile order.
export const PERSONAS: Persona[] = [
  { tag: "34 • F", label: "Sophisticated Sportwear", img: 1, storefront: "store1" },
  { tag: "52 • F", label: "Luxury coats", img: 3, storefront: "store2" },
  { tag: "19 • M", label: "Streetwear", img: 4, storefront: "store3" },
  { tag: "24 • M", label: "Sustainable Hiking Gear", img: 2, storefront: "store4" },
  { tag: "41 • F", label: "Organic Skincare", img: 5, storefront: "store5" },
  { tag: "30 • M", label: "Vintage Accesories", img: 6, storefront: "store6" },
  { tag: "61 • F", label: "Handcrafted Jewelry", img: 7, storefront: "store7" },
  { tag: "28 • F", label: "Budget-Friendly", img: 8, storefront: "store8" },
];

// Memoised so dragging (which re-renders the strip every frame to move the
// track) doesn't re-render all the chips — only the active/previous chip change.
const Chip = memo(function Chip({
  tag,
  label,
  img,
  active,
  onSelect,
}: Persona & { active: boolean; onSelect: (label: string) => void }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(label)}
      aria-pressed={active}
      data-active={active || undefined}
      className={`flex h-[60px] shrink-0 items-center gap-2 rounded-full py-2 pl-2 pr-5 transition-all duration-300 ${
        active
          ? "border border-primary bg-white/[0.07] shadow-[0_0_24px_-8px_rgba(131,79,251,0.7)]"
          : "border border-white/15 bg-white/[0.05] opacity-60 hover:opacity-100"
      }`}
    >
      <Image
        src={`/figma/persona-${img}.png`}
        alt=""
        width={128}
        height={128}
        loading="lazy"
        draggable={false}
        className={`h-10 w-10 shrink-0 rounded-full object-cover object-[50%_22%] ring-1 ${
          active ? "ring-primary" : "ring-white/10"
        }`}
      />
      <span className="flex min-w-[150px] flex-col items-start leading-tight">
        <span className="font-inter text-sm font-normal text-white/80">{tag}</span>
        <span className="whitespace-nowrap font-inter text-sm font-normal text-white/80">{label}</span>
      </span>
    </button>
  );
});

type Props = {
  /** controlled active persona label; falls back to internal state when omitted */
  activeLabel?: string;
  onSelect?: (label: string) => void;
  /** called when the user manually interacts (to pause the auto-tour) */
  onInteract?: () => void;
};

const N = PERSONAS.length;
const COPIES = 5; // odd, so there is a centre band with buffer copies on both sides
const CENTER_BAND = Math.floor(COPIES / 2) * N; // flat index where the centre copy starts
const DRAG_THRESHOLD = 6; // px before a press becomes a drag (vs a tap)

export default function PersonaStrip({ activeLabel, onSelect, onInteract }: Props) {
  const [internal, setInternal] = useState("Luxury coats");
  const active = activeLabel ?? internal;
  const handle = (label: string) => (onSelect ? onSelect(label) : setInternal(label));
  const activeIndex = Math.max(0, PERSONAS.findIndex((p) => p.label === active));

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  // `pos` is a flat index into the rendered (cloned) list that we keep centred.
  // It moves by the *shortest* step on each change (so wrapping 7→0 slides one
  // step forward, never rewinding), then snaps back into the centre band — using
  // identical clones, so the snap is invisible and the loop feels endless.
  const [pos, setPos] = useState(CENTER_BAND + activeIndex);
  const [animate, setAnimate] = useState(true);
  const [tx, setTx] = useState(0);
  const prevIndex = useRef(activeIndex);
  // Mirror of `tx` for event handlers (avoids stale closures).
  const txRef = useRef(0);
  useEffect(() => {
    txRef.current = tx;
  }, [tx]);

  // Cloned list: COPIES × the personas.
  const items = Array.from({ length: COPIES * N }, (_, i) => PERSONAS[i % N]);

  // On active change, advance `pos` by the shortest signed delta.
  useEffect(() => {
    const prev = prevIndex.current;
    let delta = activeIndex - prev;
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    prevIndex.current = activeIndex;
    setAnimate(true);
    setPos((p) => p + delta);
  }, [activeIndex]);

  // Centre the chip at `pos` under the viewport's middle line.
  useLayoutEffect(() => {
    const vp = viewportRef.current;
    const track = trackRef.current;
    if (!vp || !track) return;
    const chip = track.children[pos] as HTMLElement | undefined;
    if (!chip) return;
    setTx(vp.clientWidth / 2 - (chip.offsetLeft + chip.offsetWidth / 2));
  }, [pos]);

  // After the slide settles, jump `pos` back into the centre band (no animation)
  // so we always keep buffer clones on both sides.
  useEffect(() => {
    const want = CENTER_BAND + activeIndex;
    if (pos === want) return;
    const t = setTimeout(() => {
      setAnimate(false);
      setPos(want);
    }, 520);
    return () => clearTimeout(t);
  }, [pos, activeIndex]);

  // keep aligned on resize
  useEffect(() => {
    const onResize = () => {
      const vp = viewportRef.current;
      const track = trackRef.current;
      if (!vp || !track) return;
      const chip = track.children[pos] as HTMLElement | undefined;
      if (!chip) return;
      setAnimate(false);
      setTx(vp.clientWidth / 2 - (chip.offsetLeft + chip.offsetWidth / 2));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pos]);

  // ── Drag-to-scroll (touch + mouse) ─────────────────────────────────────────
  const drag = useRef({ active: false, startX: 0, startTx: 0, moved: false, pid: -1 });
  const suppressClick = useRef(false);

  /** transform that centres the chip at flat index `flat` under the viewport. */
  const centerForFlat = (flat: number) => {
    const vp = viewportRef.current;
    const track = trackRef.current;
    if (!vp || !track) return txRef.current;
    const chip = track.children[flat] as HTMLElement | undefined;
    if (!chip) return txRef.current;
    return vp.clientWidth / 2 - (chip.offsetLeft + chip.offsetWidth / 2);
  };

  /** flat index whose centre is nearest the viewport centre for a given tx. */
  const nearestFlat = (txVal: number) => {
    const vp = viewportRef.current;
    const track = trackRef.current;
    if (!vp || !track) return pos;
    const target = vp.clientWidth / 2 - txVal;
    let best = pos;
    let bestD = Infinity;
    for (let i = 0; i < track.children.length; i++) {
      const c = track.children[i] as HTMLElement;
      const mid = c.offsetLeft + c.offsetWidth / 2;
      const d = Math.abs(mid - target);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    return best;
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    onInteract?.();
    if (e.button > 0) return; // ignore right/middle mouse buttons
    drag.current = { active: true, startX: e.clientX, startTx: txRef.current, moved: false, pid: e.pointerId };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active) return;
    const dx = e.clientX - d.startX;
    if (!d.moved) {
      if (Math.abs(dx) <= DRAG_THRESHOLD) return;
      d.moved = true;
      viewportRef.current?.setPointerCapture?.(d.pid);
      // Follow the finger 1:1: kill the CSS transition and drive the transform
      // imperatively so we don't re-render React on every frame (the cause of
      // the janky / "stuck" feel).
      if (trackRef.current) trackRef.current.style.transition = "none";
    }
    if (!d.moved) return;
    const ntx = d.startTx + dx;
    txRef.current = ntx;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${ntx}px)`;
    }
  };

  const onPointerEnd = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active) return;
    drag.current = { ...d, active: false };
    viewportRef.current?.releasePointerCapture?.(d.pid);
    if (!d.moved) return; // a tap → let the chip's onClick select it
    // Swallow the click that the browser fires after a drag-release.
    suppressClick.current = true;
    setTimeout(() => (suppressClick.current = false), 0);

    const finalTx = txRef.current;
    const np = nearestFlat(finalTx);
    const idx = ((np % N) + N) % N;
    prevIndex.current = idx; // so the active-change effect doesn't double-move pos

    // Hand control back to React for the animated snap. Drop the inline
    // transition override the drag set, then commit the current position with
    // the transition *already enabled* (flushSync, no visual change because the
    // transform is unchanged). This primes the CSS transition so the subsequent
    // move to the snapped target animates — without it, releasing right after a
    // settle would jump instantly (transition + transform changing in one frame
    // never animates).
    if (trackRef.current) trackRef.current.style.transition = "";
    flushSync(() => {
      setAnimate(true);
      setTx(finalTx);
    });
    setTx(centerForFlat(np));
    setPos(np);
    handle(PERSONAS[idx].label);
  };

  const selectChip = useCallback(
    (label: string) => {
      if (suppressClick.current) {
        suppressClick.current = false;
        return;
      }
      handle(label);
    },
    // handle is stable enough for our purposes (depends only on onSelect identity)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onSelect]
  );

  return (
    <div
      ref={viewportRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerEnd}
      onPointerCancel={onPointerEnd}
      role="tablist"
      aria-label="Choose a visitor"
      className="relative cursor-grab touch-pan-y select-none overflow-hidden py-2 active:cursor-grabbing"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        maskImage: "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div
        ref={trackRef}
        className={`flex w-max gap-3 will-change-transform ${animate ? "transition-transform duration-500 ease-out" : ""}`}
        style={{ transform: `translateX(${tx}px)` }}
      >
        {items.map((p, i) => (
          <Chip key={i} {...p} active={i % N === activeIndex} onSelect={selectChip} />
        ))}
      </div>
    </div>
  );
}
