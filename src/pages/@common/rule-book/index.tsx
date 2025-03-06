import {
  ContentWrapper,
  Description,
  EmphasizedText,
  HighlightDescription
} from "@pages/@common/rule-book/RuleBook.style.ts";
import {PageWrapper} from "@components/@common/wrapper/pageWrapper.style.ts";
import ContentHeader from "@components/@common/contentHeader/ContentHeader.tsx";

const RuleBook = () => {

  return (
      <>
        <PageWrapper>
          <ContentHeader title={'콤보 규칙'}/>
          <ContentWrapper>
          <HighlightDescription>콤보는 시범경기, 정규시즌, 포스트시즌이 나뉘어서 계산이 됩니다.</HighlightDescription>
          <EmphasizedText>성공</EmphasizedText>
          <Description>선택한 선수가 1안타 이상을 기록</Description>
          <Description>강우 콜드등으로 경기가 종료되더라도 정식 경기로 성립</Description>

          <EmphasizedText>실패</EmphasizedText>
          <Description>선택한 선수가 안타를 기록하지 못한 경우</Description>
          <Description>경기에 출전을 하지 않아도 실패(부상, 엔트리 말소등 포함)</Description>
          <Description>볼넷, 희생플라이, 번트등 타수에 포함되지 않더라도 실패</Description>

          <EmphasizedText>PASS</EmphasizedText>
          <Description>기상 악화등으로 경기가 취소</Description>
          <Description>서스펜디드 게임으로 경기가 중단</Description>
          </ContentWrapper>
        </PageWrapper>
      </>
  );
};

export default RuleBook;
