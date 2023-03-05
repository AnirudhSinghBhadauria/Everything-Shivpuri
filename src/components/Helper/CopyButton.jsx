import { RegularBold } from "@/assets/Fonts/fonts";
import React from "react";

const CopyButton = (props) => {
  const { phone } = props;

  const copyHandeler = async () => {
    try {
      await navigator.clipboard.writeText(phone);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <button
      className={`${props.className} ${RegularBold.className}`}
      onClick={copyHandeler}
    >
      COPY PHONE
    </button>
  );
};

export default CopyButton;
