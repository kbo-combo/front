import {createBrowserRouter} from 'react-router-dom';
import {URL_PATH} from "constant";
import Home from "@pages/@common/home";
import RootTemplate from "@pages/@common/root";
import Login from "@pages/@common/auth";
import CallbackPage from "@components/auth/LoginCallback.tsx";
import AuthRoute from "@/router/AuthRoute.tsx";
import NotFoundPage from "@pages/@common/common/NotFound.tsx";
import HitterSelectPage from "@pages/@common/hitter-select";
import RuleBook from "@pages/@common/rule-book";
import ComboPage from "@pages/@common/combo/ComboListPage.tsx";
import MemberPage from "@pages/@common/member/MemberPage.tsx";
import MemberEditPage from "@pages/@common/member/MemberEditPage.tsx";
import ComboRankPage from "@pages/@common/rank/ComboRankPage.tsx";

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
          path: URL_PATH.hitter_select,
          element: <HitterSelectPage/>
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
          path: URL_PATH.rule_book,
          element: <RuleBook />,
        },
        {
          path: URL_PATH.rank,
          element: <ComboRankPage />,
        },
        {
          path: URL_PATH.combo,
          element: <AuthRoute isPrivate={true} element={<ComboPage />} />,
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
