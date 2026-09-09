"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { JetBrains_Mono, Noto_Sans_TC } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-slide-mono",
});

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-slide-sans",
});

type Slide = {
  eyebrow: string;
  headline: string;
  sub: string;
  qrUrl?: string;
  qrCaption?: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "第三十八屆 學生議會",
    headline: "監督・審議・代言",
    sub: "為東海學子發聲",
  },
  {
    eyebrow: "現正招生 · 9/19–9/20",
    headline: "議路順起來",
    sub: "議事營開放報名，免費供餐，不限科系參加",
    qrUrl: "https://forms.gle/29Tgus9GXJSKpBSW6",
    qrCaption: "掃碼線上報名",
  },
  {
    eyebrow: "新服務上線",
    headline: "有話，直接對議會說",
    sub: "學生陳情處線上受理建議與訴求",
  },
  {
    eyebrow: "新任議長團",
    headline: "梁俊億・高予恩",
    sub: "政治系　議長　｜　美術系　副議長",
  },
  {
    eyebrow: "我們做什麼",
    headline: "審議一切，公開透明",
    sub: "議長團・秘書處・四大常設委員會｜會議紀錄全數公開",
  },
  {
    eyebrow: "找到我們",
    headline: "SAC108",
    sub: "週一至週五 12:00–18:00｜thusp@go.thu.edu.tw",
    qrUrl: "https://forms.gle/uGB9vQnCN8144B6s6",
    qrCaption: "掃碼加入議秘處",
  },
];

const SLIDE_DURATION = 7000;

declare global {
  interface Window {
    QRCode?: new (
      el: HTMLElement,
      options: {
        text: string;
        width: number;
        height: number;
        colorDark: string;
        colorLight: string;
        correctLevel: number;
      },
    ) => void;
  }
}

export default function SlideshowStage() {
  const [index, setIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [qrLibReady, setQrLibReady] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === stageRef.current);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  useEffect(() => {
    if (!qrLibReady || !window.QRCode) return;
    document.querySelectorAll<HTMLElement>("[data-qr-url]").forEach((el) => {
      if (el.dataset.rendered) return;
      el.dataset.rendered = "true";
      new window.QRCode!(el, {
        text: el.dataset.qrUrl!,
        width: 96,
        height: 96,
        colorDark: "#1F2A33",
        colorLight: "#F5F3EC",
        correctLevel: 2,
      });
    });
  }, [qrLibReady]);

  function toggleFullscreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      stageRef.current?.requestFullscreen();
    }
  }

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"
        strategy="afterInteractive"
        onReady={() => setQrLibReady(true)}
      />

      <div
        ref={stageRef}
        className={`sld-stage ${jetbrainsMono.variable} ${notoSansTC.variable}`}
      >
        <svg className="sld-chapel-mark" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax meet">
          <path d="M40,262 C10,190 70,95 200,42" />
          <path d="M108,262 C88,190 130,105 200,58" />
          <path d="M360,262 C390,190 330,95 200,42" />
          <path d="M292,262 C312,190 270,105 200,58" />
          <line x1="200" y1="42" x2="200" y2="262" />
          <line x1="40" y1="262" x2="360" y2="262" />
        </svg>

        <header className="sld-masthead">
          <span className="sld-masthead-name">東海大學學生議會</span>
          <span className="sld-masthead-code">SP-38 · 2026–2027</span>
        </header>

        <main className="sld-slides">
          {SLIDES.map((slide, i) => (
            <article key={slide.headline} className={`sld-slide${i === index ? " sld-active" : ""}`}>
              <span className="sld-eyebrow">{slide.eyebrow}</span>
              <h1 className="sld-headline">{slide.headline}</h1>
              <p className="sld-sub">{slide.sub}</p>
              {slide.qrUrl && (
                <div className="sld-cta-row">
                  <div className="sld-qr-card">
                    <div data-qr-url={slide.qrUrl} />
                  </div>
                  <span className="sld-cta-caption">{slide.qrCaption}</span>
                </div>
              )}
            </article>
          ))}
        </main>

        <footer className="sld-statusbar">
          <span className="sld-status-index">
            {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
          <div className="sld-progress-track">
            <div key={index} className="sld-progress-fill" />
          </div>
        </footer>

        <button
          type="button"
          onClick={toggleFullscreen}
          className="sld-fs-btn"
          aria-pressed={isFullscreen}
        >
          {isFullscreen ? "結束全螢幕" : "全螢幕播放"}
        </button>
      </div>

      <style>{`
        .sld-stage{
          --sld-paper:#EDEAE0;
          --sld-paper-alt:#E2DED2;
          --sld-card:#F5F3EC;
          --sld-ink:#1F2A33;
          --sld-ink-soft:#57646C;
          --sld-patina:#3F7168;
          --sld-seal:#9C3B2E;
          --sld-rule:#C9C2AE;

          position:relative;
          width:100%;
          height:80vh;
          overflow:hidden;
          background:var(--sld-paper);
          color:var(--sld-ink);
          font-family:var(--font-slide-sans),"PingFang TC",sans-serif;
          display:flex;
          flex-direction:column;
        }
        .sld-stage:fullscreen{
          width:100vw;
          height:100vh;
        }
        @media (prefers-color-scheme: dark){
          .sld-stage{
            --sld-paper:#161F27;
            --sld-paper-alt:#1E2A34;
            --sld-ink:#E9E4D6;
            --sld-ink-soft:#A6B2B6;
            --sld-patina:#70BCAB;
            --sld-seal:#E36B5E;
            --sld-rule:#31404A;
          }
        }

        .sld-chapel-mark{
          position:absolute;
          right:-4vw;
          bottom:-6vh;
          width:56vw;
          max-width:820px;
          height:auto;
          opacity:0.10;
          stroke:var(--sld-patina);
          fill:none;
          stroke-width:2.5;
          z-index:0;
          pointer-events:none;
        }

        .sld-masthead{
          position:relative;
          z-index:2;
          display:flex;
          align-items:center;
          justify-content:space-between;
          padding:clamp(20px,3vh,36px) clamp(28px,4vw,64px) clamp(14px,2vh,20px);
          border-bottom:1px solid var(--sld-rule);
          flex:0 0 auto;
        }
        .sld-masthead-name{
          font-family:"Noto Serif TC",serif;
          font-weight:700;
          letter-spacing:.06em;
          font-size:clamp(14px,1.6vw,20px);
          color:var(--sld-ink-soft);
        }
        .sld-masthead-code{
          font-family:var(--font-slide-mono),monospace;
          font-size:clamp(12px,1.3vw,16px);
          letter-spacing:.08em;
          color:var(--sld-patina);
        }

        .sld-slides{
          position:relative;
          flex:1 1 auto;
          z-index:2;
        }
        .sld-slide{
          position:absolute;
          inset:0;
          display:flex;
          flex-direction:column;
          justify-content:center;
          gap:clamp(14px,2vh,22px);
          padding:clamp(28px,5vw,96px);
          opacity:0;
          transform:translateY(18px) scale(.99);
          transition:opacity .9s ease, transform .9s ease;
          pointer-events:none;
        }
        .sld-slide.sld-active{
          opacity:1;
          transform:translateY(0) scale(1);
          pointer-events:auto;
        }
        @media (prefers-reduced-motion: reduce){
          .sld-slide{transition:opacity .05s linear; transform:none;}
        }

        .sld-eyebrow{
          font-family:var(--font-slide-mono),monospace;
          font-size:clamp(13px,1.5vw,18px);
          letter-spacing:.14em;
          text-transform:uppercase;
          color:var(--sld-seal);
        }
        .sld-headline{
          font-family:"Noto Serif TC",serif;
          font-weight:900;
          font-size:clamp(2.4rem,7.2vw,6.2rem);
          line-height:1.08;
          text-wrap:balance;
          max-width:20ch;
          color:var(--sld-ink);
          margin:0;
        }
        .sld-sub{
          font-size:clamp(1.05rem,2.1vw,1.7rem);
          color:var(--sld-ink-soft);
          max-width:42ch;
          line-height:1.5;
          margin:0;
        }

        .sld-cta-row{
          display:flex;
          align-items:center;
          gap:clamp(18px,2.4vw,28px);
          margin-top:clamp(8px,1.4vh,16px);
        }
        .sld-qr-card{
          background:var(--sld-card);
          padding:10px;
          border-radius:6px;
          line-height:0;
          box-shadow:0 6px 18px rgba(0,0,0,.18);
        }
        .sld-cta-caption{
          font-family:var(--font-slide-mono),monospace;
          font-size:clamp(13px,1.4vw,16px);
          color:var(--sld-ink-soft);
          letter-spacing:.02em;
        }

        .sld-statusbar{
          position:relative;
          z-index:2;
          display:flex;
          align-items:center;
          gap:20px;
          padding:0 clamp(28px,4vw,64px) clamp(20px,3vh,32px);
          flex:0 0 auto;
        }
        .sld-status-index{
          font-family:var(--font-slide-mono),monospace;
          font-size:clamp(12px,1.2vw,15px);
          color:var(--sld-ink-soft);
          white-space:nowrap;
          font-variant-numeric:tabular-nums;
        }
        .sld-progress-track{
          flex:1 1 auto;
          height:2px;
          background:var(--sld-rule);
          position:relative;
          overflow:hidden;
        }
        .sld-progress-fill{
          position:absolute;
          inset:0 100% 0 0;
          background:var(--sld-patina);
          width:0%;
          animation:sld-fillbar ${SLIDE_DURATION}ms linear forwards;
        }
        @keyframes sld-fillbar{
          from{width:0%;}
          to{width:100%;}
        }
        @media (prefers-reduced-motion: reduce){
          .sld-progress-fill{animation-duration:.05s;}
        }

        .sld-fs-btn{
          position:absolute;
          right:clamp(16px,3vw,32px);
          bottom:clamp(56px,9vh,84px);
          z-index:3;
          font-family:var(--font-slide-mono),monospace;
          font-size:13px;
          letter-spacing:.04em;
          color:var(--sld-ink);
          background:var(--sld-card);
          border:1px solid var(--sld-rule);
          border-radius:999px;
          padding:8px 16px;
          cursor:pointer;
          box-shadow:0 6px 18px rgba(0,0,0,.18);
        }
        .sld-fs-btn:hover{
          border-color:var(--sld-patina);
          color:var(--sld-patina);
        }
      `}</style>
    </>
  );
}
