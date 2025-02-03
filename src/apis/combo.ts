import {client} from "@apis/apiClient.ts";

export const deleteCombo = async (
    comboId: number
): Promise<{ comboId: number }> => {
  const response = await client.delete<{ comboId: number }>(
      `/combos/${comboId}`,
      {
        withCredentials: true
      }
  );
  return response.data;
};
