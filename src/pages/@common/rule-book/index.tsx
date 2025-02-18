const RuleBook = () => {

  return (
      <>
      <div>SUCCESS</div>
      <div>선택한 선수가 1안타 이상을 기록한 경우</div>
      <div>강우 콜드등으로 경기가 종료되더라도 정식 경기로 성립된다면 성공</div>
      <div>다음과 같은 경우도 모두 실패로 처리됩니다.</div>
      <div>경기에 출전을 하지 않는 경우(부상, 엔트리 말소등 포함)</div>
      <div>볼넷, 희생플라이, 번트등 타수에 포함되지 않더라도 실패</div>
      <div>PASS</div>
      <div>기상 악화등으로 경기가 취소된 경우</div>
      <div>서스펜디드 게임으로 경기가 중단된 경우</div>
      </>
  );
};

export default RuleBook;
