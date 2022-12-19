/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-await */
/* eslint-disable consistent-return */
/* eslint-disable no-sequences */
/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SinglePost from "../../../../components/Blog/SinglePost";
import SideBox from "../../../../components/SideBox";
import Style from "../../../../styles/Home.module.css";
import Seo from "../../../../components/Seo";
import Header from "../../../../components/Header/NavMenu";
import Footer from "../../../../components/Footer/Footer";

export default function PageNo({ header, footer, data, meta, seo }) {
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
      ? `${seo.attributes.seo[0].metaTitle.split("|")[0]} | Page ${
          router.query.pageno
        } of ${meta.pagination.pageCount} | ${
          seo.attributes.seo[0].metaTitle.split("|")[1]
        }`
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-9 order-1 order-md-1">
            <div className="d-flex flex-wrap post-container">
              {blogData.map((item) => (
                <SinglePost content={item} key={item.id} />
              ))}
            </div>
          </div>
          <div
            className={`col-12 col-lg-9 order-2 order-lg-3 mt-5 mb-5 next-prev-btns ${
              router.query.pageno && "d-flex"
            }`}
            style={{ padding: "0 5rem" }}
          >
            {router.query.pageno && (
              <div>
                <a
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/${
                    router.query.category
                  }${String(
                    Number(router.query.pageno) === 2
                      ? "/"
                      : `/page/${router.query.pageno - 1}`
                  )}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="new-btn-box">
                    <div className="left-arrow">
                      <div />
                    </div>

                    <button className={Style.older_button}>NEWER POSTS</button>
                  </div>
                </a>
              </div>
            )}

            {Number(router.query.pageno) !== meta.pagination?.pageCount && (
              <div className={router.query.pageno ? "" : "old-btn"}>
                <a
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/category/${
                    router.query.category
                  }/page/${
                    router.query.pageno ? Number(router.query.pageno) + 1 : 2
                  }`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="old-btn-box">
                    <button className={Style.older_button}>OLDER POSTS</button>
                    <div className="right-arrow">
                      <div />
                    </div>
                  </div>
                </a>
              </div>
            )}
          </div>
          <SideBox />
        </div>
      </div>
      <Footer footerData={footerData} />
    </div>
  );
}

export async function getStaticPaths() {
  const Articlepagenos = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=articles&populate=*&pagination[pageSize]=10&sort=date:DESC`
  );
  const pagenoParams = Array.from(
    Array(Articlepagenos.data.meta.pagination.pageCount),
    (_, n) => n + 1
  );
  const articlepagepath = pagenoParams.map((data) => ({
    params: { category: "articles", pageno: `${data}` }
  }));
  const Videopagenos = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=video&populate=*&pagination[pageSize]=10&sort=date:DESC`
  );
  const VideopagenoParams = Array.from(
    Array(Videopagenos.data.meta.pagination.pageCount),
    (_, n) => n + 1
  );
  const Videopagepath = VideopagenoParams.map((data) => ({
    params: { category: "video", pageno: `${data}` }
  }));

  const Presspagenos = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=press&populate=*&pagination[pageSize]=10&sort=date:DESC`
  );
  const PresspagenoParams = Array.from(
    Array(Presspagenos.data.meta.pagination.pageCount),
    (_, n) => n + 1
  );
  const Presspagepath = PresspagenoParams.map((data) => ({
    params: { category: "press", pageno: `${data}` }
  }));

  const Podcastspagenos = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=podcasts&populate=*&pagination[pageSize]=10&sort=date:DESC`
  );
  const PodcastspagenoParams = Array.from(
    Array(Podcastspagenos.data.meta.pagination.pageCount),
    (_, n) => n + 1
  );
  const Podcastspagepath = PodcastspagenoParams.map((data) => ({
    params: { category: "podcasts", pageno: `${data}` }
  }));

  const deskofdaajipagenos = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=from-the-desk-of-daaji&populate=*&pagination[pageSize]=10&sort=date:DESC`
  );
  const deskofdaajipagenoParams = Array.from(
    Array(deskofdaajipagenos.data.meta.pagination.pageCount),
    (_, n) => n + 1
  );
  const deskofdaajipagepath = deskofdaajipagenoParams.map((data) => ({
    params: { category: "from-the-desk-of-daaji", pageno: `${data}` }
  }));

  const huffingtonpostpagenos = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=huffington-post&populate=*&pagination[pageSize]=10&sort=date:DESC`
  );
  const huffingtonpostpagenoParams = Array.from(
    Array(huffingtonpostpagenos.data.meta.pagination.pageCount),
    (_, n) => n + 1
  );
  const huffingtonpostpagepath = huffingtonpostpagenoParams.map((data) => ({
    params: { category: "huffington-post", pageno: `${data}` }
  }));

  const speakingtreepagenos = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=speaking-tree&populate=*&pagination[pageSize]=10&sort=date:DESC`
  );
  const speakingtreepagenoParams = Array.from(
    Array(speakingtreepagenos.data.meta.pagination.pageCount),
    (_, n) => n + 1
  );
  const speakingtreepagepath = speakingtreepagenoParams.map((data) => ({
    params: { category: "speaking-tree", pageno: `${data}` }
  }));

  const path = [
    ...Videopagepath,
    ...articlepagepath,
    ...Presspagepath,
    ...Podcastspagepath,
    ...deskofdaajipagepath,
    ...huffingtonpostpagepath,
    ...speakingtreepagepath
  ];

  // console.log(path);

  // const blogs = await axios.get(
  //   `${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-cats`
  // );


  // console.log(blogs.data.data.map( (item) => {
  //   const category = axios.get(
  //     `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=${item.attributes.slug}&populate=*&pagination[pageSize]=10&sort=date:DESC`
  //   );

  //   // category.data.meta.pagination.pageCount - 1 &&
  //   //   console.log(
  //   //     [...Array(category.data.meta.pagination.pageCount - 1).keys()].map(
  //   //       (pageNo) => ({
  //   //         params: { category: item.attributes.slug, pageno: pageNo + 2 }
  //   //       })
  //   //     )
  //   //   );

  //   return category.data.meta.pagination.pageCount - 1 && [...Array(category.data.meta.pagination.pageCount - 1).keys()].map(
  //     (pageNo) => ({
  //       params: { category: item.attributes.slug, pageno: pageNo + 2 }
  //     })
  //   )
  // }))

  return { paths: path, fallback: false };
}

export const getStaticProps = async (context) => {
  // const category = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-cats?filters[slug][$eq]=${context.query.category}`)

  const pageno = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[blog_categories][slug][$eqi]=${context.params.category}&populate=*&pagination[page]=${context.params.pageno}&pagination[pageSize]=10&sort=date:DESC`
  );

  const seo = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-cats?filters[slug][$eqi]=${context.params.category}&populate=seo.metaImage`
  );

  // const Data = ["articles" , "video" , "press" , "podcasts" , "from-the-desk-of-daaji" , "huffington-post" , "speaking-tree"]
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
      data: pageno.data.data,
      meta: pageno.data.meta,
      seo: seo.data.data[0]
    }
  };
};
