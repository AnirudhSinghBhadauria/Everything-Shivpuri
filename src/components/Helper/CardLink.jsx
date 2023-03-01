import Link from "next/link";
import React from "react";

const CardLink = (props) => {
  return (
    <div className={props.cardStyles}>
      <Link
        style={props.style}
        aria-label={props.label}
        href={props.href}
        className={props.className}
        target={props.target}
      >
        {props.children}
      </Link>
    </div>
  );
};

export default CardLink;
