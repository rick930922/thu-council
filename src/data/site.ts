export const site = {
  name: "東海大學學生議會",
  session: "第三十八屆",
  fullName: "東海大學第三十八屆學生議會",
  shortName: "東海學生議會",
  abbreviation: "THUSP",
  englishName: "Tunghai University Student Parliament",
  tagline: "監督、審議、代言——為東海學子發聲",
  term: "任期 2026.08 – 2027.07",
  address: "臺中市西屯區臺灣大道四段1727號 學生活動中心 302 室",
  email: "thu.council38@thu.edu.tw",
  phone: "04-2359-0121 分機 91038",
  officeHours: "週一至週五 12:00–18:00（會期期間另行公告）",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const nav = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於議會" },
  { href: "/organization", label: "組織成員" },
  { href: "/members", label: "學生議員" },
  { href: "/news", label: "最新消息" },
  { href: "/minutes", label: "議事紀錄" },
  { href: "/regulations", label: "法規彙編" },
] as const;
