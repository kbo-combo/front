import {
  Description,
  EmphasizedText,
  MainMessage,
  Wrapper
} from "@pages/@common/rule-book/RuleBook.style.ts";

const RuleBook = () => {

  return (
      <>
        <Wrapper>
          <MainMessage>콤보 규칙</MainMessage>
          <EmphasizedText>성공</EmphasizedText>
          <Description>선택한 선수가 1안타 이상을 기록한 경우</Description>
          <Description>강우 콜드등으로 경기가 종료되더라도 정식 경기로 성립된다면 성공으로 판정</Description>

          <EmphasizedText>실패</EmphasizedText>
          <Description>해당 선수가 안타를 기록하지 못한 경우</Description>
          <Description>경기에 출전을 하지 않아도 실패(부상, 엔트리 말소등 포함)</Description>
          <Description>볼넷, 희생플라이, 번트등 타수에 포함되지 않더라도 실패</Description>

          <EmphasizedText>PASS</EmphasizedText>
          <Description>기상 악화등으로 경기가 취소된 경우</Description>
          <Description>서스펜디드 게임으로 경기가 중단된 경우</Description>
        </Wrapper>
      </>
  );
};

export default RuleBook;
