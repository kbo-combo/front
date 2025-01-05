import {GlobalStyle} from "./style/Global.style.ts";
import {ThemeProvider} from "styled-components";
import theme from "./style/theme.style.ts";
import {RouterProvider} from "react-router-dom";
import router from "./router.tsx";
import SvgSpriteMap from "./components/@common/icons/SvgSpriteMap.tsx";

function App() {

  return (
      <>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
          <SvgSpriteMap />
          <RouterProvider router={router} />
        </ThemeProvider>
      </>
  )
}

export default App
