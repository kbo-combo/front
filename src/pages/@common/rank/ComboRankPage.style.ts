import styled from "styled-components";
import theme from "@style/theme.style.ts";

export const RankItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  border-radius: 0.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1.8rem;
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

export const RankInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  padding-left: 1rem;
`;

export const MemberName = styled.span`
  font: ${theme.font.text};
  color: ${theme.color.sub};
  max-width: 75%;
  font-size: 2.8rem;
  line-height: 2.6rem;

  @media (max-width: 500px) {
    font-size: 1.6rem;  
    line-height: 1.8rem;
`;

export const RecordInfo = styled.span`
  font: ${theme.font.text};
  color: ${theme.color.fontGreen};
  font-size: 2.3rem;
  white-space: nowrap;

  @media (max-width: 500px) {
    font-size: 1.6rem;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 1.6rem;
  color: gray;
  margin-top: 2rem;
`;
