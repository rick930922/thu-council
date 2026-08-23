import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getGroupedMinutes, termArchives } from "@/data/minutes";

export const metadata: Metadata = {
  title: "議事紀錄專區",
};

const meetingTypeColor: Record<string, string> = {
  定期會: "text-forest",
  臨時會: "text-wine",
  "公文/資料": "text-gold",
};

export default function MinutesPage() {
  const grouped = getGroupedMinutes();

  return (
    <div>
      <PageHero
        eyebrow="Minutes"
        title="議事紀錄專區"
        description="歷次定期會、臨時會之議事紀錄與審議結果，依屆期彙整如下。點選標題可下載完整會議紀錄。"
      />

      <section className="mx-auto max-w-4xl px-6 py-16 space-y-14">
        {Array.from(grouped.entries()).map(([session, records]) => (
          <div key={session}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-serif text-2xl font-bold text-ink">
                {session}
              </h2>
              {termArchives[session] && (
                <a
                  href={termArchives[session]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-wide text-wine hover:text-wine-dark"
                >
                  瀏覽完整資料夾 →
                </a>
              )}
            </div>
            <div className="rule w-16 mt-3 mb-8" />
            <ul className="space-y-6">
              {records.map((record, i) => (
                <Reveal
                  key={record.id}
                  as="li"
                  delay={(i % 5) * 70}
                  className="block border border-border-soft bg-paper-alt p-6"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`text-xs tracking-widest ${
                        meetingTypeColor[record.meetingType]
                      }`}
                    >
                      {record.session}・{record.meetingType}
                    </span>
                    {record.date && (
                      <span className="text-xs text-ink-soft">{record.date}</span>
                    )}
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
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
