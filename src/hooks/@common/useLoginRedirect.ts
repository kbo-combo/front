import {useLocation, useNavigate} from "react-router-dom";
import {URL_PATH} from "@/constant";

const REDIRECT_URL_KEY = "redirectAfterLogin";

export const useLoginRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const redirectUrl = sessionStorage.getItem(REDIRECT_URL_KEY);
  const setCurrentUrl = () => {
    sessionStorage.setItem(REDIRECT_URL_KEY, location.pathname + location.search);
  };

  const redirectAfterLogin = () => {
    if (redirectUrl) {
      sessionStorage.removeItem(REDIRECT_URL_KEY)
      navigate(redirectUrl);
    } else {
      navigate(URL_PATH.main)
    }
  }

  return {
    redirectUrl,
    setCurrentUrl,
    redirectAfterLogin
  }
}
