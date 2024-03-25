import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faHeart as faHeart_solid,
  faCartShopping as faCartShopping_solid,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStar_regular } from "@fortawesome/free-regular-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import "./Item.css";

const maxTitleChars = 48;
const truncateTitle = (title) => {
  if (title.length > maxTitleChars) {
    return title.substring(0, maxTitleChars) + "...";
  }
  return title;
};

export const Item = (props) => {
  const { isFavorite, isInCart, reviews, getReviewInfo } =
    useContext(ShopContext);
  const [reviewCount, setReviewCount] = useState(0);
  const [reviewAverageRating, setReviewAverageRating] = useState(0);
  console.log(`${props.id} + ${props.reviews}`);

  useEffect(() => {
    if (reviews) {
      const { reviewCount, reviewAverageRating } = getReviewInfo(props.id);
      setReviewCount(reviewCount);
      setReviewAverageRating(reviewAverageRating);
    }
  }, [reviews, props.id, getReviewInfo]);

  return (
    <div className="item">
      <Link to={`/products/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="item-image-container">
          <img className="item-image" src={props.img} alt={props.title} />
        </div>
        <div className="item-description">
          <p className="item-description-title">{truncateTitle(props.title)}</p>
          {reviewCount > 0 && (
            <div className="item-description-reviews">
              <span className="item-description-reviews-stars">
                {[...Array(Math.floor(reviewAverageRating))].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    className="item-description-reviews-star-icon"
                    icon={faStar_solid}
                  />
                ))}
                {reviewAverageRating % 1 !== 0 && (
                  <FontAwesomeIcon
                    className="item-description-reviews-star-icon"
                    icon={faStar_half}
                  />
                )}
                {[
                  ...Array(Math.max(0, 5 - Math.ceil(reviewAverageRating))),
                ].map((_, index) => (
                  <FontAwesomeIcon
                    key={index}
                    className="item-description-reviews-star-icon"
                    icon={faStar_regular}
                  />
                ))}
              </span>
              <p className="item-description-reviews-text">
                {reviewCount} reviews
              </p>
            </div>
          )}
          <div className="item-stuff">
            <div className="item-prices">
              <div className={`item-price ${props.price_old ? "reduced" : ""}`}>
                &euro;{props.price}
              </div>
              {props.price_old && (
                <div className="item-price-old">&euro;{props.price_old}</div>
              )}
            </div>
            <div className="item-status">
              {isFavorite(props.id) ? (
                <FontAwesomeIcon
                  className={`item-favourite ${
                    isFavorite(props.id) ? "isFavorite" : ""
                  }`}
                  icon={faHeart_solid}
                />
              ) : null}
              {isInCart(props.id) ? (
                <FontAwesomeIcon
                  className={`item-cart ${
                    isInCart(props.id) ? "isInCart" : ""
                  }`}
                  icon={faCartShopping_solid}
                />
              ) : null}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
