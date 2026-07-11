export type Officer = {
  name: string;
  title: string;
  photo?: string;
  vacant?: boolean;
};

export type SecretariatGroup = {
  id: string;
  name: string;
  scope: string;
};

export type Committee = {
  id: string;
  name: string;
  formation: string;
  scope: string;
};

export const presidium = {
  name: "議長團",
  englishName: "Presidium",
  description:
    "由學生議員互選產生議長、副議長各一人。議長本公平中立原則主持會議、維持議事秩序，並對外代表議會；副議長協助議長綜理會務。",
  members: [
    { name: "梁俊億", title: "議長", photo: "/members/liang-junyi.jpg" },
    { name: "高予恩", title: "副議長" },
  ] satisfies Officer[],
};

export const secretariat = {
  name: "秘書處",
  englishName: "Secretariat",
  description:
    "秘書長、副秘書長由議長遴選，報告大會後提請任命；承議長之命處理議會事務並指揮監督所屬職員，得視需要設執行秘書一人。",
  members: [
    { name: "謝政諺", title: "秘書長", photo: "/members/xie-zhengyan.jpg" },
    { name: "尚未定案", title: "副秘書長", vacant: true },
  ] satisfies Officer[],
  groups: [
    {
      id: "document",
      name: "文書組",
      scope: "文書收發與檔案管理、文稿撰擬、印信典守、會議紀錄及議會會議之錄影錄音。",
    },
    {
      id: "procedural-affairs",
      name: "議事組",
      scope:
        "議程編擬、議案文件整理、議員出缺席業務，並承辦程序委員會與紀律委員會相關庶務。",
    },
    {
      id: "general-affairs",
      name: "總務組",
      scope: "財產購置與營繕、膳食交通管理、款項出納及預算經費使用等總務事宜。",
    },
    {
      id: "press",
      name: "新聞組",
      scope: "發布議會消息與新聞稿、公報編印發行、網頁資料維護及對外公共關係。",
    },
    {
      id: "legal-affairs",
      name: "法政組",
      scope:
        "審議學生會法規修正、廢止及草案事項，並就影響學生權益之法規案向大會提出建議報告。",
    },
  ] satisfies SecretariatGroup[],
};

export const proceduralTrack = {
  name: "程序委員會",
  englishName: "Procedural Committee",
  formation: "議長、副議長為當然召集委員，其餘議員得自由加入，人數不限。",
  scope:
    "審定各項提案手續是否完備、收受議案、決定議案之合併與次序，並負責質詢時間分配及秘書處議事日程之審查。",
  committees: [
    {
      id: "legislation",
      name: "法制委員會",
      formation: "有意願之議員加入，並互選出一位召集委員。",
      scope: "稽查學生會各項法規有無不合時宜或相互牴觸之處，並研擬合宜之法規修正案。",
    },
    {
      id: "rights-protection",
      name: "權益維護委員會",
      formation: "有意願之議員加入，並互選出一位召集委員。",
      scope: "了解學生權益是否受損卻無單位處理，聚焦校方措施與學生會行政單位相關事項。",
    },
    {
      id: "budget-audit",
      name: "經費稽核委員會",
      formation:
        "由議長、副議長及財務暨行政審查委員會下四個委員會之召集委員共 6 人組成，互選出一位召集委員。",
      scope: "稽核學生會經費運用情形，按學期審查各項預算執行情形並向大會報告。",
    },
  ] satisfies Committee[],
};

export const disciplinaryTrack = {
  name: "紀律委員會",
  englishName: "Discipline Committee",
  formation: "由議會各委員會之召集委員組成，互選出一位召集委員。",
  scope:
    "審議議員違反議事規則或行為規範之懲戒案，以及議員因無故缺席達三次而法定解職之調查案件。",
  committees: [
    {
      id: "activities",
      name: "活動委員會",
      formation: "有意願之議員加入（一人限加入一個委員會），並互選出一位召集委員。",
      scope: "審查及監督學生會外務部之經費使用與工作事項。",
    },
    {
      id: "clubs",
      name: "社團學會委員會",
      formation: "有意願之議員加入（一人限加入一個委員會），並互選出一位召集委員。",
      scope: "審查及監督社團部與學會部之經費使用與工作事項。",
    },
    {
      id: "student-rights",
      name: "學權委員會",
      formation: "有意願之議員加入（一人限加入一個委員會），並互選出一位召集委員。",
      scope: "審查及監督學權部之經費使用與工作事項。",
    },
    {
      id: "general",
      name: "綜合委員會",
      formation: "有意願之議員加入（一人限加入一個委員會），並互選出一位召集委員。",
      scope:
        "審查及監督學生議會、學生評議會、行政中心秘書處及其他部會之經費使用與工作事項。",
    },
  ] satisfies Committee[],
  parentCommitteeName: "財務暨行政審查委員會",
};
