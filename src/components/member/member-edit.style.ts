import styled from "styled-components";

export const EditPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme: { color } }) => color.white};
  color: ${({ theme: { color } }) => color.primary};
`;


export const NicknameInput = styled.input`
  width: 80%;
  max-width: 360px;
  padding: 10px;
  margin-top: 150px;
  font: bold 2.7rem / 3.2rem "NanumSquareRound";
  
  font-size: 1.6rem;
  border: 1px solid ${({ theme: { color } }) => color.gray};
  border-radius: 4px;
  margin-bottom: 20px;
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
