import React from "react";
import { ReviewAverage } from "./ReviewAverage/ReviewAverage";
import { ReviewSentiment } from "./ReviewSentiment/ReviewSentiment"
import { ReviewInput } from "./ReviewInput/ReviewInput";
import { ReviewList } from "./ReviewList/ReviewList";
import "./Reviews.css";

export const Reviews = ({ reviews, productId }) => {
  const filteredReviews = reviews.filter(
    (review) => review.productId === productId
  );

  return (
    <div id="reviews" className="reviews">
      {/* <h2>Reviews</h2> */}
      {filteredReviews.length === 0 ? (
        <p className="reviews-empty">There are no reviews yet.</p>
      ) : (
        <div className="reviews-group">
          <div className="reviews-left">
            <ReviewAverage reviews={reviews} />
            <ReviewSentiment />
          </div>
          <div className="reviews-right">
            <ReviewInput />
            <hr />
            <ReviewList reviews={filteredReviews} />
          </div>
        </div>
      )}
    </div>
  );
};
