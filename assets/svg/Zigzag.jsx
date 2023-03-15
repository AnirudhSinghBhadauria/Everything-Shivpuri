import React from "react";

const Zigzag = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="100"
      viewBox="0 0 278 186"
      fill="none"
      className={props.className}
    >
      <path
        d="M19.2817 110.619L86.2437 160.606L106.321 73.5671L177.919 127.032L197.997 39.9552L268.66 93.794"
        stroke="#19223F"
        strokeWidth="28.7888"
        strokeMiterlimit='10'
        />
      <path
        d="M9 95.626L75.962 145.614L96.0393 58.5745L167.637 112.039L187.715 25L258.378 78.8014"
        stroke="#B286FD"
        strokeWidth="28.7888"
        strokeMiterlimit='10'
      />
    </svg>
  );
};

export default Zigzag;
