import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeart_solid } from '@fortawesome/free-solid-svg-icons';
import { ShopContext } from '../../Context/ShopContext';
import './Item.css'

export const Item = (props) => {
  const { isFavorite } = useContext(ShopContext);

  return (
    <div className="item">
        <Link to={`/products/${props.id}`} onClick={window.scrollTo(0, 0)}> {/* TODO - I dont like the implementation here */}
          <div className="item-image-container">
            <img className="item-image" src={props.img} alt={props.title} />
          </div>
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
              <div className="item-status">
                {isFavorite(props.id) ? (
                  <FontAwesomeIcon
                      className={`item-favourite ${isFavorite(props.id) ? 'isFavorite' : ''}`}
                      icon={faHeart_solid}
                  />
                ) : null}
              </div>
            </div>
          </div>
      </Link>
    </div>
  )
}
