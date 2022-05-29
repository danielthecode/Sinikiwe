import React from "react";
import ImageUploading from "react-images-uploading";
import { VscFolderOpened } from "react-icons/vsc";
import { FaTimes } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { storage, db } from "././../../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection } from "firebase/firestore";
import { v4 } from "uuid";
import ImageService from "../../../../utils/ImageService";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import SideNav from "../../SideNav/SideNav";

function UploadWeddings() {
  const [images, setImages] = React.useState([]);
  const [progressP, setProgress] = React.useState(0);
  const maxNumber = 3;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);
    setProgress(0);
  };

  function UploadImage() {
    let newImage = [];

    if (images == 0) {
      toast.warn("Please Select An Image");
      return;
    }

    let uploadPromises = images.map((image) => {
      newImage = image.file;

      const imageRef = ref(storage, `Wedding/${newImage.name + v4()}`);
      const uploadTask = uploadBytesResumable(imageRef, newImage);

      uploadTask.on(
        "state_change",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
          console.log(progress);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            ImageService.addImage(collection(db, "wedding"), downloadURL);
            toast.success("Image Uploaded Successfully");
            setImages(null);
            setProgress("complete");
          });
        }
      );
    });
  }

  return (
    <>
      <SideNav />
      <div className="upload-container">
        <div className="title">Upload Wedding Image</div>
        <div className="conatiner">
          <ImageUploading
            multiple
            value={images}
            onChange={onChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              // write your building UI
              <div className="upload__image-wrapper">
                <div className="controls">
                  <div
                    className="select-button"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <div className="icon">
                      <VscFolderOpened />
                    </div>
                    Click or Drop here
                  </div>
                  <div className="remove-button" onClick={onImageRemoveAll}>
                    <div className="icon">
                      <FaTimes />
                    </div>
                    Remove all images
                  </div>
                  <div className="upload-button" onClick={UploadImage}>
                    <div className="icon">
                      <AiOutlineSend />
                    </div>
                    Upload-Images
                  </div>
                </div>

                <div className="image-container">
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button
                          className="update-btn"
                          onClick={() => onImageUpdate(index)}
                        >
                          Update
                        </button>
                        <button
                          className="remove-btn"
                          onClick={() => onImageRemove(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="progress">
                  <CircularProgressbar
                    value={progressP}
                    text={`${progressP}`}
                    styles={buildStyles({ textSize: "12px" })}
                  />
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default UploadWeddings;
