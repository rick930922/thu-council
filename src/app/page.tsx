import Link from "next/link";
import { site } from "@/data/site";
import { getSortedNews } from "@/data/news";
import Reveal from "@/components/Reveal";

const quickLinks = [
  {
    numeral: "I",
    title: "組織成員介紹",
    description: "議長團、秘書處與四個常設委員會編制與職掌。",
    href: "/organization",
  },
  {
    numeral: "II",
    title: "學生議員介紹",
    description: "各選區學生議員名單、所屬委員會與接待時段。",
    href: "/members",
  },
  {
    numeral: "III",
    title: "議事紀錄專區",
    description: "歷次定期會、臨時會議事錄與審議結果。",
    href: "/minutes",
  },
  {
    numeral: "IV",
    title: "法規彙編專區",
    description: "組織、議事、選罷與財務相關自治法規全文。",
    href: "/regulations",
  },
];

export default function Home() {
  const latestNews = getSortedNews().slice(0, 3);

  return (
    <div>
      <section className="border-b border-border-soft">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="eyebrow text-xs text-wine mb-5">
            {site.englishName}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-ink max-w-3xl">
            {site.fullName}
          </h1>
          <p className="mt-6 max-w-xl font-display text-xl italic text-ink-soft">
            {site.tagline}
          </p>
          <p className="mt-2 text-sm tracking-wide text-ink-soft">
            {site.term}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/organization"
              className="rounded-sm bg-wine px-6 py-3 text-sm tracking-wide text-paper-alt hover:bg-wine-dark transition-colors"
            >
              組織成員
            </Link>
            <Link
              href="/members"
              className="rounded-sm bg-wine px-6 py-3 text-sm tracking-wide text-paper-alt hover:bg-wine-dark transition-colors"
            >
              議員名單
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-serif text-2xl font-bold text-ink">
              最新消息
            </h2>
            <Link
              href="/news"
              className="text-sm text-wine hover:text-wine-dark tracking-wide"
            >
              查看全部 →
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-3">
          {latestNews.map((item, i) => (
            <Reveal key={item.slug} delay={i * 80}>
              <Link
                href={`/news/${item.slug}`}
                className="group flex flex-col border border-border-soft bg-paper-alt p-6 hover:border-wine/50 transition-colors h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs tracking-widest text-gold">
                    {item.category}
                  </span>
                  <span className="text-xs text-ink-soft">{item.date}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-wine transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border-soft bg-paper-alt">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-ink mb-10">
              快速連結
            </h2>
          </Reveal>
          <div className="grid gap-px bg-border-soft sm:grid-cols-2 lg:grid-cols-4 border border-border-soft">
            {quickLinks.map((link, i) => (
              <Reveal key={link.href} delay={i * 80}>
                <Link
                  href={link.href}
                  className="group flex h-full flex-col justify-between bg-paper p-7 hover:bg-paper-alt transition-colors"
                >
                  <span className="font-display text-3xl text-gold">
                    {link.numeral}
                  </span>
                  <div className="mt-6">
                    <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-wine transition-colors">
                      {link.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
