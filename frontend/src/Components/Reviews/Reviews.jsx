import React from 'react'
import placeholder_user from '../Assets/placeholder_user.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStar_solid, faStarHalfStroke as faStar_half, faCheck} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar_regular } from '@fortawesome/free-regular-svg-icons';
import './Reviews.css'

export const Reviews = () => {
  return (
    <div className="reviews">
        <h2>Reviews</h2>
        <div className="reviews-list">
            <div className="review-input">
                <form>
                    <h3>Leave a review</h3>
                    <div className="review-input-rating">
                        <label htmlFor="rating">Rating</label>
                        <input type="number" id="rating" name="rating" placeholder="5" min="1" max="5" />
                    </div>
                    <div className="review-input-summary">
                        <label htmlFor="summary">Summary</label>
                        <input type="text" id="summary" name="summary" placeholder="Summary"/>
                    </div>
                    <div className="review-input-description">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" placeholder="Description"></textarea>
                    </div>
                    <div className="review-input-submit">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div className="review">
                <div className="review-user">
                    <img className="review-user-image" src={placeholder_user} alt="user" />
                    <p className="review-user-name">review.name</p>
                </div>
                <div className="review-info">
                    <div className="review-info-rating">
                        <p className="review-info-rating-number">review.rating</p>
                        <span className="review-info-rating-stars">
                            <FontAwesomeIcon className="review-info-rating-icon" icon={faStar_solid} />
                            <FontAwesomeIcon className="review-info-rating-icon" icon={faStar_solid} />
                            <FontAwesomeIcon className="review-info-rating-icon" icon={faStar_half} />
                            <FontAwesomeIcon className="review-info-rating-icon" icon={faStar_regular} />
                            <FontAwesomeIcon className="review-info-rating-icon" icon={faStar_regular} />
                        </span>
                    </div>
                    <div className="review-info-summary">
                        <p>review.summary</p>
                    </div>
                    <div className="review-info-date">
                        <p>review.date</p>
                    </div>
                    <div className="review-info-verification">
                        <FontAwesomeIcon className="review-info-verification-checkmark" icon={faCheck} />
                        <p clasnnName="review-info-verification-text">review.verified</p>
                    </div>
                </div>
                <div className="review-description">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque a natus fugit atque vitae cumque quo harum inventore illum nostrum, molestias blanditiis nobis saepe ex id exercitationem dolorum dolor ut.</p>
                </div>
                <div className="review-helpful">
                    <p className="review-helpful-count">review.helpful people found this review helpful</p>
                    <div className="review-helpful-actions">
                        <button className="review-helpful-button">Helpful</button>
                        <a href="#report" className="review-helpful-report">Report</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
