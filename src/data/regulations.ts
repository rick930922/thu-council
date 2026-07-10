export type RegulationCategory =
  | "組織法規"
  | "議事法規"
  | "選罷法規"
  | "財務法規";

export type Regulation = {
  id: string;
  category: RegulationCategory;
  title: string;
  lastAmended: string;
  fileUrl: string;
};

export const regulations: Regulation[] = [
  {
    id: "student-council-organic-act",
    category: "組織法規",
    title: "東海大學學生議會組織法",
    lastAmended: "2025-09-25",
    fileUrl: "#",
  },
  {
    id: "committee-establishment-act",
    category: "組織法規",
    title: "常設委員會設置辦法",
    lastAmended: "2025-09-25",
    fileUrl: "#",
  },
  {
    id: "rules-of-procedure",
    category: "議事法規",
    title: "議事規則",
    lastAmended: "2026-07-03",
    fileUrl: "#",
  },
  {
    id: "public-attendance-act",
    category: "議事法規",
    title: "議會旁聽辦法",
    lastAmended: "2026-07-03",
    fileUrl: "#",
  },
  {
    id: "interpellation-guidelines",
    category: "議事法規",
    title: "施政報告與質詢作業要點",
    lastAmended: "2025-09-25",
    fileUrl: "#",
  },
  {
    id: "election-recall-act",
    category: "選罷法規",
    title: "學生議員選舉罷免辦法",
    lastAmended: "2026-04-22",
    fileUrl: "#",
  },
  {
    id: "candidate-registration-guidelines",
    category: "選罷法規",
    title: "候選人登記作業要點",
    lastAmended: "2026-04-22",
    fileUrl: "#",
  },
  {
    id: "annual-budget-review-act",
    category: "財務法規",
    title: "學生自治會年度預決算審查辦法",
    lastAmended: "2025-09-25",
    fileUrl: "#",
  },
  {
    id: "club-subsidy-distribution-act",
    category: "財務法規",
    title: "社團輔導金分配辦法",
    lastAmended: "2026-07-03",
    fileUrl: "#",
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
