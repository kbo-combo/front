import {client} from "@apis/apiClient.ts";

export interface LoginRequest {
  socialProvider: string;
}

export const getLoginPage = async (loginRequest: LoginRequest, redirectUri: string): Promise<string> => {
  const response = await client.get<string>(`/oauth/${loginRequest.socialProvider}?redirectUri=${encodeURIComponent(redirectUri)}`);
  return response.data
};
