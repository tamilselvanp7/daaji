/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React from "react";
import { useRouter } from "next/router";
import {
  FaComment,
  FaFacebookF,
  FaLinkedinIn,
  // FaPinterestP,
  // FaTumblr,
  FaTwitter,
  FaWhatsapp
  // FaVk
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Styles from "../../styles/Home.module.css";
import SinglePost from "../Blog/SinglePost";
import SideBox from "../SideBox";

function HomePage({ data, meta }) {
  const router = useRouter();

  const dateCalculator = (date) => {
    const day = new Date(date).toLocaleString("en-us", {
      month: "short",
      day: "numeric"
    });
    return String(
      `${day.slice(0, 3)} ${day.slice(4, 6).padStart(2, 0)}. 20${date.slice(
        2,
        4
      )}`
    );
  };

  return (
    <div className="container ">
      <div className="home-page">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-9 order-1 order-md-1">
            {!router.query.pageno && (
              <div className={Styles.heading}>
                <div className="col d-flex flex-column text-center blog">
                  <div className="category-title-box">
                    <div />
                    {data[0].categories.map((category, index) => (
                      <Link
                        href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/${category.slug}`}
                      >
                        <a>
                          {category.title}
                          {index + 1 === data[0].categories.length ? "" : ","}
                        </a>
                      </Link>
                    ))}
                    <div />
                  </div>
                  <h1>{data[0].title}</h1>
                  <h6>{dateCalculator(data[0].date).toUpperCase()}</h6>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_SITE_URL}/${data[0].slug}`}
                  >
                    <a>
                      <Image
                        src={data[0].img}
                        width="769"
                        height="433"
                        quality={100}
                        alt="intentions"
                        className="w-100"
                      />
                    </a>
                  </Link>

                  {/* <div
                  className={Styles.description}
                  dangerouslySetInnerHTML={{
                    __html: data[0].desc
                  }}
                /> */}
                  <p className={Styles.description}>
                    {data[0].desc
                      .replace(/<[^>]+>/g, "")
                      .replace(/(&nbsp;|<br>|<br \/>)/gm, "")}
                  </p>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_SITE_URL}/${data[0].slug}`}
                  >
                    <a className={Styles.continue_animation}>
                      CONTINUE READING
                    </a>
                  </Link>

                  <br />
                </div>
                <hr className="bg-black" />
                <div className={Styles.comment_container}>
                  <a href="#">Kamlesh D. Patel</a>
                  <ul className={Styles.comment}>
                    <li>
                      <a
                        target="_blank"
                        href={`http://www.facebook.com/sharer.php?s=100&p[title]=${data[0].title}&p[url]=${process.env.NEXT_PUBLIC_SITE_URL}/${data[0].slug}`}
                        rel="noreferrer"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/${data[0].slug}`}
                        rel="noreferrer"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SITE_URL}/${data[0].slug}`}
                        rel="noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SITE_URL}/${data[0].slug}`}
                        rel="noreferrer"
                      >
                        <FaWhatsapp />
                      </a>
                    </li>

                    {/* <li>
                      <span>/</span>
                    </li> */}
                    <li>
                      <a
                        target="_blank"
                        href={`${process.env.NEXT_PUBLIC_SITE_URL}/${data[0].slug}`}
                        rel="noreferrer"
                      >
                        / <FaComment />
                      </a>
                    </li>
                    <li style={{ paddingTop: "1px" }}>
                      <Link
                        href={`${process.env.NEXT_PUBLIC_SITE_URL}/${data[0].slug}`}
                      >
                        0 Comments
                      </Link>
                    </li>
                  </ul>
                </div>
                <hr className="bg-black mt-0" />
              </div>
            )}

            <div className="container">
              <div className="row">
                {data.map((item) => (
                  <SinglePost content={item} />
                ))}
              </div>
            </div>
          </div>

          <SideBox />
          <div
            className={`col-12 col-lg-9 order-2 order-lg-3 mt-5 mb-5 next-prev-btns ${
              router.query.pageno && "d-flex"
            }`}
            style={{ padding: "0 5rem" }}
          >
            {router.query.pageno && (
              <div>
                <a
                  href={
                    process.env.NEXT_PUBLIC_SITE_URL +
                    String(
                      Number(router.query.pageno) === 2
                        ? "/"
                        : `/page/${router.query.pageno - 1}`
                    )
                  }
                  style={{ textDecoration: "none" }}
                >
                  <div className="new-btn-box">
                    <div className="left-arrow">
                      <div />
                    </div>
                    <button className={Styles.new_button}>NEWER POSTS</button>
                  </div>
                </a>
              </div>
            )}

            {Number(router.query.pageno) !== meta?.pageCount && (
              <div className={router.query.pageno ? "" : "old-btn"}>
                <a
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/page/${
                    router.query.pageno ? Number(router.query.pageno) + 1 : 2
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="old-btn-box">
                    <button className={Styles.older_button}>OLDER POSTS</button>
                    <i className="right-arrow">
                      <div />
                    </i>
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
