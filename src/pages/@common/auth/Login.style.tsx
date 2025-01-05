import styled from 'styled-components';

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


export const Text = styled.p`
  width: 300px;
  font: 900 3.2rem/4rem 'NanumSquareRound';
  color: #231f21;
`;

export const PrimaryText = styled.span`
  color: ${({ theme: { color } }) => color.primary};
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
