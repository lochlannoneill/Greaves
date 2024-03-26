import React, { useContext } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeart_solid,
  faPlus,
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faCartShopping as faCartShopping_solid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faStar as faStar_regular,
  faHeart as faHeart_regular,
} from "@fortawesome/free-regular-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import Modal from "../Modal/Modal";
import "./ProductDisplay.css";

export const ProductDisplay = (props) => {
  const { product, reviewAverageRating, reviewCount } = props;
  const { cart, addCart, toggleFavorite, isFavorite, showPopup, popupMessage } =
    useContext(ShopContext);
  const percentageReduced = (
    ((product.price - product.price_previous) / product.price) *
    100
  ).toFixed(0);
  const totalStock = Object.values(product.stock).reduce(
    (acc, curr) => acc + curr,
    0
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div className="productdisplay">
      {showPopup && <Modal message={popupMessage} />}{" "}
      {/* Render the modal if showPopup is true */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
          <div className="productdisplay-img-list-expand">
            <FontAwesomeIcon
              className="productdisplay-img-list-expand-icon"
              icon={faPlus}
            />
            <img src={product.image} alt="Product" />
          </div>
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="Main product"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <div className="productdisplay-right-heading">
          <h1 className="productdisplay-right-heading-title">
            {product.title}
            {isFavorite(product.id) ? (
              <span>
                &nbsp;
                <FontAwesomeIcon
                  className={`item-favourite ${
                    isFavorite(product.id) ? "isFavorite" : ""
                  }`}
                  icon={faHeart_solid}
                />
              </span>
            ) : null}
          </h1>
          <div className="productdisplay-right-rating">
            {reviewCount > 0 ? (
              <>
                <p className="productdisplay-right-rating-value">
                  {reviewAverageRating}
                </p>
                <span className="productdisplay-right-rating-stars">
                  {[...Array(Math.floor(reviewAverageRating))].map(
                    (_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        className="productdisplay-right-rating-icon"
                        icon={faStar_solid}
                      />
                    )
                  )}
                  {reviewAverageRating % 1 !== 0 && (
                    <FontAwesomeIcon
                      className="productdisplay-right-rating-icon"
                      icon={faStar_half}
                    />
                  )}
                  {[
                    ...Array(Math.max(0, 5 - Math.ceil(reviewAverageRating))),
                  ].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="productdisplay-right-rating-icon"
                      icon={faStar_regular}
                    />
                  ))}
                </span>
                <a
                  className="productdisplay-right-rating-reviews"
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("reviews")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  out of {reviewCount} reviews
                </a>
              </>
            ) : (
              <p className="productdisplay-right-rating-default">
                No reviews yet
              </p>
            )}
          </div>
        </div>
        <div className="productdisplay-right-info">
          {product.price_previous && (
            <p className="productdisplay-right-discount">
              {percentageReduced}% off
            </p>
          )}
          <div className="productdisplay-right-prices">
            <p
              className={`productdisplay-right-price ${
                product.price_previous ? "reduced" : ""
              }`}
            >
              &euro;{product.price}
            </p>
            {product.price_previous && (
              <p className="productdisplay-right-price-old">
                &euro;{product.price_previous}
              </p>
            )}
          </div>
          <div
            className={`productdisplay-right-stock ${
              totalStock === 0
                ? "out-of-stock"
                : totalStock < 5
                ? "low-stock"
                : ""
            }`}
          >
            {/* Display stock information */}
            <p>
              {totalStock === 0
                ? "Out of stock"
                : totalStock < 5
                ? `Only ${totalStock} left in stock!`
                : `${totalStock} left in stock`}
            </p>
          </div>
        </div>
        <div className="productdisplay-right-details">
          <h2>Product Details</h2>
          <p>{product.description}</p>
        </div>
        <div className="productdisplay-right-size">
          <h2>Select Size</h2>
          <p>
            Still unsure what size to get?{" "}
            <a href="/">Find your recommended size</a> or check out our{" "}
            <a href="/">size guide</a>.
          </p>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div className="productdisplay-right-category-buttons">
          <button
            onClick={() => {
              toggleFavorite(product.id);
            }}
            className={`productdisplay-right-category-buttons-favourite ${
              isFavorite(product.id) ? "in-favorites" : "not-in-favorites"
            }`}
          >
            {isFavorite(product.id) ? (
              <FontAwesomeIcon icon={faHeart_solid} />
            ) : (
              <FontAwesomeIcon icon={faHeart_regular} />
            )}
          </button>
          <button
            onClick={() => {
              addCart(product.id);
            }}
            className="productdisplay-right-category-buttons-cart"
          >
            Add to Cart <FontAwesomeIcon icon={faCartShopping_solid} />
          </button>
        </div>
        {/* <div className="productdisplay-right-filters">
                    <div className="productdisplay-right-id"><span>Product Id: </span>{product.id}</div>
                    <div className="productdisplay-right-category"><span>Categories: </span>{product.categories.join(', ')}</div>
                    <div className="productdisplay-right-tags"><span>Tags: </span>{product.tags.join(', ')}</div>
                </div> */}
        {cart[product.id] > 0 && (
          <p className="productdisplay-right-already">
            {cart[product.id] === 1 ? "This item is" : `${cart[product.id]} x `}{" "}
            already in the cart
          </p>
        )}
      </div>
    </div>
  );
};
