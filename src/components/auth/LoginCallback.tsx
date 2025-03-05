import {useParams, useSearchParams} from "react-router-dom";
import {useLogin} from "@/hooks/login.ts";
import {useEffect} from "react";
import Loading from "@pages/@common/common/Loading.tsx";

const LoginCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { socialProvider } = useParams();
  const { login } = useLogin(socialProvider ?? "", code ?? "");

  useEffect(() => {
    if (code && socialProvider) {
      login()
    }
  }, [code, socialProvider, login]);

  return <Loading/>
};

export default LoginCallback;
