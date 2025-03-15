import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";
import {URL_PATH} from "@/constant";
import {ApiError} from "@/types/apis/response.ts";
import {useLoginContext} from "@/hooks/login.ts";
import {useLoginRedirect} from "@/hooks/@common/useLoginRedirect.ts";

export const useHandleError = () => {
  const navigate = useNavigate();
  const {setIsLoggedInAtom} = useLoginContext()
  const {setCurrentUrl} = useLoginRedirect()

  return (error: Error) => {
    if (!(error instanceof ApiError)) throw error;
    const status = error.status
    if (status === 401) {
      setCurrentUrl()
      setIsLoggedInAtom(false)
      toast.error("로그인이 필요합니다.");
      navigate(URL_PATH.login);
    }

    if (status === 500) {
      toast.error("서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    }

    if (status === 400) {
      toast.error(error.message)
    }
  };
};
