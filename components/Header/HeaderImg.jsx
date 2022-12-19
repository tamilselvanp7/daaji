import Image from "next/image";
import React from "react";
import NavbarStyle from "../../styles/Navbar.module.css";

export default function HeaderImg({ image }) {
 
  return (
    <div>
      <div className=" d-flex flex-row justify-content-center">
        <div className={NavbarStyle.image_container}>
          <a
            href={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
            style={{ textAlign: "center" }}
          >
            {image && (
              <Image
                src={image}
                width="399"
                height="250"
                alt="logo"
                quality={100}
                priority
                className={NavbarStyle.image}
              />
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
