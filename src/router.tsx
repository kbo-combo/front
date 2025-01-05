import {createBrowserRouter} from 'react-router-dom';
import {URL_PATH} from "./constant";
import Home from "./pages/@common/home";
import RootTemplate from "./pages/@common/root";

const router = createBrowserRouter([
  {
    path: URL_PATH.main,
    element: <RootTemplate/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
    ],
  },
]);

export default router;
