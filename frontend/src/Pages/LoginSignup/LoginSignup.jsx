import React, { useEffect } from "react";
import "./LoginSignup.css";

export const LoginSignup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Create Your Account</h1>
        <p className="loginsignup-subtitle">
          Join us and get access to exclusive offers and content.
        </p>
        <div className="loginsignup-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="loginsignup-agree">
            <input className="checkbox" type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>
          {/* Add Error Message Below If Needed */}
          {/* <p className="loginsignup-error">Error message</p> */}
          <button className="loginsignup-btn">Sign Up</button>
          <div className="loginsignup-login">
            <p className="loginsignup-login-text">Already have an account?</p>
            <p className="loginsignup-login-link">Login Here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
