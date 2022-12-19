/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";
import { useRouter } from "next/router";
import Styles from "../styles/blog.module.css";
import PreviousNext from "../components/RelatedPosts/PreviousNext";
import Widgets from "../components/widgets";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";
import CommentBox from "../components/Comments/CommentBox";
import Form from "../components/Comments/Form";

function Blogs({
  header,
  footer,
  currentBlog,
  nextBlog,
  prevBlog,
  relatedBlogs,
  seo
}) {
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

  const currentBlogContent = {
    id: currentBlog.id,
    title: currentBlog.attributes?.title,
    img: currentBlog.attributes.image?.data?.attributes,
    date: currentBlog.attributes.date,
    desc: currentBlog.attributes.description
      ? currentBlog.attributes.description
      : " ",
    slug: currentBlog.attributes.slug,
    yframeLink: currentBlog.attributes.youtubeFrameLink,
    categories: currentBlog.attributes.blog_categories.data.map((item) => ({
      title: item.attributes.title,
      slug: item.attributes.slug
    })),
    comments: currentBlog.attributes.comments.data?.map((item) => ({
      id: item.id,
      name: item.attributes.name,
      comment: item.attributes.Comment,
      date: item.attributes.commentedAt
    }))
  };

  const nextBlogContent = {
    title: nextBlog.attributes?.title,
    slug: nextBlog.attributes?.slug,
    img: nextBlog.attributes?.image.data?.attributes.url
  };

  const prevBlogContent = {
    title: prevBlog.attributes?.title,
    slug: prevBlog.attributes?.slug,
    img: prevBlog.attributes?.image.data?.attributes.url
  };

  const relatedBlogContent = relatedBlogs.filter(
    (item) =>
      item.id !== nextBlog.id &&
      item.id !== prevBlog.id &&
      item.id !== currentBlog.id
  );

  const dateCalculator = (date) => {
    const day = new Date(date).toLocaleString("en-us", {
      month: "short",
      day: "numeric"
    });
    return String(
      `${day.slice(0, 3)} ${day.slice(4, 6).padStart(2, 0)}. 20${date.slice(
        2,
        4
      )}`
    );
  };

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
      <Widgets />
      <div className="container">
        <div className="row">
          <div className="col-12  mt-3 inner-page">
            <div className={Styles.heading}>
              <div className="category-title-box">
                <div />
                <p>
                  {currentBlogContent.categories.map((category, index) => (
                    <Link
                      href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/${category.slug}`}
                      passHref
                    >
                      <a>
                        {category.title}
                        {index + 1 === currentBlogContent.categories.length
                          ? ""
                          : ","}
                      </a>
                    </Link>
                  ))}
                </p>
                <div />
              </div>
              <h1>{currentBlogContent.title}</h1>
              <p style={{ letterSpacing: "2px" }}>
                {dateCalculator(currentBlogContent.date).toUpperCase()}
              </p>

              {currentBlogContent.yframeLink ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: currentBlogContent.yframeLink
                  }}
                  style={{ textAlign: "center" }}
                />
              ) : (
                <Link
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/${currentBlogContent.slug}`}
                >
                  <a>
                    <img src={currentBlogContent.img?.url} alt="intentions" />
                  </a>
                </Link>
              )}
            </div>

            <div
              className={Styles.content}
              dangerouslySetInnerHTML={{
                __html: currentBlogContent.desc
              }}
            />
            {/* <div>
                            <button className={Styles.button_img} />
                        </div> */}
            <hr className="bg-black" />
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
            <hr className="bg-black mt-0" />
            <PreviousNext
              next={nextBlogContent}
              prev={prevBlogContent}
              related={relatedBlogContent}
            />
            <hr className="bg-black" />
            <div className="row d-flex justify-content-end comment-container">
              <div className="comment-inner-container">
                <div className="commentBox">
                  {currentBlogContent.comments.map((item) => (
                    <CommentBox comment={item}/>
                  ))}
                </div>
              </div>
              <Form blogId={currentBlog.id}/>
            </div>
          </div>
        </div>
      </div>
      <Footer footerData={footerData} />
    </div>
  );
}

export default Blogs;

export async function getStaticPaths() {
  const blogs = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*&pagination[page]=1&pagination[pageSize]=1000&sort=date:DESC`
  );

  return {
    paths: [
      ...blogs.data.data.map((blog) => ({
        params: {
          blogs: `${blog.attributes.slug}`
        }
      }))
    ],
    fallback: false
  };
}

export const getStaticProps = async (context) => {
  const currentBlog = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[slug][$containsi]=${context.params.blogs}&populate=*&populate=seo.metaImage&populate=blog_categories&populate=image&populate=comments`
  );

  const nextBlog = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[$and][0][date][$gt]=${currentBlog.data.data[0].attributes.date}&populate=*&pagination[page]=1&pagination[pageSize]=1&sort=date:ASC`
  );

  const prevBlog = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[$and][0][date][$lt]=${currentBlog.data.data[0].attributes.date}&populate=*&pagination[page]=1&pagination[pageSize]=1&sort=date:DESC`
  );

  const relatedBlogs = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=${currentBlog.data.data[0].attributes.blog_categories.data[0].attributes.slug}&populate=*&pagination[page]=1&pagination[pageSize]=7`
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
      currentBlog: currentBlog.data.data[0],
      nextBlog: nextBlog.data.data.length && nextBlog.data.data[0],
      prevBlog: prevBlog.data.data.length && prevBlog.data.data[0],
      relatedBlogs: relatedBlogs.data.data,
      seo: currentBlog.data.data[0]
    }
  };
};

// export const getServerSideProps = async (context) => {
//   const currentBlog = await axios.get(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[slug][$containsi]=${context.query.blogs}&populate=*`
//   );

//   const nextBlog = await axios.get(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[$and][0][date][$gt]=${currentBlog.data.data[0].attributes.date}&populate=*&pagination[page]=1&pagination[pageSize]=1&sort=date:ASC`
//   );

//   const prevBlog = await axios.get(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[$and][0][date][$lt]=${currentBlog.data.data[0].attributes.date}&populate=*&pagination[page]=1&pagination[pageSize]=1&sort=date:DESC`
//   );

//   const relatedBlogs = await axios.get(
//     `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=${currentBlog.data.data[0].attributes.blog_categories.data[0].attributes.slug}&populate=*&pagination[page]=1&pagination[pageSize]=7`
//   );

//   return {
//     props: {
//       currentBlog: currentBlog.data.data[0],
//       nextBlog: nextBlog.data.data.length && nextBlog.data.data[0],
//       prevBlog: prevBlog.data.data.length && prevBlog.data.data[0],
//       relatedBlogs: relatedBlogs.data.data
//     }
//   };
// };
