import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { getSortedNews } from "@/data/news";

export const metadata: Metadata = {
  title: "最新消息",
};

export default function NewsPage() {
  const news = getSortedNews();

  return (
    <div>
      <PageHero
        eyebrow="News"
        title="最新消息"
        description="議會公告、會議通知、活動花絮與工作報告，掌握議會最新動態。"
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <ul className="divide-y divide-border-soft border-t border-b border-border-soft">
          {news.map((item, i) => (
            <Reveal key={item.slug} as="li" delay={Math.min(i, 5) * 60}>
              <Link
                href={`/news/${item.slug}`}
                className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-6 hover:bg-paper-alt transition-colors px-2 -mx-2"
              >
                <div className="flex items-center gap-3 sm:w-40 shrink-0">
                  <span className="text-xs text-ink-soft">{item.date}</span>
                </div>
                <div className="flex-1">
                  <span className="text-xs tracking-widest text-gold">
                    {item.category}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-ink group-hover:text-wine transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-soft leading-relaxed line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </section>
    </div>
  );
}
