import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { getGroupedMinutes } from "@/data/minutes";

export const metadata: Metadata = {
  title: "議事紀錄專區",
};

export default function MinutesPage() {
  const grouped = getGroupedMinutes();

  return (
    <div>
      <PageHero
        eyebrow="Minutes"
        title="議事紀錄專區"
        description="歷次定期會、臨時會之議事紀錄與審議結果，依屆期彙整如下。點選標題可下載完整會議紀錄（範例連結）。"
      />

      <section className="mx-auto max-w-4xl px-6 py-16 space-y-14">
        {Array.from(grouped.entries()).map(([session, records]) => (
          <div key={session}>
            <h2 className="font-serif text-2xl font-bold text-ink">
              {session}
            </h2>
            <div className="rule w-16 mt-3 mb-8" />
            <ul className="space-y-6">
              {records.map((record) => (
                <li
                  key={record.id}
                  className="border border-border-soft bg-paper-alt p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`text-xs tracking-widest ${
                        record.meetingType === "定期會"
                          ? "text-forest"
                          : "text-wine"
                      }`}
                    >
                      {record.session}・{record.meetingType}
                    </span>
                    <span className="text-xs text-ink-soft">{record.date}</span>
                  </div>
                  <a
                    href={record.fileUrl}
                    className="mt-2 block font-serif text-lg font-semibold text-ink hover:text-wine transition-colors"
                  >
                    {record.title}
                  </a>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {record.summary}
                  </p>
                  <a
                    href={record.fileUrl}
                    className="mt-3 inline-block text-xs tracking-wide text-wine hover:text-wine-dark"
                  >
                    下載完整紀錄 →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
