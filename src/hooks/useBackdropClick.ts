import { useEffect } from "react";

const useBackdropClick = (
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) handler();
    };

    document.addEventListener("mousedown", handleBackdropClick);

    return () => document.removeEventListener("mousedown", handleBackdropClick);
  }, []);
};

export default useBackdropClick;
