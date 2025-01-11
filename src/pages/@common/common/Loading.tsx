import styled, { keyframes } from 'styled-components';
import theme from "@style/theme.style.ts";

const LoadingScreen = () => {
  return (
      <Container>
        <Spinner />
        <Message>로딩 중입니다...</Message>
      </Container>
  );
};

export default LoadingScreen;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${theme.color.background};
`;

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 80px;
  height: 80px;
  border: 6px solid ${theme.color.subLight}; 
  border-top: 6px solid ${theme.color.primary}; 
  border-radius: 50%;
  animation: ${spinAnimation} 1s linear infinite;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font: ${theme.font.text};
  color: ${theme.color.grayDark};
  font-size: 1.75rem;
  line-height: 2.5rem;
`;
