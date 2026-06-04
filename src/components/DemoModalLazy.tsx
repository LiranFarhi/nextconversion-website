"use client";

import dynamic from "next/dynamic";

// The modal is never part of the first view — split it (and its framer-motion +
// form logic) into its own chunk that loads right after hydration instead of in
// the initial bundle. Behaviour/appearance are unchanged; it mounts and starts
// listening for the "open-demo-modal" event a moment after the page is
// interactive (well before anyone clicks "Book a demo").
const DemoModal = dynamic(() => import("./DemoModal"), { ssr: false });

export default function DemoModalLazy() {
  return <DemoModal />;
}
