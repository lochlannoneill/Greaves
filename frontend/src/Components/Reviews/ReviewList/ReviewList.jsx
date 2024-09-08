import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Review from "../Review/Review";
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
      case "lowestRating": // New case for sorting by lowest ratings
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
  const sortedAndFilteredReviews = filterByVerification(sortByOption(sortOption));

  return (
    <div className="reviewlist">
      <div className="reviewlist-sort">
        <div className="reviewlist-sort-filter">
          <select id="sortOption" value={sortOption} onChange={handleSortChange}>
            <option value="rating">Highest Ratings</option>
            <option value="lowestRating">Lowest Ratings</option> {/* Added option for lowest ratings */}
            <option value="date">Most Recent</option>
            <option value="helpful">Most Helpful</option>
          </select>
        </div>
        <div className="reviewlist-sort-verified">
          <label className="reviewlist-sort-verified-label">
            <input type="checkbox" checked={showVerifiedOnly} onChange={handleVerifiedChange} />
            Verified
          </label>
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
