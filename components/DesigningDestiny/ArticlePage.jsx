/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Card from "./Carousel3/Card";

// import required modules

export default function App() {
  const data = [
    {
      id: 1,
      href: "/designing-destiny/relationships",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dajji_travel_5_458f56351d.jpg?updated_at=2022-11-23T08:03:45.769Z",
      date: "14 FEB 2019",
      title: "Emotions Shape Our Lives",
      description:
        " In Designing Destiny, The Heartfulness Way, we explore these emotions in depth, understanding....",
    },
    {
      id: 2,
      href: "/designing-destiny/emotions-shape-our-lives/",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/emotions_shape_our_lives_img_c226260203.jpg?updated_at=2022-11-23T08:04:48.461Z",
      date: "14 FEB 2019",
      title: "Emotions Shape Our Lives",
      description:
        " In Designing Destiny, The Heartfulness Way, we explore these emotions in depth, understanding....",
    },
  ];
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.map((user) => (
        <SwiperSlide key={user.id} className="pb-5 col-12 ">
          <div>
            <Card user={user} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
