/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-return-assign */
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Styles from "../styles/Home.module.css";

export default function SideBox() {
  const [bookData, setBookData] = useState("");
  const [recentBlogs, setRecentBlogs] = useState("");
  const [blogCategories, setBlogCategories] = useState("");

  useEffect(() => {
    const get = async () => {
      // For books
      await axios
        .post("/api/getCall", {
          url: `/home?populate=sidebox.BookImage`
        })
        .then((response) => {
          setBookData({
            img: response.data.data.attributes.sidebox.BookImage.data.attributes
              .url,
            link: response.data.data.attributes.sidebox.amazonlink
          });
        });

      // For Recent Blogs

      await axios
        .post("/api/getCall", {
          url: `/blogs?populate=*&pagination[page]=1&pagination[pageSize]=5&sort=date:DESC`
        })
        .then((response) => {
          setRecentBlogs(
            response.data.data.map((item) => ({
              id: item.id,
              title: item.attributes.title,
              slug: item.attributes.slug
            }))
          );
        });

      // For Blog-categories
      await axios
        .post("/api/getCall", {
          url: `/blog-cats?populate=*`
        })
        .then((response) => {
          setBlogCategories(
            response.data.data.map((item) => ({
              id: item.id,
              category: item.attributes.title,
              slug: item.attributes.slug,
              count: item.attributes.blogs.data.length
            }))
          );
        });
    };
    get();
  }, []);

  return (
    <div
      className="col-12 p-3 col-md-block col-lg-3  order-3 order-lg-2"
      style={{ padding: "0px" }}
    >
      <div className="mr-3 ml-4 mb-5">
        <div className="sidebox-mobile">
          <div className="sidebox-searbox">
            {/* <label className={Styles.icon}>
            <i className="fa fa-search" aria-hidden="true" />
          </label> */}
            <div className="search-icon">
              <div />
            </div>
            <form
              method="get"
              action="/search"
              className={Styles.post_container}
            >
              <input
                name="s"
                type="search"
                placeholder="Search"
                className={Styles.search_input}
              />
            </form>
          </div>
          <div className="mt-5 w-100">
            <hr className="w-100" />
            <p className={Styles.design_book}>- THE WISDOM BRIDGE BOOK -</p>
            <hr className="w-100" />
          </div>
          <div className={Styles.destiny_book}>
            <Image
              src={bookData?.img}
              alt=""
              width="128"
              height="222"
              quality={100}
            />
            {/* <img src={bookData?.img} alt="" /> */}
            <br />
            <div
              className={Styles.description}
              dangerouslySetInnerHTML={{
                __html: bookData?.link
              }}
            />
          </div>
          <div className="mt-5 w-100">
            <hr className="w-100" />
            <p className={Styles.design_book}>- RECENT POSTS -</p>
            <hr className="w-100" />
          </div>
          <div className="text-center">
            {recentBlogs.length &&
              recentBlogs.map((item) => (
                <a
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/${item.slug}`}
                  style={{ textDecoration: "none" }}
                  key={item.id}
                >
                  <p className={Styles.recent_posts}>
                    {item.title.toLowerCase()}
                  </p>
                </a>
              ))}
          </div>
          <div className="mt-4 w-100">
            <hr className="w-100" />
            <p className={Styles.design_book}>- CATEGORIES -</p>
            <hr className="w-100" />
          </div>
          <div className="w-100">
            <form>
              <select
                className="p-2 w-100"
                onChange={(e) => (window.location = e.target.value)}
              >
                <option value="74" selected>
                  Select category
                </option>
                {blogCategories.length &&
                  blogCategories.map((item) => (
                    <option
                      value={`${process.env.NEXT_PUBLIC_SITE_URL}/category/${item.slug}`}
                      selected={
                        typeof window !== "undefined" &&
                        window.location.pathname.split("/")[2] === item.slug &&
                        "selected"
                      }
                    >
                      {item.category} ({item.count})
                    </option>
                  ))}
              </select>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
