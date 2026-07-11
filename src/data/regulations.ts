export type RegulationCategory = "組織法規" | "議事法規" | "選罷法規";

export type Regulation = {
  id: string;
  category: RegulationCategory;
  title: string;
  lastAmended?: string;
  fileUrl: string;
};

const PDF = "/docs/thu-student-regulations.pdf";

export const regulations: Regulation[] = [
  {
    id: "council-organic-act",
    category: "組織法規",
    title: "東海大學學生議會組織法",
    lastAmended: "2021-12-02",
    fileUrl: `${PDF}#page=69`,
  },
  {
    id: "procedure-committee-organic-act",
    category: "組織法規",
    title: "東海大學學生議會程序委員會組織法",
    lastAmended: "2015-12-29",
    fileUrl: `${PDF}#page=74`,
  },
  {
    id: "discipline-committee-organic-act",
    category: "組織法規",
    title: "東海大學學生議會紀律委員會組織法",
    lastAmended: "2015-12-29",
    fileUrl: `${PDF}#page=75`,
  },
  {
    id: "legislation-committee-organic-act",
    category: "組織法規",
    title: "東海大學學生議會法制委員會組織法",
    lastAmended: "2015-12-29",
    fileUrl: `${PDF}#page=76`,
  },
  {
    id: "rights-protection-committee-organic-act",
    category: "組織法規",
    title: "東海大學學生議會權益維護委員會組織法",
    lastAmended: "2015-12-29",
    fileUrl: `${PDF}#page=77`,
  },
  {
    id: "audit-committee-organic-act",
    category: "組織法規",
    title: "東海大學學生議會經費稽核委員會組織法",
    lastAmended: "2022-12-08",
    fileUrl: `${PDF}#page=78`,
  },
  {
    id: "finance-admin-review-committee-organic-act",
    category: "組織法規",
    title: "東海大學學生議會財務暨行政審查委員會組織法",
    lastAmended: "2022-12-08",
    fileUrl: `${PDF}#page=79`,
  },
  {
    id: "powers-exercise-act",
    category: "議事法規",
    title: "東海大學學生議會職權行使法",
    lastAmended: "2023-05-18",
    fileUrl: `${PDF}#page=81`,
  },
  {
    id: "member-conduct-act",
    category: "議事法規",
    title: "東海大學學生議會議員行為規範法",
    lastAmended: "2015-12-29",
    fileUrl: `${PDF}#page=87`,
  },
  {
    id: "rules-of-procedure",
    category: "議事法規",
    title: "東海大學學生議會議事規則",
    lastAmended: "2022-11-15",
    fileUrl: `${PDF}#page=90`,
  },
  {
    id: "public-attendance-rules",
    category: "議事法規",
    title: "東海大學學生議會旁聽規則",
    lastAmended: "1989-12-27",
    fileUrl: `${PDF}#page=97`,
  },
  {
    id: "hearing-procedures",
    category: "議事法規",
    title: "東海大學學生議會聽證辦法",
    fileUrl: `${PDF}#page=98`,
  },
  {
    id: "member-attendance-act",
    category: "議事法規",
    title: "東海大學學生議會議員出缺席辦法",
    lastAmended: "2023-05-18",
    fileUrl: `${PDF}#page=99`,
  },
  {
    id: "speaker-election-recall-act",
    category: "選罷法規",
    title: "東海大學學生議會正副議長選舉罷免辦法",
    lastAmended: "2015-12-29",
    fileUrl: `${PDF}#page=100`,
  },
];

export function getGroupedRegulations() {
  const groups = new Map<RegulationCategory, Regulation[]>();
  for (const reg of regulations) {
    if (!groups.has(reg.category)) groups.set(reg.category, []);
    groups.get(reg.category)!.push(reg);
  }
  return groups;
}
