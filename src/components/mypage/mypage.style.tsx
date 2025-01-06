import styled from "styled-components";


export const Wrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background: ${({ theme: { color } }) => color.background};
`;

export const Nickname = styled.span`
  font: bold 2.4rem / 3.2rem "NanumSquareRound";
  color: ${({ theme: { color } }) => color.sub};
  padding: 8px 16px;

`;
