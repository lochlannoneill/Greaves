import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Greaves</h2>
        </div>
        <div className="social-icons">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
      </div>
      {/* <hr/> */}
      <p>Find the source code to this website in my <a href="https://github.com/lochlannoneill/greaves">GitHub repository</a>.</p>
      <p className="signature"><a href="https://lochlannoneill.com/">Lochlann O Neill</a> • 2024</p>
    </footer>
  )
}
