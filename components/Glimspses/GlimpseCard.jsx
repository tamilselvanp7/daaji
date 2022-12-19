/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosShareAlt, IoIosClose } from "react-icons/io";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsWhatsapp } from "react-icons/bs";
import styles from "../../styles/glimpsenStyle.module.css";

function GlimpseCard({ card }) {
  const [isShare, setIsShare] = useState(false);
  const [animation, setAnimation] = useState(false);

  return (
    <div className="container my-3">
      <div className="row">
        <div className={styles.card}>
          {isShare && (
            <div className={styles.shareIconContainer}>
              <a
                className={`${styles.shareIcon} ${styles.facebook} ${
                  !animation ? styles.faceOut : styles.faceIn
                }`}
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=${process.env.NEXT_PUBLIC_SITE_URL}/glimpses/${card.attributes.slug}`}
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                className={`${styles.shareIcon} ${styles.twitter} ${
                  !animation ? styles.twitOut : styles.twitIn
                }`}
                target="_blank"
                href={`https://twitter.com/intent/tweet?url=${process.env.NEXT_PUBLIC_SITE_URL}/glimpses/${card.attributes.slug}`}
                rel="noreferrer"
              >
                <BsTwitter />
              </a>

              <a
                className={`${styles.shareIcon} ${styles.linkedin} ${
                  !animation ? styles.linkOut : styles.linkIn
                }`}
                target="_blank"
                href={`https://www.linkedin.com/shareArticle?url=${process.env.NEXT_PUBLIC_SITE_URL}/glimpses/${card.attributes.slug}`}
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                className={`${styles.shareIcon} ${styles.whatsapp} ${
                  !animation ? styles.whatsOut : styles.whatsIn
                }`}
                target="_blank"
                href={`https://api.whatsapp.com/send?text=${process.env.NEXT_PUBLIC_SITE_URL}/glimpses/${card.attributes.slug}`}
                rel="noreferrer"
              >
                <BsWhatsapp />
              </a>
            </div>
          )}

          <div
            className={`${styles.cardIcon} ${
              isShare ? styles.closeIcon : styles.openIcon
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

          <div className="row">
            <div className="col-lg-4">
              <Link href={`/glimpses/${card.attributes.slug}`} passHref>
                <div className={styles.cardImg}>
                <Image
                  src={card.attributes.featured_Image.data?.attributes.url}
                  quality={100}
                  className="w-60 rounded"
                  width="290"
                  height="180"
                  alt=""
                />
                </div>
                  {/* <img
                    src={card.attributes.featured_Image.data?.attributes.url}
                    className="w-60 rounded"
                    alt=""
                  /> */}
              </Link>
            </div>
            <div className="col-lg-8">
              <div className={styles.cardContent}>
                <Link href={`/glimpses/${card.attributes.slug}`} passHref>
                  <a>
                    <h1>{card.attributes.title}</h1>
                    <p>{card.attributes.short_Description}</p>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlimpseCard;
