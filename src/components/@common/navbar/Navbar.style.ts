import { keyframes, styled } from 'styled-components';

const appear = keyframes`
  from { transform: translateY(100%) }
  to { transform: translateY(0) }
`;

export const Wrapper = styled.nav`
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.fixed};
  bottom: 0;

  display: grid;
  grid-template-rows: 2px 58px;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  max-width: ${(props) => props.theme.width.pad};
  height: 60px;
  padding: 0 8px;

  background: white;
  box-shadow: 0 -1px 1px -1px ${(props) => props.theme.color.subLight};

  animation: ${appear} 0.3s ease-out;
`;

export const Button = styled.button`
  grid-row-start: 2;
  height: 100%;
`;
