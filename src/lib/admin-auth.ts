import { createHash } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "thusp_admin_session";
const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 天

function expectedToken(): string {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error("缺少環境變數 ADMIN_PASSWORD，請先在 Vercel 專案設定中新增。");
  }
  return createHash("sha256").update(`thusp-admin:${password}`).digest("hex");
}

export function checkPassword(input: string): boolean {
  return input === process.env.ADMIN_PASSWORD;
}

export async function createSession() {
  const store = await cookies();
  store.set(COOKIE_NAME, expectedToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
}

export async function destroySession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const value = store.get(COOKIE_NAME)?.value;
  if (!value) return false;
  return value === expectedToken();
}
