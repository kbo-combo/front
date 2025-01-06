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
  font: bold 2.8rem / 3.2rem "jua";
  color: ${({ theme: { color } }) => color.sub};
  padding: 8px 16px;

`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%; 
  border: 2px solid ${({ theme: { color } }) => color.primary}; 
  object-fit: cover; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  gap: 12px; 
`;
