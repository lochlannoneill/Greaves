import React, { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";
import "./ReviewAverage.css";

export const ReviewAverage = ({ reviews }) => {
  const { renderStars } = useContext(ShopContext);
  const reviewCount = reviews.length;

  // Calculate the average rating
  const calculateAverageRating = () => {
    if (reviewCount === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviewCount).toFixed(1);
  };
  const averageRating = calculateAverageRating();

  // Calculate the count of each rating for the breakdown
  const calculateRatingCounts = () => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((review) => {
      const rating = Math.floor(review.rating);
      if (rating >= 1 && rating <= 5) {
        counts[rating]++;
      }
    });
    return counts;
  };
  
  const renderRatingBreakdown = (ratingCounts) => {
    const totalReviews = reviewCount;
    const sortedRatings = Object.entries(ratingCounts).sort(([ratingA], [ratingB]) => {
      return parseInt(ratingB) - parseInt(ratingA); // Sort by rating descending
    });
    return sortedRatings.map(([rating, count]) => {
      const percentage = totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(0) : 0;
      return (
        <div className="reviewaverage-rating-breakdown-item" key={rating}>
          <span className="reviewaverage-rating-breakdown-star">{rating}</span>
          <div className="reviewaverage-rating-breakdown-bar">
            <div
              className="reviewaverage-rating-breakdown-bar-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="reviewaverage-rating-breakdown-percentage">{percentage}%</span>
        </div>
      );
    });
  };
  const ratingCounts = calculateRatingCounts();

  return (
    <div className="reviewinput">
      <div className="reviewaverage">
        <h3 className="reviewaverage-title">Average Ratings</h3>
        <div className="reviewaverage-rating">
          <span className="reviewaverage-rating-value">
            {averageRating}{" "}
          </span>
          <span className="reviewaverage-rating-stars">
            {renderStars(averageRating, "reviewaverage-rating-stars")}
          </span>
          <span> out of {reviewCount} reviews</span>
        </div>
        <div className="reviewaverage-rating-breakdown">
          {renderRatingBreakdown(ratingCounts)}
        </div>
      </div>
    </div>
  );
};
