import {useState} from "react";
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
} from "@components/game/GameSchedule.style.ts";
import SvgStroke from "@components/@common/icons";
import {useGameDate, useGameListByYearAndMonth} from "@/hooks/game/useGame.ts";
import {useInitializeSelectedDate, useScrollToSelectedDate} from "@/hooks/game/useGameSchedule.ts";

const MIN_MONTH = 0;
const MAX_MONTH = 10;

const GameSchedule = () => {
  const { selectedDate, setSelectedDate } = useGameDate();
  const today = new Date();

  const initialMonth = selectedDate
      ? new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1)
      : new Date(today.getFullYear(), today.getMonth(), 1);

  const [currentMonth, setCurrentMonth] = useState(initialMonth);

  const { gameDateList } = useGameListByYearAndMonth(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1
  );

  useInitializeSelectedDate(selectedDate, setSelectedDate, currentMonth, gameDateList);
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
                      selected={selectedDate?.toISOString().split("T")[0] === dateObj.date}
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
