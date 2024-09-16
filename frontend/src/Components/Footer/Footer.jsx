import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faTiktok,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <form className="footer-form">
          <p>Get Exclusive Offers And Updates</p>
          <div className="footer-form-input-group">
            <input
              className="footer-form-input"
              placeholder="Enter your email"
              type="email"
            />
            <button className="footer-form-button">
              Sign Up{" "}
              <FontAwesomeIcon
                className="footer-icon envelope"
                icon={faEnvelope}
              />
            </button>
          </div>
        </form>
        <hr />
        <div className="footer-information">
          <div className="footer-information-child footer-left">
            <h2>Contact Us</h2>
            <p>
              <FontAwesomeIcon className="footer-icon phone" icon={faPhone} />{" "}
              123-4567890
            </p>
            <br />
            <p>1234 Greaves Street,</p>
            <p>Greaves, GR 12345</p>
            <p>Imaginary County</p>
            <p>Fantasyland</p>
          </div>
          <div className="footer-information-child footer-middle">
            <h2>GREAVES</h2>
            <p>2024 &copy; Greaves. All Rights Reserved.</p>
            <br />
          </div>
          <div className="footer-information-child footer-right">
            <h2>Show Us Your Haul</h2>
            <p>
              Tag us <a href="https://greaves.store/">#greaves.store</a> for a chance
              to be featured!
            </p>
            <div className="footer-social-icons">
              <span className="footer-social">
                <a href="https://greaves.store/">
                  <FontAwesomeIcon
                    className="footer-icon social instagram"
                    icon={faInstagram}
                  />
                </a>
              </span>
              <span className="footer-social">
                <a href="https://greaves.store/">
                  <FontAwesomeIcon
                    className="footer-icon social facebook"
                    icon={faFacebook}
                  />
                </a>
              </span>
              <span className="footer-social">
                <a href="https://greaves.store/">
                  <FontAwesomeIcon
                    className="footer-icon social twitter"
                    icon={faTwitter}
                  />
                </a>
              </span>
              <span className="footer-social">
                <a href="https://greaves.store/">
                  <FontAwesomeIcon
                    className="footer-icon social snapchat"
                    icon={faSnapchat}
                  />
                </a>
              </span>
              <span className="footer-social">
                <a href="https://greaves.store/">
                  <FontAwesomeIcon
                    className="footer-icon social tiktok"
                    icon={faTiktok}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-signature">
        <p>
          Greaves is a fictional brand created by{" "}
          <a href="https://lochlannoneill.com/">Lochlann O Neill</a> for
          educational purposes only.
        </p>
        <p>
          Find the source code to this website in my{" "}
          <a href="https://github.com/lochlannoneill/greaves">
            GitHub repository
          </a>
          .
        </p>
        <p>
          <a href="https://lochlannoneill.com/">Lochlann O Neill</a> • 2024
        </p>
      </div>
    </footer>
  );
};
