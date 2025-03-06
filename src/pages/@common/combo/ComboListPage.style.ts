import styled from "styled-components";
import theme from "@style/theme.style.ts";
import {ComboStatusType} from "@constant/combo.ts";
import {getComboStatusColor} from "@/function/combo/combo.ts";

export const ComboSection = styled.div`
  display: flex;
  align-items: center;
  max-width: 100rem;
  justify-content: space-between;
  width: 100%;
  gap: 2.0rem;
  background: ${({theme}) => theme.color.background};
  flex-wrap: nowrap;
  padding-bottom: 4.0rem;
  padding-left: 1.5rem;
  padding-right: 2rem;
`;

export const GameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GameDate = styled.span`
  font: ${theme.font.text};
  font-size: 2.0rem;
  color: ${theme.color.sub};
`;

export const TeamLogosWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.0rem;
  justify-content: space-between;
  width: 12rem;
`;

export const VSLabel = styled.span`
  font: ${theme.font.text};
  font-size: 1.4rem;
  color: ${theme.color.subLight};
`;

export const ComboStatus = styled.div<{ status: ComboStatusType }>`
  font: ${({ theme }) => theme.font.text};
  font-size: 2.0rem;
  min-width: 6.0rem;
  text-align: center;
  flex-shrink: 0; 
  margin-left: auto; 
  color: ${({ status, theme }) => getComboStatusColor(status, theme)};
`;

export const TeamLogo = styled.img`
  width: 5rem;
  height: 5rem;
  @media (max-width: 500px) {
    width: 3.6rem;
    height: 3.6rem;
  }
  border-radius: 50%;
  object-fit: contain;
`;

export const PlayerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.2rem;
  margin-left: 3rem; 
  max-width: 10rem; 
  flex-shrink: 0; 
`;

export const PlayerName = styled.span`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  font-size: 2.0rem;
  margin-top: 1rem;
  font-weight: bold;
`;

export const Message = styled.p`
  font-size: 1.4rem;
  color: gray;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 10rem;
`;
