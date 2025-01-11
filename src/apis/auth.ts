import {client} from "@apis/apiClient.ts";

export interface LoginPageRequest {
  socialProvider: string;
}

export const getLoginPage = async (
    loginRequest: LoginPageRequest,
    redirectUri: string
): Promise<{ redirectUri: string }> => {
  const response = await client.get<{ redirectUri: string }>(
      `/oauth/${loginRequest.socialProvider}?redirectUri=${encodeURIComponent(redirectUri)}`
  );
  return response.data;
};
