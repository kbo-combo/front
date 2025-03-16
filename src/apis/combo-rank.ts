import {client} from "@apis/apiClient.ts";
import {GameType} from "@/types/game/game.ts";
import {ComboSortType} from "@/types/combo/combo.ts";

export const findMemberComboRankDetail = async (targetMemberId: number): Promise<MemberComboRankByYear[]> => {
  const response = await client.get<MemberComboRankByYear[]>('combo-rank/detail', {
        params: {targetMemberId: targetMemberId}
      }
  )
  return response.data
}

export const findAllComboRankByParam = async (size: number, year: number, gameType: GameType, comboSortType: ComboSortType): Promise<ComboRankListResponse> => {
  const response = await client.get<ComboRankListResponse>('combo-rank/statistic', {
        params: {size: size, year: year, gameType: gameType, sort: comboSortType}
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
  maxRecord: number,
  successCount: number,
  failCount: number,
  passCount: number,
  totalCount: number,
  firstSuccessDate: string,
  lastSuccessDate: string,
}

export interface MemberComboRankByYear {
  year: number,
  comboRanks: MemberComboRankByGameType
}

export interface MemberComboRankByGameType {
  preSeason:  MemberComboRankDetail | null,
  regularSeason: MemberComboRankDetail | null,
  postSeason: MemberComboRankDetail | null
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
