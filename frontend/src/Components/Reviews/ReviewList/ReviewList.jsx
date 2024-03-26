import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Review from "../Review/Review";
import "./ReviewList.css";

export const ReviewList = ({ reviews }) => {
  // Check if reviews is an array before proceeding
  if (!Array.isArray(reviews)) {
    return <p>No reviews yet</p>;
  }

  return (
    <div className="reviewlist">
      <div className="reviewlist-reviews">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div className="reviewlist-showmore">
        <p>
          Show More <FontAwesomeIcon icon={faChevronDown} size="2xs" />
        </p>
      </div>
    </div>
  );
};
