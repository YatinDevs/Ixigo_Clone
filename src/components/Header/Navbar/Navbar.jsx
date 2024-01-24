import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../../lazyLoadImage/Img";

function Navbar() {
  return (
    <nav className="nav-links bg-white relative flex h-full items-center gap-6 font-semibold text-slate-500 mx-5 max-lg:gap-0 max-lg:fixed max-lg:bottom-0 max-lg:h-16 max-lg:w-full max-lg:left-0 max-lg:mx-0 max-lg:px-5  max-lg:justify-between max-lg:shadowup z-10 ">
      <NavLink to={"/flights"} className="nav-item">
        <Img
          className="nav-service-logo "
          src="src\assets\navbar\flight_nav.svg"
        />
        <span>Flights</span>
      </NavLink>
      <NavLink to={"/hotels"} className="nav-item">
        <Img
          className="nav-service-logo "
          src="src\assets\navbar\train_nav.svg"
        />
        <span>Hotels</span>
      </NavLink>
      <NavLink to={"/trains"} className="nav-item">
        <Img
          className="nav-service-logo "
          src="src\assets\navbar\bus_nav.svg"
        />
        <span>Trains</span>
      </NavLink>
      <NavLink to={"/buses"} className="nav-item">
        <Img
          className="nav-service-logo"
          src="src\assets\navbar\hotel_nav.svg"
        />
        <span>Buses</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
