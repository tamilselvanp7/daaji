import React from "react";
import styles from "../../styles/DesigningCSS/BuyNow.module.css";

function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div className="container">
          <h5 className="regular">For any queries please contact us at</h5>
          <h4 className="regular pt-2">
            <a href="mailto:dd@heartfulness.org">dd@heartfulness.org</a>
          </h4>
        </div>
      </div>
      <div className="text-center pt-3 pb-3">
        <div className="container">
          <small className={`pt-2 ${styles.footer_para}`}>
            This site has been donated by Smith family and their children Sarah
            and Noah with the wish that all children know the blessing of
            growing up with a full heart.
          </small>
        </div>
      </div>
    </div>
  );
}

export default Footer;
