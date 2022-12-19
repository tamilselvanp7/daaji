/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Styles from "../styles/about.module.css";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";

function About({ header, footer, data, seo }) {
  const [headerData] = useState({
    mainNav: header.attributes.mainNav,
    img: header.attributes.banner_img.daaji_image.data.attributes.url,
    url: header.attributes.banner_img.daaji_url
  });

  const [footerData] = useState({
    image: footer.attributes.nameImg.data.attributes.url,
    desc: footer.attributes.decription,
    smTitle: footer.attributes.socialMediaTitle,
    smLinks: footer.attributes.socialMediaLinks,
    owLinks: footer.attributes.ourWebsiteLinks,
    fdesc: footer.attributes.footerDesc,
    links: footer.attributes.links
  });
  const seoContent = {
    metaTitle: seo.attributes.seo[0]
      ? seo.attributes.seo[0].metaTitle
      : seo.attributes.title,
    metaDescription: seo.attributes.seo[0]
      ? seo.attributes.seo[0].metaDescription
      : seo.attributes.title,
    shareImage:
      seo.attributes.seo[0] &&
      seo.attributes.seo[0].metaImage.data?.attributes.url
  };

  return (
    <div>
      <Seo seo={seoContent} />
      <Header headerData={headerData} />
      <div className={Styles.about_container}>
        <div className="container" style={{ maxWidth: "850px" }}>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6 mt-5 ">
              <div className="mt-3 p-3 text-center">
   
                  <Image
                    src={data.about_image.data.attributes.url}
                    width="320"
                    height="320"
                    quality={100}
                    alt=""
                  />
         
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-3 ml-0 d-flex flex-column justify-content-center text-center">
              <div className={Styles.about}>
                <h2>
                  <span className={Styles.underline}>
                    <u>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </u>
                    &nbsp;&nbsp;<span>{data.tittle}</span> &nbsp;&nbsp;
                    <u>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </u>
                  </span>
                </h2>
                <h2 className={Styles.daajiTitle}>{data.about_title}</h2>
                <p> {data.about_desc}</p>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div
                  className="col-12 "
                  style={{
                    fontFamily: "muli",
                    textAlign: "justify",
                    fontSize: "18px"
                  }}
                >
                  <div className=" mt-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.description
                      }}
                    />

                    <div className={Styles.youtube_video}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: data.youtube_link
                        }}
                      />

                      {/* <Link href={data.youtube_link}>
                      <img
                        src={data.youtube_img.data.attributes.url}
                        className="w-75"
                        alt=""
                        style={{ cursor: "pointer" }}
                      />
                    </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 mb-3">
              {/* <Link href=''>
                            <img src='https://cdn.printfriendly.com/buttons/printfriendly-button.png' alt=''/>
                        </Link> */}
            </div>
          </div>
        </div>
      </div>
      <Footer footerData={footerData} />
    </div>
  );
}

export default About;

export const getStaticProps = async () => {
  const about = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/about?populate=*&populate=about_image&populate=seo.metaImage`
  );

  const header = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=mainNav.subMenu&populate=banner_img.daaji_image`
  );

  const footer = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=socialMediaLinks.mediaImg&populate=ourWebsiteLinks&populate=links&populate=nameImg`
  );

  return {
    props: {
      header: header.data.data,
      footer: footer.data.data,
      data: about.data.data.attributes,
      seo: about.data.data
    }
  };
};
