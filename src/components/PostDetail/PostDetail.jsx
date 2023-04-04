import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
  const postDetail = useLoaderData();
  const { id, title, userId, body } = postDetail;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="details">
      <h3>Details about your Post of: {id} </h3>
      <h5> Title: {title}</h5>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;
