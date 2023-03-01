import React from "react";

const IceCream = (props) => {
  return (
    <svg
    className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={props.fill}
    >
      <line
        x1="14.1358"
        y1="0.687684"
        x2="0.725998"
        y2="14.8449"
        stroke={props.fill}
        strokeWidth="2"
      />
      <line
        x1="13.8533"
        y1="0.0315002"
        x2="14.0968"
        y2="13.0292"
        stroke={props.fill}
        strokeWidth="2"
      />
      <line
        x1="14.8535"
        y1="1.05023"
        x2="1.85348"
        y2="1.05023"
        stroke={props.fill}
        strokeWidth="2"
      />
    </svg>
  );
};

export default IceCream;
