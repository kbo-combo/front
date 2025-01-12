  import {createBrowserRouter} from 'react-router-dom';
  import {URL_PATH} from "constant";
  import Home from "@pages/@common/home";
  import RootTemplate from "@pages/@common/root";
  import Login from "@pages/@common/auth";
  import MemberPage from "components/member";
  import MemberEditPage from "@components/member/MemberEditPage.tsx";
  import CallbackPage from "@components/member/CallbackPage.tsx";
  import AuthRoute from "@/router/AuthRoute.tsx";
  import NotFoundPage from "@pages/@common/common/NotFound.tsx";
  import ComboHitters from "@components/hitter/ComboHitters.tsx";

  const router = createBrowserRouter([
    {
      path: URL_PATH.main,
      element: <RootTemplate/>,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: URL_PATH.combo_hitters,
          element: <ComboHitters/>,
        },
        {
          path: URL_PATH.login,
          element: <AuthRoute isPrivate={false} element={<Login />}/>,
        },
        {
          path: `${URL_PATH.login}/:socialProvider`,
          element: <AuthRoute isPrivate={false} element={<CallbackPage />} />,
        },
        {
          path: URL_PATH.member,
          element: <AuthRoute isPrivate={true} element={<MemberPage />} />,
        },
        {
          path: `${URL_PATH.member}/edit`,
          element: <AuthRoute isPrivate={true} element={<MemberEditPage />} />,
        }
      ],
    },
  ]);


  export default router;
