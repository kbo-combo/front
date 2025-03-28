export const Team = [
  { id: 1, name: "NC", displayName: "NC" },
  { id: 2, name: "KIA", displayName: "기아"},
  { id: 3, name: "DOOSAN", displayName: "두산"},
  { id: 4, name: "LG", displayName: "LG"},
  { id: 5, name: "SSG", displayName : "SSG"},
  { id: 6, name: "SAMSUNG", displayName: "삼성"},
  { id: 7, name: "LOTTE", displayName: "롯데"},
  { id: 8, name: "KIWOOM", displayName: "키움"},
  { id: 9, name: "HANWHA", displayName: "한화"},
  { id: 10, name: "KT", displayName: "KT"},
] as const;

export type Team = (typeof Team)[number];

export type TeamName = Team["name"];

export const getDisplayNameByTeamName = (teamName: TeamName): string => {
  const team = Team.find(t => t.name === teamName);
  if (!team) {
    throw new Error(`Invalid team name: ${teamName}`);
  }
  return team.displayName;
};

export const HittingHandType = {
  LEFT: "좌타",
  RIGHT: "우타",
  SWITCH: "양타"
} as const

export type HittingHandType = typeof HittingHandType[keyof typeof HittingHandType];


export const PlayerDetailPosition = {
  PITCHER: "투수",
  CATCHER: "포수",
  IN_FIELDER: "내야수",
  OUT_FIELDER: "외야수"
} as const

export type PlayerDetailPosition = typeof PlayerDetailPosition[keyof typeof PlayerDetailPosition];

