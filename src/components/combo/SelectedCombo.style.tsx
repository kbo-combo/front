import styled from "styled-components";
import theme from "@style/theme.style.ts";
import {ComboStatusType} from "@constant/combo.ts";
import {getComboStatusColor} from "@/function/combo/combo.ts";

export const ComboWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 97.5%;
  background: ${theme.color.background};
  padding: 1.5rem;
  margin-left: 1rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const SelectionText = styled.div`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  font-size: 2.0rem;
`;

export const CancelButton = styled.button<{ disabled?: boolean }>`
  padding: 1.5rem 2.5rem;
  background: ${({disabled}) => (disabled ? theme.color.grayDark : theme.color.accent)};
  color: #fff;
  border: none;
  border-radius: 1rem;
  cursor: ${({disabled}) => (disabled ? "not-allowed" : "pointer")};
  font: ${theme.font.text};
  font-size: 1.5rem;
  opacity: ${({disabled}) => (disabled ? 0.6 : 1)};
  transition: background 0.3s ease;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  white-space: nowrap;
`;

export const PlayerSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PlayerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PlayerDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlayerName = styled.div`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  margin-left: 2.5rem;
  font-size: 2.4rem;
`;

export const HitterRecord = styled.div`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  margin-top: 1rem;
  margin-left: 2.5rem;
  font-size: 1.35rem;
`;

export const ComboStatus = styled.div<{ status: ComboStatusType }>`
  font: ${theme.font.text};
  font-size: 2.0rem;
  margin-left: 2.5rem;
  margin-top: 1.5rem;
  color: ${({ status, theme }) => getComboStatusColor(status, theme)};
`;
