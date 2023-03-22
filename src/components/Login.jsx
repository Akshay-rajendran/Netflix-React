import React from 'react'
import '../Login.css'
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Login() {
  return (
    <div className="back-image">
      <div className='Loginblend'>
        <div className='nav'>
          <img className='loginlogo' src="/image/netflix.png" alt="" />
          <div className='bar-rightside'>
            <div className="select-wrapper">
              <LanguageIcon />
              <select name="" className='select'>
                <option value="volvo">English</option>
                <option value="saab">हिन्दी</option>
              </select>
            </div>
            <button className='back'>sign in</button>
          </div>
        </div>
        <h1>Unlimited movies, TV shows and more.</h1>
        <div className='h2'>Watch anywhere. Cancel anytime.</div>
        <div className='h3'>Ready to watch? Enter your email to create or restart your membership.</div>
        <div className='gmail-button'>
          <input type="text" className='gmail' placeholder='Email address' />
          <button className='gohome'>Get started <ArrowForwardIosIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default Login