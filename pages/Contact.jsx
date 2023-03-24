import React, { useContext, useState } from "react";
import classes from "../styles/contact.module.scss";
import { RegularMedium, RegularSemiBold } from "assets/Fonts/fonts";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";
import { appContext } from "store/AppContextProvider";

const Contact = () => {
  const [feedback, setFeedback] = useState("");
  const [disabled, setDisabled] = useState(false);
  const { messageHandeler } = useContext(appContext);

  const changeHandeler = (event) => setFeedback(event.target.value);

  const submitHandeler = async (event) => {
    event.preventDefault();
    setDisabled(true);
    messageHandeler({ status: "loading", value: "Sending..." });

    try {
      const feedRef = doc(db, "Feedback", "Feedback");

      await updateDoc(feedRef, {
        array: arrayUnion(feedback),
      });

      messageHandeler({ status: "success", value: "Success, Thank you." });
      setDisabled(false);
    } catch (error) {
      messageHandeler({ status: "error", value: `${error.code}` });
      setDisabled(false);
    }
  };

  return (
    <section className={classes.contact}>
      <h1 className={`${RegularMedium.className} ${classes.heading}`}>
        <span>CONTACT</span> <br /> OUR TEAM
      </h1>
      <p className={`${RegularSemiBold.className} ${classes.content}`}>
        We'd love to hear from you! Whether you have a question, comment, or
        just want to say hi, we're here to listen. Contact us by filling out the
        form below. Thank you for your interest in Everything Shivpuri. <br />
        <br />
        At Everything Shivpuri, we're committed to providing the best possible
        experience for our visitors. If you have any feedback or suggestions for
        how we can improve our site, we'd love to hear from you. We value your
        input and are always looking for ways to make it better.
        <br />
        <br />
        We believe that open communication is key to building a strong
        relationship with our visitors. If you have any questions or concerns,
        we encourage you to contact us. Our team is dedicated to providing
        excellent customer service and we'll do everything we can to help you.{" "}
        <br />
        <br />
        If you have any questions, concerns, or comments about Everything
        Shivpuri, please feel free to get in touch using form listed below. We
        appreciate your input and look forward to hearing from you! <br />
        <br />
      </p>
      <form onSubmit={submitHandeler}>
        <textarea
          className={RegularSemiBold.className}
          required
          onChange={changeHandeler}
          name="feedback"
          minLength="5"
          id="feedback"
        ></textarea>
        <button disabled={disabled} className={RegularSemiBold.className}>
          Submit
        </button>
      </form>
      <p className={`${RegularSemiBold.className} ${classes.content}`}>
        Thank you for taking the time to contact us. We're always looking for
        ways to improve Everything Shivpuri and make it a better resource for
        everyone interested in Shivpuri. We appreciate your input and look
        forward to hearing from you.
      </p>
    </section>
  );
};

export default Contact;
