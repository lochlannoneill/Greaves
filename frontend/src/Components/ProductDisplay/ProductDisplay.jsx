import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as faHeart_solid,
  faStar as faStar_solid,
  faStarHalfStroke as faStar_half,
  faCartShopping as faCartShopping_solid,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeart_regular } from "@fortawesome/free-regular-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import Modal from "../Modal/Modal";
import "./ProductDisplay.css";

export const ProductDisplay = (props) => {
  const { product, reviewAverageRating, reviewCount } = props;
  const { cart, addCart, toggleFavorite, isFavorite, showPopup, popupMessage } =
    useContext(ShopContext);
  const percentageReduced = Math.round(
    ((product.price_previous - product.price) / product.price_previous) * 100
  );
  const totalStock = Object.values(product.stock).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const [selectedImage, setSelectedImage] = useState(product.images[0]); // State to hold the selected image

  useEffect(() => {
    setSelectedImage(product.images[0]); // Reset to the first image when product changes
  }, [product]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div className="productdisplay">
      {showPopup && <Modal message={popupMessage} />}{" "}
      {/* Render the modal if showPopup is true */}
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.images.slice(0, 3).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product thumbnail ${index}`}
              onMouseEnter={() => setSelectedImage(image)} // Update selected image on hover
              className={`thumbnail ${selectedImage === image ? "active" : ""}`} // highlight active thumbnail
            />
          ))}
          {product.images.length > 3 && (
            <div className="product-images-expand">
              <span className="product-images-expand-icon">
                +{product.images.length - 3}
              </span>
              <img src={product.images[3]} alt={`product-3`} />
            </div>
          )}
        </div>
        {/* // TODO - This image stays when nagivating to another product */}
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={selectedImage} // Use the selected image as the main image
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
                        className="productdisplay-right-rating-full"
                        icon={faStar_solid}
                      />
                    )
                  )}
                  {reviewAverageRating % 1 !== 0 && (
                    <FontAwesomeIcon
                      className="productdisplay-right-rating-half"
                      icon={faStar_half}
                    />
                  )}
                  {[
                    ...Array(Math.max(0, 5 - Math.ceil(reviewAverageRating))),
                  ].map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      className="productdisplay-right-rating-empty"
                      icon={faStar_solid}
                    />
                  ))}
                </span>
                <a
                  className="productdisplay-right-rating-reviews"
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("reviews").scrollIntoView({
                      behavior: "smooth",
                    });
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
              -{percentageReduced}%
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
        <hr />
        <div className="productdisplay-tags">
          {product.tags.map((tag, index) => (
            <span key={index} className="productdisplay-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="productdisplay-right-about">
          <h3>About this item</h3>
          <p>{product.description}</p>
        </div>
        <div className="productdisplay-right-color">
          <h3>Select Colour</h3>
          <div className="productdisplay-right-colors">
            <div>product.colors</div>
          </div>
        </div>
        <div className="productdisplay-right-size">
          <h3>Select Size</h3>
          <p>
            Still unsure what size to get?{" "}
            <a href="/">Find your recommended size</a> or check out our{" "}
            <a href="/">size guide</a>.
          </p>
          <p>product.sizes</p>
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
