/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
// import ReactStars from "react-rating-stars-component";
import styles from "../../styles/DesigningCSS/Review.module.css";
import Carousel2 from "./Carousel2/Carousel2";
import BookCarousel from "./BookCarousel/BookCarousel";

function Review() {
  // const ratingChanged = () => {
  //   console.log("working");
  // };
  return (
    <>
      <div className={styles.book_container}>
        <div className="container">
          <div className="row">
            <div className="pb-5 pt-5 text-center">
              <h6 style={{ fontWeight: "700" }}>Now available</h6>
              <h3 style={{ color: "#a73c46", fontSize: "bold" }}>
                IN 8 LANGUAGES
              </h3>
            </div>
            <div className="mb-5 pb-5">
              <BookCarousel />
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 pb-5  bg-white" id="Endorsements">
        <div className="row">
          <div className="text-center mb-3">
            <h1 style={{ fontWeight: "700" }}>ENDORSEMENTS</h1>
          </div>
          <div>
            <Carousel2 />
          </div>
        </div>
      </div>
      {/* <div className={styles.reviewContainer} id="Review">
        <div className={styles.Container1}>
          <h1 className="josefin-font bold text-center pt-2">
            REVIEWS FROM PEOPLE
          </h1>
          <div className={`mt-3 p-5 pb-0 mx-4 ${styles.sendreviewsec}`}>
            <h2 className="josefin-font mb-5 text-white thin text-center">
              SEND YOUR REVIEWS
            </h2>
            <form>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={50}
                isHalf
                emptyIcon={<i className="far fa-star" />}
                halfIcon={<i className="fa fa-star-half-alt" />}
                fullIcon={<i className="fa fa-star" />}
                activeColor="#ffd700"
              />
              ,
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Your Review:<span>*</span>
                </label>
                <textarea
                  className="form-control"
                  placeholder="Give review here"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name:<span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="user name"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="form-label">
                  Email address:<span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Mail ID"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary my-5">
                  submit Your Review
                </button>
              </div>
            </form>
          </div>
          <div />
        </div>
      </div> */}
    </>
  );
}

export default Review;
