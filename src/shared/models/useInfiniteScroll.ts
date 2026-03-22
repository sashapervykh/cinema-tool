import { useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
  next: boolean;
  isLoading: boolean;
  onLoadMore: (filters: Record<string, string | string[]>) => void;
  filters: Record<string, string | string[]>;
}

export const useInfiniteScroll = ({
  next,
  isLoading,
  onLoadMore,
  filters,
}: UseInfiniteScrollProps) => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && next && !isLoading) {
          onLoadMore(filters);
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [next, isLoading, onLoadMore, filters]);

  return loaderRef;
};
