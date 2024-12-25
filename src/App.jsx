import React from 'react'
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

import { Routes, Route } from 'react-router-dom'

const App = () => {
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
      </Routes>
    </div>
      <Footer/>
      </>
  )
}

export default App

