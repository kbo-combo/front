import {client} from "@apis/apiClient.ts";
import {HittingHandType, PlayerDetailPosition,  TeamName} from "@constant/player.ts";

export interface HitterQueryRequest {
  awayTeam: TeamName,
  homeTeam: TeamName,
}

export interface HitterQueryResponse {
  playerId: number
  name: string,
  team: TeamName,
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
