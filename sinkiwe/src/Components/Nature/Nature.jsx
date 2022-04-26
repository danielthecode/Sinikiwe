import React, {useState, useEffect} from 'react'
import "./nature.scss"
import HorizontalScroll from 'react-scroll-horizontal'
import { BrowserView, MobileView } from 'react-device-detect';
import ImageService from "../../utils/ImageService" 
import { collection, query, orderBy } from "firebase/firestore"; 
import {  db } from '../../firebase'
// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import lgThumbnail from "lightgallery/plugins/thumbnail";
import AOS from "aos";
import "aos/dist/aos.css";

function Nature() {

    const [images, setImages] = useState([])

    useEffect(() => {
        getPortraiture();
    }, [])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const getPortraiture = async() => {
        
        await ImageService.getAllImages(query(collection(db, "nature"),orderBy("timeStamp", "desc")), (snapshot) => {
            let imagesList = []
            snapshot.docs.forEach((doc) => {
                imagesList.push({...doc.data(), id: doc.id})
                setImages(imagesList)
            })
        })
        
    }

  return (
    <>

<MobileView>
        <div className="nature">
            <div className="container">
                <div className="heading"><div className="text" data-aos="fade-down" data-aos-easing="linear">Nature</div></div>
                <div className="scroll" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500">scroll →</div>
                <div className="image-wrapper">
                <LightGallery plugins={[lgZoom, lgVideo, lgThumbnail]} mode="lg-fade">
                {images.map((doc, id) => {
                    return (
                      <a href={doc.imageURL} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" className="image-container" key={doc.id}>
                        <img src={doc.imageURL} className="img" alt="" />
                    </a>  
                    )
                    })}
                    </LightGallery>
                </div>
          </div>
      </div>
    </MobileView>

    <BrowserView>
    <div className="nature">
    <div className="container">
        <div className="heading"><div className="text"><h4 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500">Nature</h4></div></div>
        <div className="scroll" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="500">scroll →</div>
        <div className="image-wrapper">

             <HorizontalScroll config={{ stiffness: 137, damping: 14 }} pageLock={true} reverseScroll={true} style={{height: "100%", width: "100%"}}>
             <LightGallery plugins={[lgZoom, lgVideo, lgThumbnail]} mode="lg-fade">
             {images.map((doc, id) => {
                    return (
                      <a href={doc.imageURL} className="image-container" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1200" data-aos-delay="500" key={doc.id}>
                        <img src={doc.imageURL} className="img" alt="" />
                    </a>  
                    )
                    })}
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