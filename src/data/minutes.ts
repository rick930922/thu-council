export type MinutesRecord = {
  id: string;
  session: string;
  meetingType: "定期會" | "臨時會";
  date: string;
  title: string;
  summary: string;
  fileUrl: string;
};

export const minutesRecords: MinutesRecord[] = [
  {
    id: "38-regular-3",
    session: "第三十八屆第三次定期會",
    meetingType: "定期會",
    date: "2026-07-03",
    title: "審議學生自治會年度預算案暨自治法規增修案",
    summary:
      "審議年度總預算案、社團輔導金分配辦法修正案，並三讀通過《議會旁聽辦法》增訂條文。",
    fileUrl: "#",
  },
  {
    id: "38-temporary-2",
    session: "第三十八屆第二次臨時會",
    meetingType: "臨時會",
    date: "2026-04-22",
    title: "審議《學生議員選舉罷免辦法》修正案",
    summary:
      "三讀通過候選人資格門檻調整、選舉公告期程延長，以及線上投票相關規範增訂。",
    fileUrl: "#",
  },
  {
    id: "38-regular-2",
    session: "第三十八屆第二次定期會",
    meetingType: "定期會",
    date: "2026-03-18",
    title: "聽取行政部門施政報告暨質詢",
    summary:
      "住宿服務組、學生會學術部進行施政報告，議員就宿舍熱水系統改善進度提出質詢。",
    fileUrl: "#",
  },
  {
    id: "38-temporary-1",
    session: "第三十八屆第一次臨時會",
    meetingType: "臨時會",
    date: "2026-01-14",
    title: "審議寒假社團活動經費追加案",
    summary: "通過寒假期間社團自主活動經費追加預算案。",
    fileUrl: "#",
  },
  {
    id: "38-regular-1",
    session: "第三十八屆第一次定期會",
    meetingType: "定期會",
    date: "2025-09-25",
    title: "第三十八屆議會成立大會暨常設委員會改組",
    summary:
      "選出本屆議長、副議長，完成秘書處人事任命，並確立四個常設委員會召集人及委員名單。",
    fileUrl: "#",
  },
  {
    id: "37-regular-4",
    session: "第三十七屆第四次定期會",
    meetingType: "定期會",
    date: "2025-06-12",
    title: "第三十七屆議會期末總結報告",
    summary: "審議上屆年度決算案，並完成交接文件彙整。",
    fileUrl: "#",
  },
];

export function getGroupedMinutes() {
  const sorted = [...minutesRecords].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const groups = new Map<string, MinutesRecord[]>();
  for (const record of sorted) {
    const key = record.session.slice(0, 5); // e.g. "第三十八屆"
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(record);
  }
  return groups;
}
