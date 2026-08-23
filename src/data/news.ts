export type NewsCategory = "公告" | "會議通知" | "活動" | "報告";

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  content: string[];
  cta?: { label: string; href: string };
};

export const newsItems: NewsItem[] = [
  {
    slug: "38th-council-camp-registration",
    title: "第三十八屆學生議會議事營「議路順起來」開放報名",
    date: "2026-08-23",
    category: "活動",
    excerpt:
      "本會將於9月19日、20日於人文大樓H321舉辦議事營，兩日活動全程免費並提供中午餐食，即日起開放線上報名。",
    content: [
      "本會訂於中華民國一百一十五年九月十九日（星期六）至九月二十日（星期日），於人文大樓 H321 教室舉辦「東海大學學生議會議事營——議路順起來」，活動時間為上午九時三十分至下午五時，為期兩日。",
      "本次營隊全程參與完全免費，並提供兩日中午餐食，希望透過實作與交流，帶領同學認識議事規則與審議程序，竭誠歡迎對公共事務、議事運作有興趣的同學踴躍報名參加。",
      "即日起開放線上報名，請點選下方按鈕填寫報名表單，錄取名額有限，敬請把握機會及早報名。",
      "本活動由東海大學第三十八屆學生議會秘書處主辦。",
    ],
    cta: {
      label: "立即報名 →",
      href: "https://docs.google.com/forms/d/e/1FAIpQLSeOrmG2K8Nf9-V2NYrZrIbetUGFOulkzBPWeTZA_3qglOb2Ow/viewform",
    },
  },
];

export function getNewsBySlug(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}

export function getSortedNews() {
  return [...newsItems].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
