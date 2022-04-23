import React from 'react'
import image2 from "../../Images/fine1.jpg"
import image3 from "../../Images/fine2.jpg"
import image4 from "../../Images/fine3.jpg"
import image5 from "../../Images/fine4.jpg"
import image6 from "../../Images/fine5.jpg"
import HorizontalScroll from 'react-scroll-horizontal'
import { BrowserView, MobileView } from 'react-device-detect';
import { SRLWrapper } from "simple-react-lightbox";
import "./fineArt.scss"



function FineArt() {
  return (
    <>
    <SRLWrapper>

<MobileView>
        <div className="fineArt">
            <div className="container">
                <div className="heading"><div className="text">Fine Art</div></div>
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
                    <div className="image-container">
                        <img src={image6} className="img" alt="" />
                    </div>
                </div>
          </div>
      </div>
    </MobileView>

    <BrowserView>
    
    <div className="fineArt">
    <div className="container">
        <div className="heading"><div className="text">Fine Art</div></div>
        <div className="scroll">scroll →</div>
        <div className="image-wrapper">

             <HorizontalScroll config={{ stiffness: 137, damping: 14 }} pageLock={true} reverseScroll={true} style={{height: "100%", width: "100%"}}>
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
            <a href={image6} className="image-container">
                <img src={image6} className="img" alt="" />
            </a>
            <a href={image6} className="image-container">
                <img src={image6} className="img" alt="" />
            </a>
            <a href={image6} className="image-container">
                <img src={image6} className="img" alt="" />
            </a>
        </HorizontalScroll>
       

            
        </div>
  </div>
</div>

    </BrowserView>

    </SRLWrapper>
    
    </>
  )
}

export default FineArt