import ServicesCard from "../components/Services/ServicesCard";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useReducer, useState } from "react";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import classes from "../styles/busniess.module.scss";
import { busniessReducer, INITIAL_STATE } from "../Reducer/addBusniess";
import { options } from "../lib/getData";
import { appContext } from "store/AppContextProvider";
import { useRouter } from "next/router";
import { es } from "assets/Linkage";
import NoImg from "assets/svg/NoImg";
import Img from "assets/svg/Img";
import { RegularMedium, RegularSemiBold } from "assets/Fonts/fonts";

const formatFileSize = function (bytes) {
  const sufixes = ["B", "kB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;
};

const AddYourBusniess = () => {
  const { push } = useRouter();
  const { messageHandeler } = useContext(appContext);
  const [state, dispatch] = useReducer(busniessReducer, INITIAL_STATE);
  const {
    name,
    phone,
    location,
    category,
    imgSrc,
    imgStatus,
    imgName,
    file,
    disabled,
    curruntPath,
    back,
  } = state;

  const nameHandeler = (event) =>
    dispatch({ type: "NAME", payload: event.target.value.toUpperCase() });
  const locHandeler = (event) =>
    dispatch({ type: "LOC", payload: event.target.value });
  const phoneHandeler = (event) =>
    dispatch({ type: "PHONE", payload: event.target.value });

  const categoryHandeler = (event) => {
    let cat = event.target.value;
    dispatch({ type: "CAT", payload: cat });

    if (
      cat === "default" ||
      cat === "Religious" ||
      cat === "HealthCare" ||
      cat === "Banks" ||
      cat === "Education" ||
      cat === "Emergency"
    ) {
      dispatch({ type: "BACK", payload: "white" });
      dispatch({ type: "PATH", payload: "Genral" });
    } else if (
      cat === "Hotels" ||
      cat === "FoodCafe" ||
      cat === "Tourist" ||
      cat === "Theatres" ||
      cat === "Travel"
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
              dispatch({ type: "IMG-STATUS", payload: true });
              dispatch({ type: "DISS", payload: false });
            } else {
              //----ERROR
              const fileSize = formatFileSize(imageSIZE);
              messageHandeler({
                value: `Invalid image, your image size is ${fileSize}`,
                status: "error",
              });
              dispatch({ type: "DISS", payload: false });

              return;
            }
          } else {
            // ----ERROR
            messageHandeler({
              value: `Invalid image, Your image dimensions are ${width} X ${height}`,
              status: "error",
            });
            dispatch({ type: "DISS", payload: false });

            return;
          }
        };
      };
    }
  };

  const sendDataToBackend = async (data) => {
    const {
      name,
      phone,
      location,
      back,
      imgName,
      file,
      category,
      curruntPath,
    } = data;

    try {
      messageHandeler({ value: "Uploading Image.", status: "loading" });

      const storageRef = ref(storage, `${imgName}`);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          //----ERROR
          messageHandeler({ value: "Image Upload Failed.", status: "error" });
          dispatch({ type: "DISS", payload: false });

          return;
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            let fragmentedData = {
              id: name,
              name: name,
              location: location,
              phone: phone,
              curruntPath: curruntPath,
              img: downloadURL,
              back: back,
            };

            addDataToFirestrore(fragmentedData);
          });
        }
      );
    } catch (error) {
      // ----ERROR
      messageHandeler({ value: "Image Upload Failed.", status: "error" });
      dispatch({ type: "DISS", payload: false });

      return;
    }

    const addDataToFirestrore = async (data) => {
      try {
        messageHandeler({ value: "Sending data.", status: "loading" });

        const imageRef = doc(db, curruntPath, category);
        await updateDoc(imageRef, {
          array: arrayUnion(data),
        });

        push(`/${curruntPath}/${category}`);
        messageHandeler({ value: "Added successfully.", status: "success" });
        dispatch({ type: "DISS", payload: false });
      } catch (error) {
        //----ERROR
        messageHandeler({ value: "Error Sending Data", status: "error" });
        dispatch({ type: "DISS", payload: false });

        return;
      }
    };
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    dispatch({ type: "DISS", payload: true });

    if (name === "NAME GOES HERE" || name.trim("").length < 3) {
      //----ERROR
      messageHandeler({ value: "Name is invalid.", status: "error" });
      dispatch({ type: "DISS", payload: false });

      return;
    } else if (
      phone === "PHONE NUMEBR OF BUSNIESS" ||
      phone.toString().trim("").length < 10 ||
      phone.toString().trim("").length > 15
    ) {
      //----ERROR
      messageHandeler({ value: "Phone number is invalid.", status: "error" });
      dispatch({ type: "DISS", payload: false });

      return;
    } else if (location === "" || location.trim().length < 20) {
      // ----ERROR
      messageHandeler({ value: "Location is invalid.", status: "error" });
      dispatch({ type: "DISS", payload: false });

      return;
    } else if (category === "default" || category === "") {
      // ----ERROR
      messageHandeler({ value: "Select category.", status: "error" });
      dispatch({ type: "DISS", payload: false });

      return;
    }

    let data = {
      name: name,
      location: location,
      phone: phone,
      category: category,
      imgName: imgName,
      curruntPath: curruntPath,
      back: back,
      file: file,
    };

    sendDataToBackend(data);
  };

  name === "" && dispatch({ type: "NAME", payload: "NAME GOES HERE" });
  imgSrc === "" && dispatch({ type: "IMG-SRC", payload: es });

  return (
    <section className={classes.container}>
      <ServicesCard
        name={name}
        src={imgSrc}
        id={name}
        back={back}
        phone={phone}
        location={location}
        href={``}
      />

      <form onSubmit={submitHandeler}>
        <input className={classes.imageInput} onChange={imageHandeler} id="picture" type="file" required />
            
        <div className={RegularMedium.className}>
          <p>Name</p>
          <input
            onChange={nameHandeler}
            type="text"
            maxLength="20"
            required
          />
        </div>

        <div className={RegularMedium.className}>
          <p>Location</p>
          <input onChange={locHandeler} type="text" required />
        </div>

        <div className={RegularMedium.className}>
          <p>Phone</p>
          <input
            onChange={phoneHandeler}
            type="number"
            maxLength="15"
            required
          />
        </div>

        <div className={classes.selectContainer}>
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
          <label htmlFor="picture">
            Choose Image {imgStatus ? <Img /> : <NoImg />}
          </label>
        </div>

        <button className={RegularSemiBold.className} disabled={disabled} type="submit">
          Add Busniess
        </button>
      </form>
    </section>
  );
};

export default AddYourBusniess;
