import React, { useState } from 'react'
import './Navbar.css'
import ford from '../Images/logo.svg'

function Navbar() {
    
      const[menu, SetMenu] = useState(false)
      const menudrop = ()=>{
        SetMenu(!menu);
      }
  return (
   <div className='navbar'>
      <nav>
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
          <button onClick={menudrop} className='mobile-menu'>=</button>
      </nav>
      <div className={ menu ? "menu1" : 'menu2'}>
              <a href=""><p>HOME</p></a>
              <a href=""><p>SUV</p></a>
              <a href=""><p>TRUCKS</p></a>
              <a href=""><p>ELECTRIFIED</p></a>
              <a href=""><p>ALL VEHICLES</p></a>
              <div className='mobile-signup'>
                <button>Sign In</button>
                <button>Sign Up</button>
              </div>
      </div>
   </div>
  )
}
export default Navbar