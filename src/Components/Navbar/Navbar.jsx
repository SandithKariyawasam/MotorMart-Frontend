import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='nav'>
        <img src={logo} alt='' className='logo'/>
        <ul>
            <li>Auctions
                <ul className='dropdown'>
                    <li>Live Auction</li>
                    <li>Featured Auction</li>
                    <li>Past Result</li>
                </ul>
            </li>
            <li>Sell a vehicle</li>
            <li>Help Center</li>
            <li>News</li>
        </ul>
        <ul>
            <li><button type="button" className='btn'>Sign In</button></li>
            <li><button type="button" className='btn'>Sign Up</button></li>
        </ul>
    </nav>
  )
}

export default Navbar
