import { useMutation } from '@tanstack/react-query';
import {getLoginPage, LoginPageRequest} from "@apis/auth.ts";
import { URL_PATH } from "@/constant";

const useAuthLoginPage = () => {
  const redirectUri = `${window.location.origin}${URL_PATH.login}`;

  const loginMutation = useMutation({
    mutationFn: ({ request }: { request: LoginPageRequest }) =>
        getLoginPage(request, redirectUri),
    onSuccess: (data: { redirectUri: string }) => {
      // 서버에서 반환된 redirectUri로 브라우저 리디렉션
      window.location.href = data.redirectUri;
    },
    onError: () => {
      alert('로그인 요청에 실패했습니다. 다시 시도해주세요.');
    },
  });

  const login = (request: LoginPageRequest) => {
    loginMutation.mutate({ request });
  };

  return { login };
};

export default useAuthLoginPage;
