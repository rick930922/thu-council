"use client";

import { useLayoutEffect, useState } from "react";
import { site } from "@/data/site";

const STORAGE_KEY = "thusp-intro-seen";

export default function IntroSplash() {
  const [show, setShow] = useState(false);
  const [stage, setStage] = useState<"in" | "out">("in");

  useLayoutEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    sessionStorage.setItem(STORAGE_KEY, "1");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    setShow(true);
    const outTimer = setTimeout(() => setStage("out"), 2000);
    const hideTimer = setTimeout(() => setShow(false), 2700);
    return () => {
      clearTimeout(outTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="intro-splash" data-stage={stage} aria-hidden="true">
      <div className="intro-splash__panel intro-splash__panel--left" />
      <div className="intro-splash__panel intro-splash__panel--right" />
      <div className="intro-splash__content">
        <span className="intro-splash__mark">{site.abbreviation}</span>
        <span className="intro-splash__rule" />
        <span className="intro-splash__title">{site.fullName}</span>
      </div>
    </div>
  );
}
