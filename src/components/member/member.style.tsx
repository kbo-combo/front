import styled from "styled-components";
import {Link} from "react-router-dom";


export const Wrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background: ${({ theme: { color } }) => color.background};
`;

export const Nickname = styled.span`
  font: bold 2.7rem / 3.2rem "jua";
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


export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.textOnPrimary};
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: ${({ theme: { color } }) => color.hover};
  }

`;

export const MemberEditLink = styled(Link)`
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    transform: scale(1.2); 
  }
`;
