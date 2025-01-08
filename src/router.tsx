  import {createBrowserRouter} from 'react-router-dom';
  import {URL_PATH} from "constant";
  import Home from "@pages/@common/home";
  import RootTemplate from "@pages/@common/root";
  import Login from "@pages/@common/auth";
  import MemberPage from "components/member";
  import MemberEditPage from "@components/member/MemberEditPage.tsx";

  const router = createBrowserRouter([
    {
      path: URL_PATH.main,
      element: <RootTemplate/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path: URL_PATH.login,
          element: <Login/>,
        },
        {
          path: URL_PATH.member,
          element: <MemberPage/>,
        },
        {
          path: `${URL_PATH.member}/edit`,
          element: <MemberEditPage/>,
        }
      ],
    },
  ]);

  export default router;
