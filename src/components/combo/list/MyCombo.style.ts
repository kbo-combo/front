import styled from "styled-components";
import theme from "@style/theme.style.ts";

export const MyComboWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100rem;
  width: 100%;
  gap: 1.2rem;
  background: ${({ theme }) => theme.color.background};
  border-radius: 1.2rem;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.1);
  padding: 2rem 2.4rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const Title = styled.div`
  font: ${theme.font.text};
  font-size: 2.5rem;
  color: ${theme.color.sub};
  margin-bottom: 1rem;
  line-height: 2.4rem;
`;

export const ComboStatRow = styled.div`
  display: flex;
  margin-left: 0.75rem;
  gap: 2rem;  
`;


export const ComboStat = styled.span<{ $color: string  }>`
  font: ${({ theme }) => theme.font.text};
  font-size: 1.8rem;
  color: ${({ $color }) => $color};
`;

export const LastSuccessDate = styled.div`
  font: ${theme.font.text};
  color: ${theme.color.subLight};
  font-size: 1.5rem;
`;

export const ComboBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.color.backgroundDark};
  margin-top: 1rem;
  border-radius: 1rem;
  overflow: hidden;
  width: 20rem;
  height: 3rem;
`;

export const Bar = styled.div<{ $ratio: number; $color: string }>`
  background: ${({ $color }) => $color};
  font: ${theme.font.text};
  color: white;
  display: flex;
  font-weight: 20;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 3rem;
  width: ${({ $ratio }) => $ratio}%;
  transition: width 0.3s ease;
`;

export const WinRateText = styled.div`
  font: ${theme.font.text};
  color: ${theme.color.grayDark};
  margin-top: 1rem;
  margin-left: 1rem;
  font-size: 1.6rem;
`;
