import { RegularBold } from "../../assets/Fonts/fonts";
import React, { useState } from "react";

const CopyButton = (props) => {
  const { phone } = props;
  const [Message, setMessage] = useState("COPY PHONE");

  const copiedHandeler = async () => {
    try {
      await navigator.clipboard.writeText(phone);
      setMessage("COPIED!");

      setTimeout(() => {
        const unsub = setMessage("COPY PHONE");

        return unsub;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      className={`${props.className} ${RegularBold.className}`}
      onClick={copiedHandeler}
    >
      {Message}
    </button>
  );
};

export default CopyButton;
