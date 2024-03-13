import React, { useState } from "react";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./style.css";
import Profile from "./NavProfile/Profile";
import Trips from "./Trips/Trips";
import LoginSignUpModal from "../Modals/LoginSignUpModal/LoginSignUpModal";
import LoginSignUpForm from "../../pages/LoginSignUp/LoginSignUpForm";

function Header() {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal((prev) => !prev);
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
          <Profile toggleModal={toggleModal} />
        </div>
      </div>
      {showModal && (
        <LoginSignUpModal toggleModal={toggleModal}>
          <LoginSignUpForm toggleModal={toggleModal} />
        </LoginSignUpModal>
      )}
    </header>
  );
}

export default Header;
