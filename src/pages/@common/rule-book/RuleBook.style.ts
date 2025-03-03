import {styled} from "styled-components";
import theme from "@style/theme.style.ts";

export const EmphasizedText = styled.div`
  font: ${theme.font.dictTitle};
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${theme.color.primary}; 
`;

export const Description = styled.div`
  font: ${theme.font.dictContent};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
