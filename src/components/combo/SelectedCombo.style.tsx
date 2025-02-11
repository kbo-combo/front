import styled from "styled-components";
import theme from "@style/theme.style.ts";
import {ComboStatusType} from "@constant/combo.ts";

export const ComboWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 97.5%;
  background: ${theme.color.background};
  padding: 1.5rem;
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
  font: ${theme.font.subTitle};
  font-size: 2.0rem;
`;

export const CancelButton = styled.button`
  padding: 1.5rem 3rem;
  background: ${theme.color.accent};
  color: #fff;
  border: none;
  border-radius: 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
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
  font-size: 2.4rem;
  font-weight: bold;
  color: ${({theme}) => theme.color.primaryText || "#000"};
`;

export const ComboStatus = styled.div<{ status: ComboStatusType }>`
  font-size: 2.0rem;
  color: ${({status, theme}) =>
      status === "PASS" ? theme.color.success || "#28a745"
          : status === "PENDING" ? theme.color.warning || "#ffc107"
              : theme.color.error || "#dc3545"};
`;
