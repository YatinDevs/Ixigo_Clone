import React, { useState } from "react";
import { Modal } from "@mui/material";
import { useAuthContext } from "../../../context/AuthProvider/AuthProvider";

function Profile({ toggleModal }) {
  const { setShowLoginSignupForm } = useAuthContext(); // Destructure setShowLoginSignupForm from the context

  return (
    <>
      <button onClick={toggleModal}>
        <div className="border border-solid relative border-blue-500 rounded-lg flex truncate flex-auto items-center  w-[168px] h-11 px-[10px] gap-2 m-3  cursor-pointer max-sm:w-fit">
          <img
            src="https://edge.ixigo.com/st/nivas/_next/static/media/userFilled.12154510.svg"
            className=" inline-block w-6 h-6 nav-service-logo text-blue-500 rounded-full bg-blue-100"
            alt="User Icon"
          />

          <span className="text-blue-500 font-medium relative text-xs md:text-md text-ellipsis">
            LOGIN/SIGNUP
          </span>
        </div>
      </button>
    </>
  );
}

export default Profile;
