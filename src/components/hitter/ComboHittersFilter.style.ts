import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  & span {
    font-weight: bold;
  }
`;

export const FilterButton = styled.button<{ isSelected: boolean }>`
  padding: 8px 12px;
  background-color: ${({ isSelected }) => (isSelected ? "#007bff" : "#f0f0f0")};
  color: ${({ isSelected }) => (isSelected ? "white" : "#333")};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) => (isSelected ? "#0056b3" : "#e0e0e0")};
  }
`;

