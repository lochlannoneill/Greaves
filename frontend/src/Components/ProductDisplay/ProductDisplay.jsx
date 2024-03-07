import React from 'react'
import './ProductDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar as faStar_fill } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar_empty } from '@fortawesome/free-regular-svg-icons';

export const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="Product image" />
                <img src={product.image} alt="Product image" />
                <img src={product.image} alt="Product image" />
                <img src={product.image} alt="Product image" />
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="Main product image" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.title}</h1>
            <div className="productdisplay-right-rating">
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_fill} />
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_fill} />
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_fill} />
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_empty} />
                <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_empty} />
            </div>
            <p>{product.description}</p>
            <div className="productdisplay-right-prices">
                <p>{product.price}</p>
                <p>{product.price_old}</p>
            </div>
            <div className="productdisplay-right-size">
                <h2>Select Size</h2>
                <div className="productdisplay-right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <div className="productdisplay-right-category-buttons">
                <button>Add to Cart</button>
                <button>Add to Favourites</button>
            </div>
            <div className="productdisplay-right-category"><span>Categories: </span>{product.categories}</div>
            <div className="productdisplay-right-tags"><span>Tags: </span>{product.tags}</div>
        </div>
    </div>
  )
}
