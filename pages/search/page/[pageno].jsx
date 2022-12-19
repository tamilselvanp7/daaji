/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Seo from "../../../components/Seo";
import Styles from "../../../styles/Home.module.css";
import Header from "../../../components/Header/NavMenu";
import Footer from "../../../components/Footer/Footer";

export default function Search({header, footer, blogs, glimpses, category }) {
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
  const [data] = useState(
    [
      ...blogs.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        slug: `/${item.attributes.slug}`,
        date: item.attributes.date
      })),
      ...glimpses.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        slug: `/glimpses/${item.attributes.slug}`,
        date: item.attributes.publish_Date
      })),
      ...category.data.map((item) => ({
        id: item.id,
        title: item.attributes.title,
        slug: `/category/${item.attributes.slug}`,
        date: item.attributes.createdAt
      }))
    ].sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  );

  const [totalPages] = useState(
    Math.max(
      blogs.meta.pagination.pageCount,
      glimpses.meta.pagination.pageCount,
      category.meta.pagination.pageCount
    )
  );

  const seoContent = {
    metaTitle: `You searched for ${router.query.s} | Page ${router.query.pageno} of ${totalPages} | Kamlesh D Patel`
  };

  return (
    <>
      <Seo seo={seoContent} />
      <Header headerData={headerData}/>
      <div className="container">
        <div className="search-page">
          {data.map((item) => (
            <div className="result-inner">
              <h2>
                <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}${item.slug}`}>
                  <a>{item.title}</a>
                </Link>
              </h2>
              <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}${item.slug}`}>
                <a target="_self" className="continue">
                  Continue reading
                </a>
              </Link>
            </div>
          ))}
          <div
            className={`mt-5 mb-5 next-prev-btns ${
              router.query.pageno && "d-flex"
            }`}
            style={{ padding: "0 5rem" }}
          >
            {router.query.pageno && (
              <div>
                <a
                  href={
                    process.env.NEXT_PUBLIC_SITE_URL +
                    String(
                      Number(router.query.pageno) === 2
                        ? `/search?s=${router.query.s}`
                        : `/search/page/${router.query.pageno - 1}?s=${
                            router.query.s
                          }`
                    )
                  }
                  style={{ textDecoration: "none" }}
                >
                  <div className="new-btn-box">
                    <div className="left-arrow">
                      <div />
                    </div>
                    <button className={Styles.older_button}>NEWER POSTS</button>
                  </div>
                </a>
              </div>
            )}

            {Number(router.query.pageno) !== totalPages ? (
              <div className={router.query.pageno ? "" : "old-btn"}>
                <a
                  href={`${process.env.NEXT_PUBLIC_SITE_URL}/search/page/${
                    router.query.pageno ? Number(router.query.pageno) + 1 : 2
                  }?s=${router.query.s}`}
                  style={{ paddingRight: "1.5rem", textDecoration: "none" }}
                >
                  <div className="old-btn-box">
                    <button className={Styles.older_button}>OLDER POSTS</button>
                    <div className="right-arrow">
                      <div />
                    </div>
                  </div>

                  {/* <span>
                    <i
                      className={`fa fa-arrow-right ${Styles.arrow}`}
                      aria-hidden="true"
                    />
                  </span> */}
                </a>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer footerData={footerData}/>  
    </>
  );
}

export const getServerSideProps = async (context) => {
  const blogs = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?filters[title][$containsi]=${context.query.s}&populate=date&pagination[page]=${context.query.pageno}&pagination[pageSize]=5&sort=date:DESC`
  );

  const glimpses = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses?filters[title][$containsi]=${context.query.s}&populate=publish_Date&pagination[page]=${context.query.pageno}&pagination[pageSize]=5&sort=publish_Date:DESC`
  );

  const category = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blog-cats?filters[title][$containsi]=${context.query.s}&pagination[page]=${context.query.pageno}&pagination[pageSize]=5&sort=createdAt:DESC`
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
      blogs: blogs.data,
      glimpses: glimpses.data,
      category: category.data
    }
  };
};
