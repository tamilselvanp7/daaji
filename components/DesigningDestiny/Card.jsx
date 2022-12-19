/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";
import classes from "../../styles/DesigningCSS/cardstyle.module.css";

function Card({ user }) {
  return (
    <div className={classes.main}>
      <div className={classes.image_div}>
        <Link href={`${user.href}`}>
          <a>
            <img src={user.img} alt="#" />
          </a>
        </Link>
      </div>
      <div className={classes.content}>
        <h6>{user.date}</h6>
        <Link href={`${user.href}`}>{user.title}</Link>
        <p>{user.description}</p>
      </div>
    </div>
  );
}

export default Card;
