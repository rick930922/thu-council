import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const STATE_KEY = "thu-council-live-state";

function getUpstashConfig() {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  return { url, token };
}

async function readState(): Promise<Record<string, string>> {
  const { url, token } = getUpstashConfig();
  if (!url || !token) return {};

  const res = await fetch(`${url}/get/${STATE_KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return {};

  const data = await res.json();
  if (!data.result) return {};

  try {
    return JSON.parse(data.result);
  } catch {
    return {};
  }
}

async function writeState(state: Record<string, string>) {
  const { url, token } = getUpstashConfig();
  if (!url || !token) return;

  await fetch(`${url}/set/${STATE_KEY}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(state),
  });
}

export async function GET() {
  const state = await readState();
  return NextResponse.json(state);
}

export async function POST(request: NextRequest) {
  const patch = await request.json();
  const state = await readState();
  Object.assign(state, patch);
  await writeState(state);
  return NextResponse.json(state);
}
