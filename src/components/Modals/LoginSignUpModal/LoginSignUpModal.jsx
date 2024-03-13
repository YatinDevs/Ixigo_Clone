import React from "react";
import { createPortal } from "react-dom";
import "./LoginSignUpModal.css";
import { ImCross } from "react-icons/im";

function LoginSignUpModal({ children, toggleModal }) {
  return createPortal(
    <>
      <div className="backdrop-container"></div>
      <div className="modal-container">
        <button
          className=" absolute w- top-5 right-5 hover:scale-1 bg-gray-100 rounded-2xl p-1 "
          onClick={toggleModal}
        >
          <ImCross />
        </button>
        {children}
      </div>
    </>,
    document.getElementById("loginmodal")
  );
}

export default LoginSignUpModal;
