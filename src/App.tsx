import {GlobalStyle} from '@style/Global.style';
import {ThemeProvider} from "styled-components";
import theme from "@style/theme.style";
import {RouterProvider} from "react-router-dom";
import SvgSpriteMap from "@components/@common/icons/SvgSpriteMap";
import {Helmet, HelmetProvider} from "react-helmet-async";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import router from "@/router/router.tsx";

const queryClient = new QueryClient();


function App() {

  return (
      <>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <GlobalStyle/>
            <Helmet>
              {process.env.NODE_ENV !== 'production' && (
                  <meta name="robots" content="noindex, nofollow"/>
              )}
            </Helmet>
            <ThemeProvider theme={theme}>
              <SvgSpriteMap/>
              <RouterProvider router={router}/>
            </ThemeProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </>
  )
}

export default App
