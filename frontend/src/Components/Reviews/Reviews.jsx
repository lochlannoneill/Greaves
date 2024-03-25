import React from "react";
import { ReviewInput } from "./ReviewInput/ReviewInput";
import { ReviewList } from "./ReviewList/ReviewList";
import "./Reviews.css";

export const Reviews = ({ reviews, productId }) => {
  const filteredReviews = reviews.filter(
    (review) => review.productId === productId
  );
  return (
    <div id="reviews" className="reviews">
      <ReviewInput />
      <hr />
      <ReviewList reviews={filteredReviews} />
    </div>
  );
};
