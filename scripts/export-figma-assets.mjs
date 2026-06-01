// Reproducible Figma asset export.
// Renders specific design nodes to PNG (2x) into public/figma/.
// Usage: FIGMA_TOKEN=xxx node scripts/export-figma-assets.mjs
import { writeFile, mkdir } from "node:fs/promises";

const TOKEN = process.env.FIGMA_TOKEN;
const FILE = "38SBlmh0qBQ4ywCk0wOW7g";
const OUT = new URL("../public/figma/", import.meta.url);

// node id -> output filename (without extension)
const NODES = {
  "1162:2487": "legacy-store",
  "1162:2497": "curated-store",
  "1230:5387": "funnel",
  "1162:2547": "agents-group",
  "1162:2596": "agent-john",
  "1162:2631": "demo-storefront",
  "1162:2638": "demo-assistant",
  "1162:2645": "demo-results",
};

if (!TOKEN) throw new Error("Set FIGMA_TOKEN env var");

const ids = Object.keys(NODES).join(",");
const res = await fetch(
  `https://api.figma.com/v1/images/${FILE}?ids=${encodeURIComponent(ids)}&format=png&scale=2`,
  { headers: { "X-Figma-Token": TOKEN } }
);
const { images, err } = await res.json();
if (err) throw new Error(err);

await mkdir(OUT, { recursive: true });
for (const [id, url] of Object.entries(images)) {
  if (!url) {
    console.warn("no render for", id);
    continue;
  }
  const png = await fetch(url).then((r) => r.arrayBuffer());
  const name = NODES[id] + ".png";
  await writeFile(new URL(name, OUT), Buffer.from(png));
  console.log("saved", name, (png.byteLength / 1024).toFixed(0) + "kb");
}
console.log("done");
