import { NextResponse } from "next/server";

// Landing-server URL — set LANDING_SERVER_URL in .env.local or Vercel env vars
const LANDING_SERVER_URL = (
  process.env.LANDING_SERVER_URL || "http://localhost:8000"
).replace(/\/+$/, "");

const TENANT = "gottex";

// Maps each persona ID → segment params sent to the landing-server.
// The server returns images generated specifically for that demographic.
const PERSONA_SEGMENTS: Record<
  string,
  { gender: string; age_bucket: string; search_term: string }
> = {
  sportswear:       { gender: "Female", age_bucket: "25-34", search_term: "sport active" },
  hiking:           { gender: "Male",   age_bucket: "18-24", search_term: "active outdoor" },
  "luxury-coats":   { gender: "Female", age_bucket: "50+",   search_term: "luxury elegant" },
  streetwear:       { gender: "Male",   age_bucket: "18-24", search_term: "bold modern" },
  skincare:         { gender: "Female", age_bucket: "35-50", search_term: "natural gentle" },
  vintage:          { gender: "Male",   age_bucket: "25-34", search_term: "classic vintage" },
  jewelry:          { gender: "Female", age_bucket: "50+",   search_term: "elegant artisan" },
  outerwear:        { gender: "Female", age_bucket: "25-34", search_term: "casual everyday" },
};

interface LandingProduct {
  product_id: string;
  product_name: string;
  price_min?: string;
  image_urls?: string[];
}

async function fetchForPersona(persona: string): Promise<string[]> {
  const seg = PERSONA_SEGMENTS[persona];
  if (!seg) return [];

  const userId = `mkt-${persona}-${Math.random().toString(36).slice(2, 8)}`;
  const pageUrl = `https://gottexswim.com/?gender=${encodeURIComponent(seg.gender)}&age_bucket=${encodeURIComponent(seg.age_bucket)}&search_term=${encodeURIComponent(seg.search_term)}`;
  const base = `${LANDING_SERVER_URL}/${TENANT}`;

  // Initialise the session so the server assigns the right demographic variant
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

  if (!res.ok) return [];

  const data = await res.json();
  const products: LandingProduct[] = data.products ?? [];

  // Return the first image URL from each of the first 4 products.
  // The landing-server already returns CDN URLs (imagedelivery.net / .r2.dev)
  // that are specific to the assigned demographic variant.
  return products
    .slice(0, 4)
    .map((p) => (p.image_urls ?? [])[0])
    .filter(Boolean) as string[];
}

// GET /api/persona-products
// Returns: Record<personaId, imageUrls[]>
// Cached at the CDN for 1 hour, stale-while-revalidate for 24 hours.
export async function GET() {
  const personas = Object.keys(PERSONA_SEGMENTS);

  const settled = await Promise.allSettled(
    personas.map(async (id) => ({ id, images: await fetchForPersona(id) }))
  );

  const result: Record<string, string[]> = {};
  for (const s of settled) {
    if (s.status === "fulfilled") {
      result[s.value.id] = s.value.images;
    }
  }

  return NextResponse.json(result, {
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
