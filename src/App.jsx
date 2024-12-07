import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Home/Hero/Hero'
import Auction from './Home/Auction/Auction'
import Footer from './Components/Footer/Footer'
import About from './About/About'

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
      </Routes>
    </div>
      <Footer/>
      </>
  )
}

export default App

