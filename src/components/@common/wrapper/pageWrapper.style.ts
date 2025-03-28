import styled from "styled-components";

export const PageWrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 100%;
  
  padding-bottom: 6rem;

  background: ${({ theme: { color } }) => color.background};
  color: ${({ theme: { color } }) => color.primary};
`;
