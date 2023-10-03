import React from 'react'
import './Power.css'
import mark from '../Images/mark.png'
import engine from '../Images/engine1.svg'
import engine2 from '../Images/engine2.svg'
import engine3 from '../Images/engine3.svg'
import engine4 from '../Images/engine4.svg'


function Power() {
  return (
    <div className='power'>
        <div className='custom-header'>
            <div className='header-title'>
                <h1>POWER DOES MATTER</h1>
            </div>
            <p>At the heart of every Mustang
                 is a high-powered engine. 
                 Mustang offers four available 
                 engines, including the 5.2L
                  supercharged V8.</p>
        </div>
        <div className='power-container'>
            <div className='power-border'> 
                <div className='power-right'>
                    <h3>ExhoBoost®</h3>
                    <p>It’s a first Ecoboost® 
                        engine powered by Ford 
                        Performance and it’s not 
                        afraid to prove it. The 2.3L 
                        high-performance engine 
                        differentiates itself with a 
                        slightly larger twin-scroll turbo 
                        compressor.</p>
                    <div className='mark'><img src={mark} alt="" /><p>310 horsepower</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>350 lb.-ft. of torque*</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>Turbocharging and direct injection</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>Twin independent variable camshaft timing (Ti-VCT)</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>Twin independent variable camshaft timing (Ti-VCT)</p></div>

                </div>
                <div className='engine'>
                    <img src={engine} alt="" />
                </div>
            </div>

            <div className='power-border'> 
                <div className='engine'>
                    <img src={engine2} alt="" />
                </div>
                <div className='power-right'>
                    <h3>GT</h3>
                    <p>5.0L Ti-VCT V8 An engine that comes standard with a hit of adrenaline.</p>
                    <div className='mark'><img src={mark} alt="" /><p>460 horsepower</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>420 lb.-ft. of tire-squealing torque*</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>Port fuel direct injection</p></div>

                </div>
            </div>

            <div className='power-border'> 
                <div className='power-right'>
                    <h3>Mach 1</h3>
                    <p>5.0L Tri-VCT V8 The pinnacle of 5-liter performance, this engine is uniquely tuned andcalibrated for speed, And with the Mach 1 Handling Package.</p>
                    <div className='mark'><img src={mark} alt="" /><p>480 horsepower at 7,000 rpm</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>420 lb.-ft. of torque* at 4,600rpm</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>Two side heat exchanges for track endurance</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>6-speed manual transmission with rev-matching</p></div>
                   

                </div>
                <div className='engine'>
                    <img src={engine3} alt="" />
                </div>
            </div>

            <div className='power-border'> 
                <div className='engine'>
                    <img src={engine4} alt="" />
                </div>
                <div className='power-right'>
                    <h3>Shelby® GT500®</h3>
                    <p>5.2L supercharged cross=plane crank V8. Top-of-the-line power that you can feel.</p>
                    <div className='mark'><img src={mark} alt="" /><p>760 horsepower</p></div>
                    <div className='mark'><img src={mark} alt="" /><p>625 lb.-ft. of torque*</p></div>
                    <div className='mark'><p>Standard on the Shelby GT500</p></div>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Power