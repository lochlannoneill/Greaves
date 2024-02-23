import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faPinterest, faYoutube, faTiktok, faSnapchat } from '@fortawesome/free-brands-svg-icons'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <form className="footer-form">
          <p>Get Exclusive Offers And Updates</p>
          <input className="footer-form-input" placeholder="Enter your email" type="email" />
          <button className="footer-form-button">Sign Up</button>
        </form>
        <hr/>
        <div className="footer-information">
          <div className="footer-information-child footer-left">
              <h2>GREAVES</h2>
              <p>This is a test.</p>
              <p>This is a test.</p>
              <p>This is a test.</p>
          </div>
          <div className="footer-information-child footer-middle">
            <p>This is a test.</p>
            <p>This is a test.</p>
            <p>This is a test.</p>
          </div>
          <div className="footer-information-child footer-right">
            <h2>Show Us Your Haul</h2>
            <p>Tag us <a href="#">@greaves</a> for a chance to be featured!</p>
            <span className="footer-social"><a href="#"><FontAwesomeIcon className="footer-icon instagram" icon={faInstagram} /></a></span>
            <span className="footer-social"><a href="#"><FontAwesomeIcon className="footer-icon facebook" icon={faFacebook} /></a></span>
            <span className="footer-social"><a href="#"><FontAwesomeIcon className="footer-icon twitter" icon={faTwitter} /></a></span>
            <span className="footer-social"><a href="#"><FontAwesomeIcon className="footer-icon snapchat" icon={faSnapchat} /></a></span>
            <span className="footer-social"><a href="#"><FontAwesomeIcon className="footer-icon tiktok" icon={faTiktok} /></a></span>
          </div>
        </div>
      </div>
      <hr/>
      <p>Find the source code to this website in my <a href="https://github.com/lochlannoneill/greaves">GitHub repository</a>.</p>
      <p className="signature"><a href="https://lochlannoneill.com/">Lochlann O Neill</a> • 2024</p>
    </footer>
  )
}
