import { getSql } from "@/lib/db";

export type Petition = {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  content: string;
  status: "new" | "handled";
  created_at: string;
};

export async function createPetition(input: {
  name: string;
  email: string;
  phone: string;
  content: string;
}) {
  const sql = getSql();
  await sql`
    insert into petitions (name, email, phone, content)
    values (${input.name}, ${input.email}, ${input.phone || null}, ${input.content})
  `;
}

export async function listPetitions(): Promise<Petition[]> {
  const sql = getSql();
  const rows = await sql<Petition[]>`
    select id, name, email, phone, content, status, created_at
    from petitions
    order by created_at desc
  `;
  return rows;
}

export async function markPetitionStatus(id: number, status: "new" | "handled") {
  const sql = getSql();
  await sql`
    update petitions set status = ${status} where id = ${id}
  `;
}
