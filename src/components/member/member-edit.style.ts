import styled from "styled-components";

export const NicknameInput = styled.input`
  width: 80%;
  padding: 1rem;
  font: bold 1.5rem / 2.2rem "jua";
  border: 0.25rem solid ${({ theme: { color } }) => color.gray};
  border-radius: 1rem;
`;

export const SaveButton = styled.button`
  padding: 2.5rem 12.5rem;
  position: fixed;
  bottom: 10rem;
  font: 1.6rem "jua";
  color: white;
  background: ${({ theme: { color } }) => color.primary};
  border: none;
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme: { color } }) => color.water};
  }
`;


