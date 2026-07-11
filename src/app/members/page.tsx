import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getGroupedMembers } from "@/data/members";

export const metadata: Metadata = {
  title: "學生議員介紹",
};

export default function MembersPage() {
  const grouped = getGroupedMembers();
  const total = Array.from(grouped.values()).reduce(
    (sum, list) => sum + list.length,
    0,
  );

  return (
    <div>
      <PageHero
        eyebrow="Council Members"
        title="學生議員介紹"
        description={`本屆議會共有${total}位學生議員，依各學院選區與研究所選區選出，代表全體同學監督議事。`}
      />

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-14">
        {Array.from(grouped.entries()).map(([college, list]) => (
          <div key={college}>
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-2xl font-bold text-ink">
                {college}
              </h2>
              <span className="text-sm text-ink-soft">{list.length} 位</span>
            </div>
            <div className="rule w-16 mt-3 mb-8" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((member, i) => (
                <Reveal key={member.id} delay={(i % 6) * 60}>
                  <div className="flex items-center gap-4 border border-border-soft bg-paper-alt p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-sm text-gold">
                      {member.name.slice(-1)}
                    </span>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-ink">
                        {member.name}
                      </h3>
                      {member.department && (
                        <p className="mt-0.5 text-sm text-ink-soft">
                          {member.department}
                        </p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
