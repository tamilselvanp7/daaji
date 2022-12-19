/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React,{ useState } from "react";
import { useRouter } from "next/router";


function Navbar() {
  const router = useRouter();

  const [expanded, setexpanded] = useState(false);
  const click = () => {
    setexpanded(!expanded);
  };
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg py-3 shadow navbar-light bg-white ${
          router.pathname.includes("online-media-coverage")
            ? "position-relative"
            : "fixed-top"
        }`}
        style={{ zIndex: "100" }}
      >
        <div className="container  ">
          <a className="navbar-brand navImgDiv " href="/designing-destiny">
            <img
              className="navImg"
              src="https://www.daaji.org/wp-content/uploads/2018/12/dd-logo.png"
            />
          </a>
          <button
            onClick={click}
            className="navbar-toggler navButton"
            type="button"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={expanded}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={
              expanded
                ? "collapse navbar-collapse justify-content-end show"
                : "collapse navbar-collapse justify-content-end "
            }
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ">
              <a
                className=" navbarItem"
                rel="noreferrer"
                href="/designing-destiny#About"
              >
                ABOUT
              </a>
              <a
                className=" navbarItem"
                href="/designing-destiny#Author"
                rel="noreferrer"
                id="navItem3"
              >
                AUTHOR
              </a>
              <a
                className="navbarItem"
                href="/designing-destiny#Endorsements"
                rel="noreferrer"
                id="navItem4"
              >
                ENDORSEMENTS
              </a>
              <a
                className=" navbarItem"
                href="/designing-destiny#Press"
                rel="noreferrer"
                id="navItem4"
              >
                PRESS
              </a>
              <a
                className=" navbarItem"
                href="/designing-destiny#BuyNow"
                id="navItem4"
              >
                BUY NOW
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
