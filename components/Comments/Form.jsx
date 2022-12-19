/* eslint-disable no-nested-ternary */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";

// eslint-disable-next-line no-unused-vars
export default function Form({ commentId, blogId, glimpsesId }) {
  const [success, setSuccess] = useState(null);
  const [failed, setFailed] = useState(null);

  const [cookies, setCookie] = useCookies(["formData"]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Handles the submit event on form submit.
  const onSubmit = (data) => {
    // To Store the Form Datas to cookies
    if (data.check) {
      setCookie("formData", data, { path: "/" });
    }

    const blogCommentDataVal = {
      data: {
        name: `${data.name}`,
        Email: `${data.email}`,
        Comment: `${data.comments}`,
        website: `${data.website}`,
        commentedAt: `${new Date().toISOString()}`,
        blogs: `${blogId}`,
        publishedAt: null
      }
    };

    const glimpsesCommentDataVal = {
      data: {
        name: `${data.name}`,
        Email: `${data.email}`,
        Comment: `${data.comments}`,
        website: `${data.website}`,
        commentedAt: `${new Date().toISOString()}`,
        glimpses: `${glimpsesId}`,
        publishedAt: null
      }
    }

    const replyDataVal = {
      data: {
        name: `${data.name}`,
        Email: `${data.email}`,
        Comment: `${data.comments}`,
        website: `${data.website}`,
        commentedAt: `${new Date().toISOString()}`,
        Parent_ID: `${commentId}`,
        publishedAt: null
      }
    };

    axios
      .post("/api/postCall", {
        url: `/comments`,
        content: blogId ? blogCommentDataVal : glimpsesId ? glimpsesCommentDataVal : replyDataVal
      })
      .then(() => {
        setSuccess(
          "Your comment has been successfully submitted for admin approval.."
        );
        setFailed("");
        reset();
      })
      .catch((err) => {
        setFailed(err.message);
      });

    // // Send the data to the server in JSON format.
    // const JSONdata = JSON.stringify(dataVal);
    // // API endpoint where we send form data.
    // const endpoint = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/comments`;
    // // Send the form data to our forms API on Vercel and get a response.
    // fetch(`${endpoint}`, {
    //   method: "POST",
    //   headers: new Headers({
    //     "Content-Type": "application/json"
    //   }),
    //   body: JSONdata
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     if (result.data) {
    //       // console.log('Success:', result.data);
    //       setSuccess(
    //         "Your comment has been successfully submitted for admin approval.."
    //       );
    //       reset();
    //     } else {
    //       // console.log('Success:', result.error);
    //       setFailed(result.error.name);
    //     }
    //   });
  };

  return (
    <>
      <form className="daaji-comments" onSubmit={handleSubmit(onSubmit)}>
        <h1>{commentId ? "LEAVE A REPLY" : "LEAVE A COMMENT"}</h1>
        <textarea
          className="Comments"
          name="comments"
          rows="13"
          cols="50"
          placeholder="Write your comment here..."
          {...register("comments", { required: true })}
        />
        <div className="error_validation">
          {errors.comments?.type === "required" && "Field is required!"}
        </div>
        <div className="form-row d-flex justify-content-between">
          <div className="input-div">
            <input
              className="comment-name"
              type="text"
              name="name"
              defaultValue={cookies.formData ? cookies.formData.name : null}
              placeholder="Your full name"
              {...register("name", { required: true })}
            />
            <div className="error_validation">
              {errors.name?.type === "required" && "Field is required!"}
            </div>
          </div>

          <div className="input-div">
            <input
              className="comment-email"
              type="email"
              name="email"
              defaultValue={cookies.formData ? cookies.formData.email : null}
              placeholder="E-mail address"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email!"
                }
              })}
            />
            <div className="error_validation">
              {errors.email?.type === "required" && "Field is required!"}
              {errors.email?.message}
            </div>
          </div>

          <div className="input-div">
            <input
              className="comment-website"
              type="text"
              name="website"
              defaultValue={cookies.formData ? cookies.formData.website : null}
              placeholder="Website"
              {...register("website", { required: false })}
            />
          </div>
        </div>

        <div className="agree-check">
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox"
            {...register("check", { required: false })}
          />
          <label htmlFor="checkbox">
            Save my name, email, and website in this browser for the next time I
            comment.{" "}
          </label>
        </div>

        <div className="submit-button">
        <input
            type="hidden"
            name="parent_id"
            id="parent_id"
            value=""
            {...register("parent_id", { required: false })}
          />
          <button type="submit" className="button_s">
            SUBMIT{" "}
          </button>
        </div>
      </form>
      {failed ? <div className="error_message">{failed}</div> : null}
      {success ? <div className="succs_message">{success}</div> : null}
    </>
  );
}
