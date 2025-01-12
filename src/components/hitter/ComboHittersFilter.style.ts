import styled from "styled-components";

export const FilterWrapper = styled.div`
  flex-direction: column;
  gap: 1rem; 
  margin-bottom: 1rem; 
  width: 100%;
  justify-content: flex-start; 
  align-items: flex-start; 

  & > div {
    display: flex;
    gap: 0.5rem; 
    align-items: center;
  }
`;

export const FilterTitle = styled.span`
  font-weight: bold;
  font-size: 1.4rem; 
  color: ${({ theme: { color } }) => color.primaryText};
  margin-right: 0.5rem; 
`;

export const FilterButton = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem 0.75rem; 
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primary : theme.color.buttonBackground};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.buttonText : theme.color.secondaryText};
  border: none;
  border-radius: 0.25rem; 
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.color.primaryHover : theme.color.buttonHoverBackground};
  }

  transition: background-color 0.3s ease;
`;
