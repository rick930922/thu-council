import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { submitPetition } from "./actions";

export const metadata: Metadata = {
  title: "學生陳情處",
};

const ERROR_MESSAGES: Record<string, string> = {
  missing: "請填寫姓名、電子信箱與陳情內容。",
  email: "電子信箱格式看起來不太正確，請再確認一次。",
  length: "姓名、信箱或電話欄位字數過長，請確認後再送出。",
  short: "陳情內容太短了，請再多描述一些讓我們能了解狀況。",
  long: "陳情內容過長（上限 2000 字），請精簡後再送出。",
};

export default async function PetitionPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const errorMessage = error ? ERROR_MESSAGES[error] : undefined;

  return (
    <div>
      <PageHero
        eyebrow="STUDENT PETITION"
        title="學生陳情處"
        description={`任何對校園生活、議會運作或自治事務的建議與訴求，都歡迎透過以下表單直接告訴我們。${site.shortName}會妥善記錄每一筆陳情，並由相關委員會追蹤處理。`}
      />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <Reveal>
          {errorMessage && (
            <div className="mb-8 rounded-sm border border-wine/40 bg-wine/5 px-5 py-4 text-sm text-wine">
              {errorMessage}
            </div>
          )}

          <form action={submitPetition} className="flex flex-col gap-6">
            {/* 蜜罐欄位，一般使用者看不到 */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">網站</label>
              <input
                type="text"
                id="website"
                name="website"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-ink"
              >
                姓名 <span className="text-wine">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={50}
                className="w-full rounded-sm border border-border-soft bg-paper-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-wine"
                placeholder="請輸入姓名"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-ink"
              >
                電子信箱 <span className="text-wine">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={100}
                className="w-full rounded-sm border border-border-soft bg-paper-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-wine"
                placeholder="方便我們回覆你的信箱"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-medium text-ink"
              >
                聯絡電話
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                maxLength={30}
                className="w-full rounded-sm border border-border-soft bg-paper-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-wine"
                placeholder="選填，方便的話留下電話"
              />
            </div>

            <div>
              <label
                htmlFor="content"
                className="mb-2 block text-sm font-medium text-ink"
              >
                陳情內容 <span className="text-wine">*</span>
              </label>
              <textarea
                id="content"
                name="content"
                required
                rows={7}
                maxLength={2000}
                className="w-full rounded-sm border border-border-soft bg-paper-alt px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-wine"
                placeholder="請具體描述你想陳情或反映的事項……"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-sm bg-wine px-6 py-3 text-sm tracking-wide text-paper-alt transition-colors hover:bg-wine-dark"
            >
              送出陳情
            </button>

            <p className="text-xs leading-relaxed text-ink-soft">
              送出後，你的陳情內容將交由{site.shortName}相關委員會妥善保存與處理，僅供議會內部聯繫與追蹤之用，不會公開你的個人資料。
            </p>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
