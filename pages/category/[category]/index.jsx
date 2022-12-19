
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import SinglePost from "../../../components/Blog/SinglePost";
import SideBox from "../../../components/SideBox";
import Style from "../../../styles/Home.module.css";
import Seo from "../../../components/Seo";
import Header from "../../../components/Header/NavMenu";
import Footer from "../../../components/Footer/Footer";

function Category({ header, footer, data, meta, seo }) {
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

  const [blogData] = useState(
    data.map((item) => ({
      id: item.id,
      title: item.attributes.title,
      img: item.attributes.image.data?.attributes.url,
      yFrameLink: item.attributes.youtubeFrameLink,
      date: item.attributes.date,
      desc: item.attributes.description ? item.attributes.description : " ",
      slug: item.attributes.slug,
      categories: item.attributes.blog_categories.data.map((category) => ({
        title: category.attributes.title,
        slug: category.attributes.slug
      }))
    }))
  );

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
          <div className="col-12 col-md-12 col-lg-9 order-1 order-md-1">
            <div className="d-flex flex-wrap post-container">
              {blogData.map((item) => (
                <SinglePost content={item} key={item.id} />
              ))}
            </div>
          </div>
          <div className="col-12 col-md-9 order-2 order-md-3 mt-5 mb-5 next-prev-btns">
            {meta.pagination?.pageCount !== 1 && (
              <div className={router.query.pageno ? "" : "old-btn"}>
                <Link
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/${router.query.category}/page/2`}
                  passHref
                >
                  <a style={{ textDecoration: "none" }}>
                    <div className="old-btn-box">
                      <button className={Style.older_button}>
                        OLDER POSTS
                      </button>
                      <div className="right-arrow">
                        <div />
                      </div>
                    </div>

                    {/* <span>
                      <i
                        className={`fa fa-arrow-right ${Style.arrow}`}
                        aria-hidden="true"
                      />
                    </span> */}
                  </a>
                </Link>
              </div>
            )}
          </div>
          <SideBox />
        </div>
      </div>
      <Footer footerData={footerData}/>
    </div>
  );
}

export default Category;

export async function getStaticPaths() {
  const blogs = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-cats`
  );

  return {
    paths: [
      ...blogs.data.data.map((blog) => ({
        params: {
          category: `${blog.attributes.slug}`
        }
      }))
    ],
    fallback: false
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=${params.category}&populate=*&pagination[page]=1&pagination[pageSize]=10&sort=date:DESC`
  );

  const categorySeo = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-cats?filters[slug][$eqi]=${params.category}&populate=seo.metaImage`
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
      data: category.data.data,
      meta: category.data.meta,
      seo: categorySeo.data.data[0]
    }
  };
}
