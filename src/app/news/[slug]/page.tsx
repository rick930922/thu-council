import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug, newsItems } from "@/data/news";

export function generateStaticParams() {
  return newsItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  return { title: item ? item.title : "最新消息" };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);

  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/news"
        className="text-sm text-wine hover:text-wine-dark tracking-wide"
      >
        ← 返回最新消息
      </Link>

      <div className="mt-8 flex items-center gap-3">
        <span className="text-xs tracking-widest text-gold">
          {item.category}
        </span>
        <span className="text-xs text-ink-soft">{item.date}</span>
      </div>

      <h1 className="mt-3 font-serif text-3xl sm:text-4xl font-bold leading-tight text-ink">
        {item.title}
      </h1>

      <div className="rule my-8" />

      <div className="space-y-5">
        {item.content.map((paragraph, index) => (
          <p key={index} className="text-ink-soft leading-loose">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
}
