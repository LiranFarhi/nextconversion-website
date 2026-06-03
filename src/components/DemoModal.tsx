"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactElement } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, CircleArrowRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Prepend "http://" when the user types a bare hostname like "aghion.com". */
function normalizeUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return trimmed;
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `http://${trimmed}`;
}

/** Returns true when the value looks like a plausible URL/hostname. */
function isValidUrl(raw: string): boolean {
  const normalized = normalizeUrl(raw);
  try {
    const u = new URL(normalized);
    // must have at least one dot in the hostname (e.g. "aghion.com")
    return u.hostname.includes(".");
  } catch {
    return false;
  }
}

// ---------------------------------------------------------------------------
// Field sub-component
// ---------------------------------------------------------------------------

function Field({
  label,
  type,
  name,
  placeholder,
  autoFocus,
  onChange,
}: {
  label: string;
  type: string;
  name: string;
  placeholder: string;
  autoFocus?: boolean;
  onChange?: () => void;
}): ReactElement {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="font-inter text-xs font-medium text-soft/80">{label}</span>
      <input
        required
        autoFocus={autoFocus}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="rounded-xl border border-border-strong bg-white/[0.03] px-4 py-2.5 font-inter text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      />
    </label>
  );
}

// ---------------------------------------------------------------------------
// Confirm-leave overlay (inline view-swap inside the modal)
// ---------------------------------------------------------------------------

function ConfirmLeave({
  onKeepGoing,
  onLeave,
}: {
  onKeepGoing: () => void;
  onLeave: () => void;
}): ReactElement {
  return (
    <motion.div
      key="confirm"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="relative flex flex-col items-center py-8 text-center"
    >
      <h3 className="font-display text-xl font-semibold leading-tight text-white">
        Almost done!
      </h3>
      <p className="mt-3 font-inter text-sm text-soft/80">
        Finish up to get details and we&rsquo;ll schedule a chat with you.
      </p>
      <button
        type="button"
        onClick={onKeepGoing}
        className="mt-6 w-full rounded-full bg-primary px-5 py-3 font-inter text-sm font-medium text-white transition-colors hover:bg-primary-2"
      >
        Keep Going
      </button>
      <button
        type="button"
        onClick={onLeave}
        className="mt-3 font-inter text-sm text-muted/70 transition-colors hover:text-soft"
      >
        Yes, leave
      </button>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// Main DemoModal
// ---------------------------------------------------------------------------

export default function DemoModal(): ReactElement {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  // "confirming" — show the "Are you sure?" view instead of closing directly
  const [confirming, setConfirming] = useState(false);
  // dirty — true once the user has typed anything in any field
  const [dirty, setDirty] = useState(false);
  // submitting — request to /api/book-demo is in flight
  const [submitting, setSubmitting] = useState(false);
  // error — message shown when the submission fails
  const [error, setError] = useState<string | null>(null);

  const lastFocused = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // ── open/close helpers ──────────────────────────────────────────────────

  function requestClose() {
    // Already on the "are you sure?" view — a second X (or Esc) means close.
    if (confirming) {
      doClose();
      return;
    }
    if (dirty && !sent) {
      setConfirming(true);
    } else {
      doClose();
    }
  }

  function doClose() {
    setOpen(false);
    setConfirming(false);
    setDirty(false);
    setSent(false);
    setSubmitting(false);
    setError(null);
  }

  // ── lifecycle ───────────────────────────────────────────────────────────

  useEffect(() => {
    const onOpen = () => {
      lastFocused.current = document.activeElement as HTMLElement;
      setSent(false);
      setDirty(false);
      setConfirming(false);
      setSubmitting(false);
      setError(null);
      setOpen(true);
    };
    window.addEventListener("open-demo-modal", onOpen);
    return () => window.removeEventListener("open-demo-modal", onOpen);
  }, []);

  // Restore focus to the trigger when the modal closes
  useEffect(() => {
    if (!open) lastFocused.current?.focus?.();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") requestClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
    // requestClose reads dirty/sent/confirming — include them so the closure is fresh
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, dirty, sent, confirming]);

  // ── submit handler ──────────────────────────────────────────────────────

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Normalize + validate the website URL before sending
    const rawWebsite = (data.get("website") as string) ?? "";
    if (rawWebsite && !isValidUrl(rawWebsite)) {
      // Basic client-side feedback — keep the form open so the user can fix it
      const websiteInput = form.elements.namedItem("website") as HTMLInputElement | null;
      websiteInput?.setCustomValidity(
        "Please enter a valid website, e.g. aghion.com or https://aghion.com"
      );
      websiteInput?.reportValidity();
      return;
    }

    const payload = {
      name: data.get("name"),
      email: data.get("email"),
      website: normalizeUrl(rawWebsite),
      message: data.get("message"),
      // Honeypot — left empty by humans; filled by bots → server ignores it
      company: data.get("company"),
    };

    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Something went wrong. Please try again.");
      }
      setSent(true);
      setDirty(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  // ── render ──────────────────────────────────────────────────────────────

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
          {/* Backdrop — intentionally no onClick so clicking outside does nothing */}
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
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
            {/* Decorative glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/30 blur-[70px]"
            />

            {/* ✕ close button — triggers requestClose (may show confirm) */}
            <button
              type="button"
              onClick={requestClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={18} />
            </button>

            <AnimatePresence mode="wait">
              {/* ── Confirm-leave view ── */}
              {confirming ? (
                <ConfirmLeave
                  key="confirm"
                  onKeepGoing={() => setConfirming(false)}
                  onLeave={doClose}
                />
              ) : sent ? (
                /* ── Success view ── */
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="relative flex flex-col items-center py-8 text-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-green/15 text-green">
                    <Check size={28} />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-white">
                    You&rsquo;re all set
                  </h3>
                  <p className="mt-2 font-inter text-sm text-soft/80">
                    Thanks — our team will reach out within one business day to schedule
                    your demo.
                  </p>
                  <button
                    type="button"
                    onClick={doClose}
                    className="mt-6 rounded-full bg-white px-5 py-2.5 font-inter text-sm font-medium text-background transition-transform hover:-translate-y-px"
                  >
                    Done
                  </button>
                </motion.div>
              ) : (
                /* ── Form view ── */
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="relative"
                >
                  <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                    Book Your Demo
                  </h3>
                  <p className="mt-2 font-inter text-sm text-soft/80">
                    See how NextConversion can transform your e-commerce storefront.
                  </p>

                  <form
                    ref={formRef}
                    className="mt-6 flex flex-col gap-3"
                    onSubmit={handleSubmit}
                  >
                    <Field
                      label="Name"
                      type="text"
                      name="name"
                      placeholder="Alex Rivera"
                      autoFocus
                      onChange={() => setDirty(true)}
                    />
                    <Field
                      label="Email"
                      type="email"
                      name="email"
                      placeholder="alex@brand.com"
                      onChange={() => setDirty(true)}
                    />
                    {/* Item 1: type="text" + pattern so bare hostnames like aghion.com are accepted */}
                    <label className="flex flex-col gap-1.5">
                      <span className="font-inter text-xs font-medium text-soft/80">
                        Brand website
                      </span>
                      <input
                        required
                        type="text"
                        name="website"
                        placeholder="yourbrand.com"
                        onChange={(e) => {
                          setDirty(true);
                          // Clear any previous custom-validity message so the user
                          // can re-submit after correcting the value.
                          e.currentTarget.setCustomValidity("");
                        }}
                        className="rounded-xl border border-border-strong bg-white/[0.03] px-4 py-2.5 font-inter text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="font-inter text-xs font-medium text-soft/80">
                        Message (optional)
                      </span>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Anything we should know before the demo?"
                        onChange={() => setDirty(true)}
                        className="resize-none rounded-xl border border-border-strong bg-white/[0.03] px-4 py-2.5 font-inter text-sm text-white placeholder:text-muted focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </label>
                    {/* Honeypot — hidden from people; bots fill it and the
                        server silently ignores those submissions. */}
                    <div
                      aria-hidden
                      style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
                    >
                      <label>
                        Company
                        <input type="text" name="company" tabIndex={-1} autoComplete="off" />
                      </label>
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-inter text-sm font-medium text-white transition-colors hover:bg-primary-2 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {submitting ? "Booking…" : "Book a demo"}
                      {!submitting && (
                        <CircleArrowRight size={18} strokeWidth={1.75} className="btn-arrow" />
                      )}
                    </button>
                    {error && (
                      <p role="alert" className="text-center font-inter text-[12px] text-coral">
                        {error}
                      </p>
                    )}
                    <p className="text-center font-inter text-[11px] text-muted">
                      No spam · 2-min setup · We&rsquo;ll only use this to schedule your
                      demo.
                    </p>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
