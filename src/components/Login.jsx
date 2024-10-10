import React from 'react'
import './Login.css'
import Button from './Button'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <Header />
      <br />
      <br />
      <div className="login-container">
        <form action="" className='login-form'>
          <h2 className='user-login'>User Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label><br /><br />
            <input type="text" placeholder='Enter your username' className='username' /> <br />
          </div>
          <br />
          <div className="input-group">
            <label htmlFor="Password">Password</label><br /><br />
            <input type="password" className='password' maxLength={15} />
          </div>
          <br />
          <Button title = 'Login' className = 'btn' />
          <p>
          <Link to='/register' className="">Forgot Password</Link>
          </p>
        </form>
      </div>


    </>

  )
}

export default Login
