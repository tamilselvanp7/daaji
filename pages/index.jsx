/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import axios from "axios";
import { useState } from "react";
import HomePage from "../components/Home/HomePage";
import HomeSlider from "../components/Home/HomeSlider";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";

export default function Home({header, footer, data, seo }) {
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

  // sliderBlogs.map(item => {
  //   console.log(item.desc.replace(/<[^>]+>/g, '').replace(/(&nbsp;|<br>|<br \/>)/gm, ''))
  // })

  const seoContent = {
    metaTitle: seo.attributes.seo[0]
      ? seo.attributes.seo[0].metaTitle
      : seo.attributes.title,
    metaDescription: seo.attributes.seo[0]
      ? seo.attributes.seo[0].metaDescription
      : seo.attributes.title,
    shareImage:
      seo.attributes.seo[0] &&
      seo.attributes.seo[0].metaImage?.data.attributes.url
  };

  return (
    <div>
      <Seo seo={seoContent} />
      <Header headerData={headerData}/>
      <HomeSlider />
      <HomePage data={blogData} />
      <Footer footerData={footerData}/>   
    </div>
  );
}

export const getStaticProps = async () => {
  const allblogs = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*&pagination[page]=1&pagination[pageSize]=10&sort=date:DESC`
  );

  const seo = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/home?populate=seo`
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
      data: allblogs.data.data,
      seo: seo.data.data
    }
  };
};
