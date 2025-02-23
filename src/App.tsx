import {GlobalStyle} from '@style/Global.style';
import {ThemeProvider} from "styled-components";
import theme from "@style/theme.style";
import {RouterProvider} from "react-router-dom";
import SvgSpriteMap from "@components/@common/icons/SvgSpriteMap";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import router from "@/router/router.tsx";
import {NavBarProvider} from "@components/@common/navbar/NavBarContextProvider.tsx";
import CustomToastContainer from "@components/@common/toast/CustomToastContainer.tsx";
import {useEffect} from "react";
import ReactGA from 'react-ga4';
import {RecoilRoot} from "recoil";
const GA_CODE = import.meta.env.VITE_GA_CODE;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      throwOnError: false,
    },
  },
});

function App() {

  const isPrd = process.env.NODE_ENV === 'prd';
  useEffect(() => {
    if (process.env.REACT_APP_GA_CODE != null) {
      ReactGA.initialize(GA_CODE);
    }
  }, []);
  return (
      <>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
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
          </RecoilRoot>
        </QueryClientProvider>
      </>
  )
}

export default App
