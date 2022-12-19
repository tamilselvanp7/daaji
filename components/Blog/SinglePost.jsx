/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from "next/link";
import React from "react";
import Styles from "../../styles/articles.module.css";

function SinglePost({ content }) {
  const dateCalculator = (date) => {
    const day = new Date(date).toLocaleString("en-us", {
      month: "short",
      day: "numeric",
    });
    return String(
      `${day.slice(0, 3)} ${day.slice(4, 6).padStart(2, 0)}. 20${date.slice(
        2,
        4
      )}`
    );
  };

  return (
    <div className="col-12 col-md-6 px-3">
      <div className="single-post">
        <div className=" text-center mt-5 ">
          <Link href={`/${content.slug}`} className={Styles.card_image}>
            <a>
              <img src={content.img} className="w-100" alt="" />
            </a>
          </Link>

          <div className="category-title-box">
            <div />
            <p>
              {content.categories.map((category, index) => (
                <a
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/${category.slug}`}
                >
                  {category.title}
                  {index + 1 === content.categories.length ? "" : ","}
                </a>
              ))}
            </p>
            <div />
          </div>
          <Link href={`/${content.slug}`}>
            <a>
              <label className={Styles.title}> {content.title}</label>
            </a>
          </Link>

          <Link href={`/${content.slug}`}>
            <a className={Styles.date}>
              {dateCalculator(content.date).toUpperCase()}
            </a>
          </Link>

          <div className={Styles.description}>
            {content.desc
              .replace(/<[^>]+>/g, "")
              .replace(/(&nbsp;|<br>|<br \/>)/gm, "")
              .slice(0, 270)}
          </div>
          <Link href={`/${content.slug}`}>
            <a>
              <span className={Styles.continue_animation}>
                CONTINUE READING
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
