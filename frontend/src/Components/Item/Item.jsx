import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as icon_favourite_regular } from '@fortawesome/free-regular-svg-icons';
import './Item.css'

export const Item = (props) => {
  return (
    <div className="item">
        <Link to={`/products/${props.id}`}>
          <div className="item-image-container">
            <img className="item-image" src={props.img} alt={props.title} />
          </div>
        </Link>
        <div className="item-description">
          <p>{props.title}</p>

          <div className="item-stuff">
            <div className="item-prices">
                <div className="item-price-new">
                  €{props.price}
                </div>
                <div className="item-price-old">
                  €{props.price_old}
                </div>
            </div>
            <FontAwesomeIcon className="item-favourite" icon={icon_favourite_regular} />
          </div>
          
        </div>
    </div>
  )
}
