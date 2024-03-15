import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Hero.css'
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
            {/* <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <FontAwesomeIcon icon={faArrowRight} />
            </div> */}
        </div>
        <div className="hero-right">
            <img src={image_hero} alt="" />
        </div>
    </div>
  )
}
