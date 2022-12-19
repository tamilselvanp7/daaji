/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaLinkedinIn,
  // FaPinterestP,
  // FaTumblr,
  FaTwitter,
  FaWhatsapp
  // FaVk
} from "react-icons/fa";
import { useRouter } from "next/router";
import Styles from "../styles/audiovideo.module.css";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";

function AudioVideo({header, footer, data, seo }) {
  const router = useRouter();

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
      <Header headerData={headerData}/>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-5">
            <p className={Styles.audio_para}>{data.attributes.description}</p>
          </div>
          {data.attributes.posts.map(
            (item, index) =>
              index < 4 && (
                <div className="col-12 col-md-3 mt-5">
                  <div className="text-center mt-5">
                    <a
                      href="https://www.shriramchandramission.org//digitalstore/index.php?route=product/product&path=4_42&product_id=423"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={item.post_img.data.attributes.url}
                        className={Styles.audio_image}
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="mt-5 av-desc p-2"
                    dangerouslySetInnerHTML={{
                      __html: item.post_desc
                    }}
                  />
                </div>
              )
          )}
          <hr />
          {data.attributes.posts.map(
            (item, index) =>
              index > 3 && (
                <div className="col-12 col-md-3 mt-5">
                  <div className="text-center mt-5">
                    <a
                      href="https://www.shriramchandramission.org//digitalstore/index.php?route=product/product&path=4_42&product_id=423"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={item.post_img.data.attributes.url}
                        className={Styles.audio_image}
                        alt=""
                      />
                    </a>
                  </div>
                  <div
                    className="mt-5 av-desc  p-2 "
                    dangerouslySetInnerHTML={{
                      __html: item.post_desc
                    }}
                  />
                </div>
              )
          )}

          {/* <div className='col-12 col-md-3 mt-5 mb-5'>
            <a href=''>
              <img src='https://cdn.printfriendly.com/buttons/printfriendly-button.png' alt=''/>
            </a>
          </div> */}
          <div className="av-btm">
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
                {/* <li>
                  <a target="_blank" href="#" rel="noreferrer">
                    <FaTumblr />
                  </a>
                </li> */}
                {/* <li>
                  <a target="_blank" href="#" rel="noreferrer">
                    <FaPinterestP />
                  </a>
                </li> */}

                {/* <li>
                  <a target="_blank" href="#" rel="noreferrer">
                    <FaVk />
                  </a>
                </li> */}
              </ul>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer footerData={footerData}/>   
    </div>
  );
}

export default AudioVideo;

export const getStaticProps = async () => {
  const audioVideo = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/ad-vd?populate=posts.post_img&populate=seo.metaImage`
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
      data: audioVideo.data.data,
      seo: audioVideo.data.data
    }
  };
};
