import React, { useState } from "react";
import userSvg from "../../../assets/svgs/user.svg";
import { useAuthContext } from "../../../context/AuthProvider/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import DropMenu from "./DropMenu";

function Profile({ toggleLoginModal, isLoggedIn }) {
  // const user = JSON.parse(localStorage.getItem("userDetails"));
  // console.log(user);
  const { user, logOut } = useAuthContext();

  return (
    <>
      {!isLoggedIn ? (
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
      ) : (
        <div
          onClick={logOut}
          className="user  relative  rounded-lg truncate flex flex-auto items-center w-[172px] h-11 px-[10px] gap-2 m-3 cursor-pointer max-sm:w-fit overflow-visible"
        >
          <span className="logo-profile inline-block w-8 h-8 logo-nav mr-2"></span>
          <span className="text-orange-500 font-medium text-md text-ellipsis text-center ">
            Hey, {user?.name.split(" ")[0] || "User"}
          </span>
          {/* <div className="logout absolute top-0 left-0  z-10 flex justify-center font-medium items-center w-full h-full bg-white text-blue-500 ">
            {" "}
            <IoMdLogOut /> Logout{" "}
          </div> */}
        </div>
      )}
    </>
  );
}

export default Profile;
