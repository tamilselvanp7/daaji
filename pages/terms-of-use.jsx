import axios from "axios";
import React, { useState } from "react";
import Seo from "../components/Seo";
import Header from "../components/Header/NavMenu";
import Footer from "../components/Footer/Footer";

function TermsOfUse({ header, footer, data, seo }) {
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
      <Header headerData={headerData} />
      <div className="container terms-of-use">
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-10">
            <h3>{data.attributes.title.toUpperCase()}</h3>
            {data.attributes.terms.map((item) => (
              <div key={item.id}>
                <h3>
                  {item.id}. {item.policy_title}
                </h3>
                <div dangerouslySetInnerHTML={{ __html: item.policy_desc }} />
              </div>
            ))}
          </div>
          <div className="col-md-1" />
        </div>
      </div>
      <Footer footerData={footerData} />
    </div>
  );
}

export default TermsOfUse;

export async function getStaticProps() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/term?populate=*&populate=terms&populate=seo.metaImage`
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
      data: res.data.data,
      seo: res.data.data
    }
  };
}
