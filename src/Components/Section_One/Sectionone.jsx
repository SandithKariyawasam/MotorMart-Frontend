import React from 'react'
import './Sectionone.css'
import vehicle from '../../assets/sell-car__bg.1716972009.jpg'

const Sectionone = () => {
  return (
        <div class="auction-section">
          <div class="auction-header">
            <h1>Welcome To Car Auction Best Platform</h1>
            <p>
              Middleton in objection discovery as agreeable. Edward thrown dinin.
              Nulla sem porta ullamcorper orci, scelerisque ullamcorper vitae.
            </p>
            <button class="auction-btn">All Auction</button>
          </div>
          
          <div class="wrapper">
              <div class="contai">
                <input type="radio" name="slide" id="c1" checked/>
                <label for="c1" class="card">
                  <div class="row">
                    <div class="icon">1</div>
                    <div class="description">
                      <h4>Winter</h4>
                      <p>Winter has so much to offer - creative activities</p>
                    </div>
                  </div>
                </label>
          
                <input type="radio" name="slide" id="c2"/>
                <label for="c2" class="card">
                  <div class="row">
                    <div class="icon">2</div>
                    <div class="description">
                      <h4>Digital Technology</h4>
                      <p>Gets better every day - stay tunned</p>
                    </div>
                  </div>
                </label>
          
                <input type="radio" name="slide" id="c3"/>
                <label for="c3" class="card">
                  <div class="row">
                    <div class="icon">3</div>
                    <div class="description">
                      <h4>Globalization</h4>
                      <p>Help people all over the world</p>
                    </div>
                  </div>
                </label>
          
                <input type="radio" name="slide" id="c4"/>
                <label for="c4" class="card">
                  <div class="row">
                    <div class="icon">4</div>
                    <div class="description">
                      <h4>New technologies</h4>
                      <p>Space engineering becomes more and more advanced</p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

        </div>
  )
}

export default Sectionone

