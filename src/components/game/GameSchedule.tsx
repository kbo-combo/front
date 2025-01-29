import { useState, useEffect, useRef } from "react";
import {
  CurrentMonth, DateItem, DatesWrapper, Day,
  Header,
  NavButton,
  ScrollContainer, WeekDay,
  Wrapper
} from "@components/game/GameSchedule.style.ts";

const MIN_MONTH = 0;
const MAX_MONTH = 10;

const GameSchedule = ({ onSelectDate }: { onSelectDate?: (date: Date) => void }) => {
  const today = new Date();
  const initialMonth =
      today.getMonth() < MIN_MONTH || today.getMonth() > MAX_MONTH
          ? new Date(today.getFullYear(), MIN_MONTH, 1)
          : new Date(today.getFullYear(), today.getMonth(), 1);

  const [currentMonth, setCurrentMonth] = useState(initialMonth);
  const [selectedDate, setSelectedDate] = useState<Date | null>(today);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const todayRef = useRef<HTMLDivElement>(null);

  /** 해당 월의 날짜 리스트 생성 */
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: days }, (_, i) => {
      const dayDate = new Date(year, month, i + 1);
      return {
        date: dayDate,
        year: year,
        month: month + 1, // JS에서는 0부터 시작하므로 +1
        day: dayDate.getDate(),
        weekDay: dayDate.toLocaleDateString("ko-KR", { weekday: "short" }),
      };
    });
  };

  /** 오늘 날짜 위치로 자동 스크롤 */
  useEffect(() => {
    if (scrollContainerRef.current && todayRef.current) {
      const scrollContainer = scrollContainerRef.current;
      const todayElement = todayRef.current;

      scrollContainer.scrollTo({
        left: todayElement.offsetLeft - scrollContainer.clientWidth / 2 + todayElement.clientWidth / 2,
        behavior: "smooth",
      });
    }
  }, []);

  /** 이전 달로 이동 (3월 미만 이동 불가) */
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.getMonth() - 1;
      return newMonth < MIN_MONTH ? prev : new Date(prev.getFullYear(), newMonth, 1);
    });
  };

  /** 다음 달로 이동 (11월 초과 이동 불가) */
  const handleNextMonth = () => {
    setCurrentMonth((prev) => {
      const newMonth = prev.getMonth() + 1;
      return newMonth > MAX_MONTH ? prev : new Date(prev.getFullYear(), newMonth, 1);
    });
  };

  /** 날짜 선택 핸들러 */
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    if (onSelectDate) {
      onSelectDate(date);
    }
  };

  const formattedDays = getDaysInMonth(currentMonth);
  const isPrevDisabled = currentMonth.getMonth() <= MIN_MONTH;
  const isNextDisabled = currentMonth.getMonth() >= MAX_MONTH;

  /** 선택된 날짜가 현재 월에 존재하지 않으면 초기화 */
  useEffect(() => {
    const existsInCurrentMonth = formattedDays.some(
        (dateObj) => selectedDate?.toDateString() === dateObj.date.toDateString()
    );
    if (!existsInCurrentMonth) {
      setSelectedDate(null);
    }
  }, [currentMonth]);

  return (
      <Wrapper>
        <Header>
          <NavButton onClick={handlePrevMonth} disabled={isPrevDisabled}>
            ◀
          </NavButton>
          <CurrentMonth>{`${currentMonth.getFullYear()}.${String(currentMonth.getMonth() + 1).padStart(2, "0")}`}</CurrentMonth>
          <NavButton onClick={handleNextMonth} disabled={isNextDisabled}>
            ▶
          </NavButton>
        </Header>

        <ScrollContainer ref={scrollContainerRef}>
          <DatesWrapper>
            {formattedDays.map((dateObj, index) => (
                <DateItem
                    key={index}
                    ref={dateObj.day === today.getDate() && dateObj.month === today.getMonth() + 1 ? todayRef : null}
                    isSelected={selectedDate?.toDateString() === dateObj.date.toDateString()}
                    onClick={() => handleSelectDate(dateObj.date)}
                >
                  <WeekDay>{dateObj.weekDay}</WeekDay>
                  <Day>{dateObj.day}</Day>
                </DateItem>
            ))}
          </DatesWrapper>
        </ScrollContainer>
      </Wrapper>
  );
};

export default GameSchedule;
