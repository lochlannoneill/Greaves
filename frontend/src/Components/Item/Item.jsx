import React from "react";
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

export const Item = (props) => {
  const { isFavorite, isInCart } = useContext(ShopContext);

  return (
    <div className="item">
      <Link to={`/products/${props.id}`} onClick={window.scrollTo(0, 0)}>
        {" "}
        {/* TODO - I dont like the implementation here */}
        <div className="item-image-container">
          <img className="item-image" src={props.img} alt={props.title} />
        </div>
        <div className="item-description">
          <p className="item-description-title">{props.title}</p>
          <div className="item-description-reviews">
            <span className="item-description-reviews-stars">
              <FontAwesomeIcon
                className="productdisplay-right-rating-icon"
                icon={faStar_solid}
              />
              <FontAwesomeIcon
                className="productdisplay-right-rating-icon"
                icon={faStar_solid}
              />
              <FontAwesomeIcon
                className="productdisplay-right-rating-icon"
                icon={faStar_solid}
              />
              <FontAwesomeIcon
                className="productdisplay-right-rating-icon"
                icon={faStar_half}
              />
              <FontAwesomeIcon
                className="productdisplay-right-rating-icon"
                icon={faStar_regular}
              />
            </span>
            <p className="item-description-reviews-text">product.reviews</p>
          </div>
          <div className="item-stuff">
            <div className="item-prices">
              <div
                className={`item-price ${props.price_old ? "reduced" : ""}`}
              >
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
