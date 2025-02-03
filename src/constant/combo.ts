export const ComboStatus = {
  PENDING: "대기중",
  SUCCESS: "성공",
  FAIL: "실패",
  PASS: "PASS!",
} as const;

export type ComboStatusType = keyof typeof ComboStatus;

export const getStatusText = (status: ComboStatusType) => {
  return ComboStatus[status] || "알 수 없음";
};
