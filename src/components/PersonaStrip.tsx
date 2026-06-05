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

  // Trackpad / wheel horizontal scrolling. React's onWheel is passive, so we
  // attach manually to preventDefault. Accumulate horizontal delta and step one
  // persona per chunk (with a short cooldown so momentum doesn't fly through).
  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp) return;
    let accum = 0;
    let cooling = false;
    const onWheel = (e: WheelEvent) => {
      // horizontal trackpad swipe, or shift+wheel for mouse users
      const horiz =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (horiz === 0) return; // pure vertical → let the page scroll
      e.preventDefault();
      onInteract?.();
      accum += horiz;
      if (cooling || Math.abs(accum) < 40) return;
      const dir = accum > 0 ? 1 : -1;
      accum = 0;
      const next = (((activeIndex + dir) % N) + N) % N;
      const label = PERSONAS[next].label;
      if (onSelect) onSelect(label);
      else setInternal(label);
      cooling = true;
      setTimeout(() => (cooling = false), 110);
    };
    vp.addEventListener("wheel", onWheel, { passive: false });
    return () => vp.removeEventListener("wheel", onWheel);
  }, [activeIndex, onSelect, onInteract]);

  // ── Drag-to-scroll (touch + mouse) ─────────────────────────────────────────
  const drag = useRef({
    active: false,
    startX: 0,
    startTx: 0,
    moved: false,
    pid: -1,
    lastX: 0,
    lastT: 0,
    vx: 0, // velocity px/ms, for flick momentum
  });
  const suppressClick = useRef(false);
  const rafId = useRef(0);
  useEffect(() => () => cancelAnimationFrame(rafId.current), []);

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

  // After the inertial snap settles, commit the resting position to React with
  // NO transition (so its transform matches the DOM exactly — no jump) and move
  // the active persona. The active-change effect then re-enables the transition
  // for subsequent clicks/wheel steps.
  const finishSnap = (np: number, to: number) => {
    const idx = ((np % N) + N) % N;
    txRef.current = to;
    if (trackRef.current) trackRef.current.style.transition = "";
    flushSync(() => {
      setAnimate(false);
      setTx(to);
      setPos(np);
    });
    prevIndex.current = idx;
    handle(PERSONAS[idx].label);
  };

  // Inertial snap to a flat index, driven by requestAnimationFrame. Unlike a
  // fixed CSS transition, the duration scales with distance and it eases out
  // naturally — which is what makes the strip feel smooth on touch.
  const snapTo = (np: number) => {
    const from = txRef.current;
    const to = centerForFlat(np);
    const dist = Math.abs(to - from);
    const duration = Math.min(480, Math.max(240, dist * 0.8));
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    if (trackRef.current) trackRef.current.style.transition = "none";
    cancelAnimationFrame(rafId.current);
    const tick = (now: number) => {
      const t = duration === 0 ? 1 : Math.min(1, (now - start) / duration);
      const val = from + (to - from) * easeOutCubic(t);
      txRef.current = val;
      if (trackRef.current) trackRef.current.style.transform = `translateX(${val}px)`;
      if (t < 1) rafId.current = requestAnimationFrame(tick);
      else finishSnap(np, to);
    };
    rafId.current = requestAnimationFrame(tick);
  };

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    onInteract?.();
    cancelAnimationFrame(rafId.current); // grab control if a snap is mid-flight
    if (e.button > 0) return; // ignore right/middle mouse buttons
    drag.current = {
      active: true,
      startX: e.clientX,
      startTx: txRef.current,
      moved: false,
      pid: e.pointerId,
      lastX: e.clientX,
      lastT: performance.now(),
      vx: 0,
    };
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
    // Track velocity (exponential smoothing) for flick momentum on release.
    const now = performance.now();
    const dt = now - d.lastT;
    if (dt > 0) {
      const v = (e.clientX - d.lastX) / dt;
      d.vx = d.vx * 0.7 + v * 0.3;
      d.lastX = e.clientX;
      d.lastT = now;
    }
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

    // Project a little past the release point based on flick velocity, so a
    // quick swipe travels several personas instead of snapping to the nearest,
    // then glide to it with the inertial rAF snap.
    const MOMENTUM = 180; // ms of projected glide
    const projected = txRef.current + d.vx * MOMENTUM;
    snapTo(nearestFlat(projected));
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
