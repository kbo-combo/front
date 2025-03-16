import styled from "styled-components";
import theme from "@style/theme.style.ts";

export const RankItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1.8rem;
  padding-bottom: 5.0rem;
`;

export const RankInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding-left: 1rem;
`;

export const RankNumber = styled.span`
  font: ${theme.font.text};
  font-size: 2.2rem;
  color: ${theme.color.sub};
  margin-left: 0.9rem;
  margin-right: 1.2rem;
`;

export const MedalEmoji = styled.span`
  font-size: 3.4rem;
  margin-right: 0.5rem;
`;

export const MemberName = styled.span`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  max-width: 75%;
  margin-top: 1.0rem;
  font-size: 2.8rem;
  line-height: 2.6rem;

  @media (max-width: 500px) {
    font-size: 1.6rem;
    margin-top: 1.5rem;
    line-height: 1.8rem;
`;


export const CurrentRecordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  align-items: flex-end;
  font-size: 2.0rem;
`;

export const CurrentRecord = styled.span`
  font: ${theme.font.text};
  color: ${theme.color.fontGreen};
  text-align: right;
  font-size: 2.3rem;
  white-space: nowrap;

  @media (max-width: 500px) {
    font-size: 1.8rem;
`;

export const RecordStats = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 0.5rem;
`;


export const ResultCount = styled.span<{ $color: string }>`
  font: ${({theme}) => theme.font.text};
  white-space: nowrap;
  font-size: 1.4rem;
  color: ${({$color}) => $color};
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: gray;
  margin-top: 2rem;
`;
