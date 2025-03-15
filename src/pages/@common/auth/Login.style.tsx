import styled from 'styled-components';
import theme from "@style/theme.style.ts";

export const Wrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 100%;

  background: ${({ theme: { color } }) => color.background};
`;

export const ContentBox = styled.section`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;

  width: 300px;
  max-width: 300px;
  height: 400px;
  max-height: 400px;
`;


export const LoginBox = styled.section`
  position: fixed;
  bottom: 24px;

  display: flex;
  flex-direction: column;
  align-items: center; 

  width: 100%;
  min-width: ${(props) => props.theme.width.mobile};
  max-width: ${(props) => props.theme.width.pad};
  gap: 16px; 
`;

export const KakaoLogin = styled.img`
  width: 210px;
  height: 52.5px;
`;

export const SubMessage = styled.p`
  font: ${theme.font.text};
  font-size: 4rem;
  color: ${(props) => props.theme.color.sub};
`;

export const MainMessage = styled.p`
  margin-top: 4vh;
  font: ${theme.font.text};
  font-size: 4rem;
  margin-bottom: 12.5rem;
  color: ${(props) => props.theme.color.primary};
`;
