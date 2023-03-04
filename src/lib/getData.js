import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export async function getData(collection, document) {
  try {
    const docRef = doc(db, collection, document);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        Error: false,
        Data: docSnap.data(),
      };
    }
    throw new Error("Error Fetching Data");
  } catch (error) {
    return {
      Error: true,
      ErrorMsg: error.message,
    };
  }
}
