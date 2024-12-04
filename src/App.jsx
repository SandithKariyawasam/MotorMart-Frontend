import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Auction from './Components/Auction/Auction'
import Footer from './Components/Footer/Footer'

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

