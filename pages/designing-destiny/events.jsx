import React from "react";
import Navbar from "../../components/DesigningDestiny/Navbar";
import Footer from "../../components/DesigningDestiny/Footer";
import Styles from "../../styles/DesigningCSS/readmore.module.css";
import Seo from "../../components/Seo";

const events = () => {
  const seoContent = {
    metaTitle: "Events | Kamlesh D Patel"
  };

  return (
    <div>
      <Seo seo={seoContent} />

      <div className={Styles.media_coverage_page}>
        <Navbar />
      </div>
      <div className={Styles.top_div}>
        <div className={Styles.top_inside_div}>
          <div className={`mt-5 ${Styles.top_heading}`}>
            <h1>Designing Destiny Events</h1>
          </div>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row">
          <div className={`col-lg-12 pt-3 pb-4 ${Styles.event_style}`}>
            <h2>
              <strong>Past Events</strong>
            </h2>
          </div>
          <div className={`py-3  ${Styles.event_banner}`}>
            <div className="col-md-12 text-center">
              <div className="col-lg-12 text-left">
                <p className="m-0">Call us Toll Free</p>
                <h4 className="bold">1 800 103 7726</h4>
              </div>
              <div className="row">
                <div className={`col-lg-12 ${Styles.event_Dhyanotsaw}`}>
                  <h1>Dhyanotsaw</h1>
                  <h3>Let’s</h3>
                  <h2>DESIGN OUR DESTINY</h2>
                  <h5>
                    <em>with the Heartfulness Way</em>
                  </h5>
                  <h4>FREE MEDITATION CLASSES</h4>
                  <h5 style={{ fontWeight: 700 }}>
                    22 – 24 FEBRUARY / 6:30pm to 7:30pm
                  </h5>
                  <h5
                    style={{ color: "#a72414", fontWeight: 700 }}
                    className="pb-3"
                  >
                    Dr. B R Ambedkar Outdoor Stadium, Karimnagar
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4">
        <Footer />
      </div>
    </div>
  );
};
export default events;
