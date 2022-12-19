import axios from "axios";
import React, { useState, useEffect } from "react";
import Styles from "../../styles/Footer.module.css";

function Footer() {
  const [footerData, setFooterData] = useState("");

  useEffect(() => {
    // Footer Data Fetch
    const get = async () => {
      await axios
        .post("/api/getCall", {
          url: "/footer?populate=socialMediaLinks.mediaImg&populate=ourWebsiteLinks&populate=links&populate=nameImg",
        })
        .then((response) => {
          const data = response.data.data.attributes;
          setFooterData({
            image: data.nameImg.data.attributes.url,
            desc: data.decription,
            smTitle: data.socialMediaTitle,
            smLinks: data.socialMediaLinks,
            owLinks: data.ourWebsiteLinks,
            fdesc: data.footerDesc,
            links: data.links,
          });
        });
    };

    get();
  }, []);

  return (
    <footer className={Styles.footer_container}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-4 p-5"
            style={{ paddingRight: "0 !important" }}
          >
            <p>
              <img
                src={
                  footerData
                    ? footerData.image
                    : "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/KDP_1_f605afef4b.png"
                }
                alt=""
              />
            </p>
            <p className={Styles.description}>
              {footerData && footerData.desc}
            </p>
          </div>
          <div className="col-lg-4 p-5 ">
            <p className={Styles.connect}>{footerData && footerData.smTitle}</p>
            {footerData &&
              footerData.smLinks.map((item) => (
                <p className={Styles.socialnet}>
                  <a
                    href={item.profileUrl}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <i>
                      <img
                        src={item.mediaImg.data.attributes.url}
                        alt=""
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "0.5rem",
                        }}
                      />
                    </i>
                    {item.mediaName}
                  </a>
                </p>
              ))}
          </div>
          <div className="col-lg-3 p-5" id="footerMenuPadding">
            <p className={Styles.approach}>
              {footerData &&
                footerData.owLinks.map((item) =>
                  item.url ? (
                    <>
                      <a className="footerMenuLink" href={item.url}>
                        {item.text}
                      </a>
                      <br />
                    </>
                  ) : (
                    <>
                      {item.text}
                      <br />{" "}
                    </>
                  )
                )}
            </p>
          </div>
          <div className="col-12 d-flex flex-row justify-content-center">
            <div className=" mt-5">
              <p className={Styles.foot_description}>
                {footerData && footerData.fdesc}
              </p>
              <p className={Styles.policy}>
                {footerData &&
                  footerData.links.map((item, index) =>
                    index === 0 ? (
                      <a
                        className="footerMenuLink"
                        href={`${process.env.NEXT_PUBLIC_SITE_URL}${item.url}`}
                      >
                        {item.text}{" "}
                      </a>
                    ) : (
                      <>
                        |{" "}
                        <a
                          className="footerMenuLink"
                          href={`${process.env.NEXT_PUBLIC_SITE_URL}${item.url}`}
                        >
                          {item.text}
                        </a>
                      </>
                    )
                  )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
