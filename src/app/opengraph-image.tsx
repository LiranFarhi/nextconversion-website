import { ImageResponse } from "next/og";

// Branded social-share card (used for both Open Graph and Twitter).
export const alt = "NextConversion — Turning Static Storefronts Into Self-Adaptive Experiences";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#01001e",
          backgroundImage:
            "radial-gradient(900px 600px at 50% -10%, rgba(131,79,251,0.55), rgba(225,81,255,0.12) 45%, rgba(1,0,30,0) 70%)",
        }}
      >
        {/* Brand mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
            <rect y="13.7143" width="10.2857" height="10.2857" fill="#834FFB" />
            <path d="M24 24H23.9971L16 16.0947V8.28613H8.10059L0 0.27832V0H24V24Z" fill="#834FFB" />
          </svg>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#ffffff", letterSpacing: "-0.02em" }}>
            NextConversion
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 68,
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#ffffff",
            maxWidth: 1000,
          }}
        >
          Turning Static Storefronts Into Self-Adaptive Experiences
        </div>

        {/* Subline */}
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.72)",
            maxWidth: 900,
          }}
        >
          An autonomous AI agent workforce that personalizes your storefront in real time.
        </div>
      </div>
    ),
    { ...size },
  );
}
