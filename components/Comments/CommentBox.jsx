/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../../styles/blog.module.css";
import Form from "./Form";

export default function CommentBox({ comment }) {
  const [replyForm, setReplyForm] = useState(false);
  const [replyComments, setReplyComments] = useState();
  // const [replyCommentForm, setReplyCommentForm] = useState();

  useEffect(() => {
    const get = async () => {
      await axios
        .post("/api/getCall", {
          url: `/comments?filters[Parent_ID][$containsi]=${comment.id}`
        })
        .then((response) => {
          setReplyComments(
            response.data.data.map((item) => ({
              id: item.id,
              name: item.attributes.name,
              comment: item.attributes.Comment,
              date: item.attributes.publishedAt
            }))
          );
        });
    };

    get();
  }, []);

  const dateFormatter = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    const commentedAt = new Date(date);
    const hours = commentedAt.getHours();

    return `${monthNames[commentedAt.getMonth()]} ${String(
      commentedAt.getDay()
    ).padStart(2, 0)} ${commentedAt.getFullYear()} AT ${String(
      hours > 12 ? hours - 12 : hours
    ).padStart(2, 0)}:${String(commentedAt.getMinutes()).padStart(
      2,
      0
    )}:${String(commentedAt.getSeconds()).padStart(2, 0)} ${
      hours >= 12 ? "PM" : "AM"
    }`;
  };

  return (
    <div style={{ margin: "1rem 0" }} key={comment.id}>
      <div>
        <h2>{comment.name}</h2>
        <p>{comment.comment}</p>
      </div>
      <div className={styles.commentTimeBox}>
        <div className="d-flex align-items-center justify-content-between">
          <span>{dateFormatter(comment.date)}</span>
          {replyForm ? (
            <h6
              className={styles.cancelReply}
              onClick={() => setReplyForm(false)}
            >
              Cancel Reply
            </h6>
          ) : (
            <h6
              className={styles.reply}
              onClick={() => {
                setReplyForm(true);
              }}
            >
              Reply
            </h6>
          )}
        </div>
      </div>
      {replyForm && (
        <div className="reply-form">
          <Form commentId={comment.id} />
        </div>
      )}

      {/* Reply Comments */}
      <div style={{ margin: "2rem 0 2rem 3rem" }}>
        {replyComments &&
          replyComments.map((item) => (
            <>
              <div>
                <h2>{item.name}</h2>
                <p>{item.comment}</p>
              </div>
              <div className={styles.commentTimeBox}>
                <div className="d-flex align-items-center justify-content-between">
                  <span>{dateFormatter(item.date)}</span>
                  {/* {replyCommentForm ? (
                    <h6
                      className={styles.cancelReply}
                      onClick={() => {
                        setReplyCommentForm(false);
                      }}
                    >
                      Cancel Reply
                    </h6>
                  ) : (
                    <h6
                      className={styles.reply}
                      onClick={() => {
                        setReplyCommentForm(true);
                        setReplyForm(false);
                      }}
                    >
                      Reply
                    </h6>
                  )} */}
                </div>
              </div>
              {/* {replyCommentForm && <Form id={content.id} />} */}
            </>
          ))}
      </div>
    </div>
  );
}
