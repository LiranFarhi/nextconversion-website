"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, CircleArrowRight } from "lucide-react";

export default function DemoModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onOpen = () => {
      lastFocused.current = document.activeElement as HTMLElement;
      setSent(false);
      setOpen(true);
    };
    window.addEventListener("open-demo-modal", onOpen);
    return () => window.removeEventListener("open-demo-modal", onOpen);
  }, []);

  // restore focus to the trigger when the modal closes
  useEffect(() => {
    if (!open) lastFocused.current?.focus?.();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Book a demo"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="card relative z-10 w-full max-w-[460px] overflow-hidden p-7 sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/30 blur-[70px]"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            {sent ? (
              <div className="relative flex flex-col items-center py-8 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-green/15 text-green">
                  <Check size={28} />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white">You&rsquo;re all set</h3>
                <p className="mt-2 font-inter text-sm text-soft/80">
                  Thanks — our team will reach out within one business day to schedule your demo.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-6 rounded-full bg-white px-5 py-2.5 font-inter text-sm font-medium text-background transition-transform hover:-translate-y-px"
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="relative">
                <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                  Book Your Demo
                </h3>
                <p className="mt-2 font-inter text-sm text-soft/80">
                  See how NextConversion can transform your e-commerce storefront.
                </p>

                <form
                  className="mt-6 flex flex-col gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <Field label="Name" type="text" name="name" placeholder="Alex Rivera" autoFocus />
                  <Field label="Email" type="email" name="email" placeholder="alex@brand.com" />
                  <Field label="Brand website" type="url" name="website" placeholder="https://yourbrand.com" />
                  <label className="flex flex-col gap-1.5">
                    <span className="font-inter text-xs font-medium text-soft/80">Message (optional)</span>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Anything we should know before the demo?"
                      className="resize-none rounded-xl border border-border-strong bg-white/[0.03] px-4 py-2.5 font-inter text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </label>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-inter text-sm font-medium text-white transition-colors hover:bg-primary-2"
                  >
                    Book a demo
                    <CircleArrowRight size={18} strokeWidth={1.75} className="btn-arrow" />
                  </button>
                  <p className="text-center font-inter text-[11px] text-muted">
                    No spam · 2-min setup · We&rsquo;ll only use this to schedule your demo.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  type,
  name,
  placeholder,
  autoFocus,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  autoFocus?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-inter text-xs font-medium text-soft/80">{label}</span>
      <input
        required
        autoFocus={autoFocus}
        type={type}
        name={name}
        placeholder={placeholder}
        className="rounded-xl border border-border-strong bg-white/[0.03] px-4 py-2.5 font-inter text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}
