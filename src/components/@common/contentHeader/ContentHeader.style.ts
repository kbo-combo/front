import styled from 'styled-components';

export const HeaderBox = styled.header`
  top: 0;

  display: flex;
  align-items: center;
  background: ${(props) => props.theme.color.background};
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

export const Title = styled.p`
  width: 100%;
  font: normal 3.2rem /3.2rem 'jua';
  text-align: center;
`;
