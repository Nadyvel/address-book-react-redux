import React from "react";
import "../../../src/scss/Modal.scss";

// Reusable Modal Component. Don't use it directly, it needs a parent component that adds the content and logic
// close() should implement some logic which hides the Modal

const Modal = ({ children, close }) => {
  const handleClose = (e) => {
    try {
      close();
    } catch (error) {}
  };
  return (
    <div className="modal-wrapper">
      <div className="modal-background" onClick={handleClose} />
      <div className="modal-content">
        <button className="modal-btn-close" onClick={handleClose}></button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
