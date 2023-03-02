import React from "react";

const ESBACK = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
    >
      <rect width="22" height="23" fill={props.back} />
      <rect x="8" y="3" width="11" height="5" fill={props.fore} />
      <rect x="3" y="9" width="10" height="5" fill={props.fore} />
      <rect
        x="8"
        y="14"
        width="11"
        height="5"
        transform="rotate(-90 8 14)"
        fill={props.fore}
      />
      <rect
        x="3"
        y="20"
        width="11"
        height="5"
        transform="rotate(-90 3 20)"
        fill={props.fore}
      />
      <circle cx="18" cy="19" r="1" fill={props.fore} />
    </svg>
  );
};

export default ESBACK;
