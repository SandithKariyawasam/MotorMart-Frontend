import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import user from '../../assets/man.png'

const Header = () => {
  return (
    <>
    <nav className='container navbar'>

      <img src={logo} alt className='logo'/>

        <ul class="menu">
          <li class="menu-item">
            <a href="#">Home</a>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Auction</a>
            <ul class="submenu">
              <li><a href="#">Auction</a></li>
              <li><a href="#">Auction Details</a></li>
            </ul>
          </li>
          <li class="menu-item dropdown">
            <a href="#">Pages</a>
            <ul class="submenu">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#">Blog</a>
          </li>
          <li class="menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>

      
          
      <input placeholder="Searth your items..." type="text" name="text" class="input"/>
          
        <ul>
              <li class="has-child-menu">
                  <img src={user} alt className='user'/>
                  {/*<ul class="sub-menu">
                      <li class="dropdown-item"><a href="login.html">My account</a></li>
                      <li class="dropdown-item"><a href="register.html">Settings</a></li>
                      <li class="dropdown-item"><a href="login.html">Login</a></li>
                      <li class="dropdown-item"><a href="register.html">Register</a></li>
                  </ul>*/}
              </li>
      </ul>
    </nav>             
    </>
  )
}

export default Header
