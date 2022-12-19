import React from "react";
import Slider from "react-slick";
import Card2 from "./Card2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function App() {
  const data = [
    {
      id: "/#dr-elizabeth-denley",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/denley_66cad3cf65.png?updated_at=2022-11-23T07:11:14.856Z",
      heading: "Dr. Elizabeth Denley",
      title: "Yogic researcher, writer and editor",
      description:
        " In November 2014, Daaji embarked on an inspiring program for the youth of the Heartfulness Movement. He hosted the first of an ongoing series of seminars about meditative practices and lifestyle, and challenged the participants to design their own destiny.?"
    },
    {
      id: "/#ira",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/ira_4aeb308482.png?updated_at=2022-11-23T07:13:32.594Z",
      heading: "IRA TRIVEDI",
      title: "Author and Yoga acharya",
      description:
        " Daaji’s new book is a real game changer, especially for the youth. I loved this book and read it in a single sitting. With short chapters which breaks down spiritual transformation for all of us, this book is a must-read for anybody interested in embarking on a spiritual journey."
    },
    {
      id: "/#vani-kola",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/vani_kola_img_8010d41bc5.png?updated_at=2022-11-23T07:16:36.750Z",
      heading: "VANI KOLA",
      title: "MD at Kalaari Capital",
      description:
        " If you believed that fate and karma shape our lives, think again! We have heard this many times, in many forms, from many sources. Designing Destiny, the Heartfulness Way shows us the freedom we have to shape our destiny, and the easy-to-understand narrative changes any limiting beliefs about destiny. Inspirational!"
    },
    {
      id: "/#sanjay-bhatia",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/sanjay_bhatia_692985204b.png?updated_at=2022-11-23T07:18:12.814Z",
      heading: "SANJAY BHATIA",
      title: "Chairman, Mumbai Port Trust",
      description:
        " Daaji, the real spiritual scientist has wonderfully enunciated the power of meditation for one and all to understand. Explained in simple language with inspiring stories! "
    },
    {
      id: "/#suresh-prabnu",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/suresh_prabhu_d5d88a6ebd.png?updated_at=2022-11-23T07:22:29.751Z",
      heading: "SURESH PRABHU",
      title: "Minister of Commerce & Industry and Civil Aviation",
      description:
        " A book for those who are interested in personal transformation and have covered some distance, those who are seeking to go deeper into the subject, and those who would like to discover how spirituality can help us lead a life filled with worldly and inner fulfillment."
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="endorsements-slider-container" >
      <Slider {...settings}>
        {data.map((item) => (
            <div key={item.id}>
              <Card2 user2={item} />
            </div>
        ))}
      </Slider>
    </div>
  );
}