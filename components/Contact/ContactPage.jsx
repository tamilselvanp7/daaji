/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";
import ContactStyle from "../../styles/contact.module.css";
import FormValidation from "./FormValidation";

function ContactPage({ data }) {
  return (
    <div>
      <div className="container">
        <div>
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <div className={ContactStyle.title_holder}>
                <span>
                  <u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
                  &nbsp;&nbsp;
                  {data.attributes.contact_title}
                  &nbsp;&nbsp;
                  <u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
                </span>
                <h1>{data.attributes.title}</h1>
                <div
                  className={ContactStyle.title_wrapper}
                  dangerouslySetInnerHTML={{
                    __html: data.attributes.description,
                  }}
                />
                <div>
                  <FormValidation />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-lg-block">
              <div className={ContactStyle.image_container}>
                <img
                  src={data.attributes.image.data.attributes.url}
                  alt={data.attributes.image.data.attributes.name}
                  className="w-100 ml-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
