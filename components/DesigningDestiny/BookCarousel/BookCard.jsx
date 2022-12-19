import React from "react";
import classes from "../../../styles/DesigningCSS/cardstyle.module.css";

function BookCard({ book }) {
  return (
    <div className={classes.destin}>
      <div className={classes.bookTitle} style={{width: "100%"}}>
        <h3>{book.dd}</h3>
      </div>{" "}
      <div className={classes.inside_dv}>
        <img src={book.img} alt="#" />{" "}
      </div>
      <div className={`text-center `}>
        <h3 className={classes.title_books}>{book.name}</h3>
        <button type="submit" className={classes.bottom_div}>
          <a href={book.amazonLink} target="blank">
            Amazon
          </a>
        </button>
        <button type="submit" className={classes.bottom_div}>
          <a href={book.shptLink} target="blank">
            SHPT
          </a>
        </button>
      </div>{" "}
    </div>
  );
}

export default BookCard;
