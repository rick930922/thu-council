import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import {
  committees,
  presidium,
  secretariat,
  type OrgUnit,
} from "@/data/organization";

export const metadata: Metadata = {
  title: "組織成員介紹",
};

function OrgUnitCard({ unit }: { unit: OrgUnit }) {
  return (
    <div className="border border-border-soft bg-paper-alt p-7">
      <div className="flex items-baseline justify-between gap-4 flex-wrap">
        <h3 className="font-serif text-xl font-bold text-ink">{unit.name}</h3>
        {unit.englishName && (
          <span className="eyebrow text-[0.65rem] text-ink-soft">
            {unit.englishName}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm text-ink-soft leading-relaxed">
        {unit.description}
      </p>
      <div className="rule my-6" />
      <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {unit.members.map((member) => (
          <li
            key={`${unit.id}-${member.name}`}
            className="flex items-baseline justify-between border-b border-border-soft/70 py-1.5 text-sm"
          >
            <span className="text-ink">{member.name}</span>
            <span className="text-ink-soft">{member.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function OrganizationPage() {
  return (
    <div>
      <PageHero
        eyebrow="Organization"
        title="組織成員介紹"
        description="議會下設議長團、秘書處，以及法制、預算審查、考核、公共關係四個常設委員會，分工推動議事、監督與對外溝通工作。"
      />

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <OrgUnitCard unit={presidium} />
        <OrgUnitCard unit={secretariat} />
      </section>

      <section className="border-t border-border-soft bg-paper-alt/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-2xl font-bold text-ink mb-4">
            常設委員會
          </h2>
          <div className="rule w-16 mb-10" />
          <div className="grid gap-8 lg:grid-cols-2">
            {committees.map((committee) => (
              <OrgUnitCard key={committee.id} unit={committee} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
