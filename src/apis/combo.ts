import {ComboStatusType} from "@constant/combo.ts";
import {client} from "@apis/apiClient.ts";


export const createCombo = async (request: ComboCreateRequest): Promise<void> => {
  const response = await client.post(
      `combos`, request
  )
  return response.data
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

export interface ComboCreateRequest {
  gameId: number,
  playerId: number
}

export interface ComboResponse {
  comboId: number;
  playerId: number;
  playerName: string;
  playerImage: string | null
  comboStatus: ComboStatusType;
  pa: number | null;
  hits: number | null;
}

const mockComboData: { gameDate: string; combo: ComboResponse }[] = [
  {
    gameDate: "2025-02-08",
    combo: {
      comboId: 1,
      playerId: 101,
      playerName: "김도영",
      playerImage: "6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2024/52605.jpg",
      comboStatus: "PASS",
      pa: 4,
      hits: 4,
    },
  },
  {
    gameDate: "2025-02-09",
    combo: {
      comboId: 2,
      playerId: 102,
      playerName: "황성빈",
      playerImage: "6ptotvmi5753.edge.naverncp.com/KBO_IMAGE/person/middle/2024/50500.jpg",
      comboStatus: "FAIL",
      pa: 4,
      hits: 0,
    },
  },
  {
    gameDate: "2025-02-10",
    combo: {
      comboId: 3,
      playerId: 103,
      playerName: "서호철",
      playerImage: null,
      comboStatus: "PENDING",
      pa: null,
      hits: null,
    },
  },
];
