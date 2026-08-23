import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getGroupedMinutes, termSlugs } from "@/data/minutes";

export const metadata: Metadata = {
  title: "議事紀錄專區",
};

export default function MinutesPage() {
  const grouped = getGroupedMinutes();
  const terms = Array.from(grouped.entries());

  return (
    <div>
      <PageHero
        eyebrow="Minutes"
        title="議事紀錄專區"
        description="歷次定期會、臨時會之議事紀錄與審議結果，依屆期彙整。點選屆別即可查看該屆完整紀錄。"
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        {terms.length === 0 ? (
          <p className="text-sm text-ink-soft">目前尚無資料。</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {terms.map(([term, records], i) => {
              const dated = records.filter((r) => r.date);
              const latest = dated[0]?.date;
              const earliest = dated[dated.length - 1]?.date;
              return (
                <Reveal key={term} delay={i * 80}>
                  <Link
                    href={`/minutes/${termSlugs[term] ?? encodeURIComponent(term)}`}
                    className="group block border border-border-soft bg-paper-alt p-7 hover:border-wine/50 transition-colors"
                  >
                    <h2 className="font-serif text-2xl font-bold text-ink group-hover:text-wine transition-colors">
                      {term}
                    </h2>
                    <div className="rule w-12 mt-3 mb-4" />
                    <p className="text-sm text-ink-soft">
                      共 {records.length} 筆紀錄
                      {earliest && latest && earliest !== latest && (
                        <> ・ {earliest} ～ {latest}</>
                      )}
                    </p>
                    <span className="mt-4 inline-block text-xs tracking-wide text-wine">
                      查看完整紀錄 →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
