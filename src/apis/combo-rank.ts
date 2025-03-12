import {client} from "@apis/apiClient.ts";
import {GameType} from "@/types/game/game.ts";

export const findMemberComboRankDetail = async (targetMemberId: number): Promise<MemberComboRankDetail> => {
  const response = await client.get<MemberComboRankDetail>('combo-rank/detail', {
        params: {targetMemberId: targetMemberId}
      }
  )
  return response.data
}

export const findAllComboRankByParam = async (size: number, year: number, gameType: GameType): Promise<ComboRankListResponse> => {
  const response = await client.get<ComboRankListResponse>('combo-rank/statistic', {
        params: {size: size, year: year, gameType: gameType}
      }
  )
  return response.data
}

export interface ComboRankListResponse {
  gameType: GameType
  comboRankResponse: ComboRankResponse[]
}

export interface ComboRankResponse {
  rank: number,
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
