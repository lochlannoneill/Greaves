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
                    <p className="review-user-name">John Doe</p>
                </div>
                <div className="review-rating">
                    <p className="review-rating-number">rating</p>
                    <span className="review-rating-stars">
                        <FontAwesomeIcon className="review-rating-icon" icon={faStar_solid} />
                        <FontAwesomeIcon className="review-rating-icon" icon={faStar_solid} />
                        <FontAwesomeIcon className="review-rating-icon" icon={faStar_solid} />
                        <FontAwesomeIcon className="review-rating-icon" icon={faStar_half} />
                        <FontAwesomeIcon className="review-rating-icon" icon={faStar_regular} />
                    </span>
                    <p className="review-rating-summary">summary</p>
                </div>
                <div className="review-date">
                    <p>date</p>
                </div>
                <div className="review-verification">
                    <FontAwesomeIcon className="review-verification-checkmark" icon={faCheck} />
                    <p clasnnName="review-verification-checkmark">Verified purchase</p>
                </div>
                <div className="review-description">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati voluptas dignissimos cum ipsam nobis recusandae in. Libero officia consequatur dicta nihil assumenda quam hic maiores reiciendis mollitia, ea placeat quisquam.</p>
                </div>
                <div className="review-helpful">
                    <p className="review-helpful-count">helpful_count people found this review helpful</p>
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
