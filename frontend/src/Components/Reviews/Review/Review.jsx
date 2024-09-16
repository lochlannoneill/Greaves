import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faCheck,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import placeholder_user from "../../../Assets/placeholder_user.jpg";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div key={review.id} className="review">
      <div className="review-user">
        <img
          className="review-user-image"
          src={review.profile_image || placeholder_user}
          alt="user"
        />
        <div className="review-user-info">
          <div className="review-user-name-group">
            {review.verified ? (
            <>
              <FontAwesomeIcon
                    className="review-user-verified"
                    icon={faSquareCheck}
                  />
            </>
            ) : null}
            <p className="review-user-name">{review.userName}</p>
          </div>
          <p className="review-user-handle">{review.userHandle}</p>
        </div>
      </div>
      <div className="review-info">
        <div className="review-info-rating">
          <span className="review-info-rating-stars">
            {[...Array(Math.floor(review.rating))].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                className="review-info-rating-full"
                icon={faStar_solid}
              />
            ))}
            {review.rating % 1 !== 0 && (
              <FontAwesomeIcon
                className="review-info-rating-half"
                icon={faStar_half}
              />
            )}
            {[...Array(5 - Math.ceil(review.rating))].map((_, index) => (
              <FontAwesomeIcon
                key={index + Math.ceil(review.rating)}
                className="review-info-rating-empty"
                icon={faStar_solid}
              />
            ))}
          </span>
          <p className="review-info-rating-number">{review.rating}</p>
        </div>
        <div className="review-info-summary">
          <p>{review.summary}</p>
        </div>
        <div className="review-info-date">
          <p>
            {review.date} at {review.time}
          </p>
        </div>
        <div className="review-info-size">
              <p>purchase.size</p>
              <p>|</p>
              <p>purchase.color</p>
            </div>
      </div>
      {review.verified ? (
        <>
          <div className="review-purchase">
            {/* <div className="review-purchase-verification">
              <FontAwesomeIcon
                className="review-purchase-verification-checkmark"
                icon={faCheck}
              />
              <p className="review-purchase-verification-text">Verified Purchase</p>
            </div> */}
          </div>
        </>
      ) : null}
      {review.images.length > 0 && (
        <div className="review-images">
          {review.images.slice(0, 3).map((image, index) => (
            <img key={index} src={image} alt={`review-${index}`} />
          ))}
          {review.images.length > 3 && (
            <div className="review-images-expand">
              <FontAwesomeIcon
                className="review-images-expand-icon"
                icon={faPlus}
              />
              <img src={review.images[3]} alt={`review-3`} />
            </div>
          )}
        </div>
      )}
      <div className="review-description">
        <p>{review.description}</p>
      </div>
      <div className="review-helpful">
        {review.helpful.length > 0 && (
          <p className="review-helpful-count">
            {review.helpful.length}{" "}
            {review.helpful.length === 1 ? "person" : "people"} found this
            review helpful
          </p>
        )}
        <div className="review-helpful-actions">
          <button className="review-helpful-button">Helpful</button>
          <a href="#report" className="review-helpful-report">
            Report
          </a>
        </div>
      </div>
    </div>
  );
};

export default Review;
