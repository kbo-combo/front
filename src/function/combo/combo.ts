import {minusMin} from "@/function/utils.ts";

export const canNotChangeCombo = (now: Date, gameStartDateTime: Date) => {
  const twoDaysBefore = new Date(gameStartDateTime);
  twoDaysBefore.setDate(gameStartDateTime.getDate() - 2);

  return now <= twoDaysBefore;
};

export const canNotCancelCombo = (now: Date, gameStartDateTime: Date) => {
  return now >= minusMin(gameStartDateTime, 10);
};
