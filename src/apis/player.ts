import {client} from "@apis/apiClient.ts";
import {HittingHandType, PlayerDetailPosition, Team} from "@constant/player.ts";

export interface HitterQueryRequest {
  awayTeam: Team,
  homeTeam: Team,
}

export interface HitterQueryResponse {
  playerId: number
  name: string,
  team: Team,
  detailPosition: PlayerDetailPosition,
  hittingHandType: HittingHandType,
  imageUrl: string | null
}

export const findAllHitter = async (
    hitterRequest: HitterQueryRequest,
): Promise<HitterQueryResponse[]> => {
  const response = await client.get<HitterQueryResponse[]>(
      `/players`,
      {
        params: hitterRequest
      }
  );
  return response.data;
};
