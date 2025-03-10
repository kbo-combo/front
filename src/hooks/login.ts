import {useMutation} from '@tanstack/react-query';
import {getLoginPage, getLoginResult, LoginRequest,} from "@apis/auth.ts";
import {URL_PATH} from "@/constant";
import {useNavigate} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {useAtom} from "jotai";
import {isLoggedInAtom} from "@/contexts/auth/isLoggedInAtom.ts";
import {getMemberDetail} from "@apis/member.ts";

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
      toast.error("잠시 후 다시 시도해주세요.")
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
  const {setIsLoggedInAtom} = useLoginContext()

  const {mutateAsync: mutation} = useMutation({
    mutationFn: (loginRequest: LoginRequest) =>
        getLoginResult(socialProvider, loginRequest),
    onSuccess: () => {
      navigate(URL_PATH.main);
      setIsLoggedInAtom(true)
    },
    onError: () => {
      navigate(URL_PATH.login);
      setIsLoggedInAtom(false)
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

  return {login};
};

export const useLoginContext = () => {
  const [isLoggedIn, setIsLoggedInAtom] = useAtom(isLoggedInAtom);

  return {
    isLoggedIn,
    setIsLoggedInAtom
  }
}


export const useCheckLogin = () => {
  const {isLoggedIn, setIsLoggedInAtom} = useLoginContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        setIsLoading(true);

        if (isLoggedIn === undefined) {
          const data = await getMemberDetail();
          setIsLoggedInAtom(!!data);
        }
      } catch (error) {
        console.error("Failed to fetch member details:", error);
        setIsLoggedInAtom(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkLogin();
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return {isLoggedIn: isLoggedIn, isLoading: false};

  }

  if (isLoading) {
    return {isLoggedIn: false, isLoading: true};
  }

  return {isLoggedIn: isLoggedIn, isLoading: false};
};

function getRedirectUri(socialProvider: string) {
  return `${window.location.origin}${URL_PATH.login}/${socialProvider}`;
}
