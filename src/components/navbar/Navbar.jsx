import React from 'react'
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='logo'>
          <span className='text'>RCPIT</span>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>RCPIT Business</span>
          <span>Explore</span>
          <span>Sign in</span>
          <span>Become A seller</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
