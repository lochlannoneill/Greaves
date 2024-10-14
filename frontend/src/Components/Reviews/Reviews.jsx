import React from "react";
import { ReviewAverage } from "./ReviewAverage/ReviewAverage";
import { ReviewInput } from "./ReviewInput/ReviewInput";
import { ReviewList } from "./ReviewList/ReviewList";
import "./Reviews.css";

export const Reviews = ({ reviews, productId }) => {
  const filteredReviews = reviews.filter(
    (review) => review.productId === productId
  );

  return (
    <div id="reviews" className="reviews">
      <h2>Reviews</h2>
      {filteredReviews.length === 0 ? (
        <p className="reviews-empty">There are no reviews yet.</p>
      ) : (
        <div className="reviews-group">
          <div className="reviews-left">
            <ReviewAverage reviews={reviews} />
            <ReviewInput />
          </div>
          <div className="reviews-right">
            <div className="reviewlist-sentiment">
              <h3>Customers Say</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                libero laboriosam, aut, minus quis odio recusandae quaerat ut,
                voluptatum facere dolorem! Ex blanditiis necessitatibus eum ea
                sit, natus accusantium eaque?
              </p>
            </div>
            <hr />
            <ReviewList reviews={filteredReviews} />
          </div>
        </div>
      )}
    </div>
  );
};
