import { MutableRefObject } from "react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

interface SlideCarouselProps {
  children: JSX.Element[];
  spaceBetween?: number;
  onSlideChange: (index: number) => void;
  swiperRef: MutableRefObject<SwiperRef | null>;
}

function SlideCarousel({
  children,
  spaceBetween = 8,
  onSlideChange,
  swiperRef,
}: SlideCarouselProps) {
  const handleSlideChange = () => {
    const activeSlideIndex = swiperRef.current?.swiper.realIndex ?? 0;
    onSlideChange(activeSlideIndex);
  };

  return (
    <Swiper
      ref={swiperRef}
      className="mySwiper"
      slidesPerView={1}
      spaceBetween={spaceBetween}
      loop={true}
      modules={[Pagination, Navigation]}
      onSlideChangeTransitionEnd={handleSlideChange}
    >
      {children.map((child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideCarousel;
