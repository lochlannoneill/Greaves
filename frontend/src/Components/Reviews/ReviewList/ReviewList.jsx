import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Review from "../Review/Review";
import "./ReviewList.css";

export const ReviewList = ({ reviews }) => {
  const [sortOption, setSortOption] = useState("");
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  // TODO - Helpful -> does not continue after first.
  // Sorting function based on the selected option
  const sortByOption = (option) => {
    switch (option) {
      case "rating":
        return reviews.sort((a, b) => b.rating - a.rating);
      case "date":
        return reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "helpful":
        return reviews.sort((a, b) => b.helpful.length - a.helpful.length);
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
      <div className="reviewlist-header">
        <div className="reviewlist-title">
          <h3>Reviews From Ireland</h3>
        </div>
        <div className="reviewlist-sort">
          <div className="reviewlist-sort-filter">
          <label className="reviewlist-sort-filter-label">Sort by</label>
            <div className="reviewlist-sort-filter-option">
              <select
                id="sortOption"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="helpful">Most Helpful</option>
                <option value="rating">Highest Ratings</option>
                <option value="lowestRating">Lowest Ratings</option>
                <option value="date">Most Recent</option>
              </select>
            </div>
          </div>
          <div className="reviewlist-sort-verified">
            <label className="reviewlist-sort-verified-label">
              Verified
            </label>
            <input className="reviewlist-sort-verified-input"
              type="checkbox"
              checked={showVerifiedOnly}
              onChange={handleVerifiedChange}
            />
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
  );
};
