import React from 'react'
import "./protraiture.scss"
import image2 from "../../Images/IMG_2616-min.jpg"
import image3 from "../../Images/IMG_23302-min.jpg"
import image4 from "../../Images/5-min.jpg"
import image5 from "../../Images/IMG_0886-min.jpg"
import HorizontalScroll from 'react-scroll-horizontal'
import { BrowserView, MobileView } from 'react-device-detect';
import { SRLWrapper } from "simple-react-lightbox";


const options = {
    thumbnails: {
        showThumbnails: false
    }
}

function Potraiture(props) {


  return (
<>
<SRLWrapper>
<MobileView>
        <div className="portraiture">
            <div className="container">
                <div className="heading"><div className="text">Portraiture</div></div>
                <div className="scroll">scroll →</div>
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
<div className="portraiture">
    <div className="container">
        <div className="heading"><div className="text">Portaiture</div></div>
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
        </HorizontalScroll>
       

            
        </div>
  </div>
</div>

    </BrowserView>
    </SRLWrapper>
    
    
    </>
  )
}

export default Potraiture