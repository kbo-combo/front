import {createBrowserRouter} from 'react-router-dom';
import {URL_PATH} from "constant";
import Home from "@pages/@common/home";
import RootTemplate from "@pages/@common/root";
import Login from "@pages/@common/auth";
import MyPage from "@components/mypage";

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
        path: URL_PATH.myPage,
        element: <MyPage/>,
      },
    ],
  },
]);

export default router;
