import styled from "styled-components";
import theme from "@style/theme.style.ts";
import {ComboStatusType} from "@constant/combo.ts";
import {getComboStatusColor} from "@/function/combo/combo.ts";

export const ComboSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100rem;
  width: 100%;
  gap: 2.0rem;
  background: ${({theme}) => theme.color.background};
  padding: 4.0rem 2rem 4.0rem 1.5rem;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 2.0rem;
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
  width: 12rem;
`;

export const VSLabel = styled.span`
  font: ${theme.font.text};
  font-size: 1.4rem;
  color: ${theme.color.subLight};
`;


export const HitterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2.5rem;
`;

export const HitterRecord = styled.div`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  margin-top: 1rem;
  font-size: 1.35rem;
  margin-bottom: 1rem;
  text-align: center;
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
  align-items: center;
  margin-left: 1rem;
  margin-top: 1.2rem;
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
