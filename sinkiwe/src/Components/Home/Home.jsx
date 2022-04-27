import React, {useEffect, useState} from 'react';
import "./home.scss";
import Image from "../../Images/Hero_image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../Loader"
import DocumentMeta from "react-document-meta";
import MetaTags from 'react-meta-tags';


function Home() {


  const meta = {
    title: "Sinikiwe - Photographer | Home",

    description: "Fast and Reliable Mobile Service, Experienced Technician and Competitive Prices set us apart as the go to for all you car key services",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "car key, car key experts, carkeyexperts, vehicle lockout, car key programming, lost car key, stolen car key, car key cutting, car key repair"
      }
    }
  };

  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    AOS.init();
    AOS.refresh();
    fakeRequest().then(() => {
      setLoading(false)
    })
  }, []);

  const fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
    
  };
  
  

  return (
    <div className="home">
      <MetaTags>
            <title>Sinikiwe | Home</title>
            <meta name="description" content="Portraiture. Nature. Wedding. Fine Art" />
            <meta property="og:title" content="Sinikiew" />
            <meta property="og:image" content="path/to/image.jpg" />
            <meta charset= "utf-8" />
            <meta name="keywords" content="Photographer, Photos, Images, Capture, Weddings, Portraiture, Nature, "/>
          </MetaTags>
      {isLoading ? <Loader/> : <div className='container'>
            <div className='hero-image'><img src={Image} className="img" alt="" /></div>
            <div className="heading">
              <h4 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100">SINIKIWE</h4>
              <div className="sub-heading"><h5 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="100">photographer</h5></div>
            </div>
            
    </div>}
      
    </div>
    
    
  )
}

export default Home