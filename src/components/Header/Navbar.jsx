import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to={"/flights"}>
        <span className="">Flights</span>
      </NavLink>
      <NavLink to={"/hotels"}>
        <span className="">Hotels</span>
      </NavLink>
      <NavLink to={"/trains"}>
        <span className="">Trains</span>
      </NavLink>
      <NavLink to={"/buses"}>
        <span className="">Buses</span>
      </NavLink>
    </nav>
  );
}

export default Navbar;
