import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Review from "../Review/Review";
import { ReviewAverage } from "../ReviewAverage/ReviewAverage";
import { ReviewInput } from "../ReviewInput/ReviewInput";
import "./ReviewList.css";

export const ReviewList = ({ reviews }) => {
  const [sortOption, setSortOption] = useState("");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

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

  return (
    <div className="reviewlist">
        <div className="reviewlist-group">
          <div className="reviewlist-left">
            <ReviewAverage reviews={reviews}/>
            <ReviewInput />
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
            <div className="reviewlist-sentiment">
              <h3>Customers Say</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur libero laboriosam, aut, minus quis odio recusandae quaerat ut, voluptatum facere dolorem! Ex blanditiis necessitatibus eum ea sit, natus accusantium eaque?</p>
            </div>
            <hr />
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
    </div>
  );
};
