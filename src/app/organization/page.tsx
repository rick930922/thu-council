import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  presidium,
  secretariat,
  proceduralCommittee,
  disciplinaryCommittee,
  financeAdminReview,
  standingCommittees,
  type Officer,
  type Committee,
} from "@/data/organization";

export const metadata: Metadata = {
  title: "組織成員介紹",
};

function OfficerCard({ officer }: { officer: Officer }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 border border-border-soft bg-paper-alt p-6">
      {officer.vacant ? (
        <div className="flex h-56 w-44 shrink-0 items-center justify-center border border-dashed border-ink-soft/40 mx-auto sm:mx-0">
          <span className="text-sm italic text-ink-soft">尚未定案</span>
        </div>
      ) : officer.photo ? (
        <img
          src={officer.photo}
          alt={officer.name}
          className="h-56 w-44 shrink-0 border border-gold/50 object-cover mx-auto sm:mx-0"
        />
      ) : (
        <div className="flex h-56 w-44 shrink-0 items-center justify-center border border-gold/50 bg-paper mx-auto sm:mx-0">
          <span className="font-display text-4xl text-gold">
            {officer.name.slice(-1)}
          </span>
        </div>
      )}
      <div className="pt-2">
        <h4 className="font-serif text-2xl font-bold text-ink">
          <span className={officer.vacant ? "italic text-ink-soft" : ""}>
            {officer.name}
          </span>{" "}
          <span className="text-wine">{officer.title}</span>
        </h4>
        {officer.meta && (
          <p className="mt-3 text-sm text-ink-soft leading-relaxed">
            {officer.meta}
          </p>
        )}
      </div>
    </div>
  );
}

function CommitteeCard({ committee }: { committee: Committee }) {
  return (
    <div className="flex h-full flex-col border border-border-soft bg-paper p-6">
      <h4 className="font-serif text-base font-semibold text-wine">
        {committee.name}
      </h4>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
        {committee.scope}
      </p>
      <p className="mt-auto pt-3 text-xs tracking-wide text-gold">
        {committee.formation}
      </p>
    </div>
  );
}

export default function OrganizationPage() {
  return (
    <div>
      <PageHero
        eyebrow="Organization"
        title="組織成員介紹"
        description="議會下設議長團、秘書處；並依《東海大學學生會組織章程》分別設有程序委員會、紀律委員會，以及財務暨行政審查、法制、權益維護、經費稽核等常設委員會，三者彼此平行，共同推動議事審查、紀律懲戒與權益經費監督工作。"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <Reveal>
          <div className="border border-border-soft bg-paper-alt p-7">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-serif text-xl font-bold text-ink">
                {presidium.name}
              </h3>
              <span className="eyebrow text-[0.65rem] text-ink-soft">
                {presidium.englishName}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {presidium.description}
            </p>
            <div className="rule my-6" />
            <div className="space-y-6">
              {presidium.members.map((m) => (
                <OfficerCard key={m.name} officer={m} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="border border-border-soft bg-paper-alt p-7">
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h3 className="font-serif text-xl font-bold text-ink">
                {secretariat.name}
              </h3>
              <span className="eyebrow text-[0.65rem] text-ink-soft">
                {secretariat.englishName}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-soft leading-relaxed">
              {secretariat.description}
            </p>
            <div className="rule my-6" />
            <div className="space-y-6">
              {secretariat.members.map((m) => (
                <OfficerCard key={m.name} officer={m} />
              ))}
            </div>
            <div className="rule my-6" />
            <p className="eyebrow text-[0.65rem] text-ink-soft mb-4">
              秘書處下設五組
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {secretariat.groups.map((g) => (
                <div key={g.id} className="border border-border-soft bg-paper p-5">
                  <h4 className="font-serif text-base font-semibold text-ink">
                    {g.name}
                  </h4>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {g.scope}
                  </p>
                  <div className="rule my-4" />
                  <dl className="space-y-1.5 text-sm">
                    <div className="flex justify-between gap-3">
                      <dt className="text-ink-soft">組長</dt>
                      <dd className="italic text-ink-soft">{g.leader}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-ink-soft">副組長</dt>
                      <dd className="italic text-ink-soft">{g.deputy}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border-soft bg-paper-alt/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <p className="eyebrow text-[0.65rem] text-ink-soft">
              {proceduralCommittee.legalBasis}、{disciplinaryCommittee.legalBasis}
            </p>
            <p className="mt-2 max-w-3xl text-xs text-ink-soft leading-relaxed">
              程序委員會與紀律委員會各自獨立設置，彼此平行，均不隸屬於對方或常設委員會。
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col border border-border-soft bg-paper-alt p-6">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="font-serif text-xl font-bold text-ink">
                    {proceduralCommittee.name}
                  </h3>
                  <span className="eyebrow text-[0.6rem] text-ink-soft">
                    {proceduralCommittee.englishName}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {proceduralCommittee.scope}
                </p>
                <p className="mt-auto pt-4 text-xs tracking-wide text-gold">
                  {proceduralCommittee.formation}
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="flex h-full flex-col border border-border-soft bg-paper-alt p-6">
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="font-serif text-xl font-bold text-ink">
                    {disciplinaryCommittee.name}
                  </h3>
                  <span className="eyebrow text-[0.6rem] text-ink-soft">
                    {disciplinaryCommittee.englishName}
                  </span>
                </div>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  {disciplinaryCommittee.scope}
                </p>
                <p className="mt-auto pt-4 text-xs tracking-wide text-gold">
                  {disciplinaryCommittee.formation}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-ink">常設委員會</h2>
            <p className="eyebrow mt-1 text-[0.65rem] text-ink-soft">
              {standingCommittees.legalBasis}
            </p>
            <p className="mt-3 max-w-3xl text-sm text-ink-soft leading-relaxed">
              本會下設四個常設委員會，彼此平行，均直屬學生議會大會。
            </p>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-8 border border-border-soft bg-paper-alt p-6">
              <h3 className="font-serif text-lg font-bold text-wine">
                {financeAdminReview.name}
              </h3>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                {financeAdminReview.scope}
              </p>
              <p className="mt-2 text-xs tracking-wide text-gold">
                {financeAdminReview.formation}
              </p>
              <div className="rule my-6" />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {financeAdminReview.subCommittees.map((c, i) => (
                  <Reveal key={c.id} delay={i * 70}>
                    <CommitteeCard committee={c} />
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {standingCommittees.committees.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <CommitteeCard committee={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
