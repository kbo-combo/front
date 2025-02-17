export const canChangeCombo = (now: Date, gameStartDateTime: Date) => {
  const twoDaysBefore = new Date(gameStartDateTime);
  twoDaysBefore.setDate(gameStartDateTime.getDate() - 2);

  return now <= twoDaysBefore;
};
