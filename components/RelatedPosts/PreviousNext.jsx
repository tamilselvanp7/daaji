/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "../../styles/RelatedPost.module.css";

function PreviousNext({ prev, next, related }) {
  const relatedBlogs = related.map((item) => ({
    id: item.id,
    title: item.attributes.title,
    img: item.attributes.image.data?.attributes.url,
    date: item.attributes.date,
    slug: item.attributes.slug
  }));
  
  const dateCalculator = (date) => {
    const day = new Date(date).toLocaleString("en-us", {
      month: "short",
      day: "numeric"
    });
    return String(
      `${day.slice(0, 3)} ${day.slice(4, 6).padStart(2, 0)}. 20${date.slice(2, 4)}`
    );
  };

  return (
    <div className={styles.bgContaner}>
      <div className="row">
        {prev.title && (
          <div className={`col-6 ${styles.prveContainer}`}>
            <div className={`d-none d-md-block ${styles.topimgContaner}`}>
              <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/${prev.slug}`}>
                <a>
                  <img src={prev.img} alt="" />
                </a>
              </Link>
            </div>

            <IoIosArrowBack className={styles.icon} />
            <div>
              <div>
                <Link
                  className={styles.link}
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/${prev.slug}`}
                >
                  <a>
                    <p>
                      {" "}
                      <span>Previous post</span>
                    </p>
                  </a>
                </Link>
              </div>
              <Link
                className={styles.link}
                href={`${process.env.NEXT_PUBLIC_SITE_URL}/${prev.slug}`}
              >
                <a>
                  <span style={{ textAlign: "left", lineHeight: "20px" }}>
                    {prev.title}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        )}

        {next.title && (
          <div className={`col-6 ${styles.nextContainer}`}>
            <div>
              <div style={{ textAlign: "right" }}>
                <Link
                  className={styles.link}
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/${next.slug}`}
                >
                  <a>
                    <p>
                      {" "}
                      <span>Next post</span>
                    </p>
                  </a>
                </Link>
              </div>
              <Link
                className={styles.link}
                href={`${process.env.NEXT_PUBLIC_SITE_URL}/${next.slug}`}
              >
                <a>
                  <span style={{ textAlign: "right", lineHeight: "20px" }}>
                    {next.title}
                  </span>
                </a>
              </Link>
            </div>
            <IoIosArrowForward className={styles.icon} />
            <div className={`d-none d-md-block ${styles.topimgContaner}`}>
              <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/${next.slug}`}>
                <a>
                  <img src={next.img} alt="" />
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
      <hr />
      <div>
        <div className={styles.titlediv}>
          <h3>RELATED POSTS</h3>
        </div>
        <div className="row">
          {relatedBlogs.map(
            (item, index) =>
              index < 4 && (
                <div className={`${styles.card} col-12 col-md-6 col-lg-3 `}>
                  <div className={styles.imgContaner}>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_SITE_URL}/${item.slug}`}
                    >
                      <a>
                        <img src={item.img} className="w-20" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div>
                    <Link className={styles.link} href={`${process.env.NEXT_PUBLIC_SITE_URL}/${item.slug}`}>
                      <a>
                        <h4>{item.title}</h4>
                      </a>
                    </Link>

                    <h6>
                      <Link className={styles.link} href={`${process.env.NEXT_PUBLIC_SITE_URL}/${item.slug}`}>
                        <a>
                            <span>{dateCalculator(item.date).toUpperCase()}</span>
                        </a>
                        
                      </Link>
                    </h6>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default PreviousNext;
