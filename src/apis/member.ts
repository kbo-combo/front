import {client} from "@apis/apiClient.ts";

export interface NicknameChangeRequest {
  nickname: string;
}

export const changeNickname = async (
    request: NicknameChangeRequest,
): Promise<{ redirectUri: string }> => {
  const response = await client.put(
      `members/nickname`, request
  );
  return response.data;
};
