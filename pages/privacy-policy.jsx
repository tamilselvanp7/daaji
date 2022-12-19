/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import axios from "axios";
import { ImPlus, ImMinus } from "react-icons/im";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import { useRouter } from "next/router";
import Styles from "../styles/gallery.module.css";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";

function PrivacyPolicy({ header, footer, data, seo }) {
  const [view, setview] = useState(
    new Array(data.data.attributes.policies.length).fill(false)
  );

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

  const router = useRouter();
  return (
    <>
      <Seo seo={seoContent} />
      <Header headerData={headerData} />
      <div className="container">
        <div className="privacy-policy">
          <h2>{data.data.attributes.title}</h2>
          <div
            className="privacy-policy-desc"
            dangerouslySetInnerHTML={{
              __html: data.data.attributes.description
            }}
          />
          {data.data.attributes.policies.map((PolicyData, index) => (
            <div className="privacy-policy-points" key={PolicyData.id}>
              <div
                className="points-title"
                onClick={() => {
                  setview(
                    new Array(data.data.attributes.policies.length).fill(false)
                  );
                  setview(
                    view.map((state, viewindex) =>
                      viewindex === index ? !state : false
                    )
                  );
                }}
              >
                <span style={{ padding: "10px" }}>
                  {view[index] ? <ImMinus /> : <ImPlus />}
                </span>
                <span>{PolicyData.policy_title}</span>
              </div>

              <div
                className="points-desc"
                style={{
                  display: view[index] ? "block" : "none"
                }}
                dangerouslySetInnerHTML={{ __html: PolicyData.policy_desc }}
              />
            </div>
          ))}
        </div>
        <hr />
        <div className={Styles.comment_container}>
          <ul className={Styles.comment}>
            <li>
              <a
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={`https://api.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <hr className="mb-5" />
      </div>
      <Footer footerData={footerData} />
    </>
  );
}

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/pp?populate=*&populate=policies&populate=seo.metaImage`
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
      data: res.data,
      seo: res.data.data
    }
  };
}
export default PrivacyPolicy;
