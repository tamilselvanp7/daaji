/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Link from "next/link";

export default function HomeSlider() {
  const [sliderBlogs, setSliderBlogs] = useState("");
  useEffect(() => {
    const get = async () => {
      // For Recent 4 Blogs
      await axios
        .post("/api/getCall", {
          url: `/blogs?populate=*&pagination[page]=1&pagination[pageSize]=4&sort=date:DESC`
        })
        .then((response) => {
          setSliderBlogs(
            response.data.data.map((item) => ({
              id: item.id,
              title: item.attributes.title,
              slug: item.attributes.slug,
              img: item.attributes.image.data?.attributes.url
            }))
          );
        });
    };

    get();
  }, []);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    centerPadding: "20px",
    slidesToShow: 1,
    speed: 500,
    cssEase: "linear"
  };

  return (
    <div className="home-slider-container">
      <Slider {...settings}>
        {sliderBlogs.length &&
          sliderBlogs.map((item) => (
            <div>
              <div className="home-slider" key={item.id}>
                <a href={`${process.env.NEXT_PUBLIC_SITE_URL}/${item.slug}`}>
                  <Image
                    src={
                      item.img
                        ? item.img
                        : "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/part5featured_3afc0f9a92.jpg"
                    }
                    // style={{ width: "100%", height: "100%" }}
                    alt="image1"
                    width={515}
                    height={332}
                    quality={100}
                  />
                </a>

                <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/${item.slug}`}>
                  <a>
                    <p>{item.title}</p>
                  </a>
                </Link>
              </div>
            </div>
          ))}

        {/* <div>
          <div className="home-slider">
            <img
              src="https://www.daaji.org/wp-content/uploads/2021/10/Teachers-day.jpg"
              alt="image2"
              style={{ width: "100%", height: "100%" }}
            />
            <p>LET NOBLE THOUGHTS COME TO US FROM ALL DIRECTIONS</p>
          </div>
        </div>

        <div>
          <div className="home-slider">
            <img
              src="https://www.daaji.org/wp-content/uploads/2021/09/I-am-ready.jpg"
              alt="image4"
              style={{ width: "100%", height: "100%" }}
            />
            <p>I AM READY!</p>
          </div>
        </div>

        <div>
          <div className="home-slider">
            <img
              src="https://staging.daaji.org/wp-content/uploads/2021/09/tn-thotg-1024x576.jpg"
              alt="image5"
              style={{ width: "100%", height: "100%" }}
            />
            <p>THE HEART OF THE GITA</p>
          </div>
        </div> */}
      </Slider>
    </div>
  );
}
