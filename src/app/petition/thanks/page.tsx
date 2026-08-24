import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "陳情已送出",
};

export default function PetitionThanksPage() {
  return (
    <div>
      <PageHero eyebrow="STUDENT PETITION" title="陳情已送出" />

      <section className="mx-auto max-w-2xl px-6 py-16">
        <Reveal>
          <p className="leading-relaxed text-ink-soft">
            感謝你花時間告訴{site.shortName}你的想法。我們已經收到這筆陳情，如有需要會透過你留下的聯絡方式與你聯繫。
          </p>

          <Link
            href="/"
            className="mt-10 inline-block rounded-sm bg-wine px-6 py-3 text-sm tracking-wide text-paper-alt transition-colors hover:bg-wine-dark"
          >
            返回首頁
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
