import {styled} from "styled-components";
import theme from "@style/theme.style.ts";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const MainMessage = styled.p`
  margin-top: 4vh;
  font: ${theme.font.subTitle};
  align-self: center;
  font-size: 5.0rem;
  font-weight: 900;
  line-height: 3rem;
  margin-bottom: 8.5rem;
  color: ${theme.color.primary};
`;

export const EmphasizedText = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${theme.color.primary}; 
`;

export const Description = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
`;
