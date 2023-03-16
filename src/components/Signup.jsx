import React from 'react'
import '../Signup.css'

function Signup() {
    return (
        <>
            <div className='body'>
                <img src="../image/netflix.png" alt="Netflix" />

                <div className='Signup'>
                    <h2>Sign In</h2>
                    <input type="text" className='input' placeholder='email or phone number' /><br />
                    <input type="text" className='input' placeholder='password' /><br />
                    <button className='button'>sign in</button>
                    <div className='checkbox'>
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Remember me</label>
                        </div>
                        <h5>Need help?</h5>
                    </div>
                    <h3>New to Netflix? <a href="" className='signupnow'>Sign up now.</a></h3>
                    <div className='p'>This page is protected by Google reCAPTCHA to</div>
                    <div className='p'>ensure you're not a bot. <a href="">Learn more.</a></div>
                </div>
            </div>
        </>
    )
}

export default Signup