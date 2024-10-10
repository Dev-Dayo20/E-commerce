import React from 'react'
import Button from './Button'
import './Register.css'
import Header from './Header'


function Register() {
  return (
      <>
       {/* <Header /> */}
        <br />
        <br />
        <div className="login-parent">
            <h2 className='user-login'>User Login</h2>
            <input type="text" placeholder='Enter your email' className='email' /> <br />
            <input type="password" className='password' maxLength={8} />
            <br />
            <Button title = 'Register' />
        </div>
    </>

    
  )
}

export default Register
