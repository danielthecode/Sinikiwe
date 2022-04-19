import React from 'react';
import "./home.scss";
import Image from "../../Images/Hero_image.png";


function Home() {
  return (
    <div className='container'>
            <div className='hero-image'><img src={Image} className="img" alt="" /></div>
            <div className="heading">
              SINIKIWE
              <div className="sub-heading">photographer</div>
            </div>
            
    </div>
    
  )
}

export default Home