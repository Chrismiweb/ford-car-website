import React, { useState } from 'react';
import './PhotoSlider.css';
import car1 from '../Images/red.png';
import car2 from '../Images/yellow.png';
import car3 from '../Images/orange.png';
import car4 from '../Images/white.png';
import car5 from '../Images/blue.png';
import car6 from '../Images/black.png';
import rightArrow from '../Images/right.png';
import leftarrow from '../Images/left.png';
import interior1 from '../Images/interior1.svg';
import interior2 from '../Images/interior2.svg';
import interior3 from '../Images/interior3.svg';
import interior4 from '../Images/interior4.svg';
import interior5 from '../Images/interior5.svg';
import interior6 from '../Images/interior6.svg';


// Define an array of image URLs


function PhotoSlider() {
    const allImages = [
        car6,
        car1,
        car2,
        car3,
        car4,
        car5,
        
      ];

  const[empty, Setempty] = useState(0);

  const prev = ()=>{
    Setempty((chris)=>
        chris > 0 ? chris - 1 : allImages.length - 1
    );
  };

  const next = ()=>{
    Setempty((chris)=>
        chris < allImages.length - 1 ? chris + 1 : 0
    );
  }
  return (
    <div className="slider">
      <h2>CAR COLLECTIONW</h2>
      <div className="slider-image">
            <div className='arrow'>
                <img src={leftarrow} alt="" onClick={prev}/>
            </div>      
            <div className="car-slide">
                <img src={allImages[empty]} alt=''/>
            </div>
            <div className='arrow'>
                <img src={rightArrow} alt="" onClick={next}/>
            </div> 
      </div>
      <div className='interior'>
            <img src={interior1} alt="" />
            <img src={interior2} alt="" />
            <img src={interior3} alt="" />
            <img src={interior4} alt="" />
            <img src={interior5} alt="" />
            <img src={interior6} alt="" />

      </div>
    </div>
  );
}

export default PhotoSlider;
