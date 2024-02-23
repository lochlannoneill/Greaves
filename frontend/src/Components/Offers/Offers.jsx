import React from 'react'
import './Offers.css'
import exclusive from '../Assets/products/exclusive.png'

export const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h2>Offers For You</h2>
            <p>ONLY ON BEST SELLING PRODUCTS</p>
            <button>SHOP NOW</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="Offers" />
        </div>
    </div>
  )
}
