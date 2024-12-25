import React, { useState, useEffect } from 'react';
import './Auction.css'
import img_1 from './../assets/1.jpg';

const LiveAuction = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
    // Function to calculate the remaining time
    function calculateTimeLeft() {
      const auctionEndTime = new Date('2024-12-31T23:59:59'); // Set your auction end date and time here
      const now = new Date();
      const difference = auctionEndTime - now;
  
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
        };
      } else {
        return null; // Time is up
      }
    }
  
    // Update the countdown every second
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(timer); // Cleanup on component unmount
    }, []);
  
    // Format the countdown for display
    const renderCountdown = () => {
      if (!timeLeft) {
        return <span>Time's up!</span>;
      }
  
      const { days, hours, minutes } = timeLeft;
      return (
        <span>
          {days}d {hours}h {minutes}m
        </span>
      );
    };
  
  
    return (
      <>
          <div className='title-one'>
              <h2>Live Auctions</h2>
          </div>
  
        <div className="card-container">
  
          
  
  
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
  
  
  
  
  
  
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div><div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div><div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          <div className="card">
              <img src={img_1} alt=''/>
              
              <div className="bide">
                  <div className="bide-title">
                      <h3>Time left:  {renderCountdown()} </h3>
                  </div>
              </div>
              <div className="card-content">
                  <h3>Nissan juke 2010</h3>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisi</p>
                  <button type="button" className='btn'>Submit Bid</button>
              </div>
          </div>
          
  
  
  
  
  
  
  
          
        </div>
  
        </>
    )
  }


export default LiveAuction
