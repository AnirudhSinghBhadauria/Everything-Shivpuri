import React from "react";

const ES = (props) => {
  return (
    <svg
    className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill={props.fill}
    >
      <rect x="5" width="11" height="5" fill={props.fill} />
      <rect y="6" width="10" height="5" fill={props.fill} />
      <rect
        x="5"
        y="11"
        width="11"
        height="5"
        transform="rotate(-90 5 11)"
        fill={props.fill}
      />
      <rect
        y="17"
        width="11"
        height="5"
        transform="rotate(-90 0 17)"
        fill={props.fill}
      />
    </svg>
  );
};

export default ES;
