import React from 'react'
import './Footer2.css'
import car from '../Images/blackcar.svg';
function Footer2() {
  return (
    <div>
        <div className='footer2'>
                <div className='footer2-content'>
                    <h3>Quality means doing it right 
                        when no one is looking</h3>
                    <p>Our dealership takes your 
                        privacy seriously and is 
                        committed to safeguarding 
                        your privacy online. Because 
                        we do gather certain types 
                        of information from you.</p>
                    <button>Contact For Queries</button>
                </div>
                <div className='black-car'>
                    <img src={car} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Footer2