import ServicesCard from "../components/Services/ServicesCard";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useReducer, useState } from "react";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import classes from "../styles/busniess.module.scss";
import { busniessReducer, INITIAL_STATE } from "../Reducer/addBusniess";
import { options } from "../lib/getData";

const formatFileSize = function (bytes) {
  const sufixes = ["B", "kB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};

const AddYourBusniess = () => {
  const [state, dispatch] = useReducer(busniessReducer, INITIAL_STATE);

  const {
    name,
    phone,
    location,
    category,
    imgSize,
    imgSrc,
    imgStatus,
    imgName,
    file,
    disabled,
  } = state;

  const nameHandeler = (event) =>
    dispatch({ type: "NAME", payload: event.target.value.toUpperCase() });
  const locHandeler = (event) =>
    dispatch({ type: "LOC", payload: event.target.value });
  const phoneHandeler = (event) =>
    dispatch({ type: "PHONE", payload: event.target.value });

  const categoryHandeler = (event) => {
    dispatch({ type: "CAT", payload: event.target.value });

    if (
      category === "Religious" ||
      category === "HealthCare" ||
      category === "Banks" ||
      category === "Education" ||
      category === "Emergency"
    ) {
      dispatch({ type: "BACK", payload: "white" });
      dispatch({ type: "PATH", payload: "Genral" });
    } else if (
      category === "Hotels" ||
      category === "FoodCafe" ||
      category === "Tourist" ||
      category === "Theatres" ||
      category === "Supermarkets"
    ) {
      dispatch({ type: "BACK", payload: "#e1f2fc" });
      dispatch({ type: "PATH", payload: "Tourist" });
    } else {
      dispatch({ type: "BACK", payload: "#edf1d6" });
      dispatch({ type: "PATH", payload: "Essentials" });
    }
  };

  const imageHandeler = (event) => {
    event.preventDefault();
    const reader = new FileReader();

    if (event.target.files.length !== 0) {
      reader.readAsDataURL(event.target.files[0]);

      dispatch({ type: "IMG-NAME", payload: event.target.files[0].name });
      dispatch({ type: "FILE", payload: event.target.files[0] });
      let imageSIZE = event.target.files[0].size;

      reader.onload = (event) => {
        const image = new Image();
        image.src = event.target.result;
        dispatch({ type: "IMG-SRC", payload: image.src });

        image.onload = () => {
          const { height, width } = image;

          if (width === 384 || height === 216) {
            if ((imageSIZE / 1023).toFixed(2) <= 100) {
              console.log("IMAGE IS OK");
              dispatch({ type: "IMG-STATUS", payload: true });
            } else {
              //----ERROR
              const fileSize = formatFileSize(imageSIZE);
              console.log(`invalid image size, your image size is ${fileSize}`);
            }
          } else {
            // ----ERROR
            console.log(
              `invalid image dimensions, Your image dimensions are ${width} X ${height}`
            );
          }
        };
      };
    }
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    let URL;

    if (name === "NAME GOES HERE" || name.trim("").length < 3) {
      //----ERROR
      return;
    } else if (
      phone === "PHONE NUMEBR OF BUSNIESS" ||
      phone.trim("").length < 10 ||
      phone.trim("").length > 15
    ) {
      //----ERROR
      return;
    } else if (location === "") {
      // ----ERROR
      return;
    } else if (category === "default") {
      // ----ERROR
      return;
    }

    console.log({
      name: name,
      location: location,
      phone: phone,
      category: category,
      imgName: imgName,
      // file: file,
    });
  };

  name === "" && dispatch({ type: "NAME", payload: "NAME GOES HERE" });
  // imgSrc === "" && dispatch({ type: "IMG-SRC", payload: "" });

  return (
    <section className={classes.container}>
      <ServicesCard
        name={name}
        src={imgSrc}
        id={name}
        back={"white"}
        href={``}
        phone={phone}
        location={location}
      />

      <form onSubmit={submitHandeler}>
        <label htmlFor="picture">Choose Display Picture</label>
        <input onChange={imageHandeler} id="picture" type="file" required />

        <input onChange={nameHandeler} type="text" maxLength="17" required />
        <input onChange={locHandeler} type="text" minLength="20" required />
        <input onChange={phoneHandeler} type="text" maxLength="15" required />

        <select
          onChange={categoryHandeler}
          name="category"
          id="category"
          required
        >
          {options.map(({ value, input }) => (
            <option key={value} value={value}>
              {input}
            </option>
          ))}
        </select>

        <button disabled={!imgStatus} type="submit">
          submit
        </button>
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
