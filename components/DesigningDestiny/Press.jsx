import React from "react";
import styles from "../../styles/DesigningCSS/Press.module.css";
import ArticleCarousel from "./ArticleCarousel";

function Press() {
  const data = [
    {
      id: 1,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/BEING_A1_498ce3b407.png?updated_at=2022-11-23T07:56:52.177Z",
      date: "17 SEP 2019",
      title: "Designing Destiny – Book Review",
      description:
        " Destiny is a rather large topic to tackle. What is it? And what about that pesky karma?",
      link: "http://www.newspiritjournalonline.com/designing-destiny/",
    },
    {
      id: 2,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/BEING_A1_498ce3b407.png?updated_at=2022-11-23T07:56:52.177Z",
      date: "20 MAR 2019",
      title: "What was your trigger for writing Designing Destiny?",
      description:
        "Back in 2014, we started a series of International Youth Seminars, and my young friends were always asking...",
      link: "http://www.newindianexpress.com/cities/bengaluru/2019/mar/20/being-a-beacon-of-light-to-the-youth-1953209.html",
    },
    {
      id: 3,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_new_indian_express_4c8764dc07.png?updated_at=2022-11-23T07:58:32.263Z",
      date: "26 FEB 2019",
      title: "Design your Destiny",
      description:
        "Designing Destiny is a book by renowned spiritual leader and bestselling author of the Heartfulness..",
      link: "http://www.newindianexpress.com/cities/kochi/2019/feb/26/design-your-destiny-1944092.html",
    },
    {
      id: 4,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/create_our_own_destiny_dd_a5b71c2a48.jpg?updated_at=2022-11-23T07:59:35.931Z",
      date: "30 SEP 2019",
      title:
        "Can we create our own destiny? Desiging Destiny, The Heartfulness Way, A new",
      description:
        "‘One the anniversary of the release of The Heartfulness Way, we bring to you Desiging Destiny the second book.",
      link: "https://www.youtube.com/watch?v=e8iBIxdi_ik",
    },
    {
      id: 5,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_guru_interview_5f53108217.jpg?updated_at=2022-11-23T08:00:39.710Z",
      date: "16 JAN 2019",
      title: "Chris Gross - The Indie Spiritualist - Kamlesh Patel (Daaji)",
      description:
        "Kamlesh Patel (Daaji) visits the Indie Spiritualist Poscats to talk about going within naturally and shifting our...",
      link: "https://beherenownetwork.com/chris-grosso-the-indie-spiritualist-ep-84-kamlesh-patel-daaji/",
    },
    {
      id: 6,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/dd_book_cover_interview_img_effc2111ef.jpg?updated_at=2022-11-23T08:01:34.431Z",
      date: "18 JAN 2019",
      title: "Unveiling the cover of Desiging Destiny",
      description:
        "In Desiging Destiny, his second book of `The Heartfulnes Way1 series, Daji will take us all on the next step of his...",
      link: "https://www.daaji.org/designing-destiny/unveiling-the-cover-of-desining-destiny/",
    },
    {
      id: 7,
      img: "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_dec_8b50e1992c.jpg?updated_at=2022-11-23T08:02:23.405Z",
      date: "18 DEC 2018",
      title: "The Wisdom Bridge - Conversation between Daaji & Kaveree Bamzai",
      description:
        "`The Wiadom Bridge` - A heart-to-heart conversation between Daaji and Kaveree Bamzai, Consulting Editor, India Today...",
      link: "https://www.daaji.org/wisdom-bridge-conversation-daaji-kaveree-bamzai-india-today-group/",
    },
  ];
  return (
    <div id="Press" className="container">
      <div>
        <h1
          className="josefin-font bold text-center pt-5"
          style={{ fontWeight: "700", fontFamily: "gotham-light" }}
        >
          PRESS &amp; EVENTS
        </h1>
        <div className={` p-3 rowx ${styles.Presscon}`}>
          <div className=" row col-12">
            <div className="col-md-12 text-left">
              <p className="text-white bold">1st February 2019</p>
            </div>
            <div className="col-lg-2" />
            <div className="col-lg-8">
              <h1 className="bold josefin-font pb-2">Designing Destiny,</h1>
              <h3 className="pb-4 px-4">
                the Heartfulness Way: a new book launched Daaji’s second book
                enters the market after the resounding success of The
                Heartfulness Way
              </h3>
            </div>
            <div className="col-lg-2" />
          </div>
          <div className={`col-12 ${styles.btndiv}`}>
            <a
              className="text-dark text-decoration-none p-2 text-right"
              href="http://cdn-prod.heartfulness.org/daaji/files/2019/DD-Press-Release.pdf"
              target="_blank"
              rel="noreferrer"
            >
              VIEW PRESS RELEASE
            </a>
          </div>
        </div>

        <ArticleCarousel data={data} />

        <div className="row py-5">
          <div className="col-md-12 text-center">
            <h4 style={{ fontWeight: "600", fontFamily: "gotham-light" }}>
              <span className="pt-2">View Past Events</span>{" "}
              <a
                className={`btn white m-0 ${styles.ViewBTN}`}
                href="/designing-destiny/events"
              >
                View More
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Press;
