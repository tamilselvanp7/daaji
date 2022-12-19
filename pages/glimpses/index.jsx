/* eslint-disable no-unused-expressions */
import axios from "axios";
import React, { useState } from "react";
import Card from "../../components/Glimspses/GlimpseCard";
import styles from "../../styles/glimpsenStyle.module.css";
import Pagination from "../../components/Glimspses/Pagination";
import AsideCom from "../../components/Glimspses/GlimpsesAside";
import Seo from "../../components/Seo";
import Header from "../../components/Header/NavMenu";
import Footer from "../../components/Footer/Footer";

function Glimpses({ header, footer, data, years, meta, seo }) {
  const [totalLength, setTotalLength] = useState(meta);
  const [glimpsesData, setGlimpsesData] = useState(data);
  const [glimpsesDataLength, setGlimpsesDatalength] = useState(data.length);
  const [filterType, setFilterType] = useState("default");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // const indexOfLastRecord = currentPage * recordsPerPage;
  // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = glimpsesData;
  const nPages = Math.ceil(totalLength / recordsPerPage);

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

  const onClickMonth = async (dates) => {
    window.innerWidth >= 768 ? window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) : null
    setFilterType("month");
    setGlimpsesData([]);
    setGlimpsesDatalength(1);
    setMonth(dates);

    await axios
      .post("/api/getCall", {
        url: `/glimpses?populate=*&filters[$and][0][publish_Date][$gte]=${dates.startDate}&filters[$and][1][publish_Date][$lt]=${dates.endDate}&pagination[page]=1&pagination[pageSize]=5&sort=publish_Date:DESC`
      })
      .then((response) => {
        setTotalLength(response.data.meta.pagination.total);
        setGlimpsesData(response.data.data);
        setCurrentPage(1)
        setGlimpsesDatalength(response.data.data.length);
      });
  };

  const onClickYear = async (dates) => {
    window.innerWidth >= 768 ? window.scrollTo({ top: 0, left: 0, behavior: "smooth" }) : null
    setFilterType("year");
    setGlimpsesData([]);
    setGlimpsesDatalength(1);
    setYear(dates);

    await axios
      .post("/api/getCall", {
        url: `/glimpses?populate=*&filters[$and][0][publish_Date][$gte]=${dates.startDate}&filters[$and][1][publish_Date][$lt]=${dates.endDate}&pagination[page]=1&pagination[pageSize]=${recordsPerPage}&sort=publish_Date:DESC`
      })
      .then((response) => {
        setTotalLength(response.data.meta.pagination.total);
        setGlimpsesData(response.data.data);
        setCurrentPage(1)
        setGlimpsesDatalength(response.data.data.length);
      });
  };
  const onPageClick = async (page) => {
    setGlimpsesData([]);
    setGlimpsesDatalength(1);

    if (filterType === "month") {
      await axios
        .post("/api/getCall", {
          url: `/glimpses?populate=*&filters[$and][0][publish_Date][$gte]=${month.startDate}&filters[$and][1][publish_Date][$lt]=${month.endDate}&pagination[page]=${page}&pagination[pageSize]=${recordsPerPage}&sort=publish_Date:DESC`
        })
        .then((response) => {
          setGlimpsesData(response.data.data);
          setGlimpsesDatalength(response.data.data.length);
        });
    } else if (filterType === "year") {
      await axios
        .post("/api/getCall", {
          url: `/glimpses?populate=*&filters[$and][0][publish_Date][$gte]=${year.startDate}&filters[$and][1][publish_Date][$lt]=${year.endDate}&pagination[page]=${page}&pagination[pageSize]=${recordsPerPage}&sort=publish_Date:DESC`
        })
        .then((response) => {
          setGlimpsesData(response.data.data);
          setGlimpsesDatalength(response.data.data.length);
        });
    } else {
      await axios
        .post("/api/getCall", {
          url: `/glimpses?populate=*&pagination[page]=${page}&pagination[pageSize]=${recordsPerPage}&sort=publish_Date:DESC`
        })
        .then((response) => {
          setGlimpsesData(response.data.data);
          setGlimpsesDatalength(response.data.data.length);
        });
    }
  };

  const seoContent = {
    metaTitle: seo.attributes.seo[0] ? seo.attributes.seo[0].metaTitle : seo.attributes.title,
    metaDescription: seo.attributes.seo[0] ? seo.attributes.seo[0].metaDescription : seo.attributes.title,
    shareImage: seo.attributes.seo[0] && seo.attributes.seo[0].metaImage.data?.attributes.url
  };

  return (
    <>
      <Seo seo={seoContent} />
      <Header headerData={headerData}/>
      <div className={styles.glimpsesBody}>
        <div className="mt-5">
          <div className="row px-3">
            <div className="col-md-4 col-lg-3">
              <AsideCom onClickMonth={onClickMonth} onClickYear={onClickYear} years={years}/>
            </div>
            <div className="col-md-8 col-lg-9">
              {glimpsesData.length ? (
                <div className={styles.bgContainer}>
                  {currentRecords.map((card) => (
                    <Card card={card} key={card.id} />
                  ))}
                </div>
              ) : (
                <div className="no-post">
                  {!glimpsesDataLength ? (
                    "No Post Found"
                  ) : (
                    <div className="loader" />
                  )}
                </div>
              )}
              {glimpsesData.length ? (
                <Pagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  onPageClick={onPageClick}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div />
      </div>
      <Footer footerData={footerData}/>
    </>
  );
}

export const getStaticProps = async () => {
  const glimpses = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses?populate=*&pagination[pageSize]=5&sort=publish_Date:DESC`
  );

  const years = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/glimpses?pagination[pageSize]=1000`
  );

  const seo = await axios.get(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/gls-setting?populate=seo.metaImage`
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
      data: glimpses.data.data,
      years: years.data.data.map(item => item.attributes.publish_Date.slice(0,7)),
      meta: glimpses.data.meta.pagination.total,
      seo: seo.data.data
    }
  };
};
export default Glimpses;
