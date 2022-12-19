/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../styles/glimpsenStyle.module.css";
import DropDown from "./DropDown";

function GlimpsesAside({ onClickMonth, onClickYear, years }) {
  const [recentData, setRecentData] = useState("");
  const [glimpseData, setGlimpseData] = useState("");

  const router = useRouter();

  useEffect(() => {
    const get = async () => {
      // For books
      await axios
        .post("/api/getCall", {
          url: `/glimpses?populate=*&pagination[pageSize]=5&sort=publish_Date:DESC`
        })
        .then((response) => {
          setRecentData(
            response.data.data.map((item) => ({
              id: item.id,
              title: item.attributes.title,
              slug: item.attributes.slug
            }))
          );
        });
      await axios
        .post("/api/getCall", {
          url: `/gls-setting?populate=*`
        })
        .then((response) => {
          setGlimpseData({
            image:
              response.data.data.attributes.Article_LandingLogo.data.attributes
                .url,
            desc: response.data.data.attributes.Landing_description,
            shortdesc: response.data.data.attributes.Landing_shortdesc,
            youtube: response.data.data.attributes.youtube_iframe
          });
        });
    };

    get();
  }, []);

  return (
    <div className={styles.Aside}>
      <div className={styles.font_image}>
        <Image
          src={
            glimpseData
              ? glimpseData.image
              : "https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/glimpses_f5b411cbb0.png?updated_at=2022-11-15T14:02:35.783Z"
          }
          quality={100}
          width="290"
          height="121"
          alt="glimpses_logo"
        />
      </div>

      <p>{glimpseData?.desc}</p>

      <div
        dangerouslySetInnerHTML={{
          __html: glimpseData?.youtube
        }}
      />
      <p>{glimpseData?.shortdesc}</p>
      <hr />

      <h3>Archive</h3>
      <h5>Last 5 entries</h5>
      <ul>
        {recentData &&
          recentData.map((item) => (
            <Link href={`/glimpses/${item.slug}`} passHref>
              <a>
                <li>{item.title}</li>
              </a>
            </Link>
          ))}
      </ul>
      {router.asPath === "/glimpses" && (
        <>
          {/* <h5 onClick={onClickMonth}>Last month</h5>
          <h5 onClick={onClickYear}>last Year</h5> */}
          <DropDown
            onClickMonth={onClickMonth}
            onClickYear={onClickYear}
            years={years}
          />
        </>
      )}
    </div>
  );
}

export default GlimpsesAside;
