import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#01001e",
};

export const metadata: Metadata = {
  title: "NextConversion | Turning Static Storefronts Into Self-Adaptive Experiences",
  description:
    "NextConversion is an agent-first engine that turns static websites into endless, self-adaptive storefronts — personalized per visitor, optimized 24/7.",
  openGraph: {
    title: "NextConversion | Endless Self-Adaptive Storefronts",
    description:
      "Stop directing targeted ad traffic to generic websites. Deploy an autonomous agent workforce that personalizes your e-commerce experience in real-time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${dmSans.variable} ${inter.variable}`}>
      <body className="min-h-full bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
