import React from 'react'
import './Login&signup.css'

const Signup = () => {
  return (
    <div className="sign-container">
      <div class="form-box-sign">
        <form class="form-sign">
            <span class="title-sign">Sign up</span>
            <span class="subtitle">Create a free account with your email.</span>
            <div class="form-container-sign">
              <input type="text" class="input" placeholder="Full Name"/>
              <input type="email" class="input" placeholder="Email"/>
              <input type="password" class="input" placeholder="Password"/>
              <input type="password" class="input" placeholder="Confirm Password"/>
            </div>
            <button>Sign up</button>
        </form>
        <div class="form-section">
          <p>Have an account? <a href="">Sign in</a> </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
