import {URL_PATH} from "constant";
import RootTemplate from "@pages/@common/root";
import AuthRoute from "@/router/AuthRoute.tsx";
import NotFoundPage from "@pages/@common/common/NotFound.tsx";
import HitterSelectPage from "@pages/@common/hitter-select";
import withSuspense from "@/router/withSuspense.tsx";
import {
  CallbackPage,
  ComboPage,
  ComboRankPage,
  Home,
  Login, MemberEditPage, MemberPage,
  RuleBook
} from "@/router/lazyPages.tsx";


export const routes = [
  {
    path: URL_PATH.main,
    element: <RootTemplate/>,
    errorElement: <NotFoundPage/>,
    children: [
      {
        index: true,
        element: withSuspense(<Home/>),
      },
      {
        path: URL_PATH.hitter_select,
        element: withSuspense(<HitterSelectPage/>),
      },
      {
        path: URL_PATH.login,
        element: withSuspense(
            <AuthRoute isPrivate={false} element={<Login/>}/>
        ),
      },
      {
        path: `${URL_PATH.login}/:socialProvider`,
        element: withSuspense(
            <AuthRoute isPrivate={false} element={<CallbackPage/>}/>
        ),
      },
      {
        path: URL_PATH.rule_book,
        element: withSuspense(<RuleBook/>),
      },
      {
        path: URL_PATH.rank,
        element: withSuspense(<ComboRankPage/>),
      },
      {
        path: URL_PATH.combo,
        element: withSuspense(
            <AuthRoute isPrivate={true} element={<ComboPage/>}/>
        ),
      },
      {
        path: URL_PATH.member,
        element: withSuspense(
            <AuthRoute isPrivate={true} element={<MemberPage/>}/>
        ),
      },
      {
        path: `${URL_PATH.member}/edit`,
        element: withSuspense(
            <AuthRoute isPrivate={true} element={<MemberEditPage/>}/>
        ),
      },
    ],
  },
];
