export const GameType = {
  PRE_SEASON: "시범경기",
  REGULAR_SEASON: "정규시즌",
  POST_SEASON: "포스트시즌",
} as const;

export type GameType = keyof typeof GameType;
