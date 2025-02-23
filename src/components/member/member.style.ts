import styled from "styled-components";
import {Link} from "react-router-dom";


export const Wrapper = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background: ${({ theme: { color } }) => color.background};
  color: ${({ theme: { color } }) => color.primary};
`;

export const Nickname = styled.span`
  font: bold 1.8rem / 2.2rem "jua";
  color: ${({ theme: { color } }) => color.sub};
  padding: 4px 8px;
  white-space: nowrap;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  gap: 2.5rem; 
`;


export const EditButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.textOnPrimary};
  border: none;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
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

