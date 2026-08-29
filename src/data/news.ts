export type NewsCategory = "公告" | "會議通知" | "活動" | "報告";

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  content: string[];
  images?: string[];
  cta?: { label: string; href: string };
};

export const newsItems: NewsItem[] = [
  {
    slug: "38th-speaker-election-result",
    title: "第三十八屆學生議會正副議長選舉結果公告",
    date: "2026-08-28",
    category: "公告",
    excerpt:
      "第三十八屆學生議會正副議長選舉結果正式出爐，政治系梁俊億當選議長、美術系高予恩當選副議長。",
    images: [
      "/news/38th-speaker-election-cover.png",
      "/news/38th-speaker-election-notice.png",
    ],
    content: [
      "東海大學第三十八屆學生議會成立大會於115年6月1日舉行，同時辦理正、副議長選舉，經議員投票及開票程序後，選舉結果正式出爐。",
      "本次議長選舉中，政治系梁俊億獲得17票，政治系張仲毅獲得8票，由梁俊億當選第三十八屆學生議會議長。",
      "副議長選舉部分，美術系高予恩獲得22票，音樂系洪采妤、環工系陳則宇及社會系蔡玗霖各獲1票，最終由高予恩當選第三十八屆學生議會副議長。",
      "依據《東海大學學生議會組織法》及《東海大學學生議會正副議長選舉罷免辦法》，本會秘書處正式向全體東海大學師生公告本次選舉結果。",
      "第三十八屆學生議會正、副議長將依相關法規主持議事、推動議會運作，與全體議員共同維護學生自治與議事制度之正常運作。",
    ],
  },
  {
    slug: "student-petition-office-launch",
    title: "本會網站新增「學生陳情處」，即日起開放使用",
    date: "2026-08-24",
    category: "公告",
    excerpt:
      "本會官方網站今日新增「學生陳情處」線上服務，同學可直接於網站填寫表單提出建議與訴求，並可選擇指定陳情對象，議會將妥善保存並追蹤處理。",
    content: [
      "本會官方網站於中華民國一百一十五年八月二十四日新增「學生陳情處」線上服務功能，同學對校園生活、議會運作或自治事務如有任何建議與訴求，皆可透過網站表單直接向本會反映，毋須再透過紙本或其他管道轉達。",
      "同學於表單中填寫姓名、聯絡方式與陳情內容後，可自行選擇欲陳情之特定學生議員，議會秘書處收到後將轉交該議員處理；若不指定對象，則交由相關委員會統一追蹤與跟進，確保每一筆陳情都能被妥善記錄與回應。",
      "本會重申，所有透過陳情處提交之個人資料，僅供議會內部聯繫與追蹤之用，絕不對外公開，同學可安心使用，踴躍反映意見，共同促進校園自治事務之推動。",
      "本功能由東海大學第三十八屆學生議會秘書處建置維運。",
    ],
    cta: {
      label: "前往學生陳情處 →",
      href: "/petition",
    },
  },
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
      "即日起開放線上報名，請點選下方按鈕填寫報名表單，錄取名額有限，敬請把握機會及早報名。錄取與否將以電子郵件通知為準，請留意信箱訊息。",
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
