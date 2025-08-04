'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from '../Shared/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FeatureProducts() {
  const [products, setProducts] = useState([]);
  console.log(products)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/product.json');
      const data = await res.json();
      setProducts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="w-2/3 mx-auto border border-gray-200 rounded p-6 relative">
      {/* Title */}
      <div className="flex items-center gap-4 mb-4">
        <h1 className="text-lg font-bold whitespace-nowrap">FEATURE PRODUCTS</h1>
        <div className="h-[2px] flex-grow bg-gray-200"></div>
      </div>

      {/* Swiper Container */}
      <div className="">
        <Swiper
          modules={[Autoplay, Navigation]}
          slidesPerView={5}
          spaceBetween={4}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="swiper-button-prev-custom absolute right-17 top-8 -translate-y-1/2 z-10 bg-white text-neutral-600 w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer border border-gray-300">
          <MdKeyboardArrowLeft size={24} />
        </div>
        <div className="swiper-button-next-custom absolute right-6 top-8 -translate-y-1/2 z-10 bg-white text-neutral-600 w-10 h-10 flex items-center justify-center rounded-full shadow-md cursor-pointer border border-gray-300">
          <MdKeyboardArrowRight size={24} />
        </div>
      </div>
    </div>
  );
}
