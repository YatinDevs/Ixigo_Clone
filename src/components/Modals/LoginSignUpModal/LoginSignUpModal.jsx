import React from "react";
import { createPortal } from "react-dom";
import { IoMdCloseCircle } from "react-icons/io";
import LoginSignUpForm from "../../../pages/LoginSignUp/LoginForm";
import LoginForm from "../../../pages/LoginSignUp/LoginForm";

function LoginSignUpModal({ toggleLoginModal }) {
  const portalRoot = document.getElementById("modal");

  return createPortal(
    <>
      <div className="fixed top-0  left-0 w-full h-full backdrop-blur-sm bg-[rgba(71,85,105,0.7)] z-10"></div>
      <div className="flex justify-center items-center">
        <div className="fixed bg-white z-50 top-1/3 mx-5 rounded-lg   ">
          <button
            onClick={toggleLoginModal}
            className="absolute top-[0px] right-[-1px] text-xl"
          >
            <IoMdCloseCircle />
          </button>
          <LoginForm />
        </div>
      </div>
    </>,
    portalRoot
  );
}

export default LoginSignUpModal;
