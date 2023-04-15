import React, { useEffect, useState, useRef, useContext } from "react";
import { createPortal } from "react-dom";
import Close from "assets/svg/Close";
import classes from "./style/modal.module.scss";
import { RegularMedium } from "assets/Fonts/fonts";
import Spinner from "assets/svg/Spinner";
import { appContext } from "store/AppContextProvider";

const ModalStructure = (props) => {
  let theme;
  const { message, status } = props;
  const { messageHandeler } = useContext(appContext);

  if (status === "success") {
    theme = classes.success;
  } else if (status === "loading") {
    theme = classes.loading;
  } else {
    theme = classes.error;
  }

  const modalCloseHandeler = () => messageHandeler({ value: "", status: "" });

  return (
    <section className={`${classes.modalContainer} ${theme}`}>
      <div className={classes.modal}>
        <p className={RegularMedium.className}>{message}</p>
        <button
          name="Modal-Close-Handeler"
          type="button"
          role="button"
          aria-label="close-button"
          onClick={modalCloseHandeler}
          className={classes.close}
        >
          {status === "loading" ? <Spinner /> : <Close />}
        </button>
      </div>
    </section>
  );
};

const Modal = (props) => {
  const ref = useRef();
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#message-modal");
    setModalOpen(true);
  }, []);

  return ref.current && modalOpen
    ? createPortal(
        <ModalStructure message={props.message} status={props.status} />,
        ref.current
      )
    : "";
};

export default Modal;
