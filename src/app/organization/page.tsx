import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  presidium,
  secretariat,
  proceduralTrack,
  disciplinaryTrack,
  type Officer,
  type Committee,
} from "@/data/organization";

export const metadata: Metadata = {
  title: "組織成員介紹",
};

function OfficerRow({ officer }: { officer: Officer }) {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-border-soft/70 py-1.5 text-sm">
      <span className="flex items-center gap-3">
        {officer.vacant ? (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-ink-soft/40" />
        ) : officer.photo ? (
          <img
            src={officer.photo}
            alt={officer.name}
            className="h-10 w-10 shrink-0 rounded-full border border-gold/50 object-cover"
          />
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display text-sm text-gold">
            {officer.name.slice(-1)}
          </span>
        )}
        <span className={officer.vacant ? "italic text-ink-soft" : "text-ink"}>
          {officer.name}
        </span>
      </span>
      <span className="text-ink-soft">{officer.title}</span>
    </li>
  );
}

function CommitteeCard({ committee }: { committee: Committee }) {
  return (
    <div className="border border-border-soft bg-paper p-6">
      <h4 className="font-serif text-base font-semibold text-wine">
        {committee.name}
      </h4>
      <p className="mt-2 text-sm text-ink-soft leading-relaxed">
        {committee.scope}
      </p>
      <p className="mt-3 text-xs tracking-wide text-gold">
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
        description="議會下設議長團、秘書處，並依《東海大學學生議會組織法》分設程序委員會、紀律委員會兩大體系，各轄常設委員會分工推動議事審查、權益維護與經費監督工作。"
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
            <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {presidium.members.map((m) => (
                <OfficerRow key={m.name} officer={m} />
              ))}
            </ul>
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
            <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {secretariat.members.map((m) => (
                <OfficerRow key={m.name} officer={m} />
              ))}
            </ul>
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
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border-soft bg-paper-alt/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="font-serif text-2xl font-bold text-ink">
                {proceduralTrack.name}
              </h2>
              <span className="eyebrow text-[0.65rem] text-ink-soft">
                {proceduralTrack.englishName}
              </span>
            </div>
            <div className="rule w-16 mt-3 mb-6" />
            <p className="max-w-3xl text-sm text-ink-soft leading-relaxed">
              {proceduralTrack.scope}
            </p>
            <p className="mt-2 text-xs tracking-wide text-gold">
              {proceduralTrack.formation}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {proceduralTrack.committees.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <CommitteeCard committee={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border-soft">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4 flex-wrap">
              <h2 className="font-serif text-2xl font-bold text-ink">
                {disciplinaryTrack.name}
              </h2>
              <span className="eyebrow text-[0.65rem] text-ink-soft">
                {disciplinaryTrack.englishName}
              </span>
            </div>
            <div className="rule w-16 mt-3 mb-6" />
            <p className="max-w-3xl text-sm text-ink-soft leading-relaxed">
              {disciplinaryTrack.scope}
            </p>
            <p className="mt-2 text-xs tracking-wide text-gold">
              {disciplinaryTrack.formation}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow mt-10 text-[0.65rem] text-ink-soft">
              {disciplinaryTrack.parentCommitteeName}下設四個委員會
            </p>
          </Reveal>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {disciplinaryTrack.committees.map((c, i) => (
              <Reveal key={c.id} delay={i * 70}>
                <CommitteeCard committee={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
