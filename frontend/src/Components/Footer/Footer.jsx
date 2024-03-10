import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok, faSnapchat } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'

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
            <h2>Lorem</h2>
            <p>Ipsum</p>
            <p>Dolor</p>
            <p>Sit</p>
            <p>Amet</p>
          </div>
          <div className="footer-information-child footer-middle">
            <h2>Show Us Your Haul</h2>
            <p>Tag us <a href="https://greaves.store/">#greaves</a> for a chance to be featured!</p>
            <div className="footer-social-icons">
              <span className="footer-social"><a href="https://greaves.store/"><FontAwesomeIcon className="footer-icon instagram" icon={faInstagram} /></a></span>
              <span className="footer-social"><a href="https://greaves.store/"><FontAwesomeIcon className="footer-icon facebook" icon={faFacebook} /></a></span>
              <span className="footer-social"><a href="https://greaves.store/"><FontAwesomeIcon className="footer-icon twitter" icon={faTwitter} /></a></span>
              <span className="footer-social"><a href="https://greaves.store/"><FontAwesomeIcon className="footer-icon snapchat" icon={faSnapchat} /></a></span>
              <span className="footer-social"><a href="https://greaves.store/"><FontAwesomeIcon className="footer-icon tiktok" icon={faTiktok} /></a></span>
            </div>
          </div>
          <div className="footer-information-child footer-right">
          <h2>GREAVES</h2>
            <p>&copy; 2024 Greaves. All Rights Reserved.</p>
            <br />
            <p>Call us @ 123-4567890</p>
            <br />
            <p>1234 Greaves Street,</p>
            <p>Greaves, GR 12345</p>
            <p>Imaginary County</p>
            <p>Fantasyland</p>
          </div>
        </div>
        </div>
      <hr/>
      <div className="footer-signature">
        <p>Greaves is a fictional brand created by <a href="https://lochlannoneill.com/">Lochlann O Neill</a> for educational purposes only.</p>
        <p>Find the source code to this website in my <a href="https://github.com/lochlannoneill/greaves">GitHub repository</a>.</p>
        <p><a href="https://lochlannoneill.com/">Lochlann O Neill</a> • 2024</p>
      </div>
    </footer>
  )
}
