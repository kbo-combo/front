import {addDay, minusMin} from "@/function/utils.ts";
import {ComboStatusType} from "@constant/combo.ts";
import {DefaultTheme} from "styled-components";
import {GameState} from "@/types/game/game.ts";

export const isBeforeComboAddDeadline = (now: Date, gameStartDateTime: Date) => {
  const today = new Date(now);
  today.setHours(0, 0, 0, 0);

  const twoDaysBefore = new Date(gameStartDateTime);
  twoDaysBefore.setDate(gameStartDateTime.getDate() - 2);
  twoDaysBefore.setHours(0, 0, 0, 0);

  return now <= twoDaysBefore;
};

export const isAfterComboChangeTime = (now: Date, gameStartDateTime: Date) => {
  return now >= minusMin(gameStartDateTime, 10);
};

export const catNotSelectCombo = (
    now: Date,
    gameStartDateTime: Date,
    gameState: GameState,
    comboGameDate: Date | null
) => {
  if (comboGameDate && isAfterComboChangeTime(now, comboGameDate)) {
    return true;
  }

  return isAfterComboChangeTime(now, gameStartDateTime) || gameState == 'CANCEL' || gameState == 'COMPLETED';
};

export const showCancelButton = (now: Date, gameStartDateTime: Date) => {
  return now <= addDay(gameStartDateTime, 1)
};

export const getComboStatusColor = (status: ComboStatusType, theme: DefaultTheme) => {
  const statusColors: Record<ComboStatusType, string> = {
    SUCCESS: theme.color.green,
    PENDING: theme.color.grayDark,
    FAIL: theme.color.accent,
    PASS: theme.color.grayDark,
  };

  return statusColors[status] || theme.color.grayDark;
};
