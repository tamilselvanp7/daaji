/* eslint-disable no-unused-expressions */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/order */
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/glimpsenStyle.module.css";
import iconstyles from "../../styles/glimpses-inner-page.module.css";
import AsideCom from "../../components/Glimspses/GlimpsesAside";
import axios from "axios";
import Image from "next/image";
import { IoIosShareAlt, IoIosClose } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import DayActivities from "../../components/Glimspses/Dayactivity";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import Header from "../../components/Header/NavMenu";
import Footer from "../../components/Footer/Footer";
import Form from "../../components/Comments/Form";
import CommentBox from "../../components/Comments/CommentBox";

function Blog({ header, footer, data, seo }) {
  const router = useRouter();

  const [isShare, setIsShare] = useState(false);
  const [animation, setAnimation] = useState(false);

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

  const [comments] = useState(
    data.attributes.comments.data.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      comment: item.attributes.Comment,
      date: item.attributes.commentedAt
    }))
  );

  const seoContent = {
    metaTitle: seo.attributes.seo
      ? seo.attributes.seo.metaTitle
      : seo.attributes.title,
    metaDescription: seo.attributes.seo
      ? seo.attributes.seo.metaDescription
      : seo.attributes.title,
    shareImage:
      seo.attributes.seo && seo.attributes.seo.metaImage.data?.attributes.url
  };

  return (
    <>
      <Seo seo={seoContent} />
      <Header headerData={headerData} />
      <div className={styles.glimpsesBody}>
        <div className="row px-3 mt-5">
          <div className=" col-md-4 col-lg-3">
            <div className={styles.innerAside}>
              <AsideCom />
            </div>
          </div>

          <div className="col-md-8 col-lg-9 px-4">
            <div className="container">
              <div className="row">
                <div className="mt-5">
                  <Link href="/glimpses">
                  <button className={styles.allpostBtn}>
                      &larr; All posts
                    </button>
                  </Link>
                </div>
                <div className={styles.innercard}>
                  {isShare && (
                    <div className={iconstyles.shareIconContainer}>
                      <a
                        className={`${styles.shareIcon} ${
                          iconstyles.facebook
                        } ${iconstyles.shareIconTop}  ${
                          !animation ? iconstyles.faceOut : iconstyles.faceIn
                        }`}
                        target="_blank"
                        href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/glimpses${router.asPath}`}
                        rel="noreferrer"
                      >
                        <FaFacebookF />
                      </a>

                      <a
                        className={`${styles.shareIcon} ${iconstyles.twitter} ${
                          iconstyles.shareIconTop
                        }  ${
                          !animation ? iconstyles.twitOut : iconstyles.twitIn
                        }`}
                        target="_blank"
                        href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/glimpses${router.asPath}`}
                        rel="noreferrer"
                      >
                        <BsTwitter />
                      </a>

                      <a
                        className={`${styles.shareIcon} ${
                          iconstyles.linkedin
                        } ${iconstyles.shareIconTop}  ${
                          !animation ? iconstyles.linkOut : iconstyles.linkIn
                        }`}
                        target="_blank"
                        href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SITE_URL}/glimpses${router.asPath}`}
                        rel="noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>

                      <a
                        className={`${styles.shareIcon} ${
                          iconstyles.whatsapp
                        } ${iconstyles.shareIconTop}  ${
                          !animation ? iconstyles.whatsOut : iconstyles.whatsIn
                        }`}
                        target="_blank"
                        href={`https://api.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_SITE_URL}/glimpses${router.asPath}`}
                        rel="noreferrer"
                      >
                        <BsWhatsapp />
                      </a>
                    </div>
                  )}

                  <div
                    className={`${iconstyles.cardIcon} ${
                      isShare ? iconstyles.closeIcon : iconstyles.openIcon
                    }`}
                    onClick={() => {
                      setAnimation(!animation);
                      setTimeout(() => {
                        setIsShare(!isShare);
                      }, 50);
                    }}
                  >
                    {/* <FiHeart className="mx-3" /> */}
                    {!isShare ? <IoIosShareAlt /> : <IoIosClose />}
                  </div>
                  <div className="d-lg-none">
                    <div className={styles.innerCardImg}>
                      <Image
                        src={
                          data.attributes.featured_Image.data?.attributes.url
                        }
                        quality={100}
                        width={898}
                        height={599}
                        alt="#"
                      />
                    </div>
                  </div>
                  <h1>{data.attributes.title}</h1>
                  <p>{data.attributes.short_Description}</p>

                  <div className="d-none d-lg-block">
                    <div className={styles.innerCardImg}>
                      <Image
                        src={
                          data.attributes?.featured_Image.data?.attributes.url
                        }
                        quality={100}
                        width={898}
                        height={600}
                        alt=""
                      />
                    </div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.attributes.description
                    }}
                  />
                  <DayActivities activities={data.attributes.dayActivity} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <h2 className="glimpses-comments-title">Comments</h2>
          <div className="d-flex justify-content-center">
            <div style={{ width: "75%" }}>
              <div className="commentBox glimpses-comments">
                {comments.map((item) => (
                  <CommentBox comment={item} />
                ))}
              </div>
              <Form glimpsesId={data.id}/>
            </div>
          </div>
        </div>
      </div>
      <Footer footerData={footerData} />
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const { params } = ctx;
  const glimpses = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses?filters[Slug]=${params.slug}&populate[dayActivity][populate]=*&populate[featured_Image][populate]=*&populate[categories][populate]=*&populate[comments][populate]=*&populate[Seo][populate]=*`
  );
  const seo = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses?filters[Slug]=${params.slug}&populate=seo.metaImage`
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
      data: glimpses.data.data[0],
      seo: seo.data.data[0]
    }
  };
};

export const getStaticPaths = async () => {
  const glimpses = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses?populate=*&pagination[pageSize]=100&sort=publish_Date:DESC`
  );
  // console.log(glimpses)

  const slugs = glimpses.data.data.map((ele) => ele.attributes.slug);

  return {
    paths: slugs.map((item) => ({ params: { slug: `${item}` } })),
    fallback: false
  };
};

export default Blog;
