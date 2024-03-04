import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
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
          <div className="signup-buttons">
            <button>Sign Up</button>
            <button>Continue</button>
          </div>
          <p className="loginsignup-login">Already have an account? <span>Login Here</span></p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup