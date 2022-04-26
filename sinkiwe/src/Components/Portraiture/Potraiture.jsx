/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import "./protraiture.scss"
import HorizontalScroll from 'react-scroll-horizontal'
import { BrowserView, MobileView } from 'react-device-detect';
import { SRLWrapper } from "simple-react-lightbox";
import ImageService from "../../utils/ImageService"
import {  db } from '../../firebase'
import { collection, query, orderBy } from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";


const options = {
    thumbnails: {
        showThumbnails: true
    }
}

function Potraiture(props) {

    const [images, setImages] = useState([])

    useEffect(() => {
        getPortraiture();
    }, [])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const getPortraiture = async() => {
        
        const data = await ImageService.getAllImages(query(collection(db, "portraiture"),orderBy("timeStamp", "desc")), (snapshot) => {
            let imagesList = []
            snapshot.docs.forEach((doc) => {
                imagesList.push({...doc.data(), id: doc.id})
                setImages(imagesList)
            })
            console.log(imagesList);
        })
        
    }


  return (
<>
<SRLWrapper options={options}>
<MobileView>
        <div className="portraiture">
            <div className="container">
                <div className="heading"><div className="text" data-aos="fade-down"  data-aos-easing="linear">Portraiture</div></div>
                <div className="scroll">scroll →</div>
                <div className="image-wrapper">
                {images.map((doc, id) => {
                    return (
                      <div className="image-container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" key={doc.id}>
                        <img src={doc.imageURL} className="img" alt="" />
                    </div>  
                    )
                    })}
                </div>
          </div>
      </div>
    </MobileView>

    <BrowserView>
<div className="portraiture">
    <div className="container">
        <div className="heading"><div className="text"><h4 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500" >Portaiture</h4></div></div>
        <div className="scroll" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000"  data-aos-delay="500">scroll →</div>
        <div className="image-wrapper">

             <HorizontalScroll config={{ stiffness: 137, damping: 14 }} pageLock={true} reverseScroll={true} style={{height: "100%", width: "100%"}}>
            
            {images.map((doc, id, index) => {
                    return ( 
                    <a href={doc.imageURL} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1100" className="image-container" key={doc.id}>
                    <img src={doc.imageURL} className="img" alt="" />
                    </a>
                    )
            })}
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