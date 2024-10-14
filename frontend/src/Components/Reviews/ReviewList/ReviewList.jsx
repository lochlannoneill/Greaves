import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Review from "../Review/Review";
import { ShopContext } from "../../../Context/ShopContext";
import "./ReviewList.css";

export const ReviewList = ({ reviews }) => {
  const [sortOption, setSortOption] = useState("");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  const { renderStars } = useContext(ShopContext);

  // Calculate the average rating
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1); // Return one decimal place
  };

  // Sorting function based on the selected option
  const sortByOption = (option) => {
    switch (option) {
      case "rating":
        return reviews.sort((a, b) => b.rating - a.rating);
      case "date":
        return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "helpful":
        return reviews.sort((a, b) => b.helpfulCount - a.helpfulCount);
      case "lowestRating":
        return reviews.sort((a, b) => a.rating - b.rating);
      default:
        return reviews; // Default case returns original array
    }
  };

  // Handle sorting option change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Filter reviews based on verification status
  const filterByVerification = () => {
    if (showVerifiedOnly) {
      return reviews.filter((review) => review.verified);
    }
    return reviews;
  };

  // Handle verified review filter option change
  const handleVerifiedChange = () => {
    setShowVerifiedOnly(!showVerifiedOnly);
  };

  // Sort and filter reviews
  const sortedAndFilteredReviews = filterByVerification(
    sortByOption(sortOption)
  );
  const averageRating = calculateAverageRating();
  const reviewCount = reviews.length;

  // Calculate the count of each rating for the breakdown
  const calculateRatingCounts = () => {
    const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.forEach((review) => {
      const rating = Math.floor(review.rating); // Round down ratings to the nearest whole number
      if (rating >= 1 && rating <= 5) {
        counts[rating]++;
      }
    });
    return counts;
  };
  
  const renderRatingBreakdown = (ratingCounts) => {
    const totalReviews = reviews.length;
  
    // Create an array of rating entries and sort it in descending order
    const sortedRatings = Object.entries(ratingCounts).sort(([ratingA], [ratingB]) => {
      return parseInt(ratingB) - parseInt(ratingA); // Sort by rating descending
    });

    return sortedRatings.map(([rating, count]) => {
      const percentage = totalReviews > 0 ? ((count / totalReviews) * 100).toFixed(0) : 0;

      return (
        <div className="reviewlist-average-rating-breakdown-item" key={rating}>
          <span>{rating}</span>
          <div className="reviewlist-average-rating-breakdown-bar">
            <div
              className="reviewlist-average-rating-breakdown-bar-fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span>{percentage}%</span>
        </div>
      );
    });
  };

  const ratingCounts = calculateRatingCounts();


  return (
    <div className="reviewlist">
      {reviews.length === 0 ? (
        <div className="reviewlist-no-reviews">There are no reviews yet</div>
      ) : (
        <div className="reviewlist-group">
          <div className="reviewlist-left">
            <div className="reviewlist-average">
              <h3 className="reviewlist-average-title">Average Ratings</h3>
              <div className="reviewlist-average-rating">
                <span className="reviewlist-average-rating-value">
                  {averageRating}{" "}
                </span>
                <span className="reviewlist-average-rating-stars">
                  {renderStars(
                    averageRating,
                    "reviewlist-average-rating-stars"
                  )}
                </span>
                <span> out of {reviewCount} reviews</span>
              </div>
              <div className="reviewlist-average-rating-breakdown">
                {renderRatingBreakdown(ratingCounts)}
              </div>
            </div>
            <div className="reviewlist-sentiment">
              <h3>Customers Say</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero laboriosam, aut, minus quis odio recusandae quaerat ut, voluptatum facere dolorem! Ex blanditiis necessitatibus eum ea sit, natus accusantium eaque?</p>
            </div>
          </div>
          <div className="reviewlist-right">
            <div className="reviewlist-header">
              <div className="reviewlist-title">
                <h2>Customer Reviews</h2>
              </div>
              <div className="reviewlist-sort">
                <label className="reviewlist-sort-label">Sort by:</label>
                <div className="reviewlist-sort-filter">
                  <div className="reviewlist-sort-filter-option">
                    <select
                      id="sortOption"
                      value={sortOption}
                      onChange={handleSortChange}
                    >
                      <option value="rating">Highest Ratings</option>
                      <option value="lowestRating">Lowest Ratings</option>
                      <option value="date">Most Recent</option>
                      <option value="helpful">Most Helpful</option>
                    </select>
                  </div>
                </div>
                <div className="reviewlist-sort-verified">
                  <label className="reviewlist-sort-verified-label">
                    Verified
                    <input
                      type="checkbox"
                      checked={showVerifiedOnly}
                      onChange={handleVerifiedChange}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="reviewlist-reviews">
              {sortedAndFilteredReviews.map((review) => (
                <Review key={review.id} review={review} />
              ))}
            </div>
            <div className="reviewlist-showmore">
              <p>
                Show More <FontAwesomeIcon icon={faChevronDown} size="2xs" />
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
