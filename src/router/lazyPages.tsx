import {lazy} from "react";

export const Home = lazy(() => import('@pages/@common/home'));
export const Login = lazy(() => import('@pages/@common/auth'));
export const CallbackPage = lazy(() => import('@components/auth/LoginCallback.tsx'));
export const HitterSelectPage = lazy(() => import('@pages/@common/hitter-select'));
export const RuleBook = lazy(() => import('@pages/@common/rule-book'));
export const ComboPage = lazy(() => import('@pages/@common/combo/ComboListPage.tsx'));
export const MemberPage = lazy(() => import('@pages/@common/member/MemberPage.tsx'));
export const MemberEditPage = lazy(() => import('@pages/@common/member/MemberEditPage.tsx'));
export const ComboRankPage = lazy(() => import('@pages/@common/rank/ComboRankPage.tsx'));
