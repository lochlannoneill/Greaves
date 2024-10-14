import React from "react";
import { ReviewList } from "./ReviewList/ReviewList";
import "./Reviews.css";

export const Reviews = ({ reviews, productId }) => {
  const filteredReviews = reviews.filter(
    (review) => review.productId === productId
  );

  // Show ReviewList only if there are reviews, otherwise show "There are no reviews yet"
  return (
    <div id="reviews" className="reviews">
      {filteredReviews.length === 0 ? (
        <p className = "reviews-empty">There are no reviews yet.</p>
      ) : (
        <div className="reviews-group">
          <h2>Reviews</h2>
          <ReviewList reviews={filteredReviews} />
        </div>
      )}
    </div>
  );
};
