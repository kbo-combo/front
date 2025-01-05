import { createBrowserRouter } from 'react-router-dom';
import {URL_PATH} from "./constant";
import Home from "./pages/@common/home";
import NavBar from "./components/@common/navbar/NavBar.tsx";

const router = createBrowserRouter([
  {
    path: URL_PATH.main,
    element: <NavBar/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
