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
import Loader from "../Loader"


const options = {
    thumbnails: {
        showThumbnails: true
    }
}

function Potraiture(props) {

    const [images, setImages] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getPortraiture();
    }, [])

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const getPortraiture = async() => {
        
        await ImageService.getAllImages(query(collection(db, "portraiture"),orderBy("timeStamp", "desc")), (snapshot) => {
            let imagesList = []
            snapshot.docs.forEach((doc) => {
                imagesList.push({...doc.data(), id: doc.id})
                setImages(imagesList)
            })
            setTimeout(() => setLoading(false), 4000)
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
                {isLoading ? <Loader/> : images.map((doc, id) => {
                    return (
                      <div className="image-container" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000" key={doc.id}>
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
        <div className="heading"><div className="text"><h4 data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1000" >Portaiture</h4></div></div>
        <div className="scroll" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000"  data-aos-delay="1500">scroll →</div>
        <div className="image-wrapper">

        {isLoading ? <Loader/> : <HorizontalScroll config={{ stiffness: 137, damping: 14 }} pageLock={true} reverseScroll={true} style={{height: "100%", width: "100%"}}>
            
            {images.map((doc, id, index) => {
                    return ( 
                    <a href={doc.imageURL} data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000" data-aos-delay="1100" className="image-container" key={doc.id}>
                    <img src={doc.imageURL} className="img" alt="" />
                    </a>
                    )
            })}
        </HorizontalScroll> }
             
       

            
        </div>
  </div>
</div>

    </BrowserView>
    </SRLWrapper>
    
    
    </>
  )
}

export default Potraiture