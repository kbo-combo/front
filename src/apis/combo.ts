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

export interface ComboResponse {
  comboId: number;
  playerId: number;
  playerName: string;
  playerImage: string | null;
  comboStatus: string;
  pa: number | null;
  hits: number | null;
}

export const deleteComboById = async (comboId: number): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = mockComboData.findIndex((data) => data.combo.comboId === comboId);
      if (index !== -1) {
        mockComboData.splice(index, 1);
        resolve(true);
      } else {
        resolve(false);
      }
    }, 100);
  });
};

export const findComboByGame = async (gameDate: string): Promise<ComboResponse | null> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = mockComboData.find((data) => data.gameDate === gameDate);
      resolve(found ? found.combo : null);
    }, 100);
  });
};

const mockComboData: { gameDate: string; combo: ComboResponse }[] = [
  {
    gameDate: "2024-02-01",
    combo: {
      comboId: 1,
      playerId: 101,
      playerName: "김도영",
      playerImage: null,
      comboStatus: "PENDING",
      pa: null,
      hits: null,
    },
  },
  {
    gameDate: "2024-02-02",
    combo: {
      comboId: 2,
      playerId: 102,
      playerName: "황성빈",
      playerImage: "https://example.com/jane.jpg",
      comboStatus: "PASS",
      pa: 4,
      hits: 2,
    },
  },
  {
    gameDate: "2024-02-03",
    combo: {
      comboId: 3,
      playerId: 103,
      playerName: "서호철",
      playerImage: null,
      comboStatus: "FAIL",
      pa: 4,
      hits: 0,
    },
  },
];
