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


export const getLoginResult = async (
    socialProvider: string,
    loginRequest: LoginRequest
): Promise<LoginResponse> => {
  const response = await client.get<LoginResponse>(
      `/oauth/${socialProvider}/login`,
      {
        params: loginRequest,
        withCredentials: true
      }
  );
  return response.data;
};

export interface LoginRequest {
  code: string;
  redirectUri: string;
}


export interface LoginResponse {
  socialId: number
}

