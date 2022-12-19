import React from "react";
import Navbar from "../../components/DesigningDestiny/Navbar";
import Seo from "../../components/Seo";
import Styles from "../../styles/DesigningCSS/readmore.module.css";

const rrr = () =>  {

  const seoContent = {
    metaTitle: "Online Media Coverage | Kamlesh D Patel"
  };
  
  return(
    <div>
      <Seo seo={seoContent} />
      <div className={Styles.media_coverage_page}>
        <Navbar />
      </div>
      <div className={Styles.top_div}>
        <div className={Styles.top_inside_div}>
          <div className={Styles.top_inner_most_div}>
            <h1>Designing Destiny Media Coverage</h1>
          </div>
        </div>
      </div>
      <div className={`container py-4 ${Styles.content}`}>
        <div className="row d-flex ">
          <div className="col-lg-12 pt-3 pb-4">
            <h2>
              <strong>Online Media Coverage</strong>
              <p />
              <hr />
            </h2>
          </div>
          <div className="d-flex flex-wrap">
            <div className="col-lg-6" style={{ maxWidth: "500px" }}>
              <p>
                <a
                  href="http://arthnitimagazine.blogspot.com/2019/05/blog-post_45.html"
                  target="_blank" rel="noreferrer"
                >
                  ArthNeeti Magazine
                </a>
              </p>
              <p>
                <a
                  href="https://www.business-standard.com/article/pti-stories/daaji-s-new-book-on-how-to-design-one-s-destiny-119030400324_1.html"
                  target="_blank" rel="noreferrer"
                >
                  Business Standard
                </a>
              </p>
              <p>
                <a
                  href="http://www.newindianexpress.com/cities/kochi/2019/feb/26/design-your-destiny-1944092.html"
                  target="_blank" rel="noreferrer"
                >
                  New Indian Express
                </a>
              </p>
              <p>
                <a
                  href="https://www.theweek.in/wire-updates/national/2019/03/04/lst4-book-destiny.html"
                  target="_blank" rel="noreferrer"
                >
                  The Week
                </a>
              </p>
              <p>
                <a
                  href="https://www.gyandarbar.com/designing-destiny-kamlesh-d-patel-must-read-book-release-january-2019.html"
                  target="_blank" rel="noreferrer"
                >
                  Gyan Darbar
                </a>
              </p>
              <p>
                <a
                  href="http://www.mendyourgk.com/daajis-new-book-on-how-to-design-ones-destiny/"
                  target="_blank" rel="noreferrer"
                >
                  Mend Your GK
                </a>
              </p>
              <p>
                <a
                  href="https://www.cityairnews.com/content/designing-destiny-heartfulness-way-new-book-launched"
                  target="_blank" rel="noreferrer"
                >
                  City Air News
                </a>
              </p>
              <p>
                <a
                  href="https://www.devdiscourse.com/article/national/432557-daajis-new-book-on-designing-destiny"
                  target="_blank" rel="noreferrer"
                >
                  Devdiscourse
                </a>
              </p>
              <p>
                <a
                  href="http://buzzingchandigarh.com/designing-destiny-the-heartfulness-way-a-new-book-launched/"
                  target="_blank" rel="noreferrer"
                >
                  Buzzing Chandigarh
                </a>
              </p>
              <p>
                <a
                  href="https://mycitybeats.wordpress.com/2019/02/22/designing-destiny-new-book-launched-in-bangalore/"
                  target="_blank" rel="noreferrer"
                >
                  My City Beats
                </a>
              </p>
              <p>
                <a
                  href="http://www.mangalam.com/news/detail/290048-business-designing-destiny-new-book-launched-in-bangalore.html
"
                  target="_blank" rel="noreferrer"
                >
                  Mangalam
                </a>
              </p>
              <p>
                <a
                  href="https://mindplusnews.com/designing-destiny-the-heartfulness-way-a-new-book-launched/"
                  target="_blank" rel="noreferrer"
                >
                  Mind Plus News
                </a>
              </p>
            </div>
            <div
              className="clo-lg-6"
              style={{ maxWidth: "500px", padding: "0px 15px" }}
            >
              <p>
                <a
                  href="https://citytoday.media/2019/02/22/designing-destiny-new-book-launched-in-bangalore-daajis-second-book-enters-market-after-resounding-success-of-the-heartfulness-way/"
                  target="_blank" rel="noreferrer"
                >
                  City Today
                </a>
              </p>
              <p>
                <a
                  href="https://trending360.in/2019/02/26/design-your-destiny/"
                  target="_blank" rel="noreferrer"
                >
                  Trending 360
                </a>
              </p>
              <p>
                <a
                  href="https://www.outlookindia.com/newsscroll/daajis-new-book-on-how-to-design-ones-destiny/1489595"
                  target="_blank" rel="noreferrer"
                >
                  Outlook India
                </a>
              </p>
              <p>
                <a
                  href="https://www.businesstoday.in/pti-feed/daajis-new-book-on-how-to-design-ones-destiny/story/324259.html"
                  target="_blank" rel="noreferrer"
                >
                  Business Today
                </a>
              </p>
              <p>
                <a
                  href="http://www.ptinews.com/news/10422525_Daaji-s-new-book-on-how-to-design-one-s-destiny.html"
                  target="_blank" rel="noreferrer"
                >
                  PTI News
                </a>
              </p>
              <p>
                <a
                  href="https://theopenview.in/2019/03/04/daajis-new-book-on-how-to-design-ones-destiny/"
                  target="_blank" rel="noreferrer"
                >
                  The Open View
                </a>
              </p>
              <p>
                <a
                  href="https://cityhubnews.wordpress.com/2019/02/22/designing-destiny-new-book-launched-in-bangalore/"
                  target="_blank" rel="noreferrer"
                >
                  City Hub News
                </a>
              </p>
              <p>
                <a
                  href="http://www.ritzmagazine.in/designing-destiny-launched-in-bengaluru/"
                  target="_blank" rel="noreferrer"
                >
                  Ritz magazine
                </a>
              </p>
              <p>
                {" "}
                <a
                  href="https://expressnewshunt.wordpress.com/2019/02/22/designing-destiny-new-book-launched-in-bangalore/"
                  target="_blank" rel="noreferrer"
                >
                  Express News Hunt
                </a>
              </p>
              <p>
                <a
                  href="https://corporatenewsforu.wordpress.com/2019/02/25/designing-destiny-new-book-launched-in-bangalore/"
                  target="_blank" rel="noreferrer"
                >
                  Corporate News
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.footer}>
        <div className="container">
          <h5 className="regular">For any queries please contact us at</h5>
          <h4 className="regular pt-2">
            <a href="mailto:dd@heartfulness.org">dd@heartfulness.org</a>
          </h4>
        </div>
      </div>
      <div className="text-center pt-3 pb-3">
        <div className="container">
          <small className="pt-2">
            This site has been donated by Smith family and their children Sarah
            and Noah with the wish that all children know the blessing of
            growing up with a full heart.
          </small>
        </div>
      </div>
    </div>
  );
  }
export default rrr;
