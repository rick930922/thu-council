export type OrgMember = {
  name: string;
  title: string;
  photo?: string;
};

export type OrgUnit = {
  id: string;
  name: string;
  englishName?: string;
  description: string;
  convener?: string;
  members: OrgMember[];
};

export const presidium: OrgUnit = {
  id: "presidium",
  name: "議長團",
  englishName: "Presidium",
  description:
    "綜理議會會務，對外代表議會，主持大會與臨時會議程，並協調各常設委員會運作。",
  members: [
    { name: "梁俊億", title: "議長", photo: "/members/liang-junyi.jpg" },
    { name: "陳柏宇", title: "副議長" },
  ],
};

export const secretariat: OrgUnit = {
  id: "secretariat",
  name: "秘書處",
  englishName: "Secretariat",
  description:
    "辦理議會行政庶務、會議紀錄整理、公文往來與新聞稿發布，為議長團及各委員會之幕僚單位。",
  convener: "謝政諺（秘書長）",
  members: [
    { name: "謝政諺", title: "秘書長", photo: "/members/xie-zhengyan.jpg" },
    { name: "郭子謙", title: "副秘書長" },
    { name: "許雅筑", title: "文書組長" },
    { name: "賴信宏", title: "資訊組員" },
  ],
};

export const committees: OrgUnit[] = [
  {
    id: "legislation",
    name: "法制委員會",
    englishName: "Legislative Affairs Committee",
    description:
      "審查自治法規之制定、修正與廢止案，確保議事程序與法規體系之一致性與正當性。",
    convener: "陳柏宇",
    members: [
      { name: "陳柏宇", title: "召集人" },
      { name: "王品叡", title: "委員" },
      { name: "李冠緯", title: "委員" },
      { name: "曾詩涵", title: "委員" },
    ],
  },
  {
    id: "budget",
    name: "預算審查委員會",
    englishName: "Budget Review Committee",
    description:
      "審議學生自治會年度預決算案，監督各單位經費執行情形，受理經費編列諮詢。",
    convener: "張書睿",
    members: [
      { name: "張書睿", title: "召集人" },
      { name: "何芸溱", title: "委員" },
      { name: "劉宗翰", title: "委員" },
    ],
  },
  {
    id: "oversight",
    name: "考核委員會",
    englishName: "Oversight Committee",
    description:
      "監督學生自治會行政部門施政進度與議決事項執行成效，辦理質詢與施政報告排程。",
    convener: "游子晴",
    members: [
      { name: "游子晴", title: "召集人" },
      { name: "蔡承翰", title: "委員" },
      { name: "簡妤安", title: "委員" },
    ],
  },
  {
    id: "public-relations",
    name: "公共關係委員會",
    englishName: "Public Relations Committee",
    description:
      "統籌議會對外溝通、校園座談與陳情接待事宜，經營議會社群媒體與新聞發布。",
    convener: "許雅筑",
    members: [
      { name: "許雅筑", title: "召集人" },
      { name: "林致遠", title: "委員" },
      { name: "邱柏成", title: "委員" },
    ],
  },
];
