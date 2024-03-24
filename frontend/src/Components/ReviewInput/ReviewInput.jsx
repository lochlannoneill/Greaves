import React from 'react'
import './ReviewInput.css'

export const ReviewInput = () => {
  return (
    <div className="reviewinput">
        <form>
          <h3>Leave a review</h3>
          <div className="reviewinput-rating">
            <label htmlFor="rating">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              placeholder="5"
              min="1"
              max="5"
            />
          </div>
          <div className="reviewinput-summary">
            <label htmlFor="summary">Summary</label>
            <input
              type="text"
              id="summary"
              name="summary"
              placeholder="Summary"
            />
          </div>
          <div className="reviewinput-description">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="reviewinput-submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
  )
}
