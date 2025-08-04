'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Banner() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  if (!isMounted) return null; 

  return (
    <div className="relative w-2/3 mx-auto my-12 rounded overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false, // allow resume autoplay
        }}
        loop={true}
        navigation={true}
        speed={4000}
        className="mySwiper"
      >
        <SwiperSlide><img src="/img/product/1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/product/2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/product/3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/product/4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/product/5.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  );
}
