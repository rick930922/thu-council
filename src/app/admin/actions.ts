"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  checkPassword,
  createSession,
  destroySession,
  isAuthenticated,
} from "@/lib/admin-auth";
import { deletePetition, markPetitionStatus } from "@/lib/petitions";

export async function login(formData: FormData) {
  const password = String(formData.get("password") || "");

  if (!checkPassword(password)) {
    redirect("/admin?error=1");
  }

  await createSession();
  redirect("/admin");
}

export async function logout() {
  await destroySession();
  redirect("/admin");
}

export async function toggleHandled(formData: FormData) {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }

  const id = Number(formData.get("id"));
  const nextStatus = String(formData.get("nextStatus"));
  if (!id || (nextStatus !== "new" && nextStatus !== "handled")) return;

  await markPetitionStatus(id, nextStatus);
  revalidatePath("/admin");
}

export async function removePetition(formData: FormData) {
  if (!(await isAuthenticated())) {
    redirect("/admin");
  }

  const id = Number(formData.get("id"));
  if (!id) return;

  await deletePetition(id);
  revalidatePath("/admin");
}
