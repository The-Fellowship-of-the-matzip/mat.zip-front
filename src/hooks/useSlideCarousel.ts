import { useRef } from "react";
import { SwiperRef } from "swiper/react";

export const useSlideCarousel = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleSlideToPosition = (index: number) => {
    swiperRef.current?.swiper.slideToLoop(index, 800, true);
  };

  return { swiperRef, handleSlideToPosition };
};
