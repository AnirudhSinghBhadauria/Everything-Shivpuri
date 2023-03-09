import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

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

export const options = [
  {
    value: "default",
    input: "Select Category",
  },
  {
    value: "Religious",
    input: "Religious",
  },
  {
    value: "HealthCare",
    input: "Health Care",
  },
  {
    value: "Banks",
    input: "Banks",
  },
  {
    value: "Education",
    input: "Education",
  },
  {
    value: "Emergency",
    input: "Emergency",
  },
  {
    value: "Hotels",
    input: "Hotels",
  },
  {
    value: "FoodCafe",
    input: "Food & Cafe",
  },
  {
    value: "Tourist",
    input: "Tourist",
  },
  {
    value: "Theatres",
    input: "Theatres",
  },
  {
    value: "Travel",
    input: "Travel",
  },
  {
    value: "Supermarkets",
    input: "Super Markets",
  },
  {
    value: "Electronics",
    input: "Electronics",
  },
  {
    value: "Garments",
    input: "Garments",
  },
  {
    value: "Salons",
    input: "Salons",
  },
];
