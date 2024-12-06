import React from 'react'
import Navbar from './Home/Navbar/Navbar'
import Hero from './Home/Hero/Hero'
import Auction from './Home/Auction/Auction'
import Footer from './Home/Footer/Footer'

const App = () => {
  return (
    <>
    <div className="container">
      <Navbar/>
      <Hero/>
      <Auction/>
    </div>
      <Footer/>
      </>
  )
}

export default App

