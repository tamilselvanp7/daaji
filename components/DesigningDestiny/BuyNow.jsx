import React from "react";
import Link from "next/link";
import styles from "../../styles/DesigningCSS/BuyNow.module.css";
import Footer from "./Footer";
import ExcerptsCarousel from "./EXCERPTS/ExcerptsCarousel";
import ArticleCarousel from "./ArticleCarousel";

function BuyNow() {
  const media = [
    {
      bgImg:
        "url(https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/Author_Joshua_Pollock_and_Heartfulness_trainer_Rishab_C_Kothari_at_the_launch_of_new_book_Designing_Destiny_in_Mumbai_46ecd59874.jpg?updated_at=2022-11-23T07:35:20.143Z)",
      title:
        "Designing Destiny New Book launched in Mumbai &amp; Unveiling of The Heartfulness Way",
      id: 1,
      link: "https://www.phoenixmedia.co.in/2019/05/designing-destiny-new-book-launched-in.html",
    },
    {
      bgImg:
        "url(https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/joshua_pollack_c8eb27a74a.jpg?updated_at=2022-11-23T08:19:23.002Z)",
      title: "The Heartfulness Way – with Joshua Pollock",
      id: 2,
      link: "http://divineinsight.com/the-heartfulness-way-with-joshua-pollock/",
    },
    {
      bgImg:
        "url(https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/Calm_your_overactive_mind_with_The_Heartfulness_Way_27fd690d7d.jpg?updated_at=2022-11-23T08:00:45.463Z)",
      title: 'Calm your overactive mind with "The Heartfulness Way"',
      id: 3,
      link: "https://www.king5.com/article/entertainment/television/programs/new-day-northwest/calm-your-overactive-mind-with-the-heartfulness-way/281-489546b5-0628-4867-a00c-b0d4cacc880c?jwsource=cl",
    },
  ];
   const Article = [
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
    <div id="BuyNow">
      <div className={styles.Buymain}>
        <div className= {styles.bookstore}id="dd-bookstore">
          <div className="row">
            <div className="col-md-6">
              <div className={styles.bgImg} />
            </div>
            <div className="col-md-6 p-5">
              <h1>NOW AVAILABLE</h1>
              <h2>
                at all leading stores <br />
                and online shops
              </h2>
              <button type="submit" className={`mt-4 mb-2 ${styles.orderbtn}`}>
                <a
                  className="text-decoration-none text-dark"
                  href="https://www.amazon.in/Designing-Destiny-Kamlesh-D-Patel/dp/9387894533/ref=tmm_pap_swatch_0?_encoding=UTF8&amp;qid=&amp;sr="
                >
                  ORDER NOW
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container pt-5 pb-5">
          <div className="text-center">
            <h1 style={{ color: "black", fontWeight: "700" }}>Article</h1>
          </div>
          <div>
            <ArticleCarousel data={Article} />
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#fff2e6" }}>
        <div className="container  pt-5 pb-5">
          <div className="row">
            <div className=" text-center">
              <h1
                className="text-center"
                style={{
                  color: "black",
                  textAlign: "center",
                  fontWeight: "700",
                  fontFamily: "josefin",
                }}
              >
                EXCERPTS FROM THE BOOK
              </h1>
            </div>
            <div className="m-5" style={{ marginLeft: "0px !important" }}>
              <ExcerptsCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mediacon}>
        <div className="container">
          <h1
            className="josefin-font bold text-center pt-5"
            style={{ fontWeight: "700" }}
          >
            MEDIA
          </h1>
          <div className="row">
            {media.map((item) => (
              <div className="col-md-6 col-lg-4 py-3" key={item.id}>
                <div
                  className={styles.mediabgImg}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),
                      rgba(0, 0, 0, 0.5)),${item.bgImg}`,
                  }}
                >
                  <h4 className="title josefin-font semi-bold">
                    <a href={item.link} target="_blank" rel="noreferrer">
                      {item.title}
                    </a>
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 text-center">
            <div className={styles.mediaSubCon}>
              <h2 className="theme-color bold pt-5">
                <Link href="/designing-destiny/online-media-coverage/">
                  Read More
                </Link>
                <br /> Online Media Coverage
              </h2>
              <h5 className="pt-3 bold">
                <a href="/designing-destiny/online-media-coverage/">here</a>
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    
    </div>
  );
}

export default BuyNow;
