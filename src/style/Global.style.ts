import { createGlobalStyle } from 'styled-components';
import { reset } from './reset.style';

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: "jua";
    font-display: swap;
    src: url("/fonts/jua.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "jiugae";
    font-display: swap;
    src: url("/fonts/jiugae.otf") format("opentype");
    font-weight: 400;
    font-style: normal;
  }
  
  * {
    font-family: "NanumSquareRound", "Noto Sans KR", sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  /********** hidden scroll **********/
  html,
  body {
    scrollbar-width: none;
    width: 100%;
    font-size: 62.5%;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`;
