import React, { useState, useEffect } from "react";
import ImageService from "../../../../utils/ImageService";
import { collection, query, orderBy } from "firebase/firestore";
import { db } from "././../../../../firebase";
import SideNav from "../../SideNav/SideNav";

export default function ViewUploadedFineArt() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getPortraiture();
  }, []);

  const getPortraiture = async () => {
    const data = await ImageService.getAllImages(
      query(collection(db, "fineArt"), orderBy("timeStamp", "desc")),
      (snapshot) => {
        let imagesList = [];
        snapshot.docs.forEach((doc) => {
          imagesList.push({ ...doc.data(), id: doc.id });
          setImages(imagesList);
        });
        console.log(imagesList);
      }
    );
  };

  const deleteHandler = async (id, url) => {
    await ImageService.deleteImage(id, collection(db, "fineArt"), url);
    getPortraiture();
  };

  return (
    <>
      <SideNav />
      <div className="image-container">
        <div className="title">Uploaded Fine Art Images</div>
        <div className="image-wrapper">
          {images.map((doc, id) => {
            return (
              <div className="content" key={doc.id}>
                <div className="image">
                  <img src={doc.imageURL} alt="" />
                </div>
                <div className="btn">
                  <button onClick={(e) => deleteHandler(doc.id, doc.imageURL)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
