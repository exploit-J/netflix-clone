import React from "react";

const Review = ({ item }) => {
  return (
    <div className="review-container">
      <p>{item.author}</p>
      <p>{item.content}</p>
      <p>{item.created_at}</p>
    </div>
  );
};

export default Review;
