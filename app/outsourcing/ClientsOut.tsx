"use client";
import ClientInfoOut from '@/data/ClientInfoOut.json';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ClientOut () {
    const { title , cards} = ClientInfoOut[0]
    return(
        <div className="w-full h-150 mt-30">
             <h1 className="text-center text-6xl">{title}</h1>
        <div className="pb-2 sm:pb-3 md:pb-4">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <img
            className="w-100 h-100 rounded-lg"
            src={cards.card1.src}
            alt="Gallery image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100 h-100 rounded-lg"
            src={cards.card2.src}
            alt="Gallery image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-120 h-100  rounded-lg"
            src={cards.card3.src} 
            alt="Gallery image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-100 h-100 mt-6  rounded-lg"
            src={cards.card4.src}
            alt="Gallery image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
        </div>
    )
}