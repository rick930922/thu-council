import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "關於議會",
};

const powers = [
  {
    title: "立法權",
    description:
      "制定、修正與廢止學生自治相關法規，建立學生自治體系之制度基礎。",
  },
  {
    title: "預決算審議權",
    description:
      "審議學生自治會年度預算案與決算案，監督經費編列合理性與執行成效。",
  },
  {
    title: "質詢與調查權",
    description:
      "得要求行政部門就施政事項提出報告並備質詢，必要時得組成專案小組調查。",
  },
  {
    title: "同意權",
    description:
      "對自治會重要人事任命案、跨校聯合會事務等重大事項行使同意權。",
  },
];

const history = [
  {
    year: "1990",
    text: "東海大學學生自治體系初步建立，設立學生代表大會作為議事機關前身。",
  },
  {
    year: "2003",
    text: "學生代表大會改制為「學生議會」，正式採行代議民主之議事運作模式。",
  },
  {
    year: "2015",
    text: "議事規則全面修訂，增訂旁聽與陳情制度，強化議事公開透明。",
  },
  {
    year: "2025",
    text: "第三十八屆學生議會成立，持續深化議會與同學之間的溝通橋樑。",
  },
];

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About the Council"
        title="關於議會"
        description="學生議會是東海大學學生自治體系中的最高民意機關，代表全體同學行使立法、預決算審議、質詢與同意等職權，監督學生自治會各部門施政。"
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-serif text-2xl font-bold text-ink mb-4">議會宗旨</h2>
        <div className="rule w-16 mb-6" />
        <p className="max-w-3xl text-ink-soft leading-relaxed">
          {site.fullName}秉持「監督、審議、代言」之精神，代表全體東海學子監督學生自治會行政部門之運作，審議攸關同學權益之自治法規與經費預算，並作為同學意見反映至校方與自治體系的重要管道。議會全體議員由各學院選區同學直接選舉產生，任期一年，{site.term}。
        </p>
      </section>

      <section className="border-t border-border-soft bg-paper-alt">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-serif text-2xl font-bold text-ink mb-4">職權範圍</h2>
          <div className="rule w-16 mb-10" />
          <div className="grid gap-8 sm:grid-cols-2">
            {powers.map((power, i) => (
              <Reveal key={power.title} delay={i * 80}>
                <div className="border-l-2 border-gold pl-6">
                  <h3 className="font-serif text-lg font-semibold text-wine">
                    {power.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {power.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-serif text-2xl font-bold text-ink mb-4">議會沿革</h2>
        <div className="rule w-16 mb-10" />
        <ol className="space-y-8">
          {history.map((entry, i) => (
            <Reveal
              key={entry.year}
              as="li"
              delay={i * 80}
              className="flex gap-6"
            >
              <span className="font-display text-xl text-gold w-16 shrink-0">
                {entry.year}
              </span>
              <p className="text-ink-soft leading-relaxed border-l border-border-soft pl-6">
                {entry.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>
    </div>
  );
}
