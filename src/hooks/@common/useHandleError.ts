import {AxiosError} from "axios";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {URL_PATH} from "@/constant";

export const useHandleStatusError = () => {
  const navigate = useNavigate();
  return (error: Error) => {
    if (!(error instanceof AxiosError)) throw error;

    const status = error.response?.status;

    if (status === 401) {
      toast.error("로그인이 만료됐습니다.");
      navigate(URL_PATH.login);
    }

    throw error;
  };
};
