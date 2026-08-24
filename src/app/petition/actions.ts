"use server";

import { redirect } from "next/navigation";
import { createPetition } from "@/lib/petitions";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitPetition(formData: FormData) {
  // 蜜罐欄位：一般使用者看不到也不會填寫，機器人才會填
  const honeypot = String(formData.get("website") || "").trim();
  if (honeypot) {
    redirect("/petition/thanks");
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const phone = String(formData.get("phone") || "").trim();
  const targetMember = String(formData.get("targetMember") || "").trim();
  const content = String(formData.get("content") || "").trim();

  if (!name || !email || !phone || !targetMember || !content) {
    redirect("/petition?error=missing");
  }
  if (!EMAIL_RE.test(email)) {
    redirect("/petition?error=email");
  }
  if (
    name.length > 50 ||
    email.length > 100 ||
    phone.length > 30 ||
    targetMember.length > 50
  ) {
    redirect("/petition?error=length");
  }
  if (content.length < 10) {
    redirect("/petition?error=short");
  }
  if (content.length > 2000) {
    redirect("/petition?error=long");
  }

  let success = false;
  try {
    await createPetition({ name, email, phone, targetMember, content });
    success = true;
  } catch (err) {
    console.error("submitPetition failed:", err);
  }

  if (success) {
    redirect("/petition/thanks");
  }
  redirect("/petition?error=server");
}
