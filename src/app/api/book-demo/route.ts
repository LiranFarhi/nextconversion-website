import { NextResponse } from "next/server";

// Runs on the server (Node) so the Airtable token is never exposed to the
// browser. Each submission is appended as a row to your Airtable table.
export const runtime = "nodejs";

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

type Body = {
  name?: string;
  email?: string;
  website?: string;
  message?: string;
  /** Honeypot — real users never fill this; bots usually do. */
  company?: string;
};

export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const { name, email, website, message, company } = body ?? {};

  // Honeypot: silently accept (so the bot thinks it worked) but store nothing.
  if (company && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !website || !isValidEmail(String(email))) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, a valid email, and your website." },
      { status: 400 }
    );
  }

  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE_NAME ?? "Leads";

  // Not configured yet — don't break the form, but make the miss loud in logs
  // so leads aren't silently dropped once this is live.
  if (!token || !baseId) {
    console.warn(
      "[book-demo] Airtable is not configured (set AIRTABLE_TOKEN and AIRTABLE_BASE_ID). Lead was NOT saved:",
      { name, email, website }
    );
    return NextResponse.json({ ok: true, stored: false });
  }

  try {
    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(table)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // typecast lets Airtable coerce values to the column types
          typecast: true,
          records: [
            {
              fields: {
                Name: String(name).slice(0, 200),
                Email: String(email).slice(0, 200),
                Website: String(website).slice(0, 500),
                Message: String(message ?? "").slice(0, 2000),
              },
            },
          ],
        }),
      }
    );

    if (!res.ok) {
      const detail = await res.text();
      console.error("[book-demo] Airtable error", res.status, detail);
      return NextResponse.json(
        { ok: false, error: "Something went wrong saving your request. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (err) {
    console.error("[book-demo] Airtable request failed", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong saving your request. Please try again." },
      { status: 502 }
    );
  }
}
