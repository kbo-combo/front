import React from 'react';
import { Navigate } from 'react-router-dom';
import {URL_PATH} from "@/constant";
import {useCheckLogin} from "@/hooks/login.ts";

interface AuthRouteProps {
  element: React.ReactNode;
  isPrivate: boolean;
}

const AuthRoute = ({ element, isPrivate }: AuthRouteProps) => {
  const { isLoggedIn } = useCheckLogin();

  if (isPrivate && !isLoggedIn) {
    return <Navigate to={`${URL_PATH.login}`} replace />;

  }

  if (!isPrivate && isLoggedIn) {
    return <Navigate to={`${URL_PATH.main}`} replace />;
  }

  return <>{element}</>;
};

export default AuthRoute;
