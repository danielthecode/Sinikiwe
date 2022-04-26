import React, {useEffect} from 'react';
import "./home.scss";
import Image from "../../Images/Hero_image.png";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="home">
      <div className='container'>
            <div className='hero-image'><img src={Image} className="img" alt="" /></div>
            <div className="heading">
              <h4 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100">SINIKIWE</h4>
              <div className="sub-heading"><h5 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100">hotographer</h5></div>
            </div>
            
    </div>
    </div>
    
    
  )
}

export default Home