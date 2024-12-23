import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to='/'><img src={logo} alt='' className='logo'/></Link>
        <ul>
            <li>Auctions
                <ul className='dropdown'>
                    <li><Link to='/Live'>Live Auction</Link></li>
                    <li><Link to='/Featured'> Featured Auction</Link></li>
                    <li><Link to='/Past'> Past Result</Link></li>
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
