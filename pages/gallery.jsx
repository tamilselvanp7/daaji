/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { useRouter } from "next/router";
import Styles from "../styles/gallery.module.css";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";

const gallery = ({header, footer, data, seo }) => {
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
      seo.attributes.seo[0].metaImage.data?.attributes.url,
  };

  return (
    <div>
      <Seo seo={seoContent} />
      <Header headerData={headerData}/>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={Styles.gallery_heading}>
              <h4>
                <span /> {data.title}
                <span />
              </h4>
            </div>

            <div className={Styles.gallery}>
              {data.gallery_images.data.map((item) => (
                <img
                  src={item.attributes.url}
                  className={Styles.img_size}
                  alt={item.attributes.name.slice(0, -4)}
                />
              ))}
            </div>
            {/* <div>
            <button className={Styles.button_img} />
          </div> */}
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
        </div>
      </div>
      <Footer footerData={footerData}/>   
    </div>
  );
};

export default gallery;

export const getStaticProps = async () => {
  const galleryData = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/gallery?populate=*&populate=gallery_images&populate=seo.metaImage`
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
      data: galleryData.data.data.attributes,
      seo: galleryData.data.data,
    },
  };
};
