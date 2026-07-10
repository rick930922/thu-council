import type { Metadata } from "next";
import { Noto_Serif_TC, EB_Garamond } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const notoSerifTC = Noto_Serif_TC({
  variable: "--font-serif-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "東海大學第三十八屆學生議會",
    template: "%s｜東海大學第三十八屆學生議會",
  },
  description:
    "東海大學第三十八屆學生議會官方網站——組織成員介紹、學生議員介紹、最新消息、議事紀錄與法規彙編。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${notoSerifTC.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-serif">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
