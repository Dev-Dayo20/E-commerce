import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <>
      <div className='header'>
          <nav className='navbar'>
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/login' className="nav-link">Login</Link>
            <Link to='/register' className="nav-link">Register</Link>
          </nav>
      </div>
    </>
    
  )
}

export default Header
