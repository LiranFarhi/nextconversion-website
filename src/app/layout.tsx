import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "../components/JsonLd";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  // Only the weights actually used on screen (headings: 300/400/500/600)
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  // Only the weights actually used on screen (body: 400/500/600)
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#01001e",
};

const SITE_URL = "https://nextconversion.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NextConversion | Turning Static Storefronts Into Self-Adaptive Experiences",
    template: "%s | NextConversion",
  },
  description:
    "NextConversion is an agent-first engine that turns static websites into endless, self-adaptive storefronts — personalized per visitor, optimized 24/7.",
  applicationName: "NextConversion",
  keywords: [
    "AI conversion rate optimization",
    "e-commerce personalization",
    "autonomous AI agents",
    "self-adaptive storefront",
    "real-time website personalization",
    "AI storefront optimization",
    "agentic commerce",
  ],
  authors: [{ name: "NextConversion" }],
  creator: "NextConversion",
  publisher: "NextConversion",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NextConversion | Endless Self-Adaptive Storefronts",
    description:
      "Stop directing targeted ad traffic to generic websites. Deploy an autonomous agent workforce that personalizes your e-commerce experience in real-time.",
    url: SITE_URL,
    siteName: "NextConversion",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextConversion | Endless Self-Adaptive Storefronts",
    description:
      "Deploy an autonomous agent workforce that personalizes your e-commerce experience in real-time.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${dmSans.variable} ${inter.variable}`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
