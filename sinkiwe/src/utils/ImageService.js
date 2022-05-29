import { storage } from "../firebase";
import {
  onSnapshot,
  addDoc,
  updateDoc,
  getDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

class ImageService {
  addImage = (collection, newPortraiture) => {
    return addDoc(collection, {
      imageURL: newPortraiture,
      timeStamp: serverTimestamp(),
    });
  };

  updateImage = (id, collection, updatedImage) => {
    const portraitureDoc = doc(
      // db, "portraiture"
      collection,
      id
    );

    return updateDoc(portraitureDoc, updateDoc);
  };

  deleteImage = (id, collection, url) => {
    const portraitureDoc = doc(
      // db, "portraiture"
      collection,
      id
    );

    let pictureRef = ref(storage, url);
    deleteObject(pictureRef)
      .then(() => {
        console.log("File deleted");
      })
      .catch((err) => {
        console.log(err);
      });
    return deleteDoc(portraitureDoc);
  };

  getAllImages = (collection, snapshot) => {
    return onSnapshot(collection, snapshot);

    // return getDocs(collection)
  };

  getImage = (id, collection) => {
    const portraitureDoc = doc(
      // db, "portraiture"
      collection,
      id
    );
    return getDoc(portraitureDoc);
  };
}

export default new ImageService();
