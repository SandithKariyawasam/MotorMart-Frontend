import React from 'react'
import './Hero.css'
import img_1 from '../../assets/1.jpg'
import img_2 from '../../assets/2.jpg'
import img_3 from '../../assets/3.jpg'
import img_4 from '../../assets/4.jpg'
import img_5 from '../../assets/5.jpg'

const Hero = () => {
  return (
    <div className='Main-box'>
      <div className="box-one">
        <img src={img_1} alt=''/>
        <h3>2007 Aston Martin V8 Vantage</h3>
      </div>
      <div className="box-two">
        <img src={img_2} alt=''/>
        <img src={img_3} alt=''/>
        <img src={img_4} alt=''/>
        <img src={img_5} alt=''/>
      </div>
    </div>
  )
}

export default Hero
