import React from "react";
import "./Friend.css";
import { Link } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, id, email, phone } = friend;
  return (
    <div className="friend">
      <h3>{name}</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>
        <Link to={`/friend/${id}`}>show me detail</Link>
      </p>
    </div>
  );
};

export default Friend;
