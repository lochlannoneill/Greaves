import React from 'react'
import './Item.css'
import icon_heart from '../Assets/icons/heart.png'

export const Item = (props) => {
  return (
    <div className="item">
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
            <img className='item-heart' src={icon_heart} alt='heart' /> {/* TODO - props.heart ?? */}
          </div>
          
        </div>
    </div>
  )
}
