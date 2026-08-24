import type { Metadata } from "next";
import { isAuthenticated } from "@/lib/admin-auth";
import { listPetitions } from "@/lib/petitions";
import { login, logout, toggleHandled } from "./actions";

export const metadata: Metadata = {
  title: "後台管理",
  robots: { index: false, follow: false },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("zh-TW", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const authed = await isAuthenticated();

  if (!authed) {
    const { error } = await searchParams;
    return (
      <div className="mx-auto flex max-w-sm flex-col px-6 py-24">
        <h1 className="font-serif text-2xl font-bold text-ink">後台登入</h1>
        <p className="mt-2 text-sm text-ink-soft">
          僅供議會內部人員使用，請輸入管理密碼。
        </p>

        {error && (
          <div className="mt-6 rounded-sm border border-wine/40 bg-wine/5 px-4 py-3 text-sm text-wine">
            密碼不正確，請再試一次。
          </div>
        )}

        <form action={login} className="mt-6 flex flex-col gap-4">
          <input
            type="password"
            name="password"
            required
            autoFocus
            className="w-full rounded-sm border border-border-soft bg-paper-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-wine"
            placeholder="管理密碼"
          />
          <button
            type="submit"
            className="rounded-sm bg-wine px-6 py-3 text-sm tracking-wide text-paper-alt transition-colors hover:bg-wine-dark"
          >
            登入
          </button>
        </form>
      </div>
    );
  }

  const petitions = await listPetitions();
  const newCount = petitions.filter((p) => p.status === "new").length;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border-soft pb-6">
        <div>
          <p className="eyebrow text-xs text-wine mb-2">ADMIN</p>
          <h1 className="font-serif text-2xl font-bold text-ink">
            學生陳情處後台
          </h1>
          <p className="mt-1 text-sm text-ink-soft">
            共 {petitions.length} 筆陳情，其中 {newCount} 筆尚未處理。
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-sm border border-border-soft px-4 py-2 text-sm text-ink-soft transition-colors hover:border-wine hover:text-wine"
          >
            登出
          </button>
        </form>
      </div>

      {petitions.length === 0 ? (
        <p className="mt-12 text-sm text-ink-soft">目前還沒有任何陳情。</p>
      ) : (
        <div className="mt-8 flex flex-col gap-4">
          {petitions.map((p) => (
            <div
              key={p.id}
              className={`rounded-sm border p-5 ${
                p.status === "handled"
                  ? "border-border-soft bg-paper-alt"
                  : "border-wine/30 bg-paper"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-ink">{p.name}</span>
                    {p.status === "new" ? (
                      <span className="rounded-full bg-wine px-2 py-0.5 text-[11px] text-paper-alt">
                        未處理
                      </span>
                    ) : (
                      <span className="rounded-full bg-forest px-2 py-0.5 text-[11px] text-paper-alt">
                        已處理
                      </span>
                    )}
                  </div>
                  <div className="mt-1 text-xs text-ink-soft">
                    {formatDate(p.created_at)}
                  </div>
                </div>

                <form action={toggleHandled}>
                  <input type="hidden" name="id" value={p.id} />
                  <input
                    type="hidden"
                    name="nextStatus"
                    value={p.status === "handled" ? "new" : "handled"}
                  />
                  <button
                    type="submit"
                    className="rounded-sm border border-border-soft px-3 py-1.5 text-xs text-ink-soft transition-colors hover:border-wine hover:text-wine"
                  >
                    {p.status === "handled" ? "標記為未處理" : "標記為已處理"}
                  </button>
                </form>
              </div>

              <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-ink">
                {p.content}
              </p>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs text-ink-soft">
                <span>
                  信箱：
                  <a href={`mailto:${p.email}`} className="text-wine hover:underline">
                    {p.email}
                  </a>
                </span>
                {p.phone && <span>電話：{p.phone}</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
