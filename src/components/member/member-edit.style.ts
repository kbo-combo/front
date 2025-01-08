import styled from "styled-components";

export const EditPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme: { color } }) => color.white};
  color: ${({ theme: { color } }) => color.primary};
`;


export const NicknameInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 360px;
  margin-top: 20px;
`;

export const NickNameLabel = styled.label`
  font: 1.4rem "jua";
  color: ${({ theme: { color } }) => color.primary};
  margin-bottom: 8px;
`;

export const NicknameInput = styled.input`
  width: 100%;
  padding: 10px;
  font: bold 1.6rem / 1.2rem "NanumSquareRound";
  border: 1px solid ${({ theme: { color } }) => color.gray};
  border-radius: 4px;
`;

export const NicknameLengthIndicator = styled.span`
  position: absolute;
  top: 70%;
  right: 5%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: ${({ theme: { color } }) => color.gray};
  pointer-events: none;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 1.6rem;
  color: white;
  background: ${({ theme: { color } }) => color.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: ${({ theme: { color } }) => color.water};
  }
`;
