'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// style
import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/app/page.scss';

export default function Main() {
  return (
    <div className="main-wrap w-full">
      <Swiper
        className="banner-container"
        slidesPerView={3}
        spaceBetween={10}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>

      <div className="product-container"></div>
    </div>
  );
}
