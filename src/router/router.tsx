import {createBrowserRouter} from 'react-router-dom';
import {URL_PATH} from "constant";
import {lazy, Suspense} from "react";
import RootTemplate from "@pages/@common/root";
import AuthRoute from "@/router/AuthRoute.tsx";
import Loading from "@pages/@common/common/Loading.tsx";

const Home = lazy(() => import('@pages/@common/home'));
const Login = lazy(() => import('@pages/@common/auth'));
const CallbackPage = lazy(() => import('@components/auth/LoginCallback.tsx'));
const HitterSelectPage = lazy(() => import('@pages/@common/hitter-select'));
const RuleBook = lazy(() => import('@pages/@common/rule-book'));
const ComboPage = lazy(() => import('@pages/@common/combo/ComboListPage.tsx'));
const MemberPage = lazy(() => import('@pages/@common/member/MemberPage.tsx'));
const MemberEditPage = lazy(() => import('@pages/@common/member/MemberEditPage.tsx'));
const ComboRankPage = lazy(() => import('@pages/@common/rank/ComboRankPage.tsx'));
const NotFoundPage = lazy(() => import('@pages/@common/common/NotFound.tsx'));


const withSuspense = (component: React.ReactNode) => (
    <Suspense fallback={<Loading/>}>{component}</Suspense>
);

const router = createBrowserRouter([
  {
    path: URL_PATH.main,
    element: <RootTemplate/>,
    errorElement: withSuspense(<NotFoundPage/>),
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
]);

export default router;
