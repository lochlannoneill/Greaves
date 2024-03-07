import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
import icon_favourite from '../Assets/icons/favourite.png'

export const Item = (props) => {
  return (
    <div className="item">
        <Link to={`/product/${props.id}`}>
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
            <img className='item-favourite' src={icon_favourite} alt='favourite' /> {/* TODO - props.favourite ?? */}
          </div>
          
        </div>
    </div>
  )
}
