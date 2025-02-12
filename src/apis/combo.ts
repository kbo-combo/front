import {ComboStatusType} from "@constant/combo.ts";
import {client} from "@apis/apiClient.ts";


export const createCombo = async (request: ComboCreateRequest): Promise<void> => {
  const response = await client.post(
      `combos`, request
  )
  return response.data
}

export const deleteComboById = async (comboId: number): Promise<void> => {
  const response = await client.delete<void>(
      `/combos/${comboId}`
  )
  return response.data
};

export const findComboByGameDate = async (gameDate: string): Promise<ComboResponse | null> => {
  const response = await client.get<ComboResponse | null>(
      'combos', {
        params: { gameDate }
      }
  )
  return response.data
};

export interface ComboCreateRequest {
  gameId: number,
  playerId: number
}

export interface ComboResponse {
  comboId: number;
  playerId: number;
  playerName: string;
  playerImageUrl: string | null
  comboStatus: ComboStatusType;
}
