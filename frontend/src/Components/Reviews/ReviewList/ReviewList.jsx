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
  const averageRating = calculateAverageRating(); // Calculate the average rating
  const reviewCount = reviews.length; // Get the total number of reviews

  return (
    <div className="reviewlist">
      {reviews.length === 0 ? (
        <div className="reviewlist-no-reviews">There are no reviews yet</div>
      ) : (
        <div className="reviewlist-group">
          <div className="reviewlist-left">
            <div className="reviewlist-average">
              <h3>Average Ratings</h3>
              <div className="reviewlist-average-rating">
                <span className="reviewlist-average-rating-value">{averageRating} </span>
                <span className="reviewlist-average-rating-stars">
                  {renderStars(averageRating, "reviewlist-average-rating-stars")}
                </span>
                <span> out of {reviewCount} reviews</span>
              </div>
              <div className="reviewlist-average-rating-breakdown">
                <div className="reviewlist-average-rating-breakdown-item">
                  <span>5</span>
                  {/* TODO - THIS BAR STARTS SLIGHTLY BEFORE THE OTHERS */}
                  <div className="reviewlist-average-rating-breakdown-bar">
                    <div className="reviewlist-average-rating-breakdown-bar-fill" style={{ width: "80%" }} />
                  </div>
                  <span>80%</span>
                </div>
                <div className="reviewlist-average-rating-breakdown-item">
                  <span>4</span>
                  <div className="reviewlist-average-rating-breakdown-bar">
                    <div className="reviewlist-average-rating-breakdown-bar-fill" style={{ width: "10%" }} />
                  </div>
                  <span>10%</span>
                </div>
                <div className="reviewlist-average-rating-breakdown-item">
                  <span>3</span>
                  <div className="reviewlist-average-rating-breakdown-bar">
                    <div className="reviewlist-average-rating-breakdown-bar-fill" style={{ width: "5%" }} />
                  </div>
                  <span>5%</span>
                </div>
                <div className="reviewlist-average-rating-breakdown-item">
                  <span>2</span>
                  <div className="reviewlist-average-rating-breakdown-bar">
                    <div className="reviewlist-average-rating-breakdown-bar-fill" style={{ width: "3%" }} />
                  </div>
                  <span>3%</span>
                </div>
                <div className="reviewlist-average-rating-breakdown-item">
                  <span>1</span>
                  {/* TODO - THIS BAR STARTS SLIGHTLY BEFORE THE OTHERS */}
                  <div className="reviewlist-average-rating-breakdown-bar">
                    <div className="reviewlist-average-rating-breakdown-bar-fill" style={{ width: "2%" }} />
                  </div>
                  <span>2%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="reviewlist-right">
            <div className="reviewlist-header">
              <div className="reviewlist-placeholder">
                <h2>Customer Reviews</h2>
              </div>
              <div className="reviewlist-sort">
                <label className="reviewlist-sort-label">Sort by:</label>
                <div className="reviewlist-sort-filter">
                  <div className="reviewlist-sort-filter-option">
                    <select id="sortOption" value={sortOption} onChange={handleSortChange}>
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
                    <input type="checkbox" checked={showVerifiedOnly} onChange={handleVerifiedChange} />
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
