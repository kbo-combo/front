import {GlobalStyle} from '@style/Global.style';
import {ThemeProvider} from "styled-components";
import theme from "@style/theme.style";
import {RouterProvider} from "react-router-dom";
import router from "./router.tsx";
import SvgSpriteMap from "@components/@common/icons/SvgSpriteMap";
import {Helmet} from "react-helmet-async";

function App() {

  return (
      <>
        <GlobalStyle/>
        <Helmet>
          {process.env.NODE_ENV !== 'production' && (
              <meta name="robots" content="noindex, nofollow" />
          )}
        </Helmet>
        <ThemeProvider theme={theme}>
          <SvgSpriteMap/>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </>
  )
}

export default App
