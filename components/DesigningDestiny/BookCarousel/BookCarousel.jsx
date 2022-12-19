import React from "react";
import Slider from "react-slick";
import BookCard from "./BookCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const data = [
    {
      id: 1,
      dd: "DD English",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_english_img_65cb4213c0.jpg?updated_at=2022-11-23T08:11:34.895Z",
      name: "ENGLISH",
      amazonLink:
        "https://www.amazon.in/Designing-Destiny-Kamlesh-Patel/dp/9387894533",
      shptLink:
        "https://www.shpt.in/index.php?route=product/product&product_id=2820&search=Designing+Destiny",
    },
    {
      id: 2,
      dd: "DD Kannada",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_kannada_img_1b03ffb241.jpg?updated_at=2022-11-23T08:15:45.529Z",
      name: "KANNADA",
      amazonLink: "https://www.amazon.in/dp/9388689577?ref=myi_title_dp",
      shptLink:
        "https://www.shpt.in/index.php?route=product/product&search=kan&product_id=2933",
    },
    {
      id: 3,
      dd: "DD Malayalam",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_malayalam_img_4416a2d771.jpg?updated_at=2022-11-23T08:15:37.071Z",
      name: "MALAYALAM",
      amazonLink: "https://www.amazon.in/dp/9388689607?ref=myi_title_dp",
      shptLink:
        "https://www.shpt.in/index.php?route=product/product&search=mal&product_id=2934",
    },
    {
      id: 4,
      dd: "DD Tamil",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_tamil_img_4cec7c56cc.jpg?updated_at=2022-11-23T08:15:27.788Z",
      name: "TAMIL",
      amazonLink: "https://www.amazon.in/dp/9388689585?ref=myi_title_dp",
      shptLink:
        "https://www.shpt.in/index.php?route=product/product&search=tamil&product_id=2931",
    },
    {
      id: 5,
      dd: "DD Telugu",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_telugu_img_bb3440c29d.jpg?updated_at=2022-11-23T08:12:39.862Z",
      name: "TELUGU",
      amazonLink: "https://www.amazon.in/dp/9388689593?ref=myi_title_dp",
      shptLink:
        "https://www.shpt.in/index.php?route=product/product&search=tel&product_id=2932",
    },
    {
      id: 6,
      dd: "DD Marathi",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_marathi_img_607a5fd5c5.jpg?updated_at=2022-11-23T08:20:24.605Z",
      name: "MARATHI",
      amazonLink: "https://www.amazon.in/dp/9388689569?ref=myi_title_dp",
      shptLink:
        "https://www.shpt.in/index.php?route=product/product&search=marathi&product_id=2935",
    },
    {
      id: 7,
      dd: "DD Hindi",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_hindi_img_ef3b0c9556.jpg?updated_at=2022-11-23T08:15:55.169Z",
      name: "HINDI",
      amazonLink: "https://www.amazon.in/dp/9388689550?ref=myi_title_dp",
      shptLink:
        "https://www.shpt.in/index.php?route=product/product&search=hindi&product_id=2930",
    },
    {
      id: 8,
      dd: "DD Gujarati",
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_gujarathi_img_3f2f12b2ad.jpg?updated_at=2022-11-23T08:16:58.310Z",
      name: "GUJARATI",
      amazonLink: "https://www.amazon.in/dp/9388689615?ref=myi_title_dp",
      shptLink:
        "https://www.shpt.in/index.php?route=product/product&search=Designing%20Destiny&product_id=2936",
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
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
    <div className="book-slider-container">
      <Slider {...settings}>
      {data.map((book) => (
          <div key={book.id}>
            <BookCard book={book} />
          </div>
        ))}
        
        </Slider>      
    </div>
  );
}
