import { useRef, } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SwiperCard from './swipercard';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function SwiperElement() {

  const swiperRef = useRef(null);

  const handleSlideChange = () => {
    const activeIndex = swiperRef.current.activeIndex;
    const slides = document.querySelectorAll('.swiper-slide-next');

    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add('swiper-slide-active');
      } else {
        slide.classList.remove('swiper-slide-active');
      }
    });
  };
    
  return (
    <>
      <Swiper
      ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        freeMode={false}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
          }
        }}
        loop={true}
        modules={[Pagination, Autoplay]}  // Add Autoplay module
        autoplay={{ delay: 5 * 1000 }}  // Set the delay in milliseconds (e.g., 3000 for 3 seconds)
        className="mySwiper pb-16"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide> <SwiperCard /> </SwiperSlide>
        <SwiperSlide> <SwiperCard /> </SwiperSlide>
        <SwiperSlide> <SwiperCard /> </SwiperSlide>
        <SwiperSlide> <SwiperCard /> </SwiperSlide>
        <SwiperSlide> <SwiperCard /> </SwiperSlide>
        <SwiperSlide> <SwiperCard /> </SwiperSlide>
      </Swiper>
    </>
  );
}