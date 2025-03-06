import {styled} from "styled-components";
import theme from "@style/theme.style.ts";

export const ContentWrapper = styled.div`
  padding: 0 2rem; // 좌우 간격 추가
  max-width: 800px; // 가독성을 위한 최대 너비 설정
  margin: 0 auto; // 가운데 정렬
`;


export const EmphasizedText = styled.div`
  font: ${theme.font.text};
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${theme.color.fontPrimaryForBackground}; 
`;

export const Description = styled.div`
  font: ${theme.font.dictContent};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  color: ${theme.color.sub};
`;

export const HighlightDescription = styled.div`
  font: ${theme.font.text};
  font-size: 2rem;
  margin-top: 4.5rem;
  line-height: 2rem;
  margin-bottom: 1.0em;
  color: ${theme.color.sub};
`;

