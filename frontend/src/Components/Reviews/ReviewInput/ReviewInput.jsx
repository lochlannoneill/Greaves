// ReviewInput.jsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import upload_placeholder from "../../../Assets/placeholder.jpg";
import "./ReviewInput.css";

export const ReviewInput = ({ onSubmit }) => {
  const [reviewDetails, setReviewDetails] = useState({
    summary: "",
    description: "",
    rating: "",
    images: [],
    imagePreviews: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const imageHandler = (e) => {
    const files = Array.from(e.target.files);
    const newImagePreviews = files.map((file) => URL.createObjectURL(file));

    setReviewDetails((prevDetails) => ({
      ...prevDetails,
      images: [...prevDetails.images, ...files],
      imagePreviews: [...prevDetails.imagePreviews, ...newImagePreviews],
    }));
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(reviewDetails.imagePreviews[index]);
    setReviewDetails((prevDetails) => ({
      ...prevDetails,
      images: prevDetails.images.filter((_, i) => i !== index),
      imagePreviews: prevDetails.imagePreviews.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(reviewDetails);
    setReviewDetails({ summary: "", description: "", rating: 0, images: [], imagePreviews: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="reviewinput-input">
      <h2>Leave a Review</h2>
      <div className="reviewinput-section reviewinput-rating">
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          name="rating"
          value={reviewDetails.rating}
          onChange={handleChange}
          placeholder="Rating (1-5)"
          min="1"
          max="5"
          required
        />
      </div>
      <div className="reviewinput-section reviewinput-summary">
        <label htmlFor="summary">Summary</label>
        <textarea
          name="summary"
          value={reviewDetails.summary}
          onChange={handleChange}
          placeholder="Summary"
          required
        />
      </div>
      <div className="reviewinput-section reviewinput-description">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={reviewDetails.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
      </div>
      <div className="reviewinput-section reviewinput-images">
        <label>Images</label>
        <div className="reviewinput-images-list">
          {reviewDetails.imagePreviews.map((image, index) => (
            <div key={index} className="reviewinput-image-preview">
              <img src={image} alt={`Review ${index + 1}`} />
              <button
                type="button"
                className="reviewinput-image-remove"
                onClick={() => removeImage(index)}
              >
                X
              </button>
            </div>
          ))}
          <label className="reviewinput-image-placeholder" htmlFor="reviewinput-file-input">
            <FontAwesomeIcon icon={faPlus} className="plus-icon" />
            <img src={upload_placeholder} alt="Upload" />
            <input
              type="file"
              id="reviewinput-file-input"
              multiple
              onChange={imageHandler}
              hidden
            />
          </label>
        </div>
      </div>
      <button className="reviewinput-submit" type="submit">Submit Review</button>
    </form>
  );
};