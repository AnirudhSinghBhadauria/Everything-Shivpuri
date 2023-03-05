import { RegularBold, RegularMedium } from "@/assets/Fonts/fonts";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import classes from "./style/copy.module.scss";

const CopyModal = (props) => {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#copied");
    setMounted(true);
  }, []);

  return (
    <Fragment>
      {ref.current &&
        mounted &&
        createPortal(
          <p
            className={`${RegularMedium.className} ${classes.modal} ${props.className}`}
          >
            Copied
          </p>,
          ref.current
        )}
    </Fragment>
  );
};

export default CopyModal;
