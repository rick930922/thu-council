import postgres from "postgres";

let client: ReturnType<typeof postgres> | null = null;

export function getSql() {
  if (!client) {
    const connectionString =
      process.env.POSTGRES_URL || process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error(
        "缺少資料庫連線字串，請設定環境變數 POSTGRES_URL 或 DATABASE_URL",
      );
    }
    client = postgres(connectionString, { ssl: "require" });
  }
  return client;
}
