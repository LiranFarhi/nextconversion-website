import { NextResponse } from "next/server";

const LANDING_SERVER_URL = (
  process.env.LANDING_SERVER_URL || "http://localhost:8000"
).replace(/\/+$/, "");

const TENANT = "gottex";

// Simulates a 34-year-old female searching for resort swimwear — the scroll
// demo's protagonist — so the phone screens show the actual real-time
// personalization products rather than gradient placeholders.
const DEMO_SEGMENT = {
  gender: "Female",
  age_bucket: "25-34",
  search_term: "resort spring swimwear",
};

interface LandingProduct {
  product_id: string;
  product_name: string;
  price_min?: string;
  price_max?: string;
  image_urls?: string[];
  is_discount?: boolean;
  discount_percentage?: string;
  selected_tag?: string;
}

export interface DemoProduct {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  isVideo: boolean;
  badge?: string;
}

export async function GET() {
  const userId = `mkt-demo-${Math.random().toString(36).slice(2, 8)}`;
  const pageUrl = `https://gottexswim.com/?gender=${encodeURIComponent(DEMO_SEGMENT.gender)}&age_bucket=${encodeURIComponent(DEMO_SEGMENT.age_bucket)}&search_term=${encodeURIComponent(DEMO_SEGMENT.search_term)}`;
  const base = `${LANDING_SERVER_URL}/${TENANT}`;

  try {
    await fetch(`${base}/start_session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId, page_url: pageUrl }),
      signal: AbortSignal.timeout(5_000),
    });

    const res = await fetch(`${base}/fetch_products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: userId,
        product_ids_to_exclude: [],
        page: 0,
        page_size: 8,
      }),
      signal: AbortSignal.timeout(8_000),
    });

    if (!res.ok) return NextResponse.json({ products: [] });

    const data = await res.json();
    const raw: LandingProduct[] = data.products ?? [];

    const products: DemoProduct[] = raw.slice(0, 6).map((p) => {
      const firstUrl = (p.image_urls ?? [])[0] ?? "";
      const isVideo = firstUrl.endsWith(".mp4") || firstUrl.includes(".mp4?");
      return {
        id: p.product_id,
        name: p.product_name,
        price: p.price_min ?? "",
        imageUrl: firstUrl,
        isVideo,
        badge: p.selected_tag,
      };
    });

    return NextResponse.json(
      { products },
      { headers: { "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400" } }
    );
  } catch {
    return NextResponse.json({ products: [] });
  }
}
