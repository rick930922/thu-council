"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/data/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-paper-alt font-display text-lg text-wine">
            THU
          </span>
          <span className="flex flex-col leading-tight">
            <span className="eyebrow text-[0.6rem] text-ink-soft">
              {site.englishName}
            </span>
            <span className="font-serif text-lg font-bold tracking-wide text-ink group-hover:text-wine transition-colors">
              {site.fullName}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3 py-2 text-[0.95rem] tracking-wide transition-colors ${
                isActive(item.href)
                  ? "text-wine font-semibold"
                  : "text-ink-soft hover:text-wine"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-gold" />
              )}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-border-soft rounded-md"
          aria-label="開啟選單"
          aria-expanded={open}
        >
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border-soft bg-paper-alt px-6 py-3 flex flex-col">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`py-2.5 border-b border-border-soft/70 last:border-none ${
                isActive(item.href) ? "text-wine font-semibold" : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
