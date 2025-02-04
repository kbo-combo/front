import {useMutation} from '@tanstack/react-query';
import {getLoginPage, getLoginResult, LoginRequest, LoginResponse,} from "@apis/auth.ts";
import {URL_PATH} from "@/constant";
import {useNavigate} from "react-router-dom";
import {useCallback} from "react";
import {getSession, setSession} from "@/utils/storage.ts";
import {toast} from "react-toastify";

export const useAuthLoginPage = () => {
  const loginMutation = useMutation({
    mutationFn: ({socialProvider}: { socialProvider: string }) => {
      const redirectUri = getRedirectUri(socialProvider);
      return getLoginPage({socialProvider}, redirectUri);
    },
    onSuccess: (data: { redirectUri: string }) => {
      window.location.href = data.redirectUri;
    },
    onError: () => {
      alert("로그인 요청에 실패했습니다. 다시 시도해주세요.");
    },
  });

  const login = (socialProvider: string) => {
    loginMutation.mutate({socialProvider});
  };

  return {login};
};


export const useLogin = (socialProvider: string, code: string) => {
  const redirectUri = getRedirectUri(socialProvider);
  const navigate = useNavigate();

  const {mutateAsync : mutation} = useMutation({
    mutationFn: (loginRequest: LoginRequest) =>
        getLoginResult(socialProvider, loginRequest),
    onSuccess: (response: LoginResponse) => {
      setSession(response.socialId)
      navigate(URL_PATH.main);
    },
    onError: () => {
      navigate(URL_PATH.login);
      toast.error("잠시 후 다시 시도해주세요.")
    },
  });

  const login = useCallback(() => {
    const loginRequest: LoginRequest = {
      redirectUri,
      code,
    };
    mutation(loginRequest)
  }, [mutation, redirectUri, code]);

  return { login };
};

export const useCheckLogin = () => {
  const session = getSession();
  return { isLoggedIn: session !== null };
};

function getRedirectUri(socialProvider: string) {
  return `${window.location.origin}${URL_PATH.login}/${socialProvider}`;
}
