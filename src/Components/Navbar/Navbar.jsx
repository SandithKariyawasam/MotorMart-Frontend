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
            <li><Link to='/Sell'>Sell a vehicle</Link></li>
            <li><Link to='/Help'>Help Center</Link></li>
            <li><Link to='/News'>News</Link></li>
        </ul>
        <ul>
            <li><button type="button" className='btn'><Link to='/Signin'>Sign In</Link> </button></li>
            <li><button type="button" className='btn'><Link to='/Signup'> Sign Up</Link> </button></li>
        </ul>
    </nav>
  )
}

export default Navbar
