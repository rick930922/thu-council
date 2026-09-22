export type RegulationCategory = "自治法規彙編";

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
    id: "student-regulations-115",
    category: "自治法規彙編",
    title: "（115）東海大學學生自治法規",
    fileUrl: PDF,
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
