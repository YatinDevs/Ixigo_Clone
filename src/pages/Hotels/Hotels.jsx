import React from "react";
import PopularDestinations from "./HotelPage/PopularDestinations";
import WhyHotel from "./HotelPage/WhyHotel";
import SearchPanel from "./HotelPage/SearchPanel";

function Hotels() {
  return (
    <div className="mt-16">
      <SearchPanel />
      <WhyHotel />
      <PopularDestinations />
    </div>
  );
}

export default Hotels;
