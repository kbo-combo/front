import {ComboStatusType} from "@constant/combo.ts";
import {client} from "@apis/apiClient.ts";
import {TeamName} from "@constant/player.ts";
import {InfinitePageResponse} from "@/types/apis/response.ts";
import {GameType} from "@/types/game/game.ts";


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
      'combos/detail', {
        params: {gameDate}
      }
  )
  return response.data
};

export const findComboListByParam = async (pageSize: number, gameType: GameType, beforeGameDate?: string): Promise<InfinitePageResponse<ComboListResponse> | null> => {
  const response = await client.get<InfinitePageResponse<ComboListResponse>>('combos', {
        params: {beforeGameDate: beforeGameDate, pageSize: pageSize, gameType: gameType}
      }
  )
  return response.data
}

export interface ComboListResponse {
  comboId: number;
  playerId: number;
  playerName: string;
  playerImageUrl: string | null
  comboStatus: ComboStatusType;
  gameStartDate: string,
  gameStartTime: string,
  homeTeam: TeamName,
  awayTeam: TeamName,
  gameType: string
  hitterGameRecord: HitterGameRecord | null
}

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
  gameStartDate: string,
  gameStartTime: string,
  hitterGameRecord: HitterGameRecord | null
}

export interface HitterGameRecord {
  atBats: number;
  hits: number;
}
