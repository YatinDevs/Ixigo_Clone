import React, { useState } from "react";
import userSvg from "../../../assets/svgs/user.svg";

function Profile({ toggleLoginModal, isLoggedIn }) {
  return (
    <>
      {!isLoggedIn && (
        <>
          <button onClick={toggleLoginModal}>
            <div className=" rounded-lg hover:text-orange-600   flex truncate flex-auto items-center  w-[168px] h-11 px-[10px] gap-2 m-3  cursor-pointer max-sm:w-fit">
              <img
                src={userSvg}
                className=" inline-block w-6 h-6  nav-service-logo  rounded-full "
                alt="User Icon"
              />

              <span className=" font-medium relative text-xs md:text-md text-ellipsis">
                LOGIN/SIGNUP
              </span>
            </div>
          </button>
        </>
      )}
    </>
  );
}

export default Profile;
