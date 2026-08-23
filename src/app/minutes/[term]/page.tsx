import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  getMinutesForTerm,
  getTermBySlug,
  termArchives,
  termSlugs,
  type MinutesRecord,
} from "@/data/minutes";

export function generateStaticParams() {
  return Object.values(termSlugs).map((term) => ({ term }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>;
}): Promise<Metadata> {
  const { term: slug } = await params;
  const term = getTermBySlug(slug);
  return { title: term ? `${term}議事紀錄` : "議事紀錄專區" };
}

const meetingTypeColor: Record<string, string> = {
  定期會: "text-forest",
  臨時會: "text-wine",
  "公文/資料": "text-gold",
};

function groupBySession(records: MinutesRecord[]) {
  const groups = new Map<string, MinutesRecord[]>();
  for (const record of records) {
    if (!groups.has(record.session)) groups.set(record.session, []);
    groups.get(record.session)!.push(record);
  }
  return groups;
}

export default async function MinutesTermPage({
  params,
}: {
  params: Promise<{ term: string }>;
}) {
  const { term: slug } = await params;
  const term = getTermBySlug(slug);
  if (!term) notFound();

  const records = getMinutesForTerm(term);
  const sessions = Array.from(groupBySession(records).entries());
  const archiveUrl = termArchives[term];

  return (
    <div>
      <PageHero
        eyebrow="Minutes"
        title={`${term}議事紀錄`}
        description="依會期、常會彙整之議事錄、直播與相關公文資料。"
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-10">
          <Link
            href="/minutes"
            className="inline-block text-xs tracking-wide text-ink-soft hover:text-wine transition-all active:scale-[0.96]"
          >
            ← 返回議事紀錄專區
          </Link>
          {archiveUrl && (
            <a
              href={archiveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs tracking-wide text-wine hover:text-wine-dark transition-all active:scale-[0.96]"
            >
              瀏覽完整資料夾 →
            </a>
          )}
        </div>

        <div className="space-y-14">
          {sessions.map(([session, sessionRecords]) => (
            <div key={session}>
              <h2 className="font-serif text-xl font-bold text-ink">
                {session}
              </h2>
              <div className="rule w-16 mt-3 mb-8" />
              <ul className="space-y-6">
                {sessionRecords.map((record, i) => (
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
                        {record.meetingType}
                      </span>
                      {record.date && (
                        <span className="text-xs text-ink-soft">
                          {record.date}
                        </span>
                      )}
                    </div>
                    <a
                      href={record.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block font-serif text-lg font-semibold text-ink hover:text-wine transition-all active:scale-[0.98]"
                    >
                      {record.title}
                    </a>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                      {record.summary}
                    </p>
                    <a
                      href={record.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-xs tracking-wide text-wine hover:text-wine-dark transition-all active:scale-[0.96]"
                    >
                      開啟連結 →
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
