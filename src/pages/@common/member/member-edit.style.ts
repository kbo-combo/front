import styled from "styled-components";

export const NicknameInput = styled.input`
  width: 80%;
  padding: 1rem;
  font: bold 1.5rem / 2.2rem "jua";
  border: 0.25rem solid ${({ theme: { color } }) => color.gray};
  border-radius: 1rem;
`;

export const SaveButton = styled.button<{ disabled?: boolean }>`
  padding: 2.5rem 12.5rem;
  position: fixed;
  bottom: 10rem;
  font: 1.6rem "jua";
  color: white;
  background: ${({ theme, disabled }) => (disabled ? theme.color.gray : theme.color.primary)};
  border: none;
  border-radius: 2rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: background 0.2s ease-in-out, opacity 0.2s ease-in-out;

  &:hover {
    background: ${({ theme, disabled }) => (disabled ? theme.color.gray : theme.color.water)};
  }
`;

