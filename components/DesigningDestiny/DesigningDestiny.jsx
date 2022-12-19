/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import { AiOutlineClose } from "react-icons/ai";
import { BiPlayCircle } from "react-icons/bi";
import { ImFilePdf } from "react-icons/im";
import { FaPlayCircle } from "react-icons/fa";
import { useState } from "react";
import styles from "../../styles/DesigningCSS/banner.module.css";

function DestinyBook() {
  const [model1, setModel1] = useState(false);
  const [model2, setModel2] = useState(false);
  const toggleModel1 = () => {
    setModel1(!model1);
  };
  const toggleModel2 = () => {
    setModel2(!model2);
  };
  return (
    <div>
      <div className={` ${styles.banner_dd}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-7 order-2 order-md-1">
              <div className={styles.banner_dd_left}>
                <img src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_title_banner_f3fef6887f.png?updated_at=2022-11-23T07:15:51.351Z" />
                <h4>THE HEARTFULNESS WAY</h4>
                <p>By the author of the best selling book</p>
                <p>
                  <i>The Heartfulness Way</i>
                </p>
                <p>
                  <img src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_logo_text_white_1_e74f814726.png?updated_at=2022-11-23T07:17:28.145Z" />
                </p>
              </div>
            </div>
            <div className="col-md-4 order-1 order-md-2">
              <div className={styles.banner_dd_right}>
                <img src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_book_img_408eced60a.png?updated_at=2022-11-23T07:14:02.073Z" />
              </div>
            </div>
          </div>

          <div className={styles.designingButtons}>
            <button className={styles.button} onClick={toggleModel1}>
              <BiPlayCircle /> Watch Now
            </button>

            <a
              href="https://www.amazon.in/Designing-Destiny-Kamlesh-Patel-Daaji/dp/9393986223/ref=sr_1_1?keywords=designing+destiny+kamlesh+patel&qid=1669121247&qu=eyJxc2MiOiIxLjEzIiwicXNhIjoiMS4xMiIsInFzcCI6IjAuMDAifQ%3D%3D&sprefix=desining+dest%2Caps%2C250&sr=8-1"
              className={styles.button}
              target="blank"
            >
              Order Now
            </a>

            <a
              href="https://hfnlife.com/products/b-thw"
              target="blank"
              className={styles.button}
            >
              Bulk Order at SHPT
            </a>

            <a
              href="https://www.flipkart.com/designing-destiny/p/itm0f4d9d678d4b2?pid=9789387894532&lid=LSTBOK9789387894532HCB9XZ&marketplace=FLIPKART&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_0_13&fm=SEARCH&iid=b0e70e48-a31e-49ea-8029-9c23a2f6e840.9789387894532"
              target="blank"
              className={styles.button}
            >
              <span> Order at Flipkart</span>
            </a>
          </div>

          {/* <div className="container">
            <div className={styles.designing_buttons}>
              <div className="row">
                <div className="col-12 col-md-12 col-lg-4 col-xl-3">
                  <a  onClick={toggleModel1}>
                    <span>
                      <AiOutlinePlayCircle /> Watch Now
                    </span>
                  </a>
                </div>
                <div className={styles.designingButton}>
                  <a
                    href="https://www.amazon.in/Designing-Destiny-Kamlesh-D-Patel/dp/9387894533/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr="
                    target="blank"
                  >
                    <span> Order Now</span>
                  </a>
                </div>
                <div className={styles.designingButton}>
                  <a href="https://hfnlife.com/products/b-thw" target="blank">
                    <span> Bulk Order at SHPT </span>
                  </a>
                </div>
                <div className={styles.designingButton}>
                  <a
                    href="https://www.flipkart.com/designing-destiny/p/itm0f4d9d678d4b2?pid=9789387894532&lid=LSTBOK9789387894532HCB9XZ&marketplace=FLIPKART&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_0_13&fm=SEARCH&iid=b0e70e48-a31e-49ea-8029-9c23a2f6e840.9789387894532"
                    target="blank"
                  >
                    <span> Order at Flipkart</span>
                  </a>
                </div>
            
            </div>
          </div> */}
        </div>
      </div>

      <div className={styles.presentation_banner}>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className={styles.presentation_banner_left}>
                <h3>Presentation of</h3>
                <p>
                  <img src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_title_banner_1_e4e214fa6f.png?updated_at=2022-11-23T07:23:49.751Z" />
                </p>
                <h3>to</h3>
                <h1>Hon’ble President of India</h1>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles.presentation_banner_img}>
                <img src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/president_designing_destiny_book_d4e1c10a62.jpg?updated_at=2022-11-23T07:22:16.899Z" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div id="About" className="row py-5">
          <div className="col-lg-6">
            <div className={styles.principles_banner_img}>
              <button onClick={toggleModel2}>
                <FaPlayCircle />
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <div className={styles.principles_banner_right}>
              <p>
                <span>The first principle</span> of destiny is that we can only
                change it in the present.
              </p>
              <p>
                <span style={{ color: "#be9e85" }}>The second principle</span>{" "}
                is that we create destiny for ourselves by our everyday thoughts
                – our wishes, what attracts us and repels us, our likes and
                dislikes.
              </p>
              <p>
                <span>The third principle</span> is that we need to work upon
                the mind to design our destiny. And for this we need a
                meditative practice.
              </p>
              <p>
                <span style={{ color: "#be9e85" }}>The final principle</span> we
                will explore in the book is that we are not alone; we are all
                connected. To design the destiny of humanity, we start with
                ourselves first and then expand our radius to include others. A
                day will surely come when together we are capable of changing
                the direction humanity is taking.
              </p>
            </div>
          </div>
          <div className={styles.principles_banner_button}>
            <span>
              <a
                href="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/designing_destiny_web_bd38222b59.pdf?updated_at=2022-11-23T07:33:42.757Z"
                target="_blank"
                rel="noreferrer"
              >
                <ImFilePdf /> Know More
              </a>
            </span>
          </div>
        </div>
      </div>

      <div id="Author" className={styles.author_dd}>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-4 col-md-6 col-12 text-center text-lg-right">
              <div className={styles.author_dd_left}>
                <h6>ABOUT THE AUTHOR</h6>
                <img src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_logo_color_text_f70cc7e931.png?updated_at=2022-11-23T07:36:54.607Z" />
                <p className="pt-1 pb-2">
                  Kamlesh Patel is known widely as Daaji. His teachings arise
                  from his personal experience on the path of Heartfulness,
                  while reflecting his deep spirit of enquiry and respect for
                  the world’s great spiritual traditions and scientific
                  advancements.
                </p>
                <p>
                  <a
                    href="https://www.daaji.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.daaji.org
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <img
                src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_daaji_img_76174c0467.jpg?updated_at=2022-11-23T07:38:35.773Z"
                className="w-100 p-3"
              />
            </div>
            <div className="col-lg-4 col-12 p-4">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="row">
                    <div className="col-6 text-center">
                      <img src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_thw_book_us_img_96d1fdb72e.png?updated_at=2022-11-23T07:39:49.065Z" />
                      <p className={styles.author_dd_right_img_title}>
                        The Heartfulness Way
                      </p>
                    </div>
                    <div className="col-6">
                      <p
                        className={styles.author_dd_right_img_description}
                        style={{ textAlign: "left" }}
                      >
                        Heart based meditations for spiritual transformation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="row">
                    <div className="col-6">
                      <p
                        className={styles.author_dd_right_img_description}
                        style={{ textAlign: "right" }}
                      >
                        How meditative practices lead to changes in lifestyle,
                        both personal and in relationships, which lead to
                        greater freedom in designing our destiny.
                      </p>
                    </div>
                    <div className="col-6 text-center">
                      <img src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_book_cover_img_0a2954008b.png?updated_at=2022-11-23T07:40:49.807Z" />
                      <p className={styles.author_dd_right_img_title}>
                        Designing Destiny,
                        <br />
                        the Heartfulness Way
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.webinar_banner}>
        <div className="container">
          <div className="row py-5">
            <div className="col-lg-7 ms-3">
              <div className={styles.webinar_banner_elements}>
                <h1 className="josefin-font medium mb-0 mhday-title">
                  WORLD MENTAL HEALTH DAY
                </h1>
                <h2 className="mb-4 mhday-spl">SPECIAL</h2>
                <h3 className="josefin-font bold mb-4 webinar-title">
                  LOVE AND COMPASSION FOR MENTAL WELL-BEING
                </h3>
                <h4 className="josefin-font bold pb-4">
                  <span className="h5 gotham-medium">
                    THURSDAY, 10 OCTOBER 2019
                  </span>
                </h4>
                <p className={styles.youtube_box}>
                  <iframe
                    width="640"
                    height="340"
                    src="https://www.youtube.com/embed/TKkeP-GK50Q"
                    title="Love and Compassion for Mental Well-Being | Daaji | Chris Germer |World Mental Health Day 2019"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {model1 && (
        <div onClick={toggleModel1}>
          <div className={styles.popup_youtube_video}>
            <div>
              <i onClick={toggleModel1}>
                <AiOutlineClose />
              </i>
              <iframe
                width="900"
                height="506"
                src="https://www.youtube.com/embed/aYU2EeSLJmk?autoplay=1"
                title="Designing Destiny | A new book by Daaji, unveiling of the cover by Amish Tripathi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      )}
      {model2 && (
        <div onClick={toggleModel2}>
          <div className={styles.popup_youtube_video}>
            <div>
              <i onClick={toggleModel2}>
                <AiOutlineClose />
              </i>
              <iframe
                width="900"
                height="506"
                src="https://www.youtube.com/embed/8rmHAvpJDWc?autoplay=1"
                title="Is It Possible To Change Destiny & Future ?| Designing Destiny , a book by Kamlesh D Patel , Daaji"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DestinyBook;
