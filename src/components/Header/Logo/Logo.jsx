import React from "react";
import { NavLink } from "react-router-dom";
import { Navlogo } from "../../../assets/index";
function Logo() {
  return (
    <NavLink to={"/"} className="mx-4 w-[115px] h-[40px] shrink-0">
      <img src={Navlogo} className="flex justify-center items-center h-full " />
    </NavLink>
  );
}

export default Logo;
