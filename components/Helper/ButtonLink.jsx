import React from "react";
import Link from "next/link";

const ButtonLink = (props) => {
  return (
    <button className="button-help" type={props.type}>
      <Link
        className={`helper-link ${props.className}`}
        href={props.href}
        aria-label={props.label}
        target={props.target}
        onClick={props.onClick}
      >
        {props.children}
      </Link>
    </button>
  );
};

export default ButtonLink;
