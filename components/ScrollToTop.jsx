/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState, useEffect } from "react";

function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    showTopBtn && (
      <div className="top-to-btm" onClick={goToTop}>
        <span>to top</span>
      </div>
    )
  );
}
export default ScrollToTop;
