import React, { useEffect } from "react";

export const useScrollToSelectedDate = (
    selectedDate: Date | null,
    scrollContainerRef: React.RefObject<HTMLDivElement>,
    dateRefs: React.RefObject<Record<string, HTMLDivElement | null>>
) => {
  useEffect(() => {
    if (!selectedDate || !scrollContainerRef.current || !dateRefs.current) return;

    const selectedKey = selectedDate.toISOString().split("T")[0];
    const selectedElement = dateRefs.current[selectedKey];

    if (!selectedElement) return;

    const container = scrollContainerRef.current;
    const containerRect = container.getBoundingClientRect();
    const elementRect = selectedElement.getBoundingClientRect();

    const scrollLeft =
        container.scrollLeft +
        elementRect.left -
        containerRect.left -
        container.clientWidth / 2 +
        elementRect.width / 2;

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [selectedDate, scrollContainerRef, dateRefs]);
};
