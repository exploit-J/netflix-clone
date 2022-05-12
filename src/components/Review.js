import React from "react";

const Review = ({ item }) => {
  let date = new Date(item.created_at).toLocaleString();

  return (
    <div className="review-container">
      <p className="auth">{item.author}</p>
      <p className="content">{item.content}</p>
      <p className="created-date">{date}</p>
    </div>
  );
};

export default Review;
