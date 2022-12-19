import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ArticleCarousel({ data }) {
  // const data = [
  //   {
  //     id: 1,
  //     href: "/designing-destiny/relationships",
  //     img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dajji_travel_5_458f56351d.jpg?updated_at=2022-11-23T08:03:45.769Z",
  //     date: "14 FEB 2019",
  //     title: "Emotions Shape Our Lives",
  //     description:
  //       " In Designing Destiny, The Heartfulness Way, we explore these emotions in depth, understanding....",
  //   },

  //   {
  //     id: 2,
  //     href: "/designing-destiny/emotions-shape-our-lives/",
  //     img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/emotions_shape_our_lives_img_c226260203.jpg?updated_at=2022-11-23T08:04:48.461Z",
  //     date: "14 FEB 2019",
  //     title: "Emotions Shape Our Lives",
  //     description:
  //       " In Designing Destiny, The Heartfulness Way, we explore these emotions in depth, understanding....",
  //   },

  // ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="endorsements-slider-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="p-3">
            <Card user={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
