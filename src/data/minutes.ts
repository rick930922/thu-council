export type MinutesRecord = {
  id: string;
  session: string;
  meetingType: "定期會" | "臨時會" | "公文/資料";
  date?: string;
  title: string;
  summary: string;
  fileUrl: string;
};

// Optional "browse the full archive" link shown beside a term's section heading,
// keyed by the 5-character 屆 prefix (matches getGroupedMinutes' grouping key).
export const termArchives: Record<string, string> = {
  第三十七屆:
    "https://drive.google.com/drive/u/4/folders/1qOh6heXfZPnQEihsQ5-8JvdgF7W2PuDd",
};

export const minutesRecords: MinutesRecord[] = [
  {
    id: "37-s1-mtg1-minutes",
    session: "第三十七屆第一會期第一次常會",
    meetingType: "定期會",
    date: "2025-10-01",
    title: "議事錄",
    summary: "第三十七屆第一會期第一次常會議事錄。",
    fileUrl:
      "https://ugc.production.linktr.ee/76ec7531-0da9-4952-bf6e-71ce8fb60136_3711.pdf",
  },
  {
    id: "37-s1-mtg1-livestream",
    session: "第三十七屆第一會期第一次常會",
    meetingType: "公文/資料",
    date: "2025-10-01",
    title: "直播",
    summary: "第三十七屆第一會期第一次常會直播影片。",
    fileUrl:
      "https://drive.google.com/file/d/1QxzL2lGBryab5CxFuyxeY5eZ3cqEypRw/view",
  },
  {
    id: "37-s1-mtg1-attendance",
    session: "第三十七屆第一會期第一次常會",
    meetingType: "公文/資料",
    date: "2025-10-01",
    title: "議員出缺席",
    summary: "東學議秘字第11403003號，第三十七屆第一會期第一次常會議員出缺席紀錄。",
    fileUrl:
      "https://ugc.production.linktr.ee/0b9bfca9-72c8-45f1-a01f-58ecacff8228_-11403003.pdf",
  },
  {
    id: "37-session2-schedule",
    session: "第三十七屆第二會期",
    meetingType: "公文/資料",
    date: "2026-02-23",
    title: "第二會期日程表",
    summary: "第三十七屆第二會期議事日程表，民國115年2月23日擬定。",
    fileUrl:
      "https://ugc.production.linktr.ee/00bf7b85-23c7-405d-8e71-e227695694b4_372.pdf",
  },
  {
    id: "37-yi-11401001",
    session: "第三十七屆",
    meetingType: "公文/資料",
    date: "2025-01-01",
    title: "東學議字第11401001號",
    summary:
      "議會正式文號公告。日期依文號推估為民國114年1月，實際發文日待確認。",
    fileUrl:
      "https://ugc.production.linktr.ee/2f3ab654-bcec-4b43-b8b0-60ba8f4418f6_11401001.pdf",
  },
  {
    id: "37-yimi-11401004",
    session: "第三十七屆",
    meetingType: "公文/資料",
    date: "2025-01-01",
    title: "東學議秘字第11401004號",
    summary:
      "議會秘書處正式文號公告。日期依文號推估為民國114年1月，實際發文日待確認。",
    fileUrl:
      "https://ugc.production.linktr.ee/b54c634a-1970-4014-807f-9049d0f1657a_-114-11401004.pdf",
  },
  {
    id: "37-session1-schedule",
    session: "第三十七屆第一會期",
    meetingType: "公文/資料",
    title: "第一會期日程表",
    summary: "第三十七屆第一會期議事日程表。",
    fileUrl:
      "https://ugc.production.linktr.ee/47fd45fe-ff71-44d5-aa23-7f300b49cd97_371.pdf",
  },
];

export function getGroupedMinutes() {
  // Undated records (date left unset) sort as the oldest within their group.
  const sorted = [...minutesRecords].sort(
    (a, b) => new Date(b.date ?? 0).getTime() - new Date(a.date ?? 0).getTime()
  );
  const groups = new Map<string, MinutesRecord[]>();
  for (const record of sorted) {
    const key = record.session.slice(0, 5); // e.g. "第三十八屆"
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(record);
  }
  return groups;
}
