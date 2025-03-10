import {client} from "@apis/apiClient.ts";
import {TeamName} from "@constant/player.ts";
import {StartingPitcherResponse} from "@apis/game.ts";

export const findMemberComboRankDetail = async (targetMemberId: number): Promise<MemberComboRankDetail> => {
  const response = await client.get<MemberComboRankDetail>('combo-rank/detail', {
        params: {targetMemberId: targetMemberId}
      }
  )
  return response.data
}

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

export interface MemberComboRankDetail {
  id: number,
  year: number,
  memberId: number,
  nickname: string,
  currentRecord: number,
  successCount: number,
  failCount: number,
  passCount: number,
  totalCount: number,
  firstSuccessDate: string,
  lastSuccessDate: string,
}
