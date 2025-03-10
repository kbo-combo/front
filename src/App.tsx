import {GlobalStyle} from '@style/Global.style';
import {ThemeProvider} from "styled-components";
import theme from "@style/theme.style";
import {RouterProvider} from "react-router-dom";
import SvgSpriteMap from "@components/@common/icons/SvgSpriteMap";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {QueryClientProvider} from "@tanstack/react-query";
import router from "@/router/router.tsx";
import {NavBarProvider} from "@components/@common/navbar/NavBarContextProvider.tsx";
import CustomToastContainer from "@components/@common/toast/CustomToastContainer.tsx";
import {useEffect} from "react";
import ReactGA from 'react-ga4';
import {queryClient} from "@/hooks/client/queryClient.ts";
import {Provider} from "jotai";

const GA_CODE = import.meta.env.VITE_GA_CODE;

function App() {

  const isPrd = process.env.NODE_ENV === 'prd';
  useEffect(() => {
    if (process.env.VITE_GA_CODE != null) {
      ReactGA.initialize(GA_CODE);
    }
  }, []);
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <Provider>
          <HelmetProvider>
            <GlobalStyle/>
            <Helmet>
              <>
                {isPrd ? (
                    <title>하루한타</title>
                ) : (
                    <meta name="robots" content="noindex, nofollow" />
                )}
              </>
            </Helmet>
            <ThemeProvider theme={theme}>
                <CustomToastContainer/>
                  <SvgSpriteMap/>
                  <NavBarProvider>
                    <RouterProvider router={router}/>
                  </NavBarProvider>
            </ThemeProvider>

          </HelmetProvider>
          </Provider>
        </QueryClientProvider>
      </>
  )
}

export default App
