import React from 'react'
import './Helpcenter.css'

const Helpcenter = () => {
  return (
    <>
    <div className='title'>
                <h2>Help Center</h2>
            </div>

    <div className="ap-container">
        <div className="form-container">
        <form className="form">
            <div className="form-group">
            <label for="email">Email</label>
            <input type="text" id="email" name="email" required=""/>
            </div>
            <div className="form-group">
            <label for="textarea">How Can We Help You?</label>
            <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
            </div>
            <button className="form-submit-btn" type="submit">Submit</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default Helpcenter
