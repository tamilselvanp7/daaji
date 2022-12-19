/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import axios from "axios";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import { useRouter } from "next/router";
import Styles from "../styles/books.module.css";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";

function Books({header, footer, data, seo }) {
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
        <div className="row mb-5">
          <div className="col-12 mt-5 text-center">
            <h4 className={Styles.books_heading}>{data.attributes.title}</h4>
          </div>
          <div className="col-12 col-md-5 col-lg-5 ml-5 mt-3">
            <img
              src={data.attributes.book_img.data.attributes.url}
              className={Styles.books_image}
              alt=""
            />
          </div>
          <div
            className="col-12 col-md-5 col-lg-6 mt-5"
            style={{ transform: "scale(.95)", marginLeft: "2rem" }}
          >
            <div
              className="book-desc"
              dangerouslySetInnerHTML={{
                __html: data.attributes.description
              }}
            />

            <div className="mt-3">
              <div
                className="links"
                dangerouslySetInnerHTML={{
                  __html: data.attributes.amazon_link
                }}
              />

              <div
                className="links"
                dangerouslySetInnerHTML={{
                  __html: data.attributes.flipkart_link
                }}
              />

              <div
                className="links"
                dangerouslySetInnerHTML={{
                  __html: data.attributes.hfnlife_link
                }}
              />
            </div>
          </div>
          <div className="col-12 col-md-3 mt-5 mb-5">
            {/* <Link href="#">
              <img
                src="https://cdn.printfriendly.com/buttons/printfriendly-button.png"
                alt=""
              />
            </Link> */}
          </div>
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

export default Books;

export const getStaticProps = async () => {
  const books = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/book?populate=*&populate=book_img&populate=seo.metaImage`
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
      data: books.data.data,
      seo: books.data.data
    }
  };
};
