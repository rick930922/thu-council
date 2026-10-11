"use client";

import { useState } from "react";
import Image from "next/image";

export default function NewsImageCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const hasMultiple = images.length > 1;
  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="mb-10">
      <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-sm border border-border-soft bg-paper-alt">
        <Image
          src={images[index]}
          alt={`${alt} 圖片 ${index + 1}`}
          fill
          sizes="(min-width: 640px) 28rem, 100vw"
          className="object-cover"
          priority={index === 0}
        />

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="上一張圖片"
              className="absolute left-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-ink/40 text-paper-alt transition-all hover:bg-ink/60 active:scale-90"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="下一張圖片"
              className="absolute right-2 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-ink/40 text-paper-alt transition-all hover:bg-ink/60 active:scale-90"
            >
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`前往第 ${i + 1} 張圖片`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-4 bg-paper-alt" : "w-1.5 bg-paper-alt/50"
                  }`}
                />
              ))}
            </div>

            <div className="absolute top-2 right-2 rounded-full bg-ink/40 px-2 py-0.5 text-xs text-paper-alt tracking-wide">
              {index + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
