import axios from "axios";
import React, { useState } from "react";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";

export default function Custom404({header, footer}) {
  
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
    metaTitle: "Page not found | Kamlesh D Patel"
  };
  
  return (
    <>
    <Seo seo={seoContent}/>
    <Header headerData={headerData}/>
    <div className="container">
      <div className="page-not-found">
        <div className="title-404">
          <span>404</span>
        </div>
        <h2>Page you are looking is not found </h2>
        <h4>
          The page you are looking for does not exist. It may have been moved,
          or removed altogether. Perhaps you can return back to the site&apos;s
          homepage and see if you can find what you are looking for.{" "}
        </h4>
        <a
          href={`${process.env.NEXT_PUBLIC_SITE_URL}`}
          target="_self"
          className="eltdf-btn eltdf-btn-medium eltdf-btn-outline"
        >
          <span className="eltdf-btn-text">Back to Home Page</span>
        </a>{" "}
      </div>
    </div>
    <Footer footerData={footerData}/>   
    </>
    
  );
}


export const getStaticProps = async () => {

  const header = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/header?populate=mainNav.subMenu&populate=banner_img.daaji_image`
  );

  const footer = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/footer?populate=socialMediaLinks.mediaImg&populate=ourWebsiteLinks&populate=links&populate=nameImg`
  );

  return {
    props: {
      header: header.data.data,
      footer: footer.data.data
    }
  };
};