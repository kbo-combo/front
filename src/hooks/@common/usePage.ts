import {useEffect, useRef} from "react";

interface UseInfiniteScrollProps {
  hasNextPage: boolean;
  fetchNextPage: () => void;
}

export const useInfiniteScroll = ({ hasNextPage, fetchNextPage }: UseInfiniteScrollProps) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            fetchNextPage();
          }
        },
        { threshold: 1 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  return { observerRef };
};
