/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import DownCard from './DownCard'

// import required modules

function DownCarousel() {
    const data =[
        {
            id:1,
            description:'Life is all about acceptance. And when we learn the art of accepting whatever comes, whether it is a situation, a business outcome, or a partner, it is the acceptance that makes it successful. Even bacteria mutate to survive in a hostile atmosphere, so why can’t we?'
        },
        {
            id:2,
            description:'Meditation ultimately brings you to your centre and makes it palpable. You then have inner guidance all the time, and it speaks to you, especially about wrong things. About truth it may not speak at all, because truth is its nature. When you have a pure heart, that inner radar is very powerful.'
        },
        {
            id:3,
            description:'When we all meditate together we create a subtle field of loving unity. And when enough people meditate a particular tipping point will be reached. Then the course of humanity will change.'
        },
        {
            id:4,
            description:'When we all meditate together we create a subtle field of loving unity. And when enough people meditate a particular tipping point will be reached. Then the course of humanity will change.'
        },
       
        {
            id:5,
            description:'Heartfulness gives us a simple scientific approach to meditation: we are the experiment, the experimenter and the outcome. Our heart is our laboratory.'
        },
        {
            id:6,
            description:'Meditation is a journey from the complexity of the mind to the simplicity of the heart.'
        },
        {
            id:7,
            description:'What we did in the past has already determined our present. What we do today determines our future. This is how we weave our destiny.'
        },
        {
            id:8,
            description:'Transmission is the speciality of Heartfulness Meditation.  Transmission removes the obstacles on the journey to the Source and makes meditation truly dynamic.'
        },
        
    ]
  return (
    <Swiper
      autoHeight
      spaceBetween={60}
      // navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[ Pagination]}
      className="mySwiper"
    >
      {data.map(down=>(
          <SwiperSlide key={down.id} className='pb-5'>

              <DownCard down={down} />
          </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default DownCarousel