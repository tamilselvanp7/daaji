/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import Styles from "../../styles/Footer.module.css";
import HeaderImg from "./HeaderImg";

function NavMenu({ headerData }) {
  const [showDropdown, setShowDropdown] = React.useState(true);

  const router = useRouter();
  // const [headData, setHeadData] = useState("");

  // useEffect(() => {
  //   const get = async () => {
  //     await axios
  //       .post("/api/getCall", {
  //         url: "/header?populate=mainNav.subMenu&populate=banner_img.daaji_image"
  //       })
  //       .then((response) => {
  //         setHeadData({
  //           mainNav: response.data.data.attributes.mainNav,
  //           img: response.data.data.attributes.banner_img.daaji_image.data
  //             .attributes.url,
  //           url: response.data.data.attributes.banner_img.daaji_url
  //         });
  //       });
  //   };

  //   get();
  // }, []);

  const [Active, setActive] = useState();
  const categories = ["articles", "video", "press", "podcasts"];
  const publication = [
    "audio-video",
    "books",
    "from-the-desk-of-daaji",
    "huffington-post",
    "speaking-tree"
  ];

  useEffect(() => {
    if (categories.includes(router.asPath.split("/")[2])) {
      setActive("categories");
    } else if (
      publication.includes(router.asPath.split("/")[2]) ||
      publication.includes(router.asPath.split("/")[1])
    ) {
      setActive("publications");
    } else {
      setActive("");
    }
  });

  return (
    <div>
      <Navbar
        collapseOnSelect
        className="navbar navbar-expand-lg daaji-glimpses-header"
        expand="lg"
        id="menu_nav_bar"
      >
        <div className="container">
          <div>
            <Navbar.Toggle aria-controls="navbarResponsive" />
            <Navbar.Collapse
              id="navbarResponsive"
              className="collapse navbar-collapse"
            >
              <Nav className={Styles.NavStyle}>
                {headerData ? (
                  <ul className="navbar-nav">
                    {headerData.mainNav.map((item) =>
                      !item.subMenu.length ? (
                        <li
                          className={` daaji-glimpses-nav nav-item ${
                            item.url === router.asPath
                              ? "navActive"
                              : router.asPath.split("/")[1] === item.title &&
                                "navActive"
                          }`}
                        >
                          <span className="daaji-glimpses-nav-link">
                            <Link
                              href={`${process.env.NEXT_PUBLIC_SITE_URL}${item.url}`}
                              passHref
                            >
                              <a
                                className={` nav-link ${
                                  item.url === router.asPath
                                    ? "navActiveTitle"
                                    : router.asPath.split("/")[1] ===
                                        item.title && "navActiveTitle"
                                }`}
                                aria-current="page"
                              >
                                {item.title}
                              </a>
                            </Link>
                          </span>
                        </li>
                      ) : (
                        <li
                          className={`daaji-glimpses-dropdown nav-item dropdown ${
                            Active === item.title ? "navActive" : ""
                          }`}
                        >
                          <span className="daaji-glimpses-nav-link">
                            <a
                              className={`nav-link dropdown-toggle ${
                                Active === item.title ? "navActiveTitle" : ""
                              }`}
                              href="#"
                              role="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              // onClick={() => {
                              //   if (showDropdown === String(item.title)) {
                              //     setShowDropdown(null);
                              //   } else {
                              //     setShowDropdown(String(item.title));
                              //   }
                              // }}
                              style={{ pointerEvents: "none" }}
                            >
                              {item.title}
                            </a>
                          </span>
                          <ul
                            className={
                              showDropdown === String(item.title)
                                ? "dropdown-menu dropdown-glimpsesMenu1 show"
                                : "dropdown-menu dropdown-glimpsesMenu1 hide"
                            }
                            role="menu"
                          >
                            {item.subMenu.map((sub) => (
                              <li className="menu-item">
                                <a
                                  className="dropdown-item"
                                  href={`${process.env.NEXT_PUBLIC_SITE_URL}${sub.url}`}
                                >
                                  {sub.menu_title}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )
                    )}
                  </ul>
                ) : (
                  <ul className="navbar-nav">
                    <li className="daaji-glimpses-nav nav-item">
                      <span className="daaji-glimpses-nav-link">
                        <a
                          className="nav-link"
                          aria-current="page"
                          href={process.env.NEXT_PUBLIC_SITE_URL}
                        >
                          Home
                        </a>
                      </span>
                    </li>
                    <li className="daaji-glimpses-nav nav-item">
                      <span className="daaji-glimpses-nav-link">
                        <a
                          className="nav-link"
                          href={`${process.env.NEXT_PUBLIC_SITE_URL}/about`}
                        >
                          About
                        </a>
                      </span>
                    </li>
                    <li className="daaji-glimpses-dropdown nav-item dropdown">
                      <span className="daaji-glimpses-nav-link">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => {
                            if (showDropdown === "Categories") {
                              setShowDropdown(null);
                            } else {
                              setShowDropdown("Categories");
                            }
                          }}
                        >
                          Categories
                        </a>
                      </span>
                      <ul
                        className={
                          showDropdown === "Categories"
                            ? "dropdown-menu dropdown-glimpsesMenu1 show"
                            : "dropdown-menu dropdown-glimpsesMenu1 hide"
                        }
                        role="menu"
                      >
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/articles`}
                          >
                            Articles
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/video`}
                          >
                            VIDEO
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/press`}
                          >
                            Press
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/podcasts`}
                          >
                            Podcasts
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="daaji-glimpses-dropdown nav-item dropdown">
                      <span className="daaji-glimpses-nav-link">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          onClick={() => {
                            if (showDropdown === "Publications") {
                              setShowDropdown(null);
                            } else {
                              setShowDropdown("Publications");
                            }
                          }}
                        >
                          Publications
                        </a>
                      </span>
                      <ul
                        className={
                          showDropdown === "Publications"
                            ? "dropdown-menu dropdown-glimpsesMenu1 show"
                            : "dropdown-menu dropdown-glimpsesMenu1 hide"
                        }
                        role="menu"
                      >
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/audio-video`}
                          >
                            Audio-Video
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/books`}
                          >
                            Books
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/from-the-desk-of-daaji`}
                          >
                            From the desk of Daaji
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/huffington-post`}
                          >
                            Huffington Post
                          </a>
                        </li>
                        <li className="menu-item">
                          <a
                            className="dropdown-item"
                            href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/speaking-tree`}
                          >
                            Speaking Tree
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="daaji-glimpses-nav nav-item">
                      <span className="daaji-glimpses-nav-link">
                        <a
                          className="nav-link"
                          href={`${process.env.NEXT_PUBLIC_SITE_URL}/gallery`}
                        >
                          Gallery
                        </a>
                      </span>
                    </li>
                    <li className="daaji-glimpses-nav  nav-item">
                      <span className="daaji-glimpses-nav-link ">
                        <a
                          className="nav-link active"
                          href={`${process.env.NEXT_PUBLIC_SITE_URL}/glimpses`}
                        >
                          Glimpses
                        </a>
                      </span>
                    </li>
                    <li className="daaji-glimpses-nav nav-item">
                      <span className="daaji-glimpses-nav-link">
                        <a
                          className="nav-link"
                          href={`${process.env.NEXT_PUBLIC_SITE_URL}/contact`}
                        >
                          Contact
                        </a>
                      </span>
                    </li>
                  </ul>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      {!router.pathname.includes("glimpses") && (
        <HeaderImg image={headerData.img} />
      )}
    </div>
  );
}

export default NavMenu;
