import React from 'react'
import './Hero.css'
import icon_arrow from '../Assets/icon_arrow.png'
import image_hero from '../Assets/image_hero.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <div className="hero-text">
                <p>New</p>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={icon_arrow} alt="" />
            </div>
        </div>
        <div className="hero-right">
            <img src={image_hero} alt="" />
        </div>
    </div>
  )
}
