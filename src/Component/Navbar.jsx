import React from 'react'
import './Navbar.css'
import ford from '../Images/logo.svg'

function Navbar() {
  return (
    < nav>
        <div className='logo'>
            <img src={ford} alt="" />
        </div>
        <div className='nav-pages'>
            <a href=""><p>HOME</p></a>
            <a href=""><p>SUV</p></a>
            <a href=""><p>TRUCKS</p></a>
            <a href=""><p>ELECTRIFIED</p></a>
            <a href=""><p>ALL VEHICLES</p></a>
        </div>
        <div className='signup-btn'>
            <button>Sign In</button>
            <button>Sign Up</button>

        </div>
    </nav>
  )
}
export default Navbar