/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react'
import HorizontalScroll from 'react-scroll-horizontal'
import { BrowserView, MobileView } from 'react-device-detect';
import { SRLWrapper } from "simple-react-lightbox";
import ImageService from "../../utils/ImageService" 
import { collection, query, orderBy } from "firebase/firestore"; 
import {  db } from '../../firebase'

const options = {
  thumbnails: {
      showThumbnails: true
  }
}

function FineArt() {

  const [images, setImages] = useState([])

    useEffect(() => {
        getPortraiture();
    }, [])

    const getPortraiture = async() => {
        
        const data = await ImageService.getAllImages(query(collection(db, "fineArt"),orderBy("timeStamp", "desc")), (snapshot) => {
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
                <div className="heading"><div className="text">FineArt</div></div>
                <div className="scroll">scroll →</div>
                <div className="image-wrapper">
                {images.map((doc, id) => {
                    return (
                      <div className="image-container" key={doc.id}>
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
        <div className="heading"><div className="text">Fine Art</div></div>
        <div className="scroll">scroll →</div>
        <div className="image-wrapper">

             <HorizontalScroll config={{ stiffness: 137, damping: 14 }} pageLock={true} reverseScroll={true} style={{height: "100%", width: "100%"}}>
            
            {images.map((doc, id) => {
                    return ( 
                    <a href={doc.imageURL} className="image-container" key={doc.id}>
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

export default FineArt