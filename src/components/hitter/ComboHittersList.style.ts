import styled from "styled-components";
import theme from "@style/theme.style.ts";

export const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme: { color } }) => color.background};
  color: ${({ theme: { color } }) => color.primary};
`;

export const PlayerListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-left: 1rem;
  justify-items: right;
  margin-top: 20rem;
`;

export const PlayerCard = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  background: ${({ selected }) =>
      selected ? theme.color.primary : theme.color.background};
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  margin-bottom: 3rem;

  width: 12rem; 
  height: 16rem;

  @media (max-width: 500px) {
    width: 8rem;
    height: 10rem;
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 10px ${theme.color.sub};
  }

  cursor: pointer;
`;
export const PlayerName = styled.span`
  margin-top: 1rem;
  font: ${theme.font.text};
  font-size: 1.6rem;
  color: ${theme.color.sub}
`;


export const PlayerInfo  = styled.span`
  margin-top: 1rem;
  font-size: 1.2rem;
  color: ${theme.color.subLight}
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 20rem;
  padding: 1.25rem 1.5rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.buttonBackground};
  border-radius: 1.0rem;
  
  &:focus {
    border-color: ${({ theme }) => theme.color.primary};
  }
`;

export const BottomButton= styled.div<{ selected: boolean }>`
  position: fixed;
  z-index: ${(props) => props.theme.zIndex.fixed};
  max-width: ${(props) => props.theme.width.pad};
  bottom: 0;
  width: 100%;
  padding: 1.5rem;
  font: ${theme.font.text};
  font-size: 2.2rem;
  background: ${({ selected }) =>
      selected ? theme.color.primary : theme.color.grayDark};
  color: ${theme.color.background};
  display: flex;
  justify-content: center;
  align-content: center;
`;
