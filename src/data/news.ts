export type NewsCategory = "公告" | "會議通知" | "活動" | "報告";

export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  excerpt: string;
  content: string[];
};

export const newsItems: NewsItem[] = [
  {
    slug: "38th-3rd-regular-session-notice",
    title: "第三十八屆學生議會第三次定期會 開議通知",
    date: "2026-06-20",
    category: "會議通知",
    excerpt:
      "第三十八屆學生議會第三次定期會訂於七月初召開，即日起公告議程與提案徵集期程，歡迎各系所學生代表列席旁聽。",
    content: [
      "本會第三次定期會訂於中華民國一百一十五年七月三日（星期五）下午二時，假學生活動中心議事廳召開，會期預計為期二日。",
      "本次會期審議事項包含學生自治會年度預算案、社團輔導金分配辦法修正案，以及數項自治法規之增修提案。",
      "依本會議事規則，各系所學生如欲提案或列席發言，請於會議召開三日前將提案書送交議會辦公室或以電子郵件方式提出申請。",
      "會議全程對外開放旁聽，歡迎關心校園公共事務之同學一同參與監督。",
    ],
  },
  {
    slug: "budget-review-committee-established",
    title: "預算審查委員會成立，即日起受理各單位經費疑義諮詢",
    date: "2026-06-08",
    category: "公告",
    excerpt:
      "為強化學生自治財務監督機制，本屆議會成立預算審查委員會，統籌審議年度預決算案並提供各系學會經費諮詢服務。",
    content: [
      "為落實學生自治財務透明化，本屆議會於常設委員會下增設「預算審查委員會」，由財政法制召集人擔任主席，統籌審議學生自治會年度預決算案。",
      "委員會即日起開放各系學會、社團團體就經費編列、核銷程序等疑義提出諮詢申請，詳情請洽議會辦公室或來信詢問。",
    ],
  },
  {
    slug: "campus-town-hall-2026",
    title: "「議會開講」校園座談會 圓滿落幕",
    date: "2026-05-15",
    category: "活動",
    excerpt:
      "本屆議會於五月中旬舉辦首場「議會開講」校園座談會，就宿舍熱水系統改善、夜間校園安全等議題與同學面對面交流。",
    content: [
      "本屆議會於五月十五日中午在文理大道舉辦「議會開講」校園座談會，邀請住宿服務組、總務處代表與同學代表共同對談，議題聚焦於宿舍熱水系統改善進度、夜間校園安全巡邏路線調整等民生議題。",
      "現場逾八十位同學到場提問及反映意見，議會將彙整座談紀錄，作為後續質詢與提案之依據。",
      "感謝所有到場關心校園公共事務的同學，本會將持續辦理類似座談，讓議事討論更貼近學生生活現場。",
    ],
  },
  {
    slug: "election-regulations-amendment-passed",
    title: "《學生議員選舉罷免辦法》修正案三讀通過",
    date: "2026-04-22",
    category: "報告",
    excerpt:
      "第三十八屆學生議會第二次臨時會三讀通過《學生議員選舉罷免辦法》部分條文修正案，明定候選人資格與選舉公告期程。",
    content: [
      "本會於四月二十二日召開之第二次臨時會，三讀通過《學生議員選舉罷免辦法》部分條文修正案，修正重點包括：候選人連署人數門檻調整、選舉公告期程延長為十四日，以及增訂線上投票之相關規範。",
      "修正條文已送交自治會秘書處備查，並將刊登於本會法規彙編專區，自公告日起施行。",
    ],
  },
  {
    slug: "constituent-service-hours-announcement",
    title: "議員接待日開跑，各選區議員輪值時段公告",
    date: "2026-03-10",
    category: "公告",
    excerpt:
      "為增進與同學之溝通管道，本屆議會自三月起試辦「議員接待日」，各選區議員將於固定時段駐點議會辦公室接受陳情。",
    content: [
      "本屆議會自三月起試辦「議員接待日」制度，各選區學生議員將輪流於議會辦公室（學生活動中心 302 室）駐點，接受同學陳情、意見反映及提案諮詢。",
      "詳細輪值時段請參閱「學生議員介紹」頁面，或於議會辦公室門口公告欄查詢。",
    ],
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
