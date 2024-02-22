import React from 'react'
import './Item.css'

export const Item = (props) => {
  return (
    <div className="item">
        <img src={props.img} alt={props.title} />
        <div className="item-description">
          <p>{props.title}</p>
          <div className="item-prices">
              <div className="item-price-new">
                €{props.price}
              </div>
              <div className="item-price-old">
                €{props.price_old}
              </div>
          </div>
        </div>
    </div>
  )
}
