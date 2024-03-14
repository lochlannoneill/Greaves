import React from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar as faStar_solid, faStarHalfStroke as faStar_half, faCartShopping as faCartShopping_solid, faHeart as faHeart_solid} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStar_regular } from '@fortawesome/free-regular-svg-icons';
import './ProductDisplay.css'

export const ProductDisplay = (props) => {
    const {product} = props;
    
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
    }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="Product" />
                <img src={product.image} alt="Product" />
                <img src={product.image} alt="Product" />
                <div class="productdisplay-img-list-expand">
                    <FontAwesomeIcon className="productdisplay-img-list-expand-icon" icon={faPlus} />
                    <img src={product.image} alt="Product" />
                </div>
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="Main product" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.title}</h1>
            <div className="productdisplay-right-info">
                <div className="productdisplay-right-rating">
                    <p>{product.rating}</p>
                    <span className="productdisplay-right-rating-stars">
                        <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_solid} />
                        <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_solid} />
                        <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_solid} />
                        <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_half} />
                        <FontAwesomeIcon className="productdisplay-right-rating-icon" icon={faStar_regular} />
                    </span>
                    <p>{product.reviews} reviews</p>
                </div>
                <div className="productdisplay-right-prices">
                    <p className="productdisplay-right-price">&euro;{product.price}</p>
                    <p className="productdisplay-right-price-old">&euro;{product.price_old}</p>
                </div>
                <div className="productdisplay-right-stock">
                    <p>{product.stock_small+product.stock_medium+product.stock_large+product.stock_xlarge+product.stock_xxlarge} left in stock</p>
                </div>
            </div>
            <div className="productdisplay-right-details">
                <h2>Product Details</h2>
                <p>{product.description}</p>
            </div>
            <div className="productdisplay-right-size">
                <h2>Select Size</h2>
                <p>Still unsure what size to get? <a href="#">Find your recommended size</a> or check out our <a href="#">size guide</a>.</p>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <div className="productdisplay-right-category-buttons">
                <button className="productdisplay-right-category-buttons-favourite">Add to Favourites <FontAwesomeIcon icon={faHeart_solid} /></button>
                <button className="productdisplay-right-category-buttons-cart">Add to Cart <FontAwesomeIcon icon={faCartShopping_solid} /></button>
            </div>
            <div className="productdisplay-right-filters">
                <div className="productdisplay-right-id"><span>Product Id: </span>{product.id}</div>
                <div className="productdisplay-right-category"><span>Categories: </span>{product.categories.join(', ')}</div>
                <div className="productdisplay-right-tags"><span>Tags: </span>{product.tags.join(', ')}</div>
            </div>
        </div>
    </div>
  )
}
