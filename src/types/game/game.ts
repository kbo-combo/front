export const GameType = {
  PRE_SEASON: "PRE_SEASON",
  REGULAR_SEASON: "REGULAR_SEASON",
  POST_SEASON: "POST_SEASON",
} as const;

export type GameType = typeof GameType[keyof typeof GameType];

export const GameTypeLabels: Record<GameType, string> = {
  [GameType.PRE_SEASON]: "시범경기",
  [GameType.REGULAR_SEASON]: "정규시즌",
  [GameType.POST_SEASON]: "포스트시즌",
};

export type GameState = 'PENDING' | 'RUNNING' | 'COMPLETED' | 'CANCEL';

