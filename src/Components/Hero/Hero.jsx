import React, { useState, useEffect } from 'react';
import './Hero.css';
import img_1 from '../../assets/1.jpg';
import img_2 from '../../assets/2.jpg';
import img_3 from '../../assets/3.jpg';
import img_4 from '../../assets/4.jpg';
import img_5 from '../../assets/5.jpg';

const Hero = () => {
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
    <div className='Main-box'>
      <div className="box-one">
        <img src={img_1} alt='' />
        <div className="bid">
          <div className="bid-title">
            <h3>2007 Aston Martin V8 Vantage</h3>
          </div>
          <div className="bid-details">
            <p>
              Time left: {renderCountdown()} <br />
              Bid: $56,000
            </p>
          </div>
        </div>
      </div>
      <div className="box-two">
        <img src={img_2} alt='' />
        <img src={img_3} alt='' />
        <img src={img_4} alt='' />
        <img src={img_5} alt='' />
      </div>
    </div>
  );
};

export default Hero;

