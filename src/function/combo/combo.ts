export const canNotChangeCombo = (now: Date, gameStartDateTime: Date) => {
  const twoDaysBefore = new Date(gameStartDateTime);
  twoDaysBefore.setDate(gameStartDateTime.getDate() - 2);

  return now <= twoDaysBefore;
};

export const canNotCancelCombo = (now: Date, gameStartDateTime: Date) => {
  const tenMinutesBefore = new Date(gameStartDateTime);
  tenMinutesBefore.setMinutes(gameStartDateTime.getMinutes() - 10);

  return now <= tenMinutesBefore;
};
