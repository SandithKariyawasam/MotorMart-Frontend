import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Auction from './Components/Auction/Auction'

const App = () => {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      <Auction/>
    </div>
  )
}

export default App

