import React from "react";
import userSvg from "../../../assets/svgs/user.svg";
import { useAuthContext } from "../../../context/AuthProvider/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import { Modal } from "antd";
import "./style.css";
function Profile({ toggleLoginModal, isLoggedIn }) {
  const { user, logOut } = useAuthContext();

  const handleLogout = () => {
    Modal.confirm({
      title: "Confirm Logout",
      content: "Are you sure you want to logout?",
      okText: "Yes",
      okButtonProps: { className: "confirm-ok-button" },
      onOk() {
        logOut();
      },
    });
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          <button onClick={toggleLoginModal}>
            <div className="rounded-lg hover:text-orange-600 flex truncate flex-auto items-center w-[168px] h-11 px-[10px] gap-2 m-3 cursor-pointer max-sm:w-fit">
              <img
                src={userSvg}
                className="inline-block w-6 h-6 nav-service-logo rounded-full"
                alt="User Icon"
              />
              <span className="font-medium relative text-xs md:text-md text-ellipsis">
                LOGIN/SIGNUP
              </span>
            </div>
          </button>
        </>
      ) : (
        <div className="user relative rounded-lg truncate flex flex-auto items-center w-[172px] h-11 px-[10px] gap-2 m-3 cursor-pointer max-sm:w-fit overflow-visible">
          <span className="logo-profile inline-block w-8 h-8 logo-nav mr-2"></span>
          <span className="text-orange-500 font-medium  text-md text-ellipsis text-center">
            Hey, {user?.name.split(" ")[0] || "User"}
          </span>
          <button
            onClick={handleLogout}
            className="logout-button absolute top-0 right-0 z-10 flex justify-center font-medium items-center w-8 h-8 bg-white text-blue-500"
          >
            <IoMdLogOut />
          </button>
        </div>
      )}
    </>
  );
}

export default Profile;
