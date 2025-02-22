import {client} from "@apis/apiClient.ts";

export interface NicknameChangeRequest {
  nickname: string;
}

export const changeNickname = async (
    request: NicknameChangeRequest,
): Promise<void> => {
  const response = await client.put(
      `members/nickname`, request
  );
  return response.data;
};

export const getMemberDetail = async (): Promise<MemberDetailResponse> => {
  const response = await client.get(
      `members`,
  {
    withCredentials: true
  });
  return response.data;
};

export interface MemberDetailResponse {
  memberId: number,
  nickname: string,
}
