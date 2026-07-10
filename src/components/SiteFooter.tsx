import Link from "next/link";
import { nav, site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-border-soft bg-paper-alt">
      <div className="mx-auto max-w-6xl px-6 py-12 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="eyebrow text-[0.6rem] text-ink-soft mb-2">
            {site.englishName}
          </p>
          <p className="font-serif text-lg font-bold text-ink">
            {site.fullName}
          </p>
          <p className="mt-2 text-sm text-ink-soft">{site.tagline}</p>
          <p className="mt-1 text-sm text-ink-soft">{site.term}</p>
        </div>

        <div>
          <p className="font-display text-sm tracking-wide text-wine mb-3">
            網站導覽
          </p>
          <ul className="space-y-2 text-sm text-ink-soft">
            {nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-wine transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-sm tracking-wide text-wine mb-3">
            聯絡資訊
          </p>
          <ul className="space-y-2 text-sm text-ink-soft">
            <li>{site.address}</li>
            <li>{site.phone}</li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-wine transition-colors">
                {site.email}
              </a>
            </li>
            <li>{site.officeHours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-soft">
        <p className="mx-auto max-w-6xl px-6 py-5 text-xs text-ink-soft">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
