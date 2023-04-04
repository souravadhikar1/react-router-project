import React from "react";
import "./Post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { title, id } = post;
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/post/${id}`);
  };

  return (
    <div className="post">
      <h5>ID: {id} </h5>
      <h2>{title} </h2>
      <Link to={`/post/${id}`}>Show post Details</Link>
      <button>Show Detail</button>
      <button onClick={handleNavigation}>With button Handler</button>
    </div>
  );
};

export default Post;
