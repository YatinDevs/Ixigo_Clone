import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./style.css";
import Profile from "./NavProfile/Profile";
import Trips from "./Trips/Trips";
import LoginSignUpModal from "../Modals/LoginSignUpModal/LoginSignUpModal";
import { useAuthContext } from "../../context/AuthProvider/AuthProvider";

function Header() {
  const { isLoggedIn, setShowLoginSignupForm, showLoginSignupForm, logOut } =
    useAuthContext();
  console.log(showLoginSignupForm);
  function toggleLoginModal() {
    console.log("toggle login");
    setShowLoginSignupForm((prev) => !prev);
  }
  return (
    <header className="w-full  h-16 top-0 bg-white shadow-sm ">
      <div className="w-full max-w-[1280px] mx-auto h-full flex items-center px-[10px] justify-between max-sm:px-1">
        <div className="flex items-center h-full">
          <Logo />
          <Navbar />
        </div>
        <div className="flex">
          <Trips />
          <Profile
            isLoggedIn={isLoggedIn}
            toggleLoginModal={toggleLoginModal}
          />
          {showLoginSignupForm && (
            <LoginSignUpModal toggleLoginModal={toggleLoginModal} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
