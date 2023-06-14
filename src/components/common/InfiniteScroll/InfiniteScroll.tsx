/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useRef } from "react";

interface InfiniteScrollProps {
  handleContentLoad: () => void;
  hasMore: boolean;
  children: React.ReactNode;
}

function InfiniteScroll({
  handleContentLoad,
  hasMore,
  children,
}: InfiniteScrollProps) {
  const endRef = useRef<HTMLDivElement>(null);

  const endOfContentObserver = useMemo(
    () =>
      new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          handleContentLoad();
        }
      }),
    []
  );

  useEffect(() => {
    if (!endRef.current) return;

    if (hasMore) {
      endOfContentObserver.observe(endRef.current);
    } else {
      endOfContentObserver.unobserve(endRef.current);
    }
  }, [hasMore, endRef.current]);

  return (
    <>
      {children}
      <div ref={endRef} />
    </>
  );
}

export default InfiniteScroll;
