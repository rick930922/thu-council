export type MinutesRecord = {
  id: string;
  session: string;
  meetingType: "定期會" | "臨時會" | "公文/資料";
  date?: string;
  title: string;
  summary: string;
  fileUrl: string;
};

// Optional "browse the full archive" link shown on a term's page,
// keyed by the 5-character 屆 prefix (matches getGroupedMinutes' grouping key).
export const termArchives: Record<string, string> = {
  第三十七屆:
    "https://drive.google.com/drive/u/4/folders/1qOh6heXfZPnQEihsQ5-8JvdgF7W2PuDd",
};

// URL slug for each 屆, keyed by the same 5-character prefix. Add an entry
// here whenever a new term's records are added.
export const termSlugs: Record<string, string> = {
  第三十七屆: "37",
};

export function getTermBySlug(slug: string) {
  return Object.entries(termSlugs).find(([, s]) => s === slug)?.[0];
}

export const minutesRecords: MinutesRecord[] = [
  {
    id: "37-s2-mtg2-minutes",
    session: "第三十七屆第二會期第二次常會",
    meetingType: "定期會",
    date: "2026-04-07",
    title: "議事錄",
    summary: "第三十七屆第二會期第二次常會議事錄。",
    fileUrl:
      "https://ugc.production.linktr.ee/f3488e4b-98ab-481a-8489-11bcb6e7f664_372.pdf",
  },
  {
    id: "37-s2-mtg2-livestream",
    session: "第三十七屆第二會期第二次常會",
    meetingType: "公文/資料",
    date: "2026-04-07",
    title: "直播",
    summary: "第三十七屆第二會期第二次常會直播影片。",
    fileUrl: "https://www.youtube.com/live/jHqoGUZQES0",
  },
  {
    id: "37-s2-mtg1-minutes",
    session: "第三十七屆第二會期第一次常會",
    meetingType: "定期會",
    date: "2026-03-10",
    title: "議事錄",
    summary: "第三十七屆第二會期第一次常會議事錄。",
    fileUrl:
      "https://ugc.production.linktr.ee/420c08c4-ebd7-406d-b0ad-b695b532c8f1_37.pdf",
  },
  {
    id: "37-s2-mtg1-livestream",
    session: "第三十七屆第二會期第一次常會",
    meetingType: "公文/資料",
    date: "2026-03-10",
    title: "直播",
    summary: "第三十七屆第二會期第一次常會直播影片。",
    fileUrl: "https://www.youtube.com/live/1HE8fJ32ysU",
  },
  {
    id: "37-s1-mtg4-minutes",
    session: "第三十七屆第一會期第四次常會",
    meetingType: "定期會",
    date: "2025-12-16",
    title: "議事錄",
    summary: "第三十七屆第一會期第四次常會議事錄。",
    fileUrl:
      "https://ugc.production.linktr.ee/4589f3aa-e993-424f-9bf3-ac46bc15b767_3714.pdf",
  },
  {
    id: "37-s1-mtg4-livestream",
    session: "第三十七屆第一會期第四次常會",
    meetingType: "公文/資料",
    date: "2025-12-16",
    title: "直播",
    summary: "第三十七屆第一會期第四次常會直播影片。",
    fileUrl: "https://www.youtube.com/live/51O7r6W8rZQ",
  },
  {
    id: "37-s1-mtg3-minutes",
    session: "第三十七屆第一會期第三次常會",
    meetingType: "定期會",
    date: "2025-11-25",
    title: "議事錄",
    summary: "第三十七屆第一會期第三次常會議事錄。",
    fileUrl:
      "https://ugc.production.linktr.ee/7b2b1898-ddb5-472a-bbc5-d25e6763205d_371.pdf",
  },
  {
    id: "37-s1-mtg3-livestream",
    session: "第三十七屆第一會期第三次常會",
    meetingType: "公文/資料",
    date: "2025-11-25",
    title: "直播",
    summary: "第三十七屆第一會期第三次常會直播影片。",
    fileUrl: "https://www.youtube.com/live/a0y0H8voMvE",
  },
  {
    id: "37-s1-mtg2-minutes",
    session: "第三十七屆第一會期第二次常會",
    meetingType: "定期會",
    date: "2025-10-21",
    title: "議事錄",
    summary: "第三十七屆第一會期第二次常會議事錄。",
    fileUrl:
      "https://ugc.production.linktr.ee/421729de-2426-44a0-a76f-b0ed36b198fa_3712.pdf",
  },
  {
    id: "37-s1-mtg2-livestream",
    session: "第三十七屆第一會期第二次常會",
    meetingType: "公文/資料",
    date: "2025-10-21",
    title: "直播",
    summary: "第三十七屆第一會期第二次常會直播影片。",
    fileUrl: "https://www.youtube.com/watch?v=YLdWtfPivMo",
  },
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

export function getMinutesForTerm(term: string) {
  return getGroupedMinutes().get(term) ?? [];
}
