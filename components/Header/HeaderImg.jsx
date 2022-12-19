import React from "react";
import NavbarStyle from "../../styles/Navbar.module.css";

export default function HeaderImg({ image }) {
  return (
    <div >
    <div className=" d-flex flex-row justify-content-center">
      <div className={NavbarStyle.image_container}>
        <a href={`${process.env.NEXT_PUBLIC_SITE_URL}/`} style={{textAlign: 'center'}}>
          {image ? (
            <img className={NavbarStyle.image} src={image} alt="logo" />
          ) : (
            <img
              className={NavbarStyle.image}
              src="https://hfn-strapi-bucket.s3.ap-south-1.amazonaws.com/daaji_logo_1_b56701a841.png"
              alt="logo"
            />
          )}
        </a>
      </div>
    </div>
    </div>
  );
}
