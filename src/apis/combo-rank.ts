import {client} from "@apis/apiClient.ts";
import {TeamName} from "@constant/player.ts";
import {StartingPitcherResponse} from "@apis/game.ts";


export const findAllComboRankByParam = async (size: number, year: number): Promise<ComboRankListResponse> => {
  const response = await client.get<ComboRankListResponse>('combo-rank/statistic', {
        params: {size: size, year: year}
      }
  )
  return response.data
}

export interface ComboRankListResponse {
  topRanks: ComboRankResponse[]
}

export interface ComboRankResponse {
  id: number,
  homeTeam: TeamName,
  awayTeam: TeamName,
  startDate: string,
  startTime: string,
  gameState: string,
  homeStartingPitcher: StartingPitcherResponse | null,
  awayStartingPitcher: StartingPitcherResponse | null
}
