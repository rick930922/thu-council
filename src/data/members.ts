export type CouncilMember = {
  id: string;
  name: string;
  college: string;
  department: string;
};

export const members: CouncilMember[] = [
  { id: "chen-jirui", name: "陳紀睿", college: "理學院", department: "生科系" },

  { id: "zhang-zhongyi", name: "張仲毅", college: "社會科學院", department: "政治學系" },
  { id: "liang-junyi", name: "梁俊億", college: "社會科學院", department: "政治學系政治理論組" },
  { id: "xu-junrui", name: "許峻睿", college: "社會科學院", department: "政治學系" },
  { id: "cai-yulin", name: "蔡玗霖", college: "社會科學院", department: "社會學系" },
  { id: "li-shengya", name: "李聖亞", college: "社會科學院", department: "行政管理暨政策學系" },

  { id: "gao-yuen", name: "高予恩", college: "創意設計暨藝術學院", department: "美術系" },
  { id: "huang-baihao", name: "黃柏皓", college: "創意設計暨藝術學院", department: "美術系" },
  { id: "wang-liyan", name: "王立言", college: "創意設計暨藝術學院", department: "美術系" },
  { id: "hong-caiyu", name: "洪采妤", college: "創意設計暨藝術學院", department: "音樂系" },
  { id: "lin-junya", name: "林均亞", college: "創意設計暨藝術學院", department: "音樂系" },
  { id: "chen-xingyu", name: "陳星羽", college: "創意設計暨藝術學院", department: "音樂系" },

  { id: "li-yuxuan", name: "李宇衒", college: "工學院", department: "環工系" },
  { id: "chen-zeyu", name: "陳則宇", college: "工學院", department: "環工系" },
  { id: "hong-ruojie", name: "洪若傑", college: "工學院", department: "工工系" },
  { id: "chen-xinyu", name: "陳信宇", college: "工學院", department: "電機系" },
  { id: "lin-weixiang", name: "林暐翔", college: "工學院", department: "電機系" },
  { id: "wang-yuwei", name: "王郁為", college: "工學院", department: "電機系" },

  { id: "yang-xiuqi", name: "楊琇棋", college: "國際學院", department: "永續科學與管理學士學位學程" },

  { id: "lin-xiujun", name: "林琇君", college: "農業暨健康學院", department: "畜產系" },
  { id: "hong-chongkai", name: "洪崇凱", college: "農業暨健康學院", department: "畜產系" },
  { id: "chen-hong", name: "陳紘", college: "農業暨健康學院", department: "畜產系" },

  { id: "yang-peihua", name: "楊佩樺", college: "管理學院", department: "會計系" },
  { id: "xu-weifeng", name: "許暐鋒", college: "管理學院", department: "國貿系" },

  { id: "xue-qiaofeng", name: "薛喬丰", college: "研究所", department: "" },
  { id: "zhao-youren", name: "趙宥任", college: "研究所", department: "" },
];

export function getGroupedMembers() {
  const groups = new Map<string, CouncilMember[]>();
  for (const member of members) {
    if (!groups.has(member.college)) groups.set(member.college, []);
    groups.get(member.college)!.push(member);
  }
  return groups;
}
