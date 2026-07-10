import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { members } from "@/data/members";

export const metadata: Metadata = {
  title: "學生議員介紹",
};

export default function MembersPage() {
  return (
    <div>
      <PageHero
        eyebrow="Council Members"
        title="學生議員介紹"
        description="本屆議會共有十四位學生議員，分別代表各學院選區及共同選區，並輪值駐點議會辦公室接受同學陳情與提案諮詢。"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="flex flex-col border border-border-soft bg-paper-alt p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink">
                    {member.name}
                  </h3>
                  <p className="text-sm text-wine mt-0.5">{member.title}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-sm text-gold">
                  {member.name.slice(-1)}
                </span>
              </div>

              <div className="rule my-4" />

              <dl className="space-y-2 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-soft">選區</dt>
                  <dd className="text-ink text-right">{member.constituency}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-soft">所屬委員會</dt>
                  <dd className="text-ink text-right">{member.committee}</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-soft">接待時段</dt>
                  <dd className="text-ink text-right">{member.officeHours}</dd>
                </div>
              </dl>

              <p className="mt-4 text-sm text-ink-soft leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
