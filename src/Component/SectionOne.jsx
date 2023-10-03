import React from 'react'
import './SectionOne.css'
import yellow from '../Images/yellow.svg'
import video from '../Images/video.svg'
import future from '../Images/future.png'

function SectionOne() {
  return (
    <div className='SectionOne'>
      <div className='SectionOne-left'>
          <div className='future'>
            <img src={future} alt="" />
          </div>
          <div className='Mustang'>
              <div className='blackOne'>
                  <h6>FORD MUSTANG</h6>
                  <p>2021</p>
              </div>
              <div className='blackOne'></div>
          </div>
          <div className='BuildBtn'>
              <button>Build & Price</button>
              <div className='playVideo'>
                  <img src={video} alt="" />
              </div>
              <p>Watch Video</p>
          </div>
      </div>
      <div className='yellow-car'>
          <div className='under-black'>
            <div className='blackTwo'></div>
            <div className='blackTwo'></div>
          </div>
          <img src={yellow} alt="" />
      </div>
    </div>
  )
}

export default SectionOne