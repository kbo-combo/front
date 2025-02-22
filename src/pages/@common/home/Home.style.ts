import { styled } from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 100%;
  padding: 0 16px;
  padding-bottom: 68px;
`;

export const MainMessage = styled.p`
  margin-top: 4vh;
  align-self: flex-start;
  font: 5.4rem "jiugae";
  font-weight: 900;
  line-height: 3rem;
  margin-bottom: 8.5rem;
  color: ${(props) => props.theme.color.primary};
`;
