import ServicesCard from "@/components/Services/ServicesCard";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useReducer, useState } from "react";
import { db, storage } from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import classes from "../styles/busniess.module.scss";
import { busniessReducer } from "@/Reducer/addBusniess";
import { INITIAL_STATE } from "@/Reducer/addBusniess";
import { options } from "../lib/getData";

const formatFileSize = function (bytes) {
  const sufixes = ["B", "kB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};

const AddYourBusniess = () => {
  const [state, dispatch] = useReducer(busniessReducer, INITIAL_STATE);

  const { name, phone, location, category, imgSize, imgSrc, imgName, file } =
    state;

  const fileHandeler = (event) => {
    event.preventDefault();
    const reader = new FileReader();

    if (event.target.files.length !== 0) {
      reader.readAsDataURL(event.target.files[0]);

      dispatch({ type: "IMG-SIZE", payload: event.target.files[0].size });
      dispatch({ type: "IMG-NAME", payload: event.target.files[0].name });

      console.log(event.target.files[0].size);
      // console.log(imgName);
      // console.log(imgSize);

      let imageSIZE = event.target.files[0].size;

      reader.onload = (event) => {
        const image = new Image();
        image.src = event.target.result;
        dispatch({ type: "IMG-SRC", payload: image.src });

        image.onload = () => {
          const { height, width } = image;

          // console.log(`Height: ${height}\n width: ${width}`);

          if (width === 384 || height === 216) {
            if ((imageSIZE / 1023).toFixed(2) <= 100) {
              console.log("IMAGE IS OK");
            } else {
              //----ERROR
              const fileSize = formatFileSize(imageSIZE);
              console.log(`invalid image size, your image size is ${fileSize}`);
            }
          } else {
            // ----ERROR
            console.log("invalid image dimensions");
          }
        };
      };
    }
  };

  // addMap();

  return (
    <section className={classes.container}>
      <ServicesCard
        key={"name"}
        name={"NAME GOES HERE"}
        src={imgSrc}
        id={"name"}
        back={"white"}
        href={``}
        phone={"6267722022"}
        location={""}
      />

      <form action="#">
        <label htmlFor="picture">Choose Display Picture</label>
        <input onChange={fileHandeler} id="picture" type="file" required />
        <input type="text" minLength="3" maxLength="17" />
        <input type="text" minLength="5" />
        <input type="number" minLength="10" maxLength="15" />

        <select name="category" id="category" required>
          <option value="Religious">Religious</option>
          <option value="HealthCare">Health Care</option>
          <option value="Banks">Banks</option>
          <option value="Education">Education</option>
          <option value="Emergency">Emergency</option>
          <option value="Hotels">Hotels</option>
          <option value="FoodCafe">Food & Cafe</option>
          <option value="Tourist">Tourist</option>
          <option value="Theatres">Theatres</option>
          <option value="Supermarkets">Super Markets</option>
          <option value="Electronics">Electronics</option>
          <option value="Garments">Garments</option>
          <option value="Salons">Salons</option>
        </select>

        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default AddYourBusniess;

//---------------------uploadImage logic:

// if ((event.target.files[0].size / 1023).toFixed(2) <= 100) {
//   const storageRef = ref(storage, `${event.target.files[0].name}`);

//   const uploadTask = uploadBytesResumable(
//     storageRef,
//     event.target.files[0]
//   );
//   uploadTask.on(
//     "state_changed",
//     (snapshot) => {
//       const progress =
//         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//       console.log("Upload is " + progress + "% done");
//     },
//     (error) => {
//       // Handle unsuccessful uploads
//     },
//     () => {
//       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//         console.log(downloadURL);
//       });
//     }
//   );
// }

// ------------------append data to Array in firestore logic

// const addMap = async () => {
//   const washingtonRef = doc(db, "test", "test");

//   await updateDoc(washingtonRef, {
//     array: arrayUnion({ name: "GREATER2", id: "greater2" }),
//   });
// };
