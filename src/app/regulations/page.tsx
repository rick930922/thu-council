import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getGroupedRegulations } from "@/data/regulations";

export const metadata: Metadata = {
  title: "法規彙編專區",
};

export default function RegulationsPage() {
  const grouped = getGroupedRegulations();

  return (
    <div>
      <PageHero
        eyebrow="Regulations"
        title="法規彙編專區"
        description="議會相關組織、議事、選罷與財務等自治法規全文彙編，供全校師生查閱下載（範例連結）。"
      />

      <section className="mx-auto max-w-4xl px-6 py-16 space-y-14">
        {Array.from(grouped.entries()).map(([category, regs]) => (
          <div key={category}>
            <h2 className="font-serif text-2xl font-bold text-ink">
              {category}
            </h2>
            <div className="rule w-16 mt-3 mb-6" />
            <ul className="divide-y divide-border-soft border-t border-b border-border-soft">
              {regs.map((reg, i) => (
                <Reveal key={reg.id} as="li" delay={(i % 6) * 50}>
                  <a
                    href={reg.fileUrl}
                    className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-5 px-2 -mx-2 hover:bg-paper-alt transition-colors"
                  >
                    <span className="font-serif text-base font-medium text-ink group-hover:text-wine transition-colors">
                      {reg.title}
                    </span>
                    <span className="text-xs text-ink-soft shrink-0">
                      最後修正日期：{reg.lastAmended}
                    </span>
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
