import styled from "styled-components";
import theme from "@style/theme.style.ts";

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
  font: ${theme.font.text};
  font-size: 1.8rem; 
  display: inline-block;
  width: 7.5rem;
  color: ${({ theme: { color } }) => color.primaryText};
  margin-right: 0.5rem; 
`;

export const FilterButton = styled.button<{ selected: boolean}>`
  padding: 0.5rem 0.75rem;
  font: ${theme.font.text};
  font-size: 1.6rem;  
  color: ${({ selected, theme }) =>
    selected ? theme.color.sub : theme.color.grayDark};
  border: ${({ selected, theme }) =>
      selected ? `1px solid ${theme.color.primary}` : "none"}; 
  cursor: pointer;


  transition: background-color 0.3s ease;
`;
