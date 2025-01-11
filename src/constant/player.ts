export const Team = {
  NC: "NC",
  KIA: "KIA",
  DOOSAN: "DOOSAN",
  LG: "LG",
  SSG: "SSG",
  SAMSUNG: "SAMSUNG",
  LOTTE: "LOTTE",
  KIWOOM: "KIWOOM",
  HANWHA: "HANWHA",
  KT: "KT"
} as const; // `as const`를 사용하여 값이 불변 리터럴 타입으로 취급되도록 설정

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

