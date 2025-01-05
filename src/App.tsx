import {GlobalStyle} from "./style/Global.style.ts";
import {ThemeProvider} from "styled-components";
import theme from "./style/theme.style.ts";

function App() {

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <div>안녕하세요 여러분</div>
      </ThemeProvider>
    </>
  )
}

export default App
