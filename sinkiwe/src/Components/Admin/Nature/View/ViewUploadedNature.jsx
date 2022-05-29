import React, { useState, useEffect } from "react";
import ImageService from "../../../../utils/ImageService";
import { collection, query, orderBy } from "firebase/firestore";
import { db, storage } from "././../../../../firebase";

export default function ViewUploadedNature() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getPortraiture();
  }, []);

  const getPortraiture = async () => {
    const data = await ImageService.getAllImages(
      query(collection(db, "nature"), orderBy("timeStamp", "desc")),
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
    await ImageService.deleteImage(id, collection(db, "nature"), url);
    getPortraiture();
  };

  return (
    <div className="image-container">
      <div className="title">View Nature Images</div>
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
  );
}
