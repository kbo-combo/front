import {client} from "@apis/apiClient.ts";

export interface LoginRequest {
  socialProvider: string;
}

export const getLoginPage = async (
    loginRequest: LoginRequest,
    redirectUri: string
): Promise<{ redirectUri: string }> => {
  const response = await client.get<{ redirectUri: string }>(
      `/oauth/${loginRequest.socialProvider}?redirectUri=${encodeURIComponent(redirectUri)}`
  );
  return response.data;
};
