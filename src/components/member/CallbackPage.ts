import { useSearchParams } from "react-router-dom";
import {useLogin} from "@/hooks/login.ts";
import {useEffect} from "react";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const socialProvider = searchParams.get("socialProvider");
  const { login } = useLogin(socialProvider || "", code || "");

  useEffect(() => {
    if (code && socialProvider) {
      login(); // 로그인 요청 트리거
    } else {
      console.error("필수 파라미터가 누락되었습니다.");
    }
  }, [code, socialProvider, login]);
};

export default LoginPage;
