import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image2 from "../../Images/nature1.jpg"
import image3 from "../../Images/nature2.jpg"
import image4 from "../../Images/nature3.jpg"
import image5 from "../../Images/nature4.jpg"
import image1 from "../../Images/IMG_2330-min.jpg"
import "./nature.scss"
import HorizontalScroll from 'react-scroll-horizontal'
import { BrowserView, MobileView } from 'react-device-detect';
import { SRLWrapper } from "simple-react-lightbox";
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from "lightgallery/plugins/thumbnail";


gsap.registerPlugin(ScrollTrigger);

function Nature() {

  return (
    <>

<MobileView>
        <div className="nature">
            <div className="container">
                <div className="heading"><div className="text">Nature</div></div>
                <div className="scroll">scroll →</div>
                <div className="image-wrapper">
                <LightGallery plugins={[lgZoom, lgVideo, lgThumbnail]} mode="lg-fade">
                    <a href={image2} className="image-container">
                        <img src={image2} className="img" alt="" />
                    </a>
                    <a href={image3} className="image-container">
                        <img src={image3} className="img" alt="" />
                    </a>
                    <a href={image4} className="image-container">
                        <img src={image4} className="img" alt="" />
                    </a>
                    <a href={image5} className="image-container">
                        <img src={image5} className="img" alt="" />
                    </a>
                    </LightGallery>
                </div>
          </div>
      </div>
    </MobileView>

    <BrowserView>
    <div className="nature">
    <div className="container">
        <div className="heading"><div className="text">Nature</div></div>
        <div className="scroll">scroll →</div>
        <div className="image-wrapper">

             <HorizontalScroll config={{ stiffness: 137, damping: 14 }} pageLock={true} reverseScroll={true} style={{height: "100%", width: "100%"}}>
             <LightGallery plugins={[lgZoom, lgVideo, lgThumbnail]} mode="lg-fade">
                    <a href={image2} className="image-container">
                        <img src={image2} className="img" alt="" />
                    </a>
                    <a href={image3} className="image-container">
                        <img src={image3} className="img" alt="" />
                    </a>
                    <a href={image4} className="image-container">
                        <img src={image4} className="img" alt="" />
                    </a>
                    <a href={image5} className="image-container">
                        <img src={image5} className="img" alt="" />
                    </a>
            </LightGallery>
        </HorizontalScroll>
       

            
        </div>
  </div>
</div>
    </BrowserView>

    
    
    </>
  )
}

export default Nature