import styled from 'styled-components';

export const HeaderBox = styled.header`
  position: sticky;
  z-index: ${({ theme: { zIndex } }) => zIndex.sticky};
  top: 0;

  display: flex;
  align-items: center;

  height: 68px;

  background: ${(props) => props.theme.color.background};
  border-bottom: solid 1px ${(props) => props.theme.color.primary};
`;

export const Title = styled.p`
  width: 100%;
  font: normal 3.2rem /3.2rem 'jua';
  text-align: center;
`;
