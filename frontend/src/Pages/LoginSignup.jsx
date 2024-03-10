import React from 'react'
import { useEffect } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
}, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <div className="loginsignup-agree">
            <input className="checkbox" type="checkbox" name='' id=''/>
            <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span></p>
          </div>
          <p className="loginsignup-error">Error message</p>
          <div className="signup-buttons">
            <button>Sign Up</button>
            {/* <button>Log In</button> */}
          </div>
          <div className="loginsignup-login">
            <p className="loginsignup-login-text">Already have an account?</p>
            <p className="loginsignup-login-link">Login Here</p>
          </div>
        </div>
      </div>
    </div>
  )
}
