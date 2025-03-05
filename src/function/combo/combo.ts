import {addDay, minusMin} from "@/function/utils.ts";
import {ComboStatusType} from "@constant/combo.ts";
import {DefaultTheme} from "styled-components";

export const canNotChangeCombo = (now: Date, gameStartDateTime: Date) => {
  const twoDaysBefore = new Date(gameStartDateTime);
  twoDaysBefore.setDate(gameStartDateTime.getDate() - 2);

  return now <= twoDaysBefore;
};

export const canNotCancelCombo = (now: Date, gameStartDateTime: Date) => {
  return now >= minusMin(gameStartDateTime, 10);
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
