import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Hero from './Home/Hero/Hero'
import Auction from './Home/Auction/Auction'
import Footer from './Components/Footer/Footer'
import About from './About/About'
import Live from './Auction/LiveAuction'
import Featured from './Auction/FeaturedAuction'
import Past from './Auction/PastAuction'
import Sell from './Sellvehicle/Sellvehicle'
import Help from './Helpcenter/Helpcenter'
import News from './News/News'
import Login from './Login&signup/Login'
import Signup from './Login&signup/Signup'

const App = () => {
  const location = useLocation()
  
  // Hide footer on login & signup routes
  const hideFooter = location.pathname === '/Signin' || location.pathname === '/Signup'

  return (
    <>
      <div className="container">
        <Navbar/>
        
        <Routes>
          <Route path='/' element={
            <>
              <Hero />
              <Auction />
            </>
          } />
          <Route path='/about' element={<About />}/>
          <Route path='/Live' element={<Live />}/>
          <Route path='/Featured' element={<Featured />}/>
          <Route path='/Past' element={<Past />}/>
          <Route path='/Sell' element={<Sell />}/>
          <Route path='/Help' element={<Help />}/>
          <Route path='/News' element={<News />}/>
          <Route path='/Signin' element={<Login />}/>
          <Route path='/Signup' element={<Signup />}/>
        </Routes>
      </div>

      {!hideFooter && <Footer />}  
    </>
  )
}

export default App


