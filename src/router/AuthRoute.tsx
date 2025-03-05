import React from 'react';
import {Navigate} from 'react-router-dom';
import {URL_PATH} from "@/constant";
import {useCheckLogin} from "@/hooks/login.ts";
import Loading from "@pages/@common/common/Loading.tsx";
import {toast} from "react-toastify";

interface AuthRouteProps {
  element: React.ReactNode;
  isPrivate: boolean;
}

const AuthRoute = ({ element, isPrivate }: AuthRouteProps) => {
  const { isLoggedIn, isLoading } = useCheckLogin();

  if (isLoading) {
    return <Loading/>
  }

  if (isPrivate && !isLoggedIn) {
    toast.error("로그인이 필요합니다.")
    return <Navigate to={`${URL_PATH.login}`} replace />;

  }

  if (!isPrivate && isLoggedIn) {
    return <Navigate to={`${URL_PATH.main}`} replace />;
  }

  return <>{element}</>;
};

export default AuthRoute;
