import React from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image2 from "../../Images/nature1.jpg"
import image3 from "../../Images/nature2.jpg"
import image4 from "../../Images/nature3.jpg"
import image5 from "../../Images/nature4.jpg"
import "./nature.scss"
import HorizontalScroll from 'react-scroll-horizontal'
import { BrowserView, MobileView } from 'react-device-detect';
import { SRLWrapper } from "simple-react-lightbox";

gsap.registerPlugin(ScrollTrigger);

function Nature() {

  return (
    <>

<SRLWrapper>
<MobileView>
        <div className="nature">
            <div className="container">
                <div className="heading"><div className="text">Nature</div></div>
                <div className="image-wrapper">
                    <div className="image-container">
                        <img src={image2} className="img" alt="" />
                    </div>
                    <div className="image-container">
                        <img src={image3} className="img" alt="" />
                    </div>
                    <div className="image-container">
                        <img src={image4} className="img" alt="" />
                    </div>
                    <div className="image-container">
                        <img src={image5} className="img" alt="" />
                    </div>
                </div>
          </div>
      </div>
    </MobileView>

    <BrowserView>
    <div className="nature">
    <div className="container">
        <div className="heading"><div className="text">Nature</div></div>
        <div className="image-wrapper">

             <HorizontalScroll config={{ stiffness: 137, damping: 14 }} pageLock={true} reverseScroll={true} style={{height: "100%", width: "100%"}}>
            <div className="image-container">
                <img src={image2} className="img" alt="" />
            </div>
            <div className="image-container">
                <img src={image3} className="img" alt="" />
            </div>
            <div className="image-container">
                <img src={image4} className="img" alt="" />
            </div>
            <div className="image-container">
                <img src={image5} className="img" alt="" />
            </div>
        </HorizontalScroll>
       

            
        </div>
  </div>
</div>
    </BrowserView>
</SRLWrapper>
    
    
    </>
  )
}

export default Nature