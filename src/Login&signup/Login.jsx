import React from 'react'
import './Login&signup.css'

const Login = () => {
  return (
    <>
      <div className="sign-container">
      <div class="form-box-sign">
        <form class="form-sign">
            <span class="title-sign">Sign in</span>
            <span class="subtitle">Log in to your account.</span>
            <div class="form-container-sign">
              <input type="email" class="input" placeholder="Email"/>
              <input type="password" class="input" placeholder="Password"/>
            </div>
            <button>Sign in</button>
        </form>
        <div class="form-section">
          <p>No account? <a href="">Sign up</a> </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login
