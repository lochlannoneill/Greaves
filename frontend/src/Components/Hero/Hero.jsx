import React from 'react'
import './Hero.css'
import icon_arrow from '../Assets/icon_arrow.png'
import image_hero from '../Assets/image_hero.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <p className="hero-text">
                New<br/>
                collections<br/>
                for everyone<br/>
            </p>
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
