import React from 'react';
import './Sellvehicle.css';

const Sellvehicle = () => {
  return (
    <>
            <div className='title'>
                <h2>Input Details</h2>
            </div>

    <div className="app-container">
      <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label >MAKE</label>
            <input type="text" id="email" name="email" required />
          </div>
          
          <div className="form-group">
            <label >MODEL</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >YEAR OF MANUFACTURE</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >YEAR OF REGISTRATION</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >TRANSMISSION</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >SEATING CAPACITY</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >EXTERIOR COLOUR</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >MILEAGE</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >ENGINE CAPACITY</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >FUEL</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >OWNERS</label>
            <input type="text" id="" name="" required />
          </div>

          <div className="form-group">
            <label >COUNTRY OF ORIGIN</label>
            <input type="text" id="" name="" required />
          </div>

          

          <div className="form-group">
            <label >ADDITIONAL DETAILS</label>
            <textarea name="textarea" id="textarea" rows="10" cols="50" required></textarea>
          </div>
          <button className="form-submit-btn" type="submit">Submit</button>
        </form>
      </div>
    </div>

    </>
  );
};

export default Sellvehicle;

