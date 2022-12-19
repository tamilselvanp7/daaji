/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Card from "./Card";

// import required modules

export default function App() {
  const data = [
    {
      id: 1,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/BEING_A1_498ce3b407.png?updated_at=2022-11-23T07:56:52.177Z",
      date: "17 SEP 2019",
      title: "Designing Destiny – Book Review",
      description:
        " Destiny is a rather large topic to tackle. What is it? And what about that pesky karma?",
      link: "http://www.newspiritjournalonline.com/designing-destiny/",
    },
    {
      id: 2,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/BEING_A1_498ce3b407.png?updated_at=2022-11-23T07:56:52.177Z",
      date: "20 MAR 2019",
      title: "What was your trigger for writing Designing Destiny?",
      description:
        "Back in 2014, we started a series of International Youth Seminars, and my young friends were always asking...",
      link: "http://www.newindianexpress.com/cities/bengaluru/2019/mar/20/being-a-beacon-of-light-to-the-youth-1953209.html",
    },
    {
      id: 3,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_new_indian_express_4c8764dc07.png?updated_at=2022-11-23T07:58:32.263Z",
      date: "26 FEB 2019",
      title: "Design your Destiny",
      description:
        "Designing Destiny is a book by renowned spiritual leader and bestselling author of the Heartfulness..",
      link: "http://www.newindianexpress.com/cities/kochi/2019/feb/26/design-your-destiny-1944092.html",
    },
    {
      id: 4,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/create_our_own_destiny_dd_a5b71c2a48.jpg?updated_at=2022-11-23T07:59:35.931Z",
      date: "30 SEP 2019",
      title:
        "Can we create our own destiny? Desiging Destiny, The Heartfulness Way, A new",
      description:
        "‘One the anniversary of the release of The Heartfulness Way, we bring to you Desiging Destiny the second book.",
      link: "https://www.youtube.com/watch?v=e8iBIxdi_ik",
    },
    {
      id: 5,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_guru_interview_5f53108217.jpg?updated_at=2022-11-23T08:00:39.710Z",
      date: "16 JAN 2019",
      title: "Chris Gross - The Indie Spiritualist - Kamlesh Patel (Daaji)",
      description:
        "Kamlesh Patel (Daaji) visits the Indie Spiritualist Poscats to talk about going within naturally and shifting our...",
      link: "https://beherenownetwork.com/chris-grosso-the-indie-spiritualist-ep-84-kamlesh-patel-daaji/",
    },
    {
      id: 6,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_book_cover_interview_img_effc2111ef.jpg?updated_at=2022-11-23T08:01:34.431Z",
      date: "18 JAN 2019",
      title: "Unveiling the cover of Desiging Destiny",
      description:
        "In Desiging Destiny, his second book of `The Heartfulnes Way1 series, Daji will take us all on the next step of his...",
      link: "https://www.daaji.org/designing-destiny/unveiling-the-cover-of-desining-destiny/",
    },
    {
      id: 7,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_dec_8b50e1992c.jpg?updated_at=2022-11-23T08:02:23.405Z",
      date: "18 DEC 2018",
      title: "The Wisdom Bridge - Conversation between Daaji & Kaveree Bamzai",
      description:
        "`The Wiadom Bridge` - A heart-to-heart conversation between Daaji and Kaveree Bamzai, Consulting Editor, India Today...",
      link: "https://www.daaji.org/wisdom-bridge-conversation-daaji-kaveree-bamzai-india-today-group/",
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
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {data.map((user) => (
        <SwiperSlide key={user.id} className="pb-5 col-12">
          <div>
            <Card user={user} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
