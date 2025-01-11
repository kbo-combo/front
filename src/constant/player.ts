export const Team = [
  { id: 1, name: "NC" },
  { id: 2, name: "KIA" },
  { id: 3, name: "DOOSAN" },
  { id: 4, name: "LG" },
  { id: 5, name: "SSG" },
  { id: 6, name: "SAMSUNG" },
  { id: 7, name: "LOTTE" },
  { id: 8, name: "KIWOOM" },
  { id: 9, name: "HANWHA" },
  { id: 10, name: "KT" },
] as const;

export type TeamType = typeof Team[number];


export type Team = typeof Team[keyof typeof Team];

export const HittingHandType = {
  LEFT: "좌타",
  RIGHT: "우타",
  SWITCH: "양타"
}

export type HittingHandType = typeof HittingHandType[keyof typeof HittingHandType];


export const PlayerDetailPosition = {
  PITCHER: "투수",
  CATCHER: "포수",
  IN_FIELDER: "내야수",
  OUT_FIELDER: "외야수"
}

export type PlayerDetailPosition = typeof PlayerDetailPosition[keyof typeof PlayerDetailPosition];

