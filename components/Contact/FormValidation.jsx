/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ModalPopup from "./ModalPopup";
// import ContactStyle from '../../styles/contact.module.css'

function FormValidation() {
  const [succs, setSuccs] = useState(false);
  const [failed, setFailed] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm("");

  const onSubmit = (data) => {
    reset();

    // Get data from the form.
    const dataVal = {
      data: {
        name: `${data.name}`,
        email: `${data.email}`,
        message: `${data.message}`,
      },
    };
    // Send the data to the server in JSON format.
    //  const JSONdata = JSON.stringify(dataVal)
    // console.log(dataVal);
    // axios.post("http://localhost:1337/api/cforms", {
    //     data: {
    //       name: data.name,
    //       email: data.email,
    //       message: data.message
    //     }
    //   })

    axios
      .post("/api/postCall", {
        url: `/cforms`,
        content: dataVal,
      })
      .then((res) => {
        if (res.data) {
          setSuccs(true);
          setModalShow(true);
          setFailed(false);
        }
      })
      .catch((err) => {
        console.log(`Failed: Due to ${err})`);
        setModalShow(true);
      });

    // API endpoint where we send form data.
    //  const endpoint = 'https://api.publicapis.org/entries'
    // Send the form data to our forms API on Vercel and get a response.
    //  fetch(`${endpoint}`, {
    //    method: "POST",
    //   headers: new Headers({
    //     "Content-Type": "application/json"
    //    }),
    //    body: JSONdata,
    //  }).then(response => response.json())
    //  .then(result => {
    //    if(result.data){
    //      // console.log('Success:', result.data);
    //      setSuccs('Your comment has been successfully submitted for admin approval..')
    //      reset()
    //    } else {
    //      // console.log('Success:', result.error);
    //      setFailed(result.error.name)
    //    }
    //  });
  };

  const onError = (e) => {
    console.log(e);
    setFailed(true);
  };
  return (
    <>
      {/* {failed ? (
        <div className="submition_fail">
          <h2 style={{ fontSize: "18px" }}>
            One or more fields have an error. Please check and try again.
          </h2>
        </div>
      ) : null} */}
      <form id="daaji-comments" onSubmit={handleSubmit(onSubmit, onError)}>
        <div className="d-flex justify-content-center form-validation">
          <div>
            <label htmlFor="name" className="mb-0">
              Your Name<span style={{ color: "#df4759" }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              className="form-validation"
              {...register("name", { required: true })}
              onChange={() => setFailed(false)}
            />
          </div>
          <div className="error_validation">
            {errors.name?.type === "required" && "This Field is required!"}
          </div>
        </div>
        <div className="d-flex justify-content-center form-validation">
          <div>
            <label htmlFor="email" className="mb-0">
              Your Email<span style={{ color: "#df4759" }}>*</span>
            </label>
            <input
              type="text"
              name="email"
              className="form-validation"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "This email address entered is invalid!",
                },
              })}
              onChange={() => setFailed(false)}
            />
          </div>
          <div className="error_validation">
            {errors.email?.type === "required" && "This Field is required!"}
            {errors.email?.message}
          </div>
        </div>

        <div
          className="d-flex justify-content-center form-validation"
          style={{ marginBottom: "1rem" }}
        >
          <label htmlFor="message" className="mb-0">
            Your Message<span style={{ color: "#df4759" }}>*</span>{" "}
          </label>
          <textarea
            id="message"
            name="message"
            rows="7"
            cols="50"
            {...register("message", { required: true })}
            onChange={() => setFailed(false)}
          />
          <div className="error_validation">
            {errors.message?.type === "required" && "This Field is required!"}
          </div>
        </div>

        <div
          className="text-left"
          style={{ display: "flex", marginBottom: "1rem" }}
        >
          <input
            type="checkbox"
            name="terms[]"
            id="checkbox"
            style={{ width: "15px", margin: "0" }}
            {...register("check", { required: true })}
            onChange={() => {
              setFailed(false);
            }}
          />
          <label
            htmlFor="checkbox"
            style={{ float: "left", margin: "0", paddingLeft: "10px" }}
          >
            I agree to the{" "}
            <a
              className="anchor_tag"
              href="https://www.daaji.org/terms-of-use"
              target="_blank"
              rel="noreferrer"
            >
              terms and conditions
            </a>
          </label>
        </div>
        {errors.check && errors.check.type === "required" && (
          <p className="error_validation  mb-3 " style={{ color: "#f00" }}>
            This Field is required
          </p>
        )}

        <div className="mb-5">
          <button type="submit" className="button_s mb-5">
            Send{" "}
          </button>
        </div>
      </form>
      <ModalPopup
        show={modalShow}
        onHide={() => setModalShow(false)}
        succs={succs}
      />
    </>
  );
}

export default FormValidation;
