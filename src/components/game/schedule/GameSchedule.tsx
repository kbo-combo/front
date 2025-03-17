import {
  CurrentMonth,
  DateItem,
  DatesWrapper,
  Day,
  Header,
  NavButton,
  ScrollContainer,
  WeekDay,
  Wrapper
} from "@components/game/schedule/GameSchedule.style.ts";
import SvgStroke from "@components/@common/icons";
import {useGameDate} from "@/hooks/game/useGame.ts";
import {useInitializeSelectedDate, useScrollToSelectedDate} from "@/hooks/game/useGameSchedule.ts";

const MIN_MONTH = 2;
const MAX_MONTH = 10;

const GameSchedule = () => {
  const { selectedDate, setSelectedDate } = useGameDate();
  const { currentMonth, setCurrentMonth, gameDateList } = useInitializeSelectedDate(selectedDate, setSelectedDate);
  const { scrollContainerRef, dateRefs } = useScrollToSelectedDate(selectedDate);

  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.getMonth() - 1;
      return newMonth < MIN_MONTH ? prev : new Date(prev.getFullYear(), newMonth, 1);
    });
  };

  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.getMonth() + 1;
      return newMonth > MAX_MONTH ? prev : new Date(prev.getFullYear(), newMonth, 1);
    });
  };

  const handleSelectDate = (dateStr: string) => {
    if (gameDateList?.some((d) => d.date === dateStr)) {
      setSelectedDate(new Date(dateStr));
    }
  };

  const isPrevDisabled = currentMonth.getMonth() <= MIN_MONTH;
  const isNextDisabled = currentMonth.getMonth() >= MAX_MONTH;

  return (
      <Wrapper>
        <Header>
          <NavButton onClick={handlePrevMonth} disabled={isPrevDisabled}>
            <SvgStroke icon="left-month" size={20} style={{ marginTop: "1rem" }} />
          </NavButton>
          <CurrentMonth>{`${currentMonth.getFullYear()}.${String(currentMonth.getMonth() + 1).padStart(2, "0")}`}</CurrentMonth>
          <NavButton onClick={handleNextMonth} disabled={isNextDisabled}>
            <SvgStroke icon="right-month" size={20} style={{ marginTop: "1rem" }} />
          </NavButton>
        </Header>
        <ScrollContainer ref={scrollContainerRef}>
          <DatesWrapper>
            {gameDateList.map((dateObj, index) => {
              return (
                  <DateItem
                      key={index}
                      ref={(el) => (dateRefs.current[dateObj.date] = el)}
                      selected={selectedDate?.toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/. /g, "-").replace(".", "") === dateObj.date}
                      disabled={!dateObj.hasGame}
                      onClick={() => handleSelectDate(dateObj.date)}
                  >
                    <WeekDay>{new Date(dateObj.date).toLocaleDateString("ko-KR", { weekday: "short" })}</WeekDay>
                    <Day>{dateObj.date.split("-")[2]}</Day>
                  </DateItem>
              );
            })}
          </DatesWrapper>
        </ScrollContainer>
      </Wrapper>
  );
};

export default GameSchedule;
