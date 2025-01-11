import {useParams, useSearchParams} from "react-router-dom";
import {useLogin} from "@/hooks/login.ts";
import {useEffect} from "react";

const LoginCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { socialProvider } = useParams();
  const { login } = useLogin(socialProvider ?? "", code ?? "");

  useEffect(() => {
    if (code && socialProvider) {
      login()

    } else {
      console.error("필수 파라미터가 누락되었습니다.");
    }
  }, [code, socialProvider, login]);

  return <div>로그인 처리 중...</div>;
};

export default LoginCallback;
