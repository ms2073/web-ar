import React from 'react'
import './Reset.css';
import logo from '../limg/imagine.png';

function Reset() {
  return (
    <div className='reset'>
        
          <img className='think' src={logo} alt="" />
          <h1>Reset Password</h1>
          <p className='about'>Enter your email and a verification code will be sent to your email to reset the password </p>
          <input className='email' type="email" placeholder='Enter your email id'/>
          <button className='send'>Send</button>
        
    </div>
  )
}

export default Reset