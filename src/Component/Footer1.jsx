import React from 'react'
import './Footer1.css'
import car from '../Images/orangecar.svg';


function Footer1() {
  return (
    <div className='footer1'>
        <div className='footer1-content'>
            <h3>FordPass. Built to keep you Moving.®</h3>
            <p>FordPass Connect (optional on select 
                vehicles), the FordPass App; and 
                complimentary Connected Service 
                are required for remote features 
                (see FordPass Terms for details). 
                Connected service and features depend 
                on compatible AT&T network 
                availability. Evolving 
                technology/cellular networks/vehicle 
                capability may limit functionality 
                and prevent operation of connected 
                features. Connected service excludes 
                WiFi hotspot.</p>
            <button>Learn More</button>
        </div>
        <div className='orange-car'>
            <img src={car} alt="" />
        </div>
    </div>
  )
}

export default Footer1